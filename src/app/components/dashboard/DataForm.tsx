import React, { useState } from "react";
import FormValidation from "./FormValidation";

interface DataFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onValidationChange?: (isValid: boolean) => void;
}

const DataForm: React.FC<DataFormProps> = ({ onSubmit, onValidationChange }) => {
  const [formData, setFormData] = useState({
    networkProvider: "",
    dataPlan: "",
    phoneNumber: ""
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
    
    if (!formData.networkProvider || formData.networkProvider === "Network Provider") {
      errors.networkProvider = "Please select a network provider";
    }
    
    if (!formData.dataPlan || formData.dataPlan === "Data Plan") {
      errors.dataPlan = "Please select a data plan";
    }
    
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^(\+234|0)[789][01]\d{8}$/.test(formData.phoneNumber.replace(/\s/g, ""))) {
      errors.phoneNumber = "Please enter a valid Nigerian phone number";
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
                validation.fieldErrors.networkProvider ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.networkProvider}
              onChange={(e) => handleInputChange('networkProvider', e.target.value)}
            >
              <option value="">Network Provider</option>
              <option value="MTN">MTN</option>
              <option value="9mobile">9mobile</option>
              <option value="Airtel">Airtel</option>
              <option value="Glo">Glo</option>
            </select>
          </div>
          
          <div>
            <select 
              className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#19C37D] ${
                validation.fieldErrors.dataPlan ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.dataPlan}
              onChange={(e) => handleInputChange('dataPlan', e.target.value)}
            >
              <option value="">Data Plan</option>
              <option value="500MB">500MB - ₦200</option>
              <option value="1GB">1GB - ₦350</option>
              <option value="2GB">2GB - ₦650</option>
              <option value="5GB">5GB - ₦1,200</option>
              <option value="10GB">10GB - ₦2,000</option>
            </select>
          </div>
          
          <div>
            <input 
              type="text" 
              placeholder="Phone Number" 
              className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#19C37D] ${
                validation.fieldErrors.phoneNumber ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
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

export default DataForm; 