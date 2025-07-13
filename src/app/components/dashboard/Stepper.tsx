import React from "react";

interface StepperProps {
  steps: string[];
  activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => (
  <div className="flex justify-between items-center mb-8">
    {steps.map((step, idx) => (
      <div key={step} className="flex-1 flex flex-col items-center">
        <span className={`text-sm font-bold mb-1 ${activeStep === idx ? "text-[#19C37D]" : "text-gray-400"}`}>{`${idx + 1}. ${step}`}</span>
        {idx < steps.length - 1 && (
          <div className="w-full h-1 bg-gray-200 mt-1 mb-1">
            <div className={`h-1 ${activeStep > idx ? "bg-[#19C37D]" : "bg-gray-200"}`}></div>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default Stepper; 