import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/model1/scene.gltf"); // ✅ path must match 'public/model1/scene.gltf'

  return (
     <group {...props} dispose={null} scale={props.scale || 0.01} position={[0, -3, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_White_metal_0.geometry}
          material={materials.White_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Black_resin_0.geometry}
          material={materials.Black_resin}
        />
      </group>
      <group position={[0, 394.078, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_White_metal_0.geometry}
          material={materials.White_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_Black_base_0.geometry}
          material={materials.Black_base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_Shiny_metal_0.geometry}
          material={materials.Shiny_metal}
        />
      </group>
      <group
        position={[973.79, 2313.213, -334.722]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[27.181, 24.449, 43.573]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_Black_base_0.geometry}
          material={materials.Black_base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_White_metal_boxes_0.geometry}
          material={materials.White_metal_boxes}
          position={[-0.038, 0, 1.949]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[4.09, 3.679, 2.295]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_White_metal_0.geometry}
          material={materials.White_metal}
          position={[0.071, 5.48, 3.373]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3.679, 2.295, 4.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_White_metal_0.geometry}
          material={materials.White_metal}
          position={[0.071, 5.48, 0.671]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3.679, 2.295, 4.09]}
        />
      </group>
      <group
        position={[0, 311.132, 1222.317]}
        rotation={[-2.006, 0, Math.PI]}
        scale={[-220.507, 10.584, 139.837]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_Display_0.geometry}
          material={materials.Display}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_White_metal_0.geometry}
          material={materials.White_metal}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Black_base_0.geometry}
        material={materials.Black_base}
        position={[0, 394.078, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1095.862, 394.078, 19.067]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Black_base_0.geometry}
        material={materials.Black_base}
        position={[0, 394.078, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Black_base_table_0.geometry}
        material={materials.Black_base_table}
        position={[0, 680.507, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-402.13, 603.374, -1136.547]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl__0.geometry}
        material={materials.Bolts_cyl__0}
        position={[-402.13, 493.547, -1136.547]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_Shiny_metal_0.geometry}
        material={materials.Shiny_metal}
        position={[-402.13, 584.834, -48.562]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 99.883, 100]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-402.13, 657.82, -123.47]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[79.425, 26.153, 16.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-430.363, 637.242, 125.994]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Shiny_metal_gold001_0.geometry}
        material={materials['Shiny_metal_gold.001']}
        position={[0, 680.507, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-430.363, 637.242, -124.712]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_Black_base_0.geometry}
        material={materials.Black_base}
        position={[403.256, 603.374, -1136.547]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_Shiny_metal_0.geometry}
        material={materials.Shiny_metal}
        position={[403.256, 584.834, -48.562]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 99.883, 100]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_Black_base_0.geometry}
        material={materials.Black_base}
        position={[403.256, 619.298, -48.563]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003_White_metal_0.geometry}
        material={materials.White_metal}
        position={[375.023, 637.242, -124.712]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl001_White_metal_0.geometry}
        material={materials.White_metal}
        position={[0, 680.507, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007__0.geometry}
        material={materials.Bolts_cyl__0}
        position={[-0.024, 559.49, 858.869]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[108.357, 108.357, 119.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.024, 582.29, 858.869]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.024, 534.334, 858.869]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.024, 525.415, 858.869]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={129.502}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-0.024, 508.828, 858.869]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[29.211, 29.211, 14.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011__0.geometry}
        material={materials.Bolts_cyl__0}
        position={[-0.024, 559.49, -919.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[108.357, 108.357, 119.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.024, 582.29, -919.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.024, 534.334, -919.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-0.024, 525.415, -919.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={129.502}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-0.024, 599.38, -919.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[29.211, 29.211, 14.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl002_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.03, 496.63, -978.638]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.024, 492.574, -919.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={146.794}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017_Black_resin_0.geometry}
        material={materials.Black_resin}
        position={[-0.024, 559.49, -919.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[130.194, 130.194, 107.505]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid_Shiny_metal_0.geometry}
        material={materials.Shiny_metal}
        position={[0, 1575.526, -101.055]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020_White_metal_0.geometry}
        material={materials.White_metal}
        position={[0, 800.441, -47.438]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_Black_base_0.geometry}
        material={materials.Black_base}
        position={[0, 800.441, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_White_metal_boxes_0.geometry}
        material={materials.White_metal_boxes}
        position={[0, 800.441, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021_White_metal_0.geometry}
        material={materials.White_metal}
        position={[0, 800.441, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={167.364}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_Shiny_metal_0.geometry}
        material={materials.Shiny_metal}
        position={[0, 800.441, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023_Shiny_metal_0.geometry}
        material={materials.Shiny_metal}
        position={[-1.66, 2300.074, -100.906]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[89.019, 83.153, 89.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024_Shiny_metal_0.geometry}
        material={materials.Shiny_metal}
        position={[-1.66, 2494.427, -100.906]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[89.831, 81.523, 89.831]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-993.232, 2460.17, -398.019]}
        rotation={[-Math.PI, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-993.232, 2342.448, -398.019]}
        rotation={[-Math.PI, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-991.207, 2313.213, -264.742]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[27.181, 24.449, 43.573]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl003_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-860.595, 2397.335, -97.716]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={71.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025_Shiny_metal_0.geometry}
        material={materials.Shiny_metal}
        position={[975.711, 2396.709, -331.462]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[41.634, 12.126, 41.634]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015_Black_base_0.geometry}
        material={materials.Black_base}
        position={[1014.772, 2396.709, -331.79]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[112.102, 105.246, 105.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl004_White_metal_0.geometry}
        material={materials.White_metal}
        position={[864.127, 2397.335, -97.716]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={71.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Black_base_0.geometry}
        material={materials.Black_base}
        position={[1060.535, 2396.709, -331.462]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026_Shiny_metal_gold_0.geometry}
        material={materials.Shiny_metal_gold}
        position={[1061.038, 2396.709, -331.462]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[65.591, 2.166, 65.591]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027_Shiny_metal_2_0.geometry}
        material={materials.Shiny_metal_2}
        position={[1059.327, 2523.848, -301.7]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[58.899, 2.494, 58.899]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028_Black_resin_0.geometry}
        material={materials.Black_resin}
        position={[1059.327, 2523.848, -301.7]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030_Black_base_0.geometry}
        material={materials.Black_base}
        position={[1059.327, 2557.111, -301.7]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl006_White_metal_0.geometry}
        material={materials.White_metal}
        position={[1097.707, 2322.725, -401.47]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={71.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2355.132, -307.239]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018__0.geometry}
        material={materials.Bolts_cyl__0}
        position={[38.595, 559.49, -31.061]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere007__0.geometry}
        material={materials.Bolts_cyl__0}
        position={[51.752, 559.048, -32.24]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019__0.geometry}
        material={materials.Bolts_cyl__0}
        position={[102.906, 657.82, -32.751]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[79.425, 26.153, 16.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-20.525, 695.691, 0.641]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-0.024, 73.193, 64.454]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031_Black_resin_0.geometry}
        material={materials.Black_resin}
        position={[-4.577, 2402.735, -95.88]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[121.026, 142.859, 76.317]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2355.132, -326.534]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2494.284, -100.904]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[29.817, 29.817, 52.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2489.809, -319.874]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[52.771, 170.935, 48.841]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033_Shiny_metal_2_0.geometry}
        material={materials.Shiny_metal_2}
        position={[-1.66, 2494.427, -100.906]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2300.839, -100.904]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[29.817, 29.817, 52.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2296.365, -319.874]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[52.771, 170.935, 48.841]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2374.861, -112.044]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[16.334, 53.01, 70.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024_Black_base_0.geometry}
        material={materials.Black_base}
        position={[-1.66, 2372.569, -319.874]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[52.771, 170.935, 12.474]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_Black_resin_0.geometry}
        material={materials.Black_resin}
        position={[-1.66, 2202.599, -307.239]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[15.688, 15.827, 15.688]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018_White_metal_boxes_0.geometry}
        material={materials.White_metal_boxes}
        position={[-1.66, 2233.059, -307.239]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-1.66, 2261.73, -307.239]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve_Material_0.geometry}
        material={materials.Material}
        position={[1059.327, 2557.111, -301.7]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001_Black_resin_0.geometry}
        material={materials.Black_resin}
        position={[997.316, 323.529, -258.03]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder036_Black_base_0.geometry}
        material={materials.Black_base}
        position={[997.316, 236.306, -258.03]}
        scale={35.858}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037_White_metal_0.geometry}
        material={materials.White_metal}
        position={[-1.954, 2485.743, -302.432]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={7.021}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009_Material_0.geometry}
        material={materials.Material}
        position={[-1.66, 2186.91, -307.239]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={8.415}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007_White_metal_boxes_0.geometry}
        material={materials.White_metal_boxes}
        position={[-1.66, 2441.248, -283.401]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/model1/scene.gltf')



