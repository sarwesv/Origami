import React from 'react';
import { NINJA_STAR, SWAN } from '../../data/models';

interface SidebarProps {
  currentModel: 'swan' | 'ninjaStar';
  onModelChange: (model: 'swan' | 'ninjaStar') => void;
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  onReset: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentModel, 
  onModelChange, 
  currentStep, 
  onNext, 
  onBack, 
  onReset 
}) => {
  const modelData = currentModel === 'ninjaStar' ? NINJA_STAR : SWAN;
  const currentStepData = modelData.steps[currentStep];

  return (
    <div className="sidebar">
      <h1>Origami 3D</h1>
      
      <div className="control-group">
        <label>Select Model</label>
        <select 
          className="model-select" 
          value={currentModel} 
          onChange={(e) => {
            onModelChange(e.target.value as any);
            onReset();
          }}
        >
          <option value="ninjaStar">Ninja Star</option>
          <option value="swan">Swan</option>
        </select>
      </div>

      <div className="step-info">
        <h3>Step {currentStep + 1} of {modelData.steps.length}</h3>
        <p>{currentStepData?.description || 'Fold the paper.'}</p>
      </div>

      <div className="button-group">
        <button 
          className="btn btn-secondary" 
          onClick={onBack} 
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button 
          className="btn btn-primary" 
          onClick={onNext} 
          disabled={currentStep === modelData.steps.length - 1}
        >
          Next Fold
        </button>
      </div>

      <button className="btn btn-danger" onClick={onReset}>Reset / Unfold All</button>
    </div>
  );
};

export default Sidebar;
