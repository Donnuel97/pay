import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

interface TransactionDetails {
  service: string;
  provider: string;
  amount: string;
  recipient?: string;
  meterNumber?: string;
  smartCardNumber?: string;
  phoneNumber?: string;
  dataPlan?: string;
  email?: string;
  transactionId?: string;
}

interface TransactionConfirmationProps {
  details: TransactionDetails;
  onConfirm: () => void;
  onEdit: () => void;
  isLoading?: boolean;
}

const TransactionConfirmation: React.FC<TransactionConfirmationProps> = ({
  details,
  onConfirm,
  onEdit,
  isLoading = false
}) => {
  const getRecipientLabel = (service: string) => {
    switch (service.toLowerCase()) {
      case 'airtime':
      case 'data':
        return 'Phone Number';
      case 'cable':
        return 'Smart Card Number';
      case 'electricity':
        return 'Meter Number';
      default:
        return 'Recipient';
    }
  };

  const getRecipientValue = (details: TransactionDetails) => {
    return details.phoneNumber || details.meterNumber || details.smartCardNumber;
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e0f2fe] max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-payclick-dark mb-2">Please Confirm Your Transaction Details are as follows:</h2>
        <div className="text-xs text-gray-500 font-semibold mb-2">TRANSACTION DETAILS:</div>
        <div className="rounded-xl border-2 border-green-400 bg-white/80 p-6 mb-6">
          <div className="grid grid-cols-1 gap-2 text-base">
            <div className="flex justify-between items-center py-1">
              <span className="font-medium text-gray-700">Network Provider</span>
              <span className="text-gray-900 font-semibold">{details.provider}</span>
            </div>
            {getRecipientValue(details) && (
              <div className="flex justify-between items-center py-1">
                <span className="font-medium text-gray-700">{getRecipientLabel(details.service)}</span>
                <span className="text-gray-900 font-semibold">{getRecipientValue(details)}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-1">
              <span className="font-medium text-gray-700">Amount</span>
              <span className="text-gray-900 font-semibold">₦{details.amount}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-medium text-gray-700">Transaction ID</span>
              <span className="text-gray-900 font-semibold">{details.transactionId || 'Auto-generated'}</span>
            </div>
            {details.email && (
              <div className="flex justify-between items-center py-1">
                <span className="font-medium text-gray-700">Email</span>
                <span className="text-gray-900 font-semibold">{details.email}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={onEdit}
            disabled={isLoading}
            className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
          >
            <FaTimes className="inline mr-2" />
            Edit Details
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 bg-[#19C37D] text-white font-semibold py-3 rounded-lg hover:bg-[#16a06a] transition disabled:opacity-50 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <FaCheckCircle className="mr-2" />
                Confirm & Proceed
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionConfirmation; 