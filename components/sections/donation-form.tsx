"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreditCard, Smartphone, Building, Copy, Check, Banknote } from "lucide-react";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "recurring">(
    "one-time"
  );
  const [copiedField, setCopiedField] = useState<string>("");

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert("Please select or enter a valid donation amount");
      return;
    }
    // Integrate with Razorpay/Stripe here
    alert(`Redirecting to payment gateway for ₹${amount}`);
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="pt-20 pb-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contribute Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
              Contribute Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are a non-profit organization working selflessly to make the lives of those who need us a little better. Our motive is to put a smile on their faces so your contribution can make a big difference. This is your time to light the lanterns and write a happy ending to their story, we are there to welcome you wholeheartedly.
            </p>
          </div>

          {/* Modern Bank Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-primary-100 dark:border-primary-800/50 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <Banknote className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-heading bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                    Bank Account Details
                  </CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click on any field to copy the details instantly
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Account Name */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden"
                  >
                    <div 
                      onClick={() => copyToClipboard("Swami Vivekanand Sewa Trust", "accountName")}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Account Name</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Swami Vivekanand Sewa Trust</p>
                      </div>
                      <div className="ml-3">
                        {copiedField === "accountName" ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Bank Name */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden"
                  >
                    <div 
                      onClick={() => copyToClipboard("Central Bank of India", "bankName")}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Bank Name</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Central Bank of India</p>
                      </div>
                      <div className="ml-3">
                        {copiedField === "bankName" ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Account Number */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden"
                  >
                    <div 
                      onClick={() => copyToClipboard("3178477445", "accountNumber")}
                      className="flex items-center justify-between p-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-1">Account Number</p>
                        <p className="text-lg font-bold text-primary-800 dark:text-primary-300 font-mono tracking-wider">3178477445</p>
                      </div>
                      <div className="ml-3">
                        {copiedField === "accountNumber" ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Branch */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden"
                  >
                    <div 
                      onClick={() => copyToClipboard("Hingoli", "branch")}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Branch</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Hingoli</p>
                      </div>
                      <div className="ml-3">
                        {copiedField === "branch" ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* IFSC Code */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden"
                  >
                    <div 
                      onClick={() => copyToClipboard("CBIN0283675", "ifscCode")}
                      className="flex items-center justify-between p-4 bg-gradient-to-br from-accent-teal/10 to-accent-teal/20 dark:from-accent-teal/10 dark:to-accent-teal/20 rounded-xl border border-accent-teal/30 dark:border-accent-teal/40 hover:border-accent-teal/50 dark:hover:border-accent-teal/60 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="text-xs font-medium text-accent-teal-dark dark:text-accent-teal uppercase tracking-wide mb-1">IFSC Code</p>
                        <p className="text-lg font-bold text-accent-teal-dark dark:text-accent-teal font-mono tracking-wider">CBIN0283675</p>
                      </div>
                      <div className="ml-3">
                        {copiedField === "ifscCode" ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-accent-teal group-hover:text-accent-teal-dark transition-colors" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* MICR Code */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden"
                  >
                    <div 
                      onClick={() => copyToClipboard("431016402", "micrCode")}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">MICR Code</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white font-mono tracking-wider">431016402</p>
                      </div>
                      <div className="ml-3">
                        {copiedField === "micrCode" ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Copy Success Message */}
                {copiedField && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center"
                  >
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                      ✓ Copied to clipboard successfully!
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Donation Form - Hidden for now */}
        {/* <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Make a Donation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
        </div> */}
      </div>
    </section>
  );
}

