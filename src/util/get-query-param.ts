export const getQueryParameter = (qs: string | string[]) =>
  qs && Array.isArray(qs) ? qs[0] : (qs as string)
