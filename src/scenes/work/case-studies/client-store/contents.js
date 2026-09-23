import storeListScreenshot from "../../../../assets/client-store-management-store-list.png";
import templateBuilderScreenshot from "../../../../assets/client-store-management-template-builder.png";
import roleBasedAccessScreenshot from "../../../../assets/client-store-management-permission-settings.png";
import organizationManagementScreenshot from "../../../../assets/client-store-management-organization-management.png";

const productPractice = [
  {
    title: "Client organization management",
    screenshot: organizationManagementScreenshot,
    alt: "Client organization management interface showing organization records and actions",
    description:
      "Platform-level organization management with search, organization actions, and access to related stores and accounts.",
  },
  {
    title: "Store management workspace",
    screenshot: storeListScreenshot,
    alt: "Store management interface showing operational data",
    description:
      "A data-heavy store management interface with search, filtering, sorting, column controls, and CSV import/export workflows.",
  },
  {
    title: "Template & form builder",
    screenshot: templateBuilderScreenshot,
    alt: "Configurable form builder interface",
    description:
      "A reusable template system where authorized users could create forms, add inputs, configure fields, and control the information captured for stores.",
  },
  {
    title: "Platform role access settings",
    screenshot: roleBasedAccessScreenshot,
    alt: "Platform-level role configuration showing permissions and access scopes for platform users across client organizations",
    description:
      "Platform-level role configuration for defining permissions across client organizations, including access to stores, accounts, and operational controls.",
  },
];

const productChallenges = [
  {
    title: "Role-driven workflows",
    description:
      "Different roles could have different actions and field visibility, making it difficult to keep workflows consistent while respecting each user's role and scope.",
  },
  {
    title: "Evolving data structures",
    description:
      "Store information was not static. Forms and fields could vary between configurations, requiring the frontend to adapt without becoming fragile or inconsistent.",
  },
  {
    title: "High-volume operations",
    description:
      "The platform supported high-volume operational work, making it important to keep everyday data management responsive, clear, and easy to navigate.",
  },
];

const roleHighlights = [
  {
    title: "Frontend architecture",
    description:
      "Built reusable components and shared patterns for complex, data-heavy workflows.",
  },
  {
    title: "Business-rule translation",
    description:
      "Translated business requirements and API behavior into frontend logic, validation, interaction patterns, and permission-aware states.",
  },
  {
    title: "Cross-workflow consistency",
    description:
      "Applied shared patterns across platform and client workflows so new functionality could be developed without creating isolated, one-off interfaces.",
  },
];

const engineeringWork = [
  {
    title: "Permission-aware UX",
    description:
      "Implemented reusable frontend logic that translated role rules into visible actions, workflow states, and field-level visibility so each user only saw what they were allowed to do and see.",
  },
  {
    title: "Dynamic form configuration",
    description:
      "Built a reusable form builder that allowed authorized users to create, configure, and reorder store fields without introducing one-off screens for every new data model.",
  },
  {
    title: "Data-heavy interfaces",
    description:
      "Created reusable table and admin patterns for large operational datasets with search, filtering, sorting, column controls, and CSV workflows, keeping high-volume tasks responsive and consistent.",
  },
];

const outcomes = [
  {
    title: "Reusable workflows",
    description:
      "Shared components and patterns reduced duplication across platform and client workflows.",
  },
  {
    title: "Configurable operations",
    description:
      "Template-driven forms allowed store data structures to evolve without requiring separate interfaces for every configuration.",
  },
  {
    title: "Clearer access control",
    description:
      "Role and organization rules were reflected consistently across actions, workflows, and field visibility.",
  },
];

export {
  productPractice,
  productChallenges,
  roleHighlights,
  engineeringWork,
  outcomes,
};
