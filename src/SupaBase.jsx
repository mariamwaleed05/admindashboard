import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vdldhibbolxzywrvahes.supabase.co'
const supabaseKey = "sb_publishable_VjGUDHtK-A0znRnSu2zr0g_qX5Q85aD"
export const supabase = createClient(supabaseUrl, supabaseKey)