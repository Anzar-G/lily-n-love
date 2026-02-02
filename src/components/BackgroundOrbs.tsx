const orbs = [
  {
    style: {
      top: '20%',
      left: '15%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(201, 160, 160, 0.06) 0%, transparent 70%)',
      filter: 'blur(40px)',
    },
  },
  {
    style: {
      top: '45%',
      right: '10%',
      left: 'auto',
      width: '550px',
      height: '550px',
      background: 'radial-gradient(circle, rgba(122, 158, 126, 0.05) 0%, transparent 70%)',
      filter: 'blur(40px)',
    },
  },
  {
    style: {
      top: '70%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '450px',
      height: '450px',
      background: 'radial-gradient(circle, rgba(212, 175, 106, 0.04) 0%, transparent 70%)',
      filter: 'blur(40px)',
    },
  },
  {
    style: {
      top: '90%',
      left: '20%',
      width: '480px',
      height: '480px',
      background: 'radial-gradient(circle, rgba(201, 160, 160, 0.05) 0%, transparent 70%)',
      filter: 'blur(40px)',
    },
  },
]

export function BackgroundOrbs() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden
      >
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              ...orb.style,
              position: 'absolute',
            }}
          />
        ))}
      </div>
      {/* Vignette halus — biar seluruh halaman terasa satu, tidak kontras tepi vs tengah */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(10, 10, 15, 0.2) 100%)',
        }}
        aria-hidden
      />
    </>
  )
}
