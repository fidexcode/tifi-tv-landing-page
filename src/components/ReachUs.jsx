import { editor } from "../assets"
const ReachUs = () => {
  return ( 
    <section className="bg-dimWhite p-6 grid place-items-center">
      <div className="sm:flex flex-nowrap mt-10 sm:h-[500px]">
        <div className="sm:max-w-[300px] ss:max-w-[400px] ss:m-auto">
          <img src={editor} alt="editor" className="w-full" />
        </div>

        <div className="bg-dimBrown p-2 sm:px-16 sm:max-w-[400px] ss:max-w-[600px] ss:m-auto">
          <h1 className="font-bold font-lato text-xl text-dimWhite mt-10">Have a project in mind?</h1>
          <h2 className="font-bold font-lato text-2xl sm:text-[24px] text-dimWhite my-6 ">Lets help you create a stunning video for your brand</h2>
          <p className="sm:text-[16px] text-dimWhite font-lato font-normal mt-4 my-6 ">Experience the magic of our creative process, where we transform your concepts into compelling video narratives that captivate hearts and minds</p>
          <button className="bg-dimWhite text-dimBrown mb-6 hover:bg-[white] hover:border-[brown]">Contact us</button>
        </div>
      </div>
    </section>
   );
}
 
export default ReachUs;
