import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://datmdeawesfbhwesbknr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhdG1kZWF3ZXNmYmh3ZXNia25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0Mjk0OTAsImV4cCI6MTk4NDAwNTQ5MH0.qLqkoqbkurQXA86kHvcxI2y_KSOWpa_N9c-Pz_WYrhk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}