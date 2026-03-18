export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://rutzensurvey.com"

export const SITE_NAME = "Rutzen Survey Services"

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/rutzen-home.jpg`
