"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function BackgroundBeams({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create beams
    const beams: THREE.Mesh[] = [];
    const beamGeometry = new THREE.BoxGeometry(0.1, 0.1, 2);
    const beamMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < 20; i++) {
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      beam.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * -10
      );
      beam.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(beam);
      beams.push(beam);
    }

    camera.position.z = 5;

    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      beams.forEach((beam) => {
        beam.rotation.x += 0.005;
        beam.rotation.y += 0.005;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full -z-10 pointer-events-none ${className}`}
    />
  );
}
