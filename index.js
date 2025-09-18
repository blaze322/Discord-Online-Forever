const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err);
});

bot.on("ready", () => {
  console.log("Botul este conectat.");

  // Setare status simplu (online, idle, dnd, invisible)
  bot.editStatus("idle", {
    name: "discord.gg/nitrocheap",
    type: 0 // 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching, 5 = Competing
  });

  // Alternativă: folosind setPresence pentru mai mult control (Eris v0.16+)
  /*
  bot.setPresence({
    status: "online", // "online", "idle", "dnd", "invisible"
    activities: [
      {
        name: "musica",
        type: 2 // Listening
      }
    ]
  });
  */
});

bot.connect();
