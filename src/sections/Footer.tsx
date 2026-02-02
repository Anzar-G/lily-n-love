export function Footer() {
  return (
    <footer className="relative z-10 py-8 md:py-12 px-4 border-t border-[rgba(201,160,160,0.1)]">
      <div className="footer-flourish flex flex-col items-center gap-4">
        <p className="text-[#c9a0a0]/50 text-xs tracking-widest uppercase">
          14 Februari 2026 💐
        </p>
        <div className="flex items-center gap-4" aria-hidden>
          <svg className="w-5 h-5 text-[#7a9e7e]/40" viewBox="0 0 24 24" fill="currentColor">
            <ellipse cx="12" cy="8" rx="3" ry="6" transform="rotate(-25 12 12)" />
            <ellipse cx="12" cy="8" rx="3" ry="6" transform="rotate(25 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#d4af6a" opacity={0.6} />
          </svg>
          <svg
            className="w-6 h-6 text-[#7a9e7e]/50"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <ellipse cx="12" cy="8" rx="3" ry="6" transform="rotate(-20 12 12)" />
          <ellipse cx="12" cy="8" rx="3" ry="6" transform="rotate(20 12 12)" />
          <ellipse cx="12" cy="8" rx="3" ry="6" transform="rotate(60 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#d4af6a" opacity={0.6} />
        </svg>
          <svg className="w-5 h-5 text-[#7a9e7e]/40" viewBox="0 0 24 24" fill="currentColor">
            <ellipse cx="12" cy="8" rx="3" ry="6" transform="rotate(-25 12 12)" />
            <ellipse cx="12" cy="8" rx="3" ry="6" transform="rotate(25 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#d4af6a" opacity={0.6} />
          </svg>
        </div>
      </div>
    </footer>
  )
}
