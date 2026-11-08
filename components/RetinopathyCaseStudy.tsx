import { ScrollReveal } from "@/components/ScrollReveal";
import { RetinopathyClassificationFlow } from "@/components/RetinopathyClassificationFlow";
import { RetinopathyModelBento } from "@/components/RetinopathyModelBento";
import { RetinopathyTechStack } from "@/components/RetinopathyTechStack";
import type { ProjectItem } from "@/types/portfolio";
import { ArrowUpRight, Layers3, Users } from "lucide-react";

const workflow = [
  ["01", "Explore", "Review class distribution, image dimensions, and representative samples."],
  ["02", "Preprocess", "Crop dark borders, resize, enhance contrast, and normalize fundus images."],
  ["03", "Split", "Create stratified train, validation, and held-out test sets."],
  ["04", "Balance", "Apply class weighting to address the natural skew toward No DR cases."],
  ["05", "Train", "Compare all four architectures with matched data splits and augmentation."],
  ["06", "Explain", "Use Grad-CAM to inspect which retinal regions influence predictions."],
];

const team = [
  { name: "Bagya R M S", focus: "Custom CNN · Preprocessing pipeline" },
  { name: "Insath MMM", focus: "DenseNet121" },
  { name: "Gayathree M.G.K", focus: "EfficientNetB0" },
  { name: "Purijjala R W M A H", focus: "ResNet50 · Evaluation · Grad-CAM" },
];

const modelNames = ["Custom CNN", "DenseNet121", "EfficientNetB0", "ResNet50"];

export function RetinopathyCaseStudy({ project }: { project: ProjectItem }) {
  return (
    <>
      <RetinopathyClassificationFlow problem={project.problem} />

      <section className="section-pad relative overflow-hidden bg-[#f7f4fa]">
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                    Architecture Comparison
                  </p>
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl">
                  Four approaches, shared conditions.
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#d9d3df] bg-white px-3 py-2 font-mono text-[11px] text-[#65707a] sm:self-auto">
                <Layers3 className="size-4 text-[#7d7198]" />
                TensorFlow · PyTorch
              </div>
            </div>
          </ScrollReveal>

          <RetinopathyModelBento />
        </div>
      </section>

      <RetinopathyTechStack />

      <section className="section-pad relative overflow-hidden bg-[#fcfaf6]">
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                  Experimental Workflow
                </p>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl">
                From fundus image to model review.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#65707a] sm:text-base">
                The study uses the APTOS 2019 Blindness Detection training set: approximately 3,660 labeled RGB
                retinal images. Dataset files are not redistributed with the project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map(([number, title, description], index) => (
              <ScrollReveal key={number} delay={index * 0.04} className="h-full">
                <article className="h-full rounded-2xl border border-[#d9d3df] bg-white/90 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#7d7198]">{number}</p>
                    {index === 0 && <span className="size-2 rounded-full bg-[#c88769]" />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-[#24323a]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#65707a]">{description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 grid gap-8 rounded-2xl border border-[#d9d3df] bg-white/90 p-6 shadow-[0_10px_30px_rgba(36,50,58,0.04)] md:grid-cols-[0.8fr_1.2fr] md:p-8">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[#7d7198]">
                  Evaluation & Explainability
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#24323a]">
                  Measure performance. Inspect attention.
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#65707a]">
                  Quadratic Weighted Kappa is the primary metric for the ordered grades. Accuracy, per-class and
                  macro precision/recall/F1, one-vs-rest ROC-AUC, confusion matrices, parameter counts, and training
                  time provide additional comparisons. Grad-CAM is used to visualize influential retinal regions.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#d9d3df]">
                <div className="grid grid-cols-4 gap-3 bg-[#f7f4fa] px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#7d7198]">
                  <span>Model</span>
                  <span>Val. κ</span>
                  <span>Test κ</span>
                  <span>Accuracy</span>
                </div>
                {modelNames.map((model) => (
                  <div
                    key={model}
                    className="grid grid-cols-4 gap-3 border-t border-[#d9d3df] px-4 py-3 text-xs text-[#65707a]"
                  >
                    <span className="font-semibold text-[#24323a]">{model}</span>
                    <span>Pending</span>
                    <span>Pending</span>
                    <span>Pending</span>
                  </div>
                ))}
                <p className="border-t border-[#d9d3df] bg-[#fbf9fd] px-4 py-3 text-xs leading-5 text-[#65707a]">
                  Numerical results were not included in the supplied project summary and are intentionally not
                  estimated here.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-[#f7f4fa]">
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                    Team Contributions
                  </p>
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl">
                  A collaborative model study.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#65707a]">
                  Developed for the SE4050 Deep Learning module at SLIIT. Review the final notebooks in the
                  Finalize-Models branch.
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7d7198] transition hover:text-[#24323a]"
                >
                  Browse final notebooks <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {team.map((member, index) => (
                  <article key={member.name} className="rounded-2xl border border-[#d9d3df] bg-white/90 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-[#f0eaf5] text-[#7d7198]">
                        {index === 0 ? <Users className="size-4" /> : <span className="font-mono text-xs">0{index + 1}</span>}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-[#24323a]">{member.name}</h3>
                        <p className="mt-1 text-xs leading-5 text-[#65707a]">{member.focus}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
