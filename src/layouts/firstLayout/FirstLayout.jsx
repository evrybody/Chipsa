import Model from "../../Components/Model/Model";
import { Canvas } from "@react-three/fiber";
import AnimatedModel from "../../Components/AnimatedModel/AnimatedModel";
import { OrbitControls } from "@react-three/drei";
import CameraAnimation from "../../Components/CameraAnimation/CameraAnimation";

export default function FirstLayout({ scrollIndex }) {
  return (
    <Canvas
      gl={{ antialias: true }}
      style={{ background: "linear-gradient(to top, #646200, #ffffff)" }}
    >
      <ambientLight position={[0, -3, 1]} intensity={0.5} color={"white"} />
      <directionalLight position={[0, 5, 1]} intensity={0.7} color={"red"} />
      <directionalLight
        position={[0, -3, 1]}
        intensity={0.7}
        color={"yellow"}
      />
      <directionalLight position={[0, -3, 1]} intensity={2} color={"orange"} />

      <Model path="/models/wall.glb" position={[0, -3, -1]} />
      <Model path="/models/table.glb" position={[0, -3, -1]} />
      <Model
        path="/models/chair.glb"
        position={[0, -3, -1]}
        isLiftable={true}
      />
      <Model
        path="/models/keyboard.glb"
        position={[0, -3, -1]}
        isLiftable={true}
      />
      <Model
        path="/models/laptop.glb"
        position={[0, -3, -1]}
        isLiftable={true}
      />
      <Model
        path="/models/monitor.glb"
        position={[0, -3, -1]}
        isLiftable={true}
      />
      <Model path="/models/pc.glb" position={[0, -3, -1]} isLiftable={true} />
      <Model
        path="/models/painting_one.glb"
        position={[0, -3, -1]}
        isLiftable={true}
      />
      <Model
        path="/models/painting_two.glb"
        position={[0, -3, -1]}
        isLiftable={true}
      />
      <Model
        path="/models/painting_three.glb"
        position={[0, -3, -1]}
        isLiftable={true}
      />
      <Model path="/models/floor.glb" position={[0, -3, -1]} />
      
      <CameraAnimation scrollIndex={scrollIndex} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
