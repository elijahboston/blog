// Adapted from:
// https://css-tricks.com/how-to-convert-a-date-string-into-a-human-readable-format/
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
