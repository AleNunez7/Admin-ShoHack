import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://gfujvpurvdppygapnrpc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI5NzIzNDUwLCJleHAiOjE5NDUyOTk0NTB9.QSyADsY4lk-TGtpJjx2bU0g0g-HV6b3JMobtC-Ge3jk"
);

export default supabase;
