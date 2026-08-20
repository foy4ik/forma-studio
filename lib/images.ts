/**
 * Every photo lives in `public/images/<id>.jpg`, downloaded once from Unsplash
 * (see README) and served locally — no external requests at runtime. Mock
 * data files reference a photo by its original Unsplash id so the same file
 * can be reused across multiple entries without duplicating bytes.
 */
export function localImage(id: string): string {
  return `/images/${id}.jpg`;
}
