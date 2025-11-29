"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreditCard, Smartphone, Building } from "lucide-react";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "recurring">(
    "one-time"
  );

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert("Please select or enter a valid donation amount");
      return;
    }
    // Integrate with Razorpay/Stripe here
    alert(`Redirecting to payment gateway for ₹${amount}`);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Make a Donation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Donation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all ${
                      donationType === "one-time"
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                        : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-300"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType("recurring")}
                    className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all ${
                      donationType === "recurring"
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                        : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-300"
                    }`}
                  >
                    Monthly Recurring
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Amount (₹)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        selectedAmount === amount
                          ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                          : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-300"
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary-500 transition-all">
                    <CreditCard className="w-6 h-6 text-gray-600 dark:text-gray-400 mb-2" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Card
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary-500 transition-all">
                    <Smartphone className="w-6 h-6 text-gray-600 dark:text-gray-400 mb-2" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      UPI
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary-500 transition-all">
                    <Building className="w-6 h-6 text-gray-600 dark:text-gray-400 mb-2" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Net Banking
                    </span>
                  </button>
                </div>
              </div>

              <Button size="lg" className="w-full" onClick={handleDonate}>
                Proceed to Donate
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Your donation is secure and tax-deductible. We'll send you a
                receipt via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

