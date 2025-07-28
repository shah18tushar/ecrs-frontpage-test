// import React, { useState } from "react";
// import {
//   MapPin,
//   Clock,
//   Calendar,
//   Users,
//   Briefcase,
//   Award,
//   TrendingUp,
//   Building2,
//   Mail,
//   Phone,
// } from "lucide-react";
// import { StaffForm } from "./StaffForm";
// import { DriverForm } from "./DriverForm";

// const CareersPostsDialog = ({ selectedJob, onClose, formatDate }) => {
//   const [showHRDialog, setShowHRDialog] = useState(false);

//   if (!selectedJob) return null;

//   return (
//     <>
//       {/* Main Job Details Dialog */}
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//           <div className="p-8">
//             <div className="flex items-start justify-between mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
//                   <Briefcase className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-1">
//                     {selectedJob.title}
//                   </h2>
//                   <p className="text-gray-600 flex items-center gap-2">
//                     <Building2 className="w-4 h-4" />
//                     {selectedJob.department} • {selectedJob.type}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="text-gray-400 hover:text-gray-600 transition-colors text-2xl p-1"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <MapPin className="w-5 h-5 text-red-500" />
//                   <span className="text-gray-700 font-medium">
//                     {selectedJob.location}
//                   </span>
//                   {selectedJob.remote && (
//                     <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-sm font-medium border border-green-200">
//                       Remote Available
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Clock className="w-5 h-5 text-red-500" />
//                   <span className="text-gray-700">
//                     {selectedJob.experience}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Award className="w-5 h-5 text-red-500" />
//                   <span className="text-gray-700">
//                     {selectedJob.qualification}
//                   </span>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <TrendingUp className="w-5 h-5 text-red-500" />
//                   <span className="text-gray-700 font-semibold">
//                     {selectedJob.salary}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Calendar className="w-5 h-5 text-red-500" />
//                   <span className="text-gray-700">
//                     Posted {formatDate(selectedJob.postedAt)}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Users className="w-5 h-5 text-red-500" />
//                   <span className="text-gray-700">
//                     {selectedJob.type} Position
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-8">
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 About This Role
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 {selectedJob.description}
//               </p>

//               <h4 className="text-lg font-semibold text-gray-900 mb-3">
//                 Required Skills & Technologies
//               </h4>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedJob.keySkills.split(", ").map((skill, index) => (
//                   <span
//                     key={index}
//                     className="bg-red-50 text-red-700 px-3 py-2 rounded-lg font-medium border border-red-200"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               <h4 className="text-lg font-semibold text-gray-900 mb-3">
//                 Qualifications
//               </h4>
//               <p className="text-gray-700 mb-6">
//                 {selectedJob.qualification} with {selectedJob.experience} of
//                 relevant experience.
//               </p>
//             </div>

//             <div className="flex gap-4">
//               <button className="flex-1 bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-95 shadow-lg">
//                 Apply Now
//               </button>
//               <button
//                 onClick={() => setShowHRDialog(true)}
//                 className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all"
//               >
//                 Contact HR
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* HR Contact Dialog */}
//       {showHRDialog && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl max-w-md w-full shadow-2xl border-2 border-red-400">
//             <div className="p-8">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-700">ECRS - HR</h2>
//                   <p className="text-gray-600 text-sm">
//                     Get in touch with our HR team
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => setShowHRDialog(false)}
//                   className="text-gray-400 hover:text-gray-600 transition-colors text-2xl p-1"
//                 >
//                   ×
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="mt-1">
//                     <Mail className="w-5 h-5 text-red-500" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Email</h3>
//                     <p className="text-gray-600">hr@ecrs.com</p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Typically responds within 24 hours
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="mt-1">
//                     <Phone className="w-5 h-5 text-red-500" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Phone</h3>
//                     <p className="text-gray-600">+91 98765 43210</p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Available Mon-Fri, 9AM-6PM
//                     </p>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-gray-300">
//                   <h3 className="font-semibold text-gray-900 mb-3">
//                     Office Address
//                   </h3>
//                   <p className="text-gray-600">
//                     ECRS Headquarters
//                     <br />
//                     123 Tech Park, Sector 45
//                     <br />
//                     Mumbai - 400001, India
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <button
//                   onClick={() => setShowHRDialog(false)}
//                   className="w-full bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition-all"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <StaffForm/>
//       <DriverForm/>
//     </>
//   );
// };

// export default CareersPostsDialog;






import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Calendar,
  Users,
  Briefcase,
  Award,
  TrendingUp,
  Building2,
  Mail,
  Phone,
} from "lucide-react";
import { StaffForm } from "./StaffForm";
import { DriverForm } from "./DriverForm";

const CareersPostsDialog = ({ selectedJob, onClose, formatDate }) => {
  const [showHRDialog, setShowHRDialog] = useState(false);
  const [showForm, setShowForm] = useState(null);

  if (!selectedJob) return null;

  const handleApplyClick = () => {
    if (selectedJob.category_name === "staff") {
      setShowForm("staff");
    } else if (selectedJob.category_name === "driver") {
      setShowForm("driver");
    }
  };

  const handleFormClose = () => {
    setShowForm(null);
  };

  return (
    <>
      {/* Main Job Details Dialog */}
      {!showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      {selectedJob.title}
                    </h2>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {selectedJob.department} • {selectedJob.type}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl p-1"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700 font-medium">
                      {selectedJob.location}
                    </span>
                    {selectedJob.remote && (
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-sm font-medium border border-green-200">
                        Remote Available
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      {selectedJob.experience}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      {selectedJob.qualification}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700 font-semibold">
                      {selectedJob.salary}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      Posted {formatDate(selectedJob.postedAt)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      {selectedJob.type} Position
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  About This Role
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedJob.description}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Required Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedJob.keySkills.split(", ").map((skill, index) => (
                    <span
                      key={index}
                      className="bg-red-50 text-red-700 px-3 py-2 rounded-lg font-medium border border-red-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Qualifications
                </h4>
                <p className="text-gray-700 mb-6">
                  {selectedJob.qualification} with {selectedJob.experience} of
                  relevant experience.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleApplyClick}
                  className="flex-1 bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-95 shadow-lg"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setShowHRDialog(true)}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all"
                >
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HR Contact Dialog */}
      {showHRDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full shadow-2xl border-2 border-red-400">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-700">ECRS - HR</h2>
                  <p className="text-gray-600 text-sm">
                    Get in touch with our HR team
                  </p>
                </div>
                <button
                  onClick={() => setShowHRDialog(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl p-1"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hr@ecrs.com</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Typically responds within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Available Mon-Fri, 9AM-6PM
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    ECRS Headquarters
                    <br />
                    123 Tech Park, Sector 45
                    <br />
                    Mumbai - 400001, India
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setShowHRDialog(false)}
                  className="w-full bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Staff Form */}
      {showForm === "staff" && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex items-start justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Application for {selectedJob.title}
                </h2>
                <button
                  onClick={handleFormClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl p-1"
                >
                  ×
                </button>
              </div>
              <StaffForm
                jobTitle={selectedJob.title}
                onClose={handleFormClose}
              />
            </div>
          </div>
        </div>
      )}

      {/* Driver Form */}
      {showForm === "driver" && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex items-start justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Application for {selectedJob.title}
                </h2>
                <button
                  onClick={handleFormClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl p-1"
                >
                  ×
                </button>
              </div>
              <DriverForm
                jobTitle={selectedJob.title}
                onClose={handleFormClose}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CareersPostsDialog;