export const SANITY_API_URL = [
  `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql`,
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  process.env.NEXT_PUBLIC_SANITY_TAG || "default",
].join("/")

export const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET
