import React from "react"; 
import { useGLTF } from '@react-three/drei'
import  { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Model = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/model/scene.gltf");

  // Animate rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 10; // Adjust speed here
    }
  });
  return (
    <group {...props} dispose={null}>
      <group scale={0.09}>
        <group position={[0, 22.782, 0.714]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={125}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mgn12h_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mgn12h_capac_0.geometry}
            material={materials.capac}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mgn12h_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mgn12h_suruburi_0.geometry}
            material={materials.suruburi}
          />
        </group>
        <group position={[0, 19.251, 3.016]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lead_Material036_0.geometry}
            material={materials['Material.036']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lead_Material036_0_1.geometry}
            material={materials['Material.036']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lead_Material036_0_2.geometry}
            material={materials['Material.036']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lead_Material036_0_3.geometry}
            material={materials['Material.036']}
          />
        </group>
        <group position={[0, -0.799, 9.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.baza_Material015_0.geometry}
            material={materials['Material.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.baza_lcd_0.geometry}
            material={materials.material}
          />
        </group>
        <group position={[0, 22.569, 10.246]} rotation={[-Math.PI / 2, 0, 0]} scale={0.132}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nut_Material014_0.geometry}
            material={materials['Material.014']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nut_Material013_0.geometry}
            material={materials['Material.013']}
          />
        </group>
        <group position={[3.677, -4.349, -1.728]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.priza_Material017_0.geometry}
            material={materials['Material.017']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.priza_Material016_0.geometry}
            material={materials['Material.016']}
          />
        </group>
        <group position={[5.963, 6.758, 1.72]} scale={3.172}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_Material033_0.geometry}
            material={materials['Material.033']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_Material033_0_1.geometry}
            material={materials['Material.033']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_Material033_0_2.geometry}
            material={materials['Material.033']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_Material033_0_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_Material033_0_4.geometry}
            material={materials['Material.033']}
          />
        </group>
        <group position={[-8.998, -0.259, 8.801]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_1'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_2'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_3'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_4'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_5'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_6'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_7'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_8'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_9'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_10'].geometry}
            material={materials['Material.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['BIGTREETECH_SKR_2-3D__Material026_0_11'].geometry}
            material={materials['Material.026']}
          />
        </group>
        <group position={[4.792, -5.221, 19.07]} scale={0.1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BUTTON_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BUTTON_Material_0.geometry}
            material={materials.Material_0}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sina_Material035_0.geometry}
          material={materials['Material.035']}
          position={[0.004, 20.021, -0.009]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 88.426]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.structura_Material030_0.geometry}
          material={materials['Material.030']}
          position={[0, 30.901, 2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bolt_Material031_0.geometry}
          material={materials['Material.031']}
          position={[0, 20.706, 10.457]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FEP_Material032_0.geometry}
          material={materials['Material.032']}
          position={[0, 7.694, 10.351]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coupling__8mm_Material038_0.geometry}
          material={materials['Material.038']}
          position={[0, 6.513, 3.032]}
          rotation={[-Math.PI / 2, 0, 0.742]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['50mm_Fan_Grid_Material022_0'].geometry}
          material={materials['Material.022']}
          position={[5.954, 8.351, 1.745]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sensor_Material037_0.geometry}
          material={materials['Material.037']}
          position={[2.336, 6.853, 3.016]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.int__0.geometry}
          material={materials.int__0}
          position={[0.793, -3.069, 9.449]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.171}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.capac_Material029_0.geometry}
          material={materials['Material.029']}
          position={[0, 18.749, 9.45]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PICIOARE_Material034_0.geometry}
          material={materials['Material.034']}
          position={[0, -7.864, 9.449]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/scene.gltf');
export default Model;



