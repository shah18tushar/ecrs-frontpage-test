'use client';

import {Canvas} from '@react-three/fiber';
import {OrbitControls, Environment, useGLTF} from '@react-three/drei';
import {Suspense} from 'react';

const CarModel = ({type}) => {
  const modelMap = {
    sedan: '/sedancar.glb',
    supercar: '/supercar.glb',
    muv: '/muv.glb',
    bus: '/bus.glb',
  };

  const glbPath = modelMap[type];
  const {scene} = useGLTF (glbPath);

  return <primitive object={scene} scale={type === 'bus' ? 1 : 1.5} />;
};

export default function CarCarousel({selectedType, setSelectedType}) {
  const cameraPosition = selectedType === 'bus' ? [-6, 2, 6] : [0, 2, 8]; // left side view for bus

  return (
    <div className="w-full border-none backdrop-blur-md">
      {/* 3D Car Canvas */}
      <div className="w-full h-[300px] md:h-[325px]">
        <Canvas camera={{ position: cameraPosition, fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <CarModel type={selectedType} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <p className="text-center text-sm font-medium">
        Explore in 360° View
      </p>

      {/* Car Type Icons */}
      <div className="flex justify-around mt-2 px-4 pb-4">
        {["bus", "supercar", "sedan", "muv"].map((type) => (
          <div
            key={type}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedType(type)}
          >
            <img
              src={`/${type}.png`}
              alt={type}
              className={`w-10 h-10 mb-1 transition-transform duration-200 ${
                selectedType === type ? "scale-110" : ""
              }`}
            />
            <span
              className={`text-xs capitalize ${
                selectedType === type
                  ? "font-semibold text-red-600"
                  : "text-gray-700"
              }`}
            >
              {type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
