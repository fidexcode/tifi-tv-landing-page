import { edit, video, audio, book, smile, record} from "../assets"

const Services = () =>(
    <section id="service" className="bg-dimWhite p-6 ss:px-10 grid place-items-center">
      <div className="mb-4">
        <h1 className="font-bold font-lato text-xl xl:text-[40px] xl:mb-20 text-center text-dimBrown">Our services</h1>
        <h2 className="font-bold font-lato text-2xl sm:text-[24px] xl:text-[50px] text-center text-primary">Discover Our Creative offerings</h2>
      </div>

      <div className="grid ss:grid-cols-2 sm:grid-cols-3 gap-10" >
        <div className="bg-dimBrown flex flex-col justify-center items-center text-center p-6 rounded-[10px]">
          <div className="bg-dimWhite flex items-center justify-center h-[40px] w-[40px] xl:h-[128px] xl:w-[128px] rounded-[100%] p-[4px]">
            <img src={edit} alt="edit" className=" w-[15px] sm:h-[15px] xl:w-[50px] xl:h-[50px]"/>
          </div>
          <h2 className="font-bold font-lato mt-4 text-2xl sm:text-[24px] xl:text-[50px] text-dimWhite">Video Editing</h2>
          <p className="sm:text-[16px] xl:text-[34px] text-white font-lato font-normal mt-4 xl:my-24 ">Transforming Footage into Masterpieces, Frame by FrameWhere Artistry and Technology Merge to Craft Compelling Visual Stories, One Frame at a Time</p>
        </div>
        <div className="border border-faintPink bg-dimWhite flex flex-col justify-center items-center text-center p-6 rounded-[10px]">
          <div className="bg-dimBrown flex items-center justify-center h-[40px] w-[40px] xl:h-[128px] xl:w-[128px] rounded-[100%] p-[4px]">
            <img src={record} alt="edit" className=" w-[15px] sm:h-[15px] xl:w-[50px] xl:h-[50px]"/>
          </div>
          <h2 className="font-bold font-lato mt-4 text-2xl sm:text-[24px] xl:text-[50px] text-dimBrown">Video Production</h2>
          <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 xl:my-24 ">Transforming Footage into Masterpieces, Frame by FrameWhere Artistry and Technology Merge to Craft Compelling Visual Stories, One Frame at a Time</p>
        </div>
        <div className="border border-faintPink bg-dimWhite flex flex-col justify-center items-center text-center p-6 rounded-[10px]">
          <div className="bg-dimBrown flex items-center justify-center h-[40px] w-[40px] xl:h-[128px] xl:w-[128px] rounded-[100%] p-[4px]">
            <img src={video} alt="edit" className=" w-[15px] sm:h-[15px] xl:w-[50px] xl:h-[50px]"/>
          </div>
          <h2 className="font-bold font-lato mt-4 text-2xl sm:text-[24px] xl:text-[50px] text-dimBrown">Visual Effects</h2>
          <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 xl:my-24 ">Transforming Footage into Masterpieces, Frame by FrameWhere Artistry and Technology Merge to Craft Compelling Visual Stories, One Frame at a Time</p>
        </div>
        <div className="border border-faintPink bg-dimWhite flex flex-col justify-center items-center text-center p-6 rounded-[10px]">
          <div className="bg-dimBrown flex items-center justify-center h-[40px] w-[40px] xl:h-[128px] xl:w-[128px] rounded-[100%] p-[4px]">
            <img src={smile} alt="edit" className=" w-[15px] sm:h-[15px] xl:w-[50px] xl:h-[50px]"/>
          </div>
          <h2 className="font-bold font-lato mt-4 text-2xl sm:text-[24px] xl:text-[50px] text-dimBrown">Motion Graphics</h2>
          <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 xl:my-24 ">Transforming Footage into Masterpieces, Frame by FrameWhere Artistry and Technology Merge to Craft Compelling Visual Stories, One Frame at a Time</p>
        </div>
        <div className="border border-faintPink bg-dimWhite flex flex-col justify-center items-center text-center p-6 rounded-[10px]">
          <div className="bg-dimBrown flex items-center justify-center h-[40px] w-[40px] xl:h-[128px] xl:w-[128px] rounded-[100%] p-[4px]">
            <img src={audio} alt="edit" className=" w-[15px] sm:h-[15px] xl:w-[50px] xl:h-[50px]"/>
          </div>
          <h2 className="font-bold font-lato mt-4 text-2xl sm:text-[24px] xl:text-[50px] text-dimBrown">Sound and Audio Editing</h2>
          <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 xl:my-24 ">Transforming Footage into Masterpieces, Frame by FrameWhere Artistry and Technology Merge to Craft Compelling Visual Stories, One Frame at a Time</p>
        </div>
        <div className="border border-faintPink bg-dimWhite flex flex-col justify-center items-center text-center p-6 rounded-[10px]">
          <div className="bg-dimBrown flex items-center justify-center h-[40px] w-[40px] xl:h-[128px] xl:w-[128px] rounded-[100%] p-[4px]">
            <img src={book} alt="edit" className=" w-[15px] sm:h-[15px] xl:w-[50px] xl:h-[50px]"/>
          </div>
          <h2 className="font-bold font-lato mt-4 text-2xl sm:text-[24px] xl:text-[50px] text-dimBrown">Story Boarding</h2>
          <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 xl:my-24 ">Transforming Footage into Masterpieces, Frame by FrameWhere Artistry and Technology Merge to Craft Compelling Visual Stories, One Frame at a Time</p>
        </div>
      </div>

      <button className="mt-10">View More</button>
    </section>
  )

export default Services