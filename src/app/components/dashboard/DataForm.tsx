import React, { useState } from "react";
import FormValidation from "./FormValidation";
import { FaSimCard, FaMobileAlt, FaWifi, FaBolt } from "react-icons/fa";

interface DataFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onValidationChange?: (isValid: boolean) => void;
}

const networkOptions = [
  { label: "MTN", value: "MTN", icon: "/imgs/carousel/Logo.svg.png" },
  { label: "9mobile", value: "9mobile", icon: "/imgs/carousel/airtel_logo.svg.png" },
  { label: "Airtel", value: "Airtel", icon: "/imgs/carousel/gotv_entertaining_africa_logo.svg.png" },
  { label: "Glo", value: "Glo", icon: "/imgs/carousel/layer1.png" }
];

const dataPlans = [
  { label: "500MB - ₦200", value: "500MB" },
  { label: "1GB - ₦350", value: "1GB" },
  { label: "2GB - ₦650", value: "2GB" },
  { label: "5GB - ₦1,200", value: "5GB" },
  { label: "10GB - ₦2,000", value: "10GB" }
];

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
    
    if (!formData.networkProvider) {
      errors.networkProvider = "Please select a network provider";
    }
    
    if (!formData.dataPlan) {
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
    } catch {
      setValidation(prev => ({
        ...prev,
        isLoading: false,
        errorMessage: "Failed to validate form. Please try again."
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl border-2 border-green-400 shadow-lg p-8">
        <h2 className="text-2xl font-bold text-payclick-dark mb-1">Buy Data</h2>
        <div className="text-gray-500 text-sm mb-4">Purchase data bundles for all networks</div>
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 mb-2">Select a Network Provider</div>
          <div className="flex gap-3 justify-center">
            {networkOptions.map(option => (
              <button
                key={option.value}
                type="button"
                className={`flex flex-col items-center justify-center border-2 rounded-lg p-2 w-16 h-16 transition-all duration-150 shadow-sm
                  ${formData.networkProvider === option.value ? 'border-[#19C37D] bg-green-50' : 'border-gray-200 bg-white hover:border-[#19C37D]'}
                `}
                onClick={() => handleInputChange('networkProvider', option.value)}
              >
                <img src={option.icon} alt={option.label} className="h-8 w-8 mb-1" />
                <span className="text-xs font-semibold text-gray-700">{option.label}</span>
              </button>
            ))}
          </div>
          {validation.fieldErrors.networkProvider && <div className="text-red-500 text-xs mt-1">{validation.fieldErrors.networkProvider}</div>}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <select
            className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#19C37D] ${validation.fieldErrors.dataPlan ? 'border-red-300' : 'border-gray-300'}`}
            value={formData.dataPlan}
            onChange={e => handleInputChange('dataPlan', e.target.value)}
          >
            <option value="">Data Plan</option>
            {dataPlans.map(plan => (
              <option key={plan.value} value={plan.value}>{plan.label}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Phone Number"
            className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#19C37D] ${validation.fieldErrors.phoneNumber ? 'border-red-300' : 'border-gray-300'}`}
            value={formData.phoneNumber}
            onChange={e => handleInputChange('phoneNumber', e.target.value)}
          />
          <button
            type="submit"
            disabled={validation.isLoading}
            className="w-full bg-[#19C37D] text-white font-bold py-3 rounded-lg mt-2 hover:bg-[#16a06a] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
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