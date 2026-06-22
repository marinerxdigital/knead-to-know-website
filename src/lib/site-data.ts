export const OCCASIONS = [
  {
    title: "Artisan Breads",
    description: "Daily sourdough loaves and specialty breads.",
    label: "Breads",
  },
  {
    title: "Sourdough Cookies",
    description: "Signature chewy cookies in multiple flavors.",
    label: "Cookies",
  },
  { title: "Fresh Bagels", description: "Boiled and baked sourdough bagels.", label: "Bagels" },
  {
    title: "Pastries & Treats",
    description: "Seasonal pastries and sweet bakes.",
    label: "Pastries",
  },
  { title: "Bakery Boxes", description: "Curated boxes for gifting and sharing.", label: "Boxes" },
  {
    title: "Custom Orders",
    description: "Special requests and larger gatherings.",
    label: "Custom",
  },
] as const;

export const GALLERY_CATEGORIES = [
  "Artisan Breads",
  "Sourdough Cookies",
  "Fresh Bagels",
  "Bakery Boxes",
  "Seasonal & Custom",
] as const;

export const GALLERY_CATEGORY_DESCRIPTIONS: Record<(typeof GALLERY_CATEGORIES)[number], string> = {
  "Artisan Breads": "Daily sourdough loaves and specialty breads.",
  "Sourdough Cookies": "Signature chewy cookies in multiple flavors.",
  "Fresh Bagels": "Boiled and baked sourdough bagels.",
  "Bakery Boxes": "Curated boxes for gifting and sharing.",
  "Seasonal & Custom": "Seasonal pastries and special requests.",
};

export const GALLERY = [
  { category: "Artisan Breads", caption: "Plain Sourdough", aspect: "portrait" },
  { category: "Artisan Breads", caption: "Rosemary Loaf", aspect: "tall" },
  { category: "Sourdough Cookies", caption: "Chocolate Chip Cookies", aspect: "square" },
  { category: "Fresh Bagels", caption: "Everything Bagels", aspect: "landscape" },
] as const;

export const FLAVORS = ["Classic Sourdough", "Rosemary", "Olive", "Cranberry Walnut", "Seasonal"];

export const FILLINGS = ["None", "Butter", "Cream Cheese", "Nutella", "Jam"];

export const FROSTINGS = ["None", "Light Glaze", "Cinnamon Sugar", "Everything Seasoning"];

export const POPULAR_PAIRINGS = [
  "Rosemary Sourdough + Butter",
  "Chocolate Chip Cookies + Milk",
  "Everything Bagel + Cream Cheese",
  "Cranberry Walnut + Coffee",
];

export const ADD_ONS = [
  "Bakery Box (assorted)",
  "Dozen cookies",
  "Half dozen bagels",
  "Custom label",
];

export const FAQS = [
  {
    q: "How far in advance should I order?",
    a: "Please submit your inquiry as early as possible, especially for larger orders. Lead time is confirmed on inquiry.",
  },
  {
    q: "Do you offer delivery?",
    a: "Delivery may be available in the Daniel Island / Charleston area depending on order size.",
  },
  {
    q: "Where are you located?",
    a: "Knead To Know is a home bakery on Daniel Island, South Carolina.",
  },
  {
    q: "What flavors do you offer?",
    a: "See our Menu and Flavors pages. Seasonal items rotate and custom requests are welcome.",
  },
];

export const BREADS = [
  "Plain Sourdough",
  "Rosemary Sourdough",
  "Rosemary Roasted Garlic",
  "Cheese & Jalapeño",
  "Chocolate Chip Nutella",
  "Cranberry Walnut",
  "Olive Sourdough",
];

export const COOKIES = [
  "Chocolate Chip",
  "Cranberry Chocolate Chip",
  "Cranberry Walnut",
  "Mango Macadamia",
  "Apricot Mango",
];

export const BAGELS = ["Plain", "Everything", "Sesame", "Poppy"];

export const PASTRIES = ["Seasonal specials rotate weekly.", "Custom requests welcome."];

export const EVENT_TYPES = [
  "Everyday Treat",
  "Gathering / Party",
  "Gift Box",
  "Custom Order",
  "Other",
];
