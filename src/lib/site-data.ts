export const OCCASIONS = [
  {
    title: "Weddings",
    description: "Romantic, modern wedding cakes designed for your day.",
    label: "Wedding cake photo",
  },
  {
    title: "Birthdays",
    description: "Playful or elegant birthday cakes built around you.",
    label: "Birthday cake photo",
  },
  {
    title: "Engagements",
    description: "Soft, romantic cakes for engagement parties and proposals.",
    label: "Engagement cake photo",
  },
  {
    title: "Bridal Showers",
    description: "Pretty, refined cakes for celebrating the bride-to-be.",
    label: "Bridal shower cake photo",
  },
  {
    title: "Baby Showers",
    description: "Gentle, modern designs for welcoming little ones.",
    label: "Baby shower cake photo",
  },
  {
    title: "Custom Celebrations",
    description: "Anniversaries, dinner parties, intimate gatherings.",
    label: "Custom cake photo",
  },
] as const;

export const GALLERY_CATEGORIES = [
  "Wedding Cakes",
  "Birthday Cakes",
  "Engagement Cakes",
  "Custom Celebration Cakes",
  "Dessert Tables & Treats",
] as const;

export const GALLERY_CATEGORY_DESCRIPTIONS: Record<
  (typeof GALLERY_CATEGORIES)[number],
  string
> = {
  "Wedding Cakes":
    "Modern, romantic wedding cakes designed around your venue, palette, and the feeling of the day.",
  "Birthday Cakes":
    "From quietly elegant to softly playful — birthday cakes built around the person being celebrated.",
  "Engagement Cakes":
    "Soft, romantic cakes for engagement parties, proposals, and intimate gatherings.",
  "Custom Celebration Cakes":
    "Anniversaries, showers, dinner parties, and one-of-a-kind moments worth a custom design.",
  "Dessert Tables & Treats":
    "Curated dessert tables, mini cakes, and treats that complement the main cake beautifully.",
};

export const GALLERY = [
  { category: "Wedding Cakes", caption: "Three-tier ivory with fresh florals", aspect: "portrait" },
  { category: "Wedding Cakes", caption: "Soft buttercream with greenery accents", aspect: "tall" },
  { category: "Wedding Cakes", caption: "Sculpted petal finish, two tiers", aspect: "landscape" },
  { category: "Birthday Cakes", caption: "Modern minimalist 8-inch", aspect: "square" },
  { category: "Birthday Cakes", caption: "Confetti interior, soft pink shell", aspect: "portrait" },
  { category: "Birthday Cakes", caption: "Sculpted bow detail", aspect: "tall" },
  { category: "Engagement Cakes", caption: "Blush ombré with gold leaf", aspect: "portrait" },
  { category: "Engagement Cakes", caption: "Hand-piped lettering", aspect: "square" },
  { category: "Custom Celebration Cakes", caption: "Two-tier seasonal florals", aspect: "tall" },
  { category: "Custom Celebration Cakes", caption: "Garden-inspired detailing", aspect: "landscape" },
  { category: "Dessert Tables & Treats", caption: "Curated dessert table styling", aspect: "wide" },
  { category: "Dessert Tables & Treats", caption: "Mini cakes and macarons", aspect: "square" },
] as const;

export const FLAVORS = [
  "Vanilla Bean",
  "Chocolate",
  "Lemon",
  "Almond",
  "Red Velvet",
  "Confetti",
  "Seasonal Flavor",
  "Custom Flavor Request",
];

export const FILLINGS = [
  "Vanilla Buttercream",
  "Chocolate Buttercream",
  "Cream Cheese Filling",
  "Lemon Curd",
  "Raspberry",
  "Strawberry",
  "Salted Caramel",
  "Seasonal Filling",
];

export const FROSTINGS = [
  "Swiss Meringue Buttercream",
  "American Buttercream",
  "Cream Cheese Frosting",
  "Ganache Finish",
];

export const POPULAR_PAIRINGS = [
  "Vanilla Bean Cake + Raspberry Filling",
  "Chocolate Cake + Salted Caramel",
  "Lemon Cake + Vanilla Buttercream",
  "Almond Cake + Cream Cheese Filling",
  "Confetti Cake + Vanilla Buttercream",
];

export const ADD_ONS = [
  "Fresh florals",
  "Custom piping",
  "Pearl details",
  "Hand-lettered details",
  "Dessert table styling",
  "Delivery & setup",
  "Rush order (if available)",
];

export const FAQS = [
  {
    q: "How far in advance should I order?",
    a: "Please submit your inquiry as early as possible, especially for weddings and larger events. Lead time and availability will be confirmed in Alexandra's follow-up.",
  },
  {
    q: "Do you make wedding cakes?",
    a: "Yes. Wedding cakes are custom planned around servings, design, flavor, setup needs, and event details.",
  },
  {
    q: "Do you offer delivery?",
    a: "Delivery may be available depending on the date, location, and order size. Delivery details are confirmed during the inquiry process.",
  },
  {
    q: "Can I send inspiration photos?",
    a: "Yes. Inspiration photos are welcome and help guide direction. Final designs are created in the Knead To Know style.",
  },
  {
    q: "Do you offer tastings?",
    a: "Tasting availability is confirmed during the inquiry process and may be reserved for weddings or larger events.",
  },
  {
    q: "How does the inquiry process work?",
    a: "Submit the inquiry form with your event details, guest count, design inspiration, and flavor preferences. Alexandra will review and follow up with availability, design guidance, and next steps.",
  },
  {
    q: "Can you recreate a cake from Pinterest?",
    a: "Inspiration photos are welcome, but exact copies aren't guaranteed. Every cake is custom designed for your event.",
  },
  {
    q: "Where are you located?",
    a: "Knead To Know serves Charleston, SC and the surrounding Lowcountry.",
  },
  {
    q: "What flavors do you offer?",
    a: "Current flavors, fillings, and frostings are on the Flavors page. Seasonal and custom flavors may be available by request.",
  },
  {
    q: "How is my order confirmed?",
    a: "Once your details are finalized, Alexandra will share next steps to confirm your date and reserve your cake.",
  },
];

export const EVENT_TYPES = [
  "Wedding",
  "Birthday",
  "Engagement",
  "Bridal shower",
  "Baby shower",
  "Corporate event",
  "Other celebration",
];
