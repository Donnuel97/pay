import React from "react";
import { FaCheckCircle, FaTimes, FaInfoCircle } from "react-icons/fa";

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
  const getServiceIcon = (service: string) => {
    switch (service.toLowerCase()) {
      case 'airtime':
        return '📱';
      case 'data':
        return '📶';
      case 'cable':
        return '📺';
      case 'electricity':
        return '⚡';
      default:
        return '💰';
    }
  };

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
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-payclick-dark mb-2">Confirm Transaction</h2>
        <p className="text-gray-600">Please review your transaction details before proceeding</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getServiceIcon(details.service)}</span>
          <div>
            <h3 className="font-semibold text-lg">{details.service}</h3>
            <p className="text-gray-600">{details.provider}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-semibold text-lg">₦{details.amount}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">{getRecipientLabel(details.service)}:</span>
              <span className="font-medium">{getRecipientValue(details)}</span>
            </div>

            {details.dataPlan && (
              <div className="flex justify-between">
                <span className="text-gray-600">Data Plan:</span>
                <span className="font-medium">{details.dataPlan}</span>
              </div>
            )}

            {details.email && (
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{details.email}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-start space-x-2">
            <FaInfoCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium">Transaction Summary</p>
              <p>You will be charged ₦{details.amount} for this {details.service.toLowerCase()} purchase.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
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
  );
};

export default TransactionConfirmation; 