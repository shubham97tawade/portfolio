import Image from "next/image";
import React from "react";
import { Blog } from '../blogs/page'


type BlogPreviewProps = {
    blog: Blog
}
export default function BlogPreview({ blog }: BlogPreviewProps){
    return(
        <section className="grid grid-rows-2 md:grid-cols-2 w-5/6 md:w-2/3 bg-white rounded overflow-hidden h-[32rem] md:h-80">
            <aside className="grid-row md:row-span-full">
                <Image src={blog?.blog_cover_image} alt="temp" className="object-cover h-full md:h-80" width={600} height={600} priority/>
            </aside>
            <article className="grid-row p-6 md:p-8">
                <h1 className="line-clamp-1 md:line-clamp-1 overflow-hidden text-ellipsis text-lg text-2xl font-bold mb-4 text-stone-950">{blog?.blog_title}</h1>
                <div className="line-clamp-4 md:line-clamp-6 overflow-hidden text-ellipsis text-stone-900" dangerouslySetInnerHTML={{__html : blog?.blog_para}}></div>
                <button className="mt-4 items-center px-4 py-3 justify-center bg-black text-white text-base rounded-lg transition duration-300 shadow-md hover:shadow-sm focus:outline-none">Read article</button>
            </article>
        </section>
    );
}