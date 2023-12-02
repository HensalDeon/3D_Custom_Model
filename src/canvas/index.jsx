/* eslint-disable react/no-unknown-property */
import { Environment, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Model from "./Shirt";

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 26 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full h-full max-w-full transition-all ease-in"
        >
            <ambientLight intensity={0.2} />
            <Environment preset="city" />
            <CameraRig>
                <Backdrop />
                <Center>
                    <Model />
                </Center>
            </CameraRig>
        </Canvas>
    );
};

export default CanvasModel;
