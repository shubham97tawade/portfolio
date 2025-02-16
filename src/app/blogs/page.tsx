import BlogPreview from "@/app/components/blogPreview";
import { supabase } from "../lib/dBClient";

export interface Blog  {
    blog_id: string,
    blog_created_at: string,
    blog_title: string,
    blog_para: string,
    blog_cover_image: string
}

export default async function Blogs(){
    const { data, error } =  await supabase
    .rpc('blogs_preview_query')
    if (error) {
        console.error('Error fetching blogs:', error);
        return;
    }
    const blogs: Blog[] = data as Blog[]

    return(
        <main className="min-w-full min-h-screen grid place-items-center bg-stone-50 py-8">
            <div className="flex flex-col gap-8 items-center">
                {blogs.map((blog: Blog) => <BlogPreview key={blog?.blog_id} blog={blog} />)}
            </div>
        </main>
    );
}