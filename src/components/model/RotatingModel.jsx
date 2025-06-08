import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./Model.jsx";

const RotatingModel = (props) => {
  const modelRef = useRef();

  // Ensure initial rotation is correct
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI; // Set to face forward
      modelRef.current.rotation.x = 0; // Ensure no tilt
      modelRef.current.rotation.z = 0; 
      modelRef.current.position.y = -0.5; // Adjust model height if needed
    }
  }, []);

  // Add smooth rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02;
    }
  });

  return <Model ref={modelRef} scale={[1, 1.1, 1]} {...props} />; // Adjust height using scale
};

export default RotatingModel;
