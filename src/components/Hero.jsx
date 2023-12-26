import Button from "./Button"
import { conference } from "../assets"
import Stats from "./Stats"
import { useInView } from "react-intersection-observer"
const Hero = () => {
  const {ref, inView} = useInView({
    
  })
  return ( 
    <section id="home" className="">

    <div ref={ref} className={`${inView ? " translate-y-[0] opacity-100 duration-1000 " : "translate-y-[100px] opacity-0"} playSize grid`}>
      <div className="ss:max-w-[400px] xl:max-w-[1000px] p-5 ss:px-10 mt-10 sm:mt-10 xl:mt-[300px]">

        <div>
          <h1 className="text-primary text-[24px] sm:text-[24px] xl:text-[60px] font-lato font-semibold"><span className="elevate">Elevate</span> Your Brand <br /> with a Stunning Video</h1>
        </div>

        <p className="font-normal text-primary sm:text-[16px] xl:text-[34px] my-6 xl:my-24">
          Experience the magic of our creative process, where we transform your concepts into compelling video narratives that captivate hearts and minds
        </p>

        <div className="mt-2 flex flex-nowrap">
          <button className="mr-5 my-5">Contact us</button>
          <button className="bg-dimWhite border border-dimBrown text-dimBrown ml-5 my-5 hover:bg-[white] hover:border-[brown]">View our portfolio</button>
        </div>
    </div>

      <div className="sm:flex hidden absolute  justify-self-end self-center ">
        <Button  />
      </div>
    </div>

    <div className="sm:hidden p-6 ss:px-10">
      <img src={conference} alt="conference w-full" />
    </div>
    <Stats />
</section>
   );
}
 
export default Hero;