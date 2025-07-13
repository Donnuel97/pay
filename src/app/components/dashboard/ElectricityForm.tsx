import React, { useState } from "react";
import FormValidation from "./FormValidation";

interface ElectricityFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onValidationChange?: (isValid: boolean) => void;
}

const ElectricityForm: React.FC<ElectricityFormProps> = ({ onSubmit, onValidationChange }) => {
  const [formData, setFormData] = useState({
    provider: "",
    meterNumber: "",
    amount: ""
  });
  
  const [validation, setValidation] = useState({
    isValid: false,
    isLoading: false,
    errorMessage: "",
    successMessage: "",
    fieldErrors: {} as Record<string, string>
  });

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.provider || formData.provider === "Provider") {
      errors.provider = "Please select an electricity provider";
    }
    
    if (!formData.meterNumber) {
      errors.meterNumber = "Meter number is required";
    } else if (!/^\d{10,12}$/.test(formData.meterNumber.replace(/\s/g, ""))) {
      errors.meterNumber = "Please enter a valid meter number (10-12 digits)";
    }
    
    if (!formData.amount) {
      errors.amount = "Amount is required";
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) < 100) {
      errors.amount = "Amount must be at least ₦100";
    }

    const isValid = Object.keys(errors).length === 0;
    
    setValidation(prev => ({
      ...prev,
      isValid,
      fieldErrors: errors
    }));
    
    onValidationChange?.(isValid);
    
    return isValid;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear field-specific error when user starts typing
    if (validation.fieldErrors[field]) {
      setValidation(prev => ({
        ...prev,
        fieldErrors: { ...prev.fieldErrors, [field]: "" }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setValidation(prev => ({ ...prev, isLoading: true, errorMessage: "" }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setValidation(prev => ({
        ...prev,
        isLoading: false,
        successMessage: "Form validated successfully!"
      }));
      
      onSubmit(e);
    } catch (error) {
      setValidation(prev => ({
        ...prev,
        isLoading: false,
        errorMessage: "Failed to validate form. Please try again."
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-4">
        <FormValidation
          isValid={validation.isValid}
          isLoading={validation.isLoading}
          errorMessage={validation.errorMessage}
          successMessage={validation.successMessage}
          fieldErrors={validation.fieldErrors}
        />
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <select 
              className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#19C37D] ${
                validation.fieldErrors.provider ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.provider}
              onChange={(e) => handleInputChange('provider', e.target.value)}
            >
              <option value="">Provider</option>
              <option value="PHED">PHED</option>
              <option value="IKEDC">IKEDC</option>
              <option value="EKEDC">EKEDC</option>
              <option value="AEDC">AEDC</option>
            </select>
          </div>
          
          <div>
            <input 
              type="text" 
              placeholder="Meter Number" 
              className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#19C37D] ${
                validation.fieldErrors.meterNumber ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.meterNumber}
              onChange={(e) => handleInputChange('meterNumber', e.target.value)}
            />
          </div>
          
          <div>
            <input 
              type="text" 
              placeholder="Amount" 
              className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#19C37D] ${
                validation.fieldErrors.amount ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={validation.isLoading}
            className="w-full bg-[#19C37D] text-white font-bold py-3 rounded-lg mt-2 hover:bg-[#16a06a] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {validation.isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Validating...
              </>
            ) : (
              'Continue'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ElectricityForm; 