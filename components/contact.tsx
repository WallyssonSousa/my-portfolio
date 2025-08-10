export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <h2 className="section-title mb-5 text-[22px]">Contato</h2>
      <div className="contact section-fade flex items-center gap-5 transition-all duration-700 will-change-[transform,opacity,filter] opacity-0 translate-y-8 blur-[4px]">
        <div>
          <div className="font-bold">Vamos conversar?</div>
          <div className="mt-2 text-[#9aa4b2]">
            E-mail:{" "}
            <a
              className="underline decoration-white/20 underline-offset-4 hover:text-white"
              href="mailto:seu@email.com"
            >
              seu@email.com
            </a>
          </div>
        </div>
        <div className="ml-auto flex gap-3">
          <a
            className="rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-4 py-3 transition-transform duration-200 hover:-translate-y-[1px]"
            href="#"
          >
            GitHub
          </a>
          <a
            className="rounded-lg border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-4 py-3 transition-transform duration-200 hover:-translate-y-[1px]"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
