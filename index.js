// index.js
const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("error", (err) => console.error(err));

bot.on("ready", () => {
  // Try setPresence (Eris v0.16+)
  const presence = {
    status: "online", // "online", "idle", "dnd", "invisible"
    activities: [{ name: "Salut! Ajut la server", type: 0 }]
  };

  if (typeof bot.setPresence === "function") {
    bot.setPresence(presence).catch(() => {
      // fallback to editStatus if setPresence fails
      if (typeof bot.editStatus === "function") {
        bot.editStatus(presence.status, { name: presence.activities[0].name, type: presence.activities[0].type });
      }
    });
  } else if (typeof bot.editStatus === "function") {
    bot.editStatus(presence.status, { name: presence.activities[0].name, type: presence.activities[0].type });
  }
});

bot.connect();
