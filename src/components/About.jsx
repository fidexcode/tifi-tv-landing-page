import { editorials } from "../assets"
const About = () => {
  return ( 
    <section id="about" className=" bg-lightPink relative">
      <div className="sm:h-[600px] sm:flex justify-center items-center">
      <div className="p-6 sm:max-w-[500px] ss:max-w-[600px] order-2 ss:px-10 mt-10 sm:mt-10">
          <h1 className="font-bold font-lato text-xl text-dimBrown">About us</h1>
          <h2 className="font-bold font-lato text-2xl sm:text-[24px] text-primary">Discover Our Creative Journey</h2>
          <p className="sm:text-[16px]  text-primary font-lato font-normal mt-4 my-6">At Tifi.tv, we are more than just video editors; we are a passionate team of creative storytellers, dedicated to transforming ideas into captivating visual narratives that leave a lasting impact. With a history rooted in artistic innovation and a commitment to exceeding client expectations, we take pride in our journey of crafting memorable stories and pushing the boundaries of creativity in the world of video editing.</p>
          <button>Learn more</button>
        </div>

        <div className="p-6 ss:p-10 ss:mt-10 cursor-pointer sm:max-w-[400px] order-1">
          <img src={editorials} alt="editorials" className="w-[100%]"/>
        </div>
      </div>
      
    </section>
   );
}
 
export default About;