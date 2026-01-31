import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

interface HobbyItem {
  title: string;
  type: 'Vlog' | 'Note' | 'Article';
  description: string;
  date: string;
  link?: string;
  thumbnail?: string;
}

const hobbyItems: HobbyItem[] = [
  // Add your hobby items here
  // Example:
  // {
  //   title: 'Weekend Photography Adventures',
  //   type: 'Vlog',
  //   description: 'Exploring urban photography techniques.',
  //   date: '2024-06-20',
  //   link: 'https://youtube.com/...',
  // },
];

function HobbyCard({ item }: { item: HobbyItem }) {
  return (
    <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h3 style={{ margin: 0 }}>{item.title}</h3>
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
          {item.type}
        </span>
      </div>
      <div style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
        {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
      <p>{item.description}</p>
      {item.link && (
        <Link
          className="button button--primary button--sm"
          to={item.link}
        >
          View
        </Link>
      )}
    </div>
  );
}

export default function Hobbies(): JSX.Element {
  return (
    <Layout
      title="Hobbies"
      description="Personal interests, vlogs, notes, and articles"
    >
      <main style={{ padding: '2rem' }}>
        <div className="container">
          <h1>Hobbies & Interests</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            A collection of my personal interests, vlogs, notes, and articles beyond cybersecurity.
          </p>
          {hobbyItems.length > 0 ? (
            <div>
              {hobbyItems.map((item, idx) => (
                <HobbyCard key={idx} item={item} />
              ))}
            </div>
          ) : (
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p>Content will be added here soon. Check back later!</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
