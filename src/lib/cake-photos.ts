import heartPinkVintage from "@/assets/cake-heart-pink-vintage.png.asset.json";
import heartEngagedIvory from "@/assets/cake-heart-engaged-ivory.png.asset.json";
import rainbowBirthday from "@/assets/cake-rainbow-birthday.png.asset.json";
import holidayMini from "@/assets/cake-holiday-mini.png.asset.json";
import cherryMiniBrick from "@/assets/cake-cherry-mini-brick.png.asset.json";
import blueButterfly from "@/assets/cake-blue-butterfly.png.asset.json";
import mermaidPink from "@/assets/cake-mermaid-pink.png.asset.json";
import cake360_1 from "@/assets/cake-360-1.mp4.asset.json";
import cake360_2 from "@/assets/cake-360-2.mp4.asset.json";
import cake360_3 from "@/assets/cake-360-3.mp4.asset.json";
import cake360_1_poster from "@/assets/cake-360-1-poster.jpg.asset.json";
import cake360_2_poster from "@/assets/cake-360-2-poster.jpg.asset.json";
import cake360_3_poster from "@/assets/cake-360-3-poster.jpg.asset.json";


export interface PortfolioVideo {
  id: string;
  kind: "video";
  url: string;
  poster?: string;
  alt: string;
  caption: string;
}

export const GALLERY_VIDEOS: PortfolioVideo[] = [
  {
    id: "cake-360-1",
    kind: "video",
    url: cake360_1.url,
    poster: cake360_1_poster.url,
    alt: "360-degree rotating view of a custom cake",
    caption: "360° view",
  },
  {
    id: "cake-360-2",
    kind: "video",
    url: cake360_2.url,
    poster: cake360_2_poster.url,
    alt: "360-degree rotating view of a custom cake",
    caption: "360° view",
  },
  {
    id: "cake-360-3",
    kind: "video",
    url: cake360_3.url,
    poster: cake360_3_poster.url,
    alt: "360-degree rotating view of a custom cake",
    caption: "360° view",
  },
];




export type PortfolioAspect = "square" | "portrait" | "landscape" | "wide" | "tall";

export interface PortfolioImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  tags: string[];
  aspect: PortfolioAspect;
}

export const PORTFOLIO_IMAGES = {
  blueButterfly: {
    id: "blue-butterfly",
    url: blueButterfly.url,
    alt: "White buttercream cake with soft blue butterfly details on a marble stand",
    caption: "Refined white buttercream cake with blue butterfly details",
    tags: ["Wedding", "Buttercream", "Butterfly"],
    aspect: "portrait",
  },
  engagedHeart: {
    id: "engaged-heart",
    url: heartEngagedIvory.url,
    alt: "Ivory heart-shaped engagement cake with piped florals, pearl details, and hand-lettered engaged text",
    caption: "Vintage heart engagement cake with piped florals",
    tags: ["Engagement", "Heart Cake", "Pearls"],
    aspect: "portrait",
  },
  vintagePinkHeart: {
    id: "vintage-pink-heart",
    url: heartPinkVintage.url,
    alt: "Pink heart-shaped cake with vintage shell piping on a silver cake stand",
    caption: "Pink heart cake with vintage shell piping",
    tags: ["Birthday", "Vintage", "Piping"],
    aspect: "portrait",
  },
  rainbowBirthday: {
    id: "rainbow-birthday",
    url: rainbowBirthday.url,
    alt: "Rainbow birthday cake with retro piped borders and bright buttercream stripes",
    caption: "Custom rainbow birthday cake",
    tags: ["Birthday", "Rainbow", "Celebration"],
    aspect: "portrait",
  },
  cherryMini: {
    id: "cherry-mini",
    url: cherryMiniBrick.url,
    alt: "White buttercream mini cake topped with cherries against a Charleston brick backdrop",
    caption: "White buttercream cake with cherry details",
    tags: ["Cherries", "Mini Cake", "Buttercream"],
    aspect: "portrait",
  },
  holidayMini: {
    id: "holiday-mini",
    url: holidayMini.url,
    alt: "Mini white buttercream cake with piped holiday details displayed on a gold pedestal stand",
    caption: "Mini celebration cake styled on a gold pedestal",
    tags: ["Display", "Mini Cake", "Details"],
    aspect: "portrait",
  },
  mermaidPink: {
    id: "mermaid-pink",
    url: mermaidPink.url,
    alt: "Blush buttercream celebration cake with seashell-inspired piping and sculpted mermaid tail details",
    caption: "Blush celebration cake with piped details",
    tags: ["Celebration", "Blush", "Piping"],
    aspect: "portrait",
  },
} as const satisfies Record<string, PortfolioImage>;

export const HOME_HERO_IMAGE = PORTFOLIO_IMAGES.blueButterfly;

// One curated, deduplicated portfolio. Each image appears exactly once.
export const GALLERY_IMAGES: PortfolioImage[] = [
  PORTFOLIO_IMAGES.blueButterfly,
  PORTFOLIO_IMAGES.engagedHeart,
  PORTFOLIO_IMAGES.vintagePinkHeart,
  PORTFOLIO_IMAGES.rainbowBirthday,
  PORTFOLIO_IMAGES.cherryMini,
  PORTFOLIO_IMAGES.mermaidPink,
  PORTFOLIO_IMAGES.holidayMini,
];

// Short, neutral captions (no fake event names).
export const GALLERY_CAPTIONS: Record<string, string> = {
  "blue-butterfly": "Wedding cake with butterfly details",
  "engaged-heart": "Vintage heart engagement cake",
  "vintage-pink-heart": "Pink heart cake with piping",
  "rainbow-birthday": "Custom rainbow birthday cake",
  "cherry-mini": "Buttercream cake with cherries",
  "mermaid-pink": "Blush celebration cake",
  "holiday-mini": "Mini cake on a gold pedestal",
};

// Homepage preview: 5 strongest unique images, teaser only.
export const HOME_GALLERY_PREVIEW: PortfolioImage[] = [
  PORTFOLIO_IMAGES.engagedHeart,
  PORTFOLIO_IMAGES.vintagePinkHeart,
  PORTFOLIO_IMAGES.rainbowBirthday,
  PORTFOLIO_IMAGES.cherryMini,
  PORTFOLIO_IMAGES.mermaidPink,
];

// Photos used by the homepage "What we make" cards. Unique per slot.
export const OCCASION_PORTFOLIO_PHOTOS: PortfolioImage[] = [
  PORTFOLIO_IMAGES.blueButterfly,
  PORTFOLIO_IMAGES.rainbowBirthday,
  PORTFOLIO_IMAGES.engagedHeart,
  PORTFOLIO_IMAGES.vintagePinkHeart,
  PORTFOLIO_IMAGES.holidayMini,
  PORTFOLIO_IMAGES.mermaidPink,
];

export type GalleryMediaItem =
  | ({ kind: "image" } & PortfolioImage)
  | PortfolioVideo;

// Mixed gallery feed: images interspersed with 360° rotating videos.
export const GALLERY_MEDIA: GalleryMediaItem[] = [
  { kind: "image", ...PORTFOLIO_IMAGES.blueButterfly },
  { kind: "image", ...PORTFOLIO_IMAGES.engagedHeart },
  GALLERY_VIDEOS[0],
  { kind: "image", ...PORTFOLIO_IMAGES.vintagePinkHeart },
  { kind: "image", ...PORTFOLIO_IMAGES.rainbowBirthday },
  GALLERY_VIDEOS[1],
  { kind: "image", ...PORTFOLIO_IMAGES.cherryMini },
  { kind: "image", ...PORTFOLIO_IMAGES.mermaidPink },
  GALLERY_VIDEOS[2],
  { kind: "image", ...PORTFOLIO_IMAGES.holidayMini },
];

