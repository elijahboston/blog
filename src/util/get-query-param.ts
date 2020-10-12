export const getQueryParam = (qs: string | string[]) =>
  qs && qs.length && Array.isArray(qs) ? qs[0] : (qs as string)
