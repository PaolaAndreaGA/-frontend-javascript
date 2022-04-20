export default function createInt8TypedArray(length, position, value) {
  if (position > length -1) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const viewer = new DataView(buffer, 0, length);
  viewer.setInt8(position, value);
  return viewer;
}

