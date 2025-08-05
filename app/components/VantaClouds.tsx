"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

let CLOUDS: any = null;

export default function VantaClouds() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      // Load both Vanta.clouds and THREE dynamically
      (async () => {
        if (!CLOUDS) {
          const vanta = await import("vanta/dist/vanta.clouds.min");
          CLOUDS = vanta.default;
        }

        const effect = CLOUDS({
          el: vantaRef.current!,
          THREE: THREE,
          skyColor: 0x0d0d25, // Very dark blue/purple sky
          cloudColor: 0x444444, // Dark gray clouds
          cloudShadowColor: 0x000000, // Black shadows
          sunColor: 0xff6600, // Dim warm sun (orange)
          speed: 0.1,
          mouseControls: true,
          touchControls: true,
        });

        setVantaEffect(effect);
      })();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}
