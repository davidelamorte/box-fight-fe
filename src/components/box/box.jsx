import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { MeshWobbleMaterial } from "drei";

export const Box = ({ position, color, speed, onClick, expand }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={onClick}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};
