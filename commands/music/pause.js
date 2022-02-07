module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nic teraz nie gra!. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Grająca tu muzyka o tytule **${queue.current.title}** zatrzymała sie ✅` : `${message.author}, Coś poszło nie tak. ❌`);
    },
};