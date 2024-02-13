import { OpenAI } from 'openai';
const openai = new OpenAI({ apiKey: "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", baseURL: "https://api.openai.com/v1" , dangerouslyAllowBrowser: true});
export const play_gpt = async () => {
    const completion = await openai.chat.completions.create({
        messages: [ 
            { role: "system", content:  "Pick any one. Rock, Paper, Sissors, Thread." },
            { role: "user", content: "You are a AI which only need to select between these four options. Rock, Paper, Sissors, Thread. Only output one word which are these four." }
        ],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
}