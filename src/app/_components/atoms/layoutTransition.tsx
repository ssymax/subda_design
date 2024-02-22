'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import useIsFirstRender from '@/hooks/useIsFirstRender';
import useStore from '@/hooks/useStore';
import { useGSAP } from '@gsap/react';

interface Props {
  children: React.ReactNode;
}

export default function LayoutTransition({ children }: Props) {
  const pathname = usePathname();

  const currentRef = useRef<HTMLDivElement>(null);

  const tempRef = useRef<HTMLDivElement>(null);

  const lastRef = useRef<HTMLCollection | null>(null);

  const [currentPath, setCurrentPath] = useState<string>(pathname);

  const { setTransitionActive } = useStore();

  const isFirstRender = useIsFirstRender();

  useLayoutEffect(() => {
    if (!currentRef.current) return;

    if (!lastRef.current) lastRef.current = currentRef.current.children;

    if (currentRef.current && tempRef.current) {
      tempRef.current.appendChild(lastRef.current![0].cloneNode(true));
      lastRef.current = currentRef.current.children;
    }
  }, [pathname]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'expo.inOut',
          duration: 1.2,
        },
      });

      if (currentRef.current && tempRef.current && !isFirstRender) {
        tl.fromTo(
          tempRef.current,
          {
            scale: 1,
            opacity: 1,
          },
          {
            scale: 0.94,
            opacity: 0,

            onStart: () => {
              setTransitionActive(true);
            },
          },
        ).fromTo(
          currentRef.current,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,

            onComplete: () => {
              setCurrentPath(pathname);
              setTransitionActive(false);
            },
          },
          0,
        );
      }
    },
    { dependencies: [isFirstRender, pathname, setTransitionActive], scope: currentRef },
  );

  return (
    <div className='content'>
      {pathname !== currentPath && (
        <div key={`${pathname} temp`} ref={tempRef} className='transition temp' />
      )}

      <div key={pathname} ref={currentRef} className='transition next'>
        {children}
      </div>
    </div>
  );
}
