import { track } from "@vercel/analytics";

export const EVENTS = {
  HERO_CTA_CLICK:                   "homepage_hero_cta_click",
  FEATURED_TOOL_CLICK:              "homepage_featured_tool_click",
  POPULAR_TOOL_CLICK:               "homepage_popular_tool_click",
  NEWSLETTER_IMPRESSION:            "newsletter_form_impression",
  NEWSLETTER_INTERACTION:           "newsletter_form_interaction",
  NEWSLETTER_ATTEMPT:               "newsletter_signup_attempt",
  NEWSLETTER_SUCCESS:               "newsletter_signup_success",
  NEWSLETTER_ERROR:                 "newsletter_signup_error",
  NEWSLETTER_CONFIRM_SUCCESS:       "newsletter_confirm_success",
  NEWSLETTER_UNSUBSCRIBE:           "newsletter_unsubscribe",
  NEWSLETTER_RESUBSCRIBE_ATTEMPT:   "newsletter_resubscribe_attempt",
  NEWSLETTER_PREFERENCES_VIEW:      "newsletter_preferences_view",
  NEWSLETTER_PREFERENCES_UPDATE:    "newsletter_preferences_update",
  EDITORIAL_CARD_CLICK:             "homepage_editorial_card_click",
  TOOL_EXPLORER_SEARCH:             "tool_explorer_search",
  BOTTOM_CTA_CLICK:                 "homepage_bottom_cta_click",
};

export { track };
