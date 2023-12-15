import {logo, arrow, facebook, instagram, linkIdine, twitter} from "../assets"
const Footer = () => (
    <section className="bg-lightPink p-6 ss:px-10 mt-10 xl:mt-32 xl:p-32">
      <div className="ss:flex justify-around items-start flex-wrap">
        <div className="max-w-[200px] xl:max-w-[600px]">
          <img src={logo} alt="logo" className="w-[60px] xl:w-[120px] xl:h-[40px]"/>
          <p className="xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 ">Experience the magic of our creative process, where we transform your concepts into compelling video narratives that captivate hearts and minds</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold font-lato text-xl text-primary xl:text-[50px]">Agency</h2>
          <ul className="list-none">
            <li className="xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 "><a href="">About us</a></li>
            <li className="xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 "><a href="">Our services</a></li>
            <li className="xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 "><a href="">Our portfolio</a></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold font-lato text-xl  text-primary xl:text-[50px]">Information</h2>
          <ul>
            <li className="xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 "><a href="">Contact us</a></li>
            <li className="xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 "><a href="">FAQS</a></li>
            <li className="xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 "><a href="">Hire creatives</a></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold font-lato text-xl mb-4 text-primary xl:text-[50px] xl:mb-24">Subscribe to our News Letter</h2>
          <div className="flex h-[30px] xl:h-[60px] max-w-[250px] xl:max-w-[600px] items-center bg-dimBrown rounded-md">
            <input type="email" name="email" placeholder="Enter Your Email" className="h-[100%] w-[100%] border border-dimBrown"/>
            <div className="bg-dimBrown hover:bg-[brown] h-[30px] xl:h-[60px] rounded-sm p-2 xl:p-6 cursor-pointer ">
              <img src={arrow} alt="arrow" className="w-[18.88px] xl:w-[32px] "/>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="flex items-center justify-center bg-dimBrown hover:bg-[brown] h-[25px] w-[25px] xl:w-[60px] xl:h-[60px] rounded-md p-2 cursor-pointer">
              <img src={facebook} alt="facebook" className="w-[8px] xl:w-[18px]" />
            </div>
            <div className="flex items-center justify-center bg-dimBrown hover:bg-[brown] h-[25px] w-[25px] xl:w-[60px] xl:h-[60px]  rounded-md p-2 cursor-pointer">
              <img src={linkIdine} alt="linkIdin" className="xl:w-[25px]"/>
            </div>
            <div className="flex items-center justify-center bg-dimBrown hover:bg-[brown] h-[25px] w-[25px] xl:w-[60px] xl:h-[60px]  rounded-md p-2 cursor-pointer">
              <img src={twitter} alt="twitter" className="xl:w-[25px]"/>
            </div>
            <div className="flex items-center justify-center bg-dimBrown hover:bg-[brown] h-[25px] w-[25px] xl:w-[60px] xl:h-[60px]  rounded-md p-2 cursor-pointer">
              <img src={instagram} alt="instagram" className="xl:w-[25px]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

export default Footer