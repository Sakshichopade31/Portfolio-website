export type Category = 'all' | 'commercial' | 'voxpop' | 'podcast';

export interface ReelProject {
  id: string;
  title: string;
  category: 'commercial' | 'voxpop' | 'podcast';
  categoryLabel: string;
  clientOrTheme: string;
  duration: string;
  aspectRatio: string;
  tagline: string;
  hookText: string;
  description: string;
  credits?: string;
  techniques: string[];
  keyScene: {
    bgGradient: string;
    subtitles: string[];
    badgeText: string;
    badgeColor: string;
    illustrationType: 'cafe' | 'wellness' | 'voxpop_timer' | 'trivia_cards' | 'space';
    highlightStat: string;
  };
  metrics?: {
    pacing: string;
    cutCount: string;
    software: string;
  };
}

export interface ContactChannel {
  name: string;
  label: string;
  subtext: string;
  actionType: 'email' | 'phone' | 'linkedin' | 'whatsapp';
  icon: string;
}
