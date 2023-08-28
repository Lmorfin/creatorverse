import { createClient } from "@supabase/supabase-js";

const URL = "https://neivfmppudhqxmnsmnln.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5laXZmbXBwdWRocXhtbnNtbmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MzE5NTgsImV4cCI6MjAwODQwNzk1OH0.mY_N7_-IWWwjM_tn6H_A5_0R1zvraMNDeO3oRMfG7w4";

export const supabase = createClient(URL, API_KEY);
