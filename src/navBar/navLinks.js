import abouticon from "../assets/icons/customer.png"
import teamicon from "../assets/icons/team.png"
import partnersicon from "../assets/icons/handshake.png"
import softwareico from "../assets/icons/system.png"
import hardwareicon from "../assets/icons/cpu.png"
import socMediaIcon from "../assets/icons/content-strategy.png"
import blogIcon from "../assets/icons/copywriting.png"


export const navLinks = [
    { path: "", element: "Company", hasDropdown: true },
    { path: "/services", element: "Services" },
    { path: "", element: "Products", hasDropdown: true },
    { path: "/sobablu", element: "Sobablu" },
    { path: "", element: "Resources", hasDropdown: true },
    { path: "/contact", element: "Contact Us" },
  ];

  export const dropdownLinks = [
    { path: "/about-us", element: "About Us", ref: "Company", icon: teamicon, des: "Innovating technology to build a smarter, connected world." },
    { path: "/our-team", element: "Our Team", ref: "Company", icon: abouticon, des: "Passionate experts creating solutions that lead and inspire." },
    { path: "/partners", element: "Partners", ref: "Company", icon: partnersicon, des: "Strategic partnerships driving the future of technology." },
    { path: "/products/software", element: "Software", ref: "Products", icon: softwareico, des: "Intuitive software transforming ideas into seamless experiences." },
    { path: "/products/hardware", element: "Hardware", ref: "Products", icon: hardwareicon, des: "Cutting-edge hardware connecting the physical and digital worlds." },
    { path: "/blog", element: "Blog", ref: "Resources", icon: blogIcon, des: "A hub of innovation and insights to inspire and empower." },
    { path: "/social-media", element: "Social Media", ref: "Resources", icon: socMediaIcon, des: "Building a vibrant community and shaping the digital conversation." },
  ];
  