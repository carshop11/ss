import {Composition} from 'remotion';
import {HelloKorean} from './HelloKorean';

export const Root: React.FC = () => (
  <Composition
    id="HelloKorean"
    component={HelloKorean}
    durationInFrames={150}
    fps={30}
    width={1280}
    height={720}
  />
);
