import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuPreview from './components/MenuPreview'
import ChefStory from './components/ChefStory'
import Reservation from './components/Reservation'
import LocationMap from './components/LocationMap'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <ChefStory />
        <Reservation />
        <LocationMap />
      </main>
      <Footer />
    </>
  )
}

export default App
