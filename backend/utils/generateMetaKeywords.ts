/* eslint-disable prettier/prettier */

export const generateMetaKeywords = (title: string) => {
  const prepositions: string[] = [
    'a',
    'acerca de',
    'alrededor de',
    'ante',
    'antes de',
    'aparte de',
    'bajo',
    'cabe',
    'cerca de',
    'con',
    'contra',
    'de',
    'delante de',
    'desde',
    'detrás de',
    'durante',
    'en',
    'encima de',
    'entre',
    'hacia',
    'hasta',
    'mediante',
    'menos',
    'para',
    'por',
    'según',
    'sin',
    'so',
    'sobre',
    'tras',
  ];

  prepositions.forEach((preposition) => {
    const regex = new RegExp(`\\b${preposition}\\b`, 'gi');
    title = title.replace(regex, '');
  });

  return title
    .split(' ')
    .join(',')
    .replaceAll('!', '')
    .replaceAll('!', '')
    .replaceAll('?', '');
};
