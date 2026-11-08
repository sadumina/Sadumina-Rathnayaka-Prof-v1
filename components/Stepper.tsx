"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Children,
  isValidElement,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type StepProps = {
  title: string;
  children: ReactNode;
};

type StepperProps = {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  completeButtonText?: string;
  indicator?: "numbers" | "dots";
  orientation?: "horizontal" | "vertical";
  transition?: "slide" | "fade" | "none";
  width?: number | string;
  radius?: number;
  frame?: boolean;
  linear?: boolean;
  disableStepIndicators?: boolean;
  showFooter?: boolean;
  className?: string;
};

export function Step({ children }: StepProps) {
  return <>{children}</>;
}

export function Stepper({
  children,
  initialStep = 1,
  onStepChange,
  onFinalStepCompleted,
  backButtonText = "Back",
  nextButtonText = "Continue",
  completeButtonText = "Complete",
  indicator = "numbers",
  orientation = "horizontal",
  transition = "slide",
  width = "100%",
  radius = 24,
  frame = true,
  linear = false,
  disableStepIndicators = false,
  showFooter = true,
  className,
}: StepperProps) {
  const steps = Children.toArray(children).filter(
    (child): child is ReactElement<StepProps> =>
      isValidElement<StepProps>(child) && typeof child.props.title === "string"
  );
  const stepCount = steps.length;
  const startingIndex = Math.min(Math.max(initialStep - 1, 0), Math.max(stepCount - 1, 0));
  const [activeIndex, setActiveIndex] = useState(startingIndex);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const activeStep = steps[activeIndex];
  const isHorizontal = orientation === "horizontal";
  const containerStyle: CSSProperties = {
    width,
    maxWidth: "100%",
    borderRadius: radius,
  };

  const changeStep = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= stepCount || nextIndex === activeIndex) return;
    if (linear && nextIndex > activeIndex + 1) return;
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
    onStepChange?.(nextIndex + 1);
  };

  const goNext = () => {
    if (activeIndex === stepCount - 1) {
      onFinalStepCompleted?.();
      setDirection(-1);
      setActiveIndex(0);
      onStepChange?.(1);
      return;
    }
    changeStep(activeIndex + 1);
  };

  const slideOffset = prefersReducedMotion || transition !== "slide" ? 0 : direction * 24;
  const transitionDuration = prefersReducedMotion || transition === "none" ? 0 : 0.28;

  return (
    <div
      style={containerStyle}
      className={cn(
        "relative isolate overflow-hidden border border-[#d9d3df] bg-white/90 shadow-[0_12px_36px_rgba(36,50,58,0.055)]",
        frame ? "p-4 sm:p-6 lg:p-7" : "p-0",
        className
      )}
    >
      <div className="flex min-h-[400px] flex-col sm:min-h-[420px]">
      {!disableStepIndicators && (
        <div
          className={cn(
            "relative z-10 mb-6 grid gap-2 sm:mb-7 sm:gap-3",
            isHorizontal ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1"
          )}
        >
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const isComplete = index < activeIndex;
            const isLocked = linear && index > activeIndex;

            return (
              <button
                key={`${step.props.title}-${index}`}
                type="button"
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${index + 1}: ${step.props.title}`}
                disabled={isLocked}
                onClick={() => changeStep(index)}
                className={cn(
                  "group relative z-10 flex min-h-[58px] min-w-0 items-center gap-2.5 rounded-lg border px-3 py-3 text-left transition-colors duration-200 sm:min-h-[64px] sm:gap-3 sm:px-4",
                  isActive
                    ? "border-[#b8aaca] bg-[#f7f4fa] shadow-sm"
                    : isComplete
                      ? "border-[#c7ddd4] bg-[#f7fbf8]"
                      : "border-[#e8e3eb] bg-white/75 hover:border-[#cfc2dd]",
                  isLocked && "cursor-not-allowed opacity-45"
                )}
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] font-semibold transition-colors",
                    isActive
                      ? "border-[#7d7198] bg-[#7d7198] text-white"
                      : isComplete
                        ? "border-[#8bab9a] bg-[#e8f1ed] text-[#527c69]"
                        : "border-[#d9d3df] bg-white text-[#7d7198]"
                  )}
                >
                  {isComplete ? <Check className="size-4" /> : indicator === "numbers" ? `0${index + 1}` : null}
                  {indicator === "dots" && !isComplete && <span className="size-2 rounded-full bg-current" />}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.17em] text-[#7d7198] sm:text-[9px]">
                    Step 0{index + 1}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block truncate text-[11px] font-semibold sm:text-xs",
                      isActive ? "text-[#24323a]" : "text-[#65707a]"
                    )}
                  >
                    {step.props.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="relative z-10 flex-1 overflow-hidden px-1 pb-4 sm:px-2">
        {activeStep ? (
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.section
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: slideOffset, filter: prefersReducedMotion ? "blur(0px)" : "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: slideOffset * -0.5, filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)" }}
              transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1] }}
              aria-labelledby={`step-title-${activeIndex}`}
              className="w-full"
            >
              <h3 id={`step-title-${activeIndex}`} className="sr-only">
                {activeStep.props.title}
              </h3>
              {activeStep.props.children}
            </motion.section>
          </AnimatePresence>
        ) : (
          <p className="text-sm text-[#65707a]">Add steps to describe the project workflow.</p>
        )}
      </div>

      {showFooter && stepCount > 0 && (
        <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#eeeaf2] pt-4 sm:pt-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#7d7198] sm:text-[10px]">
            {activeIndex + 1} of {stepCount} research steps
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => changeStep(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="inline-flex min-w-24 items-center justify-center gap-2 border border-[#7d7198]/40 bg-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7d7198] transition hover:border-[#24323a] hover:text-[#24323a] disabled:cursor-not-allowed disabled:opacity-40 sm:text-xs"
            >
              <ArrowLeft className="size-3.5" />
              {backButtonText}
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex min-w-32 items-center justify-center gap-2 bg-[#c7ddd4] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#24323a] transition hover:bg-[#b5d1c5] sm:text-xs"
            >
              {activeIndex === stepCount - 1 ? completeButtonText : nextButtonText}
              {activeIndex < stepCount - 1 && <ArrowRight className="size-3.5" />}
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Stepper;
