// 'use client';
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Car, Phone, Mail, MapPin, Clock, Star, Shield, Award, Users, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

// interface MenuItem {
//   title: string;
//   links: {
//     text: string;
//     url: string;
//   }[];
// }

// interface Footer2Props {
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//   };
//   tagline?: string;
//   menuItems?: MenuItem[];
//   copyright?: string;
//   bottomLinks?: {
//     text: string;
//     url: string;
//   }[];
// }

// const Footer2 = ({
//   logo = {
//     src: "/ECRS_Logo.png",
//     alt: "company logo",
//     title: "",
//     url: "/",
//   },
//   tagline = "Economical | Efficient | Dependable",
//   menuItems = [
//     {
//       title: "Quick Links",
//       links: [
//         { text: "Home", url: "/" },
//         { text: "Blogs", url: "/blogs" },
//         { text: "About Us", url: "/about/company" },
//         { text: "Gallery", url: "/gallery" },
//         { text: "Careers", url: "/Careers" },
//         { text: "Contact Us", url: "/contactus" },
//       ],
//     },
//     {
//       title: "Policy",
//       links: [
//         { text: "Privacy Policy", url: "/privacypolicy" },
//         { text: "Cancelation & Refund Policy", url: "/cancellationpolicy" },
//         { text: "Terms and Conditions", url: "/termsconditions" },
//       ],
//     },
   
//   ],
// }: Footer2Props) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredStat, setHoveredStat] = useState(null);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const stats = [
//     { icon: Car, value: "10,000+", label: "Cars Available", color: "from-red-500 to-red-600" },
//     { icon: Users, value: "50,000+", label: "Happy Customers", color: "from-amber-500 to-amber-600" },
//     { icon: Award, value: "15+", label: "Years Experience", color: "from-emerald-500 to-emerald-600" },
//     { icon: Shield, value: "24/7", label: "Support", color: "from-blue-500 to-blue-600" },
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "#", label: "Facebook" },
//     { icon: Instagram, url: "#", label: "Instagram" },
//     { icon: Linkedin, url: "#", label: "LinkedIn" },
//     { icon: Youtube, url: "#", label: "YouTube" },
//   ];

//   const contactInfo = [
//     { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
//     { icon: Mail, text: "info@ecrs.com", href: "mailto:info@ecrs.com" },
//     { icon: MapPin, text: "123 Business Avenue, City, State 12345", href: "#" },
//     { icon: Clock, text: "24/7 Available", href: "#" },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(239,68,68,0.05),transparent_50%)]" />
//       </div>

//       {/* Moving Grid Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 container mx-auto px-4 py-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
//           {/* Company Info Section - Better spacing */}
//           <div className="lg:col-span-4 space-y-8">
//             <div className="group">
//               <Link href="/" className="flex items-center space-x-3 mb-6">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     title={logo.title}
//                     className="relative h-12 w-auto transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//               </Link>
              
//               <div className="space-y-4">
//                 <p className="text-sm font-semibold text-red-400">{tagline}</p>
//                 <p className="text-slate-300 leading-relaxed text-sm">
//                   Experience luxury and reliability with our premium car rental services. 
//                   We provide exceptional vehicles and outstanding customer service for every journey.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Menu Items - Better grid structure */}
//           <div className="lg:col-span-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
//               {menuItems.map((section, sectionIdx) => (
//                 <div key={sectionIdx} className="space-y-6">
//                   <h3 className="text-xl font-bold text-white relative">
//                     {section.title}
//                     <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
//                   </h3>
//                   <ul className="space-y-3">
//                     {section.links.map((link, linkIdx) => (
//                       <li key={linkIdx}>
//                         <Link 
//                           href={link.url}
//                           className="group flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300"
//                         >
//                           <ChevronRight className="h-4 w-4 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
//                           <span className="group-hover:translate-x-2 transition-transform duration-300 text-sm">{link.text}</span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info & Social Media */}
//           <div className="lg:col-span-4 space-y-8">
//             {/* Contact Information */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-6 relative">
//                 Contact Us
//                 <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
//               </h3>
//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <a
//                     key={index}
//                     href={info.href}
//                     className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 group"
//                   >
//                     <div className="p-1  flex-shrink-0">
//                       <info.icon className="h-5 w-5 text-red-500" />
//                     </div>
//                     <span className="text-sm">{info.text}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

           

//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">

//              {/* Social Media */}
            
//               <div className="flex flex-wrap gap-3">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     className="group relative p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-5 w-5 text-slate-400 group-hover:text-red-500 transition-colors" />
//                     <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
//                   </a>
//                 ))}
//               </div>

//             <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
//               <p className="text-xs text-slate-400 text-center sm:text-left">
//                 © 2025 All Rights Reserved by{" "}
//                 <span className="text-red-400 font-semibold">ECRS</span>
//               </p>
//               <div className="flex items-center space-x-4 text-xs text-slate-500">
//                 <span className="hidden sm:inline">|</span>
//                 <span className="text-center sm:text-left">Developed by{" "}
//                   <a
//                     href="https://windhans.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-red-400 hover:text-red-500 font-semibold transition-colors"
//                   >
//                     Windhans Technologies
//                   </a>
//                 </span>
//               </div>
//             </div>

            
        

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Footer2 };





'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Car, Phone, Mail, MapPin, Clock, Star, Shield, Award, Users, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import AppModal from "./ui/AppModal";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/ECRS_Logo.png",
    alt: "company logo",
    title: "",
    url: "/",
  },
  tagline = "Economical | Efficient | Dependable",
  menuItems = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", url: "/" },
        { text: "Our Fleets", url: "/rides" },
        { text: "Book Now", url: "/#bookNow" },
        { text: "Our Network", url: "/about/ournetwork" },
        { text: "About Us", url: "/about/company" },
        { text: "Testimonials", url: "/#testimonials" },
        { text: "FAQ's", url: "/#faq" },
        { text: "Request Call Back", url: "/#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { text: "Careers", url: "/careers" },
        { text: "Help Center", url: "/#" },
        { text: "Technical Support", url: "/#" },
        { text: "Packages", url: "/rides/#packages" },
        { text: "Events", url: "/#" },
        { text: "Feedback", url: "/#" },
        { text: "Blogs", url: "/blogs" },
        { text: "Photo Gallery", url: "/gallery" },
      ],
    },
    {
      title: "Policy",
      links: [
        { text: "Privacy Policy", url: "/privacypolicy" },
        { text: "Cancelation & Refund Policy", url: "/cancellationpolicy" },
        { text: "Terms and Conditions", url: "/termsconditions" },
      ],
    },
  ],
}: Footer2Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

   const appLinks = {
    android: {
      driver: "https://play.google.com/store/apps/details?id=com.ecrs.driver",
      user: "https://play.google.com/store/apps/details?id=com.ecrs.user",
      vendor: "https://play.google.com/store/apps/details?id=com.ecrs.vendor",
    },
    ios: {
      driver: "https://apps.apple.com/us/app/ecrs-driver/id123456789",
      user: "https://apps.apple.com/us/app/ecrs-user/id987654321",
      vendor: "https://apps.apple.com/us/app/ecrs-vendor/id567891234",
    },
  };

   const openModal = (appType) => {
    setSelectedApp(appType);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedApp(null);
  };

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Youtube, url: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "info@ecrs.com", href: "mailto:info@ecrs.com" },
    { icon: MapPin, text: "123 Business Avenue, City, State 12345", href: "#" },
  ];

  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(239,68,68,0.05),transparent_50%)]" />
      </div>

      {/* Moving Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Company Info Section */}
<div className="lg:col-span-3 space-y-6">
  <div className="group">
    <Link href="/" className="flex justify-center items-center space-x-3 mb-4">
      <div className="relative">
        <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
        <img
          src={logo.src}
          alt={logo.alt}
          title={logo.title}
          className="relative h-10 w-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
    <div className="space-y-3 text-center">
      <p className="text-xs font-semibold text-red-400">{tagline}</p>
      <p className="text-slate-300 leading-relaxed text-xs">
        Experience unmatched luxury and unwavering reliability with our car rental services.
      </p>
      
      {/* Download App Section */}
      <div className="pt-2">
        <p className="text-xs font-semibold text-slate-300 mb-2">Download our app</p>
        <div className="flex space-x-3">
          {/* Play Store Button */}
        
            <img 
              src="/app2.png"
              alt="Get on Google Play" 
              onClick={() => openModal("android")}
              className="h-10 w-auto rounded-lg cursor-pointer"
            />
         
          
          {/* App Store Button */}
       
            <img 
              src="/app1.png" 
              alt="Download on the App Store" 
              onClick={() => openModal("ios")}
              className="h-10 w-auto rounded-lg cursor-pointer"
            />
         
        </div>
      </div>
    </div>
  </div>
</div>

          {/* All Link Sections in One Row */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white  tracking-wider relative">
                  Quick Links
                  <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
                </h3>
                <ul className="space-y-2">
                  {menuItems[0].links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.url}
                        className="group flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300"
                      >
                        <ChevronRight className="h-3 w-3 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links 1 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white  tracking-wider relative">
                  Quick Links
                  <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
                </h3>
                <ul className="space-y-2">
                  {menuItems[1].links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.url}
                        className="group flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300"
                      >
                        <ChevronRight className="h-3 w-3 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white  tracking-wider relative">
                  Policy
                  <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
                </h3>
                <ul className="space-y-2">
                  {menuItems[2].links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.url}
                        className="group flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300"
                      >
                        <ChevronRight className="h-3 w-3 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white  tracking-wider relative">
                  Contact Us
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
                </h3>
                <div className="space-y-2">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start space-x-2 text-slate-300 hover:text-white transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <info.icon className="h-3 w-3 text-red-500" />
                      </div>
                      <span className="text-xs">{info.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-3 md:space-y-0">

            {/* Social Media */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-slate-400 group-hover:text-red-500 transition-colors" />
                  <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <p className="text-[0.65rem] text-slate-400 text-center sm:text-left">
                © 2025 All Rights Reserved by{" "}
                <span className="text-red-400 font-semibold">ECRS</span>
              </p>
              <div className="flex items-center space-x-2 text-[0.65rem] text-slate-500">
                <span className="hidden sm:inline">|</span>
                <span className="text-center sm:text-left">Developed by{" "}
                  <a
                    href="https://windhans.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-500 font-semibold transition-colors"
                  >
                    Windhans Technologies
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

          <AppModal
            modalOpen={modalOpen}
            closeModal={closeModal}
            selectedApp={selectedApp}
            appLinks={appLinks}
          />
    </>
  );
};
export { Footer2 };