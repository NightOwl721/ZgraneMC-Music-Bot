module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nie ma żadnej piosenki grajacej. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Nie ma żadniej muzyki poza tą która gra❌`);

        await queue.clear();

        message.channel.send(`Wyczyszczono kolejke. 🗑️`);
    },
};