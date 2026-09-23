import { socials } from "../../contents";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accentsoft">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
                Available for new opportunities
              </div>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
                Let&apos;s work{" "}
                <span className="bg-linear-to-br from-white via-accentsoft to-accent bg-clip-text text-transparent">
                  together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-mist sm:text-lg">
                Have a complex business application that needs a reliable
                frontend? I&apos;d love to hear what you&apos;re building and
                discuss how I can help.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accentsoft"
              >
                Start a conversation
                <span className="ml-2 text-base leading-none">↗</span>
              </a>
            </div>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-sm text-muted">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted/80">
              Find me online
            </span>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noreferrer"}
                className="group inline-flex items-center gap-2 transition hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/3 text-xs text-mist transition group-hover:border-accentsoft/40 group-hover:text-accentsoft">
                  {social.icon}
                </span>

                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
