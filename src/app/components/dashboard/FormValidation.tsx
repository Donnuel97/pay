import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaSpinner } from "react-icons/fa";

interface FormValidationProps {
  isValid: boolean;
  isLoading: boolean;
  errorMessage?: string;
  successMessage?: string;
  fieldErrors?: Record<string, string>;
}

const FormValidation: React.FC<FormValidationProps> = ({
  isLoading,
  errorMessage,
  successMessage,
  fieldErrors
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2 text-[#19C37D] py-4">
        <FaSpinner className="animate-spin" />
        <span className="text-sm font-medium">Validating information...</span>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
        <FaExclamationTriangle />
        <span className="text-sm font-medium">{errorMessage}</span>
      </div>
    );
  }

  if (successMessage) {
    return (
      <div className="flex items-center space-x-2 text-[#19C37D] bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
        <FaCheckCircle />
        <span className="text-sm font-medium">{successMessage}</span>
      </div>
    );
  }

  if (fieldErrors && Object.keys(fieldErrors).length > 0) {
    return (
      <div className="space-y-2 mb-4">
        {Object.entries(fieldErrors).map(([field, error]) => (
          <div key={field} className="flex items-center space-x-2 text-red-600 text-sm">
            <FaExclamationTriangle className="text-xs" />
            <span>{error}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default FormValidation; 