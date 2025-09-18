const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

// Setează status la conectare
bot.on("ready", () => {
  console.log(`Conectat ca ${bot.user.username}#${bot.user.discriminator}`);

  // Exemple de status:
  // 1) online/idle/dnd/invisible + activitate (game/stream/listening/watching)
  bot.editStatus("dnd", { name: "discord.gg/nitrocheap", type: 3 }); // type: 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching

  // Dacă vrei activitate de tip streaming (cu URL Twitch), folosește type: 1 și un url:
  // bot.editStatus("online", { name: "Stream pe Twitch", type: 1, url: "https://twitch.tv/username" });

  // Exemple alternative:
  // bot.editStatus("idle", { name: "Prin cod", type: 0 });
  // bot.editStatus("dnd", { name: "Nu deranja", type: 3 });
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
