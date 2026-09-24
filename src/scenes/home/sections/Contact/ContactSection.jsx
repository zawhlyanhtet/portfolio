import ExternalLinkIcon from "../../components/ExternalLinkIcon";
import { EMAIL_URL, socials } from "../../contents";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/3 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Available for new opportunities
              </div>

              <h2 className="mt-5 text-3xl font-bold text-primary sm:text-5xl">
                Let&apos;s work{" "}
                <span className="bg-linear-to-br from-primary via-accent to-accent bg-clip-text text-transparent">
                  together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-normal sm:text-lg">
                Have a complex business application that needs a reliable
                frontend? I&apos;d love to hear what you&apos;re building and
                discuss how I can help.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={EMAIL_URL}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,117,222,0.18)] transition hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Start a conversation
                <span className="ml-2" aria-hidden="true">
                  <ExternalLinkIcon />
                </span>
              </a>
            </div>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-primary/10 pt-5 text-sm text-muted">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted/80">
              Find me online
            </span>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noreferrer"}
                className="group inline-flex items-center gap-2 transition hover:text-primary"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/10 bg-primary/3 text-xs text-muted transition group-hover:border-accent/40 group-hover:text-accent">
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
