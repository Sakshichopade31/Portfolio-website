import { ReelProject } from '../types';

export const PERSONAL_INFO = {
  name: 'Sakshi Chopade',
  headline: 'Short-Form Video Editor & Reel Creator',
  location: 'Nagpur, Maharashtra, India',
  education: 'B.Tech Student (3rd Year)',
  experienceYears: '4–5 Years',
  roleStatus: 'Ready to work remotely',
  clubRole: 'Video Editor in College Technical Club',
  software: ['CapCut'],
  aboutSummary:
    'I am a 3rd-year B.Tech student from Nagpur with 4–5 years of dedicated video editing experience. I serve as a video editor for my college technical club, creating fast-paced event promos, speaker teasers, and high-energy social media reels. I specialize in mobile and desktop editing using CapCut to craft engaging hooks, punchy sound design, and clean kinetic typography. Available and ready to work remotely on freelance projects or creative contracts.',
  experienceHighlights: [
    {
      role: 'Video Editor',
      organization: 'College Technical Club',
      period: 'Active Member',
      description:
        'Lead video editor responsible for technical symposium promos, speaker launch reels, club event teasers, and recap reels. Boosted engagement and event registrations across college social channels.',
    },
    {
      role: 'Freelance Short-Form Reel Editor',
      organization: 'Self-Employed / Remote Clients',
      period: '4–5 Years Experience',
      description:
        'Crafted commercial promotional reels, hospitality showcases, product explainers, and street vox pop challenges. Specialized in fast turnarounds, hook-first storytelling, and CapCut workflow optimization.',
    },
  ],
  capcutSkills: [
    {
      title: 'Kinetic Typography & Auto-Captions',
      desc: 'High-contrast word-by-word highlighted subtitles, customized fonts, and dynamic pop animations for maximum retention.',
    },
    {
      title: 'Dynamic Cutouts & Motion Graphics',
      desc: 'Smart auto-masking, green screen / chroma cutouts, and floating graphic overlays (timers, badges, game boards, 3D icons).',
    },
    {
      title: 'Sound Design & Beat Matching',
      desc: 'Precise cuts locked to musical beats, swooshes, pop sound effects, risers, and vocal clarity tuning.',
    },
    {
      title: 'Speed Ramping & Curve Velocity',
      desc: 'Smooth speed-curve transitions that energize b-roll sequences and food/hospitality showcases.',
    },
    {
      title: 'Color Grading & Atmosphere',
      desc: 'Custom LUT adjustments, warm ambiance balancing, and crisp 1080p/4K 60fps vertical exports optimized for Instagram Reels & Shorts.',
    },
    {
      title: 'Retention-Driven Pacing',
      desc: 'Strategic 3-second hook placement, pattern interrupts, and visual zooms that minimize drop-off.',
    },
  ],
};

// Protected redirect endpoints (no raw strings shown in UI)
export const CONTACT_REDIRECTS = {
  email: () => {
    const subject = encodeURIComponent('Video Editing Inquiry — Project Discussion');
    const body = encodeURIComponent(
      'Hi Sakshi,\n\nI reviewed your video editing portfolio and would love to discuss a project with you.\n\nProject details:\n- Type of work (Reels / Promo / Long-form to Short-form):\n- Estimated timeline:\n- Scope:\n\nLooking forward to hearing from you!'
    );
    window.location.href = `mailto:chopade.sakshi31@gmail.com?subject=${subject}&body=${body}`;
  },
  phoneCall: () => {
    window.location.href = 'tel:+918208852409';
  },
  whatsapp: () => {
    const text = encodeURIComponent(
      'Hi Sakshi! I saw your video editing portfolio and would like to connect regarding a project.'
    );
    window.open(`https://wa.me/918208852409?text=${text}`, '_blank', 'noopener,noreferrer');
  },
  linkedin: () => {
    window.open(
      'https://www.linkedin.com/in/sakshi-chopade-b8a0a436b/',
      '_blank',
      'noopener,noreferrer'
    );
  },
};

export const REELS_DATA: ReelProject[] = [
  {
    id: 'firangish-cafe',
    title: 'Firangish Caff & Courtyard',
    category: 'commercial',
    categoryLabel: 'Hospitality · Brand Reel',
    clientOrTheme: 'Firangish Caff & Courtyard',
    duration: '0:16',
    aspectRatio: '9:16 Vertical Reel',
    tagline: 'Aesthetic Culinary & Ambiance Showcase',
    hookText: '“Eat better, Not less”',
    credits: 'Sakshi Chopade | Laxmi Donode',
    description:
      'A cinematic lifestyle and hospitality reel capturing the lush courtyard ambiance, illuminated bamboo architecture, dual-angle espresso barista action, and delicious food styling (kiwi mocktail in mason jar, oven-fresh veggie pizza, and grilled club sandwiches).',
    techniques: [
      'Split-screen dual angle barista cuts',
      'Warm ambient color grading',
      'Beat-synced food reveal transitions',
      'Smooth camera motion stabilization',
      'Sound design with ambient café foley',
    ],
    keyScene: {
      bgGradient: 'from-amber-950 via-zinc-900 to-emerald-950',
      subtitles: ['FIRANGISH CAFF & COURTYARD', 'Eat better · Not less', 'Crafted drinks & artisan pizza'],
      badgeText: 'Aesthetic Hospitality',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      illustrationType: 'cafe',
      highlightStat: 'Beat-Matched B-Roll',
    },
    metrics: {
      pacing: 'Dynamic & Smooth',
      cutCount: '12 Cuts in 16s',
      software: 'CapCut',
    },
  },
  {
    id: 'vedwell-jaggery',
    title: 'Vedwell: Pure Jaggery vs Sugar',
    category: 'commercial',
    categoryLabel: 'Health & Brand Explainer',
    clientOrTheme: 'Vedwell Health & Wellness',
    duration: '1:06',
    aspectRatio: '9:16 Vertical Reel',
    tagline: 'High-Retention Nutrition Explainer',
    hookText: '“Sugar vs Jaggery: The Milk Purity Test”',
    description:
      'An educational brand reel for Vedwell exploring the health consequences of refined sugar versus pure desi jaggery. Features fast-paced talking head delivery, 3D digestive system overlays, animated sugar vs jaggery comparisons, and an engaging visual milk test demonstration.',
    techniques: [
      '3D digestive organ graphic cutouts',
      'Pop-up product comparisons (sugar vs jaggery)',
      'Grid animation & milk test B-roll integration',
      'Kinetic keyword emphasis captions',
      'Subtle zoom-ins on key arguments',
    ],
    keyScene: {
      bgGradient: 'from-emerald-950 via-zinc-900 to-amber-950',
      subtitles: ['KIDNEY DAMAGE & DIGESTION', 'Desi Jaggery vs Refined Sugar', 'Hot milk test: Pure vs adulterated'],
      badgeText: 'Brand Explainer',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      illustrationType: 'wellness',
      highlightStat: 'Dynamic Graphic Cutouts',
    },
    metrics: {
      pacing: 'Educational & Rapid',
      cutCount: '24 Visual Overlays',
      software: 'CapCut',
    },
  },
  {
    id: 'board-games-voxpop',
    title: '5 Board Games in 5 Seconds Challenge',
    category: 'voxpop',
    categoryLabel: 'Viral Street Quiz · Vox Pop',
    clientOrTheme: 'Exhibition & Street Trivia',
    duration: '0:50',
    aspectRatio: '9:16 Vertical Reel',
    tagline: 'Rapid-Fire Street Interview Series',
    hookText: '“Name 5 board games in 5 seconds!”',
    description:
      'High-energy interactive vox pop interviewing event attendees with a rapid-fire 5-second timer. Captures funny reactions, clutch moments, and winning responses with lively visual stickers and sound cues.',
    techniques: [
      'Live 5-second countdown timer animation',
      'Animated 1/5 to 5/5 score trackers',
      'Cutout illustrations (Monopoly, Chess, Ludo, Snakes & Ladders)',
      'Buzzer sound effects & fail sound cues',
      'High-energy jump cuts to maintain engagement',
    ],
    keyScene: {
      bgGradient: 'from-rose-950 via-zinc-900 to-blue-950',
      subtitles: ['Tell me 5 board games in 5 seconds!', '1/5 Chess · 2/5 Ludo · 3/5 Snakes & Ladders', '5/5 Perfect Score! 🏆'],
      badgeText: 'Event Vox Pop',
      badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      illustrationType: 'voxpop_timer',
      highlightStat: 'On-Screen Counter 5/5',
    },
    metrics: {
      pacing: 'High-Tempo Quiz',
      cutCount: '18 Reaction Cuts',
      software: 'CapCut',
    },
  },
  {
    id: 'uno-monopoly-trivia',
    title: 'Uno Skip Card & Monopoly Quiz',
    category: 'voxpop',
    categoryLabel: 'Booth Trivia · Brand Activation',
    clientOrTheme: 'Jewelry & Event Exhibition',
    duration: '0:27',
    aspectRatio: '9:16 Vertical Reel',
    tagline: 'Interactive 3-Second Challenge',
    hookText: '“Uno me skip card konse color ka hota hai?”',
    description:
      'Engaging booth activation challenge with an interactive host asking two quick questions under a strict 3-second limit to win a gift hamper. Features animated gifts, Uno card overlays, and quick-witted pacing.',
    techniques: [
      '3-Second tension countdown timer',
      'Animated gift hamper reward sticker',
      'Visual Uno cards hand popup overlay',
      'Conversational multi-speaker subtitles',
      'Sound effect risers and success bells',
    ],
    keyScene: {
      bgGradient: 'from-sky-950 via-zinc-900 to-indigo-950',
      subtitles: ['3 SECONDS TIMER!', 'Uno me skip card konse color ka hota hai?', 'Correct answer: Win a hamper! 🎁'],
      badgeText: 'Interactive Challenge',
      badgeColor: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
      illustrationType: 'trivia_cards',
      highlightStat: '3-Sec Countdown',
    },
    metrics: {
      pacing: 'Tension & Reveal',
      cutCount: '10 Keyframe Hooks',
      software: 'CapCut',
    },
  },
  {
    id: 'fermi-paradox-podcast',
    title: 'The Fermi Paradox: Where Are The Aliens?',
    category: 'podcast',
    categoryLabel: 'Podcast Edit · Science Explainer',
    clientOrTheme: 'Abhijit Chavda Science Talk',
    duration: '0:46',
    aspectRatio: '9:16 Vertical Reel',
    tagline: 'Cinematic Talking-Head & B-Roll Edit',
    hookText: '“Billions of galaxies, yet not one signal received.”',
    description:
      'A deep space science podcast reel explaining the Fermi Paradox. Edited with punchy Alex Hormozi style kinetic typography, cosmic galaxy b-roll, 3D orbiting planets, and futuristic space visuals that keep viewers mesmerized.',
    techniques: [
      'Hormozi-style bold kinetic text highlighting',
      'Cinematic cosmic starfield & galaxy B-roll inserts',
      'Astronaut walking on alien terrain footage',
      'Subtle camera push-ins and punch-cuts on key syllables',
      'Deep atmospheric space drone sound design',
    ],
    keyScene: {
      bgGradient: 'from-indigo-950 via-zinc-900 to-violet-950',
      subtitles: ['SO THAT IS THE PARADOX', 'SO MANY GALAXIES · SO MANY STARS', 'WE DONT FIND ANY EVIDENCE OF INTELLIGENT LIFE'],
      badgeText: 'Podcast Kinetic Edit',
      badgeColor: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
      illustrationType: 'space',
      highlightStat: 'Hormozi Kinetic Captions',
    },
    metrics: {
      pacing: 'Cinematic Storytelling',
      cutCount: '14 B-Roll Transitions',
      software: 'CapCut',
    },
  },
];
