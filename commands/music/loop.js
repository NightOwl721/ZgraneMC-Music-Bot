const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);


        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nic teraz nie gra!. ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, Wyłacz najpierw isniejaca pętle używajac**(${client.config.px}loop)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Tryb powtarzania: **${queue.repeatMode === 0 ? 'Niekatywny' : 'Aktywny'}**, Cała sekwencja bęndzie sie powtarzała w kółko 🔁` : `${message.author}, Something went wrong. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, W trybie powrarzania musisz wyłaczyc ostatnia kolejke **(${client.config.px}loop queue)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Zapetlanie: **${queue.repeatMode === 0 ? 'Nieaktywne' : 'Aktywne'}**, Current music will be repeated non-stop (all music in the list **${client.config.px}loop queue**  You can repeat it with the option.) 🔂` : `${message.author}, Something went wrong ❌`);
        };
    },
};