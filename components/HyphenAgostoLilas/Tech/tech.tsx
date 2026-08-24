import { testimonials } from "../data/testimonials";
import { Eyebrow, Section, SectionTitle } from "../ui/section";
import { TestimonialCard } from "./components/testimonialCard";
import { speaks } from "../data/speaks";


export function AgostoTech() {
  return (
    <Section id="tecnologia" eyebrow="tecnologia tem lado" width="wide">
      <SectionTitle>Tecnologia não precisa ser inimiga.</SectionTitle>

      <div className="max-w-3xl border-l-2 border-[#C9A6F5]/40 pl-5 md:pl-6">
        <div className="flex flex-col gap-4">
        {speaks.map((speak) => (
          <div key={speak.id} className="m-4">
            <h1 className="text-sm">{speak.text}</h1>
        <p className="mt-2 font-mono text-xs text-[#C9A6F5] italic">
          — {speak.label}
        </p>
          </div>
        ))}
        </div>

      </div>

      {/* Depoimentos — some da página enquanto a lista estiver vazia. */}
      {testimonials.length > 0 ? (
        <div className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Eyebrow>quem viveu, conta</Eyebrow>
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Depoimentos da nossa rede.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}

export default AgostoTech;
