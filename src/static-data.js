import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaAngleDown, FaAngleUp, FaPlus } from "react-icons/fa";
import { RiArrowRightUpLine, RiStackshareLine } from "react-icons/ri";

export const staticMessages = [
  {
    chatId: "chat-001",
    name: "John Doe",
    sentVia: "GitHub",
    messages: [
      {
        sender: "John Doe",
        from: "user",
        message: "I’m having trouble connecting my account.",
        timestamp: "2025-05-24T14:30:00Z",
        sentVia: "GitHub",
      },
    ],
    read: false,
  },
  {
    chatId: "chat-002",
    name: "Ivan Rakitic",
    sentVia: "Nike",
    messages: [
      {
        sender: "Ivan Rakitic",
        from: "user",
        message: "Hi there, I have a question regarding the product.",
        timestamp: "2025-05-21T14:20:00Z",
        sentVia: "Nike",
      },
    ],
    read: false,
  },
  {
    chatId: "chat-003",
    name: "Liam",
    sentVia: "New York",
    messages: [
      {
        sender: "Liam",
        from: "user",
        message: "Good morning, I want to issue a refund for my order.",
        timestamp: "2025-05-24T14:30:00Z",
        sentVia: "New York",
      },
    ],
    read: false,
  },
];

const questions = [
  "How do I get a refund?",
  "Can I cancel my order?",
  "How long does a refund take?",
  "What is the average delivery time?",
  "Can we change delivery location after placing order?",
];

export const randomStaticQuestion =
  questions[Math.floor(Math.random() * questions.length)];

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
