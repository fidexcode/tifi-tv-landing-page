import { useInView } from "react-intersection-observer";
import { editor } from "../assets"
const ReachUs = () => {
  const {ref, inView} = useInView({

  })
  return ( 
    <section ref={ref} className={`${inView ? " translate-y-[0] opacity-100 duration-1000 " : "translate-y-[100px] opacity-0"} bg-dimWhite p-6 grid place-items-center`}>
      <div className="sm:flex flex-nowrap mt-10 sm:h-[600px]">
        <div className="sm:max-w-[300px] ss:max-w-[400px] xl:min-w-[800px] ss:m-auto">
          <img src={editor} alt="editor" className="w-full" />
        </div>

        <div className="bg-dimBrown p-2 sm:px-16 xl:min-w-[800px] sm:max-w-[400px] ss:max-w-[600px] ss:m-auto">
          <h1 className="font-bold font-lato text-xl xl:text-[40px] xl:mb-20 text-dimWhite mt-10">Have a project in mind?</h1>
          <h2 className="font-bold font-lato text-2xl sm:text-[24px] xl:text-[50px] text-dimWhite my-6 xl:leading-[60px]">Lets help you create a stunning video for your brand</h2>
          <p className="sm:text-[16px] xl:text-[34px] text-dimWhite font-lato font-normal mt-4 my-6 xl:my-24 ">Experience the magic of our creative process, where we transform your concepts into compelling video narratives that captivate hearts and minds</p>
          <button className="bg-dimWhite text-dimBrown mb-6 hover:bg-[white] hover:border-[brown]">Contact us</button>
        </div>
      </div>
    </section>
   );
}
 
export default ReachUs;
