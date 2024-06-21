<<<<<<< HEAD
"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRETE_KEY;
export const tokenProvider = async () =>{
    const user = await currentUser();
    if(!user) throw new Error("User is not logged in");
    if(!apiKey) throw new Error("No API Key");
    if(!apiSecret) throw new Error("No API Secret");
    const client = new StreamClient(apiKey, apiSecret);

    const exp = Math.round(new Date().getTime()/1000)+60*60;
    const issued = Math.floor(Date.now()/1000)-60;
    const token = client.createToken(user.id, exp, issued);
    return token;
}
=======
// Action file for API KEY which generated on "GetStrem.com"

"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;
export const tokenProvider = async () =>{
    const user = await currentUser();
    if(!user) throw new Error("User is not logged in");
    if(!apiKey) throw new Error("No API Key");
    if(!apiSecret) throw new Error("No API Secret");
    const client = new StreamClient(apiKey, apiSecret);

    const exp = Math.round(new Date().getTime()/1000)+60*60;
    const issued = Math.floor(Date.now()/1000)-60;
    const token = client.createToken(user.id, exp, issued);
    return token;
}
>>>>>>> 3a16bc81b4ffe0c182d842385f865c6cd1fda42c
