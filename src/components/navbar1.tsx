// 'use client';

// import { useGSAPSlideDown } from "@/utils/animations";
// import { Menu } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// interface MenuItem {
//   title: string;
//   url: string;
//   items?: MenuItem[];
// }

// interface Navbar1Props {
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//   };
//   menu?: MenuItem[];
//   auth?: {
//     login: { title: string; url: string };
//     signup: { title: string; url: string };
//   };
// }

// const Navbar1 = ({
//   logo = {
//     url: "/",
//     src: "/ECRS_Logo.png",
//     alt: "logo",
//     title: "",
//   },
//   menu = [
//     { title: "Home", url: "/" },
//     {
//       title: "About Us",
//       url: "#",
//       items: [
//         { title: "About Company", url: "/about/company" },
//         { title: "How It Works", url: "/about/howitworks" },
//         { title: "How We Care", url: "/about/howwecare" },
//         { title: "Our Network", url: "/about/ournetwork" },
//       ],
//     },
//     { title: "Rides", url: "/rides" },
//     { title: "Blog", url: "/blogs" },
//     { title: "Careers", url: "/careers" },
//     { title: "Gallery", url: "/gallery" },
//     { title: "Contact Us", url: "/contactus" },
//   ],
//   auth = {
//     login: { title: "Book Online", url: "/bookonline" },
//     signup: { title: "Pay Now", url: "/paynow" },
//   },
// }: Navbar1Props) => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [scrolled, setScrolled] = useState(false);
//   useGSAPSlideDown(sectionRef, 0, 0.8);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <div
//         ref={sectionRef}
//         className={`mx-auto max-w-6xl transition-all duration-300 px-6 py-3 mt-0 
//            bg-white border border-black/10 shadow-2xl rounded-xl`}
//       >
//         <div className="w-full">
//           {/* Desktop Menu */}
//           <nav className="hidden justify-between lg:flex items-center">
//             <div className="flex items-center gap-4">
//               <Link href={logo.url} className="flex items-center gap-2">
//                 <img src={logo.src} className="max-h-8" alt={logo.alt} />
//                 {logo.title && (
//                   <span className="text-lg font-semibold tracking-tighter">
//                     {logo.title}
//                   </span>
//                 )}
//               </Link>

//               <NavigationMenu>
//                 <NavigationMenuList>
//                   {menu.map((item) => renderMenuItem(item, scrolled))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>

//             {/* Auth Buttons */}
//             <div className="flex gap-1">
//               <Button asChild className="bg-transparent text-gray-950 hover:bg-red-500 hover:rounded-full hover:text-white">
//               <Link href={auth.signup.url} className="hover:no-underline">
//                   <span className="">
//                     {auth.signup.title}
//                   </span>
//                 </Link>
//               </Button>
//               <Button asChild className="rounded-full bg-red-500 text-white hover:bg-red-500 hover:text-white hover:scale-95">

//               <Link href={auth.login.url} className="hover:no-underline">
//                   <span className="">
//                     {auth.login.title}
//                   </span>
//                 </Link>


                
//               </Button>
//             </div>
//           </nav>

//           {/* Mobile Menu */}
//           <div className="block lg:hidden">
//             <div className="flex items-center justify-between">
//               <Link href={logo.url} className="flex items-center gap-2">
//                 <img src={logo.src} className="max-h-10" alt={logo.alt} />
//               </Link>
//               <Sheet>
//                 <SheetTrigger asChild>
//                   <Button variant="ghost" size="icon">
//                     <Menu className="size-4" />
//                   </Button>
//                 </SheetTrigger>
//                 <SheetContent className="overflow-y-auto">
//                   <SheetHeader>
//                     <SheetTitle>
//                       <Link href={logo.url} className="flex items-center gap-2">
//                         <img src={logo.src} className="max-h-8" alt={logo.alt} />
//                       </Link>
//                     </SheetTitle>
//                   </SheetHeader>
//                   <div className="flex flex-col gap-6 p-4">
//                     <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
//                       {menu.map((item) => renderMobileMenuItem(item))}
//                     </Accordion>

//                     <div className="flex flex-col gap-3">
//                       <Button asChild className="btn-shadow-red">
//                         <Link href={auth.login.url} className="hover:no-underline">
//                           {auth.login.title}
//                         </Link>
//                       </Button>
//                       <Button asChild className="btn-shadow-red">
//                         <Link href={auth.signup.url} className="hover:no-underline">
//                           {auth.signup.title}
//                         </Link>
//                       </Button>
//                     </div>
//                   </div>
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// // Updated Desktop Dropdown Renderer with scroll state
// const renderMenuItem = (item: MenuItem, scrolled: boolean) => {
//   if (item.items) {
//     const textStyle = "text-black ";
//     return (
//       <NavigationMenuItem key={item.title}>
//         <NavigationMenuTrigger className={`text-lg font-medium hover:bg-transparent ${textStyle}`}>
//           {item.title}
//         </NavigationMenuTrigger>
//         <NavigationMenuContent className="min-w-[200px]">
//           <div className="flex flex-col p-2">
//             {item.items.map((subItem) => (
//               <NavigationMenuLink asChild key={subItem.title}>
//                 <Link
//                   href={subItem.url}
//                   className="hover:bg-gray-50 px-4 py-2 rounded-md block"
//                 >
//                   {subItem.title}
//                 </Link>
//               </NavigationMenuLink>
//             ))}
//           </div>
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     );
//   }
//   const textStyle = "text-black ";
//   return (
//     <NavigationMenuItem key={item.title}>
//       <NavigationMenuLink asChild>
//         <Link
//           href={item.url}
//           className={`text-lg font-medium hover:underline px-2 block ${textStyle}`}
//         >
//           {item.title}
//         </Link>
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   );
// };

// // Mobile Dropdown Renderer (unchanged)
// const renderMobileMenuItem = (item: MenuItem) => {
//   if (item.items) {
//     return (
//       <AccordionItem key={item.title} value={item.title} className="border-b-0">
//         <AccordionTrigger className="text-lg py-0 font-semibold hover:no-underline">
//           {item.title}
//         </AccordionTrigger>
//         <AccordionContent className="mt-2">
//           <div className="flex flex-col gap-2">
//             {item.items.map((subItem) => (
//               <Link
//                 key={subItem.title}
//                 href={subItem.url}
//                 className="text-lg pl-4 py-2 hover:bg-gray-100 rounded-md"
//               >
//                 {subItem.title}
//               </Link>
//             ))}
//           </div>
//         </AccordionContent>
//       </AccordionItem>
//     );
//   }

//   return (
//     <Link key={item.title} href={item.url} className="text-lg font-semibold hover:no-underline">
//       {item.title}
//     </Link>
//   );
// };

// export { Navbar1 };







'use client';

import { useGSAPSlideDown } from "@/utils/animations";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogInPopUp from "./ui/LogInPopUp";

interface MenuItem {
  title: string;
  url: string;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/ECRS_Logo.png",
    alt: "logo",
    title: "",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "About Us",
      url: "#",
      items: [
        { title: "About Company", url: "/about/company" },
        { title: "How It Works", url: "/about/howitworks" },
        { title: "How We Care", url: "/about/howwecare" },
        { title: "Our Network", url: "/about/ournetwork" },
      ],
    },
    { title: "Rides", url: "/rides" },
    { title: "Blog", url: "/blogs" },
    { title: "Careers", url: "/careers" },
    { title: "Gallery", url: "/gallery" },
    { title: "Contact Us", url: "/contactus" },
  ],
  auth = {
    login: { title: "Book Online", url: "/bookonline" },
    signup: { title: "Pay Now", url: "/paynow" },
  },
}: Navbar1Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  useGSAPSlideDown(sectionRef, 0, 0.8);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-6xl transition-all duration-300 px-6 py-3 mt-0 
           bg-white border border-black/10 shadow-2xl rounded-xl`}
      >
        <div className="w-full">
          {/* Desktop Menu */}
          <nav className="hidden justify-between lg:flex items-center">
            <div className="flex items-center gap-4">
              <Link href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
                {logo.title && (
                  <span className="text-lg font-semibold tracking-tighter">
                    {logo.title}
                  </span>
                )}
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, scrolled))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-1">
             
              <Button asChild className="bg-transparent text-gray-950 hover:bg-red-500 hover:rounded-full hover:text-white transition-all duration-1000">
                <Link href={auth.signup.url} className="hover:no-underline">
                  <span className="">
                    {auth.signup.title}
                  </span>
                </Link>
              </Button>
              <Button asChild className="bg-white border border-none cursor-pointer text-gray-950 hover:bg-red-500 hover:rounded-full hover:text-white transition-all duration-1000">
                <Link href={auth.login.url} className="hover:no-underline">
                  <span className="">
                    {auth.login.title}
                  </span>
                </Link>
              </Button>
               <Button 
                onClick={() => setShowLoginPopup(true)}
                className="rounded-full bg-red-500 text-white hover:bg-red-600 hover:text-white hover:scale-95 transition-all duration-1000 cursor-pointer"
                
              >
                <span className="">Log In</span>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <Link href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="max-h-10" alt={logo.alt} />
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={logo.url} className="flex items-center gap-2">
                        <img src={logo.src} className="max-h-8" alt={logo.alt} />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button 
                        onClick={() => setShowLoginPopup(true)}
                        className="btn-shadow-red cursor-pointer"
                      >
                        Log In 123
                      </Button>
                      <Button asChild className="btn-shadow-red">
                        <Link href={auth.signup.url} className="hover:no-underline">
                          {auth.signup.title}
                        </Link>
                      </Button>
                      <Button asChild className="btn-shadow-red">
                        <Link href={auth.login.url} className="hover:no-underline">
                          {auth.login.title}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      <AnimatePresence>
        {showLoginPopup && (
          <LogInPopUp onClose={() => setShowLoginPopup(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};

// Updated Desktop Dropdown Renderer with scroll state
const renderMenuItem = (item: MenuItem, scrolled: boolean) => {
  if (item.items) {
    const textStyle = "text-black ";
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className={`text-lg font-medium hover:bg-transparent ${textStyle}`}>
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="min-w-[200px]">
          <div className="flex flex-col p-2">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <Link
                  href={subItem.url}
                  className="hover:bg-gray-50 px-4 py-2 rounded-md block"
                >
                  {subItem.title}
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  const textStyle = "text-black ";
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.url}
          className={`text-lg font-medium hover:underline px-2 block ${textStyle}`}
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

// Mobile Dropdown Renderer (unchanged)
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-lg py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          <div className="flex flex-col gap-2">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.url}
                className="text-lg pl-4 py-2 hover:bg-gray-100 rounded-md"
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-lg font-semibold hover:no-underline">
      {item.title}
    </Link>
  );
};

export { Navbar1 };