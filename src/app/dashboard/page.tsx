"use client";
import { useState } from "react";
import { FaMobileAlt, FaWifi, FaTv, FaBolt, FaUserCircle, FaSearch } from "react-icons/fa";
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <div className="min-h-screen w-full flex flex-col" style={{ background: 'linear-gradient(120deg, #e0f2fe 60%, #b3e0fc 100%)' }}>
        {/* Top Nav Header */}
        <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-sm" style={{ background: 'linear-gradient(120deg, #e0f2fe 60%, #b3e0fc 100%)' }}>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/imgs/logo.png" alt="PayClick.ng" width={140} height={36} />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 pl-12 pr-4 rounded-full border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-[#19C37D] bg-white text-gray-700 text-base"
                style={{ boxShadow: '0 2px 8px 0 rgba(25,195,125,0.07)' }}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* User Icon and Guest Label */}
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 shadow">
              <FaUserCircle className="text-2xl text-gray-400" />
              <span className="text-gray-600 font-medium text-sm">Guest</span>
            </div>
            <button className="bg-[#19C37D] text-white px-5 py-2 rounded-full font-semibold text-base shadow hover:bg-[#16a06a] transition">Get App</button>
          </div>
        </header>
        <div className="flex flex-1 w-full">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-64 bg-[#e0f7fa]/80 border-r border-[#b3e0fc] py-10 px-6 space-y-8 shadow-lg min-h-[calc(100vh-64px)] rounded-tr-3xl rounded-br-3xl mt-4 ml-4">
            <Sidebar
              sidebarLinks={sidebarLinks}
              activeSidebar={activeSidebar}
              setActiveSidebar={setActiveSidebar}
              setActiveStep={setActiveStep}
            />
          </aside>
          {/* Main Content */}
          <main className="flex-1 flex flex-col justify-center items-center py-8 px-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 border border-[#e0f2fe]" style={{ minHeight: '420px' }}>
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