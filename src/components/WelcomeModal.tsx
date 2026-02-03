import './WelcomeModal.css'
import { LilyIcon } from './LilyIcon'

interface WelcomeModalProps {
    isVisible: boolean
    onEnter: () => void
}

export function WelcomeModal({ isVisible, onEnter }: WelcomeModalProps) {
    return (
        <div className={`welcome-overlay ${!isVisible ? 'hidden' : ''}`}>
            {/* Floating Lily Petals Background */}
            <div className="welcome-petals">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`welcome-petal wp-${i + 1}`}>
                        <LilyIcon className="w-8 h-10 opacity-10" />
                    </div>
                ))}
            </div>

            {/* Corner Lily Decorations */}
            <div className="corner-lily corner-top-left">
                <LilyIcon className="w-16 h-20 opacity-15" />
            </div>
            <div className="corner-lily corner-top-right">
                <LilyIcon className="w-16 h-20 opacity-15" />
            </div>
            <div className="corner-lily corner-bottom-left">
                <LilyIcon className="w-12 h-16 opacity-10" />
            </div>
            <div className="corner-lily corner-bottom-right">
                <LilyIcon className="w-12 h-16 opacity-10" />
            </div>

            {/* Sparkle Particles */}
            <div className="sparkle-container">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="sparkle" />
                ))}
            </div>

            {/* Main Card */}
            <div className="welcome-card">
                {/* Lily Icon instead of heart */}
                <div className="welcome-lily-icon">
                    <LilyIcon className="w-20 h-24" />
                </div>

                {/* Decorative Line with lily */}
                <div className="welcome-line">
                    <div className="line-segment"></div>
                    <span className="line-lily">🌸</span>
                    <div className="line-segment"></div>
                </div>

                {/* Greeting */}
                <h1 className="welcome-greeting">Happy Valentine's Day</h1>

                {/* For */}
                <p className="welcome-for">A special letter for</p>

                {/* Name */}
                <h2 className="welcome-name">Eli</h2>

                {/* Subtitle */}
                <p className="welcome-subtitle">
                    Sebuah ungkapan cinta yang tertulis dari hati,<br />
                    hanya untukmu...
                </p>

                {/* Enter Button with lily accent */}
                <button className="welcome-button" onClick={onEnter}>
                    <span className="button-icon">🌷</span>
                    <span>Buka Surat</span>
                </button>

                {/* Date */}
                <p className="welcome-date">14 Februari 2026</p>
            </div>

            {/* Sound Hint */}
            <div className="sound-hint">
                <span className="sound-icon">🎵</span>
                <span>Nyalakan suara untuk pengalaman terbaik</span>
            </div>
        </div>
    )
}
