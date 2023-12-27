import { blogs } from "../constants"
const Blog = () => {
  return ( 
    <section className="bg-lightPink p-6 ss:px-10 grid place-items-center">
      <div>
        <h1 className="font-bold font-lato text-dimBrown text-center">Blog post</h1>
        <h2 className="font-bold font-lato text-2xl sm:text-[24px] text-primary text-center my-6">Discover Our Blog for Expert Insights</h2>
      </div>

      <div className="grid ss:grid-cols-3 gap-10">
        {blogs.map(blog=>(
          <div key={blog.id} className="bg-white rounded-md border border-faintPink max-w-[400px]">
          <img src={blog.img} alt="stage" className="w-full" />
          <div className="p-4">
            <h3 className="font-bold font-lato text-2xl sm:text-[20px] text-primary">{blog.title}</h3>
            <p className="sm:text-[16px] text-primary font-lato font-normal mt-4 my-6">{blog.content}</p>
            <p className="font-bold font-lato text-xl text-dimBrown cursor-pointer">{blog.more}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="flex justify-center">
      <button className="mt-10">See more</button>
      </div>
    </section>
   );
}
 
export default Blog;