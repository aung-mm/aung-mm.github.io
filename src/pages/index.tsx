import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Work Experience Data
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: 'Security Operations Center (SOC) Analyst II',
    company: 'ExpressVPN',
    period: 'Feb 2024 - Present',
    description: 'Performs proactive security monitoring and threat hunting across organizational infrastructure. Develops and optimizes detection rules and monitoring logic. Conducts security architecture reviews and collaborates with engineering teams to assess security vulnerabilities.',
    technologies: ['Threat Hunting', 'SIEM', 'Detection Engineering', 'Security Architecture', 'Vulnerability Management', 'Automation'],
  },
  {
    title: 'Cyber Security Officer',
    company: 'Sysnet System and Solutions Pte. Ltd',
    period: 'Oct 2022 - Feb 2024',
    description: 'Implemented security solutions for enterprise companies including SIEM, Vulnerability Management, and Endpoint Security. Coordinated security assessment projects and conducted internal security audits for compliance. Led projects from start to close while maintaining client relationships.',
    technologies: ['SIEM', 'Vulnerability Management', 'Security Audits', 'Project Management', 'Network Hardening'],
  },
  {
    title: 'Cyber Security Engineer',
    company: 'Kernellix Co. Ltd',
    period: 'Jun 2019 - Sep 2022',
    description: 'Designed and maintained secure cloud and on-premises infrastructure. Developed and deployed SOC solutions tailored to enterprise needs. Executed digital forensics and incident response operations. Built scalable, secure cloud architectures on AWS, GCP, and Azure.',
    technologies: ['Cloud Security', 'SOC Development', 'DFIR', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'AWS', 'Azure', 'GCP'],
  },
];

// Certificates Data
interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: '(ISC)²',
    date: 'May 2022',
  },
  {
    name: 'Certified Threat Hunting Professional (eCTHPv2)',
    issuer: 'INE',
    date: 'May 2025',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'Apr 2023',
  },
  {
    name: 'Foundation Level Threat Intelligence Analyst',
    issuer: 'arcX',
    date: 'Mar 2023',
  },
  {
    name: 'AWS Certified Security - Specialty',
    issuer: 'AWS',
    date: 'Dec 2021',
  },
  {
    name: 'AWS Certified Solution Architect - Associate',
    issuer: 'AWS',
    date: 'Sep 2019',
  },
  {
    name: 'FireEye Partner Sales Engineer Certification for Helix Cloud Security (FSE)',
    issuer: 'FireEye',
    date: 'Sep 2021',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              Aung Myint Myat
            </Heading>
            <p className={styles.heroSubtitle}>
              Cybersecurity Professional
            </p>
            <p className={styles.heroDescription}>
              With a strong desire to be excellent in information security, I invest my knowledge
              and expertise as an information security professional. Specializing in Security Operations,
              Threat Hunting, Cloud Security, DevSecOps, and Automation with multiple years of industry experience.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className="button button--primary button--lg"
                to="/blog">
                Read Blog
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/projects">
                View Projects
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.avatarPlaceholder}>
              <img
                src="/img/profile.jpg"
                alt="Aung Myint Myat"
                className={styles.avatar}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WorkExperience() {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Work Experience
        </Heading>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>{exp.period}</div>
                <Heading as="h3" className={styles.experienceTitle}>
                  {exp.title}
                </Heading>
                <div className={styles.experienceCompany}>{exp.company}</div>
                <p className={styles.experienceDescription}>{exp.description}</p>
                {exp.technologies && (
                  <div className={styles.technologies}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  if (certificates.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Certifications
        </Heading>
        <div className={styles.certificatesGrid}>
          {certificates.map((cert, idx) => (
            <div key={idx} className={styles.certificateCard}>
              <Heading as="h3" className={styles.certificateName}>
                {cert.name}
              </Heading>
              <div className={styles.certificateIssuer}>{cert.issuer}</div>
              <div className={styles.certificateDate}>{cert.date}</div>
              {cert.link && (
                <Link href={cert.link} className={styles.certificateLink}>
                  View Credential →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Cybersecurity Professional specializing in Security Engineering, Defense Operations, and Process Optimization">
      <HomepageHeader />
      <main>
        <WorkExperience />
        <Certificates />
      </main>
    </Layout>
  );
}
