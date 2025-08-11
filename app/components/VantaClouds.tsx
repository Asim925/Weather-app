"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Type definition for Vanta effect
type VantaEffect = {
  destroy: () => void;
};

type VantaCloudsOptions = {
  el: HTMLElement;
  THREE: typeof THREE;
  skyColor?: number;
  cloudColor?: number;
  cloudShadowColor?: number;
  sunColor?: number;
  sunGlareColor?: number;
  sunlightColor?: number;
  speed?: number;
  mouseControls?: boolean;
  touchControls?: boolean;
};

let CLOUDS: ((options: VantaCloudsOptions) => VantaEffect) | null = null;

export default function VantaClouds() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      (async () => {
        if (!CLOUDS) {
          const vanta = await import("vanta/dist/vanta.clouds.min");
          CLOUDS = vanta.default as (
            options: VantaCloudsOptions
          ) => VantaEffect;
        }
        if (CLOUDS) {
          const effect = CLOUDS({
            el: vantaRef.current!,
            THREE,
            skyColor: 0x477789,
            cloudColor: 0x828ea0,
            cloudShadowColor: 0x183550,
            sunColor: 0xedb875,
            sunGlareColor: 0xf0eeee,
            sunlightColor: 0x171818,
            speed: 1.5,
            mouseControls: true,
            touchControls: true,
          });

          setVantaEffect(effect);
        }
      })();
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}
