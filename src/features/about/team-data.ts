export interface TeamMember {
  imagePosition: string;
  imageSrc: string;
  name: string;
  treatment?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Team member 1",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-left",
  },
  {
    name: "Team member 2",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-center",
    treatment: "scale-110",
  },
  {
    name: "Team member 3",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-right",
    treatment: "grayscale",
  },
  {
    name: "Team member 4",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-center",
    treatment: "grayscale contrast-125",
  },
  {
    name: "Team member 5",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-left",
    treatment: "scale-125",
  },
  {
    name: "Team member 6",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-right",
    treatment: "scale-110 saturate-150",
  },
  {
    name: "Team member 7",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-center",
    treatment: "brightness-90",
  },
  {
    name: "Team member 8",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-left",
    treatment: "scale-110 grayscale",
  },
  {
    name: "Team member 9",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-right",
    treatment: "contrast-125",
  },
  {
    name: "Team member 10",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-center",
    treatment: "scale-125 saturate-50",
  },
  {
    name: "Team member 11",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-left",
    treatment: "grayscale brightness-75",
  },
  {
    name: "Team member 12",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-right",
    treatment: "scale-110 brightness-110",
  },
];
