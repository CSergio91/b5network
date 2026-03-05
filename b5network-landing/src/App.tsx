
import { HeroSection } from './components/sections/HeroSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { SportsGallery } from './components/sections/SportsGallery'
import { TechStackGear } from './components/sections/TechStackGear'
import { MulticamSimulator } from './components/sections/MulticamSimulator'
import { PodcastHub } from './components/sections/PodcastHub'
import { GlobalMap } from './components/sections/GlobalMap'
import { CustomCursor } from './components/ui/CustomCursor'
import { Navbar } from './components/ui/Navbar'
import { Footer } from './components/ui/Footer'
import { ContactModal } from './components/ui/ContactModal'

function App() {
  return (
    <div className="relative w-full min-h-screen bg-b5-black text-white selection:bg-b5-red/30 font-inter">
      <CustomCursor />
      <Navbar />
      <ContactModal />

      <main>
        <HeroSection />
        <ServicesSection />
        <SportsGallery />
        <TechStackGear />
        <MulticamSimulator />
        <PodcastHub />
        <GlobalMap />
      </main>

      <Footer />
    </div>
  )
}

export default App
