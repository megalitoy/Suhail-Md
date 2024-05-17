const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="baringo,kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Megalito7:<password>@megalito.st9z3lh.mongodb.net/?retryWrites=true&w=majority&appName=Megalito"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254728945492" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728945492";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_14_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgODksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5VN0JNZ1hsUjJHQVJZOVNaKzcrd3p1K2F6QUFyTDU3VytpcVpVSHBhTVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklXbGszV1o5UnRLOGZGOVF3eFM1OHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU3ZTVjMWUtZmEyOC00ZGFiLWIwZTQtYzVjMWQyYzI2NGUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDc2LFxuICAgICAgMzAsXG4gICAgICA3MCxcbiAgICAgIDkyLFxuICAgICAgMzEsXG4gICAgICAyMjEsXG4gICAgICAxMzIsXG4gICAgICAxODYsXG4gICAgICAyMzQsXG4gICAgICAyMTUsXG4gICAgICAyMjcsXG4gICAgICAxNjIsXG4gICAgICA0NCxcbiAgICAgIDE4NSxcbiAgICAgIDIyOSxcbiAgICAgIDIyNixcbiAgICAgIDMxLFxuICAgICAgMTg0LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMjQsXG4gICAgICA5OCxcbiAgICAgIDIzNixcbiAgICAgIDE3OSxcbiAgICAgIDIyNCxcbiAgICAgIDUwLFxuICAgICAgMjMxLFxuICAgICAgOTMsXG4gICAgICAxMjUsXG4gICAgICA1OCxcbiAgICAgIDE1NCxcbiAgICAgIDI0OSxcbiAgICAgIDIyNCxcbiAgICAgIDQwLFxuICAgICAgMzksXG4gICAgICAxNTAsXG4gICAgICAyMjQsXG4gICAgICAxOSxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaQkJRUVlWTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI4OTQ1NDkyOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZiPCdmYDwnZmC8J2YvPCdmYfwnZmE8J2Zj/CdmYog8J2ZiPCdmYDwnZmI8J2ZgPCdmYfwnZmK8J2ZjfCdmL9cIixcbiAgICBcImxpZFwiOiBcIjgwMzE5MjQ0NDkzMjA6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlhvdzljQ0VLcXRuN0lHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1a2sySFBJc2gwY2hyaEQxemwraEZRL0toYVVXczRLeDNDdlRpbWpNSVI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1SQzZBNFgvODM1QnM2Z1g0VTlmdmJCSWl4MlVPcW5wd2hxN2tscXh5SnVGMXRhcXFxcWJ6eE92R1o3dzB4OE5ydnJZT2FIM3pWSS84QUpxMjRuakRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhKZ3hKYk55MDNDcFE0NjdBTC9CRzI5QTRSaC9XcURaMlgrcVJCTERhTjg1YkF2dUM1dWF6ZlZFSXg1M3BTM29GTVN3cnFjV1hMR0FNeWlzUlBia2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyODk0NTQ5MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU5ODQwNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9VOS5qc29uIjogIntcImtleURhdGFcIjpcImtqSXJRdXZJRFVVM2NRbWRrcUpZK3NaeWlQWCtDQm9ldGZldUxGRHVsbWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzIwNDM0MTk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "Megalito" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MegalitoD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Megalito",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
