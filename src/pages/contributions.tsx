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
    slides: 'https://docs.google.com/presentation/d/1YyiV7CTwU01FKFJSxO5QJeH-Iup1cA0w/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // bsides2025-macOS IR
  },
  {
    title: 'Not So Boring SOC',
    type: 'Talk',
    event: 'Barcamp Myanmar 2025',
    date: '2025-01-10',
    description: 'Making Security Operations Centers more engaging and effective through automation, gamification, and modern operational practices.',
    slides: 'https://docs.google.com/presentation/d/1enfWBpQPY4gf3F0nzup14L0U3AISfRm-/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // barcampmm2025-Not_So_Boring SOC
  },
  {
    title: 'Advanced Threat Detection Techniques',
    type: 'Presentation',
    event: 'NDSS 2025',
    date: '2025-01-05',
    description: 'Presentation on advanced threat detection methodologies and their practical implementation in enterprise security operations.',
    slides: 'https://docs.google.com/presentation/d/1qMTnBNg-tQMGnoNUTwLmZxf1G-Nv4Pb0/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // NDSS2025-presentation
  },
  {
    title: 'Investigating Lumma Stealer Malware',
    type: 'Presentation',
    event: 'BSides Myanmar 2024',
    date: '2024-11-01',
    description: 'Deep dive analysis of Lumma Stealer malware, covering its infection vectors, persistence mechanisms, and detection strategies.',
    slides: 'https://docs.google.com/presentation/d/1LOS7x8GmG5mwX2e3_5Im4w0xFHw7AJZL/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // bsides2024-Investigating Lumma Stealer Malware
  },
  {
    title: 'Applied Machine Learning in Cyber Security',
    type: 'Talk',
    event: 'BSides Myanmar 2023',
    date: '2023-11-01',
    description: 'Explored practical applications of machine learning in cybersecurity operations, including threat detection, anomaly detection, and automated response systems.',
    slides: 'https://docs.google.com/presentation/d/1D3QjPFK-Xv8Xrsub_fo_xJfWQI_Kzal4/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // bsides2023-Applied Machine Learning In CyberSecurity
  },
  {
    title: "What's in the SOC",
    type: 'Talk',
    event: 'Cybergon',
    date: '2022-09-01',
    description: 'Discussed SOC components, job roles, and how to utilize open-source security frameworks to build effective security operations capabilities.',
    slides: 'https://docs.google.com/presentation/d/1SRTinqmbZf_8djMNIbh6fJUylLBf17gK/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // cybergon2022
  },
  {
    title: 'Building an Open-Source SOC Platform',
    type: 'Presentation',
    event: 'BSides Myanmar 2020',
    date: '2020-11-01',
    description: 'Demonstrated how to leverage open-source solutions and frameworks to build and run a complete Security Operations Center platform.',
    slides: 'https://docs.google.com/presentation/d/1-uMLJ2jGH0AT_y219mrIpjDlY8sYxzh8/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // bsides2020-Building An Open-Source SOC Platform
  },
  {
    title: 'AWS Cloud Security and Threat Detection',
    type: 'Workshop',
    event: 'AWS User Group Myanmar',
    date: '2020-05-01',
    description: 'Discussed AWS security features and best practices. Demonstrated detection of malicious activities on AWS based on the Capital One data breach case study.',
    slides: 'https://docs.google.com/presentation/d/1LIANo4UM9U_XP57Gl9zEJd0jM1HAVJNq/edit?usp=sharing&ouid=114843163860868324009&rtpof=true&sd=true', // awsugmm2020-AWSUGMM_Cloud Security
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
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
          >
            View Slides
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
