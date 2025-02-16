'use server'

import { supabase } from "../lib/dBClient";

export const getBlogsPreviewData = async() => {
    return  supabase.rpc('blogs_preview_query')
}
