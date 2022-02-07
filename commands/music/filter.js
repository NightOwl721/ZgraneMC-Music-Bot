module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nic teraz  nie gra!. ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`${message.author}, Wpisz właściwa nazwe filtra. ❌\n\`bassboost, 8D, nightcore\``);

        const filters = [];
        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`${message.author}, Nie ma filtru o tej nazwie. ❌\n\`bassboost, 8D, nightcore\``);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Zastosowano: **${filter}**, Status filtru: **${queue.getFiltersEnabled().includes(filter) ? 'Aktywny' : 'Nieaktywny'}** ✅\n **Pamietaj jezeli muzyka jest długa filtr może sie chwilke ładowac.**`);
    },
};