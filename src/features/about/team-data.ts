export interface TeamMember {
  imagePosition: string;
  imageSrc: string;
  linkedinUrl: string;
  name: string;
  position: string;
  treatment?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Anjolaoluwa Ajayi",
    position: "CEO/Founder",
    linkedinUrl: "https://www.linkedin.com/in/lifewjola/",
    imageSrc: "/images/staff/anjola.png",
    imagePosition: "object-left",
  },
  {
    name: "Uwakmfon Treasure Ezekiel",
    position: "Marketing Lead",
    linkedinUrl: "https://www.linkedin.com/in/uwakmfon-ezekiel-35b055213/",
    imageSrc: "/images/staff/treasure.png",
    imagePosition: "object-center",
    treatment: "scale-110",
  },
  {
    name: "Ogo'inja Samuel Tamaraemi",
    position: "QA Engineer",
    linkedinUrl: "https://www.linkedin.com/in/samuel-ogoinja-146366292/",
    imageSrc: "/images/staff/samuel.png",
    imagePosition: "object-right",
    treatment: "grayscale",
  },
  {
    name: "Gara Kinkinsoko",
    position: "Database Administrator",
    linkedinUrl: "https://www.linkedin.com/in/kinkinsoko-gara-640346308/",
    imageSrc: "/images/staff/gara.png",
    imagePosition: "object-center",
    treatment: "grayscale contrast-125",
  },
  {
    name: "Philip Edward",
    position: "Chief Technology Officer",
    linkedinUrl: "https://www.linkedin.com/in/philip-edward-gmcpn-199973360/",
    imageSrc: "/images/staff/phillip.png",
    imagePosition: "object-left",
    treatment: "scale-125",
  },
  {
    name: "Fanimokun Oyindamola Dorcas",
    position: "Content Writer & Data Analyst",
    linkedinUrl: "https://www.linkedin.com/in/oyindamola-fanimokun/",
    imageSrc: "/images/staff/oyin.png",
    imagePosition: "object-right",
    treatment: "scale-110 saturate-150",
  },
  {
    name: "Ikinwot Ezekiel",
    position: "Frontend Developer",
    linkedinUrl: "https://www.linkedin.com/in/ikinwotezekiel/",
    imageSrc: "/images/staff/ezekiel.png",
    imagePosition: "object-center",
    treatment: "brightness-90",
  },
  {
    name: "Jerome Opara",
    position: "Head of Design",
    linkedinUrl: "https://www.linkedin.com/in/jerome-opara-787572235/",
    imageSrc: "/images/staff/jerome.png",
    imagePosition: "object-left",
    treatment: "scale-110 grayscale",
  },
  {
    name: "William Emelifonwu",
    position: "Application Developer",
    linkedinUrl: "https://www.linkedin.com/in/william-emelifonwu/",
    imageSrc: "/images/staff/william.png",
    imagePosition: "object-right",
    treatment: "contrast-125",
  },
  {
    name: "Imoh Bassey",
    position: "Backend Developer",
    linkedinUrl: "https://www.linkedin.com/in/imoh-bassey/",
    imageSrc: "/images/staff/imoh.png",
    imagePosition: "object-center",
    treatment: "scale-125 saturate-50",
  },
  {
    name: "Ebong Nsikak-Abasi",
    position: "Chief Product Officer",
    linkedinUrl: "https://www.linkedin.com/in/nsikak-abasi-ebong98/",
    imageSrc: "/images/staff/nsikak.png",
    imagePosition: "object-left",
    treatment: "grayscale brightness-75",
  },
  {
    name: "Basit Balogun",
    position: "Cybersecurity Engineer",
    linkedinUrl: "https://www.linkedin.com/in/basitbalogunolasubomi/",
    imageSrc: "/images/staff/basit.png",
    imagePosition: "object-right",
    treatment: "scale-110 brightness-110",
  },
];
