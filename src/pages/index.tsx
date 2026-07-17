import type {ReactNode, CSSProperties} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const ACCENT = '#3ad0c2';

// ---------------------------------------------------------------- data

interface Focus {
  tag: string;
  title: string;
  body: string;
}

const focusAreas: Focus[] = [
  {
    tag: '~/security-engineering',
    title: 'Security Engineering',
    body: 'Building the tools and systems that everything else runs on: detection pipelines, response tooling, and the platforms that power the whole security operation.',
  },
  {
    tag: '~/threat-hunting',
    title: 'Threat Hunting',
    body: 'Proactive hunts across global infrastructure to surface sophisticated adversaries that evade automated detection.',
  },
  {
    tag: '~/dfir',
    title: 'Incident Response & DFIR',
    body: 'Investigation, containment, eradication, and digital forensics when a breach is unfolding.',
  },
  {
    tag: '~/automation',
    title: 'Security Automation',
    body: 'Turning repetitive defense work into reliable, automated pipelines, from vuln management to detection deployment.',
  },
];

interface Role {
  title: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

interface Experience {
  company: string;
  duration: string;
  roles: Role[];
}

const experiences: Experience[] = [
  {
    company: 'ExpressVPN',
    duration: '2 yrs 6 mos',
    roles: [
      {
        title: 'Senior Threat Hunter / Analyst',
        period: 'Jan 2026 to Present',
        bullets: [
          'Lead threat hunting operations across global infrastructure',
          'Build and deploy detection systems that catch sophisticated adversaries',
          'Automate detection-logic deployment and vulnerability management',
          'Run security architecture reviews for engineering teams',
        ],
        technologies: ['Threat Hunting', 'SIEM', 'Detection Engineering', 'Security Architecture', 'Vulnerability Management', 'Automation'],
      },
      {
        title: 'Threat Hunter / Analyst II',
        period: 'Feb 2024 to Dec 2025',
        bullets: [
          'Ran proactive threat hunts across global infrastructure',
          'Built detection content and tuned SIEM alerting to catch evasive adversaries',
          'Automated detection-logic deployment and vulnerability management workflows',
        ],
        technologies: ['Threat Hunting', 'SIEM', 'Detection Engineering', 'Vulnerability Management', 'Automation'],
      },
    ],
  },
  {
    company: 'Sysnet System & Solutions',
    duration: '1 yr 5 mos',
    roles: [
      {
        title: 'Cyber Security Officer',
        period: 'Oct 2022 to Feb 2024',
        bullets: [
          'Deployed SIEM, vulnerability scanners, and endpoint protection for full threat visibility',
          'Ran security assessments and compliance audits for regulated clients',
          'Worked directly with clients to solve complex security challenges',
        ],
        technologies: ['SIEM', 'Vulnerability Management', 'Security Audits', 'Project Management', 'Network Hardening'],
      },
    ],
  },
  {
    company: 'Kernellix Co. Ltd',
    duration: '3 yrs 4 mos',
    roles: [
      {
        title: 'Cyber Security Engineer',
        period: 'Jan 2021 to Sep 2022',
        bullets: [
          'Designed secure cloud infrastructure across AWS, GCP, and Azure',
          'Ran digital forensics and incident response during active breaches',
          'Automated CI/CD deployment pipelines orchestrated on Kubernetes',
        ],
        technologies: ['Cloud Security', 'DFIR', 'Kubernetes', 'CI/CD', 'IaC', 'AWS', 'Azure', 'GCP'],
      },
      {
        title: 'Associate Cyber Security Engineer',
        period: 'Jun 2019 to Dec 2020',
        bullets: [
          'Built Security Operations Center platforms from the ground up',
          'Deployed and tuned open-source security monitoring stacks',
          'Supported incident response and forensic investigations',
        ],
        technologies: ['SOC Development', 'SIEM', 'Incident Response', 'Linux', 'AWS'],
      },
    ],
  },
];

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  verify?: string;
}

const certificates: Certificate[] = [
  {name: 'GIAC Enterprise Incident Responder (GEIR)', issuer: 'SANS Institute', date: 'Dec 2025', verify: 'https://www.credly.com/badges/9f633aa8-5a02-4f00-a0aa-ff181f3c440e'},
  {name: 'Certified Information Systems Security Professional (CISSP)', issuer: '(ISC)\u00b2', date: 'May 2022', verify: 'https://www.credly.com/badges/3db8669b-721f-4739-9590-f1c9e115e9f0/public_url'},
  {name: 'Certified Threat Hunting Professional (eCTHPv2)', issuer: 'INE', date: 'May 2025', verify: 'https://certs.ine.com/bddb4735-f6fe-4b6d-ba6a-a299b6c0fc55#acc.V7dYgZ2z'},
  {name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', date: 'Apr 2023', verify: 'https://www.credly.com/badges/bfa2a0a5-a609-474a-b52a-471148d4fb39/public_url'},
  {name: 'Foundation Level Threat Intelligence Analyst', issuer: 'arcX', date: 'Mar 2023'},
  {name: 'AWS Certified Security Specialty', issuer: 'AWS', date: 'Dec 2021'},
  {name: 'AWS Certified Solutions Architect Associate', issuer: 'AWS', date: 'Sep 2019'},
  {name: 'FireEye Helix Cloud Security (FSE)', issuer: 'FireEye', date: 'Sep 2021'},
];

// ---------------------------------------------------------------- shared styles

const mono = "'IBM Plex Mono', monospace";
const card: CSSProperties = {background: '#131619', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14};
const sectionWrap: CSSProperties = {maxWidth: 1160, margin: '0 auto', padding: '64px 32px'};
const h2Style: CSSProperties = {margin: 0, fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', color: '#f4f6f8'};

function SectionHead({title}: {title: string}) {
  return (
    <div style={{marginBottom: 36}}>
      <h2 style={h2Style}>{title}</h2>
    </div>
  );
}

// ---------------------------------------------------------------- sections

function Hero() {
  const certBadge: CSSProperties = {display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 74, padding: '0 18px', borderRadius: 12, background: '#131619', border: '1px solid rgba(255,255,255,0.08)'};
  return (
    <header id="top" style={{maxWidth: 1160, margin: '0 auto', padding: '60px 32px 72px', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'center'}}>
      <div>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 13px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', fontFamily: mono, fontSize: 12.5, color: '#b6bcc4', marginBottom: 26}}>
          <span style={{width: 8, height: 8, borderRadius: '50%', background: ACCENT, boxShadow: `0 0 0 4px color-mix(in oklab, ${ACCENT} 24%, transparent)`}}></span>
          Currently hunting adversaries @ ExpressVPN
        </div>
        <div style={{fontFamily: mono, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16}}>Security Engineer · Threat Hunter · DFIR</div>
        <h1 style={{margin: '0 0 22px', fontSize: 62, lineHeight: 1.02, fontWeight: 700, letterSpacing: '-0.03em', color: '#f4f6f8'}}>Aung Myint Myat</h1>
        <p style={{margin: '0 0 18px', fontSize: 22, lineHeight: 1.4, fontWeight: 500, color: '#d3d8de', maxWidth: '30ch'}}>I build the tools and systems that are the <span style={{color: ACCENT}}>backbone of security operations.</span></p>
        <p style={{margin: '0 0 34px', fontSize: 16, color: '#9aa0a8', maxWidth: '54ch'}}>I spend most of my time building security tooling, writing detections, and hunting things that don't want to be found. I like making stuff that is actually useful when you are dealing with real threats, mostly around detection engineering, DFIR, and automation across AWS, GCP, and Azure.</p>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 44}}>
          <Link href="https://linkedin.com/in/aungmm" style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', borderRadius: 9, background: ACCENT, color: '#06120f', fontWeight: 600, fontSize: 15}}>Get in touch &#8594;</Link>
        </div>
        <div style={{paddingTop: 30, borderTop: '1px solid rgba(255,255,255,0.08)'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14}}>
            <div style={certBadge}><img src={useBaseUrl('/cert-logo/cissp-clean.png')} alt="CISSP" style={{height: 72, width: 'auto', objectFit: 'contain', display: 'block'}} /></div>
            <div style={certBadge}><img src={useBaseUrl('/cert-logo/geir.png')} alt="GIAC GEIR" style={{height: 54, width: 'auto', objectFit: 'contain', display: 'block'}} /></div>
            <div style={certBadge}><img src={useBaseUrl('/cert-logo/aws-security.png')} alt="AWS Certified Security Specialty" style={{height: 52, width: 'auto', objectFit: 'contain', display: 'block'}} /></div>
            <div style={certBadge}><img src={useBaseUrl('/cert-logo/ecthp.svg')} alt="eCTHPv2" style={{height: 56, width: 'auto', objectFit: 'contain', display: 'block'}} /></div>
          </div>
        </div>
      </div>

      <div style={{position: 'relative'}}>
        <div style={{borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', background: '#131619', boxShadow: `0 30px 80px -30px rgba(0,0,0,0.8), 0 0 0 1px color-mix(in oklab, ${ACCENT} 10%, transparent)`}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 8, padding: '12px 15px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
            <span style={{width: 11, height: 11, borderRadius: '50%', background: '#3a3f45'}}></span>
            <span style={{width: 11, height: 11, borderRadius: '50%', background: '#3a3f45'}}></span>
            <span style={{width: 11, height: 11, borderRadius: '50%', background: ACCENT}}></span>
            <span style={{marginLeft: 8, fontFamily: mono, fontSize: 12, color: '#7d848c'}}>aungmm@soc:~$ whoami</span>
          </div>
          <img src={useBaseUrl('/img/profile.jpg')} alt="Aung Myint Myat" style={{display: 'block', width: '100%', height: 380, objectFit: 'cover', objectPosition: 'center 25%'}} />
        </div>
        <div style={{position: 'absolute', left: 18, bottom: -18, display: 'inline-flex', alignItems: 'center', gap: 9, padding: '10px 15px', borderRadius: 10, background: '#16191d', border: '1px solid rgba(255,255,255,0.12)', fontFamily: mono, fontSize: 12.5, color: '#c3c8cf', boxShadow: '0 14px 30px -12px rgba(0,0,0,0.7)'}}>
          <span style={{width: 8, height: 8, borderRadius: '50%', background: ACCENT}}></span>
          Based in Singapore
        </div>
      </div>
    </header>
  );
}

function FocusSection() {
  return (
    <section id="focus" style={sectionWrap}>
      <SectionHead title="What I do" />
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18}}>
        {focusAreas.map((area) => (
          <div key={area.title} style={{...card, padding: 26}}>
            <div style={{fontFamily: mono, fontSize: 12, color: ACCENT, marginBottom: 14}}>{area.tag}</div>
            <h3 style={{margin: '0 0 10px', fontSize: 20, fontWeight: 600, color: '#f4f6f8'}}>{area.title}</h3>
            <p style={{margin: 0, fontSize: 15, color: '#9aa0a8'}}>{area.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" style={sectionWrap}>
      <SectionHead title="Experience" />
      <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
        {experiences.map((exp) => (
          <div key={exp.company} style={{...card, display: 'grid', gridTemplateColumns: '200px 1fr', gap: 28, padding: 28}}>
            <div>
              <div style={{fontSize: 16, color: '#f4f6f8', fontWeight: 600}}>{exp.company}</div>
              <div style={{fontFamily: mono, fontSize: 12.5, letterSpacing: '0.05em', textTransform: 'uppercase', color: ACCENT, marginTop: 8}}>{exp.duration}</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 26}}>
              {exp.roles.map((role) => (
                <div key={role.title} style={{position: 'relative', paddingLeft: 22, borderLeft: '2px solid rgba(255,255,255,0.1)'}}>
                  <span style={{position: 'absolute', left: -7, top: 4, width: 12, height: 12, borderRadius: '50%', background: ACCENT, boxShadow: '0 0 0 4px #131619'}} />
                  <div style={{display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 12}}>
                    <h3 style={{margin: 0, fontSize: 20, fontWeight: 600, color: '#f4f6f8'}}>{role.title}</h3>
                    <span style={{fontFamily: mono, fontSize: 11.5, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#7d848c'}}>{role.period}</span>
                  </div>
                  <ul style={{margin: '0 0 16px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9}}>
                    {role.bullets.map((point, i) => (
                      <li key={i} style={{display: 'flex', gap: 11, fontSize: 15, color: '#9aa0a8'}}>
                        <span style={{color: ACCENT, fontFamily: mono, flex: 'none'}}>&#8250;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                    {role.technologies.map((tech) => (
                      <span key={tech} style={{display: 'inline-flex', alignItems: 'center', padding: '5px 11px', borderRadius: 7, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: '#c3c8cf', fontFamily: mono, fontSize: 12, letterSpacing: '0.01em'}}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CertsSection() {
  return (
    <section id="certs" style={sectionWrap}>
      <SectionHead title="Certifications" />
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
        {certificates.map((cert) => {
          const cardStyle: CSSProperties = {...card, display: 'flex', flexDirection: 'column', padding: 22, borderRadius: 13, color: 'inherit'};
          const body = (
            <>
              <div style={{marginBottom: 14}}>
                <span style={{fontFamily: mono, fontSize: 11.5, color: ACCENT, letterSpacing: '0.04em'}}>{cert.date}</span>
              </div>
              <h3 style={{margin: '0 0 8px', fontSize: 15.5, fontWeight: 600, color: '#f4f6f8', lineHeight: 1.35, flex: 1}}>{cert.name}</h3>
              <div style={{fontSize: 13.5, color: '#9aa0a8'}}>{cert.issuer}</div>
            </>
          );
          return cert.verify ? (
            <a key={cert.name} href={cert.verify} target="_blank" rel="noopener noreferrer" style={cardStyle}>
              {body}
              <div style={{marginTop: 14, fontFamily: mono, fontSize: 12, color: ACCENT}}>Verify credential &#8599;</div>
            </a>
          ) : (
            <div key={cert.name} style={cardStyle}>{body}</div>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{maxWidth: 1160, margin: '0 auto', padding: '80px 32px 96px'}}>
      <div style={{position: 'relative', overflow: 'hidden', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', background: '#101316', padding: '64px 48px', textAlign: 'center'}}>
        <div style={{position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 100% at 50% 0%, color-mix(in oklab, ${ACCENT} 14%, transparent) 0%, transparent 70%)`, pointerEvents: 'none'}}></div>
        <div style={{position: 'relative'}}>
          <div style={{fontFamily: mono, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 18}}>Say hi</div>
          <h2 style={{margin: '0 0 18px', fontSize: 40, fontWeight: 700, letterSpacing: '-0.025em', color: '#f4f6f8'}}>Want to talk shop?</h2>
          <p style={{margin: '0 auto 34px', fontSize: 17, color: '#9aa0a8', maxWidth: '52ch'}}>Always happy to nerd out about security engineering, detections, threat hunting, or a good incident response war story. My inbox is open.</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center'}}>
            <Link href="https://linkedin.com/in/aungmm" style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 9, background: ACCENT, color: '#06120f', fontWeight: 600, fontSize: 15}}>LinkedIn &#8594;</Link>
            <Link href="https://github.com/aung-mm" style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.14)', color: '#e6e8eb', fontWeight: 500, fontSize: 15}}>GitHub &#8599;</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      description="Security engineer and threat hunter specializing in detection engineering, DFIR, and security automation.">
      <div className={styles.securityRoot}>
        <div className={styles.glow} />
        <div style={{position: 'relative', zIndex: 2}}>
          <Hero />
          <FocusSection />
          <ExperienceSection />
          <CertsSection />
          <ContactSection />
        </div>
      </div>
    </Layout>
  );
}
