import { supabase } from "@/app/lib/dBClient";

export default async function BlogPage({params} : {params: Promise<{ id: string }>}){
    const { id } = await params;
    const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
    console.log(await supabase.rpc('increment_blog_views', {
        blog_id: id,
    }))
    if (error) {
        console.error('Error fetching blogs:', error);
        return;
    }
    return(
        <div className="grid min-h-screen place-items-center bg-gray-100 md:p-12">
            <div className="flex p-8 bg-white flex-col items-start min-h-9/10">
                <span className="flex flex-row items-end w-full">
                    <h1 className="text-5xl font-bold mb-8 mr-2 text-stone-950">{`#${data?.count}`}</h1>
                    <h1 className="text-3xl font-bold mb-8 text-stone-950">{`${data?.title}`}</h1>
                </span>
                <span className="flex flex-row justify-between items-center w-full">
                    <small className="text-sm mb-8 text-stone-600">{`Date: ${data?.created_at.split('T')[0]}`}</small>
                    <small className="text-sm mb-8 text-stone-600">{`Views: ${data?.views}`}</small>
                </span>
                <div className="flex flex-col w-full overflow-hidden text-xl tracking-tight text-black leading-relaxed justify-center text-stone-800" dangerouslySetInnerHTML={{__html: data?.blog || ''}}></div>
            </div>
        </div>
    )
}