module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "𝐓𝐎𝐌𝐎𝐔𝐑𝐀",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝘴𝘢𝘭𝘶𝘵 𝘮𝘰𝘯 𝘱𝘰𝘵𝘦 𝘮𝘰𝘪 𝘤'𝘦𝘴𝘵 𝘵𝘰𝘮𝘰𝘶𝘳𝘢 𝘫𝘶𝘯𝘪𝘰𝘳 𝘱𝘰𝘴𝘦 𝘮𝘰𝘪 𝘵𝘦𝘴 𝘲𝘶𝘦𝘴𝘵𝘪𝘰𝘯 🤲🤍");
}
};
