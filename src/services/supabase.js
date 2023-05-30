import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://luthfoiccdjrylrvuair.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1dGhmb2ljY2RqcnlscnZ1YWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0Nzc2NzcsImV4cCI6MjAwMTA1MzY3N30.s_rIQ9oMZbGIi0DBfhGIrGyF209rTBbb6Wt8A9s6tV4"
);
export default supabase;
