const Contact = () => {
  return ( 
    <section id="creatives" className="p-6 grid place-content-center">
      <div className="max-w-[650px]">
        <h1 className="font-bold font-lato  text-center text-dimBrown">Hire creatives</h1>
        <h2 className="font-bold font-lato text-2xl sm:text-[24px] text-center text-primary ">Creative Talents On Demand</h2>
        <p className="sm:text-[16px] text-primary font-lato font-normal mt-4 my-6 text-center">Discover our World of Creative Talent at Your Fingertips, Choose our Perfect Experts to Elevate Your Projects, and Watch Your Ideas Flourish into Stunning Visual Realities</p>
      </div>

      <div className="">
        <form className="">
          <div className="ss:grid grid-cols-2 gap-x-10">
            <input type="text" placeholder="Enter your company's name"/>
            <input type="text" placeholder="Enter your company's Email"/>
            <input type="text" placeholder="Company's website(optional)"/>
            <input type="text" placeholder="Select experience level" className="dropdown"/>
            <input type="text" placeholder="select role tittle" className="dropdown"/>
            <input type="text" placeholder="select role you're hiring for" className="dropdown"/>
          </div>
          <textarea name="" id="" cols="" rows="5" placeholder="Add an additional note." className="border border-[#6D6D6D] rounded-[4px] p-[10px] outline-none w-full mt-[10px]"></textarea>
        </form>
        <div className="flex mt-10 ss:justify-start justify-center">
        <button>Send message</button>
        </div>
      </div>
    </section>
   );
}
 
export default Contact;