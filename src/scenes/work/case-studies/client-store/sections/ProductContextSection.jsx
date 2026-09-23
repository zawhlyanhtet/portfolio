import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

export default function ProductContextSection() {
  return (
    <Section>
      <div className="max-w-4xl">
        <SectionHeader
          eyebrow="Product context"
          title="One shared platform for multiple client organizations."
          description="The product connected an internal platform team with multiple client
          organizations in one shared system. Platform users managed platform
          operations, while client users worked with stores and business data
          within their own organization."
        />
      </div>
      <div className="max-w-4xl">
        <div className="mt-10 rounded-2xl border border-white/10 bg-black/15 p-6 sm:p-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow-small text-accentsoft">Shared platform</p>
            <p className="supporting-heading mt-3">
              Two user groups with configurable role-based permissions
            </p>
          </div>

          <div className="mx-auto mt-6 h-6 w-px bg-white/20" />

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="border border-white/10 bg-white/2 p-5">
              <p className="text-center eyebrow-small text-accentsoft">
                Platform users
              </p>
              <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
                <p className="supporting-heading">
                  Multiple roles with configurable permissions
                </p>
                <p className="text-sm leading-6 text-muted">
                  Platform operations: client organizations, templates, stores,
                  and user access.
                </p>
              </div>
            </div>
            <div className="border border-accent/40 bg-accent/8 p-5">
              <p className="text-center eyebrow-small text-accentsoft">
                Client users
              </p>
              <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
                <p className="supporting-heading">
                  Multiple roles with configurable permissions
                </p>
                <p className="text-sm leading-6 text-muted">
                  Organization-scoped operations: stores, business data, and
                  client users.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="section-lead mt-8">
          On the platform side, authorized administrators could configure what
          platform-side roles could do across client organizations. Within each
          client organization, authorized administrators could configure
          permissions for client-side roles within their own organization.
        </p>

        <p className="section-lead mt-8">
          Within a client organization, permissions controlled both available
          actions and data visibility. A user could access a store but still be
          restricted from viewing specific fields within that store. For
          example, one role might be able to view a store’s phone number while
          another role accessing the same store could not. This allowed each
          organization to control how its business data was exposed to different
          roles.
        </p>

        <p className="section-lead mt-6">
          As a result, the frontend needed to consistently reflect organization
          boundaries, role-based permissions, and field-level visibility across
          stores, forms, tables, user management, and other workflows. These
          rules had to remain consistent and reusable across different client
          configurations.
        </p>
      </div>
    </Section>
  );
}
