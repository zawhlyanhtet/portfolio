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
        <div className="mt-10 rounded-xl bg-white p-6 sm:p-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow-small text-accent">Shared platform</p>
            <p className="supporting-heading mt-3 text-primary">
              Two user groups with configurable role-based permissions
            </p>
          </div>
          <div className="mx-auto mt-6 h-6 w-px bg-primary/20" />
          <div className="grid gap-4 md:grid-cols-2 md:gap-0 md:[&>*:first-child]:pr-6 md:[&>*:last-child]:pl-6">
            <div className="p-5">
              <p className="text-center eyebrow-small text-accent">
                Platform users
              </p>
              <div className="mt-5 border-t border-primary/10 pt-4">
                <p className="supporting-heading text-primary">
                  Platform-side roles
                </p>
                <p className="mt-3 text-sm leading-6 text-normal">
                  Managed organization settings, stores, templates, and user
                  access across the platform.
                </p>
              </div>
            </div>

            <div className="p-5">
              <p className="text-center eyebrow-small text-accent">
                Client users
              </p>
              <div className="mt-5 border-t border-primary/10 pt-4">
                <p className="supporting-heading text-primary">
                  Client-side roles
                </p>
                <p className="mt-3 text-sm leading-6 text-normal">
                  Worked inside each organization to manage stores, business
                  data, and user workflows within their assigned scope.
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
