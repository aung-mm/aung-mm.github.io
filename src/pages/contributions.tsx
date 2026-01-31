import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ParticleBackground from '../components/ParticleBackground';

interface Contribution {
  title: string;
  type: 'Talk' | 'Presentation' | 'Workshop' | 'Panel';
  event: string;
  date: string;
  description: string;
  link?: string;
  slides?: string;
  video?: string;
}

const contributions: Contribution[] = [
  {
    title: 'macOS Incident Response',
    type: 'Presentation',
    event: 'BSides Myanmar 2025',
    date: '2025-01-15',
    description: 'Comprehensive guide to macOS incident response, covering forensic techniques, artifact collection, and investigation methodologies specific to macOS environments.',
    slides: '/slides/macos-ir-bsides-2025.pptx',
  },
  {
    title: 'Not So Boring SOC',
    type: 'Talk',
    event: 'Barcamp Myanmar 2025',
    date: '2025-01-10',
    description: 'Making Security Operations Centers more engaging and effective through automation, gamification, and modern operational practices.',
    slides: '/slides/not-so-boring-soc-barcamp-2025.pptx',
  },
  {
    title: 'Advanced Threat Detection Techniques',
    type: 'Presentation',
    event: 'NDSS 2025',
    date: '2025-01-05',
    description: 'Presentation on advanced threat detection methodologies and their practical implementation in enterprise security operations.',
    slides: '/slides/ndss-2025-presentation.pptx',
  },
  {
    title: 'Investigating Lumma Stealer Malware',
    type: 'Presentation',
    event: 'BSides Myanmar 2024',
    date: '2024-11-01',
    description: 'Deep dive analysis of Lumma Stealer malware, covering its infection vectors, persistence mechanisms, and detection strategies.',
    slides: '/slides/lumma-stealer-bsides-2024.pptx',
  },
  {
    title: 'Applied Machine Learning in Cyber Security',
    type: 'Talk',
    event: 'BSides Myanmar 2023',
    date: '2023-11-01',
    description: 'Explored practical applications of machine learning in cybersecurity operations, including threat detection, anomaly detection, and automated response systems.',
    slides: '/slides/ml-cybersecurity-bsides-2023.pptx',
  },
  {
    title: "What's in the SOC",
    type: 'Talk',
    event: 'Cybergon',
    date: '2022-09-01',
    description: 'Discussed SOC components, job roles, and how to utilize open-source security frameworks to build effective security operations capabilities.',
    slides: '/slides/whats-in-soc-cybergon-2022.pptx',
  },
  {
    title: 'Building an Open-Source SOC Platform',
    type: 'Presentation',
    event: 'BSides Myanmar 2020',
    date: '2020-11-01',
    description: 'Demonstrated how to leverage open-source solutions and frameworks to build and run a complete Security Operations Center platform.',
    slides: '/slides/opensource-soc-bsides-2020.pptx',
  },
  {
    title: 'AWS Cloud Security and Threat Detection',
    type: 'Workshop',
    event: 'AWS User Group Myanmar',
    date: '2020-05-01',
    description: 'Discussed AWS security features and best practices. Demonstrated detection of malicious activities on AWS based on the Capital One data breach case study.',
    slides: '/slides/aws-security-awsug-2020.pptx',
  },
];

function ContributionCard({ contribution }: { contribution: Contribution }) {
  return (
    <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h3 style={{ margin: 0 }}>{contribution.title}</h3>
        <span
          style={{
            padding: '0.25rem 0.75rem',
            borderRadius: '4px',
            backgroundColor: 'var(--ifm-color-primary-lightest)',
            color: 'var(--ifm-color-primary-darkest)',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          {contribution.type}
        </span>
      </div>
      <div style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.5rem' }}>
        <strong>{contribution.event}</strong> • {new Date(contribution.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
      <p>{contribution.description}</p>
      <div>
        {contribution.link && (
          <Link
            className="button button--primary button--sm"
            to={contribution.link}
            style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
          >
            Event Page
          </Link>
        )}
        {contribution.slides && (
          <a
            className="button button--secondary button--sm"
            href={contribution.slides}
            download
            style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
          >
            Slides
          </a>
        )}
        {contribution.video && (
          <Link
            className="button button--secondary button--sm"
            to={contribution.video}
            style={{ marginBottom: '0.5rem' }}
          >
            Video
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Contributions(): JSX.Element {
  return (
    <Layout
      title="Contributions"
      description="Talks, presentations, and conference contributions"
    >
      <ParticleBackground />
      <main style={{ padding: '2rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <h1>Contributions</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            My talks, presentations, and contributions to the cybersecurity community.
          </p>
          {contributions.length > 0 ? (
            contributions.map((contribution, idx) => (
              <ContributionCard key={idx} contribution={contribution} />
            ))
          ) : (
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p>Contributions will be added here soon. Check back later!</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
