'use client';

import {motion} from 'framer-motion';
import {Clock, RefreshCw, Mail, Phone} from 'lucide-react';

export default function CancellationPolicy () {
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
              <RefreshCw className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Cancellation & Refund Policy
          </h1>
        </motion.header>

        {/* Main Content */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.6}}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Cancellation Policy */}
          <section className="p-8 border-b">
            <div className="flex items-start mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  CANCELLATION POLICY
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    The customer agrees and acknowledges that refund shall be processed if the cancellation request is received before 5 hours of scheduled pickup for Mumbai drop/pick-up & 2 hours before the local duties.
                  </p>
                  <p>
                    The customer agrees and acknowledges that no refund shall be processed if the cancellation request is not received within given time.
                  </p>
                  <p>
                    Cancellation charges for local duties shall be minimum of base package amount & for Mumbai Pick-up/drop duties full charges shall be payable by customers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="p-8 border-b">
            <div className="flex items-start mb-4">
              <RefreshCw className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  REFUND POLICY
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    If you are eligible for refunds based on the "Cancellation and Refund" policy above, then the refund will be remitted back to you in 5-7 working days.
                  </p>
                  <p>
                    In case of any issues, write to us at
                    {' '}
                    <a
                      href="mailto:accounts@ecrspune.com"
                      className="text-blue-600 hover:underline"
                    >
                      accounts@ecrspune.com
                    </a>
                    {' '}
                    or call us at
                    {' '}
                    <a
                      href="tel:02046919171"
                      className="text-blue-600 hover:underline"
                    >
                      020-4691 9171/72
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Need Help With Cancellation?
            </h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <a
                  href="mailto:accounts@ecrspune.com"
                  className="text-blue-600 hover:underline"
                >
                  accounts@ecrspune.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <a
                  href="tel:02046919171"
                  className="text-blue-600 hover:underline"
                >
                  020-4691 9171/72
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
