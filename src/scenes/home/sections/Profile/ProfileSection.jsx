export default function ProfileSection() {
  return (
    <section id="profile" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading tracking-tight">Profile</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
          <h3 className="max-w-md section-heading">
            Frontend engineer
            <br />
            focused on complex
            <br />
            products.
          </h3>

          <div className="max-w-2xl">
            <p className="lg:border-l lg:border-primary/10 lg:pl-10 text-lg leading-8 text-normal">
              I turn complex requirements into maintainable frontend
              applications and reusable components, with a focus on thoughtful
              architecture and practical usability.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
          <div className="py-5 sm:pr-6">
            <p className="text-2xl font-medium tracking-tight text-primary">
              3+
            </p>
            <p className="mt-1 text-sm text-muted">Years Experience</p>
          </div>

          <div className="py-5 sm:px-6">
            <p className="text-2xl font-medium tracking-tight text-primary">
              8+
            </p>
            <p className="mt-1 text-sm text-muted">Projects Delivered</p>
          </div>

          <div className="py-5 sm:px-6">
            <p className="text-2xl font-medium tracking-tight text-primary">
              Complex UI
            </p>
            <p className="mt-1 text-sm text-muted">Product Workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
