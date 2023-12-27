import {logo, arrow} from "../assets"
import { agency, information, socials } from "../constants"
const Footer = () => (
    <section className="bg-lightPink p-6 ss:px-10 mt-10 xl:mt-32">
      <div className="ss:flex justify-around items-start flex-wrap">
        <div className="max-w-[200px]">
          <img src={logo} alt="logo" className="w-[60px]"/>
          <p className=" text-primary font-lato font-normal mt-4 my-6 ">Experience the magic of our creative process, where we transform your concepts into compelling video narratives that captivate hearts and minds</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold font-lato text-xl text-primary">Agency</h2>
          <ul className="list-none">
            {agency.map(agen=>(
              <li key={agen.id} className="text-primary font-lato font-normal mt-4 my-6"><a href="">
                {agen.title}
                </a></li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold font-lato text-xl  text-primary">Information</h2>
          <ul className="list-none">
            {
              information.map(info=>(
                <li key={info.id} className="text-primary font-lato font-normal mt-4 my-6"><a href="/">
                  {info.title}
                  </a></li>
              ))
            }  
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold font-lato text-xl mb-4 text-primary ">Subscribe to our News Letter</h2>
          <div className="flex h-[30px] max-w-[250px] items-center bg-dimBrown rounded-md">
            <input type="email" name="email" placeholder="Enter Your Email" className="h-[100%] w-[100%] border border-dimBrown"/>
            <div className="bg-dimBrown hover:bg-[brown] h-[30px] rounded-sm p-2 cursor-pointer ">
              <img src={arrow} alt="arrow" className="w-[18.88px] "/>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            { socials.map(social=>(
              <div key={social.id} className="flex items-center justify-center bg-dimBrown hover:bg-[brown] h-[25px] w-[25px] rounded-md p-2 cursor-pointer">
              <img src={social.img} alt="facebook" className="w-[8px] xl:w-[18px]" />
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

export default Footer