const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

// Custom status configuration
const customStatus = {
    status: "online", // online, idle, dnd, invisible
    activity: {
        name: "test", // Your custom status text
        type: 0, // 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching
        url: "https://twitch.tv/username" // Only needed for streaming type
    }
};

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.username}!`);
    
    // Set custom status when bot is ready
    bot.editStatus(customStatus.status, customStatus.activity);
    console.log(`Status set to: ${customStatus.activity.name}`);
});

bot.on("error", (err) => {
    console.error(err);
});

bot.connect();
