import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const ACCENT = '#3ad0c2';
const mono = "'IBM Plex Mono', monospace";

export default function Blog(): ReactNode {
  return (
    <Layout description="Personal and technical posts on security, building, and learning.">
      <div style={{position: 'relative', minHeight: '70vh', background: 'transparent', color: '#e6e8eb', fontFamily: "'IBM Plex Sans', system-ui, sans-serif", overflow: 'hidden'}}>
        <div style={{position: 'fixed', top: -240, left: '50%', width: 820, height: 820, marginLeft: -410, background: `radial-gradient(circle, color-mix(in oklab, ${ACCENT} 15%, transparent) 0%, transparent 62%)`, filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0}} />
        <div style={{position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto', padding: '40px 32px 100px'}}>
          <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, margin: '40px 0 14px'}}>
            <span style={{fontFamily: mono, fontSize: 13, color: ACCENT}}>~/blog</span>
            <Link to="/" style={{fontFamily: mono, fontSize: 13, color: '#7d848c'}}>&#8592; Back to home</Link>
          </div>
          <h1 style={{margin: '0 0 16px', fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em', color: '#f4f6f8'}}>Blog</h1>
          <p style={{margin: '0 0 40px', fontSize: 17, color: '#9aa0a8', maxWidth: '60ch', lineHeight: 1.6}}>Personal and technical posts on security, the things I build, and what I learn along the way.</p>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24, padding: '64px 52px', borderRadius: 18, background: '#131619', border: '1px dashed rgba(255,255,255,0.14)'}}>
            <span style={{fontFamily: mono, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, background: `color-mix(in oklab, ${ACCENT} 12%, transparent)`, padding: '6px 13px', borderRadius: 6}}>Upcoming</span>
            <h2 style={{margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', color: '#f4f6f8'}}>Fresh posts on the way</h2>
            <p style={{margin: 0, fontSize: 16, color: '#9aa0a8', maxWidth: '56ch', lineHeight: 1.6}}>I haven't posted in a while, but new personal and technical posts are on the way. Check back soon, or connect with me on LinkedIn in the meantime.</p>
            <a href="https://linkedin.com/in/aungmm" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: mono, fontSize: 14, color: '#06120f', background: ACCENT, padding: '11px 20px', borderRadius: 8, fontWeight: 600}}>Connect on LinkedIn &#8599;</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
