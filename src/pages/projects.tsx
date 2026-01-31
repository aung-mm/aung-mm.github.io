import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Personal Cybersecurity Website',
    description: 'A professional portfolio website built with Docusaurus showcasing my cybersecurity experience, contributions, and projects. Features modern design with responsive layout and custom security-themed branding.',
    tags: ['Docusaurus', 'React', 'TypeScript', 'Web Development'],
    github: 'https://github.com/aung-mm/aung-mm.github.io',
    link: 'https://aungmmtech.info',
  },
  {
    title: 'OverTheWire CTF Solutions',
    description: 'Collection of solutions and write-ups for OverTheWire wargames. Documents approaches to common security challenges including privilege escalation, cryptography, and web exploitation.',
    tags: ['CTF', 'Security', 'Linux', 'Learning'],
    github: 'https://github.com/aung-mm/overthewire',
  },
  {
    title: 'Early Programming Projects',
    description: 'A collection of my early programming experiments and scripts. Includes various automation tools and practice projects developed while learning system administration and scripting.',
    tags: ['Python', 'Automation', 'Scripts', 'Learning'],
    github: 'https://github.com/aung-mm/my-programs',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div style={{ marginBottom: '1rem' }}>
        {project.tags.map((tag) => (
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
      <div>
        {project.link && (
          <Link
            className="button button--primary button--sm"
            to={project.link}
            style={{ marginRight: '0.5rem' }}
          >
            View Project
          </Link>
        )}
        {project.github && (
          <Link
            className="button button--secondary button--sm"
            to={project.github}
          >
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Security engineering projects and tools"
    >
      <main style={{ padding: '2rem' }}>
        <div className="container">
          <h1>Projects</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            A showcase of my security engineering projects, tools, and open-source contributions.
          </p>
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))
          ) : (
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p>Projects will be added here soon. Check back later!</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
