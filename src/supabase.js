import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zbcgahpedcdhfcyuixcj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiZG1heHducGpmd2phdmF5ZWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NjA3MzksImV4cCI6MjA5NjQzNjczOX0.c6CSougYoxy-sH0xYTUwiQcMZr-Wl8y3iWolgc6VmS0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
