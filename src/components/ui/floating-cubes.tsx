
'use client'
import React, { useEffect, useState } from 'react';

const Cube = ({ size, position, rotation, delay }: { size: number; position: { x: number; y: number }; rotation: number; delay: number }) => {
  const cubeStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${position.y}%`,
    left: `${position.x}%`,
    transform: `rotate(${rotation}deg)`,
    animationDelay: `${delay}s`,
  };

  const faceStyle: React.CSSProperties = {
      position: 'absolute',
      width: '100%',
      height: '100%',
  }

  return (
    <div
      className="absolute transform-style-3d animate-float"
      style={cubeStyle}
    >
        <div className="relative w-full h-full transform-style-3d">
            <div className="cube-face" style={{ ...faceStyle, transform: `rotateY(0deg) translateZ(${size / 2}px)` }}></div>
            <div className="cube-face" style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${size / 2}px)` }}></div>
            <div className="cube-face" style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${size / 2}px)` }}></div>
            <div className="cube-face" style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${size / 2}px)` }}></div>
            <div className="cube-face" style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${size / 2}px)` }}></div>
            <div className="cube-face" style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${size / 2}px)` }}></div>
        </div>
    </div>
  );
};

export function FloatingCubes() {
    const [cubes, setCubes] = useState<any[]>([]);

    useEffect(() => {
        const generateCubes = () => {
            if (typeof window !== 'undefined' && window.innerWidth < 768) {
                // Generate fewer cubes for mobile
                const newCubes = Array.from({ length: 7 }).map((_, i) => ({
                    id: i,
                    size: Math.random() * 30 + 10,
                    position: { x: Math.random() * 100, y: Math.random() * 100 },
                    rotation: Math.random() * 360,
                    delay: Math.random() * 5,
                }));
                setCubes(newCubes);
            } else {
                 const newCubes = Array.from({ length: 15 }).map((_, i) => ({
                    id: i,
                    size: Math.random() * 40 + 10,
                    position: { x: Math.random() * 100, y: Math.random() * 100 },
                    rotation: Math.random() * 360,
                    delay: Math.random() * 5,
                }));
                setCubes(newCubes);
            }
        };
        generateCubes();
        window.addEventListener('resize', generateCubes);
        return () => window.removeEventListener('resize', generateCubes);
    }, []);

    if (!cubes.length) return null;

  return (
    <div className="fixed -z-10 inset-0 w-full h-full overflow-hidden perspective-1000">
      {cubes.map((cube) => (
        <Cube key={cube.id} {...cube} />
      ))}
    </div>
  );
}
