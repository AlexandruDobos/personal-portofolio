import { motion } from "framer-motion";

function About() {
  return (
    <section className="container mx-auto py-20 w-full md:w-1/2 px-8 border rounded-lg shadow-lg mt-20 mb-5">
      <h2 className="text-3xl font-bold text-center">About Me</h2>

      <motion.p
        className="mt-4 text-gray-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        I am <strong>Alexandru Dobos</strong>, a <strong>Software Engineer</strong> with 3+ years of experience across
        backend development, secure API design, and data-driven platforms. I focus on <strong>Java &amp; Spring Boot</strong>,
        <strong> REST/OpenAPI</strong>, and <strong>microservices</strong>, and I’m comfortable across <strong>Python/Flask</strong>,
        <strong> React</strong>, <strong>SQL (PostgreSQL/MySQL)</strong>, <strong>Docker</strong>, and <strong>RabbitMQ</strong>.
        I care about clean code, scalability, and delivering measurable impact in Agile teams.
      </motion.p>

      <motion.p
        className="mt-4 text-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        At <strong>Infosys</strong>, I’ve delivered a <strong>cybersecurity analytics</strong> platform on
        <strong> Apache Superset (Flask AppBuilder)</strong>, aggregating vulnerabilities from <strong>Tenable Nessus</strong>,
        <strong> Microsoft Defender for Endpoint</strong>, <strong>AWS</strong>, and <strong>Azure</strong>. I implemented
        <strong> MFA/LDAP</strong>, <strong>RBAC</strong> with tag-based visibility, CSV import/export, and interactive dashboards;
        designed <strong>REST APIs</strong> with OpenAPI; built <strong>Spring Boot microservices</strong> (Docker, RabbitMQ)
        with <strong>Hibernate/JPA</strong> on MySQL/PostgreSQL; added tracing with <strong>Zipkin</strong>; set up
        <strong> CI/CD</strong> (Jenkins) and <strong>secrets</strong> via HashiCorp Vault.
      </motion.p>

      <motion.p
        className="mt-4 text-gray-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Recent highlights: integrated <strong>LLM/NLP</strong> (Llama-based) to generate concise 8-15-word summaries for CVEs
        and scanner findings, and created a <strong>custom risk-score model</strong> (beyond CVSS) that improves remediation
        prioritization and TVM workflows. I value reliability and quality through <strong>JUnit/Mockito</strong> testing and
        pragmatic performance monitoring.
      </motion.p>

      <motion.p
        className="mt-4 text-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <strong>Skills:</strong> Java (primary), Spring Boot, REST/OpenAPI, Microservices, Hibernate/JPA,
        PostgreSQL/MySQL, RabbitMQ, Docker, Apache Superset. Familiar with React, TypeScript, Tailwind, AWS, Azure.
      </motion.p>
      <motion.p
        className="mt-4 text-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <strong> Education:</strong> M.Sc. E-Business (2022–2024, ASE Bucharest) and B.Sc. Computer Science (2019–2022, UAIC Iași).
      </motion.p>
    </section>
  );
}

export default About;
