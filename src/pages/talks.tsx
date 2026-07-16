import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const ACCENT = '#3ad0c2';
const mono = "'IBM Plex Mono', monospace";

interface Talk {
  title: string;
  type: string;
  event: string;
  year: string;
  description: string;
  slides: string;
}

const talks: Talk[] = [
  {title: 'macOS Incident Response', type: 'Presentation', event: 'BSides Myanmar 2025', year: '2025', description: 'A comprehensive guide to macOS incident response: forensic techniques, artifact collection, and investigation methodologies specific to macOS environments.', slides: 'https://docs.google.com/presentation/d/1YyiV7CTwU01FKFJSxO5QJeH-Iup1cA0w/edit?usp=sharing'},
  {title: 'Not So Boring SOC', type: 'Talk', event: 'Barcamp Myanmar 2025', year: '2025', description: 'Making Security Operations Centers more engaging and effective through automation, gamification, and modern operational practices.', slides: 'https://docs.google.com/presentation/d/1enfWBpQPY4gf3F0nzup14L0U3AISfRm-/edit?usp=sharing'},
  {title: 'Advanced Threat Detection Techniques', type: 'Presentation', event: 'NDSS 2025', year: '2025', description: 'Advanced threat detection methodologies and their practical implementation in enterprise security operations.', slides: 'https://docs.google.com/presentation/d/1qMTnBNg-tQMGnoNUTwLmZxf1G-Nv4Pb0/edit?usp=sharing'},
  {title: 'Investigating Lumma Stealer Malware', type: 'Presentation', event: 'BSides Myanmar 2024', year: '2024', description: 'Deep dive analysis of Lumma Stealer malware: infection vectors, persistence mechanisms, and detection strategies.', slides: 'https://docs.google.com/presentation/d/1LOS7x8GmG5mwX2e3_5Im4w0xFHw7AJZL/edit?usp=sharing'},
  {title: 'Applied Machine Learning in Cyber Security', type: 'Talk', event: 'BSides Myanmar 2023', year: '2023', description: 'Practical applications of machine learning in security operations: threat detection, anomaly detection, and automated response systems.', slides: 'https://docs.google.com/presentation/d/1D3QjPFK-Xv8Xrsub_fo_xJfWQI_Kzal4/edit?usp=sharing'},
  {title: "What's in the SOC", type: 'Talk', event: 'Cybergon 2022', year: '2022', description: 'SOC components, job roles, and how to utilize open-source security frameworks to build effective security operations capabilities.', slides: 'https://docs.google.com/presentation/d/1SRTinqmbZf_8djMNIbh6fJUylLBf17gK/edit?usp=sharing'},
  {title: 'Building an Open-Source SOC Platform', type: 'Presentation', event: 'BSides Myanmar 2020', year: '2020', description: 'Leveraging open-source solutions and frameworks to build and run a complete Security Operations Center platform.', slides: 'https://docs.google.com/presentation/d/1-uMLJ2jGH0AT_y219mrIpjDlY8sYxzh8/edit?usp=sharing'},
  {title: 'AWS Cloud Security and Threat Detection', type: 'Workshop', event: 'AWS User Group Myanmar', year: '2020', description: 'AWS security features and best practices, with live detection of malicious activity on AWS based on the Capital One data breach case study.', slides: 'https://docs.google.com/presentation/d/1LIANo4UM9U_XP57Gl9zEJd0jM1HAVJNq/edit?usp=sharing'},
];

export default function Talks(): ReactNode {
  return (
    <Layout description="Talks and presentations given at security conferences and community events.">
      <div style={{position: 'relative', minHeight: '80vh', background: 'transparent', color: '#e6e8eb', fontFamily: "'IBM Plex Sans', system-ui, sans-serif", overflow: 'hidden'}}>
        <div style={{position: 'fixed', top: -240, left: '50%', width: 820, height: 820, marginLeft: -410, background: `radial-gradient(circle, color-mix(in oklab, ${ACCENT} 15%, transparent) 0%, transparent 62%)`, filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0}} />
        <div style={{position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto', padding: '40px 32px 100px'}}>
          <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, margin: '40px 0 14px'}}>
            <span style={{fontFamily: mono, fontSize: 13, color: ACCENT}}>~/talks</span>
            <Link to="/" style={{fontFamily: mono, fontSize: 13, color: '#7d848c'}}>&#8592; Back to home</Link>
          </div>
          <h1 style={{margin: '0 0 16px', fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em', color: '#f4f6f8'}}>Talks &amp; presentations</h1>
          <p style={{margin: '0 0 40px', fontSize: 17, color: '#9aa0a8', maxWidth: '62ch', lineHeight: 1.6}}>Talks and presentations I've given at security conferences and community events over the years. Slides are linked on each card.</p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16}}>
            {talks.map((talk) => (
              <a key={talk.title} href={talk.slides} target="_blank" rel="noopener noreferrer" style={{display: 'flex', flexDirection: 'column', padding: 24, borderRadius: 14, background: '#131619', border: '1px solid rgba(255,255,255,0.08)', color: 'inherit'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                  <span style={{fontFamily: mono, fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: ACCENT, background: `color-mix(in oklab, ${ACCENT} 12%, transparent)`, padding: '3px 9px', borderRadius: 5}}>{talk.type}</span>
                  <span style={{fontFamily: mono, fontSize: 12, color: '#7d848c'}}>{talk.year}</span>
                </div>
                <h3 style={{margin: '0 0 6px', fontSize: 18, fontWeight: 600, color: '#f4f6f8', lineHeight: 1.3}}>{talk.title}</h3>
                <div style={{fontFamily: mono, fontSize: 12.5, color: ACCENT, marginBottom: 14}}>{talk.event}</div>
                <p style={{margin: '0 0 18px', fontSize: 14, color: '#9aa0a8', flex: 1, lineHeight: 1.55}}>{talk.description}</p>
                <span style={{fontFamily: mono, fontSize: 13, color: ACCENT}}>View slides &#8599;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
