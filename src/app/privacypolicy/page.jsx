'use client';

import {motion} from 'framer-motion';
import {ShieldCheck, Lock, Mail, Phone} from 'lucide-react';

export default function PrivacyPolicy () {
  return (
    <div className="min-h-screen bg-gray-50 py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <ShieldCheck className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: February 26, 2024</p>
        </motion.header>

        {/* Main Content */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.6}}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Introduction */}
          <section className="p-8 border-b">
            <p className="text-gray-700 mb-6">
              Executive Car Rental Services is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our car rental services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="p-8 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect personal information when you:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
              <li>Make a reservation or rental inquiry</li>
              <li>Provide feedback or reviews</li>
              <li>Contact customer service or support</li>
              <li>Participate in surveys or promotions</li>
            </ol>
            <p className="text-gray-700 mb-2">
              The types of personal information we may collect include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Name</li>
              <li>
                Contact information (such as email address, phone number, and address)
              </li>
              <li>Payment information</li>
              <li>Vehicle preferences</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="p-8 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>To process your reservations and rental transactions</li>
              <li>
                To communicate with you about your reservations, rental agreements, and other services
              </li>
              <li>To provide customer support and respond to your inquiries</li>
              <li>To improve our services and develop new features</li>
              <li>To conduct research and analysis</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="p-8 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700">
              We implement reasonable security measures to protect the confidentiality, integrity, and availability of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Sharing of Information */}
          <section className="p-8 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sharing of Information
            </h2>
            <p className="text-gray-700 mb-4">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>
                Third-party service providers who assist us in providing services (e.g., Service partners)
              </li>
              <li>
                Law enforcement or government authorities as required by law or to protect our rights and property
              </li>
            </ul>
            <p className="text-gray-700">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          {/* Your Choices */}
          <section className="p-8 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Choices
            </h2>
            <p className="text-gray-700 mb-2">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Access, correct, or update your personal information</li>
              <li>Object to the processing of your personal information</li>
            </ul>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="p-8 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website.
            </p>
          </section>

          {/* Contact Us */}
          <section className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about our Privacy Policy, please contact us at:
            </p>
            <div className="flex items-center text-gray-700 mb-3">
              <Phone className="h-5 w-5 mr-3 text-gray-500" />
              <span>020 46 91 91 91</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="h-5 w-5 mr-3 text-gray-500" />
              <span>sales@ecrspune.com</span>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
