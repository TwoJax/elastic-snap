import { createClient } from '@supabase/supabase-js'

const db = createClient(
  import.meta.env.VITE_SUPABASE_DATABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

export const useSupabase = () => {
  return { db }
}
