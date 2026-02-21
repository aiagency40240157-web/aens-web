import { Wrench, ClipboardCheck, Zap } from 'lucide-react';

const RED = '#CC0000';
const ORANGE = '#E2703A';

const features = [
    {
        icon: Wrench,
        accent: RED,
        title: '$95 OFF',
        subtitle: 'ANY ELECTRICAL SERVICE OVER $500',
        description: 'Mention this site to claim your discount on your first service with us.',
    },
    {
        icon: ClipboardCheck,
        accent: ORANGE,
        title: 'FREE SERVICE CALL',
        subtitle: 'WHEN YOU BOOK THE JOB',
        description: 'Safety inspections, data cabling, repairs, and full diagnostics included.',
    },
    {
        icon: Zap,
        accent: RED,
        title: '60-MINUTE RESPONSE',
        subtitle: 'EMERGENCY ASSISTANCE',
        description: 'Fast response for urgent electrical emergencies in your local area.',
        hasButton: true,
    },
];

export default function FeatureSection() {
    return (
        <section style={{ background: '#f4f4f4', padding: '52px 0' }}>
            <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

                {/* Heading with orange accent underline */}
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                    <h2 style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 900,
                        fontSize: '2.25rem',
                        color: '#1A1A1A',
                        textTransform: 'uppercase',
                        marginBottom: 10,
                        letterSpacing: '0.01em',
                    }}>
                        FEATURES
                    </h2>
                    {/* Orange accent bar */}
                    <div style={{
                        width: 72,
                        height: 4,
                        background: '#E2703A',
                        borderRadius: 2,
                        margin: '0 auto',
                    }} />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 20,
                }}>
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={i}
                                style={{
                                    background: '#fff',
                                    borderRadius: 14,
                                    padding: '24px 20px 22px',
                                    /* Sombra de color sólida desplazada = colored shadow */
                                    boxShadow: `5px 5px 0px 0px ${f.accent}, 0 2px 8px rgba(0,0,0,0.06)`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                }}
                            >
                                {/* Icon row */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                    {/* Circle icon with light tint */}
                                    <div style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: '50%',
                                        background: f.accent + '1A', /* 10% opacity tint */
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <Icon size={24} color={f.accent} strokeWidth={2} />
                                    </div>

                                    {/* Title + subtitle */}
                                    <div>
                                        <div style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 800,
                                            fontSize: '1.05rem',
                                            color: f.accent,
                                            lineHeight: 1.2,
                                        }}>
                                            {f.title}
                                        </div>
                                        <div style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '0.7rem',
                                            color: f.accent,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            marginTop: 3,
                                        }}>
                                            {f.subtitle}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '0.78rem',
                                    color: '#444',
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}>
                                    {f.description}
                                </p>

                                {/* Button — card 3 only */}
                                {f.hasButton && (
                                    <a href="#contact" style={{
                                        marginTop: 4,
                                        background: f.accent,
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 6,
                                        padding: '11px 0',
                                        width: '100%',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        fontSize: '0.72rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        cursor: 'pointer',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        textDecoration: 'none'
                                    }}>
                                        Request Service
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
