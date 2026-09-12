/* ============================================================
   CROWRULES DREAMSCAPES
   SUPABASE CONFIG
============================================================ */

const SUPABASE_URL =
  "https://zauxdqyssratvzmomozf.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_AdfM5y6RqvF3tbvEVzDZSg_JuGTQLD-";

const DREAMSCAPES_BASE =
  new URL("./", window.location.href).href;

const AUTH_CALLBACK =
  new URL(
    "auth-callback.html",
    DREAMSCAPES_BASE
  ).href;

const CREATOR_PORTAL =
  new URL(
    "creator-portal.html",
    DREAMSCAPES_BASE
  ).href;

const RESET_PASSWORD =
  new URL(
    "reset-password.html",
    DREAMSCAPES_BASE
  ).href;

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
      auth:{
        autoRefreshToken:true,
        persistSession:true,
        detectSessionInUrl:true
      }
    }
  );
