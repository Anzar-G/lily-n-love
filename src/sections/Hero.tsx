import { LilyHero } from '../components/LilyHero'
import { ParallaxLayer } from '../components/ParallaxLayer'
import { ScrollReveal } from '../components/ScrollReveal'

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="flex flex-col items-center z-10">
        <ParallaxLayer speed={0.15}>
          <LilyHero />
        </ParallaxLayer>
        <ParallaxLayer speed={0.3} className="mt-8 flex flex-col items-center">
          <ScrollReveal variant="fade-in" delay={0}>
            <div className="hero-title-wrap">
              <h1
                className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-medium text-[#f5f0e8]"
                style={{ fontFamily: '"Dancing Script", cursive', letterSpacing: '0.05em' }}
              >
                Untuk Eli
              </h1>
              <p className="mt-2 text-[#c9a0a0]/90 text-sm sm:text-base uppercase tracking-[0.2em] font-body">
                A letter from my heart
              </p>
            </div>
          </ScrollReveal>
        </ParallaxLayer>
      </div>

      {/* Scroll indicator — safe area untuk notch/home indicator */}
      <div
        className="absolute flex flex-col items-center gap-2 opacity-60 z-10"
        style={{
          bottom: 'max(2.5rem, calc(env(safe-area-inset-bottom) + 1rem))',
          animation: 'scroll-bounce 2s ease-in-out infinite',
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a0a0]">Scroll</span>
        <div className="w-6 h-8 rounded-full border border-[rgba(201,160,160,0.3)] flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#c9a0a0]/70" />
        </div>
      </div>
    </section>
  )
}
