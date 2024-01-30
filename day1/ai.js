const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: "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", baseURL: "https://api.openai.com/v1" });

module.exports.get_gpt_response = async (prompt , {system_message}) => {
    const completion = await openai.chat.completions.create({
        messages: [ 
            { role: "system", content: system_message },
            { role: "user", content: prompt }
        ],
        model: "gpt-4",
    });
    return completion.choices[0].message.content;
}