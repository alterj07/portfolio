'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

const EXIT_MS = 400;
const EXIT_STAGGER_RATIO = 0.6;

export interface RotatingTextProps {
  texts: string[];
  interval?: number;
  stagger?: number;
  className?: string;
}

function renderChars(text: string, stagger: number) {
  let charIndex = 0;

  return text.split(' ').map((word, wordIndex) => {
    const chars = Array.from(word).map((char, i) => {
      const delay = charIndex * stagger;
      charIndex += 1;
      return (
        <span key={`${wordIndex}-${i}`} className="rtChar" style={{ animationDelay: `${delay}ms` }}>
          {char}
        </span>
      );
    });

    // Count the space so the cascade stays evenly paced across word boundaries.
    if (wordIndex > 0) charIndex += 1;

    return (
      <React.Fragment key={wordIndex}>
        {wordIndex > 0 ? ' ' : null}
        <span className="rtWord">{chars}</span>
      </React.Fragment>
    );
  });
}

export default function RotatingText({
  texts,
  interval = 2600,
  stagger = 25,
  className = '',
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const indexRef = useRef(0);

  const longestLength = useMemo(
    () => texts.reduce((max, t) => Math.max(max, t.length), 0),
    [texts]
  );

  useEffect(() => {
    if (texts.length <= 1) return;

    const id = setInterval(() => {
      const next = (indexRef.current + 1) % texts.length;
      setPrevIndex(indexRef.current);
      indexRef.current = next;
      setIndex(next);
    }, interval);

    return () => clearInterval(id);
  }, [texts.length, interval]);

  // Drop the outgoing layer once its exit animation has finished.
  useEffect(() => {
    if (prevIndex === null) return;

    const lifetime = EXIT_MS + longestLength * stagger * EXIT_STAGGER_RATIO + 50;
    const id = setTimeout(() => setPrevIndex(null), lifetime);

    return () => clearTimeout(id);
  }, [prevIndex, longestLength, stagger]);

  return (
    <>
      <span className={`rotatingText ${className}`} aria-hidden="true">
        {/* Every phrase, grid-stacked and unpainted: the box is exactly as wide as the widest. */}
        <span className="rtSizer">
          {texts.map((text, i) => (
            <span key={i} className="rtSizerItem">
              {text}
            </span>
          ))}
        </span>
        {prevIndex !== null && (
          <span key={`exit-${prevIndex}`} className="rtLayer rtExiting">
            {renderChars(texts[prevIndex], stagger * EXIT_STAGGER_RATIO)}
          </span>
        )}
        <span key={`enter-${index}`} className="rtLayer rtEntering">
          {renderChars(texts[index], stagger)}
        </span>
      </span>
      <span className="srOnly">{texts.join(', ')}</span>
    </>
  );
}
