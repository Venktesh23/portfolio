import { Icons } from "@/components/icons";
import { FileText, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Javascript } from "@/components/ui/svgs/javascript";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { C } from "@/components/ui/svgs/c";
import { Aws } from "@/components/ui/svgs/aws";

export const DATA = {
  name: "Venktesh",
  initials: "V",
  url: "https://venktesh.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Science undergrad at the University of South Florida, graduating in May 2027. I turn ideas into shipped software.",
  summary:
    "I enjoy building software and turning ideas into reliable, real-world systems. I'm a **Dean's List Scholar** and a **2x hackathon winner**, experiences that shaped how I approach ownership, problem-solving, and execution.\n\nI've completed **3 software internships** where I worked across **backend and distributed systems**, **LLM-driven features**, and **full-stack solutions**, delivering measurable impact on production software used by real users. Alongside this, I've held **3 on-campus roles** as a **Student Assistant**, **Housing Services Clerk**, and a **Computer Science Tutor**, where I supported peers, explained complex concepts, and strengthened my communication and leadership skills.\n\nOutside of technical work, I'm part of the **Bulls L.E.A.D. leadership cohort** and lead technical initiatives as a **Tech Lead at Google Developers Student Club at USF**, mentoring peers and helping build a strong engineering community.",
  avatarUrl: "/images/profile_pic.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "C", icon: C },
    { name: "C++", icon: Csharp },
    { name: "Postgres", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "AWS", icon: Aws },
    { name: "HTML", icon: Html5 },
    { name: "CSS", icon: Css3 },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
    { name: ".NET", icon: Csharp },
    { name: "Spring Boot", icon: Java },
    { name: "Express", icon: Nodejs },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Venktesh_Tapadia_Resume.pdf", icon: FileText, label: "Resume", openInNewTab: true },
  ],
  contact: {
    email: "venkteshtapadia0923@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Venktesh23",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/venktesh-tapadia/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=venkteshtapadia0923@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "VSP Vision",
      href: "https://www.vspvision.com",
      badges: [],
      location: "Remote",
      title: "Incoming Software Engineering Intern",
      logoUrl: "/images/VSP_Logo.jpeg",
      start: "May 2026",
      end: null,
      description:
        "Software Engineering Intern in Eyefinity team for Summer 2026.",
      links: [
        { icon: Icons.linkedin, href: "https://www.linkedin.com/company/vsp-vision/posts/?feedView=all", label: "LinkedIn" },
        { icon: Icons.globe, href: "https://www.vspdirect.com", label: "Website" },
      ],
    },
    {
      company: "Reality, Autonomy, and Robot Experience Lab",
      href: "https://therarelab.com/",
      badges: [],
      location: "Tampa, FL",
      title: "Research Assistant",
      logoUrl: "/images/RARE_Lab.jpeg",
      start: "May 2025",
      end: "August 2025",
      description:
        "Worked on an assistive robot, building adaptive software systems to improve human–robot interaction for individuals with cognitive disabilities.",
      links: [
        { icon: Icons.linkedin, href: "https://www.linkedin.com/company/therarelab/posts/?feedView=all", label: "LinkedIn" },
        { icon: Icons.globe, href: "https://therarelab.com/", label: "Website" },
      ],
    },
    {
      company: "Interlinked (YC S24)",
      href: "https://interlynked.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/images/Interlinked%20(YC%20S24).jpeg",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "Worked on a production platform delivering real-time disaster and evacuation insights, contributing to reliable backend systems and user-facing features in a fast-moving startup environment.",
      links: [
        { icon: Icons.linkedin, href: "https://www.linkedin.com/company/interlinkedcorp/posts/?feedView=all", label: "LinkedIn" },
        { icon: Icons.globe, href: "https://interlynked.com/", label: "Website" },
      ],
    },
    {
      company: "TrackSo",
      href: "https://trackso.in/",
      badges: [],
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/images/TrackSo.jpeg",
      start: "May 2024",
      end: "August 2024",
      description:
        "Worked on software systems for monitoring and managing solar power infrastructure, building reliable backend services and dashboards used in real operational settings.",
      links: [
        { icon: Icons.linkedin, href: "https://www.linkedin.com/company/free-spirits/posts/?feedView=all", label: "LinkedIn" },
        { icon: Icons.globe, href: "https://trackso.in/", label: "Website" },
      ],
    },
  ],
  education: [
    {
      school: "University of South Florida",
      href: "https://www.usf.edu",
      degree: "B.S. in Computer Science",
      gpa: "GPA: 3.98/4.00 (Dean's List Scholar)",
      logoUrl: "/images/USF.jpeg",
      start: "August 2023",
      end: "May 2027",
    },
  ],
  projects: [
    {
      title: "Mark",
      href: "https://mark-crm-ai-agent.vercel.app",
      dates: "March 2026",
      active: true,
      description:
        "AI-powered campaign workspace with multi-agent generation, review, experimentation, and closed-loop learning. It supports campaign build, compliance review, A/B experimentation, and data-driven iteration from prospect outcomes.",
      technologies: [
        "React",
        "Typescript",
        "Python",
        "FastAPI",
        "Gemini API",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://mark-crm-ai-agent.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venktesh23/Mark-CRM-AI-Agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/mark.png",
      video: "",
    },
    {
      title: "CarbonCTRL",
      href: "https://carbonctrl.us",
      dates: "April 2025",
      active: true,
      description:
        "Carbon management web app for tracking emissions, viewing insights, and generating ML-backed recommendations. Features a React dashboard, Express API, and optional Gemini-powered personalized reduction strategies.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "TensorFlow",
        "scikit-learn",
      ],
      links: [
        {
          type: "Website",
          href: "https://carbonctrl.us",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Param-10/CarbonCTRL",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/CarbonCTRL.png",
      video: "",
    },
    {
      title: "FindMyStuff",
      href: "https://github.com/Venktesh23/FindMyStuffUSF",
      dates: "",
      active: true,
      description:
        "A comprehensive lost and found platform specifically designed for the University of South Florida community. It features real-time notifications, secure user authentication, and an intuitive dashboard to help students recover missing items efficiently.",
      technologies: [
        "Express",
        "Node.js",
        "PostgreSQL",
        "TypeScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Venktesh23/FindMyStuffUSF",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Polaris",
      href: "https://polaris-livid-one.vercel.app/",
      dates: "",
      active: true,
      description:
        "A high-performance infrastructure management platform tailored for modern engineering teams. It provides advanced monitoring tools, automated control systems, and secure access protocols to ensure system stability and operational excellence.",
      technologies: [
        "Python",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://polaris-livid-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venktesh23/polaris",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/polaris.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
