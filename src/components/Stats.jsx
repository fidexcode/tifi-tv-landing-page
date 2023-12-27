const Stats = () => {
    return ( 
        <div className="p-6 ss:px-10">
        <div className=" relative z-10 stats flex justify-around items-center bg-dimWhite p-2 shadow-md rounded-md text-center
         sm:py-6 sm:mt-[90px] sm:max-w-[800px] m-auto"> 
            <div>
                <span className="text-2xl font-bold font-lato text-primary">120k+</span>
                <p className="text-primary font-lato font-semibold">Projects done</p>
            </div>
            
            <div>
                <span className="text-2xl font-bold font-lato text-primary">10k</span>
                <p className="text-primary xl:text-[24px] font-lato font-semibold">Clients</p>
            </div>

            <div>
                <span className="text-2xl font-bold font-lato text-primary">2000</span>
                <p className="text-primary font-lato font-semibold">Creatives hired</p>
            </div>
        </div>
    </div>
     );
}
 
export default Stats;