// Centralized constants for the app
// This file exports an `events` array that can be directly consumed by the EventCard component.

export type EventItem = {
    title: string;
    image: string; // path from /public, e.g. "/images/event1.png"
    slug: string;
    location: string;
    date: string; // human-readable date
    time: string; // human-readable time (with timezone if relevant)
};

// Note: Image assets referenced here must exist under /public/images
// Available images in this project: event1.png ... event6.png, event-full.png

export const events: EventItem[] = [
    {
        title: "React Summit 2025",
        image: "/images/event1.png",
        slug: "react-summit-2025",
        location: "Amsterdam, NL",
        date: "June 12, 2025",
        time: "9:00 AM – 6:00 PM CEST",
    },
    {
        title: "KubeCon + CloudNativeCon North America 2025",
        image: "/images/event2.png",
        slug: "kubecon-na-2025",
        location: "Austin, TX, USA",
        date: "November 18–21, 2025",
        time: "8:30 AM – 5:30 PM CST",
    },
    {
        title: "Next.js Conf 2025",
        image: "/images/event3.png",
        slug: "nextjs-conf-2025",
        location: "San Francisco, CA, USA + Online",
        date: "October 7, 2025",
        time: "10:00 AM – 5:00 PM PDT",
    },
    {
        title: "HackMIT 2025",
        image: "/images/event4.png",
        slug: "hackmit-2025",
        location: "Cambridge, MA, USA",
        date: "September 20–21, 2025",
        time: "All weekend (in-person)",
    },
    {
        title: "JSNation 2026",
        image: "/images/event5.png",
        slug: "jsnation-2026",
        location: "Amsterdam, NL",
        date: "June 4–5, 2026",
        time: "9:00 AM – 6:00 PM CEST",
    },
    {
        title: "AWS re:Invent 2025",
        image: "/images/event6.png",
        slug: "aws-reinvent-2025",
        location: "Las Vegas, NV, USA",
        date: "December 1–5, 2025",
        time: "8:00 AM – 6:00 PM PST",
    },
    {
        title: "Open Source Summit Europe 2026",
        image: "/images/event-full.png",
        slug: "oss-summit-eu-2026",
        location: "Vienna, Austria",
        date: "September 16–18, 2026",
        time: "9:00 AM – 6:00 PM CEST",
    },
];

export default events;