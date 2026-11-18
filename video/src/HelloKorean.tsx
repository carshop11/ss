import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const HelloKorean: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: 'linear-gradient(135deg,#1e3a8a,#0f172a)'}}>
      <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 80}}>
        <div
          style={{
            opacity,
            fontFamily: '"Noto Sans CJK KR", "WenQuanYi Zen Hei", sans-serif',
            fontSize: 72,
            color: 'white',
            background: 'rgba(0,0,0,0.6)',
            padding: '12px 40px',
            borderRadius: 12,
          }}
        >
          안녕하세요
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
