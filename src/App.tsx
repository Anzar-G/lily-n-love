import { FallingPetals } from './components/FallingPetals'
import { MusicPlayer } from './components/MusicPlayer'
import { BackgroundOrbs } from './components/BackgroundOrbs'
import { Stardust } from './components/Stardust'
import { Hero } from './sections/Hero'
import { Greeting } from './sections/Greeting'
import { Moments } from './sections/Moments'
import { LoveLetter } from './sections/LoveLetter'
import { Closing } from './sections/Closing'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      <BackgroundOrbs />
      <Stardust />
      <FallingPetals />
      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <Greeting />
        <Moments />
        <LoveLetter />
        <Closing />
        <Footer />
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App
