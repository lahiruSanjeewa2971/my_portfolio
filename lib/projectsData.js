export const projects = [
    {
        id: 1,
        slug: "salon16-customer",
        num: "01",
        category: "Full-stack Web Application",
        title: "Salon16 – Customer Booking Web Application",
        subtitle: "Customer-Side Booking Platform",
        description:
            "Salon16 Customer App is a modern web application built with React that allows customers to browse services, place bookings, and track booking statuses. The app integrates Firebase Authentication for secure access and Firestore for real-time data handling.",
        detailedDescription:
            "This project was developed as a client-requested solution to digitize and streamline the salon booking process. Customers can select services, choose preferred dates and time slots, and submit bookings through a clean and intuitive interface. The application leverages Firebase Authentication to securely manage users and Firestore for real-time data synchronization, ensuring booking updates are instantly reflected across the system. Instead of push notifications, the system uses EmailJS and Nodemailer with Firebase-triggered logic to send custom-designed email notifications. Customers are notified when a booking is placed, and again when an administrator accepts or rejects the booking, including optional admin notes. The frontend follows scalable architecture practices with Redux for global state management, robust form validation, and fully responsive layouts optimized for both desktop and mobile users.",
        features: [
            "Browse and search salon services with detailed descriptions",
            "Book services with preferred dates and time slots",
            "Secure user authentication using Firebase Authentication",
            "Real-time booking and status updates via Firestore",
            "Automated email notifications for booking creation and status changes",
            "Admin notes displayed to customers on booking decisions",
            "Redux state management for predictable data flow",
            "Form validation to ensure data quality",
            "Fully responsive design optimized for mobile and desktop",
            "Track booking history and status in user dashboard",
        ],
        stack: [
            { name: "React.js" },
            { name: "Redux" },
            { name: "Firebase Firestore" },
            { name: "Firebase Authentication" },
            { name: "Tailwind CSS" },
            { name: "EmailJS" },
        ],
        image: "/assets/work/salon16_web.png",
        live: "https://salon16.netlify.app",
        // github: "https://github.com/lahiruSanjeewa2971/Salon16_website",
        github: "", // Private / client project
        clientType: "Client Request",
        role: "Full-stack Developer",
        duration: "3 months",
        challenges: [
            "Handling real-time booking updates while preventing inconsistent data states",
            "Designing a smooth multi-step booking flow with multiple service options",
            "Implementing reliable automated email notifications with custom templates",
            "Managing complex global state for bookings, users, and UI interactions",
        ],
    },
    {
        id: 2,
        slug: "salon16-admin",
        num: "02",
        category: "React Native PWA",
        title: "Salon16 – Admin Management App",
        subtitle: "Progressive Web App for Salon Management",
        description:
            "Salon16 Admin is a Progressive Web App built with React Native and Expo for managing salon operations in real time. The app enables administrators to manage bookings, services, customers, and daily schedules through a secure role-based system. Note: This PWA is optimized for mobile screens—please switch to mobile responsive view in your browser for the best experience.",
        detailedDescription:
            "Salon16 Admin is a powerful Progressive Web App (PWA) built with React Native and Expo, specifically designed to give salon administrators complete control over their operations.",
        pwaNote: "As a mobile-first PWA, the interface is optimized for portrait mobile screens and tablets, so if you're viewing it on desktop, please use your browser's responsive mode (mobile view) for the intended experience.",
        detailedDescriptionContinued: "The application provides a comprehensive dashboard for managing bookings, services, customers, and daily schedules in real time. Powered by Firebase Authentication and Firestore, the system implements a secure role-based access control system, ensuring that only authorized personnel can perform administrative actions. The app features offline-aware behavior, allowing administrators to access critical information even without an internet connection. It includes responsive layouts that adapt seamlessly to various screen sizes, and a custom salon-themed UI that aligns with the brand identity. Instead of relying on push notifications, the system leverages EmailJS and Nodemailer integrated with Firebase Cloud Functions to send professionally branded email notifications to customers when bookings are placed or when their status changes, ensuring reliable and consistent communication. The application architecture follows React Native best practices with modular components and centralized state management.",
        features: [
            "Real-time booking management with accept and reject actions",
            "Service management with create, update, and delete functionality",
            "Customer management with booking history access",
            "Daily bookings view filtered by selected date",
            "Firebase Authentication with admin role-based access control",
            "Firestore-powered real-time data synchronization",
            "Offline-aware behavior for improved reliability",
            "Automated email notifications using EmailJS and Nodemailer",
            "Admin notes attached to booking status updates",
            "Responsive UI optimized for mobile and tablet screens",
            "Booking status tracking and historical logs",
        ],
        stack: [
            { name: "React Native" },
            { name: "Expo" },
            { name: "Firebase Firestore" },
            { name: "Firebase Authentication" },
            { name: "Firebase Cloud Functions" },
            { name: "EmailJS" },
            { name: "Nodemailer" },
        ],
        image: "/assets/work/salon16_app.png",
        live: "https://salon16-app.netlify.app",
        // github: "https://github.com/lahiruSanjeewa2971/Salon16",
        github: "", // Private / client project
        clientType: "Client Request",
        role: "Full-stack Developer",
        duration: "3 months",
        challenges: [
            "Building a cross-platform React Native PWA using Expo",
            "Implementing secure role-based access control with Firebase",
            "Handling real-time booking updates with Firestore",
            "Designing offline-aware behavior for admin reliability",
            "Integrating automated email workflows for booking lifecycle events",
        ],
    },
    {
        id: 3,
        slug: "prarthana-nelum-pokuna",
        num: "03",
        category: "Full-stack Next.js Application",
        title: "Prarthana Nelum Pokuna",
        subtitle: "Hotel & Event Booking Platform",
        description:
            "A modern, full-stack hotel and event booking platform built for a function venue hosting weddings, parties, and private gatherings. The project features a premium landing experience with a subtle 3D hero section and a streamlined booking flow.",
        detailedDescription:
            "Prarthana Nelum Pokuna is a modern full-stack booking platform developed for a hotel and function venue that hosts weddings, birthday parties, family gatherings, and small events. The website is designed to deliver a calm and premium first impression through a clean UI and a subtle, purpose-driven 3D hero section inspired by pavilion and lotus architectural forms. The platform allows customers to explore venue details, view image galleries, and place booking requests by selecting event type, preferred date, time slot, and additional notes. An admin dashboard enables administrators to review upcoming bookings, accept or reject requests with notes, and manage venue information. Automated email notifications are sent to both administrators and customers when bookings are placed and when their status changes, ensuring clear communication. Built with a server-first approach using Next.js, PostgreSQL, and Prisma, the application emphasizes clean architecture, performance, SEO optimization, and scalability.",
        features: [
            "Elegant landing page with subtle 3D hero section",
            "Venue information pages including about, gallery, map, and contact",
            "Event booking flow with event type, date, time, and notes",
            "Admin dashboard for reviewing and managing booking requests",
            "Accept or reject bookings with admin notes",
            "Automated email notifications for admins and customers",
            "Venue and hotel detail management for administrators",
            "Server-side rendering and server-first data fetching",
            "Responsive and mobile-friendly design",
            "Secure admin authentication",
        ],
        stack: [
            { name: "Next.js" },
            { name: "PostgreSQL" },
            { name: "Prisma ORM" },
            { name: "Tailwind CSS" },
            { name: "Three.js" },
            { name: "Node.js" },
            { name: "Nodemailer" },
        ],
        image: "/assets/work/project_03.png",
        live: "", // To be added after client acceptance
        github: "", // Private / client project
        clientType: "Client Project",
        role: "Full-stack Developer",
        duration: "1 months",
        challenges: [
            "Designing a subtle and performance-friendly 3D hero experience",
            "Structuring a clean server-first architecture in Next.js",
            "Designing a relational PostgreSQL schema for bookings and events",
            "Implementing admin-controlled booking acceptance workflow",
            "Ensuring reliable email notifications with minimal infrastructure",
            "Balancing visual polish with performance and SEO",
        ],
    }
    ,
];

export const getProjectBySlug = (slug) => {
    return projects.find((project) => project.slug === slug);
};

export const getAllProjectSlugs = () => {
    return projects.map((project) => project.slug);
};
