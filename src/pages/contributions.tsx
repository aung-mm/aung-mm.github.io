import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

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
  // Add your contributions here
  // Example:
  // {
  //   title: 'Building Secure CI/CD Pipelines',
  //   type: 'Talk',
  //   event: 'Security Conference 2024',
  //   date: '2024-06-15',
  //   description: 'A deep dive into securing CI/CD pipelines with automation and best practices.',
  //   link: 'https://example.com',
  //   slides: 'https://slides.example.com',
  // },
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
          <Link
            className="button button--secondary button--sm"
            to={contribution.slides}
            style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
          >
            Slides
          </Link>
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
      <main style={{ padding: '2rem' }}>
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
