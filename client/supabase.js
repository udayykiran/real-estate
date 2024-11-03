import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://drrmiccphlmfnkmjptws.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
