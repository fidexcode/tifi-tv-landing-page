import {useState} from 'react'
import {logo, menuIcon } from "../assets"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="hidden sm:flex items-center justify-between p-[20px] xl:p-[40px] rounded-[10px] bg-lightGray">
      <img src={logo} alt="logo" className="lg:w-[120px] lg:h-[40px] cursor-pointer"/>
      <ul className="sm:flex hidden gap-10">
        <li><a className="text-primary text-[14px] md:text-[18px] xl:text-[36px] font-normal font-lato" href="/">Home</a></li>
        <li><a className="text-primary text-[14px] md:text-[18px] xl:text-[36px] font-normal font-lato" href="/">About us</a></li>
        <li><a className="text-primary text-[14px] md:text-[18px] xl:text-[36px] font-normal font-lato" href="/">Our services</a></li>
        <li><a className="text-primary text-[14px] md:text-[18px] xl:text-[36px] font-normal font-lato" href="/">Our portfolio</a></li>
      </ul>
      <button>Hire creatives</button>
      </nav>

      <nav className="sm:hidden flex justify-between items-center p-5 ss:px-10">
        <img src={logo} alt="logo" className='w-[80px]'/>
        <img src={toggle ? menuIcon : menuIcon} alt='menu' className='w-[20px] h-[20px] object-contain' onClick={() => setToggle((prev)=>!prev)}/>
        <ul className={`${toggle ? 'flex':'hidden'} flex flex-col p-6  bg-dimBrown absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
          <li className="mb-4"><a className="text-white text-[14px]  font-normal font-lato" href="/">Home</a></li>
          <li className="mb-4"><a className="text-white text-[14px]  font-normal font-lato" href="/">About us</a></li>
          <li className="mb-4"><a className="text-white text-[14px]  font-normal font-lato" href="/">Our services</a></li>
          <li className="mb-4"><a className="text-white text-[14px]  font-normal font-lato" href="/">Our portfolio</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar