// index.js
const Eris = require("eris");
require('dotenv').config(); // dacă folosești .env pentru token
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

// Opțional: log versiune Eris pentru debugging
console.log("Eris version:", require("eris").version);

bot.on("error", (err) => {
  console.error(err);
});

bot.on("ready", () => {
  console.log("Bot ready — setting presence.");

  // Presence compatibil v0.16+
  bot.setPresence({
    status: "online", // "online", "idle", "dnd", "invisible"
    activities: [
      {
        name: "Salut! Ajut la server", // textul care apare
        type: 0 // 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching, 5 = Competing
      }
    ]
  }).catch(err => console.error("Eroare la setPresence:", err));
});

bot.connect();
