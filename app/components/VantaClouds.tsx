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
          skyColor: 0x477789, // Almost pitch black sky
          cloudColor: 0x828ea0, // Very dark gray clouds
          cloudShadowColor: 0x183550, // True black shadows
          sunColor: 0xedb875,
          sunGlareColor: 0xf0eeee, // No visible sun
          sunlightColor: 0x171818, // Disables any warm light
          speed: 1.5, // Very slow and heavy
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
