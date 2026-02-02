import { LilyDivider } from '../components/LilyDivider'
import { ScrollReveal } from '../components/ScrollReveal'

export function Greeting() {
  return (
    <section className="relative z-10 py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-[720px] mx-auto">
        <LilyDivider />
        <ScrollReveal variant="fade-down" delay={0}>
          <div className="greeting-glow">
            {/* Dekorasi kecil — hati & lily */}
            <div className="absolute top-4 left-4 text-[#c9a0a0]/40" aria-hidden>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="absolute top-4 right-4 text-[#7a9e7e]/40" aria-hidden>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 5 4 9c0 4 8 12 8 12s8-8 8-12c0-4-4-7-8-7z" />
              </svg>
            </div>
            {/* Pojok bawah — flourish halus */}
            <div className="absolute bottom-4 left-4 w-8 h-px bg-gradient-to-r from-[rgba(201,160,160,0.3)] to-transparent rounded" aria-hidden />
            <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-[rgba(201,160,160,0.3)] to-transparent rounded" aria-hidden />
            <h2
              className="text-[1.75rem] sm:text-[2rem] md:text-[3rem] font-semibold text-[#f5f0e8] text-center mb-6 md:mb-8"
              style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '0.05em' }}
            >
              Hai sayang,
            </h2>
            <ScrollReveal variant="fade-up" delay={100}>
              <p
                className="text-[#f5f0e8]/90 text-[0.9375rem] sm:text-base md:text-[1.1rem] leading-[1.9] text-center"
                style={{ fontFamily: '"Lora", serif' }}
              >
                Mungkin kita memang belum lama menjalin hubungan ini, tapi aku ingin kamu tahu — dari lubuk hati yang paling dalam, aku benar-benar suka dan sayang banget sama kamu. Setiap hari bersamamu terasa seperti hadiah, dan aku nggak mau kamu ragu sedikit pun tentang perasaanku. Ini surat kecil dari hatiku, cuma buat kamu.
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
