import React, { useState } from "react";
import { FaCreditCard, FaUniversity, FaMobile, FaLock, FaShieldAlt } from "react-icons/fa";

interface PaymentMethodProps {
  onSubmit: (e: React.FormEvent) => void;
  onValidationChange?: (isValid: boolean) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ onSubmit, onValidationChange }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <FaCreditCard className="text-2xl" />,
      description: "Pay securely with your card",
      features: ["Instant processing", "Secure payment", "All cards accepted"]
    },
    {
      id: "transfer",
      name: "Bank Transfer",
      icon: <FaUniversity className="text-2xl" />,
      description: "Transfer from your bank account",
      features: ["No additional fees", "Direct bank transfer", "24/7 available"]
    },
    {
      id: "ussd",
      name: "USSD",
      icon: <FaMobile className="text-2xl" />,
      description: "Pay using USSD code",
      features: ["Quick payment", "No internet needed", "Mobile banking"]
    }
  ];

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    setErrorMessage("");
    onValidationChange?.(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMethod) {
      setErrorMessage("Please select a payment method");
      onValidationChange?.(false);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    
    try {
      // Simulate payment method validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(e);
    } catch {
      setErrorMessage("Failed to process payment method. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-400 max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-payclick-dark mb-6">Choose Payment method</h2>
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 text-red-800">
            <FaShieldAlt />
            <span className="text-sm font-medium">{errorMessage}</span>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          type="button"
          onClick={() => handleMethodSelect('card')}
          className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-base border-2 transition-all duration-150 shadow-sm
            ${selectedMethod === 'card' ? 'bg-[#1A56DB] text-white border-[#1A56DB]' : 'bg-white text-[#1A56DB] border-[#1A56DB] hover:bg-[#e0f2fe]'}
          `}
        >
          <FaCreditCard className="text-xl" /> Pay with Card
        </button>
        <button
          type="button"
          onClick={() => handleMethodSelect('ussd')}
          className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-base border-2 transition-all duration-150 shadow-sm
            ${selectedMethod === 'ussd' ? 'bg-[#1A56DB] text-white border-[#1A56DB]' : 'bg-white text-[#1A56DB] border-[#1A56DB] hover:bg-[#e0f2fe]'}
          `}
        >
          <FaMobile className="text-xl" /> Pay with USSD
        </button>
        <button
          type="button"
          disabled
          className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-base border-2 border-gray-200 bg-white text-gray-400 cursor-not-allowed shadow-sm"
        >
          <FaUniversity className="text-xl" /> Pay with Bank Transfer
        </button>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!selectedMethod || isLoading}
        className="w-full bg-[#19C37D] text-white font-bold py-3 rounded-lg hover:bg-[#16a06a] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Processing...
          </>
        ) : (
          'Continue'
        )}
      </button>
    </div>
  );
};

export default PaymentMethod; 