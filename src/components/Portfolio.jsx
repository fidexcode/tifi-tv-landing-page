import {mobileImage, desktopImage} from "../assets"
const Portfolio = () => {
  return ( 
    <section id="portfolio" className="p-6 bg-lightPink sm:px-10 grid place-items-center">
    <div>
      <h1 className="font-bold font-lato text-xl  text-center text-dimBrown">Our Portfolio</h1>
      <h2 className="font-bold font-lato text-2xl sm:text-[24px]  text-primary text-center">Explore Our Creative Showcase</h2>
      <p className="sm:text-[16px]  text-primary font-lato font-normal mt-4 my-6 text-center">Journey Through Our Visual Masterpieces: A Showcase of Creativity, Innovation, and Excellence</p>
    </div>

    <div className="">
      <div className="flex sm:hidden">
        <img src={mobileImage} alt="mobileImage" className="w-full" />
      </div>
      <div className="hidden sm:flex max-w-[1200px]">
        <img src={desktopImage} alt="desktopImage" className="w-full" />
      </div>
    </div>
    <button className="mt-10">View more</button>
  </section>
   );
}
 
export default Portfolio;