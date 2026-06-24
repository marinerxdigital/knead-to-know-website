const DESIGN_BASE = "/assets/knead-to-know/design";
const ICON_BASE = `${DESIGN_BASE}/05_icons/individual`;

export const LOGO_SRC = "/assets/knead-to-know/logo/Knead_To_Know_Official_Logo.jpg";
export const LOGO_ALT = "Knead To Know Bakery, Daniel Island, South Carolina";

export const KTK_ICONS = {
  wheat: `${ICON_BASE}/ktk_icon_01_wheat_stalk_1200x1200.png`,
  bread: `${ICON_BASE}/ktk_icon_02_sourdough_loaf_1200x1200.png`,
  cookie: `${ICON_BASE}/ktk_icon_03_cookie_1200x1200.png`,
  dough: `${ICON_BASE}/ktk_icon_04_swirled_dough_1200x1200.png`,
  calendar: `${ICON_BASE}/ktk_icon_05_calendar_check_1200x1200.png`,
  envelope: `${ICON_BASE}/ktk_icon_06_envelope_1200x1200.png`,
  contact: `${ICON_BASE}/ktk_icon_06_envelope_1200x1200.png`,
  location: `${ICON_BASE}/ktk_icon_07_location_pin_1200x1200.png`,
  pickup: `${ICON_BASE}/ktk_icon_08_pickup_bag_1200x1200.png`,
  heart: `${ICON_BASE}/ktk_icon_09_heart_1200x1200.png`,
  gift: `${ICON_BASE}/ktk_icon_10_gift_box_1200x1200.png`,
  clock: `${ICON_BASE}/ktk_icon_11_wall_clock_1200x1200.png`,
  whisk: `${ICON_BASE}/ktk_icon_12_chefs_whisk_1200x1200.png`,
} as const;

export const KTK_CATEGORY_ICONS = {
  bread: KTK_ICONS.bread,
  cookies: KTK_ICONS.cookie,
  bagels: KTK_ICONS.dough,
  pastries: KTK_ICONS.dough,
  "bakery-boxes": KTK_ICONS.gift,
  custom: KTK_ICONS.calendar,
} as const;

export const KTK_DECOR = {
  sectionDivider: `${DESIGN_BASE}/01_section_dividers/ktk_section_divider_waves_blue_gold_1920x200.png`,
  cornerFlourish: `${DESIGN_BASE}/02_corner_flourishes/ktk_corner_wheat_flourish_bottom_left_800x800.png`,
  flourWash: `${DESIGN_BASE}/03_background_accents/ktk_soft_watercolor_flour_wash_1400x900.png`,
  productPlaceholderPrimary: `${DESIGN_BASE}/06_product_placeholders/ktk_product_placeholder_sourdough_primary_1200x1200.png`,
  productPlaceholderAlternate: `${DESIGN_BASE}/06_product_placeholders/ktk_product_placeholder_sourdough_alternate_blue_accent_1200x1200.png`,
} as const;
