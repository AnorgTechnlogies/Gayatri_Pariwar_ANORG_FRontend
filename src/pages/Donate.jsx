import React, { useState, useEffect } from 'react'; // Added useEffect
import { useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Donate = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const [donationAmount, setDonationAmount] = useState("0");
  const [coverFees, setCoverFees] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);

  // Auto scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]); // Re-run when path changes

  const handleContactClick = () => {
    navigate('/contact');
  };

  const initialOptions = {
    "client-id": "AVvLkCN03nF_LE2dWHPQsp4n7LUxm_D3PaKuZAlXad0BMAqCoDgiDkAk6F_dJcuOcueYoaeNrB6Muvro",
    currency: "USD",
    intent: "capture",
  };

  const presetAmounts = [25, 50, 100, 250, 500];
  // const feePercentage = 0.029 + 0.30; // 2.9% + $0.30 typical PayPal fees

  const calculateTotalAmount = () => {
    let amount = parseFloat(donationAmount) || 0;
    if (coverFees && amount > 0) {
      // Calculate amount needed to cover fees
      amount = (amount + 0.30) / (1 - 0.029);
    }
    return Math.round(amount * 100) / 100; // Round to 2 decimal places
  };

  const getFeeAmount = () => {
    if (!coverFees || donationAmount === "0") return 0;
    const baseAmount = parseFloat(donationAmount) || 0;
    const totalAmount = calculateTotalAmount();
    return Math.round((totalAmount - baseAmount) * 100) / 100;
  };

  const createOrder = (data, actions) => {
    const totalAmount = calculateTotalAmount().toFixed(2);
    
    if (totalAmount <= 0) {
      alert("Please enter a valid donation amount");
      return Promise.reject("Invalid amount");
    }

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalAmount,
            breakdown: {
              item_total: {
                value: totalAmount,
                currency_code: "USD"
              }
            }
          },
          items: [
            {
              name: `Donation to All World Gayatri Pariwar${isMonthly ? ' (Monthly)' : ''}`,
              description: "Supporting spiritual education and community service",
              quantity: "1",
              unit_amount: {
                value: totalAmount,
                currency_code: "USD"
              }
            }
          ],
          description: `Donation to All World Gayatri Pariwar Bal Sanskar Shala DFW${isMonthly ? ' - Monthly' : ''}`,
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING"
      }
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const totalAmount = calculateTotalAmount().toFixed(2);
      alert(`Thank you for your $${totalAmount} donation${isMonthly ? ' (Monthly)' : ''}, ${details.payer.name.given_name}!`);
      console.log('Donation completed:', details);
      
      // Reset form
      setDonationAmount("0");
      setCoverFees(false);
      setIsMonthly(false);
      setShowPayPal(false);
      
      // Scroll to top after donation
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
      // You can send this data to your backend here
      // sendToBackend(details, totalAmount);
    });
  };

  const onError = (err) => {
    console.error("PayPal Checkout onError", err);
    alert("There was an error processing your donation. Please try again.");
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handlePresetAmount = (amount) => {
    setDonationAmount(amount.toString());
  };

  const totalAmount = calculateTotalAmount();
  const feeAmount = getFeeAmount();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-center">
          <h1 className="text-2xl font-bold text-white mb-2">
            All World Gayatri Pariwar
          </h1>
          <h2 className="text-lg text-white opacity-90">
            Bal Sanskar Shala San Antonio, Texas
          </h2>
        </div>

        {/* Donation Amount */}
        <div className="p-6 border-b">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-gray-800 mb-2">
              ${donationAmount === "0" ? "0" : totalAmount.toFixed(2)}
            </div>
            <div className="text-gray-600">USD</div>
          </div>

          {/* Preset Amounts */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handlePresetAmount(amount)}
                className={`p-3 rounded-lg border-2 text-center font-semibold transition-all ${
                  donationAmount === amount.toString()
                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                    : 'border-gray-200 text-gray-700 hover:border-orange-300'
                }`}
              >
                ${amount}
              </button>
            ))}
            <button
              onClick={() => setDonationAmount("")}
              className={`p-3 rounded-lg border-2 text-center font-semibold transition-all ${
                !presetAmounts.includes(parseFloat(donationAmount)) && donationAmount !== "0"
                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                  : 'border-gray-200 text-gray-700 hover:border-orange-300'
              }`}
            >
              Custom
            </button>
          </div>

          {/* Custom Amount Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or enter custom amount:
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={donationAmount}
                onChange={handleCustomAmount}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="p-6 border-b space-y-4">
          {/* Cover Fees Option */}
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={coverFees}
              onChange={(e) => setCoverFees(e.target.checked)}
              className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              disabled={donationAmount === "0" || !donationAmount}
            />
            <div className="flex-1">
              <div className="font-medium text-gray-800">
                Add ${feeAmount.toFixed(2)} USD to help cover the fees.
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Your donation will be increased to cover processing fees, so we receive the full amount.
              </div>
            </div>
          </label>

          {/* Monthly Donation Option */}
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isMonthly}
              onChange={(e) => setIsMonthly(e.target.checked)}
              className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              disabled={donationAmount === "0" || !donationAmount}
            />
            <div className="flex-1">
              <div className="font-medium text-gray-800">
                Make this a monthly donation
              </div>
              <div className="text-sm text-gray-600 mt-1">
                This donation will recur monthly until canceled.
              </div>
            </div>
          </label>
        </div>

        {/* PayPal Button */}
        <div className="p-6">
          {!showPayPal ? (
            <button
              onClick={() => setShowPayPal(true)}
              disabled={donationAmount === "0" || !donationAmount || parseFloat(donationAmount) <= 0}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                donationAmount === "0" || !donationAmount || parseFloat(donationAmount) <= 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
              }`}
            >
              Donate with PayPal
            </button>
          ) : (
            <div className="space-y-4">
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  style={{ 
                    layout: "vertical",
                    color: "blue",
                    shape: "rect",
                    label: "donate",
                    height: 45
                  }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                />
              </PayPalScriptProvider>
              <button
                onClick={() => setShowPayPal(false)}
                className="w-full py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}

          {/* Security Note */}
          <div className="text-center mt-4">
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <span>🔒</span>
              <span>Secure donation powered by PayPal</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Your donation supports spiritual education and community service programs.
          </p>
          <p className="text-xs text-gray-500">
            All donations are tax-deductible as per applicable laws.
          </p>
        </div>
      </div>

      {/* Alternative Donation Methods */}
      <div className="max-w-md mx-auto mt-6 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Other Ways to Donate
        </h3>
        <div className="space-y-3">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-1">By Phone</h4>
            <a href="tel:+15129474999" className="text-orange-500 hover:text-orange-600">
              +1 512-947-4999
            </a>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-1">In Person</h4>
            <p className="text-gray-600 text-sm">
              Visit us during our events or contact us to arrange an in-person donation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <button
            onClick={handleContactClick}
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;