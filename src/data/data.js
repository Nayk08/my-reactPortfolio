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

import LandingPAge from "../assets/Fitworx/LandingPage.png";
import LoginPage from "../assets/Fitworx/LoginPage.png";
import Payment from "../assets/Fitworx/Paymentsft.png";
import Cartft from "../assets/Fitworx/Cartft.png";
import DashboardFt from "../assets/Fitworx/DashboardFt.png";
import Logbook from "../assets/Fitworx/Logboook.png";
import Reservation from "../assets/Fitworx/Reservation.png";
import Stock from "../assets/Fitworx/Stock.png";

import indeed from "../assets/icons.png";

import PetVetLanding from "../assets/PetVet/PetVetLanding.png";
import PetVetSignIn from "../assets/PetVet/PetVetSignIn.png";
import PetVetDashboard from "../assets/PetVet/PetVetDashboard.png";
import PetVetAppointmentCalendar from "../assets/PetVet/PetVetAppointmentCalendar.png";
import PetVetConsultationTable from "../assets/PetVet/PetVetConsultationTable.png";
import PetVetGroomingTable from "../assets/PetVet/PetVetGroomingTable.png";
import PetVetOperationTable from "../assets/PetVet/PetVetOperationTable.png";
import PetVetClientRecords from "../assets/PetVet/PetVetClientRecords.png";
import PetVetAddClientModal from "../assets/PetVet/PetVetAddClientModal.png";
import PetVetPetRecords from "../assets/PetVet/PetVetPetRecords.png";
import PetVetAddPetModal from "../assets/PetVet/PetVetAddPetModal.png";
import PetVetCart from "../assets/PetVet/PetVetCart.png";
import PetVetPaymentsTable from "../assets/PetVet/PetVetPaymentsTable.png";
import PetVetPaymentDetailsModal from "../assets/PetVet/PetVetPaymentDetailsModal.png";
import PetVetOrderSummaryModal from "../assets/PetVet/PetVetOrderSummaryModal.png";
import PetVetInventory from "../assets/PetVet/PetVetInventory.png";
import PetVetAddProductModal from "../assets/PetVet/PetVetAddProductModal.png";
import PetVetUserManagement from "../assets/PetVet/PetVetUserManagement.png";
import PetVetRolesManagement from "../assets/PetVet/PetVetRolesManagement.png";
import PetVetPermissionMatrix from "../assets/PetVet/PetVetPermissionMatrix.png";

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
    link: "https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage",
    icons: indeed,
  },
];

export const projects = [
  {
    id: 1,
    image: TravelEase,
    status: "Finished",
    title: "Travel Ease",
    Contributor: ["Kyan Villarin"],
    githubUrl: "https://github.com/Nayk08/TechnoSystem",
    technologyUsed: ["C#", "SSMS", "Winform"],
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
    status: "Finished",
    Contributor: ["Kyan Villarin"],
    title: "Bryzahcov Dental System",
    githubUrl: "https://github.com/Nayk08/MiniCapstone_Scheduling",
    technologyUsed: ["C#", "SSMS", "Winform"],

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
    status: "Postponed",
    Contributor: ["Kyan Villarin"],
    githubUrl:
      "https://github.com/Nayk08/Online-Sales-Inventory-with-Feature-Client-",
    websiteUrl:
      "https://nayk08-online-sales-inventory-with-git-ea5197-nayk08s-projects.vercel.app/",
    technologyUsed: [
      "Node.js",
      "PostgreSQL",
      "React",
      "Tailwind CSS",
      "Express.js",
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
  {
    id: 4,
    image: LandingPAge,
    status: "Finished",
    description:
      "A fitness center management system with member registration, class scheduling, and payment processing.",
    title:
      "ONLINE GYM FACILITY MANAGEMENT WITH SALES AND INVENTORY FOR FITWORX GYM",
    githubUrl: "https://github.com/deloyxd/ogfmsi",
    websiteUrl: "https://fitworxgymph.web.app/",
    Contributor: [
      "Kyan Villarin",
      "Jestley Estipona",
      "Enzo Daniela",
      "Jun Gin De Jose",
    ],
    technologyUsed: [
      "HTML",
      "CSS",
      "JS",
      " Tailwind CSS",
      "ExpressJs",
      "MySQL",
      "Node.js",
      "Firebase",
    ],
    content: [
      {
        id: 1,
        image: LoginPage,
        title: "Login Page",
        description: "Secure login for gym members and staff.",
      },
      {
        id: 2,
        image: DashboardFt,
        title: "Dashboard",
        description: "Overview of gym operations and statistics.",
      },
      {
        id: 3,
        image: Cartft,
        description:
          "This is the cart page where users can view and manage their selected classes or products.",
        title: "Cart",
      },
      {
        id: 4,
        image: Payment,
        title: "Payment",
        description:
          "Secure payment processing for class bookings and product purchases.",
      },
      {
        id: 5,
        image: Logbook,
        title: "Logbook",
        description:
          "A logbook feature for tracking member attendance and class participation.",
      },
      {
        id: 6,
        image: Reservation,
        title: "Reservation",
        description:
          "A reservation system for booking classes and gym facilities.",
      },
    ],
  },
  {
    id: 5,
    image: PetVetLanding,
    status: "In Progress",
    title: "PetVet Cycle Animal and Grooming Center",
    Contributor: ["Kyan Villarin"],
    githubUrl: "https://github.com/Nayk08/Petvet",
    websiteUrl: "https://petvet-cyan.vercel.app/",
    technologyUsed: [
      "React",
      "Vite",
      "React Router",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Radix UI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Zod",
      "Cloudinary",
      "Render",
    ],
    description:
      "A full-stack veterinary clinic management system built around a database-driven Role-Based Access Control (RBAC) engine. Every navigation item, route, and API endpoint is gated by a permission matrix stored in PostgreSQL — nothing is hardcoded to a role name, so roles and their capabilities can be changed at runtime from the Permissions UI without touching code.",
    content: [
      {
        id: 1,
        image: PetVetLanding,
        title: "Landing Page",
        description:
          "Public-facing homepage introducing the clinic and its online booking.",
      },
      {
        id: 2,
        image: PetVetSignIn,
        title: "Sign In",
        description: "Portal sign in for clients, staff, and veterinarians.",
      },
      {
        id: 3,
        image: PetVetDashboard,
        title: "Dashboard",
        description:
          "Live overview of appointments, consultations, grooming, and critical operations.",
      },
      {
        id: 4,
        image: PetVetAppointmentCalendar,
        title: "Appointment Calendar",
        description: "Calendar view for booking and managing appointments.",
      },
      {
        id: 5,
        image: PetVetConsultationTable,
        title: "Consultation Records",
        description:
          "Real-time status tracking and record management for consultations.",
      },
      {
        id: 6,
        image: PetVetGroomingTable,
        title: "Grooming Records",
        description:
          "Real-time status tracking and record management for grooming appointments.",
      },
      {
        id: 7,
        image: PetVetOperationTable,
        title: "Operation Records",
        description:
          "Real-time status tracking and record management for operations.",
      },
      {
        id: 8,
        image: PetVetClientRecords,
        title: "Client Records",
        description: "Manage client information and their linked pets.",
      },
      {
        id: 9,
        image: PetVetAddClientModal,
        title: "Add New Client",
        description: "Form for registering a new client into the system.",
      },
      {
        id: 10,
        image: PetVetPetRecords,
        title: "Pet Records",
        description:
          "Per-client pet profiles including breed, weight, and medical details.",
      },
      {
        id: 11,
        image: PetVetAddPetModal,
        title: "Add New Pet",
        description: "Form for adding a pet to a client's profile.",
      },
      {
        id: 12,
        image: PetVetCart,
        title: "Point of Sale",
        description: "Storefront for clinic products with cart management.",
      },
      {
        id: 13,
        image: PetVetPaymentsTable,
        title: "Payments",
        description:
          "Real-time tracking of payment records across the clinic.",
      },
      {
        id: 14,
        image: PetVetPaymentDetailsModal,
        title: "Payment Details",
        description: "Detailed breakdown of an individual payment record.",
      },
      {
        id: 15,
        image: PetVetOrderSummaryModal,
        title: "Order Summary",
        description:
          "Checkout flow supporting cash, GCash, and split payments.",
      },
      {
        id: 16,
        image: PetVetInventory,
        title: "Inventory",
        description:
          "Stock and expiry tracking for clinic products and supplies.",
      },
      {
        id: 17,
        image: PetVetAddProductModal,
        title: "Add New Product",
        description: "Form for adding a new product to the inventory.",
      },
      {
        id: 18,
        image: PetVetUserManagement,
        title: "User Management",
        description: "Manage staff accounts, roles, and active status.",
      },
      {
        id: 19,
        image: PetVetRolesManagement,
        title: "Roles Management",
        description: "Define and manage the roles available in the system.",
      },
      {
        id: 20,
        image: PetVetPermissionMatrix,
        title: "Permission Matrix",
        description:
          "Runtime control over what each role can view, create, edit, delete, or export per module.",
      },
    ],
  },
];
