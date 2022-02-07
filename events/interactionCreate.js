module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = client.player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `No music currently playing. ❌`, ephemeral: true, components: [] });

            int.member.send(`**Muza zapisana: \`${queue.current.title}\` | Zapisane przez \`${queue.current.author}\`, Zapisany serwer: \`${int.member.guild.name}\` ✅**`).then(() => {
                return int.reply({ content: `Wysłałem ci DM'a ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Nie moge wysłać ci priva. ❌`, ephemeral: true, components: [] });
            });
        }
    }
};