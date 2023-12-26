import {mobileImage, desktopImage} from "../assets"
import { useInView } from "react-intersection-observer"

const Portfolio = () => {
  const {ref, inView} = useInView({

  })
  return ( 
    <section ref={ref} id="portfolio" className={`${inView ? " translate-y-[0] opacity-100 duration-1000 " : "translate-y-[100px] opacity-0"} p-6 bg-lightPink sm:px-10 grid place-items-center`}>
    <div>
      <h1 className="font-bold font-lato text-xl xl:text-[40px] xl:mb-20 text-center text-dimBrown">Our Portfolio</h1>
      <h2 className="font-bold font-lato text-2xl sm:text-[24px] xl:text-[50px] text-primary text-center">Explore Our Creative Showcase</h2>
      <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 text-center">Journey Through Our Visual Masterpieces: A Showcase of Creativity, Innovation, and Excellence</p>
    </div>

    <div className="">
      <div className="flex sm:hidden">
        <img src={mobileImage} alt="mobileImage" className="w-full" />
      </div>
      <div className="hidden sm:flex">
        <img src={desktopImage} alt="desktopImage" className="w-full" />
      </div>
    </div>
    <button className="mt-10">View more</button>
  </section>
   );
}
 
export default Portfolio;