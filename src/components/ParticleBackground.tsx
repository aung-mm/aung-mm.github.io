import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';
import { useColorMode } from '@docusaurus/theme-common';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log('Particles loaded', container);
  }, []);

  if (!init) {
    return null;
  }

  // Theme-specific colors
  const backgroundColor = isDarkTheme ? '#000000' : '#ffffff';
  const particleColor = isDarkTheme ? '#60a5fa' : '#2563eb';
  const linkColor = isDarkTheme ? '#60a5fa' : '#2563eb';
  const linkOpacity = isDarkTheme ? 0.3 : 0.2;
  const particleOpacity = isDarkTheme ? 0.5 : 0.4;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: backgroundColor,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: {
              enable: true,
            } as any,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: linkColor,
            distance: 150,
            enable: true,
            opacity: linkOpacity,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            } as any,
            value: 80,
          },
          opacity: {
            value: particleOpacity,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
