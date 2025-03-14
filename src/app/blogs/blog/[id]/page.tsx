import { supabase } from "@/app/lib/dBClient";
import parse from 'html-react-parser';
import Head from "next/head";

export default async function BlogPage({params} : {params: Promise<{ id: string }>}){
    const { id } = await params;
    const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
    await supabase.rpc('increment_blog_views', {
        blog_id: id,
    })
    if (error) {
        console.error('Error fetching blogs:', error);
        return;
    }
    return(
        <div className="grid min-h-screen place-items-center bg-gray-100 md:p-24">
            <Head>
                <title>{data?.title}</title>
                <meta property="og:title" content={data?.title} />
                <meta property="og:description" content={data.blog.split("<figure>")[0]} />
                <meta property="og:image" content={data?.cover_image} />
                <meta property="og:url" content={`https://shubhamtawade.dev/blogs/blog/${data.id}`} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:description" content={data.blog.split("<figure>")[0]} />
                <meta name="twitter:image" content={data?.cover_image} />
            </Head>
            <div className="flex p-8 bg-white flex-col items-start min-h-9/10">
                <span className="flex flex-col md:flex-row md:items-end w-full">
                    <h1 className="text-5xl font-bold md:mb-8 mb-2 md:mr-2 text-stone-950">{`#${data?.count}`}</h1>
                    <h1 className="text-3xl font-bold mb-8 text-stone-950">{`${data?.title}`}</h1>
                </span>
                <span className="flex flex-row justify-between items-center w-full">
                    <small className="text-sm mb-8 text-stone-600">{`Date: ${data?.created_at.split('T')[0]}`}</small>
                    <small className="text-sm mb-8 text-stone-600">{`Views: ${data?.views}`}</small>
                </span>
                <div className="flex flex-col w-full justify-center items-start [&>p]:text-stone-800 [&>p]:text-lg [&>p]:pb-3 [&>p]:leading-8 [&>h3]:my-3 [&>h3]:text-2xl [&>h3]:text-stone-900 [&>h3]:font-medium [&>ul]:list-disc [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:text-stone-800 [&>ul]:text-lg [&>ul]:pb-3 [&>ul>li]:pb-3 [&>ul>li]:text-stone-800 [&>figure]:my-3 [&>figure]:flex [&>figure]:flex-col [&>figure]:justify-center [&>figure]:items-center [&>figure]:text-center [&>figure>img]:w-full md:[&>figure>img]:w-3/4 [&>figure>figcaption]:text-stone-800 [&>figure>figcaption]:text-sm [&>figure>figcaption]:mt-2">{parse(data?.blog)}</div>
            </div>
        </div>
    )
}