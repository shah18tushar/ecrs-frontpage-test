'use client';

import {motion} from 'framer-motion';
import {ClipboardCheck, Shield, AlertTriangle, BookOpen} from 'lucide-react';

export default function TermsAndConditions () {
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
              <ClipboardCheck className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Terms and Conditions
          </h1>
        </motion.header>

        {/* Main Content */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.6}}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* 1. User Eligibility */}
          <section className="p-8 border-b">
            <div className="flex items-start mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. User(s) Eligibility
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    User(s) means any individual or business entity/organization that legally operates in India or in other countries, uses and has the right to use the Services provided by ECRS. The Services provided by ECRS is a technology based service which enables the hiring of taxis by commuters / passengers for a point to point service, or for time and usage based service within city limits and outside city limits, including inter-city all over India, through the internet and / or mobile telecommunications devices.
                  </p>
                  <p>
                    Our Services are available only to those individuals or companies who can form legally binding contracts under the applicable law. Therefore, user(s) must not be a minor as per Indian Law; i.e. user(s) must be at least 18 years of age to be eligible to use our Services.
                  </p>
                  <p>
                    ECRS advises its users that while accessing the web site, they must follow/abide by the related laws. ECRS is not responsible for the possible consequences caused by your behaviour during use of web site. ECRS may, in its sole discretion, refuse the service to anyone at any time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. User(s) Agreement */}
          <section className="p-8 border-b">
            <div className="flex items-start mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. User(s) Agreement
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    This agreement applies to user(s) if user(s) are visitors, registered - free or paid user(s) who access the web site for any purpose. It also applies to any legal entity which may be represented by you under actual or apparent authority. User(s) may use this site solely for their own personal or internal purposes.
                  </p>
                  <p>
                    This agreement applies to all ECRS Services offered on the web site, collectively with any additional terms and condition that may be applicable to the specific service used/accessed by user(s). In the event of a conflict or inconsistency between any provision of the terms and conditions mentioned herein with those of the particular service, the provisions of the terms and conditions applicable to such specific services shall prevail.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Amendment to User(s) Agreement */}
          <section className="p-8 border-b">
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. Amendment to User(s) Agreement
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    ECRS may change, modify, amend, or update this agreement from time to time without any prior notification to user(s) and the amended and restated terms and conditions of use shall be effective immediately on posting. If you do not adhere to the changes, you must stop using the service. Your continuous use of the Services will signify your acceptance of the changed terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Intellectual Property Rights */}
          <section className="p-8">
            <div className="flex items-start mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Intellectual Property Rights
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    ECRS is the sole owner or lawful licensee of all the rights to the web site, Mobile Applications and its content. Web site content means its design, layout, text, images, graphics, sound, video etc. The web site content embody trade secrets and intellectual property rights protected under worldwide copyright and other laws. All title, ownership and intellectual property rights in the web site and its content shall remain with ECRS, its affiliates or licensor's of ECRS content, as the case may be.
                  </p>
                  <p>
                    All rights, not otherwise claimed under this agreement or by ecrspune.com, are hereby reserved. The information contained in this web site is intended, solely to provide general information for the personal use of the reader, who accepts full responsibility for its use. ECRS does not represent or endorse the accuracy or reliability of any information, or advertisements (collectively, the "content") contained on, distributed through, or linked, downloaded or accessed from any of the Services contained on this web site, or the quality of any products, information or other materials displayed, or obtained by you as a result of an advertisement or any other information or offer in or in connection with the Service.
                  </p>
                  <p>
                    We accept no responsibility for any errors or omissions, or for the results obtained from the use of this information. All information in this web site is provided "AS IS" with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose. Nothing herein shall to any extent substitute for the independent investigations and the sound technical and business judgment of the user(s). In no event shall ECRS be liable for any direct, indirect, incidental, punitive, or consequential damages of any kind whatsoever with respect to the Service. User(s) of this site must hereby acknowledge that any reliance upon any content shall be at their sole risk.
                  </p>
                  <p>
                    ECRS reserves the right, in its sole discretion and without any obligation, to make improvements to, or correct any error or omissions in any portion of the Service or the website.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
