import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ParticleBackground from '../components/ParticleBackground';

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
    description: 'I hunt threats across global infrastructure and build detection systems that actually catch attackers. I created automated workflows to streamline the detection logic deployments and vulnerability management. I do security architecture reviews for engineering teams to ship secure products. When incidents happen, I investigate, contain, and eradicate the threats.',
    technologies: ['Threat Hunting', 'SIEM', 'Detection Engineering', 'Security Architecture', 'Vulnerability Management', 'Automation'],
  },
  {
    title: 'Cyber Security Officer',
    company: 'Sysnet System and Solutions Pte. Ltd',
    period: 'Oct 2022 - Feb 2024',
    description: 'I deployed enterprise security solutions—SIEM platforms, vulnerability scanners, and endpoint protection—that gave companies real visibility into their threats. I ran security assessments and compliance audits that helped clients meet regulatory requirements. I managed projects end-to-end and worked directly with customers to solve their security challenges.',
    technologies: ['SIEM', 'Vulnerability Management', 'Security Audits', 'Project Management', 'Network Hardening'],
  },
  {
    title: 'Cyber Security Engineer',
    company: 'Kernellix Co. Ltd',
    period: 'Jun 2019 - Sep 2022',
    description: 'I built SOC platforms from scratch and architected secure cloud infrastructure across AWS, GCP, and Azure. When breaches happened, I ran forensics investigations and incident response operations to contain the damage. I automated deployments with CI/CD pipelines and orchestrated containerized applications on Kubernetes. I designed security that scaled with the business.',
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
    link: 'https://www.credly.com/badges/your-cissp-badge',
  },
  {
    name: 'Certified Threat Hunting Professional (eCTHPv2)',
    issuer: 'INE',
    date: 'May 2025',
    link: 'https://www.credly.com/badges/your-ecthp-badge',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'Apr 2023',
    link: 'https://www.credly.com/badges/your-terraform-badge',
  },
  {
    name: 'Foundation Level Threat Intelligence Analyst',
    issuer: 'arcX',
    date: 'Mar 2023',
    link: 'https://www.credly.com/badges/your-arcx-badge',
  },
  {
    name: 'AWS Certified Security - Specialty',
    issuer: 'AWS',
    date: 'Dec 2021',
    link: 'https://www.credly.com/badges/your-aws-security-badge',
  },
  {
    name: 'AWS Certified Solution Architect - Associate',
    issuer: 'AWS',
    date: 'Sep 2019',
    link: 'https://www.credly.com/badges/your-aws-saa-badge',
  },
  {
    name: 'FireEye Partner Sales Engineer Certification for Helix Cloud Security (FSE)',
    issuer: 'FireEye',
    date: 'Sep 2021',
    link: 'https://www.credly.com/badges/your-fireeye-badge',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <ParticleBackground />
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
              <div>I simply just do cybersecurity. I spend most of my time building security tools and hunting adversaries. From threat hunting, incident response, creating tools that can defense against security threats, and AUTOMATION, I do all the cool stuffs.</div>
              My goal is to create things that are acutally useful and efficient when dealing with security threats. 
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
