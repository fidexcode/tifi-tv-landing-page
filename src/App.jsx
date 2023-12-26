import {Navbar, Hero, About, Services, Portfolio, Contact, Blog, ReachUs, Footer} from "./components"

const App = () => {
 
  return ( 
    <div className="">
      <div className="hero">
        <div className="sm:px-[30px] sm:py-[20px]">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
      </div>
      
      <div>
        <div>
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Blog />
          <ReachUs />
          <Footer />
        </div>
      </div>
    </div>
   );
}
 
export default App;