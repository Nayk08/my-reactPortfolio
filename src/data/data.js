import fb from "../assets/icons8-facebook-logo-50.png";
import github from "../assets/icons8-github-logo-50.png";
import linkedIn from "../assets/icons8-linkedin-50.png";
import Bryzahcov from "../assets/dentist.jpg";
import TravelEase from "../assets/travelEase.jpg";

import TravelDashboard from "../assets/TravelDashboard.jpg";
import TravelHistory from "../assets/TravelHistory_TBL.jpg";
import TravelTopup from "../assets/TravelTopUp.jpg";
import TravelData from "../assets/TRavel Data.jpg";
import TravelRegister from "../assets/TravelRegister.jpg";

import BryzahcovDashboard from "../assets/DentistDashboard.jpg";
import BryzahcovCalendar from "../assets/DentistCalendar.jpg";
import BryzahcovRecords from "../assets/DentistRecords.jpg";
import BryzahcovAppointmenRecords from "../assets/DentistAppoinmentRecords.jpg";

import selfDashboard from "../assets/SelfProject/selfProject-dashboard.png";
import selfInventory from "../assets/SelfProject/selfProject-Inventory.png";
import selfCart from "../assets/SelfProject/selfProject-cart.png";
import selfPayment from "../assets/SelfProject/selfProject-payment.png";
import selfaddProduct from "../assets/SelfProject/selfProject-addProductModal.png";
import selfPaymentModal from "../assets/SelfProject/selfProject-paymentModal.png";
import selflogo from "../assets/sales-in.png";

export const navBarData = [
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Skills",
  },
  {
    id: 4,
    title: "Projects",
  },
];

export const Myabout = [
  {
    id: 1,
    icon: "💻",
    description: "Web Developer",
  },
  {
    id: 2,
    icon: "🎓",
    description: "IT Student",
  },
  {
    id: 3,
    icon: "⚛️",
    description: "Aspiring React.js Developer",
  },
  {
    id: 4,
    icon: "🚀",
    description: "Actively Upskilling",
  },
];

export const email = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/kyanvillarin/",
    icons: linkedIn,
  },
  {
    id: 2,
    link: " https://github.com/Nayk08",
    icons: github,
  },
  {
    id: 3,
    link: "https://www.facebook.com/kyan.villarin.3",
    icons: fb,
  },
];

export const projects = [
  {
    id: 1,
    image: TravelEase,
    title: "Travel Ease",
    githubUrl: "https://github.com/Nayk08/TechnoSystem",
    technologyUsed: ["C#", "SQL", "Winform"],
    description:
      "A travel management application that helps users plan trips, manage itineraries, and track expenses.",
    content: [
      {
        id: 1,
        image: TravelDashboard,
        title: "Dashboard",
        description: "Overview of travel plans and upcoming trips.",
      },
      {
        id: 2,
        image: TravelRegister,
        title: "ID Form",
        description: "Create and manage traveler identification.",
      },
      {
        id: 3,
        image: TravelTopup,
        title: "Top Up Form",
        description: "Manage travel funds and budgets.",
      },
      {
        id: 4,
        image: TravelHistory,
        title: "History",
        description: "View past trips and travel history.",
      },
      {
        id: 5,
        image: TravelData,
        title: "Data List Table",
        description: "Data Managing Content",
      },
    ],
  },

  {
    id: 2,
    image: Bryzahcov,
    title: "Bryzahcov Dental System",
    githubUrl: "https://github.com/Nayk08/MiniCapstone_Scheduling",
    technologyUsed: ["C#", "SQL", "Winform"],

    description:
      "A comprehensive dental clinic management system with patient records, appointment scheduling, and billing modules.",
    content: [
      {
        id: 1,
        image: BryzahcovDashboard,
        title: "Dashboard",
        description: "Overview of clinic operations and statistics.",
      },
      {
        id: 2,
        image: BryzahcovCalendar,
        title: "Scheduler",
        description: "Visual scheduling interface for dental procedures.",
      },
      {
        id: 3,
        image: BryzahcovRecords,
        title: "Walk-in Records",
        description: "Manage patient walk-in appointments and records",
      },
      {
        id: 4,
        image: BryzahcovAppointmenRecords,
        title: "Appointments",
        description: "Schedule and track upcoming patient appointments.",
      },
    ],
  },

  {
    id: 3,

    title: "Online-Sales-Inventory-System ",
    image: selflogo,
    githubUrl:
      "https://github.com/Nayk08/Online-Sales-Inventory-with-Feature-Client-",
    websiteUrl:
      "https://nayk08-online-sales-inventory-with-git-ea5197-nayk08s-projects.vercel.app/",
    technologyUsed: [
      "Node.js",
      "PostgreSQL",
      "React, Tailwind CSS, Express.js",
    ],
    description:
      "An online sales inventory system that allows businesses to manage products, track sales, and generate reports.",
    content: [
      {
        id: 1,
        image: selfDashboard,
        title: "Dashboard",
        description: "Overview of sales and inventory metrics.",
      },
      {
        id: 2,
        image: selfInventory,
        title: "Inventory Management",
        description: "Manage product listings and stock levels.",
      },
      {
        id: 3,
        image: selfCart,
        title: "Shopping Cart",
        description: "Add and manage items in the shopping cart.",
      },
      {
        id: 4,
        image: selfPayment,
        title: "Payment Processing",
        description: "Secure payment handling and transaction management.",
      },
      {
        id: 5,
        image: selfaddProduct,
        title: "Add Product",
        description: "Create and add new products to the inventory.",
      },
      {
        id: 6,
        image: selfPaymentModal,
        title: "Payment Modal",
        description:
          "Modal for processing payments and confirming transactions.",
      },
    ],
  },
];
