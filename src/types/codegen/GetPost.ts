/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPost
// ====================================================

export interface GetPost_allPost_slug {
  __typename: 'Slug'
  current: string | null
}

export interface GetPost_allPost_author {
  __typename: 'Author'
  name: string | null
}

export interface GetPost_allPost_featuredImage_asset {
  __typename: 'SanityImageAsset'
  path: string | null
}

export interface GetPost_allPost_featuredImage {
  __typename: 'Picture'
  asset: GetPost_allPost_featuredImage_asset | null
  attribution: string | null
}

export interface GetPost_allPost {
  __typename: 'Post'
  /**
   * Document ID
   */
  _id: string | null
  title: string | null
  slug: GetPost_allPost_slug | null
  publishedAt: any | null
  author: GetPost_allPost_author | null
  featuredImage: GetPost_allPost_featuredImage | null
  summary: string | null
  bodyRaw: any | null
}

export interface GetPost {
  allPost: GetPost_allPost[]
}

export interface GetPostVariables {
  slug?: string | null
}
