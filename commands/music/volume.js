const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nic teraz nie gra!. ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Aktualna Głośność: **${queue.volume}** 🔊\n**Żeby zmienić głośność od \`1\` do \`${maxVol}\` Wpisz numer pomiędzy.**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, To co wpisałeś jest już akutalną głoośnością ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **Wpisz numer od \`1\` do \`${maxVol}\`by zmienić głośność** ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Głośność zmieniona: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Something went wrong. ❌`);
    },
};