const {cmd , commands} = require('../command')

cmd({
    pattern: "list",
    desc: "list the bot",
    category: "main",
    react: "📁"
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*❯❯ SHADOW MD COMMAND LIST ❮❮*
> *╭──────────⚬➨*
> *│👨🏻‍💻 DOWNLOAD  COMMANDS*

*🗃️Command : song*
*💨Desc : song downlod*
*💆🏻‍♂️use : .song*

*🗃️Command : video*
*💨Desc : video download*
*💆🏻‍♂️use : .video*

*🗃️Command : Facebook*
*💨Decs : Fb download*
*💆🏻‍♂️use : .fb*

*🗃️Command : Tik Tok*
*💨Decs : tt download*
*💆🏻‍♂️use : .tt*

*🗃️Command : Twitter*
*💨Decs : Twitter download*
*💆🏻‍♂️use : .twitter*

*🗃️Command : mediafire*
*💨Decs : mediafire download*
*💆🏻‍♂️use : .mediafire*

*🗃️Command : Google drive*
*💨Decs : google drive download*
*💆🏻‍♂️use : .gdrive*

*🗃️Command : Ping*
*💨Decs : ping check*
*💆🏻‍♂️use : .ping*

*🗃️Command : System*
*💨Decs : system check*
*💆🏻‍♂️use .system*

*🗃️Command : Repo*
*💨Decs : repo link*
*💆🏻‍♂️use : .repo*

*🗃️Command : owner*
*💨Decs : main owner ditels*
*💆🏻‍♂️use : .owner*
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴍᴅ*

*╰───────────⚬➨*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/5f0335bebb60421970e8b.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/vipshadowmd/Menujs/raw/main/PTT-20240828-WA0235.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
