import { blogs } from "../constants"
const Blog = () => (
    <section className="bg-lightPink p-6 px-10">
      <div>
        <h1 className="font-bold font-lato text-xl xl:text-[40px] xl:mb-20 text-dimBrown text-center">Blog post</h1>
        <h2 className="font-bold font-lato text-2xl sm:text-[24px] xl:text-[50px] text-primary text-center my-6">Discover Our Blog for Expert Insights</h2>
      </div>

      <div className="grid gap-10 ss:grid-cols-3">
        {blogs.map(blog=>(
          <div key={blog.id} className="bg-white rounded-md border border-faintPink">
          <img src={blog.img} alt="stage" className="w-full block" />
          <div className="p-4">
            <h3 className="font-bold font-lato text-2xl sm:text-[20px] xl:text-[40px] text-primary">{blog.title}</h3>
            <p className="sm:text-[16px] xl:text-[34px] text-primary font-lato font-normal mt-4 my-6 xl:my-24 ">{blog.content}</p>
            <p className="font-bold font-lato text-xl xl:text-[40px] xl:mb-20 text-dimBrown cursor-pointer">{blog.more}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="flex justify-center">
      <button className="mt-10">See more</button>
      </div>
    </section>
  )

export default Blog