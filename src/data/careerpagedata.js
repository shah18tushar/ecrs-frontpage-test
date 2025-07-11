import { Briefcase, Users, Car } from "lucide-react"; // optional icons

export const formData = {
  vendor: {
    image: "/vendor.jpg", // replace with correct image path
    title: "Vendor Partnership",
    description:
      "Join our network of trusted vendors and grow your business with us.",
    icon: Briefcase,
  },
  staff: {
    image: "/staff.jpg",
    title: "Staff Position",
    description:
      "Become part of our dedicated team and build your career with us.",
    icon: Users,
  },
  driver: {
    image: "/driver.jpg",
    title: "Driver Application",
    description:
      "Start your journey as a professional driver with our company.",
    icon: Car,
  },
};
