import { arrowDown } from "../assets"
const Contact = () => (
    <section className="p-6 grid place-content-center">
      <div className="max-w-[650px] xl:max-w-[1200px]">
        <h1 className="font-bold font-lato text-xl xl:text-[40px] xl:mb-20 text-center text-dimBrown">Hire creatives</h1>
        <h2 className="font-bold font-lato text-2xl sm:text-[24px] xl:text-[50px] text-center text-primary xl:leading-[60px]">Creative Talents On Demand</h2>
        <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 text-center">Discover our World of Creative Talent at Your Fingertips, Choose our Perfect Experts to Elevate Your Projects, and Watch Your Ideas Flourish into Stunning Visual Realities</p>
      </div>

      <div className="">
        <form className="">
          <div className="ss:grid grid-cols-2 gap-x-10">
            <input type="text" placeholder="Enter your company's name"/>
            <input type="text" placeholder="Enter your company's Email"/>
            <input type="text" placeholder="Company's website(optional)"/>
            <input type="text" placeholder="Select experience level"/>
            <input type="text" placeholder="select role tittle"/>
            <input type="text" placeholder="select role you're hiring for"/>
          </div>
          <textarea name="" id="" cols="" rows="5" placeholder="Add an additional note." className="border border-[#6D6D6D] rounded-[4px] p-[10px] outline-none w-full mt-[10px]"></textarea>
        </form>
        <div className="flex mt-10 ss:justify-start justify-center">
        <button>Send message</button>
        </div>
      </div>
    </section>
  )

export default Contact