// import { TbSocial } from "react-icons/tb";
import { MdOutlineAnalytics, MdOutlineDashboard } from "react-icons/md";
import { GrFormSchedule } from "react-icons/gr";
import { FiInbox } from "react-icons/fi";
import { IoSettingsOutline, IoTimeOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { PiSignOut } from "react-icons/pi";

export const signupFields = [
  {
    name: "firstname",
    type: "text",
    placeholder: "firstname",
  },
  {
    name: "lastname",
    type: "text",
    placeholder: "lastname",
  },
  {
    name: "email",
    type: "email",
    placeholder: "email",
  },
  {
    name: "username",
    type: "text",
    placeholder: "username",
  },
  {
    name: "password",
    type: "password",
    placeholder: "password",
  },
  {
    name: "dateOfBirth",
    type: "text",
    placeholder: "YYYY-MM-DD",
  },
];

export const loginFields = [
  {
    name: "emailOrUsername",
    type: "text",
    placeholder: "Email or Username",
  },
  {
    name: "password",
    type: "password",
    placeholder: "password",
  },
];

// navigation bar links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "how",
    title: "How it works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// how it works section
export const howItWorks = [
  {
    title: "Select the Perfect Gift Card",
    text: `Choose from a wide array of digital gift cards representing various brands, experiences, and occasions. Whether it's a cozy coffee date, a spa retreat, or a shopping spree, we've got the perfect card to match every celebration.`,
  },
  {
    title: "Personalize Your Wishes",
    text: `Write a heartfelt message to accompany your gift card. Express your love, share memories, or simply send warm wishes for the festive season. Personalize each card to make it uniquely yours.`,
  },
  {
    title: "Schedule Delivery",
    text: ` Plan ahead and schedule the delivery of your gift card and wishes. Whether it's for birthdays, holidays, or just to say "I miss you" Wishes Unbox ensures your thoughtful gesture arrives right on time.`,
  },
  {
    title: "Real-Time Notifications",
    text: `Stay in the loop with real-time notifications. Know when your loved ones receive and unbox their virtual gifts, creating shared moments of joy, even from a distance.`,
  },
];
// Featureas

export const features = [
  {
    icon: `customize.png`,
    title: "Customize",
    text: "Customize your wishes, such as setting preference for types of wishes and how your recipient can be notified",
  },
  {
    icon: `schedule.png`,
    title: "Scheduled delivery",
    text: "This service allows our users to specify a future date and time for the delivery of your wishes",
  },
  {
    icon: `folders.png`,
    title: "Wishes Archives",
    text: "Maintain an archive of fulfilled wishes as a source of inspiration and revisit your past wishes and desires",
  },
  // {
  //   icon: 'camp.svg',
  //   title:"Social Integration",
  //   text: "Share your wishes to social media platform, to foster community engagement on the platform"
  // },
];

export const sidebarLinks = [
  {
    title: "Overview",
    links: [
      {
        name: "Dashboard",
        icon: <MdOutlineDashboard />,
      },
      {
        name: "Analytics",
        icon: <MdOutlineAnalytics />,
      },
    ],
  },
  {
    title: "Content",
    links: [
      {
        name: "Inbox",
        icon: <FiInbox />,
      },
      {
        name: "Recent",
        icon: <IoTimeOutline />,
      },
      {
        name: "Compose",
        icon: <TfiWrite />,
      },
      {
        name: "Schedule",
        icon: <GrFormSchedule />,
      },
    ],
  },
  {
    title: "Configurations",
    links: [
      {
        name: "Settings",
        icon: <IoSettingsOutline />,
      },
      {
        name: "Sign out",
        icon: <PiSignOut />,
      },
    ],
  },
];

// framer motion

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
