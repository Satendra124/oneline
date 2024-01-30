const get_gpt_response = require('./ai.js').get_gpt_response;
async function main(){
    const system_message = "You are a helpful assistant. You can only answer in question. Nothing you say should be more than 10 words i.e. one question.";
    let first_question = "What are you doing?";
    for (let i = 0; i < 100; i++) {
        const question = await get_gpt_response(first_question, {system_message});
        
        question.trim();
        question.replace(/[\r\n]/gm, '');
        
        console.log("AI: ",question);
        
        if(question.indexOf('?') == -1) {
            console.log("Moye Moye");
            return;
        }

        first_question = question;
    }
    console.log("Paise khatam!");
}
main()