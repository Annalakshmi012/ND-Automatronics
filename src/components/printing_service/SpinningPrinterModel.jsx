// components/SpinningPrinterModel.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./Model";

const SpinningPrinterModel = (props) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <Model ref={modelRef} {...props} />;
};

export default SpinningPrinterModel;
