import React from "react";
import { FaCheckCircle, FaClock, FaSpinner, FaExclamationTriangle, FaDownload, FaShare } from "react-icons/fa";

type TransactionStep = 'initiated' | 'validating' | 'processing' | 'completed' | 'failed';

interface TransactionStatusProps {
  currentStep: TransactionStep;
  transactionId: string;
  service: string;
  amount: string;
  recipient: string;
  onDownloadReceipt?: () => void;
  onShareReceipt?: () => void;
  onNewTransaction?: () => void;
}

const TransactionStatus: React.FC<TransactionStatusProps> = ({
  currentStep,
  transactionId,
  service,
  amount,
  recipient,
  onDownloadReceipt,
  onShareReceipt,
  onNewTransaction
}) => {
  const steps = [
    { key: 'initiated', label: 'Transaction Initiated', description: 'Your transaction has been started' },
    { key: 'validating', label: 'Validating Details', description: 'Verifying your information' },
    { key: 'processing', label: 'Processing Payment', description: 'Processing your payment' },
    { key: 'completed', label: 'Transaction Completed', description: 'Your transaction is successful' }
  ];

  const getStepStatus = (stepKey: string) => {
    const stepIndex = steps.findIndex(step => step.key === stepKey);
    const currentIndex = steps.findIndex(step => step.key === currentStep);
    
    if (currentStep === 'failed') {
      return 'failed';
    }
    
    if (stepIndex < currentIndex) {
      return 'completed';
    } else if (stepIndex === currentIndex) {
      return 'current';
    } else {
      return 'pending';
    }
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-[#19C37D]" />;
      case 'current':
        return <FaSpinner className="animate-spin text-[#19C37D]" />;
      case 'failed':
        return <FaExclamationTriangle className="text-red-500" />;
      default:
        return <FaClock className="text-gray-400" />;
    }
  };

  const isCompleted = currentStep === 'completed';
  const isFailed = currentStep === 'failed';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-payclick-dark mb-2">Transaction Status</h2>
        <p className="text-gray-600">Track your transaction progress</p>
      </div>

      {/* Transaction Details */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Transaction ID:</span>
            <p className="font-mono font-medium">{transactionId}</p>
          </div>
          <div>
            <span className="text-gray-600">Service:</span>
            <p className="font-medium">{service}</p>
          </div>
          <div>
            <span className="text-gray-600">Amount:</span>
            <p className="font-medium">₦{amount}</p>
          </div>
          <div>
            <span className="text-gray-600">Recipient:</span>
            <p className="font-medium">{recipient}</p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          const status = getStepStatus(step.key);
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.key} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  status === 'completed' ? 'bg-[#19C37D]' :
                  status === 'current' ? 'bg-[#19C37D]' :
                  status === 'failed' ? 'bg-red-500' :
                  'bg-gray-200'
                }`}>
                  {getStepIcon(status)}
                </div>
                {!isLast && (
                  <div className={`w-0.5 h-8 mt-2 ${
                    status === 'completed' ? 'bg-[#19C37D]' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
              <div className="flex-1 pt-1">
                <h3 className={`font-medium ${
                  status === 'completed' ? 'text-[#19C37D]' :
                  status === 'current' ? 'text-[#19C37D]' :
                  status === 'failed' ? 'text-red-500' :
                  'text-gray-400'
                }`}>
                  {step.label}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Failed State */}
      {isFailed && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-red-800">
            <FaExclamationTriangle />
            <span className="font-medium">Transaction Failed</span>
          </div>
          <p className="text-red-700 text-sm mt-2">
            We encountered an issue processing your transaction. Please try again or contact support.
          </p>
        </div>
      )}

      {/* Success Actions */}
      {isCompleted && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-green-800">
              <FaCheckCircle />
              <span className="font-medium">Transaction Successful!</span>
            </div>
            <p className="text-green-700 text-sm mt-2">
              Your {service.toLowerCase()} has been processed successfully. You will receive a confirmation shortly.
            </p>
          </div>

          <div className="flex gap-3">
            {onDownloadReceipt && (
              <button
                onClick={onDownloadReceipt}
                className="flex-1 bg-[#19C37D] text-white font-semibold py-3 rounded-lg hover:bg-[#16a06a] transition flex items-center justify-center"
              >
                <FaDownload className="mr-2" />
                Download Receipt
              </button>
            )}
            {onShareReceipt && (
              <button
                onClick={onShareReceipt}
                className="flex-1 bg-[#1A56DB] text-white font-semibold py-3 rounded-lg hover:bg-[#1746a2] transition flex items-center justify-center"
              >
                <FaShare className="mr-2" />
                Share Receipt
              </button>
            )}
          </div>

          {onNewTransaction && (
            <div className="text-center">
              <button
                onClick={onNewTransaction}
                className="text-[#19C37D] font-semibold hover:underline"
              >
                Make Another Transaction
              </button>
            </div>
          )}
        </div>
      )}

      {/* Processing State */}
      {currentStep === 'processing' && (
        <div className="text-center text-sm text-gray-500">
          <p>Please wait while we process your transaction...</p>
          <p>This may take a few moments.</p>
        </div>
      )}
    </div>
  );
};

export default TransactionStatus; 