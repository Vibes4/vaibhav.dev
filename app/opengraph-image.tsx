import { ImageResponse } from 'next/og';
import { site } from '@/lib/data';

export const dynamic = 'force-static';
export const alt = `${site.name} — Full-Stack Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0b0c',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#a8324f', fontSize: 26, letterSpacing: 2 }}>
          <div style={{ width: 12, height: 12, borderRadius: 99, background: '#a8324f' }} />
          FULL-STACK · BACKEND · PLATFORM ENGINEERING
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, color: '#fbfaf8', letterSpacing: -3, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 36, color: 'rgba(251,250,248,0.6)', marginTop: 24, maxWidth: 900 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(251,250,248,0.45)', fontSize: 24 }}>
          <span>github.com/{site.githubUser}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
