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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("YO COMMENT TU VAS SUIS LA POUR TE SERVIR");
}
};
