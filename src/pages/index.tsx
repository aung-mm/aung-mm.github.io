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
  // Add your work experiences here
  {
    title: 'Security Engineer',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Leading security engineering initiatives and implementing defense operations.',
    technologies: ['Python', 'Security Tools', 'Cloud Security'],
  },
  // Add more experiences
];

// Certificates Data
interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const certificates: Certificate[] = [
  // Add your certificates here
  {
    name: 'CISSP',
    issuer: 'ISC2',
    date: '2023',
    link: 'https://...',
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
              Specializing in Security Engineering, Defense Operations, and streamlining
              cybersecurity processes to be more efficient and secure.
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
                src="https://github.com/aung-mm.png"
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
