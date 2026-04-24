module.exports = {
  botToken: "YOUR_DISCORD_BOT_TOKEN",
  prefix: "!",
  owners: ["OWNER_ID_1", "OWNER_ID_2"],
  captchaHook: "CAPTCHA_LOGGING_WEBHOOK",
  logHook: "LOGGING_WEBHOOK",
  logs: {
    HighLowIVs: true,
    Quests: true,
    Rare: true,
    Shiny: true
  },
  
  aiHostname: "http://zeus.hidencloud.com:24661",
  aiLicenseKey: "YOUR_AI_LICENSE_KEY",
  aiCatch: true,
    
  captchaApiKey: "CAPTCHA_API_KEY",
  
  waitAfterCaptcha: 60000,
  waitAfterSpawn: 1500,
  
  blacklistedServers: [] 
};