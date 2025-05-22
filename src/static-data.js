import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaAngleDown, FaAngleUp, FaPlus } from "react-icons/fa";
import { RiArrowRightUpLine, RiStackshareLine } from "react-icons/ri";

export const messages = [
  {
    name: "Luis Easton",
    sentVia: "Github",
    message: "Hello, how are you?",
    time: "45m",
  },
  {
    name: "Ivan Rakitic",
    sentVia: "Nike",
    message: "Hi there, I have a question.",
    time: "30m",
  },
  {
    name: "Andres Iniesta",
    sentVia: "New York",
    message: "Good morning, let me know when the stock will be available.",
    time: "28m",
  },
];

export const bgColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-orange-500",
];

export const detailsItems = [
  {
    startIcon: null,
    text: "LINKS",
    endIcon: FaAngleDown,
  },
  ///////////////////////
  // Inside Links
  ///////////////////////
  {
    startIcon: RiStackshareLine,
    text: "Tracker ticket",
    endIcon: FaPlus,
  },
  {
    startIcon: BsClipboard2CheckFill,
    text: "Back-office tickets",
    endIcon: FaPlus,
  },
  {
    startIcon: RiArrowRightUpLine,
    text: "Side conversations",
    endIcon: FaPlus,
  },
  ///////////////////////
  // Details
  ///////////////////////
  {
    startIcon: null,
    text: "USER DATA",
    endIcon: FaAngleUp,
  },
  {
    startIcon: null,
    text: "CONVERSATION ATTRIBUTES",
    endIcon: FaAngleUp,
  },
  {
    startIcon: null,
    text: "COMPANY DETAILS",
    endIcon: FaAngleUp,
  },
  {
    startIcon: null,
    text: "SALESFORCE",
    endIcon: FaAngleUp,
  },
  {
    startIcon: null,
    text: "STRIPE",
    endIcon: FaAngleUp,
  },
  {
    startIcon: null,
    text: "JIRA FOR TICKETS",
    endIcon: FaAngleUp,
  },
];
