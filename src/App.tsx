import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import Sidebar from './components/origami/Sidebar';
import PaperModel from './components/origami/PaperModel';
import './App.css';

const App: React.FC = () => {
  const [currentModel, setCurrentModel] = useState<'swan' | 'ninjaStar'>('ninjaStar');
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => Math.max(0, prev - 1));
  const handleReset = () => setCurrentStep(0);

  return (
    <div className="app-container">
      <Sidebar 
        currentModel={currentModel} 
        onModelChange={setCurrentModel}
        currentStep={currentStep}
        onNext={handleNext}
        onBack={handleBack}
        onReset={handleReset}
      />
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} castShadow intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <PaperModel model={currentModel} step={currentStep} />
          
          <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2} far={4} />
          <Environment preset="city" />
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </div>
  );
};

export default App;
