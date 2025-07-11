// 'use client';
// import Link from "next/link";

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
//     {
//       title: "Social",
//       links: [
//         { text: "Twitter", url: "#" },
//         { text: "Instagram", url: "#" },
//         { text: "LinkedIn", url: "#" },
//       ],
//     },
//   ],
// }: Footer2Props) => {
//   return (
//     <section className="relative z-20 pt-32 pb-16 mt-20 overflow-hidden ">
//       {/* ✅ Ribbons in foreground */}


//       {/* ✅ Footer content underneath Ribbons (but still visible) */}
//       <div className="relative z-10 container">
//         <footer>
//           <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
//             <div className="col-span-2 mb-8 lg:mb-0">
//               <div className="flex items-center gap-2 lg:justify-start">
//                 <Link href="/">
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     title={logo.title}
//                     className="h-10"
//                   />
//                 </Link>
//                 <p className="text-xl font-semibold">{logo.title}</p>
//               </div>
//               <p className="mt-4 font-bold">{tagline}</p>
//             </div>

//             {menuItems.map((section, sectionIdx) => (
//               <div key={sectionIdx}>
//                 <h3 className="mb-4 font-bold">{section.title}</h3>
//                 <ul className="space-y-4 text-muted-foreground">
//                   {section.links.map((link, linkIdx) => (
//                     <li
//                       key={linkIdx}
//                       className="font-medium hover:text-primary"
//                     >
//                       <Link href={link.url}>{link.text}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Bottom copyright */}
//           <div className="mt-24 flex flex-col justify-between gap-4 pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
//             <p>
//               © 2024 All Rights are Reserved by{" "}
//               <span className="text-red-600 font-semibold">ECRS</span> |{" "}
//               Developed by{" "}
//               <a
//                 href="https://windhans.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-red-600 font-semibold hover:underline"
//               >
//                 Windhans Technologies
//               </a>
//             </p>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export { Footer2 };







'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Car, Phone, Mail, MapPin, Clock, Star, Shield, Award, Users, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

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
        { text: "Blogs", url: "/blogs" },
        { text: "About Us", url: "/about/company" },
        { text: "Gallery", url: "/gallery" },
        { text: "Careers", url: "/Careers" },
        { text: "Contact Us", url: "/contactus" },
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Car, value: "10,000+", label: "Cars Available", color: "from-red-500 to-red-600" },
    { icon: Users, value: "50,000+", label: "Happy Customers", color: "from-amber-500 to-amber-600" },
    { icon: Award, value: "15+", label: "Years Experience", color: "from-emerald-500 to-emerald-600" },
    { icon: Shield, value: "24/7", label: "Support", color: "from-blue-500 to-blue-600" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Youtube, url: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "info@ecrs.com", href: "mailto:info@ecrs.com" },
    { icon: MapPin, text: "123 Business Avenue, City, State 12345", href: "#" },
    { icon: Clock, text: "24/7 Available", href: "#" },
  ];

  return (
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
          
          {/* Company Info Section - Better spacing */}
          <div className="lg:col-span-4 space-y-8">
            <div className="group">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="relative h-12 w-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              
              <div className="space-y-4">
                <p className="text-sm font-semibold text-red-400">{tagline}</p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Experience luxury and reliability with our premium car rental services. 
                  We provide exceptional vehicles and outstanding customer service for every journey.
                </p>
              </div>
            </div>

            {/* Premium Features */}
            <div className="space-y-3 mt-16">
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose ECRS?</h4>
              {[
                "Premium Vehicle Fleet",
                "24/7 Customer Support",
                "Competitive Pricing",
                "Instant Booking"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:bg-red-400 transition-colors flex-shrink-0 animate-pulse" />
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Items - Better grid structure */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx} className="space-y-6">
                  <h3 className="text-xl font-bold text-white relative">
                    {section.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.url}
                          className="group flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300"
                        >
                          <ChevronRight className="h-4 w-4 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                          <span className="group-hover:translate-x-2 transition-transform duration-300 text-sm">{link.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info & Social Media */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Contact Us
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="p-1  flex-shrink-0">
                      <info.icon className="h-5 w-5 text-red-500" />
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-13">
              <h4 className="text-lg font-semibold text-white mb-8 relative">Follow Us On
              <div className="absolute -bottom-2 left-0 w-13 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" /></h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group relative p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-slate-400 group-hover:text-red-500 transition-colors" />
                    <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            {/* <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 p-6 rounded-2xl border border-red-500/20">
              <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
              <p className="text-sm text-slate-300 mb-4">Get updates on new offers and services</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-500/50 transition-colors text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-r-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-xs text-slate-400 text-center sm:text-left">
                © 2025 All Rights Reserved by{" "}
                <span className="text-red-400 font-semibold">ECRS</span>
              </p>
              <div className="flex items-center space-x-4 text-xs text-slate-500">
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
  );
};

export { Footer2 };



















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
//     { icon: Twitter, url: "#", label: "Twitter" },
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
//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
//           {/* Company Info Section */}
//           <div className="lg:col-span-1 space-y-8">
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
//                 {/* <div>
//                   <h3 className="text-2xl font-bold text-white">ECRS</h3>
//                   <p className="text-sm text-red-400">Car Rental Services</p>
//                 </div> */}
//               </Link>
              
//               <div className="space-y-4">
//                 <p className="text-sm font-semibold text-red-400">{tagline}</p>
//                 <p className="text-slate-300 leading-relaxed text-xs">
//                   Experience luxury and reliability with our premium car rental services. 
//                   We provide exceptional vehicles and outstanding customer service for every journey.
//                 </p>
//               </div>
//             </div>

//             {/* Premium Features */}
//             <div className="space-y-3">
//               <h4 className="text-lg font-semibold text-white mb-4">Why Choose ECRS?</h4>
//               {[
//                 "Premium Vehicle Fleet",
//                 "24/7 Customer Support",
//                 "Competitive Pricing",
//                 "Instant Booking"
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-3 group">
//                   <div className="w-2 h-2 bg-red-500 rounded-full group-hover:bg-red-400 transition-colors" />
//                   <span className="text-slate-300 group-hover:text-white transition-colors">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Menu Items */}
//           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
//             {menuItems.map((section, sectionIdx) => (
//               <div key={sectionIdx} className="space-y-6">
//                 <h3 className="text-xl font-bold text-white relative">
//                   {section.title}
//                   <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
//                 </h3>
//                 <ul className="space-y-2">
//                   {section.links.map((link, linkIdx) => (
//                     <li key={linkIdx}>
//                       <Link 
//                         href={link.url}
//                         className="group flex items-center space-x-0 text-slate-300 hover:text-white transition-all duration-300"
//                       >
//                         <ChevronRight className="h-4 w-4 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
//                         <span className="group-hover:translate-x-2 transition-transform duration-300">{link.text}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Contact Info */}
//           <div className="lg:col-span-1 space-y-8">
//             <div>
//               <h3 className="text-xl font-bold text-white mb-6 relative">
//                 Contact Us
//                 <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
//               </h3>
//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <a
//                     key={index}
//                     href={info.href}
//                     className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 group"
//                   >
//                     <div className="p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
//                       <info.icon className="h-5 w-5 text-red-500" />
//                     </div>
//                     <span className="text-sm">{info.text}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

           

//             {/* Newsletter */}
//             <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 p-6 rounded-2xl border border-red-500/20">
//               <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
//               <p className="text-sm text-slate-300 mb-4">Get updates on new offers and services</p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-500/50 transition-colors"
//                 />
//                 <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-r-lg hover:from-red-600 hover:to-red-700 transition-all duration-300">
//                   <Mail className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="flex items-center space-x-6">
//               <p className="text-sm text-slate-400">
//                 © 2024 All Rights Reserved by{" "}
//                 <span className="text-red-400 font-semibold">ECRS</span>
//               </p>
//               <div className="hidden md:flex items-center space-x-4 text-xs text-slate-500">
//                 <span>|</span>
//                 <span>Developed by{" "}
//                   <a
//                     href="https://windhans.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-red-400 hover:text-red-300 transition-colors"
//                   >
//                     Windhans Technologies
//                   </a>
//                 </span>
//               </div>
//             </div>
            
//              {/* Social Media */}
//              <div>
//               <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
//               <div className="flex space-x-3">
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
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       {/* <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110 z-50"
//       >
//         <ChevronRight className="h-6 w-6 rotate-[-90deg]" />
//       </button> */}
//     </section>
//   );
// };

// export { Footer2 };