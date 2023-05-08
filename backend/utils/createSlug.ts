/* eslint-disable prettier/prettier */

export const createSlug = (title: string) => {
  const slug = title
    .trim()
    .replaceAll(' ', '-')
    .replaceAll("'", '-')
    .replaceAll(',', '-')
    .replaceAll('.', '-')
    .replaceAll('!', '')
    .replaceAll('?', '')
    .toLowerCase();

  return slug;
};
