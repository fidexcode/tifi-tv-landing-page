import { myServices } from "../constants"

const Services = () =>(
    <section id="service" className="bg-dimWhite p-6 ss:px-10 grid place-items-center">
      <div className="mb-4">
        <h1 className="font-bold font-lato text-xl xl:text-[40px] xl:mb-20 text-center text-dimBrown">Our services</h1>
        <h2 className="font-bold font-lato text-2xl sm:text-[24px] xl:text-[50px] text-center text-primary">Discover Our Creative offerings</h2>
      </div>

      <div className="grid ss:grid-cols-2 sm:grid-cols-3 gap-10" >
        {myServices.map(serve=>(
          <div key={serve.id} className={`${serve.color ? "bg-dimBrown":"bg-dimWhite"} border border-faintPink flex flex-col justify-center items-center text-center p-6 rounded-[10px]`}>

          <div className={`${serve.color ? "bg-dimWhite":"bg-dimBrown"} flex items-center justify-center h-[40px] w-[40px] xl:h-[128px] xl:w-[128px] rounded-[100%] p-[4px]`}>
            <img src={serve.img} alt="edit" className=" w-[15px] sm:h-[15px] xl:w-[50px] xl:h-[50px]"/>
          </div>
          <h2 className={`${serve.color ? "text-dimWhite" : "text-dimBrown"} font-bold font-lato mt-4 text-2xl sm:text-[24px] xl:text-[50px]`}>{serve.title}</h2>
          <p className={`${serve.color ? "text-white":"text-primary"} sm:text-[16px] xl:text-[34px] font-lato font-normal mt-4 xl:my-24`}>{serve.content}</p>

        </div>
        ))}
      </div>

      <button className="mt-10">View More</button>
    </section>
  )

export default Services