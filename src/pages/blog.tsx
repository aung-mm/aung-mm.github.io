import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ParticleBackground from '../components/ParticleBackground';

interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
  readTime: string;
  tags: string[];
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Welcome to My Cybersecurity Blog',
    date: '2025-10-26',
    description: 'Welcome to my professional blog where I share insights on security engineering, defense operations, and streamlining cybersecurity processes.',
    slug: 'welcome',
    readTime: '1 min read',
    tags: ['Security', 'Engineering'],
    author: 'Aung Myint Myat',
  },
  // Add more blog posts here as they are created
];

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ margin: 0, marginBottom: '0.5rem' }}>
          <Link 
            to={`/blog/${post.slug}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {post.title}
          </Link>
        </h2>
        <div style={{ 
          color: 'var(--ifm-color-emphasis-600)', 
          fontSize: '0.875rem',
          marginBottom: '0.5rem' 
        }}>
          <span>{new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <span style={{ margin: '0 0.5rem' }}>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
      
      <p style={{ marginBottom: '1rem' }}>{post.description}</p>
      
      <div style={{ marginBottom: '1rem' }}>
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              marginRight: '0.5rem',
              marginBottom: '0.5rem',
              borderRadius: '4px',
              backgroundColor: 'var(--ifm-color-primary-lightest)',
              color: 'var(--ifm-color-primary-darkest)',
              fontSize: '0.875rem',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link
        className="button button--primary button--sm"
        to={`/blog/${post.slug}`}
      >
        Read more →
      </Link>
    </article>
  );
}

export default function BlogPage(): JSX.Element {
  return (
    <Layout
      title="Blog"
      description="Cybersecurity insights, security engineering thoughts, and technical deep-dives"
    >
      <ParticleBackground />
      <main style={{ padding: '2rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1>Blog</h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
              Cybersecurity insights, technical write-ups, and thoughts on security engineering and defense operations.
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {blogPosts.length > 0 ? (
              blogPosts.map((post, idx) => (
                <BlogPostCard key={idx} post={post} />
              ))
            ) : (
              <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <h3>Coming Soon</h3>
                <p>Blog posts are being prepared. Check back soon for insights on cybersecurity, threat hunting, and security engineering!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}