/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_allPost_slug {
  __typename: 'Slug'
  current: string | null
}

export interface GetPosts_allPost_author {
  __typename: 'Author'
  name: string | null
}

export interface GetPosts_allPost {
  __typename: 'Post'
  /**
   * Document ID
   */
  _id: string | null
  title: string | null
  slug: GetPosts_allPost_slug | null
  publishedAt: any | null
  author: GetPosts_allPost_author | null
  summary: string | null
}

export interface GetPosts {
  allPost: GetPosts_allPost[]
}
