export function fillImages(images) {
  if (!images || images.length === 0) return [];

  const firstImage = images[0];
  const filledArray = [...images];

  while (filledArray.length < 5) {
    filledArray.push(firstImage);
  }

  return filledArray;
}
