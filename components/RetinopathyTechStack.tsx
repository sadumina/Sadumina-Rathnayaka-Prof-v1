"use client";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import LogoLoop from "@/components/LogoLoop";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrainCircuit, Eye, ScanEye, SlidersHorizontal } from "lucide-react";
import { useRef } from "react";
import { SiPython, SiPytorch, SiTensorflow } from "react-icons/si";

const stackLogos = [
  { node: <SiPython aria-hidden="true" />, title: "Python", hoverColor: "#3776ab" },
  { node: <SiTensorflow aria-hidden="true" />, title: "TensorFlow", hoverColor: "#e88a24" },
  { node: <SiPytorch aria-hidden="true" />, title: "PyTorch", hoverColor: "#ee4c2c" },
  { node: <span className="font-mono text-sm font-bold">CNN</span>, title: "Convolutional Neural Network" },
  { node: <span className="font-mono text-sm font-bold">CLAHE</span>, title: "Contrast enhancement" },
  { node: <span className="font-mono text-sm font-bold">Grad-CAM</span>, title: "Model explainability" },
];

const pipeline = [
  { label: "Fundus image", detail: "APTOS 2019", icon: Eye },
  { label: "Preprocessing", detail: "Crop · resize · enhance", icon: SlidersHorizontal },
  { label: "DenseNet121", detail: "ImageNet transfer learning", icon: BrainCircuit },
  { label: "Severity grade", detail: "One of five classes", icon: ScanEye },
];

export function RetinopathyTechStack() {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const preprocessRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const gradeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-pad relative overflow-hidden bg-[#fcfaf6]">
      <div className="container-pad relative z-10">
        <ScrollReveal>
          <div className="mb-9 max-w-3xl">
            <div className="mb-4 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                Technology & Study Insights
              </p>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl">
              The tools behind the study.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-6 border-y border-[#d9d3df] bg-white/70 py-3">
            <p className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.28em] text-[#7d7198]">
              Frameworks, preprocessing & explainability
            </p>
            <div className="h-[58px]">
              <LogoLoop
                logos={stackLogos}
                speed={45}
                direction="left"
                logoHeight={23}
                gap={38}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technologies and methods used in the diabetic retinopathy study"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 lg:grid-cols-12">
          <ScrollReveal className="h-full lg:col-span-7">
            <article className="relative h-full overflow-hidden rounded-2xl border border-[#d9d3df] bg-[#f7f4fa] p-6 shadow-[0_8px_24px_rgba(36,50,58,0.05)] sm:p-8">
              <div className="absolute -right-14 -top-14 size-48 rounded-full bg-[#e8e1f1] blur-3xl" />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7d7198]">
                    Study spotlight · Transfer learning
                  </p>
                  <span className="rounded-full border border-[#d9d3df] bg-white px-3 py-1 font-mono text-[10px] text-[#65707a]">
                    DenseNet121
                  </span>
                </div>
                <h3 className="mt-5 max-w-xl font-display text-2xl font-semibold tracking-[-0.02em] text-[#24323a] sm:text-3xl">
                  Reuse features. Keep information flowing.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#65707a]">
                  DenseNet connects each layer to the feature maps from earlier layers. This dense connectivity
                  promotes feature reuse and helps gradient flow through the network. In this study, DenseNet121
                  uses ImageNet transfer learning and is compared with three other CNN approaches.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["01", "Dense connections", "Layers receive earlier feature maps."],
                    ["02", "Feature reuse", "Previously learned patterns stay available."],
                    ["03", "Transfer learning", "ImageNet weights initialize the model."],
                  ].map(([number, title, description]) => (
                    <div key={number} className="rounded-xl border border-[#d9d3df] bg-white/90 p-4">
                      <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#7d7198]">{number}</p>
                      <h4 className="mt-3 text-sm font-semibold text-[#24323a]">{title}</h4>
                      <p className="mt-1 text-xs leading-5 text-[#65707a]">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <ScrollReveal delay={0.06}>
              <article className="h-full rounded-2xl border border-[#d9d3df] bg-white/90 p-6 shadow-[0_8px_24px_rgba(36,50,58,0.04)]">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.23em] text-[#7d7198]">
                  Image preparation
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#24323a]">Make retinal details clearer.</h3>
                <p className="mt-2 text-sm leading-6 text-[#65707a]">
                  The workflow crops dark borders, resizes and normalizes images, and explores CLAHE / Gaussian
                  blend contrast enhancement before training.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <article className="h-full rounded-2xl border border-[#d9d3df] bg-white/90 p-6 shadow-[0_8px_24px_rgba(36,50,58,0.04)]">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.23em] text-[#7d7198]">
                  Explainable predictions
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#24323a]">Look beyond the class label.</h3>
                <p className="mt-2 text-sm leading-6 text-[#65707a]">
                  Grad-CAM maps help visualize which image regions influenced a model prediction; they support
                  interpretation and are not clinical evidence.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-12">
            <div className="mb-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7d7198]">
                From image to severity class
              </p>
            </div>
            <div
              ref={pipelineRef}
              className="relative grid grid-cols-2 gap-3 rounded-2xl border border-[#d9d3df] bg-white/80 p-4 shadow-[0_8px_24px_rgba(36,50,58,0.04)] md:grid-cols-4 md:gap-4 md:p-6"
            >
              <AnimatedBeam
                className="hidden md:block"
                containerRef={pipelineRef}
                fromRef={imageRef}
                toRef={preprocessRef}
                animatedPulse
                curvature={26}
                duration={3}
                pathColor="#b7d4c8"
                pathOpacity={0.95}
                gradientStartColor="#7d7198"
                gradientStopColor="#6b9f88"
              />
              <AnimatedBeam
                className="hidden md:block"
                containerRef={pipelineRef}
                fromRef={preprocessRef}
                toRef={modelRef}
                animatedPulse
                curvature={-26}
                duration={3.5}
                delay={0.3}
                pathColor="#b7d4c8"
                pathOpacity={0.95}
                gradientStartColor="#7d7198"
                gradientStopColor="#6b9f88"
              />
              <AnimatedBeam
                className="hidden md:block"
                containerRef={pipelineRef}
                fromRef={modelRef}
                toRef={gradeRef}
                animatedPulse
                curvature={26}
                duration={3.2}
                delay={0.6}
                pathColor="#b7d4c8"
                pathOpacity={0.95}
                gradientStartColor="#7d7198"
                gradientStopColor="#6b9f88"
              />
              {pipeline.map((step, index) => {
                const Icon = step.icon;
                const ref = [imageRef, preprocessRef, modelRef, gradeRef][index];
                return (
                  <div
                    key={step.label}
                    ref={ref}
                    className="relative z-10 flex min-h-28 flex-col items-center justify-center rounded-xl border border-[#d9d3df] bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <span className="mb-2 flex size-9 items-center justify-center rounded-full bg-[#f0eaf5] text-[#7d7198]">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-xs font-semibold text-[#24323a]">{step.label}</span>
                    <span className="mt-1 text-[10px] leading-4 text-[#65707a]">{step.detail}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
