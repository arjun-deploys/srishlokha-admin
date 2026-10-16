export const formatStatus = (s: string) => s?.toLowerCase().replaceAll(' ', '-');

export const initialsOf = (name: string) =>
  name
    .split(' ')
    .map((v) => v[0])
    .slice(0, 2)
    .join('');
