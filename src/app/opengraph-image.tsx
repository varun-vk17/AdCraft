import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AdCraft AI - The AI Ad Engine'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#020202',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '40px',
                    }}
                >
                    {/* Logo Icon */}
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22FF77"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginRight: '20px' }}
                    >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    <div
                        style={{
                            fontSize: '80px',
                            fontWeight: 'bold',
                            color: 'white',
                            letterSpacing: '-0.05em',
                        }}
                    >
                        AdCraft
                    </div>
                </div>
                <div
                    style={{
                        fontSize: '40px',
                        color: '#22FF77',
                        fontWeight: 'bold',
                        letterSpacing: '-0.02em',
                        marginBottom: '20px',
                    }}
                >
                    The AI Ad Engine for 10x Growth
                </div>
                <div
                    style={{
                        fontSize: '24px',
                        color: '#888888',
                        maxWidth: '800px',
                        textAlign: 'center',
                        lineHeight: '1.4',
                    }}
                >
                    Turn a single product URL into hundreds of on-brand ad creatives.
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
