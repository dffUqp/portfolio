'use client';

import { FC, Suspense, useRef, useState } from 'react';

import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as random from 'maath/random';
import { MotionValue, useMotionValueEvent } from 'motion/react';
import { Points as PointsType, TextureLoader } from 'three';

interface StartProps {
  scrollValue: MotionValue<number>;
}

export const Stars: FC<StartProps> = ({ scrollValue }) => {
  const ref = useRef<PointsType>(null);
  const texture = useLoader(
    TextureLoader,
    'https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png',
  );

  const [sphere] = useState(
    () =>
      random.inSphere(new Float32Array(1500), { radius: 1.1 }) as Float32Array,
  );

  const scrollBoost = useRef(0);
  const prevScroll = useRef(0);

  useMotionValueEvent(scrollValue, 'change', latest => {
    const delta = latest - prevScroll.current;
    prevScroll.current = latest;

    const boostAmount = Math.max(Math.min(delta * 0.09, 0.9), -0.9);
    scrollBoost.current = boostAmount;
  });

  useFrame((_, delta) => {
    if (!ref.current) return;

    const baseX = delta / 40;
    const baseY = delta / 50;

    scrollBoost.current *= 0.96;

    ref.current.rotation.x += baseX + scrollBoost.current;
    ref.current.rotation.y += baseY + scrollBoost.current;
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, 0]}>
      <Points
        ref={ref}
        position={[0, 0, 0]}
        positions={sphere}
        stride={3}
        frustumCulled
        renderOrder={0}
      >
        <PointMaterial transparent map={texture} color="#878787" size={0.005} />
      </Points>
    </group>
  );
};

interface StarsBackgroundProps {
  scrollValue: MotionValue<number>;
}

const StarsBackground: FC<StarsBackgroundProps> = ({ scrollValue }) => {
  return (
    <span className="fixed w-full h-full inset-0 z-[-1] opacity-70">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars scrollValue={scrollValue} />
        </Suspense>

        <Preload all />
      </Canvas>
    </span>
  );
};

export { StarsBackground };
