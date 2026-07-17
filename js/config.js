/* ==========================================================================
   SITE CONFIG — the only file you should need to edit day-to-day.
   Change text, links, and image paths here. The layout will never move.
   Save the file and refresh the browser to see your changes.
   ========================================================================== */

window.SITE_CONFIG = {

  // ---------------------------------------------------------------------
  // SITE META (browser tab title + search engine description)
  // ---------------------------------------------------------------------
  meta: {
    title: "Neil — Shorts & Reels Editor",
    description: "I create engaging and affordable YouTube Shorts for the health, entertainment, and gaming trivia niches.",
  },

  // ---------------------------------------------------------------------
  // PROFILE / HERO
  // ---------------------------------------------------------------------
  profile: {
    name: "Neil Alfred",
    title: "Shorts & Reels Editor",
    tagline: "I create engaging and affordable YouTube Shorts for the health, entertainment, and gaming trivia niches.",
    bio: "I edit YouTube Shorts and Instagram/Facebook Reels, specializing in short-form, vertical content. I have experience editing videos in the health, entertainment, and gaming trivia niches, turning raw footage or long-form recordings into fast-paced, hook-first videos optimized for viewer retention. I primarily use CapCut and can also provide Text-to-Speech (TTS) narration when a voice actor isn't available, along with captions, sound effects, transitions, and other enhancements to deliver polished, engaging short-form content.",
    photo: "assets/profile/profile.svg",
    darkPhoto: "assets/profile/profile2.svg", 
    cvFile: "assets/cv/Neil-Alfred-CV.pdf", // put your real CV file at this path
    location: "Philippines",
    availability: "Available now → Ready to start immediately.",
  },

  // ---------------------------------------------------------------------
  // CONTACT — edit these and every button/link/icon on the site updates.
  // Leave a value empty ("") to automatically hide that contact method.
  // ---------------------------------------------------------------------
  contact: {
    email: "hello@alexrivera.com",
    phone: "+63 917 000 0000",           // shown as text and used for tel: links
    // facebook: "https://facebook.com/alexrivera",
    discord: "https://discord.gg/your-discord-invite", // full invite link, not just username
    whatsapp: "https://wa.me/639170000000",       // full wa.me link with country code, no +
    // viber: "viber://chat?number=%2B639170000000", // viber deep link
    // telegram: "https://t.me/alexrivera",
  },

  // ---------------------------------------------------------------------
  // PROMO BANNER — set enabled: false to hide it without deleting content
  // ---------------------------------------------------------------------
  promo: {
    enabled: false,
    title: "Lowball Promo",
    description: "Book any package this month and get a free 30-second highlight reel, cut and delivered within 48 hours.",
    price: "Starting at ₱8,500",
    buttonText: "Claim This Offer",
    buttonLink: "#contact",
    background: {
      type: "image",       // "image" or "color"
      image: "assets/promo/promo-bg.svg",
      color: "#2F5FFF",    // used only when type is "color"
    },
  },

  // ---------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------
services: [
  {
    title: "YouTube Shorts Editing",
    description: "Long-form footage cut down into fast, hook-first Shorts built for retention and the algorithm.",
    icon: "clapperboard",
  },
  {
    title: "Social Media Management",
    description: "Strategic brand management with post scheduling, high-engagement captions, and optimized hashtags.",
    icon: "chart-line", // Better than "music"
  },
  {
    title: "Hook & Caption Writing",
    description: "The first 2 seconds decide the scroll. I write and time hooks, text overlays, and captions to hold viewers.",
    icon: "pen-nib", // Better represents writing
  },
  {
    title: "Text-to-Speech (TTS)",
    description: "Need a voiceover? I can generate natural-sounding AI voices when a voice actor isn't available.",
    icon: "microphone-lines", // More modern than "mic"
  },
],

  // ---------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------
  testimonials: [
    {
      quote: "Alex turned twelve hours of raw wedding footage into something we now watch every year on our anniversary. Every cut felt intentional.",
      name: "Maria & Jonas",
      role: "Wedding Clients",
    },
    {
      quote: "We handed over a folder of unsorted b-roll and got back a launch film that our whole sales team still uses.",
      name: "Dana Cruz",
      role: "Marketing Lead, Northwind Co.",
    },
    {
      quote: "Fast turnaround, clear communication, and the pacing on the final cut was better than what we briefed.",
      name: "Ravi Fernandez",
      role: "Independent Musician",
    },
  ],

  // ---------------------------------------------------------------------
  // PORTFOLIO PROJECTS — add as many as you like, in any order.
  // videoType: "youtube" | "vimeo" | "upload"
  //   - youtube/vimeo: paste the full watch/share URL into videoSrc
  //   - upload: put the .mp4 file path (e.g. "assets/videos/my-clip.mp4")
  // ---------------------------------------------------------------------
projects: [

  {
  id: "prismatic-shard-short",
  title: "Prismatic Shard — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1OMdDBUCDe59lsYCWe1QA0NZ308UDncmE&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1q8RxAsOrssosU17bhbFuQ4eFA5OV3A1I/view?usp=drive_link",
  category: "Gaming",
},

{
  id: "mystery-box-short",
  title: "Mystery Box — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1r7YpGUltECdwOd82Iu3f1k7_eIy3QgFO&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1iAhx-7oBj-y4DfhhqmzrNUhouf5d7XWg/view?usp=drive_link",
  category: "Gaming",
},
{
  id: "spongebob-trivia-short",
  title: "SpongeBob Trivia — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1QtTFhJMFQMKeeGhKbV-M_w39EK7Wx1WA&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/111TddOQMDkUfPG1Z6HYoWICQEJQHo-HS/view?usp=drive_link",
  category: "Entertainment",
},


{
  id: "likeable-short",
  title: "Be Likeable — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1w1JO-1C9cK5mxGo5p4SPi5zopKDJbA5u&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1Gb6vEjAwua5uSCkwSvlXRHlABW7-9qFO/view?usp=drive_link",
  category: "Entertainment",
},



{
  id: "haunted-dev-vlog",
  title: "Haunted Dev Vlog — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1jFOaPCffAdyfQkaLQC_bpXsLnIxKFmJN&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1iCMC1Z7_V9yFmGMYjHDABRgL20f8tAy5/view?usp=drive_link",
  category: "Gaming",
},
{
  id: "superpower-short",
  title: "Superpower — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1s9RbuQiiR3iVCjfvXvaRJy9RFSvY39aG&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/19Ul-S38V6GNJJntJAh1K77YH-tRtbINb/view?usp=drive_link",
  category: "Entertainment",
},


{
  id: "kettle-short",
  title: "Kettle — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1xe_5__tQuQmBZCfZXS-Yg53VfdM3KySd&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1b_WXFLbJb_iprcWfmu_05MJhues9hYJX/view?usp=drive_link",
  category: "Entertainment",
},

{
  id: "trees-hate-you-short",
  title: "Trees Hate You — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1ijTwqNbj1URhIEpVGs5JiLHxGZWdvud9&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1QOD_02X9vYBq1rzLzY5DEQG80YIOrVUR/view?usp=drive_link",
  category: "Gaming",
},


{
  id: "pvz-6-short",
  title: "Sun Bomb — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1lu_GbyEwIGkPiFlNnkUloXNOdT5tIFqk&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1h1zMSDLpIKZsVbNSariW9w3ZE35CnwPt/view?usp=drive_link",
  category: "Gaming",
},

{
  id: "pvz-89-short",
  title: "Sun Nut — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1jQQastcMhxYfIwNQJN6-MOwuKQ_a0wVo&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/14Nqe2EuzmyvqUXS9-6oCxdgl4pWC2-7d/view?usp=drive_link",
  category: "Gaming",
},

{
  id: "pvz-10-short",
  title: "Cherry Nut — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=17CKWoW3PPdW61G36vSZjfWXXDf2vXbai&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1tDGO9v3YIHr12UXMZ4KQCyBOmCApUZym/view?usp=drive_link",
  category: "Gaming",
},

{
  id: "pvz-15-short",
  title: "Chomp Shooter — Short",
  thumbnail: "https://drive.google.com/thumbnail?id=1bSgVLxj4v5nZEfndJVlio2bwBlDxDBdy&sz=w1200",
  videoType: "gdrive",
  videoSrc: "https://drive.google.com/file/d/1XW0Dg9OrTRr7_ozY-51tB4w5KsQOLHQv/view?usp=drive_link",
  category: "Gaming",
},
]
};
