"use client";
import { useState } from "react";
import { FaMobileAlt, FaWifi, FaTv, FaBolt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/dashboard/Sidebar";
import Stepper from "../components/dashboard/Stepper";
import AirtimeForm from "../components/dashboard/AirtimeForm";
import DataForm from "../components/dashboard/DataForm";
import CableForm from "../components/dashboard/CableForm";
import ElectricityForm from "../components/dashboard/ElectricityForm";
import PaymentMethod from "../components/dashboard/PaymentMethod";
import Receipt from "../components/dashboard/Receipt";
import TransactionConfirmation from "../components/dashboard/TransactionConfirmation";
import PaymentProcessing from "../components/dashboard/PaymentProcessing";
import TransactionStatus from "../components/dashboard/TransactionStatus";
import ErrorBoundary from "../components/dashboard/ErrorBoundary";

const sidebarLinks = [
  { icon: <FaMobileAlt />, label: "Airtime" },
  { icon: <FaWifi />, label: "Data" },
  { icon: <FaTv />, label: "Cable" },
  { icon: <FaBolt />, label: "Electricity" },
];

const steps = [
  "Enter Information",
  "Confirm Details",
  "Make Payment",
  "View Receipt",
];

interface TransactionData {
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

export default function Dashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0);
  const [transactionData, setTransactionData] = useState<TransactionData | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'processing' | 'success' | 'failed' | 'pending'>('processing');
  const [transactionId, setTransactionId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const getServiceName = (index: number) => {
    switch (index) {
      case 0: return "Airtime";
      case 1: return "Data";
      case 2: return "Cable";
      case 3: return "Electricity";
      default: return "";
    }
  };

  const handleFormSubmit = (formData: any) => {
    const service = getServiceName(activeSidebar);
    const transactionDetails: TransactionData = {
      service,
      provider: formData.networkProvider || formData.provider,
      amount: formData.amount,
      phoneNumber: formData.phoneNumber,
      meterNumber: formData.meterNumber,
      smartCardNumber: formData.smartCardNumber,
      dataPlan: formData.dataPlan,
      email: formData.email
    };
    
    setTransactionData(transactionDetails);
    setActiveStep(1);
  };

  const handleConfirmation = () => {
    setActiveStep(2);
  };

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = async () => {
    setIsProcessing(true);
    setPaymentStatus('processing');
    setTransactionId(`TXN${Date.now()}`);
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success');
      setIsProcessing(false);
      setActiveStep(3);
    }, 3000);
  };

  const handleRetryPayment = () => {
    setPaymentStatus('processing');
    setIsProcessing(true);
    
    setTimeout(() => {
      setPaymentStatus('success');
      setIsProcessing(false);
      setActiveStep(3);
    }, 2000);
  };

  const handleNewTransaction = () => {
    setActiveStep(0);
    setTransactionData(null);
    setPaymentStatus('processing');
    setTransactionId("");
    setPaymentMethod("");
    setIsProcessing(false);
  };

  // Step 1: Dynamic form based on process
  const renderStep1 = () => {
    const service = getServiceName(activeSidebar);
    const descriptions = {
      Airtime: "Stay Connected! Top-up your airtime online - MTN, 9mobile, Airtel, Glo",
      Data: "Purchase data bundles for all networks - MTN, 9mobile, Airtel, Glo",
      Cable: "Pay for your Cable TV subscription - DSTV, GOTV, Startimes",
      Electricity: "Pay your electricity bills - PHED, IKEDC, EKEDC, AEDC"
    };

    switch (activeSidebar) {
      case 0:
        return (
          <>
            <h2 className="text-2xl font-bold text-payclick-dark mb-2">Buy Airtime</h2>
            <a href="#" className="text-[#1A56DB] text-sm underline mb-4 inline-block">{descriptions.Airtime}</a>
            <AirtimeForm 
              onSubmit={(e) => { 
                e.preventDefault(); 
                // Extract form data and call handleFormSubmit
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                handleFormSubmit(data);
              }} 
            />
          </>
        );
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold text-payclick-dark mb-2">Buy Data</h2>
            <a href="#" className="text-[#1A56DB] text-sm underline mb-4 inline-block">{descriptions.Data}</a>
            <DataForm 
              onSubmit={(e) => { 
                e.preventDefault(); 
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                handleFormSubmit(data);
              }} 
            />
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold text-payclick-dark mb-2">Pay Cable TV</h2>
            <a href="#" className="text-[#1A56DB] text-sm underline mb-4 inline-block">{descriptions.Cable}</a>
            <CableForm 
              onSubmit={(e) => { 
                e.preventDefault(); 
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                handleFormSubmit(data);
              }} 
            />
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold text-payclick-dark mb-2">Pay Electricity Bill</h2>
            <a href="#" className="text-[#1A56DB] text-sm underline mb-4 inline-block">{descriptions.Electricity}</a>
            <ElectricityForm 
              onSubmit={(e) => { 
                e.preventDefault(); 
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                handleFormSubmit(data);
              }} 
            />
          </>
        );
      default:
        return null;
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return renderStep1();
      case 1:
        return transactionData ? (
          <TransactionConfirmation
            details={transactionData}
            onConfirm={handleConfirmation}
            onEdit={() => setActiveStep(0)}
          />
        ) : null;
      case 2:
        return isProcessing ? (
          <PaymentProcessing
            status={paymentStatus}
            paymentMethod={paymentMethod}
            amount={transactionData?.amount || ""}
            transactionId={transactionId}
            onRetry={handleRetryPayment}
          />
        ) : (
          <PaymentMethod 
            onSubmit={(e) => { 
              e.preventDefault(); 
              handlePaymentSubmit();
            }}
            onValidationChange={(isValid) => {
              if (isValid) {
                handlePaymentSubmit();
              }
            }}
          />
        );
      case 3:
        return transactionData ? (
          <TransactionStatus
            currentStep="completed"
            transactionId={transactionId}
            service={transactionData.service}
            amount={transactionData.amount}
            recipient={transactionData.phoneNumber || transactionData.meterNumber || transactionData.smartCardNumber || ""}
            onNewTransaction={handleNewTransaction}
          />
        ) : (
          <Receipt />
        );
      default:
        return null;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#e0f2fe] via-white to-[#e0f2fe] flex flex-col">
        {/* Top Nav Header */}
        <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/imgs/logo.png" alt="PayClick.ng" width={140} height={36} />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-[#19C37D] text-white px-5 py-2 rounded-full font-semibold text-base shadow hover:bg-[#16a06a] transition">Get App</button>
          </div>
        </header>
        <div className="flex flex-1 w-full">
          {/* Sidebar */}
          <Sidebar
            sidebarLinks={sidebarLinks}
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
            setActiveStep={setActiveStep}
          />
          {/* Main Content */}
          <main className="flex-1 flex flex-col py-12 px-6">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
              {/* Stepper */}
              <Stepper steps={steps} activeStep={activeStep} />
              {/* Step Content */}
              <div>
                {renderStepContent()}
              </div>
              <div className="mt-6 text-center text-[#1A56DB] text-sm font-medium">
                Download the PayClick mobile App to enjoy more in-app features...
              </div>
            </div>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
} 