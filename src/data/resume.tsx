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
      title: "Software Engineering Intern",
      logoUrl: "/images/VSP_Logo.jpeg",
      start: "May 2026",
      end: null,
      description:
        "Software Engineering Intern in Eyefinity team for Summer 2026.",
      skills: ["C#", ".NET", "Angular"],
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
      highlights: [
        "Built and deployed a full-stack Python and React interface for a robot integrating WebSocket",
        "Fine-tuned an LLM with LoRA on real user behavior, cutting task completion time by 50% and boosting instruction accuracy by 30%.",
      ],
      skills: ["Python", "React", "WebSocket", "Fine-Tuning (LoRA)", "PyTorch"],
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
      highlights: [
        "Built disaster response tools at a Y Combinator-backed startup that were used during live emergency scenarios.",
        "Shipped an evacuation mapping pipeline and optimized CI/CD workflows, improving data refresh by 30% and deployment speed by 40%.",
      ],
      skills: ["Next.js", "TypeScript", "Python", "AWS S3", "Mapbox", "Docker", "GitLab"],
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
      highlights: [
        "Built IoT dashboards monitoring 20+ solar plants in real time, with anomaly detection and automated incident alerts.",
        "Designed APIs handling 1,000+ daily requests under 200ms with token-based access control, cutting response time by 50%.",
      ],
      skills: [".NET", "C#", "REST API", "IoT", "AWS SES"],
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
      title: "MedFlow",
      href: "https://medflow-eight-azure.vercel.app/",
      dates: "May 2026",
      active: true,
      description:
        "MedFlow is an agentic assistant for healthcare providers that automates documentation and scheduling. It listens to patient consultations in real time, generates structured SOAP notes, and lets doctors manage their calendar with simple voice commands.",
      technologies: [
        "TypeScript",
        "Python",
        "Claude API",
        "Express",
        "Node",
        "Deepgram API",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://medflow-eight-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venktesh23/MedFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/MedFlow.png",
      video: "",
    },
    {
      title: "Polaris",
      href: "https://polaris-livid-one.vercel.app/",
      dates: "April 2026",
      active: true,
      description:
        "An AI agent that automatically reviews pull requests for security vulnerabilities, maps findings to industry compliance standards, and commits verified fixes directly to the codebase, cutting manual security review time to under 60 seconds.",
      technologies: [
        "Python",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Gemini API",
        "FastAPI",
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
    {
      title: "CarbonCTRL",
      href: "https://carbonctrl.us",
      dates: "April 2025",
      active: true,
      description:
        "Carbon management web app for tracking emissions, viewing insights, and generating ML-backed recommendations. Features a React dashboard, Express API, and Gemini AI powered personalized reduction strategies.",
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "Express",
        "Gemini API",
        "Chart.js",
        "TensorFlow",
        "MongoDB",
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
      href: "https://findmystuffusf.netlify.app/",
      dates: "March 2025",
      active: true,
      description:
        "A comprehensive lost and found platform specifically designed for the University of South Florida community. It features real-time notifications, secure user authentication, and an intuitive dashboard to help students recover missing items efficiently.",
      technologies: [
        "React",
        "JavaScript",
        "Node",
        "Express",
        "Google Maps API",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://findmystuffusf.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venktesh23/FindMyStuffUSF",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/FindMyStuff.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
