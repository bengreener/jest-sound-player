// version 1.0
// Import this named export into your test file:
export const mockPlaySoundFile = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {playSoundFile: mockPlaySoundFile};
});

export default mock;

// version 2.0 (This does not work)
// const mockPlaySoundFile = jest.fn();
// const mock = jest.mock('./sound-player', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       playSoundFile: mockPlaySoundFile
//     };
//   });
// });

// export default mock;