import screenLesDrivers from "../assets/screenLesDrivers.png";

const projects = [
  {
    slug: "pipeline-ci-cd",
    title: "Pipeline CI/CD",
    description: "Mise en place d’un pipeline GitHub Actions avec tests, build et déploiement.",
    tags: ["GitHub Actions", "CI/CD", "Docker"],
    url: "https://lesdrivers2-9jy1l6s6g-isma69s-projects.vercel.app/",
    image: screenLesDrivers,
  },
  {
    slug: "infra-as-code",
    title: "Infra as Code",
    description: "Provisionnement d’infrastructure reproductible avec Terraform et modules réutilisables.",
    tags: ["Terraform", "Cloud", "IaC"],
  },
  {
    slug: "monitoring-stack",
    title: "Monitoring & Observabilité",
    description: "Stack Prometheus/Grafana + alerting, tableaux de bord et SLOs.",
    tags: ["Prometheus", "Grafana", "Alerting"],
  },
];

export default projects;


