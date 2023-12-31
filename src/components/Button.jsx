import {play} from "../assets"

function Button() {
  return (
    <div>
        <div className="flex items-center justify-center bg-lightGray h-[50px] w-[50px] rounded-[100%] p-[4px] cursor-pointer">
            <div className="flex items-center justify-center bg-dimWhite h-[100%] w-[100%] rounded-[100%] p-2">
            <img src={play} alt="play" className=" w-[25px] h-[25px]"/>
            </div>
        </div>
    </div>
  )
}

export default Button