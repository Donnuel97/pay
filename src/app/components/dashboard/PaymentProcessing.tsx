import React from "react";
import { FaSpinner, FaCheckCircle, FaExclamationTriangle, FaCreditCard, FaShieldAlt } from "react-icons/fa";

type PaymentStatus = 'processing' | 'success' | 'failed' | 'pending';

interface PaymentProcessingProps {
  status: PaymentStatus;
  paymentMethod: string;
  amount: string;
  transactionId?: string;
  errorMessage?: string;
  onRetry?: () => void;
}

const PaymentProcessing: React.FC<PaymentProcessingProps> = ({
  status,
  paymentMethod,
  amount,
  transactionId,
  errorMessage,
  onRetry
}) => {
  const getStatusConfig = (status: PaymentStatus) => {
    switch (status) {
      case 'processing':
        return {
          icon: <FaSpinner className="animate-spin text-4xl text-[#19C37D]" />,
          title: 'Processing Payment',
          subtitle: 'Please wait while we process your payment...',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-800'
        };
      case 'success':
        return {
          icon: <FaCheckCircle className="text-4xl text-[#19C37D]" />,
          title: 'Payment Successful!',
          subtitle: 'Your payment has been processed successfully.',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800'
        };
      case 'failed':
        return {
          icon: <FaExclamationTriangle className="text-4xl text-red-500" />,
          title: 'Payment Failed',
          subtitle: 'We encountered an issue processing your payment.',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800'
        };
      case 'pending':
        return {
          icon: <FaSpinner className="animate-pulse text-4xl text-yellow-500" />,
          title: 'Payment Pending',
          subtitle: 'Your payment is being verified...',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mb-4">
          {config.icon}
        </div>
        <h2 className="text-2xl font-bold text-payclick-dark mb-2">{config.title}</h2>
        <p className="text-gray-600">{config.subtitle}</p>
      </div>

      <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-6`}>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Payment Method:</span>
            <div className="flex items-center space-x-2">
              <FaCreditCard className="text-gray-400" />
              <span className="font-medium">{paymentMethod}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Amount:</span>
            <span className="font-bold text-lg">₦{amount}</span>
          </div>

          {transactionId && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                {transactionId}
              </span>
            </div>
          )}

          {status === 'processing' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[#19C37D] rounded-full animate-pulse"></div>
                <span>Validating payment details...</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[#19C37D] rounded-full animate-pulse"></div>
                <span>Processing with payment gateway...</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span>Confirming transaction...</span>
              </div>
            </div>
          )}

          {status === 'failed' && errorMessage && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-3">
              <p className="text-red-800 text-sm">{errorMessage}</p>
            </div>
          )}

          {status === 'success' && (
            <div className="bg-green-100 border border-green-300 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <FaShieldAlt className="text-green-600" />
                <p className="text-green-800 text-sm">
                  Your transaction is secure and has been processed successfully.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {status === 'failed' && onRetry && (
        <div className="text-center">
          <button
            onClick={onRetry}
            className="bg-[#19C37D] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#16a06a] transition"
          >
            Try Again
          </button>
        </div>
      )}

      {status === 'processing' && (
        <div className="text-center text-sm text-gray-500">
          <p>Please do not close this window or refresh the page.</p>
          <p>This process may take a few moments...</p>
        </div>
      )}
    </div>
  );
};

export default PaymentProcessing; 