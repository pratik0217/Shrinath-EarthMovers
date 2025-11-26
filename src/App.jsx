import './App.css'
import Navbar from './component/Navbar'
import CompanyLogo from './assets/Logo.png'
import Homebg from './assets/HomeBackground.jpg'
import Home from './component/Home'
function App() {
  return (
    <>
      <header style={{backgroundImage: `url(${Homebg})`}} className='bg-cover bg-center bg-no-repeat h-[100vh]'>
        <Navbar CompanyLogo={CompanyLogo} />
        <Home />
      </header>
      <main>
        <section></section>
      </main>
    </>
  )
}

export default App
