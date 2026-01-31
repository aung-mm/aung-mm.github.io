import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import ParticleBackground from '../../components/ParticleBackground';

export default function Layout(props) {
  return (
    <>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <OriginalLayout {...props} />
      </div>
    </>
  );
}