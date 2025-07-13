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
    } catch (error) {
      setErrorMessage("Failed to process payment method. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-payclick-dark mb-2">Select Payment Method</h2>
        <p className="text-gray-600">Choose your preferred payment option</p>
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-red-800">
            <FaShieldAlt />
            <span className="text-sm font-medium">{errorMessage}</span>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
              selectedMethod === method.id
                ? "border-[#19C37D] bg-green-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleMethodSelect(method.id)}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${
                selectedMethod === method.id ? "bg-[#19C37D] text-white" : "bg-gray-100 text-gray-600"
              }`}>
                {method.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{method.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <div className="flex flex-wrap gap-2">
                  {method.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedMethod === method.id
                  ? "border-[#19C37D] bg-[#19C37D]"
                  : "border-gray-300"
              }`}>
                {selectedMethod === method.id && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <FaLock className="text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-medium">Secure Payment</p>
            <p>Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.</p>
          </div>
        </div>
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
          'Continue to Payment'
        )}
      </button>
    </div>
  );
};

export default PaymentMethod; 