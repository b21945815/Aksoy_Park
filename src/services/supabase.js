import { createClient as client } from "@supabase/supabase-js";

export const supabaseUrl = "https://trusynysbmzyvytluzvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydXN5bnlzYm16eXZ5dGx1enZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMzI2ODMsImV4cCI6MjA1MzkwODY4M30.Bys4vG1JLKS8TEqJ-0VWTne6yUXDOFADi_b4lRVNh8w";
const supabase = client(supabaseUrl, supabaseKey);
export default supabase;
