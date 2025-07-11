// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// “anon” key is fine for public-storage operations;
// use service_role key only in trusted server‑side code.
export const supabase = createClient(supabaseUrl, supabaseKey);
