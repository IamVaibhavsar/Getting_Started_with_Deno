import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 4300 })                   //creating object of serve

for await (const req of s){
    req.respond({ body: "Welcome to Deno!" });
}
