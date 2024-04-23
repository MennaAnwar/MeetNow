export const sidebarLinks = [
  { icon: "/icons/Home.svg", label: "Home", route: "/" },
  { icon: "/icons/upcoming.svg", label: "Upcoming", route: "/upcoming" },
  { icon: "/icons/previous.svg", label: "Previous", route: "/previous" },
  { icon: "/icons/Video.svg", label: "Recordings", route: "/recordings" },
  {
    icon: "/icons/add-personal.svg",
    label: "Personal Room",
    route: "/personal-room",
  },
];

export const homeLinks = [
  {
    img: "/icons/add-meeting.svg",
    title: "New Meeting",
    description: "Start an instant meeting",
    className: "bg-pink-1",
    handleClick: "isInstantMeeting",
  },
  {
    img: "/icons/join-meeting.svg",
    title: "Join Meeting",
    description: "via invitation link",
    className: "bg-blue-1",
    handleClick: "isJoiningMeeting",
  },
  {
    img: "/icons/schedule.svg",
    title: "Schedule Meeting",
    description: "Plan your meeting",
    className: "bg-cyan-1",
    handleClick: "isScheduleMeeting",
  },
  {
    img: "/icons/recordings.svg",
    title: "View Recordings",
    description: "Meeting Recordings",
    className: "bg-grey-1",
    handleClick: "/recordings",
  },
];
