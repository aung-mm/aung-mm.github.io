import type {ReactNode} from 'react';
import ParticleBackground from '@site/src/components/ParticleBackground';

// Swizzled Root wrapper: renders the animated particle mesh once, globally,
// so it persists behind every page (and across client-side navigation) instead
// of being mounted per page.
export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <>
      <ParticleBackground />
      {children}
    </>
  );
}
