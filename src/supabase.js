import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vbdmaxwnpjfwjavayecz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_toqIWVaszofy1I5CZWEErw_CvNpAzkL";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
