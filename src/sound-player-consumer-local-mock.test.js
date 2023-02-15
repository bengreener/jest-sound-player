// version 2.0 Uses local mock configuration
import SoundPlayerConsumer from './sound-player-consumer';

const mockPlaySoundFile = jest.fn().mockImplementation(() => true);
jest.mock('./sound-player', () => {
  return jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
  });
});

it('We can check if the consumer called a method on the class instance', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});