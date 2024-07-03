const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728945492";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_08_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwQkJURDRTay9OaXJrSkd6RjFoK2djR2d0ZWFqck5ZdXFrTDNjUjFxK0RnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2SG9aSTNOV1MyQ3VTV1MwVHgwZUZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM2MWJlNjBmLWIzOTAtNGMzYS1iOGJlLWI5NzVmMjQxMjRmM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDE4NyxcbiAgICAgIDE2MixcbiAgICAgIDIyNixcbiAgICAgIDE2NCxcbiAgICAgIDI0NSxcbiAgICAgIDc1LFxuICAgICAgMTA4LFxuICAgICAgNzUsXG4gICAgICAxNzYsXG4gICAgICAxOTUsXG4gICAgICAyNDYsXG4gICAgICAyNixcbiAgICAgIDk2LFxuICAgICAgMjQ1LFxuICAgICAgNixcbiAgICAgIDEwMixcbiAgICAgIDE4OCxcbiAgICAgIDEwOCxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDE2OCxcbiAgICAgIDgzLFxuICAgICAgMTQ4LFxuICAgICAgMjcsXG4gICAgICAyNDgsXG4gICAgICA4NixcbiAgICAgIDc3LFxuICAgICAgMTk0LFxuICAgICAgNjIsXG4gICAgICAxNTgsXG4gICAgICAyNSxcbiAgICAgIDI1LFxuICAgICAgMTMyLFxuICAgICAgMTMsXG4gICAgICA0NSxcbiAgICAgIDYwLFxuICAgICAgMTc0LFxuICAgICAgMTIwLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDE5TTZTMUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyODk0NTQ5MjozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmbzwnZm08J2ZtvCdmbDwnZm78J2ZuPCdmoPwnZm+XCIsXG4gICAgXCJsaWRcIjogXCI4MDMxOTI0NDQ5MzIwOjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYb3c5Y0NFS1hEbHJRR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidWtrMkhQSXNoMGNocmhEMXpsK2hGUS9LaGFVV3M0S3gzQ3ZUaW1qTUlSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZRHFSZ1ZqeHUyR2locE8yZXJDWTNUTjhVT3NqQVBKbG5rWjVWVTBuOUtIajBHcTZxU0Y1ckl1VStINzdNQXRBbitTemlhcGVYRFJwSWZoYndPUG5CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNTktXamxSRDh4aHZBc3BHaElQemR4dDA1UE96SGNnM0VtaGs2NWw1SjA3Z05pd21GTXYwNVNWdHV4UDRNZHZZdHkvOWJzRkJPYTRETjBUWjBDNEJqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3Mjg5NDU0OTI6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDMzNzA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1U5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPVTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJraklyUXV2SURVVTNjUW1ka3FKWStzWnlpUFgrQ0JvZXRmZXVMRkR1bG1jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyMDQzNDE5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
