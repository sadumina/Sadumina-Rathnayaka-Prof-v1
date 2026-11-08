"use client";

import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import Stepper, { Step } from "@/components/Stepper";
import { ArrowRight, BrainCircuit, Eye, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const stages = [
  { stage: "00", label: "No DR", description: "No visible signs of retinopathy" },
  { stage: "01", label: "Mild NPDR", description: "Microaneurysms present" },
  { stage: "02", label: "Moderate NPDR", description: "More extensive vascular damage" },
  { stage: "03", label: "Severe NPDR", description: "Widespread blood vessel blockage" },
  { stage: "04", label: "Proliferative DR", description: "Abnormal new vessel growth" },
];

const modelDetails = [
  {
    number: "01",
    name: "Custom CNN",
    approach: "Trained from scratch",
    detail: "Baseline used to compare against transfer learning.",
    emphasis: false,
  },
  {
    number: "02",
    name: "DenseNet121",
    approach: "ImageNet transfer learning",
    detail: "Dense connections encourage feature reuse and gradient flow.",
    emphasis: true,
  },
  {
    number: "03",
    name: "EfficientNetB0",
    approach: "ImageNet transfer learning",
    detail: "Compound scaling balances depth, width, and resolution.",
    emphasis: false,
  },
  {
    number: "04",
    name: "ResNet50",
    approach: "ImageNet transfer learning",
    detail: "Residual shortcuts support training a deeper network.",
    emphasis: false,
  },
];

const preprocessing = [
  ["Border crop", "Remove dark borders around the retinal field."],
  ["Resize", "Standardize image dimensions for model input."],
  ["Contrast", "Apply CLAHE / Gaussian blend enhancement."],
  ["Normalize", "Scale image values consistently before training."],
];

export function RetinopathyClassificationFlow({ problem }: { problem: string }) {
  return (
    <section id="architecture" className="section-pad relative overflow-hidden bg-[#fcfaf6]">
      <SectionAura side="left" />
      <div className="container-pad relative z-10">
        <ScrollReveal>
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                The Classification Problem
              </p>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl md:text-5xl">
              Five grades. One retinal image.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#65707a] sm:text-base">
              {problem} The severity labels follow an ordered scale, so evaluation considers how far a prediction is
              from the reference grade.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7d7198] sm:text-xs">
                Image-to-grade workflow
              </p>
              <span className="rounded-full border border-[#d9d3df] bg-white px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#65707a] sm:text-[10px]">
                Research pipeline
              </span>
            </div>

            <Stepper
              initialStep={1}
              backButtonText="Back"
              nextButtonText="Continue"
              completeButtonText="Start over"
              indicator="numbers"
              orientation="horizontal"
              transition="slide"
              width="100%"
              radius={12}
              frame
              linear={false}
              disableStepIndicators={false}
              showFooter
            >
              <Step title="APTOS Dataset">
                <StepIntro
                  icon={<Eye className="size-5" />}
                  eyebrow="01 · Image data"
                  title="Start with retinal fundus images."
                  description="The study uses the APTOS 2019 Blindness Detection training set: approximately 3,660 labeled RGB retinal images across five severity grades."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <InfoTile label="Source" value="APTOS 2019" />
                  <InfoTile label="Image type" value="RGB fundus" />
                  <InfoTile label="Dataset access" value="Download separately" />
                </div>
                <p className="mt-4 text-xs leading-5 text-[#65707a]">
                  Dataset files are not included in the repository; access is subject to Kaggle competition terms.
                </p>
              </Step>

              <Step title="Preprocessing">
                <StepIntro
                  icon={<SlidersHorizontal className="size-5" />}
                  eyebrow="02 · Image preparation"
                  title="Standardize the retinal view."
                  description="A consistent preprocessing pipeline prepares images for a fair architecture comparison."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {preprocessing.map(([title, detail], index) => (
                    <motion.article
                      key={title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className="rounded-xl border border-[#d9d3df] bg-white p-4"
                    >
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7d7198]">
                        0{index + 1}
                      </p>
                      <h4 className="mt-2 text-sm font-semibold text-[#24323a]">{title}</h4>
                      <p className="mt-1 text-xs leading-5 text-[#65707a]">{detail}</p>
                    </motion.article>
                  ))}
                </div>
              </Step>

              <Step title="Model Comparison">
                <StepIntro
                  icon={<BrainCircuit className="size-5" />}
                  eyebrow="03 · Four CNN architectures"
                  title="Compare a baseline with pretrained models."
                  description="The same stratified splits and augmentation strategy support a more consistent comparison across architectures."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {modelDetails.map((model, index) => (
                    <motion.article
                      key={model.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className={`rounded-xl border p-4 ${
                        model.emphasis
                          ? "border-[#cfc2dd] bg-gradient-to-br from-[#f7f4fa] to-white"
                          : "border-[#d9d3df] bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7d7198]">
                            {model.number} · {model.approach}
                          </p>
                          <h4 className="mt-2 text-sm font-semibold text-[#24323a]">{model.name}</h4>
                        </div>
                        {model.emphasis && (
                          <span className="rounded-full border border-[#d9d3df] bg-white px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-[#7d7198]">
                            Feature reuse
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs leading-5 text-[#65707a]">{model.detail}</p>
                    </motion.article>
                  ))}
                </div>
              </Step>

              <Step title="Severity Grades">
                <StepIntro
                  icon={<ArrowRight className="size-5" />}
                  eyebrow="04 · Ordered classification"
                  title="Five clinically defined severity stages."
                  description="Predictions are evaluated as ordered grades, where larger differences from the reference class matter more."
                />
                <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {stages.map((stage, index) => (
                    <motion.article
                      key={stage.stage}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className="rounded-xl border border-[#d9d3df] bg-white p-4"
                    >
                      <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#7d7198]">
                        {stage.stage}
                      </p>
                      <h4 className="mt-3 text-sm font-semibold text-[#24323a]">{stage.label}</h4>
                      <p className="mt-1 text-xs leading-5 text-[#65707a]">{stage.description}</p>
                    </motion.article>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-[#ead8c9] bg-[#fbf4ee] p-4 text-xs leading-5 text-[#745f51]">
                  This is an academic model-comparison project, not a medical device or a substitute for assessment by
                  a qualified eye-care professional.
                </div>
              </Step>
            </Stepper>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function StepIntro({
  icon,
  eyebrow,
  title,
  description,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#f0eaf5] text-[#7d7198]">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#7d7198]">{eyebrow}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-[#24323a] sm:text-2xl">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#65707a]">{description}</p>
      </div>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#d9d3df] bg-white p-4">
      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7d7198]">{label}</p>
      <p className="mt-2 text-sm font-semibold text-[#24323a]">{value}</p>
    </div>
  );
}
