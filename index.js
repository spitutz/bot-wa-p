/**
  // No Re Upload, recode sendiri base nya klo mau 😏
  // Sc no enc silahkan cek https://github.com/zeeoneofficial/example-case
 
	 「 TqTo 」
  // My God
  // My Parents
  // Fatih A.
  // Ferdiz
  // DikaArdnt [author]
  // Mhankbarbar
  // Nurutomo
  // ZeeoneOfc
  // Penyedia Module
  // And All Support
  **/


require('./settings')
const {
   default: makeWASocket,
   BufferJSON,
   WAMessageStubType,
   WA_DEFAULT_EPHEMERAL,
   generateWAMessageFromContent,
   downloadContentFromMessage,
   downloadHistory,
   proto,
   getMessage,
   generateWAMessageContent,
   prepareWAMessageMedia,
   generateWAMessage,
   areJidsSameUser,
   makeInMemoryStore,
   delay
} = require('@adiwajshing/baileys')
const translate = require('@vitalets/google-translate-api')
const {
   Configuration,
   OpenAIApi
} = require('openai');
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
   exec,
   spawn,
   execSync
} = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const {
   fromBuffer
} = require('file-type')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const {
   EmojiAPI
} = require("emoji-api");
const emoji = new EmojiAPI()
const request = require("request")
const FormData = require("form-data");
const speed = require('performance-now')
const {
   Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const hx = require('hxz-api');
const {
   performance
} = require('perf_hooks')
const ms = require('ms')
const similarity = require('similarity')
const threshold = 0.72

const {
   toAudio,
   toPTT
} = require('./lib/converter')
const _prem = require("./lib/premium");
const _sewa = require("./lib/sewa");
const rpg = require('./lib/games-rpg')
const levelling = require('./lib/levelling');
const {
   pinterest,
   wallpaper,
   wikimedia,
   hentai,
   quotesAnime
} = require('./lib/scraper')
const {
   bytesToSize,
   fileIO,
   UploadFileUgu,
   telesticker,
   webp2mp4File,
   TelegraPh
} = require('./lib/uploader')
const {
   UdhAdCoy,
   ApusAhh
} = require('./lib/dbs');
const {
   addResponList,
   delResponList,
   isAlreadyResponList,
   isAlreadyResponListGroup,
   sendResponList,
   updateResponList,
   getDataResponList
} = require('./lib/respon-list');
const {
   addBadword,
   delBadword,
   isKasar,
   addCountKasar,
   isCountKasar,
   delCountKasar
} = require("./lib/badword");
const {
   smsg,
   getGroupAdmins,
   formatp,
   tanggal,
   tanggal_,
   tanggal__,
   formatDate,
   getTime,
   isUrl,
   sleep,
   clockString,
   runtime,
   fetchJson,
   getBuffer,
   jsonformat,
   format,
   logic,
   generateProfilePicture,
   parseMention,
   getRandom
} = require('./lib/myfunc')
const set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
const set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
const set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
const set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
const set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
const set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
const set_promote = JSON.parse(fs.readFileSync('./database/set_promote.json'));
const set_demote = JSON.parse(fs.readFileSync('./database/set_demote.json'));
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
const antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
const grupbadword2 = JSON.parse(fs.readFileSync('./database/grupbadword2.json'));
const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'));
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
const _doc = JSON.parse(fs.readFileSync('./database/document.json'))
const _anonymous = JSON.parse(fs.readFileSync('./database/anonymous.json'))
const _menfess = JSON.parse(fs.readFileSync('./database/menfess.json'))

const {
   sendButLoc,
   sendButDoC,
   sendButDoc,
   sendListMenu,
   sendListAge,
   sendListGender,
   sendListLang,
   sendButImage,
   sendKatalog,
   sendKatalog2,
   sendContact,
   sendButton2,
   sendImgList,
   sendList
} = require('./lib/welcome')
const Alpha = require('./lib/welcome')
const {
   isSetProses,
   addSetProses,
   removeSetProses,
   changeSetProses,
   getTextSetProses,
   isSetPromote,
   addSetPromote,
   removeSetPromote,
   changeSetPromote,
   getTextSetPromote,
   isSetDemote,
   addSetDemote,
   removeSetDemote,
   changeSetDemote,
   getTextSetDemote
} = require('./lib/setproses');
const {
   isSetDone,
   addSetDone,
   removeSetDone,
   changeSetDone,
   getTextSetDone
} = require('./lib/setdone');
const {
   isSetOpen,
   addSetOpen,
   removeSetOpen,
   changeSetOpen,
   getTextSetOpen
} = require("./lib/setopen");
const {
   isSetClose,
   addSetClose,
   removeSetClose,
   changeSetClose,
   getTextSetClose
} = require("./lib/setclose");
const {
   isSetWelcome,
   addSetWelcome,
   changeSetWelcome,
   removeSetWelcome,
   getTextSetWelcome
} = require('./lib/setwelcome');
const {
   isSetLeft,
   addSetLeft,
   removeSetLeft,
   changeSetLeft,
   getTextSetLeft
} = require('./lib/setleft');
pp_bot = fs.readFileSync(thumbnail)
qris = fs.readFileSync(donasi)
moment.tz.setDefault("Asia/Jakarta").locale("id");

global.db = JSON.parse(fs.readFileSync("./database/database.json"))
if (global.db) global.db.data = {
   users: {},
   chats: {},
   database: {},
   game: {},
   others: {},
   sticker: {},
   absen: {},
   cmd: {},
   settings: {},
   anonymous: {},
   menfess: {},
   ...(global.db.data || {})
}

// Database Game
const hit_today = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
var dbs = []
global.dbc = dbs

module.exports = alpha = async (alpha, m, chatUpdate, mek, store, reSize, _welcome, _left, antionce, antidelete, _promote, _demote) => {
   try {
      var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
      var budy = (typeof m.text == 'string' ? m.text : '')
      const content = JSON.stringify(mek.message)
      const type = Object.keys(mek.message)[0];
      if (m && type == "protocolMessage") alpha.ev.emit("message.delete", m.message.protocolMessage.key);
      const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
      const prefix = isCmd ? budy[0] : ''
      const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
      const from = mek.key.remoteJid
      const time = moment(Date.now()).tz(timezone).locale('id').format('HH:mm:ss z')
      const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
      const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
      const salam = moment(Date.now()).tz(timezone).locale('id').format('a')
      const args = body.trim().split(/ +/).slice(1)
      const pushname = m.pushName || "No Name"
      const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
      const botNumber = alpha.user.id ? alpha.user.id.split(":")[0] + "@s.whatsapp.net" : alpha.user.id
      const isCreator = ["62821931157232@s.whatsapp.net", "62887435047326@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      const itsMe = m.sender == alpha.user.id ? true : false
      const text = q = args.join(" ")
      const c = args.join(' ')
      const quoted = m.quoted ? m.quoted : m
      const mime = (quoted.msg || quoted).mimetype || ''
      const isMedia = /image|video|sticker|audio/.test(mime)

      // Group
      const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat) : ''
      const groupId = m.isGroup ? groupMetadata.id : ''
      const groupName = m.isGroup ? groupMetadata.subject : ''
      const participants = m.isGroup ? await groupMetadata.participants : ''
      const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
      const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
      const groupOwner = m.isGroup ? groupMetadata.owner : ''
      const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
      const groupMembers = m.isGroup ? await groupMetadata.participants : ''
      const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
      const isNumber = x => typeof x === 'number' && !isNaN(x)
      const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
      const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
      const isAntiLink = antilink.includes(m.chat) ? true : false
      const isAntiwame = antiwame.includes(m.chat) ? true : false
      const isAntiLink2 = antilink2.includes(m.chat) ? true : false
      const isAntiwame2 = antiwame2.includes(m.chat) ? true : false
      const isAntidelete = antidelete.includes(m.chat) ? true : false
      const isAntionce = antionce.includes(m.chat) ? true : false
      const isWelcome = _welcome.includes(m.chat) ? true : false
      const isBadword = grupbadword.includes(m.chat) ? true : false
      const isBadword2 = grupbadword2.includes(m.chat) ? true : false
      const isLeft = _left.includes(m.chat) ? true : false
      const isPromote = _promote.includes(m.chat) ? true : false
      const isDemote = _demote.includes(m.chat) ? true : false
      const isMute = mute.includes(m.chat) ? true : false
      const blockList = await alpha.fetchBlocklist()
      if (blockList?.includes(m.sender)) return
      dbs.push({
         id: m.key.id,
         m
      });
      const ini_mark = `0@s.whatsapp.net`
      const timestampi = speed();
      const latensii = speed() - timestampi
      const ftroli = {
         key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "6289523258649-1604595598@g.us"
         },
         "message": {
            orderMessage: {
               itemCount: 2024,
               status: 200,
               thumbnail: pp_bot,
               surface: 200,
               message: `© ${ownername}`,
               orderTitle: 'memek',
               sellerJid: '0@s.whatsapp.net'
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
         sendEphemeral: true
      }
      const fdoc = {
         key: {
            participant: '0@s.whatsapp.net'
         },
         message: {
            documentMessage: {
               title: `© ${ownername}`,
               jpegThumbnail: pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fvn = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "6289643739077-1613049930@g.us"
            } : {})
         },
         message: {
            "audioMessage": {
               "mimetype": "audio/ogg; codecs=opus",
               "seconds": 359996400,
               "ptt": "true"
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fgif = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "status@broadcast"
            } : {})
         },
         message: {
            "videoMessage": {
               "title": `© ${ownername}`,
               "h": `Hmm`,
               'seconds': '359996400',
               'gifPlayback': 'true',
               'caption': `© ${ownername}`,
               'jpegThumbnail': pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fgclink = {
         key: {
            participant: "0@s.whatsapp.net",
            "remoteJid": "0@s.whatsapp.net"
         },
         "message": {
            "groupInviteMessage": {
               "groupJid": "6288213840883-1616169743@g.us",
               "inviteCode": "m",
               "groupName": "P",
               "caption": `© ${ownername}`,
               'jpegThumbnail': pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fvideo = {
         key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "6289643739077-1613049930@g.us"
            } : {})
         },
         message: {
            "videoMessage": {
               "title": `${pushname}`,
               "h": `Hmm`,
               'seconds': '359996400',
               'caption': `${pushname}`,
               'jpegThumbnail': pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const floc = {
         key: {
            participant: '0@s.whatsapp.net'
         },
         message: {
            locationMessage: {
               name: `${ownername}`,
               jpegThumbnail: pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fkontak = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: `6283136505591-1614953337@g.us`
            } : {})
         },
         message: {
            'contactMessage': {
               'displayName': `${pushname}`,
               'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
               'jpegThumbnail': pp_bot,
               thumbnail: pp_bot,
               sendEphemeral: true
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      let picaks = [flaming, fluming, flarun, flasmurf]
      let picak = picaks[Math.floor(Math.random() * picaks.length)]

      let picaks2 = [ftroli, fdoc, fvn, fgif, fgclink, fvideo, floc, fkontak]
      let picak2 = picaks2[Math.floor(Math.random() * picaks2.length)]

      const reply = async (teks) => {
         return await alpha.sendFakeLink(m.chat, teks, salam, pushname, ownername, thumbnail, myweb, m)
      }
      async function getGcName(groupID) {
         try {
            let data_name = await alpha.groupMetadata(groupID)
            return data_name.subject
         } catch (err) {
            return '-'
         }
      }
      const randomArr = (arr = []) => {
         return arr[Math.floor(Math.random() * arr.length)]
      }
      const isEmoji = (emo) => {
         let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
         let regexEmoji = new RegExp(emoji_ranges, 'gi');
         return emo.match(regexEmoji)
      }
      if (m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
         try {
            await alpha.ev.emit("viewOnceMessage", m);
         } catch (err) {
            console.error(util.format(err))
         }
      }
function _0xdad1(_0x5efe7a,_0x2f53f0){const _0x4b33ba=_0x6c55();return _0xdad1=function(_0x356d8a,_0x84c8f6){_0x356d8a=_0x356d8a-0xd4;let _0x6c550c=_0x4b33ba[_0x356d8a];return _0x6c550c;},_0xdad1(_0x5efe7a,_0x2f53f0);}const _0x5ec341=_0xdad1;(function(_0x5eb15f,_0x30725a){const _0x3a4123=_0xdad1,_0x574dfb=_0x5eb15f();while(!![]){try{const _0x5187b1=-parseInt(_0x3a4123(0x169))/0x1+parseInt(_0x3a4123(0x190))/0x2+parseInt(_0x3a4123(0x16c))/0x3*(parseInt(_0x3a4123(0x10c))/0x4)+parseInt(_0x3a4123(0x158))/0x5*(parseInt(_0x3a4123(0x1b1))/0x6)+parseInt(_0x3a4123(0x173))/0x7*(parseInt(_0x3a4123(0x115))/0x8)+parseInt(_0x3a4123(0x196))/0x9*(-parseInt(_0x3a4123(0x178))/0xa)+parseInt(_0x3a4123(0x12d))/0xb;if(_0x5187b1===_0x30725a)break;else _0x574dfb['push'](_0x574dfb['shift']());}catch(_0x444520){_0x574dfb['push'](_0x574dfb['shift']());}}}(_0x6c55,0x4b814));function _0x6c55(){const _0x176bf1=['makanannaga','anakphonix','18642ggCQrP','pushName','lastopen','serigala','sworddurability','lastbansos','pisang','cupon','arlok','fortress','psenjata','lastgift','nila','ojekk','legendary','serigalalastclaim','role','lastdungeon','lastmonthly','(((.+)+)+)+$','number','korbanngocok','potion','lasthunt','composing','buaya','lastrob','Pengangguran','lastsda','lastnguli','lastgrab','mute','setDone','botol','umpan','premiumDate','stroberi','ayamg','kyubi','nsfw','promote','name','atm','gardenboxs','monyet','iron','pickaxe','kingdom','serialNumber','healtmonster','lastbanned','anggur','rubah','bibitjeruk','pet','autoblok','autolevelup','exp','kudalastclaim','lastfishing','cumi','sewa','lastIstigfar','psepick','rumahsakit','language','lastcodereg','constructor','Perunggu','panda','settings','pickaxedurability','expired','armor','apel','anjing','kardus','lastjb','anakanjing','anakgriffin','buntal','apply','132616qxODqf','stamina','lasthourly','userRegister','phonixlastclaim','ssapi','trofi','jeruk','typemenu2','104spFmNB','ramuan','anakkucing','free','gender','sapir','laper','nagalastclaim','fishingroddurability','kucinglastclaim','glory','welcome','centaur','fishingrod','uncommon','lumba','data','age','search','autorespond','pertambangan','healt','lastberkebon','gajah','1538724pJCeac','ikan','toString','chat','sapi','setLeave','makananphonix','lastmining','kaleng','No\x20Name','lastadventure','rubahlastclaim','lbars','title','autoread','paus','diamond','banteng','phonix','users','lastrampok','antispam','udang','esteh','lastdagang','orca','dory','regTime','ayam','limit','typemenu','sender','captionPay','chats','naga','gurita','lobster','BannedReason','haus','warn','anakcentaur','pancing','lastseen','745gTYMVm','kambing','mangga','rtrofi','recording','pertanian','bank','bibitmangga','leleg','babihutan','registered','paygc','lastclaim','leleb','anakrubah','bibitapel','anaknaga','444655GfeuPX','demote','hiu','39JJTdeT','premiumTime','lastkill','emas','makananpet','kerbau','kepiting','38374TUVixv','kucing','goodbye','setWelcome','boxs','10qVHTnH','mythic','sampah','tigame','common','lele','makanan','batu','troopcamp','antionce','perunggu','hobi','autobio','lastngocok','tprem','coin','setProses','anticall','[▒▒▒▒▒▒▒▒▒]','makananserigala','bibitanggur','griffinlastclaim','setDemote','bawal','182118AHXggJ','anakkyubi','lastSetStatus','sword','level','lastduel','3980079kKnGfv','lastberbru','enchant','kayu','lastturu','lastngojek','makanancentaur','semangka','log','lastweekly','ayamb','money','harimau','bibitpisang','babi','object','lastwar','available','shield','job','antilink','pasangan','griffin','premium','Newbie\x20㋡'];_0x6c55=function(){return _0x176bf1;};return _0x6c55();}const _0x84c8f6=(function(){let _0x1c11b5=!![];return function(_0x10e679,_0x3f36a0){const _0x567cb4=_0x1c11b5?function(){const _0x33e011=_0xdad1;if(_0x3f36a0){const _0x39fa23=_0x3f36a0[_0x33e011(0x10b)](_0x10e679,arguments);return _0x3f36a0=null,_0x39fa23;}}:function(){};return _0x1c11b5=![],_0x567cb4;};}()),_0x356d8a=_0x84c8f6(this,function(){const _0x117252=_0xdad1;return _0x356d8a['toString']()[_0x117252(0x127)](_0x117252(0x1c4))[_0x117252(0x12f)]()[_0x117252(0xfd)](_0x356d8a)[_0x117252(0x127)](_0x117252(0x1c4));});_0x356d8a();try{let user=global['db'][_0x5ec341(0x125)][_0x5ec341(0x140)][m[_0x5ec341(0x14c)]],isNumber=_0x502788=>typeof _0x502788===_0x5ec341(0x1c5)&&!isNaN(_0x502788),limitnya=isPremium?limitawal[_0x5ec341(0x1ad)]:limitawal[_0x5ec341(0x118)];if(typeof user!==_0x5ec341(0x1a5))db['data'][_0x5ec341(0x140)][m[_0x5ec341(0x14c)]]={};if(user){if(!(_0x5ec341(0x1ad)in user))user[_0x5ec341(0x1ad)]=isPremium;if(!isNumber(user[_0x5ec341(0x16d)]))user[_0x5ec341(0x16d)]=0x0;if(!('banned'in user))user['banned']=![];if(!_0x5ec341(0x152)in user)user[_0x5ec341(0x152)]='';if(!isNumber(user['afkTime']))user['afkTime']=-0x1;if(!isNumber(user['pc']))user['pc']=0x0;if(!('afkReason'in user))user['afkReason']='';if(!(_0x5ec341(0xfb)in user))user[_0x5ec341(0xfb)]='id';if(!isNumber(user['limit']))user[_0x5ec341(0x14a)]=limitnya;if(!isNumber(user[_0x5ec341(0x12a)]))user[_0x5ec341(0x12a)]=0x64;if(!isNumber(user[_0x5ec341(0xeb)]))user[_0x5ec341(0xeb)]=0x0;if(!isNumber(user[_0x5ec341(0x13a)]))user['title']=0x0;if(!isNumber(user['stamina']))user[_0x5ec341(0x10d)]=0x64;if(!isNumber(user['haus']))user[_0x5ec341(0x153)]=0x64;if(!isNumber(user['laper']))user[_0x5ec341(0x11b)]=0x64;if(!isNumber(user[_0x5ec341(0x194)]))user['level']=0x0;if(!(_0x5ec341(0x1ab)in user))user[_0x5ec341(0x1ab)]='';if(!isNumber(user[_0x5ec341(0xf3)]))user[_0x5ec341(0xf3)]=0x0;if(!isNumber(user[_0x5ec341(0x1c6)]))user['korbanngocok']=0x0;if(!isNumber(user[_0x5ec341(0x1be)]))user['ojekk']=0x0;if(!isNumber(user[_0x5ec341(0x112)]))user[_0x5ec341(0x112)]=0x0;if(!user[_0x5ec341(0x15b)])user[_0x5ec341(0x15b)]=_0x5ec341(0xfe);if(!isNumber(user[_0x5ec341(0x180)]))user[_0x5ec341(0x180)]=0x0;if(!isNumber(user[_0x5ec341(0x187)]))user[_0x5ec341(0x187)]=0x0;if(!isNumber(user[_0x5ec341(0xe4)]))user[_0x5ec341(0xe4)]=0x0;if(!isNumber(user[_0x5ec341(0x186)]))user['tprem']=0x0;if(!isNumber(user[_0x5ec341(0x17b)]))user[_0x5ec341(0x17b)]=0x32;if(!isNumber(user[_0x5ec341(0x164)]))user[_0x5ec341(0x164)]=0x0;if(!isNumber(user[_0x5ec341(0x1a1)]))user[_0x5ec341(0x1a1)]=0x3e8;if(!isNumber(user[_0x5ec341(0x15e)]))user['bank']=0x3e8;if(!isNumber(user[_0x5ec341(0xfa)]))user[_0x5ec341(0xfa)]=0x0;if(!isNumber(user['fortress']))user[_0x5ec341(0x1ba)]=0x0;if(!isNumber(user[_0x5ec341(0x1a8)]))user['shield']=![];if(!isNumber(user[_0x5ec341(0x15d)]))user[_0x5ec341(0x15d)]=0x0;if(!isNumber(user[_0x5ec341(0x129)]))user['pertambangan']=0x0;if(!isNumber(user[_0x5ec341(0xdb)]))user[_0x5ec341(0xdb)]=0x0;if(!isNumber(user[_0x5ec341(0x106)]))user[_0x5ec341(0x106)]=0x0;if(!isNumber(user[_0x5ec341(0x135)]))user[_0x5ec341(0x135)]=0x0;if(!isNumber(user['aqua']))user['aqua']=0x0;if(!isNumber(user[_0x5ec341(0x13d)]))user[_0x5ec341(0x13d)]=0x0;if(!isNumber(user[_0x5ec341(0xe7)]))user[_0x5ec341(0xe7)]=0x0;if(!isNumber(user[_0x5ec341(0x16f)]))user[_0x5ec341(0x16f)]=0x0;if(!isNumber(user[_0x5ec341(0x1b9)]))user[_0x5ec341(0x1b9)]=0x0;if(!isNumber(user[_0x5ec341(0x17c)]))user[_0x5ec341(0x17c)]=0x0;if(!isNumber(user[_0x5ec341(0x177)]))user[_0x5ec341(0x177)]=0x0;if(!isNumber(user[_0x5ec341(0x1b8)]))user['cupon']=0x0;if(!isNumber(user['as']))user['as']=0x0;if(!isNumber(user[_0x5ec341(0x123)]))user[_0x5ec341(0x123)]=0x0;if(!isNumber(user[_0x5ec341(0x179)]))user[_0x5ec341(0x179)]=0x0;if(!isNumber(user['legendary']))user[_0x5ec341(0x1bf)]=0x0;if(!isNumber(user['glory']))user[_0x5ec341(0x11f)]=0x0;if(!isNumber(user[_0x5ec341(0x198)]))user[_0x5ec341(0x198)]=0x0;if(!isNumber(user[_0x5ec341(0xf0)]))user['pet']=0x0;if(!isNumber(user[_0x5ec341(0xf9)]))user[_0x5ec341(0xf9)]=0x0;if(!isNumber(user[_0x5ec341(0x1bb)]))user[_0x5ec341(0x1bb)]=0x0;if(!isNumber(user[_0x5ec341(0x1c7)]))user[_0x5ec341(0x1c7)]=0x0;if(!isNumber(user[_0x5ec341(0x17a)]))user[_0x5ec341(0x17a)]=0x0;if(!isNumber(user['armor']))user[_0x5ec341(0x103)]=0x0;if(!isNumber(user['pancing']))user[_0x5ec341(0x156)]=0x0;if(!isNumber(user[_0x5ec341(0x104)]))user[_0x5ec341(0x104)]=0x0;if(!isNumber(user[_0x5ec341(0x1a0)]))user['ayamb']=0x0;if(!isNumber(user[_0x5ec341(0xdf)]))user['ayamg']=0x0;if(!isNumber(user[_0x5ec341(0x11a)]))user[_0x5ec341(0x11a)]=0x0;if(!isNumber(user[_0x5ec341(0x111)]))user[_0x5ec341(0x111)]=0x0;if(!isNumber(user[_0x5ec341(0x144)]))user[_0x5ec341(0x144)]=0x0;if(!isNumber(user[_0x5ec341(0x160)]))user[_0x5ec341(0x160)]=0x0;if(!isNumber(user[_0x5ec341(0x165)]))user[_0x5ec341(0x165)]=0x0;if(!isNumber(user[_0x5ec341(0x193)]))user[_0x5ec341(0x193)]=0x0;if(!isNumber(user[_0x5ec341(0x1b5)]))user[_0x5ec341(0x1b5)]=0x0;if(!isNumber(user['pickaxe']))user[_0x5ec341(0xe8)]=0x0;if(!isNumber(user[_0x5ec341(0x101)]))user['pickaxedurability']=0x0;if(!isNumber(user[_0x5ec341(0x122)]))user[_0x5ec341(0x122)]=0x0;if(!isNumber(user[_0x5ec341(0x11d)]))user[_0x5ec341(0x11d)]=0x0;if(!isNumber(user[_0x5ec341(0xdc)]))user['umpan']=0x0;if(!isNumber(user[_0x5ec341(0x174)]))user['kucing']=0x0;if(!isNumber(user[_0x5ec341(0x11e)]))user[_0x5ec341(0x11e)]=0x0;if(!isNumber(user['kuda']))user['kuda']=0x0;if(!isNumber(user[_0x5ec341(0xf4)]))user['kudalastclaim']=0x0;if(!isNumber(user[_0x5ec341(0xee)]))user[_0x5ec341(0xee)]=0x0;if(!isNumber(user[_0x5ec341(0x138)]))user[_0x5ec341(0x138)]=0x0;if(!isNumber(user[_0x5ec341(0x105)]))user['anjing']=0x0;if(!isNumber(user['anjinglastclaim']))user['anjinglastclaim']=0x0;if(!isNumber(user[_0x5ec341(0x1c0)]))user['serigalalastclaim']=0x0;if(!isNumber(user['nagalastclaim']))user[_0x5ec341(0x11c)]=0x0;if(!isNumber(user[_0x5ec341(0x110)]))user[_0x5ec341(0x110)]=0x0;if(!isNumber(user[_0x5ec341(0x18d)]))user['griffinlastclaim']=0x0;if(!isNumber(user['centaurlastclaim']))user['centaurlastclaim']=0x0;if(!isNumber(user[_0x5ec341(0x170)]))user[_0x5ec341(0x170)];if(!isNumber(user[_0x5ec341(0x1af)]))user[_0x5ec341(0x1af)]=0x0;if(!isNumber(user[_0x5ec341(0x133)]))user[_0x5ec341(0x133)]=0x0;if(!isNumber(user['makanangriffin']))user['makanangriffin']=0x0;if(!isNumber(user[_0x5ec341(0x18b)]))user[_0x5ec341(0x18b)]=0x0;if(!isNumber(user['makanancentaur']))user[_0x5ec341(0x19c)]=0x0;if(!isNumber(user['warn']))user[_0x5ec341(0x154)]=0x0;if(!isNumber(user['healthmonster']))user['healthmonster']=0x0;if(!isNumber(user[_0x5ec341(0x117)]))user[_0x5ec341(0x117)]=0x0;if(!isNumber(user['anakkuda']))user['anakkuda']=0x0;if(!isNumber(user['anakrubah']))user[_0x5ec341(0x166)]=0x0;if(!isNumber(user[_0x5ec341(0x108)]))user[_0x5ec341(0x108)]=0x0;if(!isNumber(user[_0x5ec341(0x1b4)]))user[_0x5ec341(0x1b4)]=0x0;if(!isNumber(user['anakserigala']))user['anakserigala']=0x0;if(!isNumber(user[_0x5ec341(0x14f)]))user[_0x5ec341(0x14f)]=0x0;if(!isNumber(user[_0x5ec341(0x168)]))user[_0x5ec341(0x168)]=0x0;if(!isNumber(user[_0x5ec341(0x13f)]))user['phonix']=0x0;if(!isNumber(user[_0x5ec341(0x1b0)]))user['anakphonix']=0x0;if(!isNumber(user[_0x5ec341(0x1ac)]))user[_0x5ec341(0x1ac)]=0x0;if(!isNumber(user[_0x5ec341(0x109)]))user[_0x5ec341(0x109)]=0x0;if(!isNumber(user[_0x5ec341(0xe0)]))user[_0x5ec341(0xe0)]=0x0;if(!isNumber(user[_0x5ec341(0x191)]))user[_0x5ec341(0x191)]=0x0;if(!isNumber(user[_0x5ec341(0x121)]))user[_0x5ec341(0x121)]=0x0;if(!isNumber(user[_0x5ec341(0x155)]))user['anakcentaur']=0x0;if(!isNumber(user[_0x5ec341(0x170)]))user['makananpet']=0x0;if(!isNumber(user[_0x5ec341(0x142)]))user[_0x5ec341(0x142)]=0x0;if(!isNumber(user['antispamlastclaim']))user['antispamlastclaim']=0x0;if(!isNumber(user['kayu']))user[_0x5ec341(0x199)]=0x0;if(!(_0x5ec341(0xe9)in user))user[_0x5ec341(0xe9)]=![];if(!isNumber(user[_0x5ec341(0x17f)]))user[_0x5ec341(0x17f)]=0x0;if(!isNumber(user[_0x5ec341(0x116)]))user[_0x5ec341(0x116)]=0x0;if(!isNumber(user['string']))user['string']=0x0;if(!isNumber(user[_0x5ec341(0x193)]))user[_0x5ec341(0x193)]=0x0;if(!isNumber(user[_0x5ec341(0x1b5)]))user[_0x5ec341(0x1b5)]=0x0;if(!isNumber(user[_0x5ec341(0xe8)]))user[_0x5ec341(0xe8)]=0x0;if(!isNumber(user['pickaxedurability']))user[_0x5ec341(0x101)]=0x0;if(!isNumber(user['fishingrod']))user[_0x5ec341(0x122)]=0x0;if(!isNumber(user[_0x5ec341(0x11d)]))user[_0x5ec341(0x11d)]=0x0;if(!isNumber(user['paus']))user[_0x5ec341(0x13c)]=0x0;if(!isNumber(user['kepiting']))user[_0x5ec341(0x172)]=0x0;if(!isNumber(user['gurita']))user[_0x5ec341(0x150)]=0x0;if(!isNumber(user[_0x5ec341(0xf6)]))user['cumi']=0x0;if(!isNumber(user[_0x5ec341(0x10a)]))user['buntal']=0x0;if(!isNumber(user['dory']))user[_0x5ec341(0x147)]=0x0;if(!isNumber(user['lumba']))user[_0x5ec341(0x124)]=0x0;if(!isNumber(user[_0x5ec341(0x151)]))user[_0x5ec341(0x151)]=0x0;if(!isNumber(user['hiu']))user[_0x5ec341(0x16b)]=0x0;if(!isNumber(user[_0x5ec341(0x143)]))user['udang']=0x0;if(!isNumber(user[_0x5ec341(0x12e)]))user['ikan']=0x0;if(!isNumber(user['nila']))user[_0x5ec341(0x1bd)]=0x0;if(!isNumber(user[_0x5ec341(0x18f)]))user[_0x5ec341(0x18f)]=0x0;if(!isNumber(user[_0x5ec341(0x17d)]))user[_0x5ec341(0x17d)]=0x0;if(!isNumber(user['orca']))user[_0x5ec341(0x146)]=0x0;if(!isNumber(user[_0x5ec341(0x13e)]))user[_0x5ec341(0x13e)]=0x0;if(!isNumber(user[_0x5ec341(0x1a2)]))user['harimau']=0x0;if(!isNumber(user[_0x5ec341(0x12c)]))user[_0x5ec341(0x12c)]=0x0;if(!isNumber(user[_0x5ec341(0x159)]))user[_0x5ec341(0x159)]=0x0;if(!isNumber(user[_0x5ec341(0xff)]))user[_0x5ec341(0xff)]=0x0;if(!isNumber(user[_0x5ec341(0x1ca)]))user[_0x5ec341(0x1ca)]=0x0;if(!isNumber(user[_0x5ec341(0x171)]))user[_0x5ec341(0x171)]=0x0;if(!isNumber(user[_0x5ec341(0x131)]))user['sapi']=0x0;if(!isNumber(user[_0x5ec341(0xe6)]))user[_0x5ec341(0xe6)]=0x0;if(!isNumber(user[_0x5ec341(0x161)]))user[_0x5ec341(0x161)]=0x0;if(!isNumber(user[_0x5ec341(0x1a4)]))user[_0x5ec341(0x1a4)]=0x0;if(!isNumber(user[_0x5ec341(0x149)]))user[_0x5ec341(0x149)]=0x0;if(!isNumber(user[_0x5ec341(0x137)]))user[_0x5ec341(0x137)]=0x0;if(!isNumber(user[_0x5ec341(0x1b3)]))user[_0x5ec341(0x1b3)]=0x0;if(!isNumber(user[_0x5ec341(0x16e)]))user['lastkill']=0x0;if(!isNumber(user[_0x5ec341(0xec)]))user[_0x5ec341(0xec)]=0x0;if(!isNumber(user['lastnguli']))user[_0x5ec341(0xd7)]=0x0;if(!isNumber(user[_0x5ec341(0xf5)]))user[_0x5ec341(0xf5)]=0x0;if(!isNumber(user[_0x5ec341(0x1c2)]))user[_0x5ec341(0x1c2)]=0x0;if(!isNumber(user['lastwar']))user[_0x5ec341(0x1a6)]=0x0;if(!isNumber(user[_0x5ec341(0xd6)]))user[_0x5ec341(0xd6)]=0x0;if(!isNumber(user[_0x5ec341(0x197)]))user[_0x5ec341(0x197)]=0x0;if(!isNumber(user['lastduel']))user[_0x5ec341(0x195)]=0x0;if(!isNumber(user['lastjb']))user[_0x5ec341(0x107)]=0x0;if(!isNumber(user[_0x5ec341(0x192)]))user[_0x5ec341(0x192)]=0x0;if(!isNumber(user[_0x5ec341(0x134)]))user[_0x5ec341(0x134)]=0x0;if(!isNumber(user[_0x5ec341(0x1c8)]))user[_0x5ec341(0x1c8)]=0x0;if(!isNumber(user[_0x5ec341(0x185)]))user['lastngocok']=0x0;if(!isNumber(user[_0x5ec341(0x1bc)]))user['lastgift']=0x0;if(!isNumber(user[_0x5ec341(0xd4)]))user[_0x5ec341(0xd4)]=0x0;if(!isNumber(user[_0x5ec341(0x19b)]))user[_0x5ec341(0x19b)]=0x0;if(!isNumber(user[_0x5ec341(0xd8)]))user[_0x5ec341(0xd8)]=0x0;if(!isNumber(user[_0x5ec341(0x12b)]))user[_0x5ec341(0x12b)]=0x0;if(!isNumber(user['lastcodereg']))user[_0x5ec341(0xfc)]=0x0;if(!isNumber(user[_0x5ec341(0x145)]))user[_0x5ec341(0x145)]=0x0;if(!isNumber(user[_0x5ec341(0x10e)]))user[_0x5ec341(0x10e)]=0x0;if(!isNumber(user[_0x5ec341(0x19f)]))user[_0x5ec341(0x19f)]=0x0;if(!isNumber(user['lastmonthly']))user[_0x5ec341(0x1c3)]=0x0;if(!isNumber(user[_0x5ec341(0xf8)]))user[_0x5ec341(0xf8)]=0x0;if(!isNumber(user['lastturu']))user[_0x5ec341(0x19a)]=0x0;if(!isNumber(user[_0x5ec341(0x157)]))user[_0x5ec341(0x157)]=0x0;if(!isNumber(user[_0x5ec341(0x1b6)]))user[_0x5ec341(0x1b6)]=0x0;if(!isNumber(user[_0x5ec341(0x141)]))user[_0x5ec341(0x141)]=0x0;if(!(_0x5ec341(0x162)in user))user[_0x5ec341(0x162)]=![];if(!user[_0x5ec341(0x162)]){if(!(_0x5ec341(0xe3)in user))user['name']=m[_0x5ec341(0x1b2)]||_0x5ec341(0x136);if(!('gender'in user))user[_0x5ec341(0x119)]='';if(!(_0x5ec341(0x183)in user))user[_0x5ec341(0x183)]='';if(!(_0x5ec341(0xea)in user))user[_0x5ec341(0xea)]='';if(!isNumber(user['apel']))user[_0x5ec341(0x104)]=0x0;if(!isNumber(user[_0x5ec341(0xed)]))user[_0x5ec341(0xed)]=0x0;if(!isNumber(user['jeruk']))user[_0x5ec341(0x113)]=0x0;if(!isNumber(user[_0x5ec341(0x19d)]))user[_0x5ec341(0x19d)]=0x0;if(!isNumber(user[_0x5ec341(0x15a)]))user[_0x5ec341(0x15a)]=0x0;if(!isNumber(user[_0x5ec341(0xde)]))user['stroberi']=0x0;if(!isNumber(user[_0x5ec341(0x1b7)]))user['pisang']=0x0;if(!isNumber(user[_0x5ec341(0x199)]))user[_0x5ec341(0x199)]=0x0;if(!isNumber(user['emas']))user[_0x5ec341(0x16f)]=0x0;if(!isNumber(user['makanan']))user[_0x5ec341(0x17e)]=0x0;if(!isNumber(user[_0x5ec341(0x18c)]))user[_0x5ec341(0x18c)]=0x0;if(!isNumber(user[_0x5ec341(0x1a3)]))user[_0x5ec341(0x1a3)]=0x0;if(!isNumber(user[_0x5ec341(0x167)]))user['bibitapel']=0x0;if(!isNumber(user[_0x5ec341(0x15f)]))user['bibitmangga']=0x0;if(!isNumber(user[_0x5ec341(0xef)]))user[_0x5ec341(0xef)]=0x0;if(!isNumber(user['gardenboxs']))user[_0x5ec341(0xe5)]=0x0;if(!isNumber(user[_0x5ec341(0x126)]))user[_0x5ec341(0x126)]=-0x1;if(!isNumber(user[_0x5ec341(0xdd)]))user[_0x5ec341(0xdd)]=0x0;if(!isNumber(user[_0x5ec341(0x148)]))user[_0x5ec341(0x148)]=-0x1;}if(!isNumber(user[_0x5ec341(0x194)]))user[_0x5ec341(0x194)]=0x0;if(!user[_0x5ec341(0x1a9)])user[_0x5ec341(0x1a9)]=_0x5ec341(0xd5);if(!user[_0x5ec341(0x139)])user[_0x5ec341(0x139)]='[▒▒▒▒▒▒▒▒▒]';if(!user[_0x5ec341(0x1c1)])user[_0x5ec341(0x1c1)]='Newbie\x20㋡';if(!(_0x5ec341(0xf2)in user))user['autolevelup']=!![];if(!(_0x5ec341(0xf8)in user))user[_0x5ec341(0xf8)]=!![];}else global['db']['data'][_0x5ec341(0x140)][m[_0x5ec341(0x14c)]]={'premium':isPremium,'banned':![],'afkTime':-0x1,'pc':0x0,'afkReason':'','language':'id','limit':limitnya,'healt':0x64,'title':'','healtmonster':0x0,'haus':0x64,'laper':0x64,'tprem':0x0,'stamina':0x64,'level':0x0,'pasangan':'','exp':0x0,'coin':0x0,'atm':0x0,'tigame':0x32,'lastclaim':0x0,'money':0x3e8,'bank':0x3e8,'diamond':0x0,'iron':0x0,'pisang':0x0,'anggur':0x0,'mangga':0x0,'jeruk':0x0,'apel':0x0,'bibitpisang':0x0,'bibitanggur':0x0,'bibitmangga':0x0,'bibitjeruk':0x0,'bibitapel':0x0,'gardenboxs':0x0,'emas':0x0,'common':0x0,'boxs':0x0,'cupon':0x0,'uncommon':0x0,'mythic':0x0,'legendary':0x0,'rumahsakit':0x0,'fortress':0x0,'trofi':0x0,'rtrofi':_0x5ec341(0x182),'makanan':0x0,'troopcamp':0x0,'shield':0x0,'arlok':0x0,'ojekk':0x0,'korbanngocok':0x0,'as':0x0,'paus':0x0,'kepiting':0x0,'gurita':0x0,'cumi':0x0,'buntal':0x0,'dory':0x0,'lumba':0x0,'lobster':0x0,'hiu':0x0,'lele':0x0,'nila':0x0,'bawal':0x0,'udang':0x0,'ikan':0x0,'orca':0x0,'banteng':0x0,'harimau':0x0,'gajah':0x0,'kambing':0x0,'panda':0x0,'buaya':0x0,'kerbau':0x0,'sapi':0x0,'monyet':0x0,'babihutan':0x0,'babi':0x0,'ayam':0x0,'apel':0x14,'ayamb':0x0,'ayamg':0x0,'ssapi':0x0,'sapir':0x0,'leleb':0x0,'leleg':0x0,'esteh':0x0,'pet':0x0,'potion':0x0,'sampah':0x0,'armor':0x0,'kucing':0x0,'kucinglastclaim':0x0,'kuda':0x0,'kudalastclaim':0x0,'rubah':0x0,'rubahlastclaim':0x0,'anjing':0x0,'anjinglastclaim':0x0,'naga':0x0,'nagalastclaim':0x0,'griffin':0x0,'griffinlastclaim':0x0,'centaur':0x0,'centaurlastclaim':0x0,'serigala':0x0,'serigalalastclaim':0x0,'phonix':0x0,'phonixlastclaim':0x0,'makanannaga':0x0,'makananphonix':0x0,'makanancentaur':0x0,'makananserigala':0x0,'BannedReason':'','warn':0x0,'anakkucing':0x0,'anakkuda':0x0,'anakrubah':0x0,'anakanjing':0x0,'makananpet':0x0,'antispam':0x0,'antispamlastclaim':0x0,'kayu':0x0,'batu':0x0,'string':0x0,'umpan':0x0,'sword':0x0,'sworddurability':0x0,'pickaxe':0x0,'pickaxedurability':0x0,'fishingrod':0x0,'fishingroddurability':0x0,'lastadventure':0x0,'lastbanned':0x0,'lastopen':0x0,'lastkill':0x0,'lastnguli':0x0,'lastfishing':0x0,'lastdungeon':0x0,'lastduel':0x0,'lastmining':0x0,'lasthourly':0x0,'lasthunt':0x0,'lastweekly':0x0,'lastmonthly':0x0,'lastjb':0x0,'lastrob':0x0,'lastdaang':0x0,'lastngojek':0x0,'lastgrab':0x0,'lastngocok':0x0,'lastturu':0x0,'lastseen':0x0,'lastSetStatus':0x0,'registered':![],'apel':0x14,'mangga':0x0,'stroberi':0x0,'semangka':0x0,'jeruk':0x0,'semangka':0x0,'premiumTime':0x0,'job':_0x5ec341(0xd5),'lbars':_0x5ec341(0x18a),'role':_0x5ec341(0x1ae),'registered':![],'name':m['pushName']||_0x5ec341(0x136),'gender':'','hobi':'','serialNumber':'','age':-0x1,'premiumDate':0x0,'regTime':-0x1,'autolevelup':!![],'lastIstigfar':0x0};let chats=global['db'][_0x5ec341(0x125)][_0x5ec341(0x14e)][m[_0x5ec341(0x130)]];if(typeof chats!==_0x5ec341(0x1a5))db[_0x5ec341(0x125)]['chats'][m[_0x5ec341(0x130)]]={};if(chats){if(!(_0x5ec341(0xe3)in chats))chats['name']=groupName?groupName:'-';if(!(_0x5ec341(0x175)in chats))chats[_0x5ec341(0x175)]=!![];if(!('welcome'in chats))chats[_0x5ec341(0x120)]=!![];if(!('promote'in chats))chats[_0x5ec341(0xe2)]=!![];if(!(_0x5ec341(0x16a)in chats))chats[_0x5ec341(0x16a)]=!![];if(!(_0x5ec341(0xd9)in chats))chats['mute']=![];if(!('captionPay'in chats))chats[_0x5ec341(0x14d)]='';if(!(_0x5ec341(0xe1)in chats))chats[_0x5ec341(0xe1)]=![];if(!(_0x5ec341(0xf7)in chats))chats[_0x5ec341(0xf7)]=![];if(!(_0x5ec341(0x1aa)in chats))chats[_0x5ec341(0x1aa)]=![];if(!(_0x5ec341(0x181)in chats))chats['antionce']=![];if(!(_0x5ec341(0x176)in chats))chats['setWelcome']='';if(!(_0x5ec341(0x132)in chats))chats[_0x5ec341(0x132)]='';if(!('setPromote'in chats))chats['setPromote']='';if(!(_0x5ec341(0x18e)in chats))chats[_0x5ec341(0x18e)]='';if(!(_0x5ec341(0x188)in chats))chats[_0x5ec341(0x188)]='';if(!(_0x5ec341(0xda)in chats))chats[_0x5ec341(0xda)]='';if(!(_0x5ec341(0x163)in chats))chats[_0x5ec341(0x163)]='';if(!isNumber(chats['expired']))chats[_0x5ec341(0x102)]=0x0;}else global['db']['data']['chats'][m[_0x5ec341(0x130)]]={'name':groupName?groupName:'-','goodbye':!![],'welcome':!![],'promote':!![],'demote':!![],'mute':![],'captionPay':'','nsfw':![],'sewa':![],'antilink':![],'antionce':![],'setWelcome':'','setLeave':'','setPromote':'','setDemote':'','setProses':'','setDone':'','paygc':'','expired':0x0};let setting=global['db'][_0x5ec341(0x125)][_0x5ec341(0x100)][botNumber];if(typeof setting!==_0x5ec341(0x1a5))db[_0x5ec341(0x125)][_0x5ec341(0x100)][botNumber]={};if(setting){if(!(_0x5ec341(0x13b)in setting))setting['autoread']=autoread;if(!(_0x5ec341(0x189)in setting))setting[_0x5ec341(0x189)]=anticall;if(!(_0x5ec341(0x14b)in setting))setting[_0x5ec341(0x14b)]=typemenu;if(!(_0x5ec341(0x114)in setting))setting['typemenu2']=typemenu2;if(!(_0x5ec341(0x184)in setting))setting[_0x5ec341(0x184)]=autobio;if(!(_0x5ec341(0x1a7)in setting))setting[_0x5ec341(0x1a7)]=![];if(!(_0x5ec341(0x10f)in setting))setting[_0x5ec341(0x10f)]=userRegister;if(!(_0x5ec341(0x1c9)in setting))setting[_0x5ec341(0x1c9)]=![];if(!(_0x5ec341(0x15c)in setting))setting[_0x5ec341(0x15c)]=![];if(!(_0x5ec341(0xf1)in setting))setting[_0x5ec341(0xf1)]=autoblok212;if(!(_0x5ec341(0x128)in setting))setting[_0x5ec341(0x128)]=![];if(!(_0x5ec341(0xf2)in setting))setting[_0x5ec341(0xf2)]=autolevelup;}else global['db'][_0x5ec341(0x125)][_0x5ec341(0x100)][botNumber]={'autoread':autoread,'anticall':anticall,'typemenu':typemenu,'typemenu2':typemenu2,'autobio':autobio,'available':![],'userRegister':userRegister,'composing':![],'recording':![],'autoblok':autoblok212,'autorespond':![],'autolevelup':autolevelup};}catch(_0x1e4abb){console[_0x5ec341(0x19e)](_0x1e4abb);}
      setInterval(() => {
         fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
      }, 15 * 1000)

      let addLimit = db.data.users[m.sender].limit - 1

      for (let jid of mentionUser) {
         let user = db.data.users[jid]
         if (!user) continue
         let afkTime = user.afkTime
         if (!afkTime || afkTime < 0) continue
         let reason = user.afkReason || ''
         reply(`Jangan tag dia!
Dia sedang AFK ${reason ? '\nReason : ' + reason : 'Reason : Nothing'}
Waktu : ${clockString(new Date - afkTime)}
`.trim())
      }
      if (db.data.users[m.sender].afkTime > -1) {
         let user = db.data.users[m.sender]
         reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
         user.afkTime = -1
         user.afkReason = ''
      }


      const {
         indonesia,
         english,
         spanyol
      } = require(`./language`)
      let lang;
      if (m.sender.startsWith('62')) {
         lang = indonesia;
      } else if (m.sender.startsWith('54' || "591" || "56" || "57" || "506" || "53" || "593" || "503" || "502" || "504" || "52" || "507" || "595" || "51" || "34" || "598" || "58")) {
         lang = spanyol;
      } else {
         lang = english;
      }

      if (m.isGroup && !m.key.fromMe && (isAntiLink || auto_antilink) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`https://chat.whatsapp.com`)) {
            if (!isBotAdmins) return
            alpha.sendMessage(m.chat, {
               text: lang.KickAh(groupMetadata.subject)
            }, {
               quoted: m
            })
            //let gclink = (`https://chat.whatsapp.com/` + await alpha.groupInviteCode(m.chat))
            //let isLinkThisGc = new RegExp(gclink, 'i')
            //let isgclink = isLinkThisGc.test(m.text)
            //if (isgclink) return reply(lang.GjdKick())
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
         }
      }
      if (m.isGroup && (isBadword || auto_badword) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         let listbad = []
         for (let boo of badword) {
            listbad.push(boo)
         }
         for (let boo of badword_list) {
            listbad.push(boo)
         }
         for (let kasar of listbad) {
            if (budy.toLowerCase().includes(kasar)) {
               if (isCountKasar(m.sender, senbadword)) {
                  if (!isBotAdmins) return
                  await reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                  await alpha.sendMessage(m.chat, {
                     delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                     }
                  })
                  alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                  delCountKasar(m.sender, senbadword)
               } else {
                  addCountKasar(m.sender, senbadword)
                  await reply(`Kamu terdeteksi berkata kasar\n5× berkata kasar akan ter kick down`)
                  await alpha.sendMessage(m.chat, {
                     delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                     }
                  })
               }
            }
         }
      }
      if (m.isGroup && (isBadword2 || auto_badword2) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         let listbad = []
         for (let boo of badword) {
            listbad.push(boo)
         }
         for (let boo of badword_list) {
            listbad.push(boo)
         }
         for (let kasar of listbad) {
            if (budy.toLowerCase().includes(kasar)) {
               if (!isBotAdmins) return
               await alpha.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     fromMe: false,
                     id: m.key.id,
                     participant: m.key.participant
                  }
               })
            }
         }
      }
      if (m.isGroup && !m.key.fromMe && (isAntiwame || auto_antiwame) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`wa.me`)) {
            if (!isBotAdmins) return
            alpha.sendMessage(m.chat, {
               text: lang.KickAh(groupMetadata.subject)
            }, {
               quoted: m
            })
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
         }
      }
      if (m.isGroup && !m.key.fromMe && (isAntiLink2 || auto_antilink2) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`https://chat.whatsapp.com`)) {
            if (!isBotAdmins) return
            //let gclink = (`https://chat.whatsapp.com/` + await alpha.groupInviteCode(m.chat))
            //let isLinkThisGc = new RegExp(gclink, 'i')
            //let isgclink = isLinkThisGc.test(m.text)
            //if (isgclink) return //reply(lang.GjdKick())
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
         }
      }
      if (m.isGroup && !m.key.fromMe && (isAntiwame2 || auto_antiwame2) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`wa.me`)) {
            if (!isBotAdmins) return
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
         }
      }

      if (!isCreator && !m.isGroup && groupOnly) {
         return
      }

      if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
         const jawab_salam = [
            'Wa\'alaikumusalam',
            'Wa\'alaikumusalam wb',
            'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
         ]
         return reply(randomArr(jawab_salam))
      }

      _prem.expiredCheck(alpha, premium)

      let cron = require('node-cron')
      cron.schedule('00 23 * * *', () => {
         let user = Object.keys(global.db.data.users)
         for (let jid of user) {
            let limitUser = db.data.users[jid].premium ? global.limitawal.premium : global.limitawal.free
            global.db.data.users[jid].limit = limitUser
         }
         console.log('Reseted Limit')
      }, {
         scheduled: true,
         timezone: "Asia/Jakarta"
      })

      if (!m.key.fromMe && isCmd && db.data.users[m.sender].banned) {
         if (!(new Date - db.data.users[m.sender].lastbanned < 3600000)) {
            let user = db.data.users[m.sender]
            user.lastbanned = new Date * 1
            await alpha.sendMessage(m.chat, {
               text: lang.getBan(ownernomer)
            }, {
               quoted: m
            })
         }
         return
      }

      // Public & Self
      if (!alpha.public) {
         if (!m.key.fromMe && !isCreator) return
      }

      // Push Message To Console
      if (isCmd) {
         console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? groupName : 'Private Chat', m.chat))
      }

      const sendFileFromUrl = async (from, url, caption, mek, men) => {
         let mime = '';
         let res = await axios.head(url)
         mime = res.headers['content-type']
         if (mime.split("/")[1] === "gif") {
            return alpha.sendMessage(from, {
               video: await getBuffer(url),
               caption: caption,
               gifPlayback: true,
               mentions: men ? men : [],
               mimetype: 'video/mp4'
            }, {
               quoted: m
            })
         }
         let type = mime.split("/")[0] + "Message"
         if (mime === "application/pdf") {
            return alpha.sendMessage(m.chat, {
               document: await getBuffer(url),
               mimetype: 'application/pdf',
               caption: caption,
               mentions: men ? men : []
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "image") {
            return alpha.sendMessage(m.chat, {
               image: await getBuffer(url),
               caption: caption,
               mentions: men ? men : []
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "video") {
            return alpha.sendMessage(m.chat, {
               video: await getBuffer(url),
               caption: caption,
               mentions: men ? men : [],
               mimetype: 'video/mp4'
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "audio") {
            return alpha.sendMessage(m.chat, {
               audio: await getBuffer(url),
               caption: caption,
               mentions: men ? men : [],
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
         }
      }

      /*if(autorecording){
      	if(autorecording== true) return
      	await alpha.sendPresenceUpdate('recording', m.chat)
      	} else if(autoketik){
      		if(autoketik == true) return
      		await alpha.sendPresenceUpdate('composing', m.chat)
      		} else if(available){
      			if(available == true) return
      			alpha.sendPresenceUpdate('available', m.chat)
      			}*/


      //FUN

      if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
         kuis = true
         jawaban = kuismath[m.sender.split('@')[0]][0]
         hadiah = kuismath[m.sender.split('@')[0]][1]
         if (budy.toLowerCase() == jawaban) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.math medium',
               buttonText: {
                  displayText: 'Kuis Math'
               },
               type: 1
            }], ` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+${hadiah} XP` + `\n\nKirim perintah .math untuk bermain lagi 🎮`, `© ${ownername}`, m)
            db.data.users[m.sender].exp += hadiah
            delete kuismath[m.sender.split('@')[0]]
         } else reply(lang.JwbErr())
      }
      if (('family100' + m.chat in _family100) && !isCmd) {
         kuis = true
         let room = _family100['family100' + m.chat]
         let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
         let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
         if (!isSurender) {
            let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
            if (room.terjawab[index]) return !0
            room.terjawab[index] = m.sender
         }
         let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
         let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
         alpha.sendTextWithMentions(m.chat, caption, m)
            .then(mes => {
               return _family100['family100' + m.chat].pesan = mesg
            }).catch(_ => _)
         if (isWin || isSurender) delete _family100['family100' + m.chat]
      }
      if (tebakgambar[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakgambar[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakgambar',
                  buttonText: {
                     displayText: lang.TbGam()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbGam(), tebakgambar[m.chat][2]) + `\n\nKirim perintah .tebakgambar untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakgambar[m.chat][3])
               delete tebakgambar[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tega untuk bantuan dan .ytega untuk menyerah 🎮`, '© ' + ownername, '.tega', 'Hint', '.ytega', 'Nyerah', m)
         }
      }
      if (tebakkata[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkata[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkata',
                  buttonText: {
                     displayText: lang.TbKa()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKa(), tebakkata[m.chat][2]) + `\n\nKirim perintah .tebakkata untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkata[m.chat][3])
               delete tebakkata[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teka untuk bantuan dan .yteka untuk menyerah 🎮`, '© ' + ownername, '.teka', 'Hint', '.yteka', 'Nyerah', m)
         }
      }
      if (tebakbendera[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
            jawaban = json.name.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakbendera[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakbendera',
                  buttonText: {
                     displayText: lang.TbBe()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbBe(), tebakbendera[m.chat][2]) + `\n\nKirim perintah .tebakbendera untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakbendera[m.chat][3])
               delete tebakbendera[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tebe untuk bantuan dan .ytebe untuk menyerah 🎮`, '© ' + ownername, '.tebe', 'Hint', '.ytebe', 'Nyerah', m)
         }
      }
      if (caklontong[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == caklontong[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += caklontong[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.caklontong',
                  buttonText: {
                     displayText: lang.TbCak()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbCak(), caklontong[m.chat][2]) + `\n\nKirim perintah .caklontong untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(caklontong[m.chat][3])
               delete caklontong[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .telo untuk bantuan dan .ytelo untuk menyerah 🎮`, '© ' + ownername, '.telo', 'Hint', '.ytelo', 'Nyerah', m)
         }
      }
      if (susunkata[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == susunkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += susunkata[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.susunkata',
                  buttonText: {
                     displayText: lang.TbSu()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbSu(), susunkata[m.chat][2]) + `\n\nKirim perintah .susunkata untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(susunkata[m.chat][3])
               delete susunkata[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tesuka untuk bantuan dan .ytesuka untuk menyerah 🎮`, '© ' + ownername, '.tesuka', 'Hint', '.ytesuka', 'Nyerah', m)
         }
      }
      if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkalimat[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkalimat',
                  buttonText: {
                     displayText: lang.TbAt()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbAt(), tebakkalimat[m.chat][2]) + `\n\nKirim perintah .tebakkalimat untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkalimat[m.chat][3])
               delete tebakkalimat[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tekatu untuk bantuan dan .ytekatu untuk menyerah 🎮`, '© ' + ownername, '.tekatu', 'Hint', '.ytekatu', 'Nyerah', m)
         }
      }
      if (siapaaku[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == siapaaku[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += siapaaku[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaksiapa',
                  buttonText: {
                     displayText: lang.TbSi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbSi(), siapaaku[m.chat][2]) + `\n\nKirim perintah .tebaksiapa untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(siapaaku[m.chat][3])
               delete siapaaku[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tesi untuk bantuan dan .ytesi untuk menyerah 🎮`, '© ' + ownername, '.tesi', 'Hint', '.ytesi', 'Nyerah', m)
         }
      }
      if (tekateki[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tekateki[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tekateki[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tekateki',
                  buttonText: {
                     displayText: lang.Tbte()
                  },
                  type: 1
               }], lang.JwbTrue(lang.Tbte(), tekateki[m.chat][2]) + `\n\nKirim perintah .tekateki untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tekateki[m.chat][3])
               delete tekateki[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tete untuk bantuan dan .ytete untuk menyerah 🎮`, '© ' + ownername, '.tete', 'Hint', '.ytete', 'Nyerah', m)
         }
      }
      if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
            jawaban = json.title.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkabupaten[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkabupaten',
                  buttonText: {
                     displayText: lang.TbEn()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbEn(), tebakkabupaten[m.chat][2]) + `\n\nKirim perintah .tebakkabupaten untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkabupaten[m.chat][3])
               delete tebakkabupaten[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tekabu untuk bantuan dan .ytekabu untuk menyerah 🎮`, '© ' + ownername, '.tekabu', 'Hint', '.ytekabu', 'Nyerah', m)
         }
      }
      if (tebakkimia[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
            jawaban = json.unsur.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkimia[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkimia',
                  buttonText: {
                     displayText: lang.TbKi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKi(), tebakkimia[m.chat][2]) + `\n\nKirim perintah .tebakkimia untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkimia[m.chat][3])
               delete tebakkimia[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teki untuk bantuan dan .yteki untuk menyerah 🎮`, '© ' + ownername, '.teki', 'Hint', '.yteki', 'Nyerah', m)
         }
      }
      if (tebaklirik[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebaklirik[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaklirik',
                  buttonText: {
                     displayText: lang.TbLi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbLi(), tebaklirik[m.chat][2]) + `\n\nKirim perintah .tebaklirik untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebaklirik[m.chat][3])
               delete tebaklirik[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teli untuk bantuan dan .yteli untuk menyerah 🎮`, '© ' + ownername, '.teli', 'Hint', '.yteli', 'Nyerah', m)
         }
      }
      if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebaktebakan[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaktebakan',
                  buttonText: {
                     displayText: lang.TbKan()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKan(), tebaktebakan[m.chat][2]) + `\n\nKirim perintah .tebaktebakan untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebaktebakan[m.chat][3])
               delete tebaktebakan[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teteb untuk bantuan dan .yteteb untuk menyerah 🎮`, '© ' + ownername, '.teteb', 'Hint', '.yteteb', 'Nyerah', m)
         }
      }

      //await alpha.sendPresenceUpdate('available', m.chat)
(function(_0x216015,_0x45ed14){const _0x292419=_0x216015();function _0x1704ea(_0x4920a5,_0x18a632,_0x9b1989,_0x39d81f,_0x35840e){return _0x59aa(_0x4920a5- -0x305,_0x35840e);}function _0x2416bd(_0xe3caa1,_0x1803dd,_0x5a023d,_0x28d724,_0x1d4c0f){return _0x59aa(_0x1803dd- -0x24d,_0x5a023d);}function _0x582c25(_0x1cb4f2,_0x477086,_0x383c12,_0x1c20bb,_0x202955){return _0x59aa(_0x477086-0x148,_0x383c12);}function _0xb16104(_0x1a1411,_0x135195,_0x4fdff9,_0x3bac28,_0x4f47ef){return _0x59aa(_0x4f47ef- -0x309,_0x135195);}function _0x421a5d(_0x5939a3,_0x5aca40,_0x417a36,_0x276499,_0x31dd98){return _0x59aa(_0x31dd98-0x2d5,_0x5aca40);}while(!![]){try{const _0x362701=-parseInt(_0xb16104(-0x174,-0x16e,-0x1c4,-0x180,-0xea))/(-0x250c+-0x1f31+0x443e)*(parseInt(_0xb16104(-0x31b,-0x17d,-0x266,-0x14e,-0x231))/(0x14d*0x17+-0xfd5+0x6a*-0x22))+parseInt(_0x2416bd(-0x50,-0x23,0x91,-0x100,0x71))/(0x758+-0x2a5*-0x2+-0xc9f)+-parseInt(_0x2416bd(-0x100,-0x2f,0x1d,-0x5e,-0x4a))/(0x4a*-0x1+-0x1066+-0x10b4*-0x1)+parseInt(_0xb16104(-0xda,-0x140,-0xa4,-0x1cb,-0x112))/(-0x755*0x2+0x17*0x89+0x260)+parseInt(_0x1704ea(-0x86,-0xce,-0xbd,-0x84,-0x14a))/(-0x1be0+0x1*-0x1a6b+0x2d*0x135)+parseInt(_0xb16104(-0x35,-0xd6,-0x134,-0x100,-0x129))/(-0x2442+0x101*0x25+-0xdc)*(parseInt(_0x1704ea(-0xab,-0x8f,-0x23,-0x107,-0x12a))/(-0x385*-0x7+0x25b*-0x3+0x8c5*-0x2))+parseInt(_0x2416bd(-0x10d,-0xb9,-0x19d,-0x69,-0x81))/(-0x2*-0x779+-0x22e3+0x13fa)*(-parseInt(_0x582c25(0x272,0x249,0x246,0x33f,0x291))/(0x5f3*0x6+-0x19b3*-0x1+-0x71*0x8b));if(_0x362701===_0x45ed14)break;else _0x292419['push'](_0x292419['shift']());}catch(_0x33a420){_0x292419['push'](_0x292419['shift']());}}}(_0x1109,-0x1*-0x58507+0x107060+-0x7854a));const _0xc554c5=(function(){const _0x160270={};function _0xaad003(_0x1d7009,_0x78fee2,_0x46ec13,_0x5e9880,_0x2f2aba){return _0x59aa(_0x46ec13-0x2b0,_0x1d7009);}_0x160270[_0x24ace3(-0x4e,-0x94,-0x10d,-0xfd,-0x107)]=_0x24ace3(0xc8,0x2d,0xcb,-0x92,0xab);function _0x24ace3(_0x3fb8d0,_0x141dcb,_0x438c41,_0x37327c,_0x21dcb8){return _0x59aa(_0x141dcb- -0x171,_0x438c41);}function _0x957cf9(_0x1665d8,_0x42eaa7,_0x5bb76e,_0x533da6,_0x469ac4){return _0x59aa(_0x42eaa7- -0x1bc,_0x469ac4);}_0x160270[_0x24ace3(0x12,0x100,0x95,0xb5,0x1ea)]=function(_0xa5fdc8,_0x5a8e52){return _0xa5fdc8!==_0x5a8e52;};function _0xdc7a5a(_0x449227,_0x3af19e,_0x47a85f,_0x4bf409,_0x1727c2){return _0x59aa(_0x449227- -0x35f,_0x3af19e);}_0x160270[_0x24ace3(-0x91,-0x5e,-0xd6,0x1a,-0x90)]=_0xaad003(0x479,0x36e,0x3ad,0x2c9,0x3dc),_0x160270[_0x3693a8(-0x72,0x4b,0xd1,0xa,0x9b)]=_0xdc7a5a(-0x137,-0x1f1,-0x1a9,-0x68,-0x202),_0x160270[_0x24ace3(0x8c,0x8,-0x15,-0x9d,0x6)]=function(_0x8654f1,_0x3b4b15){return _0x8654f1!==_0x3b4b15;},_0x160270[_0xaad003(0x391,0x453,0x3a4,0x3bc,0x2d5)]=_0x3693a8(-0x103,-0x9f,0xe,-0x78,-0x72),_0x160270[_0x24ace3(0x182,0x12b,0xba,0xc5,0x179)]=_0x24ace3(-0xf9,-0x2b,-0xfa,0xa4,-0x122),_0x160270[_0xaad003(0x4e0,0x432,0x453,0x3c3,0x38a)]=function(_0x49bf30,_0x521454){return _0x49bf30===_0x521454;},_0x160270[_0xaad003(0x56f,0x3a3,0x483,0x417,0x549)]=_0x957cf9(-0xbe,-0xb6,-0x1a8,-0x11a,-0xf0),_0x160270[_0x3693a8(0x4c,-0x47,-0x17,0x72,-0x51)]=_0x3693a8(-0x7c,-0xcd,-0x1cc,-0x118,-0x19f);const _0x322b0d=_0x160270;let _0x19c443=!![];function _0x3693a8(_0x225323,_0x187c92,_0x19bb81,_0x485af9,_0x27b05c){return _0x59aa(_0x485af9- -0x23b,_0x27b05c);}return function(_0x4a29dd,_0x58c54c){function _0x321a35(_0xb39f68,_0x4df218,_0x3564be,_0x5c6563,_0x477841){return _0x24ace3(_0xb39f68-0x119,_0x477841-0x41f,_0x3564be,_0x5c6563-0xc8,_0x477841-0xdf);}function _0x3b9196(_0x3604d6,_0x1a6aba,_0x4ee9aa,_0x2384bc,_0x53f9aa){return _0xaad003(_0x1a6aba,_0x1a6aba-0x1ee,_0x2384bc- -0x38,_0x2384bc-0x9e,_0x53f9aa-0xdb);}const _0xf0128a={'zRuXs':function(_0x22a2e1,_0x347149){function _0x4f47a5(_0x1ccec5,_0x52fb4b,_0x54aab9,_0x19ad52,_0x5ad213){return _0x59aa(_0x54aab9-0x331,_0x5ad213);}return _0x322b0d[_0x4f47a5(0x52a,0x652,0x5a2,0x59b,0x637)](_0x22a2e1,_0x347149);},'igJLZ':_0x322b0d[_0x312354(0x22e,0x224,0x1b9,0x13d,0x59)],'mqxoQ':_0x322b0d[_0x312354(0x1aa,0x2c5,0x1df,0x26f,0x2ac)],'dJOIi':function(_0xde8864,_0x3a0678){function _0x30eb53(_0x15177d,_0x439255,_0x27aae8,_0x9ab434,_0x5dfdad){return _0x321a35(_0x15177d-0x158,_0x439255-0x1df,_0x5dfdad,_0x9ab434-0x15f,_0x9ab434- -0x5c1);}return _0x322b0d[_0x30eb53(-0x137,-0x137,-0x177,-0x19a,-0x245)](_0xde8864,_0x3a0678);},'skJJi':_0x322b0d[_0x321a35(0x37b,0x35b,0x2b6,0x366,0x3a2)],'DFqOR':_0x322b0d[_0xcdfb39(0x4a1,0x408,0x40d,0x3d0,0x470)]};function _0xcef4df(_0x5264e6,_0x4478ad,_0x2581e3,_0x2e1a75,_0x2bc6c4){return _0x957cf9(_0x5264e6-0x69,_0x4478ad-0x57d,_0x2581e3-0x1be,_0x2e1a75-0x110,_0x2e1a75);}function _0xcdfb39(_0x1b9ef1,_0x4478e2,_0x32e159,_0x3c9bcd,_0x6b880d){return _0x3693a8(_0x1b9ef1-0x4e,_0x4478e2-0xf4,_0x32e159-0x169,_0x32e159-0x3ac,_0x1b9ef1);}function _0x312354(_0x5899cb,_0x5305c3,_0x796821,_0xfd4a92,_0x409118){return _0x24ace3(_0x5899cb-0xde,_0xfd4a92-0x19b,_0x409118,_0xfd4a92-0xa,_0x409118-0x81);}if(_0x322b0d[_0xcdfb39(0x30d,0x377,0x314,0x2d1,0x2db)](_0x322b0d[_0x312354(0x211,0x1f8,0x193,0x1fd,0x14a)],_0x322b0d[_0x3b9196(0x460,0x44a,0x487,0x525,0x583)]))return _0x5e238f[_0xcdfb39(0x356,0x230,0x296,0x33b,0x32e)+_0xcef4df(0x5a4,0x5e1,0x504,0x6bf,0x542)+_0x3b9196(0x4e3,0x559,0x403,0x49a,0x4de)+'us'](_0x44b44e[_0xcdfb39(0x24f,0x3d5,0x333,0x3d7,0x2b0)+'r'],_0x322b0d[_0xcef4df(0x45b,0x49e,0x4a4,0x516,0x42c)]);else{const _0x18d691=_0x19c443?function(){function _0x42f863(_0x5d20d7,_0xc2db1d,_0x36a51f,_0xab01fa,_0x2cfe21){return _0x312354(_0x5d20d7-0x29,_0xc2db1d-0x17b,_0x36a51f-0xe1,_0x2cfe21- -0xdb,_0xab01fa);}function _0x375da4(_0x532412,_0x409d07,_0x466216,_0x352ca7,_0x258239){return _0xcef4df(_0x532412-0x13c,_0x466216- -0xc6,_0x466216-0x124,_0x409d07,_0x258239-0x1c4);}function _0x321ac7(_0x440903,_0x53559b,_0x481ba3,_0x26b1e6,_0x22aa00){return _0xcdfb39(_0x481ba3,_0x53559b-0x11c,_0x53559b-0x87,_0x26b1e6-0x20,_0x22aa00-0xea);}function _0xf8d953(_0x9f4cd6,_0x2841c2,_0x85eb0e,_0x486881,_0xdf9d89){return _0x3b9196(_0x9f4cd6-0x3f,_0x85eb0e,_0x85eb0e-0x17f,_0x486881-0x163,_0xdf9d89-0x2d);}function _0x353749(_0x5681f3,_0x1defd2,_0x507207,_0x37b535,_0x2b9725){return _0xcef4df(_0x5681f3-0x5c,_0x2b9725- -0x25b,_0x507207-0x1d2,_0x507207,_0x2b9725-0x9b);}if(_0xf0128a[_0x42f863(0x10f,0xea,0xf5,0x9e,0x15f)](_0xf0128a[_0x42f863(0x85,0x20e,0x8f,0x47,0x13a)],_0xf0128a[_0x42f863(0xc,0xbd,0x177,0xa,0x91)])){if(_0x58c54c){if(_0xf0128a[_0x321ac7(0x3f1,0x39a,0x349,0x2be,0x31a)](_0xf0128a[_0x353749(0x2f5,0x31c,0x3c9,0x30d,0x317)],_0xf0128a[_0x42f863(0x150,0x8c,-0x91,0xef,0x64)])){const _0x1cb4eb=_0x58c54c[_0x42f863(0x1de,0xc3,0xe0,0x149,0x138)](_0x4a29dd,arguments);return _0x58c54c=null,_0x1cb4eb;}else return!![];}}else{if(_0x58c17b){const _0x258593=_0x65a12[_0x353749(0x40c,0x368,0x35a,0x396,0x34f)](_0x964851,arguments);return _0x579671=null,_0x258593;}}}:function(){};return _0x19c443=![],_0x18d691;}};}()),_0x4035f8=_0xc554c5(this,function(){const _0x4e39a0={};_0x4e39a0[_0x319ce3(-0x9,0x35,-0xf4,-0x5b,-0xc7)]=_0x2991dd(-0x1eb,-0x218,-0xf5,-0x15e,-0x185)+_0x30ad85(0xba,0x1cb,0x156,0x22f,0xd0)+'+$';function _0x2991dd(_0x2c7da7,_0x2ef153,_0xd46831,_0x28ee5c,_0x3083ed){return _0x59aa(_0x3083ed- -0x3ba,_0x2c7da7);}function _0x1e4c3d(_0x1a3fe6,_0xa548db,_0x3c336a,_0x3581a4,_0x16b70a){return _0x59aa(_0xa548db- -0x5c,_0x1a3fe6);}function _0x35d05e(_0x334f84,_0x347812,_0x47d9c1,_0x22b958,_0x182ac3){return _0x59aa(_0x347812-0x279,_0x22b958);}const _0x4d9254=_0x4e39a0;function _0x319ce3(_0xce7221,_0x5c67d1,_0x3431e0,_0x2b8f71,_0x356d66){return _0x59aa(_0xce7221- -0x149,_0x356d66);}function _0x30ad85(_0x48c2f1,_0x3fd78c,_0x25e1f6,_0x1472bf,_0x4542ff){return _0x59aa(_0x25e1f6- -0x14b,_0x4542ff);}return _0x4035f8[_0x2991dd(-0x131,-0x203,-0x14c,-0x1a3,-0x1ea)+_0x319ce3(0xf0,0x7f,0xa3,0x4e,0x1df)]()[_0x319ce3(0x53,-0x27,0x33,0x24,0x6e)+'h'](_0x4d9254[_0x2991dd(-0x254,-0x315,-0x310,-0x2dc,-0x27a)])[_0x35d05e(0x52d,0x449,0x3ba,0x463,0x38e)+_0x2991dd(-0x1eb,-0x267,-0xcd,-0x250,-0x181)]()[_0x2991dd(-0x288,-0x285,-0x2fe,-0x31f,-0x22c)+_0x1e4c3d(0xb2,0xba,0x199,0x17f,0x34)+'r'](_0x4035f8)[_0x30ad85(0x13c,-0x40,0x51,0x2d,0xcf)+'h'](_0x4d9254[_0x30ad85(0x2,0xa7,-0xb,-0xc5,0xd3)]);});_0x4035f8();const _0xf2354b=(function(){const _0xb10ded={};function _0x1a7dc3(_0x203ab9,_0x26c425,_0x49cd1e,_0x3d6caa,_0x39ce94){return _0x59aa(_0x49cd1e-0x382,_0x39ce94);}_0xb10ded[_0x1a7dc3(0x526,0x559,0x529,0x517,0x511)]=function(_0x4f9b7c,_0x49435b){return _0x4f9b7c!==_0x49435b;};function _0x430e65(_0x4cecae,_0x545778,_0x2eead9,_0x30cc48,_0x43f055){return _0x59aa(_0x4cecae-0xe,_0x43f055);}_0xb10ded[_0x1a7dc3(0x663,0x70d,0x62c,0x564,0x5fb)]=_0x1a7dc3(0x46d,0x493,0x4ed,0x4dc,0x519);function _0x1e0f72(_0x4d4f51,_0x5833d6,_0x2a61a0,_0x863f23,_0x570f06){return _0x59aa(_0x863f23- -0x2f5,_0x2a61a0);}_0xb10ded[_0x1a7dc3(0x61d,0x67e,0x636,0x728,0x600)]=function(_0x1e4eb2,_0x56ee75){return _0x1e4eb2!==_0x56ee75;};function _0x1aa86f(_0x18ef45,_0x296f03,_0x3c275f,_0x1028b8,_0x340c67){return _0x59aa(_0x1028b8- -0x1b1,_0x296f03);}function _0x56d1c9(_0x2bf909,_0x5676e9,_0x58e8ca,_0x5bc6fb,_0x38c82b){return _0x59aa(_0x38c82b- -0x326,_0x2bf909);}_0xb10ded[_0x1a7dc3(0x563,0x4c6,0x4d4,0x5a2,0x436)]=_0x56d1c9(-0x1c2,-0x101,-0x207,-0x163,-0x18d),_0xb10ded[_0x1aa86f(0x130,0x3a,0x143,0xa3,0xb6)]=_0x430e65(0x120,0x58,0x198,0x154,0x1d8),_0xb10ded[_0x1e0f72(-0x17e,0x2,-0x75,-0xdd,-0xba)]=_0x1e0f72(-0x108,-0xd5,-0x109,-0x14f,-0x182);const _0x46df9e=_0xb10ded;let _0x1f9dbc=!![];return function(_0x5daaef,_0x255e24){function _0x3bd38d(_0x4e3261,_0x5f505a,_0x4b128e,_0x394cac,_0x2a2108){return _0x430e65(_0x4b128e- -0x54,_0x5f505a-0xdb,_0x4b128e-0x87,_0x394cac-0x140,_0x394cac);}function _0x7c5a7b(_0x422d19,_0x5e7610,_0x678fdb,_0x4b2eb0,_0x2fa727){return _0x430e65(_0x422d19- -0x291,_0x5e7610-0x17f,_0x678fdb-0x1cd,_0x4b2eb0-0x145,_0x678fdb);}function _0x3de2d9(_0x2d965e,_0x5f4185,_0x539f83,_0x3e3d74,_0x4b866c){return _0x56d1c9(_0x4b866c,_0x5f4185-0xc9,_0x539f83-0x33,_0x3e3d74-0x12c,_0x3e3d74-0x591);}function _0x4e2316(_0x233523,_0x4ed2c8,_0x33b5fe,_0x36735b,_0x1a7205){return _0x1a7dc3(_0x233523-0x108,_0x4ed2c8-0x145,_0x36735b- -0x553,_0x36735b-0xb6,_0x233523);}function _0x1cef95(_0x46acff,_0x597182,_0x5bd401,_0x42df8a,_0xdb25dc){return _0x430e65(_0x5bd401-0x235,_0x597182-0x5c,_0x5bd401-0x38,_0x42df8a-0xf6,_0x42df8a);}if(_0x46df9e[_0x7c5a7b(0x31,0x3,-0xaa,-0x2e,-0x30)](_0x46df9e[_0x3bd38d(0x2fc,0x2fe,0x20e,0x20f,0x2d4)],_0x46df9e[_0x7c5a7b(-0x6b,-0x7a,0x16,-0x136,-0x77)])){const _0x4e7623=_0x1f9dbc?function(){function _0x400e65(_0x4094ae,_0x3d19a3,_0x2261fc,_0x193951,_0x332cb1){return _0x1cef95(_0x4094ae-0xb8,_0x3d19a3-0x17c,_0x193951- -0x478,_0x4094ae,_0x332cb1-0x9f);}function _0x17976c(_0x2ec57a,_0x24c5c5,_0x446636,_0x5725c2,_0x3c3be2){return _0x7c5a7b(_0x3c3be2-0x139,_0x24c5c5-0x1ca,_0x5725c2,_0x5725c2-0x126,_0x3c3be2-0x136);}function _0x8cc5f2(_0x44a35b,_0x306d16,_0x498edc,_0xbcf075,_0x38321){return _0x7c5a7b(_0x44a35b-0x71,_0x306d16-0x94,_0x306d16,_0xbcf075-0x1d8,_0x38321-0xbe);}function _0x5a704f(_0x5b4647,_0x139802,_0x486dcb,_0xabbb08,_0x52f591){return _0x7c5a7b(_0x5b4647-0x33,_0x139802-0x1f2,_0xabbb08,_0xabbb08-0x85,_0x52f591-0xa5);}function _0x198da9(_0x56e9c3,_0xc1386b,_0x379d53,_0x91fb03,_0xb4cfe){return _0x3bd38d(_0x56e9c3-0x1df,_0xc1386b-0x18d,_0x56e9c3-0x8,_0x91fb03,_0xb4cfe-0x1db);}if(_0x46df9e[_0x198da9(0x169,0x169,0x1d5,0x8e,0x1d5)](_0x46df9e[_0x17976c(0xd5,0x112,0x237,0x1eb,0x160)],_0x46df9e[_0x17976c(0xfb,0x16e,0x1ae,0x77,0x160)]))return![];else{if(_0x255e24){if(_0x46df9e[_0x198da9(0x276,0x2c7,0x1d9,0x1d8,0x24e)](_0x46df9e[_0x17976c(-0x72,-0xb9,0xf1,-0x4a,0x8)],_0x46df9e[_0x198da9(0x114,0x196,0x98,0x178,0x102)])){const _0x1d5feb={};_0x1d5feb[_0x8cc5f2(-0x6,0x8e,0x75,0x42,0xd)+'d']=_0x3de91d,_0x185f87[_0x8cc5f2(-0xd6,-0xa0,-0x154,-0x11,0x12)+_0x17976c(0x79,-0x24,0x66,-0xdd,-0x78)+'rd'](_0x16cb9f[_0x400e65(-0x13e,-0x8a,-0x1ac,-0xc2,-0x112)],_0x3d380a[_0x1c031a[_0x198da9(0x27a,0x2fd,0x1c9,0x24d,0x205)+_0x8cc5f2(0xa8,-0x45,0xff,-0x3f,0x35)+'e']()],!![],_0x1d5feb);}else{const _0x4b71d4=_0x255e24[_0x8cc5f2(-0x29,-0x16,0x1c,-0xb1,-0x4c)](_0x5daaef,arguments);return _0x255e24=null,_0x4b71d4;}}}}:function(){};return _0x1f9dbc=![],_0x4e7623;}else _0x1133b8[_0x1cef95(0x3a0,0x3ed,0x336,0x371,0x365)+_0x4e2316(-0x59,-0x39,0x114,0x72,-0x2)](_0x18fe1a[_0x1cef95(0x383,0x3a4,0x405,0x394,0x41b)+'r']);};}());(function(){function _0x194103(_0xd12c73,_0x254482,_0x4bde4d,_0xc76d9,_0x559f4a){return _0x59aa(_0x4bde4d- -0x313,_0x254482);}function _0x5d46ef(_0x264df2,_0x582dff,_0x218181,_0x14d86f,_0x326bb9){return _0x59aa(_0x264df2- -0x1cd,_0x582dff);}function _0x4d9111(_0x3e896b,_0x3c941d,_0x24d2e2,_0x15a1f3,_0x555ed2){return _0x59aa(_0x24d2e2-0x1e6,_0x15a1f3);}function _0x5d4572(_0x323d5f,_0x2ffb28,_0x270c6c,_0x4d7ca3,_0x3efe92){return _0x59aa(_0x270c6c- -0x79,_0x2ffb28);}function _0x1fb389(_0x2a198d,_0x494bf6,_0x20f89c,_0x4d5712,_0x14c6bc){return _0x59aa(_0x2a198d- -0x3d4,_0x14c6bc);}const _0x3e95e6={'vTNgf':function(_0x436333,_0x4932fe){return _0x436333(_0x4932fe);},'paDSS':function(_0x3aa713,_0x2a902d){return _0x3aa713+_0x2a902d;},'xTfca':function(_0x159448,_0x27d655){return _0x159448+_0x27d655;},'HhwXA':_0x4d9111(0x4ae,0x39b,0x3df,0x32f,0x38e)+_0x194103(-0x19f,-0x165,-0x17e,-0x16d,-0x87)+_0x4d9111(0x419,0x551,0x45e,0x3b7,0x3b0)+_0x4d9111(0x3b2,0x4ca,0x45f,0x477,0x42f),'Amsmw':_0x1fb389(-0x13b,-0x231,-0x111,-0xca,-0xfb)+_0x5d46ef(-0x20,-0x1b,-0x1f,0x37,0x6e)+_0x194103(-0x14d,-0x248,-0x202,-0x14d,-0x254)+_0x1fb389(-0x2a0,-0x1e9,-0x358,-0x1dd,-0x241)+_0x5d46ef(-0x48,0x7e,0x25,0x19,0x87)+_0x1fb389(-0x291,-0x2c6,-0x1bb,-0x24f,-0x35d)+'\x20)','VBHIi':function(_0x4c47a8){return _0x4c47a8();},'mLkrC':function(_0x3f5421,_0x13b408){return _0x3f5421*_0x13b408;},'HTzhK':function(_0x48635b,_0x516cb2){return _0x48635b!==_0x516cb2;},'WQrWZ':function(_0x3a5ec0,_0x551b6c){return _0x3a5ec0+_0x551b6c;},'vJjHw':_0x194103(-0xed,0x29,-0xbc,-0x1ab,-0x131)+_0x5d4572(0xcf,0x234,0x158,0x1b7,0x95),'lYnHc':_0x4d9111(0x290,0x2ff,0x2e1,0x383,0x354)+'es','VIRaD':_0x194103(-0x163,-0x8c,-0xd9,-0xef,-0xe8),'BrEGw':_0x5d4572(0x8e,-0x24,0xa6,0x59,0xb)+_0x5d46ef(-0x3,0xa1,-0x9a,-0x4f,-0x87)+'🎉','UvPZX':function(_0x2fa5eb,_0x19590a){return _0x2fa5eb===_0x19590a;},'eISzR':_0x4d9111(0x255,0x2ed,0x2ca,0x2b9,0x2c9),'LNpDs':_0x5d46ef(-0x55,0xc,-0x3f,-0x94,-0x6c),'qXxEC':_0x194103(-0x14d,-0x15a,-0x16f,-0x251,-0x1b6)+_0x4d9111(0x336,0x2f2,0x3b5,0x371,0x477)+_0x5d4572(0x290,0x269,0x1f4,0x2d2,0x23b)+')','TQZdX':_0x1fb389(-0x22c,-0x204,-0x195,-0x24b,-0x174)+_0x5d46ef(0x26,-0x6c,-0xc1,0x68,0x89)+_0x4d9111(0x3af,0x3cd,0x39e,0x46a,0x391)+_0x5d46ef(-0xe0,-0x121,-0x1bb,-0xd5,-0x1bd)+_0x4d9111(0x2be,0x414,0x34d,0x3c1,0x411)+_0x4d9111(0x354,0x2cf,0x353,0x3d4,0x359)+_0x5d46ef(-0x1a,0xd1,-0xf2,-0x8,-0x8),'IhgND':_0x5d46ef(-0x73,-0xc7,-0xd5,-0xc6,-0xfa),'voson':function(_0x5d0de0,_0x332e6f){return _0x5d0de0+_0x332e6f;},'XSNRE':_0x4d9111(0x2fa,0x465,0x39a,0x366,0x3e3),'JmfGX':_0x1fb389(-0x27d,-0x1b3,-0x2fb,-0x19c,-0x2cc),'UwCFQ':function(_0x2fde05,_0x3b2056){return _0x2fde05!==_0x3b2056;},'awMte':_0x5d46ef(-0x9,-0xfb,-0xc9,-0x8d,0x29),'RLUEz':_0x194103(-0x2af,-0x14a,-0x1f6,-0x28b,-0x1e6),'WiBuW':_0x4d9111(0x457,0x4a0,0x431,0x47c,0x374),'QZIdr':function(_0x3d3d95){return _0x3d3d95();},'mhria':function(_0x2365e4,_0x41e1b1,_0x3ff34c){return _0x2365e4(_0x41e1b1,_0x3ff34c);}};_0x3e95e6[_0x4d9111(0x3f3,0x445,0x460,0x4ad,0x538)](_0xf2354b,this,function(){function _0x1fcd69(_0x1b218f,_0x2a9d05,_0x1b75b3,_0x44ab54,_0x4311a1){return _0x4d9111(_0x1b218f-0xd0,_0x2a9d05-0x1bf,_0x44ab54-0xb,_0x1b75b3,_0x4311a1-0x160);}function _0x2f29e7(_0xc50799,_0x5f12ef,_0xe76411,_0x39fbfc,_0x18e637){return _0x5d4572(_0xc50799-0x154,_0xc50799,_0x39fbfc-0xba,_0x39fbfc-0x21,_0x18e637-0xfc);}function _0x4d321c(_0x40287c,_0x4594f5,_0x13e1d0,_0x58a5c8,_0x2b4bdb){return _0x194103(_0x40287c-0xbe,_0x4594f5,_0x13e1d0-0x1a7,_0x58a5c8-0xec,_0x2b4bdb-0x1bb);}function _0x1720e3(_0x3035b8,_0x32b2ba,_0x311ec5,_0x14a628,_0x1ce581){return _0x5d46ef(_0x1ce581-0x6f,_0x32b2ba,_0x311ec5-0x107,_0x14a628-0x5a,_0x1ce581-0xe2);}function _0x166174(_0x3c138f,_0x3b6364,_0x2ef3ef,_0x30c34b,_0x4d14f9){return _0x5d4572(_0x3c138f-0xc2,_0x3b6364,_0x4d14f9-0x34b,_0x30c34b-0x40,_0x4d14f9-0x46);}if(_0x3e95e6[_0x166174(0x460,0x314,0x39a,0x30a,0x3c1)](_0x3e95e6[_0x1fcd69(0x3c0,0x40f,0x4ca,0x422,0x47d)],_0x3e95e6[_0x1720e3(0xe9,0x170,0x16d,0x97,0x10d)])){const _0x3a6326={};_0x3a6326[_0x4d321c(0x121,0xc0,0xa0,0x2d,0x6)+'d']=_0x16ef6d,_0x1f40a6[_0x166174(0x409,0x33f,0x3b8,0x4e9,0x40e)+_0x2f29e7(0x2b,0x39,0xc2,0x113,0x169)+'rd'](_0x34872b[_0x1720e3(-0x5b,-0x83,-0x76,0xad,0x15)],_0x78c675[_0x47101f[_0x1720e3(0x100,0x141,0x1e1,0x10d,0x15a)+_0x1fcd69(0x4b4,0x450,0x4ab,0x4ab,0x51d)+'e']()],!![],_0x3a6326);}else{const _0x3f36a1=new RegExp(_0x3e95e6[_0x1720e3(0x234,0x69,0x23a,0x120,0x15d)]),_0x152aaf=new RegExp(_0x3e95e6[_0x1720e3(-0x63,0x38,0x65,0xda,0x3d)],'i'),_0x2af387=_0x3e95e6[_0x2f29e7(0x250,0x186,0x14a,0x225,0x2d9)](_0x17af84,_0x3e95e6[_0x1fcd69(0x4e0,0x342,0x3c9,0x417,0x456)]);if(!_0x3f36a1[_0x4d321c(0x93,0xda,0x77,0xe9,0x96)](_0x3e95e6[_0x1720e3(-0x5b,0xa0,0x87,-0x5d,0x23)](_0x2af387,_0x3e95e6[_0x2f29e7(0x256,0x2f6,0x291,0x2ed,0x304)]))||!_0x152aaf[_0x1fcd69(0x350,0x437,0x475,0x3d4,0x2ef)](_0x3e95e6[_0x4d321c(-0x121,-0xd3,-0x33,0x10,-0xfe)](_0x2af387,_0x3e95e6[_0x1720e3(-0x62,0x0,0x5a,-0xcc,-0x40)]))){if(_0x3e95e6[_0x1720e3(0x12,-0x2e,0x10a,0x3d,0x94)](_0x3e95e6[_0x1fcd69(0x381,0x255,0x1e7,0x2db,0x2d1)],_0x3e95e6[_0x2f29e7(0x2ee,0x210,0x220,0x26a,0x316)]))_0x3e95e6[_0x1fcd69(0x4a4,0x431,0x2de,0x3d5,0x380)](_0x2af387,'0');else{const _0x487d80=_0x3e95e6[_0x1720e3(0x65,-0x2,-0x3c,0xe6,0x86)](_0x2f2c5d,_0x3e95e6[_0x166174(0x3db,0x381,0x3f0,0x4ac,0x40b)](_0x3e95e6[_0x1fcd69(0x4d5,0x43e,0x407,0x3df,0x300)](_0x3e95e6[_0x1720e3(0x69,0xb,0xe6,0x10,0xc)],_0x3e95e6[_0x166174(0x4b9,0x46b,0x44f,0x571,0x522)]),');'));_0x127e90=_0x3e95e6[_0x2f29e7(0x358,0x225,0x2bf,0x299,0x322)](_0x487d80);}}else{if(_0x3e95e6[_0x1720e3(-0x4a,-0x35,-0x79,0x4f,-0x6f)](_0x3e95e6[_0x2f29e7(0x2b7,0x34f,0x221,0x277,0x2a8)],_0x3e95e6[_0x1720e3(0xaa,0x19f,0x17e,0x15b,0xd8)]))_0x3e95e6[_0x2f29e7(0x1db,0x27c,0xc7,0x1a4,0x141)](_0x17af84);else{let _0xd048a=_0x521aa4[_0x1fcd69(0x344,0x2cc,0x29c,0x32f,0x391)][_0x4d321c(0x70,0x1d4,0xde,0x34,0x142)][_0x2b5c19[_0x2f29e7(0x2d4,0x1a3,0x275,0x203,0x2c9)+'r']];if(!_0xd048a[_0x166174(0x441,0x55c,0x54f,0x3f4,0x4ac)+_0x2f29e7(0x30f,0x327,0x1c8,0x257,0x1f2)+'p'])return!(-0x143a+0xd05+0x1*0x735);let _0x4eb15f=_0x3e95e6[_0x4d321c(0x199,0x108,0x11a,0x207,0xbc)](_0xd048a[_0x1720e3(0xb,-0xb1,-0xc6,-0xef,0x3)],0x12a1+-0x463+0x51*-0x2d);if(_0x257010[_0x2f29e7(0x3ab,0x278,0x29b,0x2f2,0x2d5)+_0x166174(0x63f,0x58e,0x5a3,0x45e,0x54e)](_0xd048a[_0x2f29e7(0x149,0x254,0x1cd,0x1a2,0x1bd)],_0xd048a[_0x1720e3(0x4c,0x177,0xe9,0x54,0xc7)],_0x4768f0[_0x2f29e7(0x202,0x21c,0x23c,0x2a2,0x2e9)+_0x1720e3(0x1f,-0x95,-0xdb,-0x93,-0x1a)])){_0xd048a[_0x1fcd69(0x28c,0x38a,0x2e3,0x352,0x279)]++;if(_0x3e95e6[_0x1720e3(-0x17,0x9a,0x107,-0x6c,0x17)](_0x4eb15f,_0xd048a[_0x4d321c(0xe9,-0xa9,-0xb,0xa9,-0xc1)])){_0xd048a[_0x166174(0x521,0x3f4,0x566,0x4ac,0x488)]=_0x27282f[_0x2f29e7(0x1cf,0x2ac,0x21e,0x296,0x35e)][_0x1fcd69(0x372,0x376,0x469,0x3a7,0x474)](_0xd048a[_0x2f29e7(0x216,0x247,0x224,0x1a2,0x173)])[_0x2f29e7(0x261,0x2d7,0x2f8,0x250,0x1a4)];let _0x1dd13f=(_0x4d321c(0x28,0x11f,0x83,0x53,-0x7)+_0x4d321c(-0x2,-0x4,0xe5,0x2c,0x46)+_0x1fcd69(0x330,0x386,0x333,0x322,0x402)+_0x526800+(_0x1720e3(0x4c,0x166,0x89,0x13b,0x118)+_0x2f29e7(0x126,0xf9,0x239,0x173,0x10c)+_0x2f29e7(0x15a,0x1c6,0x1bf,0x1ad,0x188)+_0x166174(0x344,0x3b5,0x3b4,0x34f,0x40f)+_0x1720e3(-0x131,-0x34,0x47,0x61,-0x5e)+_0x166174(0x4ef,0x554,0x3e6,0x3b5,0x468)+_0x2f29e7(0x299,0x342,0x1b5,0x27f,0x1ae)+_0x4d321c(0x9c,0x99,-0x2b,0xc9,0x6e))+_0x4eb15f+(_0x1fcd69(0x3f2,0x367,0x394,0x305,0x3ac)+_0x1fcd69(0x393,0x41c,0x328,0x3d6,0x3f1)+_0x1720e3(0x65,0x11f,-0x22,-0x5d,0x29)+':\x20')+_0xd048a[_0x4d321c(-0x52,-0xb,-0xb,-0xa7,-0xf1)]+(_0x2f29e7(0x1ec,0x1a8,0x2f9,0x264,0x2a9)+_0x166174(0x5dc,0x51b,0x48b,0x41c,0x50e)+'\x20')+_0xd048a[_0x1720e3(-0xd,0xf7,0xa4,0x37,0x58)]+(_0x166174(0x4ae,0x4e9,0x636,0x4b4,0x565)+_0x1720e3(0x94,0x1b4,0x1dd,0x12e,0xf4)+_0x1fcd69(0x2ca,0x33e,0x3f7,0x3a3,0x400)+_0x1fcd69(0x43a,0x3b1,0x3e5,0x483,0x531)+_0x1fcd69(0x3ec,0x3e7,0x4ba,0x429,0x44a)+_0x166174(0x42a,0x433,0x556,0x5cb,0x4da)+_0x4d321c(0x82,0x82,-0x32,0xba,-0x53)+_0x166174(0x58d,0x59c,0x4cd,0x518,0x4e4)+_0x166174(0x4f5,0x54a,0x5f8,0x5eb,0x532)+_0x1720e3(0xaf,0x10,0x28,-0x96,-0x13)+_0x2f29e7(0x1ba,0x205,0x2ad,0x2a7,0x1d4)+_0x4d321c(-0x124,-0x16c,-0x8a,-0x176,-0xae)+_0x1720e3(-0xc9,0x88,-0x130,-0xf5,-0x67)+_0x1720e3(0x12b,0x137,0x150,0x19b,0x14d)+_0x2f29e7(0x2a9,0x32f,0x251,0x2d3,0x1ec)+_0x4d321c(-0xba,0x5b,0x21,-0x3b,-0x4c)+_0x2f29e7(0x286,0x147,0x156,0x1c5,0x27f)+_0x1720e3(-0x4,0x7c,0x14f,-0x1c,0x80)+_0x166174(0x3da,0x384,0x519,0x499,0x455)+_0x1fcd69(0x32e,0x310,0x278,0x2ca,0x322)+_0x2f29e7(0x23f,0x29b,0x22a,0x1c7,0x10d)+_0x2f29e7(0x397,0x1cd,0x357,0x2c2,0x3a7)+_0x166174(0x3ee,0x586,0x464,0x409,0x4b3)+_0x4d321c(0xfe,0x139,0x68,0xd8,-0x56)+_0x2f29e7(0x278,0x32b,0x32f,0x2c6,0x207)+_0x1720e3(-0xf1,-0x156,0x45,-0x80,-0x84)+_0x2f29e7(0x205,0x134,0x249,0x1bd,0x18b)+'\x09'))[_0x2f29e7(0x2bf,0x232,0x356,0x2fe,0x31e)]();_0x1f7967[_0x4d321c(0xfe,0x193,0x109,0x17d,0x7e)+_0x2f29e7(0x20d,0x146,0x41,0x11f,0xcf)+'s'](_0x1066f6[_0x1fcd69(0x3a2,0x2d9,0x33d,0x364,0x284)],_0x1dd13f,_0x3e95e6[_0x166174(0x3f2,0x37d,0x333,0x47e,0x3fb)]('©\x20',_0x221c2c),_0x3e95e6[_0x2f29e7(0x2ee,0x34a,0x393,0x2a5,0x368)],_0x3e95e6[_0x1fcd69(0x3af,0x39c,0x312,0x368,0x31f)],_0x3e95e6[_0x4d321c(0x18,-0xcb,-0x16,0x14,0x73)],_0x3e95e6[_0x2f29e7(0x191,0xd4,0x1a4,0x163,0xe6)],_0x18eaaf);}}}}}})();}());if(m[_0x539f26(0x61c,0x654,0x60e,0x6df,0x557)+'ge']&&global[_0x3b8432(0xbd,0x51,0x106,-0x20,0xab)+_0x3b8432(0x151,0x94,0xc4,0x12d,0x118)]){const _0x2542d6={};_0x2542d6[_0x539f26(0x58e,0x52c,0x4e3,0x494,0x4e2)+_0x23de73(0x4dd,0x58c,0x52d,0x54a,0x450)]=m[_0x56e98f(0x457,0x381,0x378,0x545,0x4c0)],_0x2542d6['id']=m[_0x3b8432(0xed,0x265,0x22f,0x20b,0x1b4)]['id'],_0x2542d6[_0x3b8432(0xe3,0x48,0x15,0x112,0xaa)+_0x4ec547(-0x25,0x9d,0x11,0x148,0x12e)+'t']=m[_0x4ec547(0x17c,0x165,0x231,0x1d9,0x236)+'up']?m[_0x56e98f(0x4d9,0x534,0x5c4,0x42a,0x46d)][_0x3b8432(0x198,0xe1,0xef,-0x2c,0xaa)+_0x3b8432(0x131,0x1fa,0x17d,0x1e1,0x123)+'t']:undefined;const readkey=_0x2542d6;await alpha[_0x3b8432(0x124,0xd8,0x1d8,0x1e1,0x1b0)+_0x23de73(0x56c,0x553,0x60c,0x5d5,0x51b)+'es']([readkey]);}const msgFilter=require(_0x4ec547(0xf7,0xe9,0x18f,0x10,0x37)+_0x4ec547(0x13c,0xc8,0xfe,0xf3,0x105)+_0x3b8432(0x31f,0x321,0x18c,0x2da,0x241));if(!isCreator&&!m[_0x23de73(0x59b,0x5d7,0x4c5,0x59e,0x517)][_0x4ec547(0xb8,0x8c,-0x48,0xaf,-0x2)+'e']&&isCmd&&msgFilter[_0x56e98f(0x3f2,0x482,0x43d,0x4d5,0x32a)+_0x4ec547(0x3a,0x42,0x56,0xf9,0x10a)](m[_0x3b8432(0x214,0x1f2,0x110,0x1c4,0x181)+'r'])){console[_0x4ec547(0x1ab,0x14d,0x1b7,0x1e4,0xc4)](chalk[_0x4ec547(0xd9,0x82,0x9a,-0x43,-0x26)](chalk[_0x3b8432(0x185,0x228,0x2fc,0x2f8,0x26f)+'te'](_0x539f26(0x484,0x3e1,0x48b,0x4df,0x3f8)+_0x539f26(0x576,0x6f3,0x5ff,0x66b,0x6eb))),chalk[_0x3b8432(0x65,0x136,0x5b,0x52,0x108)](chalk[_0x23de73(0x5bf,0x4d0,0x58d,0x655,0x657)+'en'](new Date())),chalk[_0x56e98f(0x42d,0x352,0x382,0x41e,0x420)](chalk[_0x4ec547(0x1db,0x1a3,0x218,0x1cf,0x251)+'e'](budy||m[_0x56e98f(0x405,0x3bc,0x414,0x3e4,0x42c)]))+'\x0a'+chalk[_0x56e98f(0x540,0x4c4,0x473,0x596,0x615)+'ta'](_0x539f26(0x462,0x489,0x51a,0x5a6,0x4a4)+'ri'),chalk[_0x23de73(0x59a,0x66c,0x5e6,0x5cd,0x562)](pushname),chalk[_0x539f26(0x50d,0x5fa,0x58c,0x631,0x49e)+'w'](m[_0x23de73(0x568,0x528,0x4e7,0x5b1,0x4a3)+'r'])+'\x0a'+chalk[_0x3b8432(0x125,0xc7,0x1f0,0x1c5,0x180)+_0x3b8432(0x2a1,0x298,0x227,0x2ed,0x201)](_0x4ec547(0x1ba,0xe7,0x120,0x102,0x1c2)),chalk[_0x539f26(0x502,0x54a,0x559,0x584,0x4de)](m[_0x4ec547(0x9e,0x165,0x137,0x7b,0x109)+'up']?pushname:_0x539f26(0x515,0x516,0x4df,0x567,0x504)+_0x23de73(0x5bd,0x595,0x64f,0x5f8,0x569)+'at',m[_0x23de73(0x519,0x51c,0x4b6,0x5f0,0x488)])),reply(_0x539f26(0x4de,0x633,0x542,0x49e,0x531)+_0x539f26(0x423,0x56c,0x48d,0x543,0x53e)+_0x539f26(0x421,0x502,0x50e,0x457,0x48d)+_0x4ec547(0xd4,0x33,0x4,0xa9,0x79)+_0x56e98f(0x512,0x58b,0x578,0x5f3,0x58c)+_0x3b8432(0x317,0x2fe,0x24e,0x2e9,0x257)+_0x539f26(0x409,0x4e6,0x4d3,0x5bf,0x443));return;}isCmd&&msgFilter[_0x539f26(0x461,0x489,0x458,0x455,0x417)+_0x4ec547(0x189,0x17c,0xc6,0x1ef,0x156)](m[_0x539f26(0x4fc,0x509,0x527,0x5fe,0x4d3)+'r']);function _0x539f26(_0x52d9a,_0x53e8d9,_0x1797ec,_0x6121a4,_0x37e2ba){return _0x59aa(_0x1797ec-0x365,_0x52d9a);}_sewa[_0x4ec547(0x188,0xfe,0x42,0x43,0x15b)+_0x539f26(0x513,0x403,0x469,0x4d1,0x3a0)+'ck'](alpha,sewa);if(m[_0x539f26(0x597,0x601,0x527,0x48d,0x579)+'r'][_0x23de73(0x47c,0x392,0x467,0x4ac,0x38c)+_0x3b8432(0x159,0x144,0xe1,0xe9,0x148)](_0x56e98f(0x4a4,0x40b,0x44c,0x450,0x4db))&&global[_0x56e98f(0x4f1,0x5a5,0x5b4,0x4fc,0x562)+_0x539f26(0x58a,0x65b,0x5e0,0x510,0x5b3)+'2'])return alpha[_0x23de73(0x4cb,0x42d,0x489,0x478,0x3e3)+_0x23de73(0x5c6,0x6a5,0x68f,0x685,0x5dc)+_0x3b8432(0x2ba,0x22f,0x2a6,0x267,0x1e1)+'us'](m[_0x56e98f(0x4a6,0x531,0x4df,0x45a,0x408)+'r'],_0x23de73(0x544,0x46a,0x572,0x468,0x4f1));if(m[_0x3b8432(0x1c9,0xfd,0x130,0x1b2,0x1cb)+'d']?!m[_0x56e98f(0x4f0,0x56e,0x4df,0x482,0x405)+'d'][_0x56e98f(0x405,0x3fb,0x4bc,0x46e,0x32e)]==_0x539f26(0x632,0x676,0x621,0x697,0x684)+_0x23de73(0x4d6,0x3df,0x4f2,0x410,0x52d)+_0x23de73(0x4d4,0x4f1,0x5a7,0x50e,0x4fc)+_0x4ec547(0x11d,0x100,0x2f,0x10a,0x111)+'ge':!![]&&!m[_0x3b8432(0x128,0x115,0x1d9,0x1f1,0x1eb)+'up']&&!m[_0x56e98f(0x4d9,0x525,0x3f1,0x51d,0x47c)][_0x23de73(0x4f9,0x49e,0x565,0x5d1,0x480)+'e']&&m[_0x23de73(0x64f,0x71e,0x67b,0x636,0x721)+'ge']&&!(new Date()-db[_0x56e98f(0x422,0x383,0x344,0x447,0x4e2)][_0x56e98f(0x52e,0x5c4,0x519,0x5ab,0x61f)][m[_0x4ec547(0x1d0,0xfb,0xfc,0xa4,0x152)+'r']]['pc']<-0x1*0x43af393+0x3b54c1d+0x2d601bb*0x2)&&global[_0x23de73(0x5d3,0x52b,0x625,0x50e,0x589)+_0x3b8432(0x268,0x2fe,0x239,0x1ee,0x236)]){let user=db[_0x539f26(0x3b4,0x58e,0x4a3,0x522,0x41a)][_0x539f26(0x596,0x622,0x5af,0x4d2,0x5e6)][m[_0x3b8432(0x171,0x162,0x267,0x110,0x181)+'r']];alpha[_0x56e98f(0x3b8,0x44b,0x390,0x396,0x4ab)+_0x539f26(0x60b,0x4be,0x52b,0x5c7,0x497)+'e'](m[_0x23de73(0x519,0x546,0x4da,0x4ab,0x4de)],{'text':''+(user[_0x4ec547(0x14,0xe3,0x7f,0x4a,0x6a)+'d']?lang[_0x56e98f(0x474,0x431,0x558,0x4ab,0x41a)+'n']():lang[_0x539f26(0x4e4,0x560,0x582,0x565,0x578)+_0x23de73(0x61d,0x668,0x651,0x6e9,0x659)](salam,pushname,botname))},{'quoted':m}),user['pc']=new Date()*(0x1fa0+-0x18e7+-0x6b8);}if(global[_0x23de73(0x5b3,0x4df,0x4d9,0x5b2,0x657)+'io']){let settingstatus=-0x9cb*0x2+0x7*0x22a+0x470;new Date()*(-0x425*0x1+-0x55*0x5f+0x1*0x23b1)-settingstatus>-0xb*0x172+-0x19eb+0x2db9&&(await alpha[_0x539f26(0x54d,0x64f,0x56f,0x5d8,0x4fe)+_0x23de73(0x61a,0x65a,0x565,0x59d,0x5ab)](_0x4ec547(-0x69,0x2f,-0x7e,0xa3,0x3c)+botname+_0x56e98f(0x42c,0x3a3,0x3ec,0x429,0x4ba)+runtime(process[_0x539f26(0x52a,0x3f0,0x47d,0x4d8,0x446)+'e']())+(_0x56e98f(0x518,0x500,0x47e,0x576,0x577)+_0x56e98f(0x532,0x502,0x57d,0x5dd,0x620)+_0x3b8432(0x2fc,0x235,0x1a1,0x1ac,0x25f))+(alpha[_0x539f26(0x523,0x50d,0x5b4,0x644,0x631)+'c']?_0x539f26(0x5c0,0x533,0x5b1,0x54f,0x4bb)+_0x4ec547(0x115,0x1c6,0x265,0x124,0x217)+'e':_0x3b8432(0x9d,0x17f,0x1e9,0x228,0x13f)+_0x23de73(0x49f,0x53d,0x493,0x4a8,0x44c))+_0x4ec547(0x1e,0x6e,0x158,0x15f,0x145)+Object[_0x539f26(0x547,0x58d,0x5f3,0x645,0x648)](global['db'][_0x539f26(0x45b,0x4c9,0x4a3,0x535,0x3b7)][_0x539f26(0x4c0,0x68d,0x5af,0x515,0x612)])[_0x56e98f(0x3f0,0x4a7,0x410,0x314,0x4b5)+'h']+(_0x23de73(0x543,0x49d,0x500,0x60a,0x5d4)+'s')),settingstatus=new Date()*(0x1*-0x10c1+0x6e7+-0x57*-0x1d));}function _0x56e98f(_0x195959,_0x46156b,_0x32b4c5,_0x187c10,_0x2733c1){return _0x59aa(_0x195959-0x2e4,_0x187c10);}function _0x1109(){const _0x540d2b=['nuiuz','/imag','xTfca','\x0a🎉\x20Co','listR','readM','UwCFQ','*(?:[','green','key','Objec','6535520vyIagl','son','retur','tCLBV','./dat','psert','textI','qNDqD','onlyP','se&te','YzjSC','debu','FWEso','er\x20un','.json','pushN','Maaf\x20','k\x20lev','bTWcd','setSt','IsUAf','quote','autob','inclu','name','zRuXs','e.jso','bih\x20c','pl.co','log','json','evelu','te\x20Ch','YVjYp','bgGre','rakhi','wlnYF','EADyA','first','2995644ZJhHiB','146715GmtyvQ','eBloc','fromO','kStat','\x0a->\x20R','YCAMR','exp','IhgND','yello','yVvny','RLUEz','2714409FLaqJA','mium\x20','isGro','firts','\x203\x20se','FftEA','nativ','eISzR','xFSNg','tePdi','\x20⏰\x20|\x20','(((.+','WiBuW','geCon','k\x20nai','ing','.inv','jcOJW','ole\x20:','TTFLq','elumn','xt=','GkJnp','rPZLi','right','lter','ons','Ytggh','o.jso','zISsh','text','ha256','users','QswVY','Publi','oKVhM','Statu','publi','Amsmw','ngrat','n\x20kan','https','QatyW','rpg','GZNat','.game','VBHIi','FeVjg','8GIzKfj','tedRo','magen','EEryh','nnzER','onseM','epat!','multi','gger','terva','vJjHw','Info','m\x20per','r\x0aCha','respo','hRila','bgBlu','LNpDs','oSldD','\x5c(\x20*\x5c','qkijt','e)\x20{}','pFivC','bHcLL','sage','ileSy','atus','send2','\x20kamu','Chat','nctio','n()\x20','mhria','lok21','velUp','simi.','smyPI','9174768lPuveW','remiu','ntuk\x20','spam','AHveY','wAukh','nvent','mLkrC','YpWLM','tedBu','miNIx','appen','ywcze','fileS','c\x20Mod','keys','fohFX','OqYif','TGfvj','\x20untu','\x0a\x0aMai','kPubr','BtofO','/vide','TbOiT','conds','{}.co','M\x20]','oidww','deFef','parse','net/v','nse','s\x20:\x20',')+)+)','LtMan','://ap','ame','isIma','t\x20own','oDktQ','://Te','messa','DIEZJ','emenu','XSNRE','UKOBP','2/?lc','f=fal','bgWhi','canLe','e\x20pre','BcHpN','fyFAd','succe','okRbH','tus\x20p','toLow','rem','erCas','qXxEC','butto','trim','emit','Forwa','QXThH','sendM','naja-','start','1.zee','6SmlBWJ','dan\x20.','ory\x20k','BwnXx','ges.u','SieAZ','ButMe','NdRJK','fqvud','wwdTN','intah','selec','IhIEn','actio','POST','activ','tBCsG','ctRep','awMte','parti','autor','Z_$][','pzBrU','UvPZX','VVFWe','eFlow','ext','addFi','DfCJx','awal','I\x27m\x20','\x20.gam','strin','Mode','ldown','🎮\x20Gam','nfo','NCcHX','TMEjj','msg','\x20Leve','279970JvNcNQ','Ehdac','seMes','edChe','count','doLWk','bject','CxsTj','tered','tmp.','bFEFo','lengt','KptHU','isFil','k\x20sta','eResp','ctor(','HpBAm','IDyZj','\x0a->\x20L','DFqOR','ructo','KvuiO','uptim','ZmRfq','wbCMy','param','/uplo','acwdx','JmfGX','Inven','ngs','mtype','BrEGw','LUmcC','while','updat','[\x20SPA','/stik','\x20spam','WQrWZ','ybfmP','_url','ssage','setti','ponse','TJrbj','nsRes','s,\x20','\x20naik','=id&c','\x22retu','\x20|\x20','state','eJid','dCwCP','paDSS','el\x20le','fYncV','copyN','l!\x0a->','data','NeDLH','qoHmP','ya\x20:\x20','mqxoQ','is\x22)(','plier','oneof','xMmBh','eSele','\x20🤖\x20|\x20','black','inter','\x20Kiri','uKLRZ','PdmqB','yVCns','fakeO','free','/text','tvJPa','fromM','vYxHR','JPwLF','VIRaD','input','GQpZY','ead','init','ADKcH','tKRvk','file','/cmd.','MnVYB','MiywY','level','bdaVy','QZIdr','cipan','Ccmnp','TbLhx','0-9a-','limit','/vn.j','HhwXA','gWcdS','\x20leve','zA-Z_','!!!','iakmL','Respo','gxfGs','call','chat','a\x20tel','HTzhK','m\x20and','lYnHc','qkTfb','YVEXj','Priva','/docu','amu\x20\x0a','Joykt','remot','EVlsi','Self\x20','voson','owner','game\x20','ihat\x20','rn\x20th','inv\x20u','Baru\x20','eWdJh','sWith','singl','pgrad','c2.re','k\x20mel','const','/anti','getBa','BnCIP','menti','Uvvpz','720DvocKf','n\x20(fu','l\x20Seb','espon','base6','VRoTQ','abase','TQZdX','searc','\x20User','block','waktu','wId','mjgrv','dJOIi','AMQcc','funct','YhRaE','VTNQa','iKhCJ','\x5c+\x5c+\x20',',\x20Coo','banne','\x20(tru','BoTrG','nstru','=>\x20Di','OaaPh','./lib','skJJi','\x20game','$]*)','chain','=>\x20Da','role','ment.','a-zA-','des','readF','nseMe','lagi','sJson','wNeiu','umDat','212','blueB','sende','aXhTG','RnSdX','expir','essag','Messa','image','setIn','tory\x20','then','user','PUtzY','hTQgx','ion\x20*','toStr','menu','i.sim','jVeGu','cek\x20i','WebMe','BqZYO','tuk\x20u','ah\x20be','ttonI','autol','NoGgB','JckpR','Don\x27t','list\x20','NHBpL','4437902FxCkDe','menge','DxKeq','test','vTNgf','evel\x20','premi','MAYvn','XRuMh','apply','CmXpO','igJLZ'];_0x1109=function(){return _0x540d2b;};return _0x1109();}!m[_0x539f26(0x657,0x609,0x591,0x56f,0x5c4)+'up']&&!m[_0x3b8432(0x155,0x1c9,0x22e,0x136,0x1b4)][_0x3b8432(0x16c,0x126,0x18a,0x134,0x112)+'e']&&db[_0x4ec547(0xde,0x77,0x12,0xbf,0x18)][_0x3b8432(0xd7,0x4c,0x144,0xa6,0xec)+_0x23de73(0x4c6,0x435,0x3ff,0x500,0x576)][botNumber][_0x23de73(0x492,0x56c,0x3b0,0x57d,0x474)+_0x539f26(0x4e2,0x451,0x4fc,0x53f,0x571)+'d']&&!isCmd&&(simi=await fetchJson(_0x3b8432(0x13e,0x252,0x247,0x122,0x212)+_0x4ec547(0x25e,0x1dc,0x232,0x106,0x155)+_0x56e98f(0x4b6,0x4b9,0x4b0,0x3da,0x5ac)+_0x539f26(0x585,0x620,0x5e2,0x561,0x65d)+_0x23de73(0x644,0x676,0x6ea,0x728,0x5f1)+_0x4ec547(0x2a7,0x1e7,0x254,0x1f8,0x1b5)+_0x56e98f(0x417,0x3d4,0x3c9,0x33c,0x323)+_0x539f26(0x6c0,0x66a,0x614,0x69b,0x6c9)+_0x4ec547(0x92,0x139,0x66,0x197,0x151)+_0x539f26(0x4be,0x4b1,0x5a4,0x4dd,0x4f5)+m[_0x539f26(0x683,0x657,0x5ad,0x5da,0x535)]),reply('_'+simi[_0x23de73(0x65b,0x713,0x68b,0x65d,0x5f9)+'ss']+'_'));function _0x59aa(_0x42010f,_0x4035f8){const _0xc554c5=_0x1109();return _0x59aa=function(_0x110967,_0x59aae9){_0x110967=_0x110967-(-0x1d75*0x1+-0x149c+-0x1*-0x32e3);let _0x4562ea=_0xc554c5[_0x110967];return _0x4562ea;},_0x59aa(_0x42010f,_0x4035f8);}!m[_0x539f26(0x548,0x5a8,0x591,0x4e4,0x4cb)+'up']&&!isCreator&&db[_0x539f26(0x545,0x4f4,0x4a3,0x577,0x500)][_0x23de73(0x5f0,0x6a0,0x593,0x5bc,0x6ba)][m[_0x3b8432(0x224,0x1d8,0x149,0xb4,0x181)+'r']][_0x23de73(0x58c,0x4ce,0x5ae,0x629,0x670)+'um']&&(new Date()*(0x93a+-0x208a+0x1751)>=global['db'][_0x539f26(0x3db,0x3d6,0x4a3,0x566,0x48c)][_0x3b8432(0x256,0x2de,0x2ca,0x296,0x209)][m[_0x3b8432(0x262,0xde,0x1f9,0x1e5,0x181)+'r']][_0x56e98f(0x4ca,0x43b,0x4c9,0x551,0x401)+_0x23de73(0x565,0x5fb,0x573,0x486,0x4a4)+'e']&&reply(_0x3b8432(0x12c,0x173,0x1b3,0x10f,0x1c6)+_0x23de73(0x545,0x53a,0x5c2,0x477,0x5b3)+_0x539f26(0x566,0x6de,0x5f7,0x60b,0x515)+_0x23de73(0x4b5,0x4d8,0x487,0x488,0x3f0)+_0x3b8432(0x21b,0x1fc,0x2c8,0x355,0x276)+_0x23de73(0x626,0x6d0,0x69c,0x606,0x6af)+_0x23de73(0x51c,0x441,0x51e,0x4d7,0x491)+_0x56e98f(0x458,0x4d3,0x456,0x51b,0x466)+_0x3b8432(0x14f,0x144,0x228,0x202,0x197)+_0x4ec547(0x11d,0x153,0xd8,0xe9,0x1fa)+_0x3b8432(0x31a,0x1ef,0x305,0x2b6,0x226)+_0x4ec547(0x207,0x1df,0x154,0x27e,0x1eb)+_0x539f26(0x651,0x625,0x569,0x4ce,0x4fd)+_0x23de73(0x57d,0x4bf,0x4e9,0x55e,0x55c)+_0x23de73(0x531,0x5d9,0x5a0,0x616,0x484)+_0x539f26(0x6d2,0x5fb,0x617,0x6c5,0x5cc)+_0x3b8432(0x12d,0x222,0x16c,0x1ef,0x1ea)+_0x3b8432(0x206,0x19b,0xcc,0x1ac,0x17b))[_0x539f26(0x44e,0x4d6,0x530,0x59d,0x5bd)](()=>{function _0x38d814(_0x227de2,_0x16a331,_0x20cdf6,_0x4020c8,_0x22611e){return _0x56e98f(_0x4020c8- -0x12d,_0x16a331-0x104,_0x20cdf6-0x11b,_0x16a331,_0x22611e-0x2f);}function _0x50f064(_0x3f0f07,_0x4b5935,_0x10bcad,_0x5ba906,_0xd5e281){return _0x3b8432(_0x5ba906,_0x4b5935-0x5c,_0x10bcad-0xf2,_0x5ba906-0x95,_0x10bcad-0xc3);}const _0x2de6dc={'GZNat':function(_0x4f610f,_0x1d2db3,_0x17f075,_0x16aef6,_0x175685){return _0x4f610f(_0x1d2db3,_0x17f075,_0x16aef6,_0x175685);}};global['db'][_0x479c48(0x1d9,0x126,0x41,0x9e,0x106)][_0x38d814(0x4d0,0x3df,0x446,0x401,0x49f)][m[_0x479c48(0x23a,0x1b8,0x1cb,0x1d2,0x18a)+'r']][_0x204694(0x537,0x542,0x50e,0x494,0x539)+'um']=![];function _0x479c48(_0x52a8ee,_0x4d8be3,_0x172f22,_0x337dff,_0x26ed65){return _0x4ec547(_0x52a8ee-0x170,_0x26ed65-0x8f,_0x337dff,_0x337dff-0x26,_0x26ed65-0xfa);}function _0x204694(_0x547474,_0xfa1f4e,_0x1e4a13,_0x407edf,_0x40daa1){return _0x56e98f(_0x1e4a13-0x44,_0xfa1f4e-0x179,_0x1e4a13-0x97,_0x407edf,_0x40daa1-0x19e);}function _0xd44130(_0x5ab1b4,_0x5c2c4f,_0x56253c,_0x38c406,_0x21a94d){return _0x3b8432(_0x5c2c4f,_0x5c2c4f-0x5a,_0x56253c-0x1ad,_0x38c406-0x5b,_0x56253c-0x357);}global['db'][_0xd44130(0x3fe,0x39d,0x454,0x4fa,0x36a)][_0x50f064(0x27b,0x1e4,0x2cc,0x210,0x32b)][m[_0x204694(0x562,0x4b2,0x4ea,0x52f,0x4d1)+'r']][_0x204694(0x536,0x3d3,0x490,0x3ea,0x444)]=global[_0xd44130(0x438,0x567,0x47e,0x46e,0x4e7)+_0x38d814(0x240,0x2b7,0x2e1,0x2ac,0x2cc)][_0xd44130(0x49f,0x3d6,0x466,0x373,0x499)],_0x2de6dc[_0x204694(0x56a,0x65c,0x57e,0x569,0x649)](sendContact,alpha,m[_0x479c48(0x191,0x10d,0x22f,0x125,0x13b)],global[_0x50f064(0x1f7,0x16b,0x204,0x126,0x273)],m);}));const _cmd=JSON[_0x3b8432(0x192,0x2d0,0x2a4,0x1b1,0x25c)](fs[_0x4ec547(0x16e,0xf3,0xbe,0xe1,0x1d1)+_0x539f26(0x4f0,0x51c,0x5d8,0x5ce,0x5d4)+'nc'](_0x4ec547(0xdd,0x134,0xd3,0x111,0x193)+_0x4ec547(0x13b,0xd3,0x153,0x17c,0x71)+_0x23de73(0x504,0x510,0x4c4,0x56c,0x4cd)+_0x3b8432(0x27f,0x17e,0x204,0x233,0x1d4)));if(isMedia&&m[_0x23de73(0x4a5,0x560,0x3fb,0x4f4,0x450)][_0x23de73(0x632,0x6d3,0x724,0x69b,0x67b)+_0x56e98f(0x52d,0x50d,0x49c,0x622,0x4b2)]&&m[_0x56e98f(0x3e3,0x319,0x499,0x497,0x37b)][_0x539f26(0x656,0x665,0x5f1,0x60a,0x56b)+_0x4ec547(0x263,0x182,0x1df,0x172,0x102)][_0x3b8432(0x25b,0x249,0xf9,0x15d,0x18f)+_0x3b8432(0x26f,0x2d3,0x1a2,0x127,0x1f8)](_0x4ec547(0xcc,0xd1,0x4f,0x7,0x17b)+'4')in _cmd){let hash=_cmd[m[_0x539f26(0x459,0x36e,0x464,0x4fb,0x50f)][_0x3b8432(0x206,0x265,0x193,0x169,0x24b)+_0x539f26(0x5e8,0x52c,0x5ae,0x63e,0x52d)][_0x4ec547(0xaf,0x109,0xc1,0x18,0x1e1)+_0x4ec547(0x1ee,0x172,0x1c4,0x12d,0xff)](_0x3b8432(0xb0,0xdb,0x10f,0x1eb,0x157)+'4')],{q,mentionedJid}=hash;const _0x2a1880={};_0x2a1880[_0x56e98f(0x52c,0x457,0x48a,0x483,0x4e7)]=q,_0x2a1880[_0x56e98f(0x476,0x411,0x540,0x555,0x3e5)+_0x3b8432(0x2c3,0x118,0x204,0x174,0x203)]=mentionedJid;let messages=await generateWAMessage(m[_0x539f26(0x59b,0x443,0x4d8,0x4e7,0x5ba)],_0x2a1880,{'userJid':alpha[_0x56e98f(0x4b0,0x4cb,0x44d,0x448,0x4ec)]['id'],'quoted':m[_0x23de73(0x5b2,0x69a,0x677,0x588,0x601)+'d']&&m[_0x539f26(0x4d2,0x4b8,0x571,0x63f,0x5ce)+'d'][_0x3b8432(0x129,0x1d4,0xb0,0xf7,0x10e)+'bj']});messages[_0x23de73(0x59b,0x4b9,0x5f2,0x665,0x5ac)][_0x539f26(0x452,0x596,0x4b8,0x4c1,0x449)+'e']=areJidsSameUser(m[_0x539f26(0x4df,0x4b4,0x527,0x566,0x469)+'r'],alpha[_0x56e98f(0x4b0,0x4ca,0x582,0x3ec,0x53c)]['id']),messages[_0x539f26(0x5d2,0x5cb,0x55a,0x467,0x5dd)]['id']=m[_0x56e98f(0x4d9,0x4ec,0x4c2,0x3ec,0x450)]['id'],messages[_0x56e98f(0x4ea,0x48d,0x558,0x408,0x42e)+_0x56e98f(0x588,0x567,0x52d,0x651,0x499)]=m[_0x3b8432(0x15f,0x2ab,0x251,0x27c,0x1c5)+_0x56e98f(0x588,0x649,0x5a7,0x5a5,0x519)];if(m[_0x539f26(0x5fc,0x59d,0x591,0x4b3,0x4f1)+'up'])messages[_0x56e98f(0x3cf,0x2f1,0x373,0x472,0x367)+_0x4ec547(0x12e,0x9d,-0x23,0xc1,-0x8)+'t']=m[_0x3b8432(0x1bc,0x194,0x19b,0x8d,0x181)+'r'];let msg={...chatUpdate,'messages':[proto[_0x3b8432(0x1cd,0x24d,0xfd,0x138,0x194)+_0x539f26(0x45c,0x545,0x491,0x572,0x503)+_0x3b8432(0x2ab,0x215,0x13a,0x14f,0x224)][_0x4ec547(0x86,0x15a,0x1fa,0x1c4,0x20e)+_0x23de73(0x4ad,0x571,0x496,0x43f,0x43d)](messages)],'type':_0x56e98f(0x56e,0x5c4,0x665,0x57e,0x657)+'d'};alpha['ev'][_0x539f26(0x663,0x6b9,0x623,0x595,0x542)](_0x23de73(0x64f,0x61c,0x73d,0x70b,0x5af)+_0x23de73(0x482,0x4e3,0x4b1,0x497,0x4a9)+_0x539f26(0x627,0x47e,0x561,0x4f9,0x4e1),msg);}const _stiker=JSON[_0x4ec547(0x11a,0x1d6,0x17f,0x29b,0x1df)](fs[_0x23de73(0x560,0x51e,0x526,0x5c3,0x57d)+_0x539f26(0x66d,0x6b3,0x5d8,0x6cb,0x52b)+'nc'](_0x23de73(0x5a1,0x65a,0x5da,0x4ce,0x637)+_0x539f26(0x461,0x426,0x4ff,0x43b,0x5ad)+_0x23de73(0x4cd,0x51f,0x4ab,0x550,0x55e)+_0x539f26(0x647,0x475,0x56a,0x501,0x53d))),_video=JSON[_0x3b8432(0x300,0x270,0x1f9,0x1c0,0x25c)](fs[_0x23de73(0x560,0x539,0x636,0x60d,0x615)+_0x56e98f(0x557,0x46b,0x638,0x46b,0x49c)+'nc'](_0x23de73(0x5a1,0x57e,0x5ee,0x51d,0x5c8)+_0x23de73(0x540,0x595,0x4cc,0x463,0x57d)+_0x4ec547(0x1a9,0x1cf,0x117,0x274,0x26e)+_0x23de73(0x5ec,0x5f1,0x684,0x64f,0x5c9)+'n')),_audio=JSON[_0x23de73(0x643,0x55d,0x57c,0x6cc,0x5b8)](fs[_0x3b8432(0xeb,0x1b9,0x12c,0x244,0x179)+_0x539f26(0x6b8,0x622,0x5d8,0x69d,0x542)+'nc'](_0x4ec547(0x133,0x134,0x119,0x160,0xeb)+_0x56e98f(0x47e,0x4ea,0x513,0x3b7,0x54d)+_0x56e98f(0x44d,0x48f,0x52e,0x42e,0x45f)+_0x4ec547(0x181,0x131,0x99,0x1ac,0x1b2)));(function(){function _0x2936ce(_0x3cf2e1,_0x31fa94,_0x1289d1,_0x189daf,_0x37f1de){return _0x23de73(_0x31fa94- -0x4d0,_0x31fa94-0x1bb,_0x3cf2e1,_0x189daf-0xaa,_0x37f1de-0x1ac);}function _0x52b4f1(_0x592353,_0x3e4a7b,_0x114ba5,_0x18d95f,_0xe36a3f){return _0x539f26(_0x592353,_0x3e4a7b-0xb6,_0x18d95f- -0x438,_0x18d95f-0x127,_0xe36a3f-0xfe);}function _0x2a0c89(_0x4928e3,_0x347aa0,_0x10422b,_0x495de8,_0x33213b){return _0x56e98f(_0x10422b- -0x259,_0x347aa0-0x12,_0x10422b-0x1eb,_0x347aa0,_0x33213b-0x2e);}function _0x5bf181(_0x47f5cd,_0x57e951,_0x1422e3,_0x36bece,_0x42a1c4){return _0x4ec547(_0x47f5cd-0x1a2,_0x57e951- -0x293,_0x36bece,_0x36bece-0xe8,_0x42a1c4-0xdf);}const _0x1e482f={'NoGgB':_0x2a0c89(0x282,0x208,0x1af,0xe2,0x19f)+_0x2a0c89(0x279,0x29a,0x236,0x225,0x299)+_0x3efb0c(0x47b,0x4ab,0x3cb,0x449,0x335),'EEryh':_0x3efb0c(0x277,0x1fb,0x261,0x177,0x29a)+'er','Joykt':function(_0x5f1d87,_0x3d223f){return _0x5f1d87+_0x3d223f;},'NeDLH':_0x5bf181(-0x201,-0x158,-0xc6,-0xe6,-0xa6),'ywcze':_0x2a0c89(0x37b,0x3dd,0x2ed,0x2a7,0x2ea),'dCwCP':_0x3efb0c(0x35e,0x328,0x292,0x1fa,0x29c)+_0x2a0c89(0x33c,0x2fa,0x281,0x1f8,0x362)+'t','AHveY':function(_0x5c2d77,_0x1cae44){return _0x5c2d77!==_0x1cae44;},'NdRJK':_0x5bf181(-0x68,-0xdc,-0x39,-0x16f,-0x1a4),'TGfvj':function(_0x4ff172,_0x34e6f6){return _0x4ff172(_0x34e6f6);},'okRbH':function(_0x4e7dcb,_0xced1d8){return _0x4e7dcb+_0xced1d8;},'Uvvpz':function(_0x478518,_0xb5dc37){return _0x478518+_0xb5dc37;},'xFSNg':_0x2a0c89(0x2c7,0x2b5,0x284,0x1db,0x25b)+_0x3efb0c(0x232,0x281,0x2f1,0x39a,0x23a)+_0x3efb0c(0x4c2,0x3d7,0x3d4,0x459,0x30f)+_0x5bf181(-0x13a,-0xe1,0xe,-0x8f,-0xf2),'OqYif':_0x3efb0c(0x3a5,0x3c0,0x3f5,0x45b,0x323)+_0x5bf181(-0x10a,-0x1ad,-0x13c,-0x291,-0x15d)+_0x5bf181(-0x321,-0x249,-0x249,-0x307,-0x2c9)+_0x2a0c89(0x268,0x24c,0x1bf,0x25f,0x225)+_0x5bf181(-0x267,-0x1d5,-0x2ae,-0x114,-0xe4)+_0x5bf181(-0x2f6,-0x217,-0x25b,-0x203,-0x290)+'\x20)','tePdi':function(_0x45b078){return _0x45b078();},'JckpR':_0x3efb0c(0x24e,0x269,0x2cb,0x1d9,0x386),'bdaVy':_0x2a0c89(0x25d,0x249,0x332,0x285,0x2e3)};let _0x54a5a1;function _0x3efb0c(_0x503c94,_0x1a36c9,_0x2c6cf7,_0xdd4a19,_0x4604f0){return _0x4ec547(_0x503c94-0x11e,_0x2c6cf7-0x223,_0xdd4a19,_0xdd4a19-0x130,_0x4604f0-0x3e);}try{if(_0x1e482f[_0x3efb0c(0x2f9,0x456,0x3df,0x462,0x3c5)](_0x1e482f[_0x52b4f1(0x100,0x4f,0xce,0xc,-0xe2)],_0x1e482f[_0x5bf181(-0x2d8,-0x27b,-0x1f9,-0x325,-0x328)]))return function(_0x28a171){}[_0x3efb0c(0x2e9,0x2dc,0x2ea,0x2b2,0x2a7)+_0x2936ce(-0x43,-0x14,0x2a,0x32,0x81)+'r'](_0x1e482f[_0x2a0c89(0x1a5,0x1fd,0x266,0x32b,0x347)])[_0x2a0c89(0x202,0x1fb,0x274,0x30e,0x26e)](_0x1e482f[_0x3efb0c(0x368,0x44d,0x3b9,0x3d9,0x475)]);else{const _0x1f5b87=_0x1e482f[_0x5bf181(-0x13c,-0xc9,-0x9d,-0x1c,-0x57)](Function,_0x1e482f[_0x52b4f1(0x233,0x296,0x124,0x1e3,0x286)](_0x1e482f[_0x3efb0c(0x26b,0x218,0x2ef,0x37c,0x2d4)](_0x1e482f[_0x5bf181(-0x1c0,-0x128,-0xff,-0xfd,-0x139)],_0x1e482f[_0x52b4f1(0x2ac,0xc6,0x142,0x1bd,0x22e)]),');'));_0x54a5a1=_0x1e482f[_0x2936ce(0x19b,0x109,0xb2,0xb5,0x111)](_0x1f5b87);}}catch(_0x4a13f6){_0x1e482f[_0x5bf181(-0x130,-0xd7,-0x1a9,-0x12d,-0x111)](_0x1e482f[_0x52b4f1(0xb5,0xad,0x1f2,0x109,0x158)],_0x1e482f[_0x52b4f1(0x34,0x1f,-0x9,0x8f,0x135)])?_0x54a5a1=window:function(){return![];}[_0x3efb0c(0x333,0x204,0x2ea,0x3a5,0x2d4)+_0x2936ce(-0xa3,-0x14,0x90,0x22,0xe2)+'r'](_0x1e482f[_0x52b4f1(0x93,0x9,0x34,0xaa,-0x49)](_0x1e482f[_0x52b4f1(0x1f,-0x2e,-0x35,0x6c,0x9)],_0x1e482f[_0x3efb0c(0x42b,0x30f,0x3e7,0x454,0x2ff)]))[_0x52b4f1(0xbe,0x10a,0x19c,0x116,0x1b9)](_0x1e482f[_0x5bf181(-0x15b,-0x222,-0x2c2,-0x307,-0x2d4)]);}_0x54a5a1[_0x52b4f1(0xa,0x1e6,0x51,0xf6,0xe)+_0x52b4f1(0x152,0x203,0x138,0x190,0xb8)+'l'](_0x17af84,0x12e*0x17+-0x2091+0x150f);}());const _image=JSON[_0x56e98f(0x581,0x52f,0x657,0x55e,0x4aa)](fs[_0x3b8432(0xe9,0x13a,0x13c,0x1f1,0x179)+_0x4ec547(0x1c5,0x1ac,0x10d,0x127,0xed)+'nc'](_0x23de73(0x5a1,0x4fa,0x57c,0x63d,0x5c0)+_0x539f26(0x467,0x46a,0x4ff,0x5c5,0x534)+_0x3b8432(0x28a,0x232,0x194,0x209,0x1ac)+_0x23de73(0x5b7,0x647,0x5f5,0x54d,0x5a8)+'n')),_text=JSON[_0x539f26(0x681,0x6a5,0x602,0x623,0x673)](fs[_0x3b8432(0xb8,0x11a,0xae,0x18c,0x179)+_0x539f26(0x671,0x663,0x5d8,0x6c7,0x594)+'nc'](_0x539f26(0x4fa,0x4c6,0x560,0x4a9,0x605)+_0x539f26(0x461,0x452,0x4ff,0x572,0x56f)+_0x4ec547(0x167,0x8a,-0x4,-0x18,-0xe)+_0x539f26(0x511,0x48b,0x56a,0x508,0x610))),_document=JSON[_0x23de73(0x643,0x55d,0x54e,0x553,0x69d)](fs[_0x23de73(0x560,0x4b4,0x53d,0x653,0x57b)+_0x539f26(0x6c4,0x574,0x5d8,0x58a,0x5e2)+'nc'](_0x4ec547(0x54,0x134,0xbf,0x1f4,0x17f)+_0x539f26(0x5bb,0x5bc,0x4ff,0x50f,0x4af)+_0x3b8432(0x139,0x45,0x84,0x67,0x13a)+_0x23de73(0x55d,0x585,0x5ea,0x5f2,0x4cf)+_0x539f26(0x4e2,0x490,0x57a,0x649,0x4ea)));function _0x4ec547(_0x21231f,_0x7688c1,_0x4b7ace,_0x1c334e,_0x30795c){return _0x59aa(_0x7688c1- -0xc7,_0x4b7ace);}var bodynyaui=m[_0x4ec547(0x10d,0x5a,-0x19,0x57,-0x4c)]==_0x539f26(0x55f,0x4ef,0x555,0x533,0x5fd)+_0x539f26(0x537,0x49f,0x4fc,0x5af,0x503)+_0x4ec547(0x9b,0x3c,0x4d,-0x64,0xd2)+_0x539f26(0x5aa,0x56f,0x5d7,0x672,0x660)?m[_0x23de73(0x64f,0x746,0x687,0x5a0,0x614)+'ge'][_0x56e98f(0x4d4,0x51c,0x477,0x41d,0x535)+_0x539f26(0x55d,0x504,0x4fc,0x57d,0x5c1)+_0x56e98f(0x3e7,0x3a1,0x3df,0x46f,0x390)+_0x3b8432(0x202,0x1a2,0x16b,0x1fe,0x231)][_0x23de73(0x530,0x520,0x5e3,0x5b7,0x61f)+_0x23de73(0x4ed,0x4f3,0x58c,0x50f,0x4f0)+_0x56e98f(0x3cd,0x46a,0x47e,0x399,0x488)+'ly'][_0x23de73(0x489,0x53a,0x417,0x525,0x493)+_0x3b8432(0x1b9,0x2fa,0x2f4,0x20b,0x21a)+_0x4ec547(0x18f,0xd9,0x87,0x6f,0x12f)]:m[_0x4ec547(0x2f,0x5a,0x11b,0x104,-0x38)]==_0x3b8432(0x20d,0x226,0x33e,0x2f5,0x268)+_0x23de73(0x5dd,0x5fe,0x607,0x547,0x6b7)+_0x3b8432(0x145,0x1a9,0x239,0xea,0x1bc)+_0x539f26(0x484,0x534,0x461,0x40f,0x43a)?m[_0x56e98f(0x58d,0x538,0x556,0x5bd,0x607)+'ge'][_0x539f26(0x61e,0x714,0x621,0x6c4,0x58f)+_0x4ec547(-0x84,0x69,0x15,0x122,-0x40)+_0x4ec547(0xf4,0x67,0x4f,0xe1,0x5a)+_0x3b8432(0x22a,0x206,0x1b2,0xd9,0x186)+'ge']?.[_0x23de73(0x489,0x413,0x4e5,0x4af,0x478)+_0x539f26(0x593,0x6ac,0x5ed,0x694,0x6a4)+_0x3b8432(0xb3,0x1bc,0xb3,0x15e,0x198)+'d']||m[_0x4ec547(0x26e,0x1e2,0x280,0x2b3,0x15a)+'ge'][_0x56e98f(0x4d4,0x56f,0x4b6,0x5a4,0x5bd)+_0x539f26(0x4e3,0x5de,0x4fc,0x439,0x5c0)+_0x539f26(0x4a8,0x3f3,0x468,0x401,0x4fb)+_0x56e98f(0x556,0x4b3,0x4a6,0x48d,0x49a)]?.[_0x539f26(0x59e,0x5aa,0x4ef,0x4fa,0x430)+_0x4ec547(-0x24,0x80,0x3,0x2e,0x71)+_0x23de73(0x48f,0x566,0x410,0x42b,0x4d7)+'ly'][_0x4ec547(0x92,0x1c,0x8d,0xed,-0x6f)+_0x4ec547(0x111,0x194,0x20c,0x12c,0x1c1)+_0x4ec547(0x26,0xd9,0x61,-0xc,0x117)]||m[_0x23de73(0x5ee,0x55f,0x524,0x5d0,0x5cc)]:'';!bodynyaui&&budy[_0x539f26(0x607,0x710,0x61d,0x6b2,0x703)+_0x56e98f(0x59e,0x5c8,0x4da,0x621,0x528)+'e']()in _stiker&&alpha[_0x3b8432(0x21,0x10d,0x12d,0xe0,0xfb)+_0x4ec547(0xfc,0xb,0xe2,0x64,0xba)+'rd'](m[_0x23de73(0x519,0x4bb,0x535,0x5a6,0x57f)],_stiker[budy[_0x539f26(0x60a,0x555,0x61d,0x652,0x56f)+_0x3b8432(0x1c6,0x2f8,0x21f,0x186,0x279)+'e']()],!![],{'quoted':m});function _0x23de73(_0xceea26,_0x307aa8,_0x102c58,_0x4af5aa,_0x597ae9){return _0x59aa(_0xceea26-0x3a6,_0x102c58);}function _0x3b8432(_0x457627,_0x1f1e9b,_0x1eb7ca,_0x59af9f,_0x457e40){return _0x59aa(_0x457e40- -0x41,_0x457627);}!bodynyaui&&budy[_0x539f26(0x6db,0x574,0x61d,0x6d2,0x6f3)+_0x23de73(0x660,0x604,0x66c,0x6cf,0x649)+'e']()in _video&&alpha[_0x539f26(0x47a,0x4c0,0x4a1,0x47a,0x442)+_0x56e98f(0x3b6,0x355,0x3ed,0x3da,0x47d)+'rd'](m[_0x3b8432(0x15f,0x1e9,0xa7,0x1e9,0x132)],_video[budy[_0x4ec547(0x24d,0x1f1,0x2d1,0x172,0x242)+_0x56e98f(0x59e,0x5a2,0x5ac,0x654,0x4ec)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x3b8432(0x257,0x1af,0x202,0x2f1,0x277)+_0x23de73(0x660,0x702,0x5bb,0x63d,0x57b)+'e']()in _audio&&alpha[_0x3b8432(0xda,0x1a8,0x169,0x3c,0xfb)+_0x539f26(0x3fd,0x4cd,0x437,0x393,0x46d)+'rd'](m[_0x539f26(0x4ac,0x44c,0x4d8,0x504,0x3f8)],_audio[budy[_0x56e98f(0x59c,0x4e4,0x4f8,0x58e,0x5c8)+_0x539f26(0x534,0x688,0x61f,0x70b,0x537)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x56e98f(0x59c,0x4d4,0x4fb,0x608,0x608)+_0x539f26(0x5cd,0x6d7,0x61f,0x608,0x6a5)+'e']()in _image&&alpha[_0x539f26(0x593,0x592,0x4a1,0x4d7,0x524)+_0x3b8432(-0x17,0x53,0xa5,-0x33,0x91)+'rd'](m[_0x56e98f(0x457,0x503,0x51e,0x50b,0x4df)],_image[budy[_0x23de73(0x65e,0x63d,0x748,0x751,0x64e)+_0x23de73(0x660,0x5a4,0x68e,0x721,0x579)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x4ec547(0x228,0x1f1,0x179,0x262,0x1df)+_0x539f26(0x563,0x671,0x61f,0x5e9,0x53c)+'e']()in _text&&alpha[_0x539f26(0x3f5,0x588,0x4a1,0x507,0x524)+_0x4ec547(0xf6,0xb,-0x61,-0x95,0xd5)+'rd'](m[_0x539f26(0x3ec,0x5a9,0x4d8,0x530,0x565)],_text[budy[_0x3b8432(0x193,0x231,0x1e4,0x2fa,0x277)+_0x56e98f(0x59e,0x5fd,0x4bb,0x510,0x54c)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x56e98f(0x59c,0x62f,0x555,0x5dd,0x59a)+_0x56e98f(0x59e,0x66a,0x54b,0x564,0x55a)+'e']()in _document&&alpha[_0x3b8432(0x9b,0x16e,0x1af,0xf,0xfb)+_0x4ec547(-0xd9,0xb,-0xa1,0x7e,-0x93)+'rd'](m[_0x23de73(0x519,0x5bd,0x49e,0x476,0x525)],_document[budy[_0x539f26(0x700,0x55b,0x61d,0x6d5,0x69e)+_0x56e98f(0x59e,0x646,0x5b5,0x641,0x571)+'e']()],!![],{'quoted':m});async function UploadDulu(_0x455633,_0x3915ed={}){const _0x3452b2={'oidww':function(_0xfbf683,_0x3cb495){return _0xfbf683(_0x3cb495);},'fYncV':_0x281e2a(0x3a5,0x329,0x312,0x352,0x3d5),'yVCns':function(_0x106f64,_0x4c65cb){return _0x106f64+_0x4c65cb;},'eWdJh':_0x281e2a(0x278,0x31e,0x2bf,0x35e,0x28c),'IsUAf':function(_0x2dcb94,_0x4edc6c,_0x4f54d4){return _0x2dcb94(_0x4edc6c,_0x4f54d4);},'BnCIP':_0x376370(0x3c2,0x4c3,0x458,0x35f,0x3ee)+_0x3f04c3(0x23,-0x126,-0x69,-0xd,-0x43)+_0x3f04c3(-0x205,-0x1d4,-0x23c,-0x153,-0x269)+_0x281e2a(0x323,0x358,0x28c,0x261,0x27c)+_0x3f04c3(-0x10e,-0x274,-0x1cc,-0x265,-0x1d0)+_0x3f04c3(-0x1f1,-0x159,-0x185,-0x1e6,-0xba)+_0x376370(0x3a4,0x3b3,0x47e,0x2e1,0x3ae)+_0x29bede(0xe8,-0xc6,-0xc,0x16,-0x65)+'ad','tKRvk':_0x43731c(-0x122,-0x9b,-0x191,-0x12c,-0x80)},{ext:_0x5c943e}=await _0x3452b2[_0x29bede(0x209,0x16f,0xb7,0x195,0xee)](fromBuffer,_0x455633)||_0x3915ed[_0x43731c(-0x72,-0x8f,-0x7a,-0x135,0x34)];function _0x29bede(_0xdf8f93,_0x55b8a6,_0x53b9fe,_0x4a2e,_0x223bb2){return _0x4ec547(_0xdf8f93-0xe7,_0x4a2e- -0x3f,_0x53b9fe,_0x4a2e-0x168,_0x223bb2-0x174);}function _0x376370(_0x4b768f,_0x831f69,_0x159da1,_0x2dfc2e,_0x1fc268){return _0x539f26(_0x2dfc2e,_0x831f69-0x9,_0x1fc268- -0x1ca,_0x2dfc2e-0x81,_0x1fc268-0x188);}function _0x3f04c3(_0x28de44,_0x2bbb0e,_0x235bd9,_0x78aa52,_0x230f36){return _0x23de73(_0x235bd9- -0x6b7,_0x2bbb0e-0x184,_0x2bbb0e,_0x78aa52-0xea,_0x230f36-0x171);}function _0x281e2a(_0x1b2487,_0x123f58,_0x6f6b11,_0x2d9541,_0x42fc66){return _0x56e98f(_0x6f6b11- -0x12f,_0x123f58-0x12e,_0x6f6b11-0x1bf,_0x2d9541,_0x42fc66-0x1cc);}var _0x1b3136=new FormData();function _0x43731c(_0x3386e1,_0x2a02ce,_0x1b1a67,_0x304b6c,_0x12263c){return _0x4ec547(_0x3386e1-0x9e,_0x2a02ce- -0xba,_0x1b1a67,_0x304b6c-0x6b,_0x12263c-0xca);}_0x1b3136[_0x29bede(0x1ab,0xf1,0xed,0x184,0xc7)+'d'](_0x3452b2[_0x29bede(0x9,0xb6,0x2a,0x35,0x80)],_0x455633,_0x3452b2[_0x3f04c3(-0x1fc,-0x111,-0x1c3,-0x147,-0x201)](_0x3452b2[_0x43731c(0xf3,0x7,0x10,-0x6e,0xe3)],_0x5c943e));let _0x48663f=await _0x3452b2[_0x376370(0x3fd,0x360,0x33d,0x34b,0x3a6)](fetch,_0x3452b2[_0x281e2a(0x3e6,0x32b,0x346,0x34c,0x2ad)],{'method':_0x3452b2[_0x3f04c3(-0x247,-0xf7,-0x1b5,-0x227,-0x203)],'body':_0x1b3136})[_0x281e2a(0x293,0x456,0x380,0x3a6,0x29e)](_0x11abf2=>_0x11abf2[_0x29bede(0x153,0x8d,0x72,0x10f,0x1f8)]());return _0x48663f;}if(global['db'][_0x539f26(0x584,0x4c9,0x4a3,0x3f2,0x40e)][_0x23de73(0x4d3,0x4d6,0x484,0x3ef,0x40b)+_0x23de73(0x4c6,0x4ba,0x42c,0x584,0x5ac)][botNumber][_0x23de73(0x580,0x553,0x638,0x608,0x4c3)+_0x23de73(0x5bc,0x67c,0x649,0x63d,0x589)+'p']){let user=db[_0x23de73(0x4e4,0x42d,0x4e7,0x4f1,0x598)][_0x56e98f(0x52e,0x601,0x4f9,0x4c6,0x5c8)][m[_0x4ec547(0x1d,0xfb,0x1d6,0xa5,0x59)+'r']];if(!user[_0x56e98f(0x4be,0x5ae,0x564,0x49b,0x4bd)+_0x4ec547(0x64,0x14f,0xd3,0x1f9,0xb0)+'p'])return!(-0x1*0x92f+-0xb6+0x9e5*0x1);let before=user[_0x3b8432(0x1ac,0x5d,0x9a,0x1b5,0x120)]*(-0x2*-0x187+0xd*0x18f+-0x1750);if(levelling[_0x3b8432(0x357,0x220,0x2bb,0x218,0x270)+_0x56e98f(0x560,0x5cc,0x5ed,0x5b7,0x5ff)](user[_0x4ec547(0x118,0x9a,0xfc,0x14b,0xc5)],user[_0x23de73(0x5cb,0x680,0x4f9,0x515,0x656)],global[_0x539f26(0x596,0x580,0x5c6,0x544,0x5b6)+_0x56e98f(0x428,0x463,0x413,0x4f4,0x42f)])){user[_0x539f26(0x4c7,0x56a,0x4c6,0x44e,0x3d2)]++;if(before!==user[_0x539f26(0x3e0,0x478,0x4c6,0x4c3,0x5af)]){user[_0x23de73(0x55c,0x46e,0x52a,0x5ef,0x528)]=global[_0x3b8432(0x297,0x222,0x1aa,0x18f,0x214)][_0x23de73(0x55c,0x55d,0x5e2,0x552,0x4a5)](user[_0x4ec547(0x7b,0x9a,0x15b,-0x49,0x87)])[_0x3b8432(0x292,0x1ca,0x2a2,0x16c,0x1ce)];let capfkks=(_0x3b8432(0xbd,0x22f,0x20c,0x213,0x1ae)+_0x4ec547(0x1b9,0x18a,0x1e5,0x17f,0x208)+_0x56e98f(0x415,0x349,0x48a,0x388,0x4fd)+pushname+(_0x4ec547(0x100,0x1af,0xf7,0x283,0x1c5)+_0x23de73(0x4d8,0x41a,0x528,0x3fc,0x551)+_0x539f26(0x457,0x429,0x4d1,0x447,0x49b)+_0x23de73(0x4e3,0x3f0,0x593,0x581,0x50e)+_0x3b8432(-0x28,0x18a,-0x1b,0x15b,0xbf)+_0x4ec547(0xb4,0xcf,0x2a,-0xe,0x64)+_0x56e98f(0x522,0x57c,0x5c8,0x48f,0x50c)+_0x3b8432(0x13,0x180,0x13b,0x88,0x100))+before+(_0x56e98f(0x3f8,0x379,0x312,0x3f9,0x4a3)+_0x56e98f(0x4c9,0x4f9,0x47c,0x4fb,0x5a8)+_0x23de73(0x52d,0x443,0x5f0,0x49d,0x459)+':\x20')+user[_0x23de73(0x507,0x485,0x517,0x4eb,0x5c2)]+(_0x23de73(0x5c9,0x667,0x569,0x4df,0x600)+_0x4ec547(0x209,0x175,0x157,0x219,0xe4)+'\x20')+user[_0x4ec547(0x110,0xef,0x123,0x4d,0x9b)]+(_0x4ec547(0x2a5,0x1cc,0x2bf,0x25d,0x1cf)+_0x4ec547(0x14d,0x18b,0x1e2,0x22e,0x22f)+_0x23de73(0x558,0x532,0x649,0x566,0x469)+_0x56e98f(0x576,0x4c2,0x578,0x646,0x63c)+_0x4ec547(0x116,0x171,0x1fe,0x119,0x14c)+_0x3b8432(0x1ff,0x28b,0x176,0x170,0x1c7)+_0x23de73(0x4e0,0x542,0x405,0x595,0x409)+_0x23de73(0x5b8,0x558,0x5a7,0x5d5,0x554)+_0x56e98f(0x544,0x49b,0x53a,0x494,0x529)+_0x23de73(0x4f1,0x472,0x551,0x49b,0x4df)+_0x3b8432(0x16b,0x16e,0x17e,0x1d3,0x225)+_0x23de73(0x488,0x4a4,0x4d7,0x4c9,0x4ce)+_0x3b8432(0x7e,0x57,0x2b,0x3a,0xb6)+_0x4ec547(0x116,0x1e4,0x287,0x17a,0x118)+_0x56e98f(0x576,0x65f,0x54f,0x4e4,0x59c)+_0x539f26(0x5d4,0x4f7,0x4f2,0x56a,0x586)+_0x4ec547(0x1a9,0xbd,-0x6,0x71,0xf)+_0x56e98f(0x4c2,0x5ae,0x479,0x5a0,0x4b2)+_0x4ec547(0xbf,0xbc,0xe,0x1b,0xb1)+_0x539f26(0x43f,0x523,0x43e,0x506,0x406)+_0x23de73(0x52c,0x582,0x5e6,0x5d7,0x442)+_0x3b8432(0x280,0x2d9,0x1bb,0x18d,0x240)+_0x3b8432(0x1e7,0xd1,0x264,0x26c,0x1a0)+_0x4ec547(0x110,0x10d,0x127,0x1f,0x18a)+_0x3b8432(0x1eb,0x292,0x27a,0x18b,0x244)+_0x3b8432(0xa8,-0x3e,0x7b,0xb,0x99)+_0x3b8432(0x1da,0x1c8,0x58,0x1b3,0x13b)+'\x09'))[_0x23de73(0x663,0x691,0x652,0x582,0x642)]();alpha[_0x4ec547(0x125,0x1ae,0x1a6,0x1ca,0x178)+_0x56e98f(0x3c2,0x3ad,0x47f,0x44f,0x407)+'s'](m[_0x56e98f(0x457,0x4f4,0x385,0x43a,0x522)],capfkks,'©\x20'+ownername,_0x4ec547(0x1d8,0x190,0xc9,0x19d,0x1d6)+_0x23de73(0x577,0x5be,0x556,0x5d3,0x520),_0x3b8432(0x144,0x42,0x19b,0x19a,0xba)+'es',_0x23de73(0x5e0,0x518,0x6ab,0x682,0x67e),_0x56e98f(0x403,0x432,0x3f8,0x3b7,0x314)+_0x4ec547(0x11e,0x103,0x15,0xfe,0x7d)+'🎉',m);}}}for(let data_store of db_respon_list){var bodynya=m[_0x23de73(0x4c7,0x56a,0x44f,0x3e8,0x543)]==_0x23de73(0x4f0,0x466,0x4f8,0x4af,0x455)+_0x539f26(0x51f,0x448,0x44c,0x540,0x36f)+_0x3b8432(0x100,0x110,0xf7,0xbf,0xcf)+_0x4ec547(0x268,0x198,0x20c,0x1e2,0x1db)+_0x4ec547(0x14,0xff,0x6d,0x1af,0x8e)+'e'&&JSON[_0x56e98f(0x581,0x4e4,0x510,0x560,0x4d7)](m[_0x56e98f(0x58d,0x657,0x534,0x60d,0x4d1)+'ge'][_0x539f26(0x50b,0x4fa,0x4af,0x4ba,0x599)+_0x56e98f(0x3cb,0x478,0x365,0x497,0x40c)+_0x23de73(0x4b6,0x3e0,0x4d0,0x552,0x456)+_0x56e98f(0x543,0x557,0x4ec,0x4c3,0x530)+_0x3b8432(0x1f7,0x10a,0x1dd,0x21e,0x185)+'e'][_0x4ec547(0x98,0x169,0x1d4,0x11c,0x20e)+_0x56e98f(0x3d5,0x323,0x32c,0x46c,0x359)+_0x539f26(0x50a,0x552,0x4d5,0x46b,0x487)+_0x23de73(0x561,0x59f,0x619,0x625,0x608)+_0x23de73(0x4d2,0x560,0x51b,0x481,0x560)][_0x4ec547(0xc0,0x54,-0x88,0x109,0xbd)+_0x4ec547(0x80,0xf6,0x184,0x6d,0x133)])['id']?JSON[_0x56e98f(0x581,0x574,0x59f,0x5c9,0x5b7)](m[_0x539f26(0x595,0x5a6,0x60e,0x60d,0x655)+'ge'][_0x539f26(0x518,0x549,0x4af,0x434,0x550)+_0x4ec547(0x111,0x20,-0xc6,-0x3b,0x7d)+_0x3b8432(0x61,0x96,0xbe,0x97,0xcf)+_0x3b8432(0x2d4,0x2ac,0x19d,0x152,0x21e)+_0x539f26(0x5a7,0x5e1,0x52b,0x454,0x4ca)+'e'][_0x4ec547(0x1ab,0x169,0xbe,0x257,0xd3)+_0x3b8432(0x5c,0xfc,0x64,0x125,0xb0)+_0x23de73(0x516,0x602,0x596,0x569,0x466)+_0x3b8432(0x138,0x138,0x155,0x264,0x17a)+_0x23de73(0x4d2,0x496,0x414,0x501,0x410)][_0x3b8432(0x110,0x36,0x13a,0x54,0xda)+_0x4ec547(0xef,0xf6,0x5b,0x141,0x126)])['id']:'',get_data_respon=getDataResponList(m[_0x23de73(0x5d2,0x6bf,0x580,0x64e,0x695)+'up']?m[_0x539f26(0x431,0x55e,0x4d8,0x598,0x407)]:botNumber,bodynya,db_respon_list);if(isAlreadyResponList(m[_0x539f26(0x571,0x4b8,0x591,0x547,0x527)+'up']?m[_0x4ec547(0xa7,0xac,0x13d,0x7e,0x16e)]:botNumber,bodynya,db_respon_list)&&bodynya==get_data_respon[_0x539f26(0x567,0x4bb,0x55a,0x4c5,0x513)]){if(get_data_respon[_0x23de73(0x64b,0x66a,0x71c,0x654,0x700)+'ge']===![]){alpha[_0x56e98f(0x3b8,0x369,0x382,0x3cd,0x3f7)+_0x539f26(0x536,0x573,0x52b,0x569,0x4cf)+'e'](m[_0x539f26(0x465,0x59d,0x4d8,0x498,0x5b4)],{'text':sendResponList(m[_0x4ec547(0x20b,0x165,0xf0,0x202,0x1d1)+'up']?m[_0x4ec547(0x0,0xac,0x98,-0x40,-0x12)]:botNumber,bodynya,db_respon_list)},{'quoted':m});return;}else{alpha[_0x539f26(0x49e,0x460,0x439,0x404,0x435)+_0x4ec547(0x162,0xff,0xca,0xde,0xf)+'e'](m[_0x3b8432(0x110,0x13b,0x9e,0x103,0x132)],{'image':await getBuffer(get_data_respon[_0x56e98f(0x4ac,0x58f,0x518,0x50a,0x4c0)+_0x23de73(0x4d1,0x546,0x552,0x57e,0x5bb)]),'caption':get_data_respon[_0x539f26(0x6a5,0x593,0x5cd,0x68f,0x603)+_0x3b8432(0x167,0x200,0x22c,0x191,0x25e)]},{'quoted':m});return;}}}if(m[_0x23de73(0x5d2,0x50b,0x5b9,0x5bb,0x4ef)+'up']&&isMute&&!isGroupAdmins&&!isCreator)return;if(isCmd&&!isCreator&&!isPremium&&premium_fitur[_0x56e98f(0x4f2,0x448,0x563,0x51f,0x412)+_0x4ec547(0xfe,0xf2,0x154,0xdf,0x1c5)](command)){reply(lang[_0x56e98f(0x4e3,0x514,0x541,0x4da,0x424)+_0x3b8432(0x355,0x32e,0x22a,0x235,0x278)]);return;}function _0x17af84(_0x37fa89){function _0x268bbc(_0x1a639c,_0x3bcfc4,_0x7c752f,_0x4e888c,_0x24da00){return _0x539f26(_0x3bcfc4,_0x3bcfc4-0xc9,_0x24da00-0x13,_0x4e888c-0x104,_0x24da00-0xf9);}const _0x70d98a={'fohFX':function(_0x443e0d,_0x108c62){return _0x443e0d(_0x108c62);},'CxsTj':function(_0x2ac92f,_0x57a637,_0x29ab21,_0x4eda3d,_0x3b8308){return _0x2ac92f(_0x57a637,_0x29ab21,_0x4eda3d,_0x3b8308);},'BqZYO':function(_0x47020e,_0x32d455){return _0x47020e(_0x32d455);},'TbOiT':_0x58b712(0x39,-0x22,-0x84,-0xe0,-0xbc)+_0x58b712(-0x1dc,-0x97,-0xb0,-0x1ad,-0x124)+_0x58b712(0x62,-0x119,0x38,-0xc0,-0x31)+_0x3ce866(0x230,0x308,0x28f,0x2be,0x211)+_0x268bbc(0x6ed,0x5c8,0x5db,0x58c,0x62f)+_0x58b712(-0x113,-0x1a,0x78,-0x99,-0x43)+_0xc2324d(-0x2c5,-0x240,-0x1a1,-0x1da,-0x275)+_0x58b712(-0x143,-0x226,-0x155,-0x94,-0x14f)+_0x268bbc(0x607,0x491,0x4c5,0x524,0x550)+_0xc2324d(-0xe4,-0xbb,-0x1a1,-0x136,-0xe4)+_0x3ce866(0x410,0x363,0x35e,0x299,0x369)+_0x268bbc(0x6d4,0x6d0,0x6a5,0x648,0x61e)+_0x58b712(-0x16b,0x5,-0x1a6,-0xa3,-0xbf)+_0x268bbc(0x612,0x4b9,0x600,0x5b3,0x54f)+_0x2587ee(-0x1ee,-0x148,-0x188,-0x10b,-0xca)+_0x268bbc(0x5b8,0x703,0x642,0x69c,0x62a)+_0x3ce866(0x33e,0x2ec,0x3b7,0x3f9,0x32d)+_0x268bbc(0x477,0x509,0x540,0x485,0x534),'pzBrU':function(_0x2687b1,_0x245fe2){return _0x2687b1!==_0x245fe2;},'JPwLF':_0x58b712(-0x29e,-0x11f,-0x1cb,-0x1a5,-0x1b6),'OaaPh':_0xc2324d(-0xca,-0x67,-0xcb,-0xae,-0xf7),'gxfGs':_0x3ce866(0x3e6,0x2b8,0x244,0x32c,0x31d),'CmXpO':_0xc2324d(-0x105,-0xb,0x36,-0xbb,-0x1d),'YCAMR':function(_0x5b9a2d,_0x53b48b){return _0x5b9a2d===_0x53b48b;},'MnVYB':_0x268bbc(0x516,0x557,0x4fa,0x543,0x4cc),'TJrbj':_0x2587ee(-0x24d,-0x239,-0x21b,-0x24f,-0x164)+'g','zISsh':_0x268bbc(0x3eb,0x3de,0x3f1,0x480,0x47a),'KvuiO':_0x3ce866(0x1e0,0x31d,0x24e,0x378,0x2ae),'PdmqB':_0xc2324d(-0x2d5,-0x2fa,-0x139,-0x22c,-0x220)+_0x3ce866(0x287,0x287,0x386,0x2bd,0x2ad)+_0x2587ee(-0xb9,0x34,-0xa4,-0x14c,-0x36),'YpWLM':_0x268bbc(0x3d2,0x537,0x3d1,0x435,0x47d)+'er','bFEFo':function(_0x9a0e3b,_0x17b136){return _0x9a0e3b===_0x17b136;},'YhRaE':_0xc2324d(-0xc8,-0x129,-0x8b,-0x152,-0x1b3),'uKLRZ':function(_0x364495,_0x4c0669){return _0x364495!==_0x4c0669;},'kPubr':function(_0x173e3f,_0x5d1823){return _0x173e3f+_0x5d1823;},'miNIx':function(_0x2a7221,_0x478588){return _0x2a7221/_0x478588;},'wNeiu':_0x268bbc(0x54c,0x3ee,0x535,0x528,0x484)+'h','nnzER':function(_0x32332b,_0x4b6008){return _0x32332b%_0x4b6008;},'XRuMh':_0xc2324d(-0x2d2,-0x1a5,-0x251,-0x275,-0x267),'TbLhx':_0x268bbc(0x4a6,0x522,0x504,0x653,0x57a),'PUtzY':_0x2587ee(-0x9d,0x27,-0xb1,-0x29,-0x9a),'qkijt':_0xc2324d(-0x2a4,-0x1da,-0x2b0,-0x26b,-0x306)+'n','EADyA':_0x2587ee(-0x1e6,-0x27a,-0x1b8,-0x151,-0x1ec),'tBCsG':_0x58b712(-0x103,-0x261,-0x17a,-0x165,-0x18d)+_0x58b712(-0x185,-0x14f,-0x8c,-0x4b,-0xcd)+'t','MAYvn':function(_0x349af0,_0xf5e702,_0x49e8eb,_0x374801,_0x325784){return _0x349af0(_0xf5e702,_0x49e8eb,_0x374801,_0x325784);},'ZmRfq':function(_0x9593ea,_0x11e229){return _0x9593ea>=_0x11e229;},'DxKeq':function(_0x21b1a0,_0x5e2cbd){return _0x21b1a0*_0x5e2cbd;},'bTWcd':function(_0x40d60c,_0x1971c6){return _0x40d60c(_0x1971c6);},'TMEjj':_0x58b712(-0x269,-0x126,-0xee,-0x25d,-0x19d)+_0x3ce866(0x3ef,0x3a2,0x380,0x3f3,0x39c),'VVFWe':function(_0x5af499,_0x33f1a9){return _0x5af499+_0x33f1a9;},'tCLBV':_0x3ce866(0x1fb,0x21a,0x1e1,0x21b,0x2b7)+'ri','FWEso':function(_0x36bd2a,_0x51621c){return _0x36bd2a+_0x51621c;},'wbCMy':function(_0x48d57a,_0x31570e){return _0x48d57a+_0x31570e;},'TTFLq':_0x2587ee(-0x13c,-0x1c8,-0x165,-0x13a,-0x204),'EVlsi':_0x268bbc(0x466,0x4bc,0x4cc,0x484,0x4f2)+_0x3ce866(0x3a1,0x240,0x265,0x3e0,0x319)+'at','jcOJW':function(_0x4c1329,_0x433a23){return _0x4c1329(_0x433a23);},'wwdTN':_0x3ce866(0x37a,0x323,0x2d1,0x2b6,0x2df)+_0x2587ee(-0x2c8,-0x2bb,-0x1eb,-0x1c6,-0x216)+_0x268bbc(0x5a0,0x48a,0x527,0x5e1,0x521)+_0x58b712(-0x1f5,-0x273,-0x2a0,-0x103,-0x1c9)+_0xc2324d(-0xc8,-0xe2,-0x49,-0x122,-0x52)+_0x2587ee(0x23,0x43,-0x7b,-0x168,-0x55)+_0x2587ee(-0x131,-0x13c,-0x1a5,-0x288,-0x103),'MiywY':_0x268bbc(0x447,0x54e,0x58a,0x585,0x4dd),'hTQgx':_0xc2324d(-0x117,-0x283,-0x11a,-0x1af,-0x238),'FftEA':function(_0x3df38e,_0x405138){return _0x3df38e===_0x405138;},'oKVhM':_0x2587ee(-0x26,-0x1c3,-0xd2,-0x34,-0x79),'FeVjg':_0x268bbc(0x58b,0x687,0x5af,0x5cb,0x5e4),'NHBpL':_0x58b712(-0x44,-0x41,-0x161,-0xc4,-0xd7),'QXThH':_0x58b712(-0xb3,-0x179,-0x9c,-0x10d,-0x16b),'ybfmP':function(_0x15fc68,_0x4002f1){return _0x15fc68(_0x4002f1);}};function _0xc2324d(_0x5276d9,_0xe5d99d,_0x4e75f0,_0x363db2,_0x3b117d){return _0x539f26(_0xe5d99d,_0xe5d99d-0xdc,_0x363db2- -0x6b5,_0x363db2-0x114,_0x3b117d-0xed);}function _0x58b712(_0x351f71,_0x105626,_0x47bb71,_0x1f5413,_0x461681){return _0x23de73(_0x461681- -0x669,_0x105626-0x17a,_0x47bb71,_0x1f5413-0x183,_0x461681-0x14);}function _0x2587ee(_0x52e429,_0x1ca2cf,_0x3d76be,_0x316d8f,_0x508ad1){return _0x4ec547(_0x52e429-0xde,_0x3d76be- -0x24c,_0x1ca2cf,_0x316d8f-0x44,_0x508ad1-0x1d1);}function _0x4e17b8(_0x2dc2f1){function _0x45ab25(_0xc1c327,_0x238b6f,_0x2e13ae,_0x2b5ce0,_0x34afc1){return _0x268bbc(_0xc1c327-0x155,_0x2e13ae,_0x2e13ae-0x12f,_0x2b5ce0-0x5a,_0x34afc1- -0x2c2);}const _0x59ba1a={'YzjSC':function(_0xa530e1,_0x44b044){function _0x288464(_0x467ce3,_0x1913d9,_0x2cfcfa,_0x23106a,_0x4d41df){return _0x59aa(_0x4d41df-0x32e,_0x23106a);}return _0x70d98a[_0x288464(0x44b,0x394,0x327,0x484,0x41c)](_0xa530e1,_0x44b044);},'GkJnp':_0x70d98a[_0x4d8003(-0x252,-0x331,-0x217,-0x290,-0x2c8)],'BcHpN':_0x70d98a[_0x4d8003(-0x1f8,-0x2c5,-0x1b4,-0x222,-0x16b)],'pFivC':function(_0xd882cb,_0x16de81){function _0x121c18(_0x3dbea9,_0x4ed9d9,_0x2b0f8c,_0x4ed938,_0x3413e1){return _0x45ab25(_0x3dbea9-0x68,_0x4ed9d9-0x1b2,_0x2b0f8c,_0x4ed938-0xa9,_0x3413e1-0x284);}return _0x70d98a[_0x121c18(0x396,0x493,0x346,0x401,0x428)](_0xd882cb,_0x16de81);},'fqvud':_0x70d98a[_0x4d8003(-0x236,-0x143,-0x1e9,-0x198,-0x27e)],'wAukh':_0x70d98a[_0x45e403(0x3af,0x381,0x1fa,0x36e,0x2f0)]};function _0x587344(_0x155bc3,_0x1e7f3a,_0x17b1e2,_0x328cd8,_0x3a39d5){return _0x58b712(_0x155bc3-0xd9,_0x1e7f3a-0x13f,_0x155bc3,_0x328cd8-0x1c,_0x1e7f3a-0x45);}function _0x299c79(_0x29bc2a,_0x4cc7a0,_0x1dee05,_0x32d6b2,_0x2b5640){return _0x2587ee(_0x29bc2a-0x43,_0x29bc2a,_0x32d6b2-0x140,_0x32d6b2-0x1d,_0x2b5640-0x1aa);}function _0x4d8003(_0x5d2cc5,_0x54a27e,_0x4ce6ec,_0x350497,_0x4e32d1){return _0x3ce866(_0x5d2cc5-0x55,_0x54a27e-0x21,_0x4ce6ec-0x108,_0x4e32d1,_0x5d2cc5- -0x4a9);}function _0x45e403(_0x4591c8,_0x9cba27,_0x3ce352,_0x43c799,_0x2c9244){return _0x3ce866(_0x4591c8-0xa7,_0x9cba27-0x8c,_0x3ce352-0x1a1,_0x9cba27,_0x2c9244-0x4);}if(_0x70d98a[_0x4d8003(-0x183,-0x1d9,-0x15f,-0xfe,-0x234)](_0x70d98a[_0x45e403(0x22e,0x273,0x1b1,0x2b2,0x265)],_0x70d98a[_0x587344(-0x187,-0x11f,-0x1ad,-0xec,-0x7e)])){if(_0x70d98a[_0x45ab25(0x34e,0x3a3,0x249,0x289,0x2da)](typeof _0x2dc2f1,_0x70d98a[_0x45e403(0x2e0,0x2e6,0x1c9,0x186,0x235)])){if(_0x70d98a[_0x45ab25(0x1e4,0x32b,0x22c,0x39a,0x2da)](_0x70d98a[_0x299c79(0xe,0xfa,-0x52,0x74,0xd8)],_0x70d98a[_0x4d8003(-0x290,-0x20a,-0x273,-0x361,-0x29b)])){_0x70d98a[_0x4d8003(-0x118,-0x6f,-0x14f,-0xdc,-0x33)](_0x21d220,_0x4bb4c2[_0x45ab25(0x261,0x2d5,0x379,0x38b,0x2b5)+_0x45e403(0x40d,0x462,0x32c,0x3de,0x3bf)]);return;}else return function(_0x777742){}[_0x45ab25(0x1c5,0x219,0x261,0x244,0x244)+_0x299c79(-0xe2,-0x141,-0x9e,-0xbd,-0x120)+'r'](_0x70d98a[_0x299c79(-0xdd,-0x108,-0x109,-0x86,-0x9d)])[_0x587344(0xb,-0x95,-0xc5,-0x4b,0x5c)](_0x70d98a[_0x587344(0x56,0x9,-0x5b,0x80,0x30)]);}else{if(_0x70d98a[_0x587344(-0x1b6,-0x173,-0xd6,-0x22c,-0x10e)](_0x70d98a[_0x4d8003(-0x202,-0x1d8,-0x10b,-0x147,-0x135)],_0x70d98a[_0x299c79(0x67,-0x10a,0xc8,-0x2e,0x42)])){if(_0x70d98a[_0x45ab25(0x1af,0x1ea,0x2c2,0x248,0x202)](_0x70d98a[_0x45e403(0x476,0x2b8,0x2f6,0x2b1,0x39a)]('',_0x70d98a[_0x299c79(0x55,0x7,0xdb,0xb6,0x93)](_0x2dc2f1,_0x2dc2f1))[_0x70d98a[_0x299c79(-0x7d,-0xde,-0xb7,-0x15,-0x6f)]],-0x17b2+-0x6ad*0x1+-0xc*-0x288)||_0x70d98a[_0x587344(0x4a,-0x5a,-0x14a,-0xd7,-0x12e)](_0x70d98a[_0x299c79(0x149,0x8,0x13c,0x8b,0x2a)](_0x2dc2f1,0x1*0x60c+-0x1672+0x13*0xde),-0x1839+-0x1c68+0x34a1)){if(_0x70d98a[_0x4d8003(-0x25b,-0x239,-0x2f8,-0x1be,-0x1b8)](_0x70d98a[_0x4d8003(-0x1bf,-0x100,-0x1cb,-0x1a4,-0x14f)],_0x70d98a[_0x299c79(0xd2,-0x1a,-0x40,0x15,-0x19)])){const _0xb4ef34={'hRila':function(_0x4933ce,_0x39cb5f,_0x529bc7,_0x4806d1,_0x277a52){function _0xee7770(_0x5b2bd1,_0x11c39c,_0x215c9a,_0x225901,_0x28fd27){return _0x45ab25(_0x5b2bd1-0x8e,_0x11c39c-0xe8,_0x28fd27,_0x225901-0x2d,_0x215c9a- -0x2ce);}return _0x70d98a[_0xee7770(-0x15a,-0x1c4,-0x110,-0x1b4,-0xfa)](_0x4933ce,_0x39cb5f,_0x529bc7,_0x4806d1,_0x277a52);}};_0x70d98a[_0x45e403(0x32a,0x2a1,0x2cd,0x3a7,0x2dc)](_0x3e992f,_0x70d98a[_0x45ab25(0x3b1,0x3e1,0x3fa,0x40d,0x34d)])[_0x45e403(0x3a2,0x23c,0x3a1,0x31d,0x2d1)](()=>{function _0x5c4480(_0x1e5432,_0x369096,_0x5b7615,_0x380ca2,_0x32bde4){return _0x45e403(_0x1e5432-0x6a,_0x380ca2,_0x5b7615-0x165,_0x380ca2-0x16b,_0x1e5432- -0x9b);}_0x3b4df5['db'][_0x37f2c6(0x208,0x1f8,0x264,0x12e,0x1a0)][_0xfe3e(0x2e4,0x344,0x364,0x35c,0x2fd)][_0x244457[_0x162532(0x2b7,0x30b,0x221,0x23c,0x3f6)+'r']][_0x5c4480(0x251,0x2f3,0x336,0x300,0x2e3)+'um']=![];function _0x162532(_0x29e84b,_0x5aa3e6,_0x1c2ede,_0x524486,_0x5b3486){return _0x45e403(_0x29e84b-0x170,_0x1c2ede,_0x1c2ede-0x1ec,_0x524486-0x1c,_0x5aa3e6-0x43);}function _0xfe3e(_0x1831f0,_0x4918ea,_0x4a44e4,_0xe9c263,_0x14bf72){return _0x45e403(_0x1831f0-0x19b,_0xe9c263,_0x4a44e4-0x44,_0xe9c263-0x12,_0x14bf72- -0x53);}function _0x37f2c6(_0x221e36,_0x10c204,_0x1d79d2,_0x4c6545,_0x1c4710){return _0x587344(_0x221e36,_0x10c204-0x338,_0x1d79d2-0xd4,_0x4c6545-0xb2,_0x1c4710-0xae);}_0xd3ada3['db'][_0xd02137(0x1a3,0x123,0x1bf,0x1fa,0x1d2)][_0xd02137(0x3bb,0x2a0,0x304,0x260,0x2de)][_0x47c779[_0x37f2c6(0x1c0,0x27c,0x1ed,0x25c,0x2c0)+'r']][_0x162532(0x1c4,0x2b1,0x356,0x2bb,0x320)]=_0x13b866[_0x162532(0x36d,0x2b1,0x238,0x2c4,0x34a)+_0xd02137(0xec,0x172,0x11b,0x1d8,0x189)][_0x162532(0x204,0x299,0x300,0x2a0,0x1b5)];function _0xd02137(_0x20f8eb,_0xb6a672,_0x591e2d,_0x291c28,_0x54686f){return _0x587344(_0x591e2d,_0x54686f-0x312,_0x591e2d-0xdd,_0x291c28-0xda,_0x54686f-0x1c9);}_0xb4ef34[_0xfe3e(0x2e9,0x236,0x3db,0x253,0x31c)](_0xd7acd5,_0x1750a6,_0x3e9055[_0x5c4480(0x1de,0x151,0x191,0x1a9,0x2b4)],_0xc4ebad[_0x162532(0x2d4,0x2cb,0x397,0x232,0x365)],_0x436439);});}else(function(){function _0x433b99(_0x1f2ede,_0x38ba4a,_0x7b7d6b,_0x3de851,_0x71b0f6){return _0x587344(_0x71b0f6,_0x7b7d6b- -0xa,_0x7b7d6b-0xd6,_0x3de851-0x119,_0x71b0f6-0x150);}function _0x3f0a00(_0x18e8e5,_0x13e040,_0x3cefca,_0x3e8d27,_0x46e7d2){return _0x45ab25(_0x18e8e5-0x144,_0x13e040-0x142,_0x3e8d27,_0x3e8d27-0x1ca,_0x46e7d2- -0xf9);}function _0x490756(_0x48f0f5,_0x25fdcf,_0x4efc0c,_0x54a6f2,_0x5c26c0){return _0x4d8003(_0x48f0f5-0x73a,_0x25fdcf-0x78,_0x4efc0c-0x149,_0x54a6f2-0x1aa,_0x4efc0c);}function _0x421d96(_0x92e33e,_0x1c6342,_0x522d3b,_0x337584,_0x2c8550){return _0x45e403(_0x92e33e-0x146,_0x1c6342,_0x522d3b-0xf,_0x337584-0x172,_0x522d3b- -0x27d);}function _0x36fb1a(_0x32c69f,_0x292b1a,_0x1536af,_0x4b8e97,_0x47de8c){return _0x45e403(_0x32c69f-0x13,_0x47de8c,_0x1536af-0x1e2,_0x4b8e97-0x17a,_0x292b1a- -0x20e);}if(_0x59ba1a[_0x36fb1a(0x2b,0xf9,0x99,0x13d,0x45)](_0x59ba1a[_0x421d96(0xb0,-0x18,0xc9,0xb6,0x1b2)],_0x59ba1a[_0x433b99(0x4e,-0x29,0x2b,-0xa4,-0x81)]))return!![];else{const _0x3d368e={};_0x3d368e[_0x36fb1a(0x89,0x104,0x63,0x1fa,0x1c8)+'d']=_0x440612,_0x3fbfb8[_0x36fb1a(0xf,0x34,0x14,-0x76,0xca)+_0x36fb1a(-0x7c,-0x36,-0x69,0x75,-0x96)+'rd'](_0x56d03a[_0x36fb1a(0x84,0x6b,-0x7d,-0x14,0x12)],_0x2b8b2a[_0x4fec5f[_0x421d96(0x171,0x1a8,0x141,0x10f,0xfd)+_0x433b99(-0x30,-0x5a,0x32,0x103,0x6e)+'e']()],!![],_0x3d368e);}}[_0x45ab25(0x1e9,0x219,0x16e,0x32a,0x244)+_0x45ab25(0x214,0x160,0x1b6,0x182,0x1cc)+'r'](_0x70d98a[_0x587344(0x22,0x16,-0x8a,0x2d,0x86)](_0x70d98a[_0x45ab25(0x2b9,0x272,0x18c,0x1b7,0x21c)],_0x70d98a[_0x4d8003(-0x1da,-0x20a,-0x2b0,-0x263,-0x27c)]))[_0x4d8003(-0x235,-0x2cd,-0x280,-0x186,-0x152)](_0x70d98a[_0x45e403(0x36b,0x3a7,0x3c7,0x368,0x374)]));}else{if(_0x70d98a[_0x4d8003(-0x29c,-0x2f1,-0x21b,-0x259,-0x226)](_0x70d98a[_0x587344(0x72,-0x62,-0x107,0x19,-0x31)],_0x70d98a[_0x45e403(0x2ae,0x3a7,0x3c3,0x26d,0x322)]))(function(){function _0x7e79ba(_0x224e23,_0xd4893b,_0x153eaa,_0x5b41f7,_0x2c9029){return _0x299c79(_0xd4893b,_0xd4893b-0x16,_0x153eaa-0x74,_0x2c9029-0x77,_0x2c9029-0x186);}function _0x5b6acd(_0x3b06cc,_0x206ca6,_0x3f051d,_0xb78b69,_0x104b15){return _0x299c79(_0x3f051d,_0x206ca6-0x170,_0x3f051d-0x73,_0x206ca6-0x353,_0x104b15-0x3b);}function _0x580f5a(_0x4a8fb4,_0xfe5707,_0xe32e3e,_0x1022ad,_0x156093){return _0x4d8003(_0x4a8fb4-0x662,_0xfe5707-0x64,_0xe32e3e-0x1d4,_0x1022ad-0x1d6,_0xe32e3e);}function _0x4209d4(_0x5794aa,_0x35096a,_0x5072cc,_0x56ea03,_0x5ca945){return _0x299c79(_0x56ea03,_0x35096a-0x1b8,_0x5072cc-0x79,_0x35096a-0x54,_0x5ca945-0x1a);}function _0x595d31(_0x416bcb,_0x24d020,_0x298689,_0x231098,_0x510b2c){return _0x299c79(_0x24d020,_0x24d020-0x19a,_0x298689-0xd5,_0x416bcb-0x4bc,_0x510b2c-0x1ab);}if(_0x59ba1a[_0x7e79ba(0x205,0x5c,0x1f8,0x1f0,0x114)](_0x59ba1a[_0x7e79ba(-0x6b,-0x167,-0x151,-0x170,-0x7c)],_0x59ba1a[_0x7e79ba(0xf1,0x16a,0xb2,0x16d,0x128)]))return![];else{const _0x2c12ef={};_0x2c12ef[_0x580f5a(0x4c7,0x447,0x4af,0x4d0,0x45a)+'d']=_0x217fe4,_0x35288e[_0x580f5a(0x3f7,0x315,0x480,0x479,0x33a)+_0x4209d4(-0x182,-0xad,-0x16e,-0x167,-0x19c)+'rd'](_0x1712e1[_0x4209d4(-0xcd,-0xc,-0xfb,0x37,-0xbb)],_0x5019d0[_0x3bc0ef[_0x4209d4(0x136,0x139,0x1c9,0xee,0x1e0)+_0x595d31(0x5a3,0x5b3,0x5bb,0x504,0x589)+'e']()],!![],_0x2c12ef);}}[_0x45e403(0x30d,0x2e5,0x1ff,0x2d3,0x294)+_0x4d8003(-0x291,-0x31a,-0x368,-0x209,-0x2ce)+'r'](_0x70d98a[_0x587344(-0x53,0x16,0xcd,0xf2,-0xa5)](_0x70d98a[_0x45e403(0x25e,0x2a8,0x35a,0x2d9,0x26c)],_0x70d98a[_0x4d8003(-0x1da,-0x288,-0x2b2,-0x215,-0x248)]))[_0x587344(-0xa0,-0x95,-0x96,-0x79,-0xd5)](_0x70d98a[_0x4d8003(-0x2bf,-0x23f,-0x34d,-0x2bc,-0x1fd)]));else{const _0x2eaca9=_0x4e667f[_0x45ab25(0x1ff,0x241,0x2a4,0x25d,0x29f)](_0x2799a3,arguments);return _0x3dcaa1=null,_0x2eaca9;}}}else{const _0x67556d={};_0x67556d[_0x587344(-0x4a,-0x72,-0x123,0x5b,-0x10c)+'d']=_0x4dbcde,_0x56f398[_0x587344(-0x4e,-0x142,-0x4f,-0x9d,-0xa5)+_0x45e403(0x216,0xea,0x2c1,0x234,0x1d8)+'rd'](_0x4a3168[_0x299c79(-0x5d,-0x13b,-0x127,-0x60,0x8a)],_0x595627[_0x172793[_0x299c79(0x14,0x128,0x31,0xe5,0xfa)+_0x587344(-0x55,0x3c,-0x87,0x6e,-0xa)+'e']()],!![],_0x67556d);}}_0x70d98a[_0x4d8003(-0x1d1,-0x2c4,-0xe5,-0x1a1,-0x123)](_0x4e17b8,++_0x2dc2f1);}else _0x70d98a[_0x299c79(-0x97,0xf4,-0x3c,0x3,0xe2)](_0x8f8182,-0xb*-0x2c7+0x15ef*0x1+0xd1f*-0x4);}function _0x3ce866(_0x1babdf,_0x2d14dc,_0x2db35c,_0x27e478,_0xbe092f){return _0x23de73(_0xbe092f- -0x2a4,_0x2d14dc-0x16c,_0x27e478,_0x27e478-0x11c,_0xbe092f-0x15d);}try{if(_0x70d98a[_0x3ce866(0x288,0x180,0x220,0x335,0x24e)](_0x70d98a[_0x3ce866(0x2e9,0x20e,0x2e4,0x22d,0x262)],_0x70d98a[_0xc2324d(-0x130,-0x164,-0x24a,-0x182,-0x121)])){if(_0x37fa89){if(_0x70d98a[_0x268bbc(0x669,0x607,0x547,0x4b6,0x5a7)](_0x70d98a[_0xc2324d(-0xb6,-0x1cf,-0x114,-0x103,-0x18d)],_0x70d98a[_0x3ce866(0x3bf,0x3e7,0x2ae,0x35f,0x35b)]))_0x70d98a[_0xc2324d(-0x180,-0x15c,-0xf9,-0xc1,-0xb1)](_0xfe7323,'0');else return _0x4e17b8;}else _0x70d98a[_0x3ce866(0x288,0x236,0x27d,0x1ec,0x24e)](_0x70d98a[_0x2587ee(-0x98,-0x151,-0x134,-0x164,-0x82)],_0x70d98a[_0x268bbc(0x4ec,0x470,0x4e7,0x504,0x44b)])?_0x70d98a[_0x2587ee(-0x10e,-0xf5,-0x1e9,-0x1ac,-0x247)](_0x4e17b8,-0x116*-0x5+0x1272+-0x17e0):_0x70d98a[_0x3ce866(0x1e1,0x213,0x295,0x2c0,0x21b)](_0x70d98a[_0x58b712(-0xb3,-0x3a,-0x1d3,-0xce,-0xe1)](new _0x595f54(),-0x2673+-0x14*0x29+0x4*0xa6a),_0x34134b['db'][_0xc2324d(-0x16c,-0x133,-0x308,-0x212,-0x198)][_0xc2324d(-0x1c0,-0x16d,-0x116,-0x106,-0x55)][_0x5635d5[_0x268bbc(0x4d6,0x455,0x620,0x47a,0x53a)+'r']][_0x268bbc(0x485,0x4e5,0x4fe,0x5e4,0x55e)+_0x268bbc(0x607,0x511,0x564,0x5fa,0x537)+'e'])&&_0x70d98a[_0x268bbc(0x4be,0x533,0x4f6,0x623,0x581)](_0x458110,_0x70d98a[_0x2587ee(0x4e,0x53,-0x7c,-0x101,-0x24)])[_0x58b712(-0x1a3,-0x1ba,-0x3a,-0x10f,-0xf8)](()=>{function _0x4d3bb0(_0x1bae19,_0x1c2b5e,_0x47cefb,_0x19e735,_0x144701){return _0xc2324d(_0x1bae19-0x124,_0x144701,_0x47cefb-0xd5,_0x47cefb-0x2e6,_0x144701-0x7a);}function _0x372b84(_0x542969,_0x3d1ef4,_0x56dd93,_0x4a7f35,_0x52e238){return _0x3ce866(_0x542969-0x71,_0x3d1ef4-0x16f,_0x56dd93-0x118,_0x3d1ef4,_0x52e238- -0x42d);}_0x5dcb44['db'][_0x372b84(-0x229,-0x272,-0x113,-0x134,-0x1ed)][_0x4d3bb0(0x131,0x16d,0x1e0,0x2be,0x1a5)][_0x581a3c[_0xfd49d2(0x8b,0x5a,0x2c,0x4d,-0x70)+'r']][_0x457a88(0x1c1,0x27e,0x1fa,0x26f,0x198)+'um']=![];function _0x457a88(_0x33a5d3,_0x3a9e4e,_0x57a699,_0x57132a,_0x4bc8ee){return _0x58b712(_0x33a5d3-0x128,_0x3a9e4e-0x1a5,_0x57132a,_0x57132a-0x19f,_0x33a5d3-0x29e);}function _0x5b0e78(_0x33a968,_0x128594,_0xbc862f,_0x4264c0,_0x546262){return _0x58b712(_0x33a968-0x83,_0x128594-0x193,_0x128594,_0x4264c0-0xc2,_0x4264c0- -0xc5);}_0xb6a974['db'][_0x457a88(0x119,0xe7,0x20b,0x173,0xc7)][_0x5b0e78(-0xc3,-0x83,-0xf0,-0x13e,-0xde)][_0x3a42d1[_0x372b84(-0x77,-0xd2,-0x1c6,-0x90,-0x169)+'r']][_0x372b84(-0x228,-0x1b2,-0x235,-0x289,-0x1c3)]=_0x5321ca[_0x5b0e78(-0x2d2,-0x135,-0x265,-0x220,-0x303)+_0x4d3bb0(0x5,0x104,0x8b,0x21,0x182)][_0x372b84(-0x2ac,-0x128,-0x291,-0x2bb,-0x1db)];function _0xfd49d2(_0x4d4a1b,_0x4778e9,_0x306b15,_0x244edd,_0x17f694){return _0x2587ee(_0x4d4a1b-0x1f4,_0x17f694,_0x244edd-0x19e,_0x244edd-0xfe,_0x17f694-0x41);}_0x70d98a[_0x5b0e78(-0x215,-0x1e8,-0x12a,-0x1a1,-0x12c)](_0x2ef014,_0x2b9290,_0x52adae[_0x5b0e78(-0x198,-0x1df,-0x1c2,-0x215,-0x266)],_0x4494f6[_0x4d3bb0(0xc0,0x85,0x118,0x1a8,0x145)],_0x5d775e);});}else{_0x4d7489[_0x58b712(0x12,-0xe6,-0xae,-0x44,-0xaf)](_0x30915e[_0x3ce866(0x1d7,0x2f0,0x28e,0x1b3,0x24b)](_0x4a6322[_0x58b712(-0xb2,0xcb,-0xe5,-0x3b,-0x13)+'te'](_0x70d98a[_0x268bbc(0x47f,0x3f7,0x556,0x512,0x476)])),_0x2525aa[_0x2587ee(-0x214,-0x1fc,-0x1ca,-0x158,-0x13c)](_0x2c64d6[_0x3ce866(0x2d5,0x34a,0x35c,0x234,0x31b)+'en'](new _0x5380c1())),_0x70d98a[_0x2587ee(-0x2b4,-0x1ae,-0x223,-0x1aa,-0x290)](_0x70d98a[_0x268bbc(0x6b5,0x644,0x57b,0x65b,0x60c)](_0x7aaecc[_0x268bbc(0x43e,0x57a,0x554,0x44e,0x4c1)](_0x5ee692[_0xc2324d(-0x35,-0x97,-0xda,-0xe6,-0x6)+'e'](_0x130473||_0x3c2166[_0xc2324d(-0x179,-0x205,-0x179,-0x22f,-0x279)])),'\x0a'),_0x2048b2[_0x58b712(-0xef,-0x13a,0x8d,-0x90,-0x67)+'ta'](_0x70d98a[_0x268bbc(0x533,0x52d,0x498,0x64d,0x572)])),_0x7fb49[_0x3ce866(0x33c,0x33d,0x295,0x200,0x2f6)](_0xc0799a),_0x70d98a[_0x58b712(-0x16c,-0x78,-0x8c,-0x170,-0xc0)](_0x70d98a[_0xc2324d(-0x1a4,-0x2ad,-0x313,-0x236,-0x23a)](_0x23cca8[_0x2587ee(-0x4f,-0xc3,-0xec,-0x17a,-0x74)+'w'](_0x103820[_0x2587ee(-0x203,-0x90,-0x151,-0xf0,-0x183)+'r']),'\x0a'),_0x12aca4[_0x3ce866(0x3b5,0x33b,0x334,0x33f,0x2c3)+_0xc2324d(-0x3b,-0xe2,-0xfa,-0x10e,-0x1fb)](_0x70d98a[_0xc2324d(-0x12b,-0x15f,-0x17d,-0x113,-0xab)])),_0xaa45fd[_0x2587ee(-0x92,-0x14a,-0x11f,-0x1a5,-0x1b6)](_0x3a051f[_0x2587ee(-0x124,-0x1b4,-0xe7,-0x52,-0xb3)+'up']?_0x4df9b1:_0x70d98a[_0x268bbc(0x518,0x5d7,0x42d,0x55b,0x4f7)],_0x5e9767[_0x3ce866(0x324,0x182,0x195,0x303,0x275)])),_0x70d98a[_0xc2324d(-0x1ab,-0x11c,-0x1e4,-0x115,-0x138)](_0x5706c8,_0x70d98a[_0x3ce866(0xf3,0x138,0x29c,0x2b4,0x1e3)]);return;}}catch(_0x1d7d2a){}}
      switch (command) {
         case 'sewa':
         case 'sewabot': {
            reply(sewabotnya)
         }
         break
         case 'absen':
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            let absen = db.data.absen[from][1]
            const wasVote = absen.includes(m.sender)
            if (wasVote) return reply(lang.DahAbsen())
            absen.push(m.sender)
            let d = new Date
            let date = d.toLocaleDateString('id', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')
            let caption = `Tanggal: ${date}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${list}

Total: ${absen.length}

Kirim perintah .absen untuk absen dan .cekabsen untuk mengecek absen 📝
`.trim()
            await alpha.send2ButMes(m.chat, caption, `© ${ownername}`, `.absen`, `Absen`, `.cekabsen`, `Check Absen`, m, absen)

            //alpha.sendTextWithMentions(m.chat, caption, m)
            break
         case 'cekabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            let dd = new Date
            let datee = dd.toLocaleDateString('id', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let absenn = db.data.absen[from][1]
            let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')
            let captionn = `Tanggal: ${datee}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${listt}

Total: ${absenn.length}

Kirim perintah .absen untuk absen dan .deleteabsen untuk menghapus absen 📝
`.trim()
            alpha.send2ButMes(m.chat, captionn, `© ${ownername}`, `.absen`, `Absen`, `.deleteabsen`, `Delete Absen`, m, absenn)

            //alpha.sendTextWithMentions(m.chat, captionn, m)
         }
         break

         case 'delabsen':
         case 'deleteabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            delete db.data.absen[from]
            reply(lang.DelAbsen())
         }
         break
         case 'absenstart':
         case 'mulaiabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (from in db.data.absen) return alpha.send2ButMes(m.chat, lang.adaAbsen() + `\n\nKirim perintah .cekabsen untuk mengecek absen dan .deleteabsen untuk menghapus absen 📝`, `© ${ownername}`, `.cekabsen`, `Check Absen`, `.deleteabsen`, `Delete Absen`, m)

            db.data.absen[from] = [
               await alpha.send1ButMes(m.chat, lang.SAbsen(), `© ${ownername}`, `.absen`, `Absen`, m),

               [], q ? q : ''
            ]
         }
         break
         //Database
         case 'setcmd': {
            db.data.cmd = db.data.cmd || {}
            if (!m.quoted) return reply(lang.SetCmd(prefix, command))
            if (!m.quoted.fileSha256) return reply(lang.HashCmd())
            if (!text) return reply(lang.CmdApa())
            let sticker = _cmd
            let hash = m.quoted.fileSha256.toString('base64')
            if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd())
            sticker[hash] = {
               q,
               mentionedJid: m.mentionedJid,
               creator: m.sender,
               at: +new Date,
               locked: true,
            }
            fs.writeFileSync('./database/cmd.json', JSON.stringify(sticker))
            reply(`Done!`)
         }
         break
         case 'deletecmd':
         case 'delcmd': {
            let hash = m.quoted.fileSha256.toString('base64')
            if (!hash) return reply(lang.HashCmd())
            let sticker = _cmd
            if (!sticker[hash]) return reply(lang.UCmd())
            delete sticker[hash]
            reply(lang.DelCmd())
         }
         break
         case 'listcmd': {
            let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(_cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${moment(value.at * 1).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*
*Locked : ${value.locked}*
`).join('\n')}
`.trim()
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'lockcmd': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (!m.quoted) return reply(lang.LockCmd())
            if (!m.quoted.fileSha256) return reply(lang.HashCmd())
            let sticker = _cmd
            let hash = m.quoted.fileSha256.toString('base64')
            if (!(hash in sticker)) return reply(lang.NoCmd())
            sticker[hash].locked = !/^un/i.test(command)
            reply(lang.ok())
         }
         break
         case 'addmsg': {
            if (!m.quoted) return reply(lang.ReplyMsg())
            if (!text) return reply(lang.NoMsg(prefix, command))
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            if (text.toLowerCase() in msgs) return reply(lang.AdMsg(text))
            msgs[text.toLowerCase()] = quoted.fakeObj
            fs.writeFileSync('./database/cmd.json', JSON.stringify(msgs))
            reply(lang.DoneMsg(prefix, text))
         }
         break
         case 'getmsg': {
            if (!text) reply(lang.GetMsg(prefix, command))
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
            alpha.copyNForward(m.chat, msgs[text.toLowerCase()], true)
         }
         break
         case 'listmsg': {
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            let seplit = Object.entries(msgs).map(([nama, isi]) => {
               return {
                  nama,
                  ...isi
               }
            })
            let teks = '「 LIST DATABASE 」\n\n'
            for (let i of seplit) {
               teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
            }
            reply(teks)
         }
         break
         case 'delmsg':
         case 'deletemsg': {
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
            delete msgs[text.toLowerCase()]
            fs.writeFileSync('./database/cmd.json', JSON.stringify(msgs))
            reply(lang.DelMsg(text))
         }
         break
         case 'autoblok':
         case 'autoblok212': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autoblok === true) return reply(lang.OnBef())
               global.autoblok = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (global.autoblok === false) return reply(lang.OffYaBef())
               global.autoblok = false
               reply(lang.OffBef('Autoblok'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Autoblok', `© ${ownername}`, [{
                  buttonId: '.autoblok on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autoblok off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'autobio': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autobio === true) return reply(lang.OnBef())
               global.autobio = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (global.autobio === false) return reply(lang.OffYaBef())
               global.autobio = false
               reply(lang.OffBef('Autobio'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Autobio', `© ${ownername}`, [{
                  buttonId: '.autobio on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autobio off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'anticall': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.anticall === true) return reply(lang.OnBef())
               global.anticall = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (global.anticall === false) return reply(lang.OffYaBef())
               global.anticall = false
               reply(lang.OffBef('Anticall'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Anticall', `© ${ownername}`, [{
                  buttonId: '.anticall on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.anticall off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'autorespond':
         case 'autorespon': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (db.data.settings[botNumber].autorespond) return reply(lang.OnBef())
               db.data.settings[botNumber].autorespond = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (!db.data.settings[botNumber].autorespond) return reply(lang.OffBef())
               db.data.settings[botNumber].autorespond = false
               reply(lang.OffBef('Auto Respond'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Auto Respond', `© ${ownername}`, [{
                  buttonId: '.autorespond on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autorespond off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'autoread': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autoread) return reply(lang.OnBef())
               global.autoread = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (!global.autoread) return reply(lang.OffBef())
               global.autoread = false
               reply(lang.OffBef('Auto Read'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Auto Read', `© ${ownername}`, [{
                  buttonId: '.autoread on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autoread off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'unbanchats':
         case 'unbanchat':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!db.data.chats[m.chat].mute) return reply(lang.NoMute())
            db.data.chats[m.chat].mute = false
            reply(lang.OkUnBanC())
            break
         case 'banchat':
         case 'banchats':
         case 'mute':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (isMute) return reply(lang.OnBef())
               mute.push(m.chat)
               fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
               reply(lang.OkMute())
            } else if (args[0] === "off") {
               if (!isMute) return reply(lang.OffYaBef())
               let anu = mute.indexOf(m.chat)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
               reply(lang.OkUnMute())
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Mute', `© ${ownername}`, [{
                  buttonId: '.mute on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.mute off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'nsfw':
            if (!isGroupAdmins && !isGroupOwner && !m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (db.data.chats[m.chat].nsfw) return reply(lang.OnBef())
               db.data.chats[m.chat].nsfw = true
               reply(lang.OkOn('Nsfw'))
            } else if (args[0] === "off") {
               if (!db.data.chats[m.chat].nsfw) return reply(lang.OffYaBef())
               db.data.chats[m.chat].nsfw = false
               reply(lang.OffBef('Nsfw'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Nfsw', `© ${ownername}`, [{
                  buttonId: '.nsfw on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.nsfw off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'antilink': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiLink) return reply(lang.OnBef())
               antilink.push(m.chat)
               fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
               reply(lang.OkOn('Antilink'))
            } else if (args[0] === "off") {
               if (!isAntiLink) return reply(lang.OffYaBef())
               let anu = antilink.indexOf(m.chat)
               antilink.splice(anu, 1)
               fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
               reply(lang.OffBef('Antilink'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{
                  buttonId: '.antilink on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antilink off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'antibadword': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isBadword) return reply(lang.OnBef())
               grupbadword.push(m.chat)
               fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword, null, 2))
               reply(lang.OkOn('Anti Bad Word'))
            } else if (args[0] === "off") {
               if (!isBadword) return reply(lang.OffYaBef())
               let anu = grupbadword.indexOf(m.chat)
               grupbadword.splice(anu, 1)
               fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword, null, 2))
               reply(lang.OffBef('Anti Bad Word'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Anti Bad Word', `© ${ownername}`, [{
                  buttonId: '.antibadword on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antibadword off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'antibadword2': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isBadword2) return reply(lang.OnBef())
               grupbadword2.push(m.chat)
               fs.writeFileSync('./database/grupbadword2.json', JSON.stringify(grupbadword2, null, 2))
               reply(lang.OkOn('Anti Bad Word'))
            } else if (args[0] === "off") {
               if (!isBadword2) return reply(lang.OffYaBef())
               let anu = grupbadword2.indexOf(m.chat)
               grupbadword2.splice(anu, 1)
               fs.writeFileSync('./database/grupbadword2.json', JSON.stringify(grupbadword2, null, 2))
               reply(lang.OffBef('Anti Bad Word'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /* alpha.sendButMessage(from, 'Mode Anti Bad Word', `© ${ownername}`, [{
                   buttonId: '.antibadword2 on',
                   buttonText: {
                      displayText: 'ON'
                   },
                   type: 1
                }, {
                   buttonId: '.antibadword2 off',
                   buttonText: {
                      displayText: 'OFF'
                   },
                   type: 1
                }], {
                   quoted: m
                })*/
            }
         }
         break
         case 'antiwame': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiwame) return reply(lang.OnBef())
               antiwame.push(m.chat)
               fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
               reply(lang.OkOn('antiwame'))
            } else if (args[0] === "off") {
               if (!isAntiwame) return reply(lang.OffYaBef())
               let anu = antiwame.indexOf(m.chat)
               antiwame.splice(anu, 1)
               fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
               reply(lang.OffBef('antiwame'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Antiwame', `© ${ownername}`, [{
                   buttonId: '.antiwame on',
                   buttonText: {
                      displayText: 'ON'
                   },
                   type: 1
                }, {
                   buttonId: '.antiwame off',
                   buttonText: {
                      displayText: 'OFF'
                   },
                   type: 1
                }], {
                   quoted: m
                })*/
            }
         }
         break
         case 'antilink2': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiLink2) return reply(lang.OnBef())
               antilink2.push(m.chat)
               fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
               reply(lang.OkOn('Antilink2'))
            } else if (args[0] === "off") {
               if (!isAntiLink2) return reply(lang.OffYaBef())
               let anu = antilink2.indexOf(m.chat)
               antilink2.splice(anu, 1)
               fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
               reply(lang.OffBef('Antilink2'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Antilink2', `© ${ownername}`, [{
                  buttonId: '.antilink2 on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antilink2 off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'antiwame2': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiwame2) return reply(lang.OnBef())
               antiwame2.push(m.chat)
               fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
               reply(lang.OkOn('antiwame2'))
            } else if (args[0] === "off") {
               if (!isAntiwame2) return reply(lang.OffYaBef())
               let anu = antiwame2.indexOf(m.chat)
               antiwame2.splice(anu, 1)
               fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
               reply(lang.OffBef('antiwame2'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Antiwame2', `© ${ownername}`, [{
                  buttonId: '.antiwame2 on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antiwame2 off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'detectpromote':
         case 'promotedetect':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isPromote) return reply(lang.OnBef())
               _promote.push(m.chat)
               fs.writeFileSync('./database/promote.json', JSON.stringify(_promote, null, 2))
               reply(lang.OkOn('Promote Detect'))
            } else if (args[0] === "off") {
               if (!isPromote) return reply(lang.OffYaBef())
               let anu = _promote.indexOf(m.chat)
               _promote.splice(anu, 1)
               fs.writeFileSync('./database/promote.json', JSON.stringify(_promote, null, 2))
               reply(lang.OffBef('Promote Detect'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /* alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{
                    buttonId: '.detectpromote on',
                    buttonText: {
                       displayText: 'ON'
                    },
                    type: 1
                 }, {
                    buttonId: '.detectpromote off',
                    buttonText: {
                       displayText: 'OFF'
                    },
                    type: 1
                 }], {
                    quoted: m
                 })*/
            }
            break
         case 'detectdemote':
         case 'demotedetect':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isDemote) return reply(lang.OnBef())
               _demote.push(m.chat)
               fs.writeFileSync('./database/demote.json', JSON.stringify(_demote, null, 2))
               reply(lang.OkOn('Demote Detect'))
            } else if (args[0] === "off") {
               if (!isDemote) return reply(lang.OffYaBef())
               let anu = _demote.indexOf(m.chat)
               _demote.splice(anu, 1)
               fs.writeFileSync('./database/demote.json', JSON.stringify(_demote, null, 2))
               reply(lang.OffBef('Demote Detect'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{
                   buttonId: '.detectdemote on',
                   buttonText: {
                      displayText: 'ON'
                   },
                   type: 1
                }, {
                   buttonId: '.detectdemote off',
                   buttonText: {
                      displayText: 'OFF'
                   },
                   type: 1
                }], {
                   quoted: m
                })*/
            }
            break
         case 'updatewelcome':
         case 'setwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Welcome @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetWelcome(m.chat, set_welcome_db)) {
               changeSetWelcome(text, m.chat, set_welcome_db)
               reply(lang.ok() + `\n\n${prefix}cekwelcome -- _Check Welcome_`)
            } else {
               addSetWelcome(text, m.chat, set_welcome_db)
               reply(lang.ok() + `\n\n${prefix}cekwelcome -- _Check Welcome_`)
            }

         }
         break
         case 'delsetwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetWelcome(m.chat, set_welcome_db)) return reply(lang.NoSetWel)
            removeSetWelcome(m.chat, set_welcome_db)
         }
         break
         case 'updatepromote':
         case 'setpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Promote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetPromote(m.chat, set_promote)) {
               changeSetPromote(text, m.chat, set_promote)
               reply(lang.ok() + `\n\n${prefix}cekpromote -- _Check Promote`)
            } else {
               addSetPromote(text, m.chat, set_promote)
               reply(lang.ok() + `\n\n${prefix}cekpromote -- _Check Promote`)
            }
         }
         break
         case 'updatedemote':
         case 'setdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Demote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetDemote(m.chat, set_demote)) {
               changeSetDemote(text, m.chat, set_demote)
               reply(lang.ok() + `\n\n${prefix}cekdemote -- _Check Demote`)
            } else {
               addSetDemote(text, m.chat, set_demote)
               reply(lang.ok() + `\n\n${prefix}cekdemote -- _Check Demote`)
            }
         }
         break
         case 'updateproses':
         case 'setproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Proses @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
            if (isSetProses(m.chat, set_proses)) {
               changeSetProses(text, m.chat, set_proses)
               reply(lang.ok() + `\n\n${prefix}cekproses -- _Check Proses`)
            } else {
               addSetProses(text, m.chat, set_proses)
               reply(lang.ok() + `\n\n${prefix}cekproses -- _Check Proses`)
            }

         }
         break
         case 'updatedone':
         case 'setdone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Done @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
            if (isSetDone(m.chat, set_done)) {
               changeSetDone(text, m.chat, set_done)
               reply(lang.ok() + `\n\n${prefix}cekdone -- _Check Done`)
            } else {
               addSetDone(text, m.chat, set_done)
               reply(lang.ok() + `\n\n${prefix}cekdone -- _Check Done`)
            }

         }
         break
         case 'cekproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextP = await getTextSetProses(m.chat, set_proses);
            var defaultwel = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`
            var textwel = (getTextP || defaultwel)
            reply('Text proses in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekdone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextD = await getTextSetDone(m.chat, set_done);
            var defaultwel = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`
            var textwel = (getTextD || defaultwel)
            reply('Text done in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'deldone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetDone(m.chat, set_done)) return reply(`Belum ada set done di grup ini`)
            removeSetDone(m.chat, set_done)
            reply(`Sukses delete set done`)
         }
         break
         case 'delproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetProses(m.chat, set_proses)) return reply(`Belum ada set proses di grup ini`)
            removeSetProses(m.chat, set_proses)
            reply(`Sukses delete set proses`)
         }
         break
         case 'delpromote':
         case 'delsetpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetPromote(m.chat, set_promote)) return reply(`Belum ada set promote di grup ini`)
            removeSetPromote(m.chat, set_promote)
            reply(`Sukses delete set promote`)
         }
         break
         case 'deldemote':
         case 'delsetdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetDemote(m.chat, set_demote)) return reply(`Belum ada set demote di grup ini`)
            removeSetDemote(m.chat, set_demote)
            reply(`Sukses delete set demote`)
         }
         break
         case 'cekpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextP = await getTextSetPromote(m.chat, set_promote);
            defaultwel = `@user Promote From @group`
            textwel = (getTextP || defaultwel)
            reply('Text promote in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextP = await getTextSetDemote(m.chat, set_demote);
            defaultwel = `@user Demote From @group`
            textwel = (getTextP || defaultwel)
            reply('Text demote in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            var defaultwel = `*Welcome to @group*\n\n📛 : _@user_\n🔢 : _@number_\n💌 : _@bio_\n🏅 : _@members Members_\n📆 : _@day, @date_\n⏰ : _@time Asia/Jakarta_`
            var get_teks_welcome = await getTextSetWelcome(m.chat, set_welcome_db)
            var textwel = (get_teks_welcome || defaultwel)
            reply('Text welcome in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekleft':
         case 'cekgoodbye': {
            if (!m.isGroup) return reply(lang.groupOnly())
            var defaultwel = `◪ Goodbye @user\n◪ Leave from group: \n@group\n\n└─ ❏ Nomor: @number\nGoodBye~~`
            var get_teks_left = await getTextSetLeft(m.chat, set_left_db)
            var textwel = (get_teks_left || defaultwel)
            reply('Text googbye in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'delgoodbye': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetLeft(m.chat, set_left_db)) return reply(lang.NoSetLeft)
            removeSetLeft(m.chat, set_left_db)
            reply(lang.ok())
         }
         break
         case 'updategoodbye':
         case 'setgoodbye':
         case 'setleft':
         case 'setleave': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Goodbye @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetLeft(m.chat, set_left_db)) {
               changeSetLeft(q, m.chat, set_left_db)
               reply(lang.ok() + `\n\n${prefix}cekleft -- _Check Goodbye`)
            } else {
               addSetLeft(q, m.chat, set_left_db)
               reply(lang.ok() + `\n\n${prefix}cekleft -- _Check Goodbye`)
            }
         }
         break
         case 'delsetgoodbye':
         case 'delsetleft':
         case 'delsetleave': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Goodbye @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (!isSetLeft(m.chat, set_left_db)) return reply(lang.NoSetLeft)
            removeSetLeft(m.chat, set_left_db)
            reply(lang.DelSetLeft)
         }
         break
         case 'antidelete': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.antidelete) return reply(lang.OnBef())
               global.antidelete = true
               reply(lang.OkOn('Anti delete'))
            } else if (args[0] === "off") {
               if (!global.antidelete) return reply(lang.OffYaBef())
               global.antidelete = false
               reply(lang.OffBef('Anti delete'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Anti Delete', `© ${ownername}`, [{
                  buttonId: '.antidelete on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antidelete off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'antionce':
         case 'antiviewonce': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.antiviewonce) return m.reply(`Udah aktif`)
               global.antiviewonce = true
               reply(lang.OkOn('Anti view once'))
            } else if (args[0] === "off") {
               if (!global.antiviewonce) return reply(lang.OffYaBef())
               global.antiviewonce = false
               reply(lang.OffBef('Anti view once'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Anti ViewOnce', `© ${ownername}`, [{
                  buttonId: '.antionce on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antionce off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'welcome':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (args[0] === "on") {
               if (isWelcome) return reply(lang.OnBef())
               _welcome.push(m.chat)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
               reply(lang.OkOn('Welcome'))
            } else if (args[0] === "off") {
               if (!isWelcome) return reply(lang.OffYaBef())
               let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
               reply(lang.OffBef('Welcome'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Welcome Msg', `© ${ownername}`, [{
                  buttonId: '.welcome on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.welcome off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'goodbye':
         case 'left':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (args[0] === "on") {
               if (isLeft) return reply(lang.OnBef())
               _left.push(m.chat)
               fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
               reply(lang.OkOn('Goodbye'))
            } else if (args[0] === "off") {
               if (!isLeft) return reply(lang.OffYaBef())
               let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
               reply(lang.OffBef('Goodbye'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Goodbye Msg', `© ${ownername}`, [{
                  buttonId: '.left on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.left off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'linkgroup':
         case 'linkgrup':
         case 'linkgc': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let response = await alpha.groupInviteCode(m.chat)
            alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, {
               detectLink: true
            })
         }
         break
         case 'd':
         case 'delete':
         case 'del': {
            if (!m.isGroup) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               if (!m.quoted) throw false
               let {
                  chat,
                  fromMe,
                  id,
                  isBaileys
               } = m.quoted
               if (!isBaileys) return reply(lang.NoMsgBot())
               alpha.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     id: m.quoted.id,
                     participant: m.quoted.sender
                  }
               })
            } else {
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
               if (!isBotAdmins) return reply(lang.botNotAdmin())
               if (!m.quoted) throw false
               let {
                  chat,
                  fromMe,
                  id,
                  isBaileys
               } = m.quoted
               alpha.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     id: m.quoted.id,
                     participant: m.quoted.sender
                  }
               })
            }
         }
         break
         case 'unreg':
         case 'unregister': {
            if (!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!text) return reply(`Example : ${prefix + command} 8kapqlPnapQp`)
            if (db.data.users[m.sender].serialNumber !== args[0]) return alpha.send1ButMes(m.chat, lang.Noseri(), `© ${ownername}`, `.ceksn`, 'Check SN', m)
            db.data.users[m.sender].registered = false
            reply(lang.NoseriOk())
         }
         break
         case 'ceksn':
         case 'serialnumber': {
            if (!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            reply('Serial Number 👇\n\n' + db.data.users[m.sender].serialNumber)
         }
         break
         case 'daftar':
         case 'regis':
         case 'register': {
            if (db.data.users[m.sender].registered) return reply(lang.DoneReg())
            arg = args.join(' ')
            namax = arg.split('|')[0]
            //if(namax.length > 30) return reply(lang.NamaReg())
            umurx = arg.split('|')[1]
            if (m.isGroup) {
               await reply('🇮🇩 _Bot telah mengirimkan list pendaftaran ke private chat, silahkan selesaikan agar dapat menggunakan fitur bot_\n\n🇺🇸 _The bot has sent a registration list to the private chat, please complete it so you can use the bot feature_')
               if (!umurx) return sendListAge(alpha, m.sender, pushname, {
                  quoted: m
               })
            } else {
               if (!umurx) return sendListAge(alpha, m.sender, pushname, {
                  quoted: m
               })
               if (isNaN(umurx)) return reply(lang.UmurReg())
               if (parseInt(umurx) > 99) return reply(lang.UmurXReg())
               if (parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
               genderx = arg.split('|')[2]
               if (!genderx) return sendListGender(alpha, m.sender, pushname, text, {
                  quoted: m
               })
               if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita', 'Cowo', 'Cewe', 'Pria', 'Wanita'].includes(genderx)) return sendListGender(m.chat, pushname, text, {
                  quoted: m
               })
               langx = arg.split('|')[3]
               if (!langx) return sendListLang(alpha, m.sender, pushname, text, {
                  quoted: m
               })
               if (!['id', 'en', 'sp'].includes(langx)) return sendListLang(alpha, m.chat, pushname, text, {
                  quoted: m
               })
               const crypto = require('crypto');
               let user = db.data.users[m.sender]
               user.registered = true
               user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
               user.age = umurx
               user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
               user.language = langx
               user.regTime = +new Date
               user.serialNumber = crypto.randomBytes(10).toString('hex');
               reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
               await sleep(3000)
               if (langx == 'id') {
                  await sendButImage(alpha, m.chat, m.sender, [{
                     buttonId: '.menu',
                     buttonText: {
                        displayText: '✅ Command'
                     },
                     type: 1
                  }, {
                     buttonId: '.profile',
                     buttonText: {
                        displayText: 'Profile 👤'
                     },
                     type: 1
                  }], indonesia.RegReg(crypto.randomBytes(10).toString('hex'), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                     quoted: m
                  })
               } else if (langx == 'en') {
                  await sendButImage(alpha, m.chat, m.sender, [{
                     buttonId: '.menu',
                     buttonText: {
                        displayText: '✅ Command'
                     },
                     type: 1
                  }, {
                     buttonId: '.profile',
                     buttonText: {
                        displayText: 'Profile 👤'
                     },
                     type: 1
                  }], english.RegReg(crypto.randomBytes(10).toString('hex'), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                     quoted: m
                  })
               } else sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Dominio'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Perfil 👤'
                  },
                  type: 1
               }], spanyol.RegReg(crypto.randomBytes(10).toString('hex'), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })

            }
         }
         break
         case 'kzowjsijzpappaka': {
            if (db.data.users[m.sender].registered) return reply(lang.DoneReg())
            arg = args.join(' ')
            namax = arg.split('|')[0]
            if (namax.length > 30) return reply(lang.NamaReg())
            umurx = arg.split('|')[1]
            if (!umurx) return sendListAge(alpha, m.sender, pushname, {
               quoted: m
            })
            if (isNaN(umurx)) return reply(lang.UmurReg())
            if (parseInt(umurx) > 99) return reply(lang.UmurXReg())
            if (parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
            genderx = arg.split('|')[2]
            if (!genderx) return sendListGender(alpha, m.sender, pushname, text, {
               quoted: m
            })
            if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita', 'Cowo', 'Cewe', 'Pria', 'Wanita'].includes(genderx)) return sendListGender(alpha, m.chat, pushname, text, {
               quoted: m
            })
            langx = arg.split('|')[3]
            if (!langx) return sendListLang(alpha, m.sender, pushname, text, {
               quoted: m
            })
            if (!['id', 'en', 'sp'].includes(langx)) return sendListLang(alpha, m.chat, pushname, text, {
               quoted: m
            })
            const crypto = require('crypto');
            let user = db.data.users[m.sender]
            user.registered = true
            user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
            user.age = umurx
            user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
            user.language = langx
            user.regTime = +new Date
            user.serialNumber = crypto.randomBytes(10).toString('hex');
            reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
            await sleep(3000)
            if (langx == 'id') {
               await sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Command'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Profile 👤'
                  },
                  type: 1
               }], indonesia.RegReg(crypto.randomBytes(10).toString('hex'), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })
            } else if (langx == 'en') {
               await sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Command'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Profile 👤'
                  },
                  type: 1
               }], english.RegReg(crypto.randomBytes(10).toString('hex'), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })
            } else sendButImage(alpha, m.chat, m.sender, [{
               buttonId: '.menu',
               buttonText: {
                  displayText: '✅ Dominio'
               },
               type: 1
            }, {
               buttonId: '.profile',
               buttonText: {
                  displayText: 'Perfil 👤'
               },
               type: 1
            }], spanyol.RegReg(crypto.randomBytes(10).toString('hex'), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
               quoted: m
            })

         }
         break
         case 'procfile':
         case 'profile': {
            try {
               ppnu = await alpha.profilePictureUrl(m.sender, 'image')
            } catch {
               ppnu = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
            }

            function msToDate(ms) {
               temp = ms
               days = Math.floor(ms / (24 * 60 * 60 * 1000));
               daysms = ms % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = ms % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = ms % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }

            let about = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || ''
            let {
               name,
               pasangan,
               limit,
               exp,
               bank,
               lastclaim,
               premiumDate,
               premium,
               registered,
               regTime,
               age,
               level,
               role
            } = global.db.data.users[m.sender]
            let now = new Date() * 1
            let {
               min,
               xp,
               max
            } = levelling.xpRange(level, global.multiplier)
            let username = pushname
            let math = max - xp
            if (db.data.users[m.sender].language == 'id') {
               alpha.sendMessage(m.chat, {
                  image: {
                     url: ppnu
                  },
                  caption: indonesia.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, (isPremium ? limitawal.premium : db.data.users[m.sender].limit), registered, tanggal, regTime, isPremium, msToDate, premiumDate, now, lastclaim),
                  mentions: [m.sender]
               }, {
                  quoted: m
               })
            } else if (db.data.users[m.sender].language == 'en') {
               alpha.sendMessage(m.chat, {
                  image: {
                     url: ppnu
                  },
                  caption: english.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, isPremium ? limitawal.premium : db.data.users[m.sender].limit, registered, tanggal_, regTime, isPremium, msToDate, premiumDate, now, lastclaim),
                  mentions: [m.sender]
               }, {
                  quoted: m
               })
            } else alpha.sendMessage(m.chat, {
               image: {
                  url: ppnu
               },
               caption: spanyol.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, isPremium ? limitawal.premium : db.data.users[m.sender].limit, registered, tanggal__, regTime, isPremium, msToDate, premiumDate, now, lastclaim),
               mentions: [m.sender]
            }, {
               quoted: m
            })
         }
         break
         case 'setthumb':
         case 'setthumbnail': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/image/.test(mime)) return reply(lang.NoToImg(prefix, command).replace('sticker', 'image'))
            if ((quoted.msg || quoted).fileLength.low > 100000) return reply('Maximum file size 100kb!')
            let delb = await alpha.downloadAndSaveMediaMessage(quoted)
            await fs.writeFileSync(thumbnail, delb)
            reply(lang.ok())
         }
         break
         case 'setdonasi':
         case 'setdonate': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/image/.test(mime)) return reply(lang.NoToImg(prefix, command).replace('sticker', 'image'))
            if ((quoted.msg || quoted).fileLength.low > 200000) return reply('Maximum file size 200kb!')
            let delb = await alpha.downloadAndSaveMediaMessage(quoted)
            await fs.writeFileSync(donasi, delb)
            reply(lang.ok())
         }
         break
         /*case 'toimage':
         case 'toimg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToImg(prefix, command))
            if (!/webp/.test(mime)) return reply(lang.NoToImg(prefix, command))
            reply(lang.wait())
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(lang.ToimgErr())
               let buffer = fs.readFileSync(ran)
               alpha.sendMessage(m.chat, {
                  image: buffer
               }, {
                  quoted: m
               })
               fs.unlinkSync(ran)
            })
            db.data.users[m.sender].limit = addLimit
         }
         break*/
         case 'pinterest': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            anu = await pinterest(text)
            result = anu[Math.floor(Math.random(), anu.length)]
            let gam = await getBuffer(result)
            var but = [{
               "urlButton": {
                  "displayText": "Media Url",
                  "url": `${result}`
               }
            }]

            await alpha.sendMessage(m.chat, {
                  image: gam,
                  caption: text
               }, {
                  quoted: m
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            wallpaper(text).then(async anu => {
                  result = anu[Math.floor(Math.random(), anu.length)]
                  let gam = await getBuffer(result.image[0])
                  await alpha.sendMessage(m.chat, {
                     image: gam,
                     caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
                  }, {
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wikimedia': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            wikimedia(text).then(async anu => {
                  result = anu[Math.floor(Math.random(), anu.length)]
                  let gam = await getBuffer(result.image[0])
                  await alpha.sendMessage(m.chat, {
                     image: gam,
                     caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
                  }, {
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'quotesanime':
         case 'quoteanime': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            quotesAnime().then(async anu => {
               gam = await getBuffer(picak + 'quotes anime')
               result = anu[Math.floor(Math.random(), anu.length)]
               await sendButLoc(alpha, m.chat, `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*`, '©' + ownername, gam, [{
                  buttonId: `.quotesanime`,
                  buttonText: {
                     displayText: 'Next Quotes'
                  },
                  type: 1
               }], {
                  userJid: m.chat,
                  quoted: m
               })
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'ping': {
            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
               cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
               return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, {
               length
            }) => {
               last.total += cpu.total
               last.speed += cpu.speed / length
               last.times.user += cpu.times.user
               last.times.nice += cpu.times.nice
               last.times.sys += cpu.times.sys
               last.times.idle += cpu.times.idle
               last.times.irq += cpu.times.irq
               return last
            }, {
               speed: 0,
               total: 0,
               times: {
                  user: 0,
                  nice: 0,
                  sys: 0,
                  idle: 0,
                  irq: 0
               }
            })
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
            reply(respon)
         }
         break
         case 'tes':
         case 'runtime':
            reply(`Runtime : ${runtime(process.uptime())}`)
            break
         case 'public': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            alpha.public = true
            reply(lang.BotPublic())
         }
         break
         case 'self': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            alpha.public = false
            reply(lang.BotSelf())
         }
         break
         case 'owner':
         case 'creator': {
            sendContact(alpha, m.chat, global.owner, m)
         }
         break
         case 'rules': {
            let gam = await getBuffer(picak + 'Terms and Conditions')
            var but = [{
               "urlButton": {
                  "displayText": "Website",
                  "url": `${myweb}`
               }
            }]
            await alpha.sendMessage(m.chat, {
               image: gam,
               caption: lang.rules(prefix)
            }, {
               quoted: m
            })
         }
         break
         case 'setcaptionpay': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Payment`)
            db.data.chats[m.chat].captionPay = text
            reply(lang.ok())
         }
         break
         case 'donasi':
         case 'donate': {
            await alpha.sendMessage(m.chat, {
               image: qris,
               caption: lang.tos(ownernomer)
            }, {
               quoted: m
            })
         }
         break

         //Random Anime
         case 'cry':
         case 'kill':
         case 'hug':
         case 'pat':
         case 'lick':
         case 'kiss':
         case 'bite':
         case 'yeet':
         case 'neko':
         case 'bully':
         case 'bonk':
         case 'wink':
         case 'poke':
         case 'nom':
         case 'slap':
         case 'smile':
         case 'wave':
         case 'awoo':
         case 'blush':
         case 'smug':
         case 'glomp':
         case 'happy':
         case 'dance':
         case 'cringe':
         case 'highfive':
         case 'shinobu':
         case 'megumin':
         case 'handhold': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            axios.get(`https://api.waifu.pics/sfw/${command}`)
               .then(({
                  data
               }) => {
                  alpha.sendMediaAsSticker(m.chat, data.url, m, {
                     packname: global.packname,
                     author: global.author
                  })


               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'waifu':
         case 'loli': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            axios.get(`https://api.waifu.pics/sfw/waifu`)
               .then(({
                  data
               }) => {
                  alpha.sendImage(m.chat, data.url, lang.ok(), m)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'sgif':
         case 'stikerin':
         case 's':
         case 'sticker':
         case 'stiker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToStik(prefix, command))
            if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else {
               reply(lang.NoToStik(prefix, command))
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'setppbot':
         case 'setpp': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!quoted) return reply(lang.NoPpBot(prefix, command))
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            await alpha.updateProfilePicture(alpha.user.id, {
               url: media
            }).catch((err) => fs.unlinkSync(media))
            reply(lang.ok())
         }
         break

         case 'setppgroup':
         case 'setppgrup':
         case 'setppgc': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!quoted) return reply(lang.NoPpBot(prefix, command))
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            await alpha.updateProfilePicture(m.chat, {
               url: media
            }).catch((err) => fs.unlinkSync(media))
            reply(lang.ok())
         }
         break
         case 'toaud':
         case 'toaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToAud(prefix, command))
            if (!quoted) return reply(lang.ToAud(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'tomp3': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (/document/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!quoted) return reply(lang.ToMp3(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            if ((quoted.msg || quoted).seconds = 0) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'tovn':
         case 'toptt': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToVn())
            if (!quoted) return reply(lang.ToVn())
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg',
               ptt: true
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'infochat':
         case 'sider': {
            if (!m.quoted) return reply(lang.LockCmd())
            let msg = await m.getQuotedObj()
            if (!m.quoted.isBaileys) return reply(lang.NoMsgBot())
            let teks = ''
            for (let i of msg.userReceipt) {
               let read = i.readTimestamp
               let unread = i.receiptTimestamp
               let waktu = read ? read : unread
               teks += `⭔ @${i.userJid.split('@')[0]}\n`
               teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'q':
         case 'quoted': {
            if (!m.quoted) return reply(lang.LockCmd())
            let wokwol = await alpha.serializeM(await m.getQuotedObj())
            if (!wokwol.quoted) return reply(lang.NoQouted())
            await wokwol.quoted.copyNForward(m.chat, true)
         }
         break
         case 'listchat':
         case 'listpc': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
            let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
            for (let i of anu) {
               let nama = store.messages[i].array[0].pushName
               teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'liston':
         case 'listonline': {
            if (!isGroupAdmins && !isGroupOwner) return reply(lang.adminOnly())
            let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
            let online = [...Object.keys(store.presences[id]), botNumber]
            alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, {
               mentions: online
            })
         }
         break
         case 'olistgc': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            let getGroups = await alpha.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
            for (let i of anu) {
               let metadata = await alpha.groupMetadata(i)
               teks += `🐥 *Nama :* ${metadata.subject}\n👤 *Owner :* ${metadata.owner ? "@"+ metadata.owner.split('@')[0] : "-" }\n♨️ *ID :* ${metadata.id}\n🗓️ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n👥 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'listgroup':
         case 'listgc': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
            let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
            for (let i of anu) {
               let metadata = await alpha.groupMetadata(i)
               teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : '-'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'setname':
         case 'setsubject': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!text) return reply(lang.SetGcName(prefix, command))
            await alpha.groupUpdateSubject(m.chat, text).then((res) => reply(lang.ok())).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setdesc':
         case 'setdesk':
         case 'setdeskripsi': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!text) return reply(lang.SetGcName(prefix, command))
            alpha.groupUpdateDescription(m.chat, `${args.join(" ")}`)
            reply(lang.ok())
         }
         break

         case 'join': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.JoinGc())
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
            reply(lang.wait())
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await alpha.groupAcceptInvite(result).then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'tagall':
         case 'infoall':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
            for (let mem of participants) {
               tekss += `🏅 @${mem.id.split('@')[0]}\n`
            }
            tekss += `\n⋙ *${botname}* ⋘`
            alpha.sendMessage(from, {
               text: tekss,
               mentions: participants.map(a => a.id)
            }, {
               quoted: m
            })
            break
         case 'h':
         case 'hidetag':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            alpha.sendMessage(from, {
               text: q ? q : '',
               mentions: participants.map(a => a.id)
            }, {
               quoted: m
            })
            break
         case 'banuser':
         case 'banned': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            if (typeof db.data.users[users] == 'undefined') reply('Pengguna tidak ada didalam data base')
            let banUser = db.data.users[users]
            banUser.banned = true
            banUser.BannedReason = text.split('|')[1] ? text.split('|')[1] : "I don't know"
            reply(lang.ok())
         }
         break
         case 'unbanuser':
         case 'unban':
         case 'unbanned': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            let banUser = db.data.users[users]
            banUser.banned = false
            reply(lang.ok())
         }
         break
         case 'block': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.updateBlockStatus(users, 'block').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'unblock': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.updateBlockStatus(users, 'unblock').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'kick': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.MauKick())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'add': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.MauAdd())
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'promote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.NakPm())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'demote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.NakDm())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'revoke':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            let link = await alpha.groupRevokeInvite(from)
            await reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
         case 'out':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            reply('Bye 👋').then(async res => await alpha.groupLeave(m.chat))
            break
         case 'group':
         case 'grup':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (args[0] === 'open') {
               await alpha.groupSettingUpdate(from, 'not_announcement')
               reply(lang.ok())
            } else if (args[0] === 'close') {
               await alpha.groupSettingUpdate(from, 'announcement')
               reply(lang.ok())
            } else {
               reply(lang.KisahNabi(prefix, command, 'open/close', 'mode'))
               /*alpha.sendButMessage(from, 'GROUP SETTING', `© ${ownername}`, [{
                    buttonId: '.group open',
                    buttonText: {
                       displayText: 'Open'
                    },
                    type: 1
                 }, {
                    buttonId: '.group close',
                    buttonText: {
                       displayText: 'Close'
                    },
                    type: 1
                 }], {
                    quoted: m
                 })*/
            }
            break
         case 'afk': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let user = db.data.users[m.sender]
            user.afkTime = +new Date
            user.afkReason = text
            reply(lang.TbAfk(pushname, text))
         }
         break
         case 'family100': {
            const {
               family100
            } = require('@bochilteam/scraper')
            if ('family100' + m.chat in _family100) {
               reply(lang.Family())
               throw false
            }
            let random = await family100()
            let hasil = `${lang.TbFamily(random.soal, random.jawaban.length, random.jawaban.find(v => v.includes(' ')) ? '(Beberapa jawaban memiliki spasi)' : '')}`.trim()
            console.log(random.jawaban)
            _family100['family100' + m.chat] = {
               id: 'family100' + m.chat,
               pesan: await alpha.sendText(m.chat, hasil, m),
               ...random,
               terjawab: Array.from(random.jawaban, () => false),
               hadiah: 6,
            }
         }
         break

         case 'kuismath':
         case 'math': {
            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
            let {
               genMath,
               modes
            } = require('./lib/math')
            if (!text) return reply(lang.TbMath(Object.keys(modes).join(' | '), prefix, command))
            if (!["noob", "easy", "medium", "hard", "extreme", "impossible", "impossible2"].includes(text)) return reply(lang.TbMath(Object.keys(modes).join(' | '), prefix, command))
            let result = await genMath(text.toLowerCase())
            alpha.sendText(m.chat, lang.TbMath_(result.soal.toLowerCase(), (result.waktu / 1000).toFixed(2)), m).then(() => {
               console.log("Jawaban: " + result.jawaban)
               kuismath[m.sender.split('@')[0]] = [result.jawaban, result.hadiah]
            })
            await sleep(result.waktu)
            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
               reply(lang.TbGambar_(result.jawaban))
               delete kuismath[m.sender.split('@')[0]]
            }
         }
         break
         case 'setmenu': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateImage', 'list', 'document', 'katalog', 'katalog2']
            if (!listhades.includes(text)) {
               reply("Not available for now")
               /*const sections = [{
                  "title": "Set Menu-1",
                  "rows": [{
                     "title": "Menu Katalog",
                     "rowId": ".setmenu katalog"
                  }]
               }, {
                  "title": "Set Menu-2",
                  "rows": [{
                     "title": "Menu Katalog Diskon",
                     "rowId": ".setmenu katalog2"
                  }]
               }, {
                  "title": "Set Menu-3",
                  "rows": [{
                     "title": "Menu List Message",
                     "rowId": ".setmenu list"
                  }]
               }, {
                  "title": "Set Menu-4",
                  "rows": [{
                     "title": "Menu Document",
                     "rowId": ".setmenu document"
                  }]
               } , {
                  "title": "Set Menu-5",
                  "rows": [{
                     "title": "Template Location",
                     "rowId": ".setmenu templateLocation"
                  }]
               } , {
                  "title": "Set Menu-6",
                  "rows": [{
                     "title": "Template Image",
                     "rowId": ".setmenu templateImage"
                  }]
               }]

               const listMessage = {
                  text: lang.SetAh(),
                  footer: `© ${ownername}`,
                  title: salam + ' ' + pushname,
                  buttonText: "Select Here",
                  sections
               }

               alpha.sendMessage(m.chat, listMessage, {
                  quoted: m
               })*/
            } else {
               db.data.settings[botNumber].typemenu = text
               reply(lang.ok())
            }
         }
         break
         case 'setmenu2': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateImage', 'image', 'location']
            if (!listhades.includes(text)) {
               reply("Not available for now")
               /* const sections = [{
                   "title": "Set Menu-1",
                   "rows": [{
                      "title": "Menu Button Location",
                      "rowId": ".setmenu2 location"
                   }]
                }, {
                   "title": "Set Menu-2",
                   "rows": [{
                      "title": "Menu Button Image",
                      "rowId": ".setmenu2 image"
                   }]
                }, {
                   "title": "Set Menu-3",
                   "rows": [{
                      "title": "Menu Template Location",
                      "rowId": ".setmenu2 templateLocation"
                   }]
                }, {
                   "title": "Set Menu-4",
                   "rows": [{
                      "title": "Menu Template Image",
                      "rowId": ".setmenu2 templateImage"
                   }]
                }]

                const listMessage = {
                   text: lang.SetAh(),
                   footer: `© ${ownername}`,
                   title: salam + ' ' + pushname,
                   buttonText: "Select Here",
                   sections
                }

                alpha.sendMessage(m.chat, listMessage, {
                   quoted: m
                })*/
            } else {
               db.data.settings[botNumber].typemenu2 = text
               reply(lang.ok())
            }
         }
         break
         case 'help':
         case 'panel':
         case 'menu': {
            /*try {
               hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
            } catch {
               hit_total = {
                  value: "-"
               }
            }
            hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
            */ //let bio = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || '-'
            let {
               exp,
               limit,
               level,
               money,
               role
            } = global.db.data.users[m.sender]
            let goblock = await alpha.fetchBlocklist()
            let {
               min,
               xp,
               max
            } = levelling.xpRange(level, global.multiplier)
            let dnew = new Date(new Date + 3600000)
            let user = db.data.users[m.sender]
            let week = dnew.toLocaleDateString('en', {
               weekday: 'long'
            })
            let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
            let date = dnew.toLocaleDateString('en', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            }).format(dnew)

            let ownernya = ownernomer
            var ini_anu = `Hi ${user.name}

╭─❒ 「 Bot Info 」 
├ Creator :  @${ownernya.split('@')[0]}
├ Sponsored :  @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : "-"
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Private chat : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length)}
├ Group chat : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)}
├ Total chats :  ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length) + (Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)} 
├ User In Database : ${Object.keys(global.db.data.users).length} Users
├ User Registered : ${(Object.values(global.db.data.users).filter(user => user.registered == true).length)} Users
├ User Banned : ${(Object.values(global.db.data.users).filter(user => user.banned == true).length)} Users
├ User Blockir : ${goblock == undefined ? '0' : goblock.length} Users
╰❒ Runtime : ${runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Register: ${user.registered ? `✅\n├ Name : ${user.name}\n├ Age : ${user.age} years\n├ Gender : ${user.gender}\n├ Registered on : ${tanggal(user.regTime)}` : '❌'}
├ Nomor : @${m.sender.split('@')[0]}
├ Limit : ${isPremium ? limitawal.premium : limitawal.free} limit
├ XP : ${exp}
├ Premium : ${isPremium ? '✅' : '❌'}
├ Me : ${m.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isCreator ? 'True' : `False`}

${lang.listMenu(prefix)}`
            const buttojns = [{
                  buttonId: '.command',
                  buttonText: {
                     displayText: '📖 List Menu'
                  },
                  type: 1
               },
               {
                  buttonId: '.owner',
                  buttonText: {
                     displayText: '🙍‍♂️ Owner'
                  },
                  type: 1
               },
               {
                  buttonId: '.donasi',
                  buttonText: {
                     displayText: '💰 Donation'
                  },
                  type: 1
               }
            ]
            await sendButImage(alpha, m.chat, sender, buttonDefault4, ini_anu, `© ${ownername}`, [ownernya, ini_mark, m.sender], {
               quoted: m
            })

            sendListMenu(alpha, m.chat, ``, `ALL MENU HERE`, `© ${ownername}`, {})
            /*if (db.data.settings[botNumber].typemenu == 'document') {
               sendButDoC(alpha, m.chat, ini_anu, '© ' + ownername, botname, ownername, `WhatsApp Bot Multi Device`, time, pp_bot, pp_bot, buttojns, [ownernya, ini_mark, m.sender], {
                  quoted: ftroli
               })
            }
            if (db.data.settings[botNumber].typemenu == 'templateLocation') {
               await Alpha.send5ButLoc(alpha, reSize, m.chat, ini_anu, '©' + ownername, pp_bot, buttonDefault, [ownernya, ini_mark, m.sender])
            }
            if (db.data.settings[botNumber].typemenu == 'templateImage') {
               await Alpha.send5ButImg(alpha, m.chat, ini_anu, '©' + ownername, pp_bot, buttonDefault, [ownernya, ini_mark, m.sender])
            }
            if (db.data.settings[botNumber].typemenu == 'templateTenor') {
               Alpha.send5ButGif(m.chat, lang.menunya(salam, pushname, botname), `© ${ownername}`, pp_bot, thumbGif, [{
                  "urlButton": {
                     "displayText": "YouTube Creator",
                     "url": `${youtube}`
                  }
               }, {
                  "urlButton": {
                     "displayText": "Rest Api's",
                     "url": `${myweb}`
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "Donasi",
                     "id": '.donate'
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "Owner",
                     "id": '.owner'
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "List Command",
                     "id": '.command'
                  }
               }], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu == 'katalog') {
               sendKatalog(alpha, m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu == 'katalog2') {
               sendKatalog2(alpha, m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu == 'list') {
               sendListMenu(alpha, m.chat, `╭─⬣「 _*INFO USER*_ 」⬣\n│  *Name* : ${pushname}\n│  *Number* : ${sender.split("@")[0]}\n│  *Status* : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}\n╰─⬣\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : ${ownername}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.0.0\n╰─⬣\n\n╭─⬣「 _*INDONESIAN TIME*_ 」⬣\n│ *Wib* : ${time}\n│ *Wita* : ${wita}\n│ *Wit* : ${wit}  \n╰─⬣`, `CLICK HERE`, {
                  quoted: m
               })
            }
         */
         }
         break
         case "command":
         case 'allmenu': {
            sendListMenu(alpha, m.chat, `╭─⬣「 _*INFO USER*_ 」⬣\n│  *Name* : ${pushname}\n│  *Number* : ${sender.split("@")[0]}\n│  *Status* : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}\n╰─⬣\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : ${ownername}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.0.0\n╰─⬣\n\n╭─⬣「 _*INDONESIAN TIME*_ 」⬣\n│ *Wib* : ${time}\n│ *Wita* : ${wita}\n│ *Wit* : ${wit}  \n╰─⬣`, `CLICK HERE`, `© ${ownername}`, {
               quoted: m
            })
         }
         break
         /*case 'allmenu': {
            await sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋,  *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, {
               userJid: m.chat,
               quoted: m
            })
         }
         break*/
         case 'infocmd':
         case 'infomenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'storecmd':
         case 'storemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'rpgcmd':
         case 'rpgmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.rpgmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.rpgmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.rpgmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break

         case 'photooxycmd':
         case 'photooxymenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.photooxy(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.photooxy(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.photooxy(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'storagecmd':
         case 'storagemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storagemenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storagemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storagemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'voicecmd':
         case 'voicemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.voiceChange(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.voiceChange(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.voiceChange(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'anoncmd':
         case 'anonymouscmd':
         case 'anonmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anonchat(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anonchat(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anonchat(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'ownercmd':
         case 'ownermenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ownermenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ownermenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ownermenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'databasecmd':
         case 'databasemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.database(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.database(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.database(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'groupcmd':
         case 'grupmenu':
         case 'groupmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.group(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.group(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.group(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'animecmd':
         case 'animemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anime(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'tagcmd':
         case 'tagmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tag(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tag(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tag(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'stalkcmd':
         case 'stalkmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stalk(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stalk(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stalk(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'searchcmd':
         case 'searchmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.search(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.search(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.search(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'convertercmd':
         case 'convertmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.converter(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.converter(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.converter(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'stickercmd':
         case 'imageeffect':
         case 'stickermenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'stickercmd2':
         case 'stickereffect':
         case 'stickermenu2': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect2(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect2(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect2(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'downloadercmd':
         case 'downloadmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.download(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.download(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.download(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'ranimecmd':
         case 'randomanime': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ranime(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ranime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ranime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'nsfwcmd':
         case 'nsfwmenu':
         case 'nsfwcommand': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.nsfw(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.nsfw(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.nsfw(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'textprocmd':
         case 'textpromenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.textpro(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.textpro(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.textpro(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'othercmd':
         case 'othermenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.other(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.other(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.other(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'gamecmd':
         case 'gamemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.game(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.game(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.game(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'soundcmd':
         case 'soundmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.soundmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.soundmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.soundmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'logocmd':
         case 'logomenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.logomenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.logomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.logomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'islamcmd':
         case 'islammenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.islammenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.islammenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.islammenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'asupancmd':
         case 'asupanmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.asupan(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.asupan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.asupan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'cecancmd':
         case 'cecanmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.cecan(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.cecan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.cecan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'primbonmenu':
         case 'primboncmd': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.primbonmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋,  *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.primbonmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.primbonmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'telestc':
         case 'telestiker':
         case 'telecmd': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stcmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋,  *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stcmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stcmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'ephotomenu':
         case 'ephotocmd': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ephotomenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ephotomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ephotomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'thanksto':
         case 'tqto': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tqto(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tqto(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tqto(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {
                  quoted: m
               })
            }
         }
         break
         case 'swm':
         case 'take':
         case 'wm': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToStik(prefix, command))
            if (quoted.isAnimated) {
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let webpToMp4 = await webp2mp4File(media)
               let encmedia = await alpha.sendVideoAsSticker(m.chat, webpToMp4.result, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else {
               reply(lang.NoToStik(prefix, command))
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'setwm':
         case 'setexif': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.NoToStik(prefix, command))
            if (!text.includes('|')) return reply(lang.NoToStik(prefix, command))
            global.packname = text.split("|")[0]
            global.author = text.split("|")[1]
            reply(lang.DoneExif(global.packname, global.author))

         }

         break
         case 'nomerhoki':
         case 'nomorhoki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!Number(text)) return reply(`Example : ${prefix + command} 887435047326`)
            let anu = await primbon.nomer_hoki(Number(text))
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'artimimpi':
         case 'tafsirmimpi': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} belanja`)
            let anu = await primbon.tafsir_mimpi(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalanjodoh':
         case 'ramaljodoh': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalanjodohbali':
         case 'ramaljodohbali': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'suamiistri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalancinta':
         case 'ramalcinta': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'artinama': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone`)
            let anu = await primbon.arti_nama(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'kecocokannama':
         case 'cocoknama': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'kecocokanpasangan':
         case 'cocokpasangan':
         case 'pasangan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone|Clara`)
            let [nama1, nama2] = text.split`|`
            let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'jadianpernikahan':
         case 'jadiannikah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'sifatusaha': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!ext) return reply(`Example : ${ command} 28, 12, 2021`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'rejeki':
         case 'rezeki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'pekerjaan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalannasib':
         case 'ramalnasib':
         case 'nasib': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.ramalan_nasib(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'potensipenyakit':
         case 'penyakit': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'artitarot':
         case 'tarot': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'fengshui': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
            let [nama, gender, tahun] = text.split`,`
            let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'haribaik': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.petung_hari_baik(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'harisangar':
         case 'taliwangke': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'harinaas':
         case 'harisial': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'nagahari':
         case 'harinaga': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'arahrejeki':
         case 'arahrezeki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'peruntungan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
            let [nama, tgl, bln, thn, untuk] = text.split`,`
            let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'weton':
         case 'wetonjawa': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `???? Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.weton_jawa(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'sifat':
         case 'karakter': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone,12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'keberuntungan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'memancing': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'masasubur': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
            let [tgl, bln, thn, siklus] = text.split`,`
            let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ppcp':
         case 'ppcouple':
         case 'couple': {
            let data = fs.readFileSync('./lib/ppcp.js');
            let jsonData = JSON.parse(data);
            let randIndex = Math.floor(Math.random() * jsonData.length);
            let json = jsonData[randIndex];
            let randCowo = await getBuffer(json.cowo)
            alpha.sendMessage(m.chat, {
               image: randCowo,
               caption: '*Boy*',
               quoted: m
            })
            let randCewe = await getBuffer(json.cewe)
            alpha.sendMessage(m.chat, {
               image: randCewe,
               caption: '*Girl*',
               quoted: m
            })
         }
         break
         //ephoto360
         case "1917text":
         case "angelwing":
         case "announofwin":
         case "birthdaycake":
         case "capercut":
         case "cardhalloween":
            //case "cartoonstyle":
         case "christmascard":
         case "christmasseason":
         case "covergamepubg":
         case "covergraffiti":
         case "dragonfire":
         case "embroider":
         case "fabrictext":
         case "facebookgold":
         case "facebooksilver":
         case "funnyanimations":
         case "funnyhalloween":
         case "galaxybat":
         case "galaxywallpaper":
         case "generalexam":
         case "glowingtext":
         case "graffiti3d":
         case "graffititext":
         case "graffititext2":
         case "graffititext3":
         case "greetingcardvideo":
         case "halloweenbats":
         case "heartcup":
         case "heartflashlight":
         case "horrorletter":
         case "icetext":
         case "instagramgold":
         case "instagramsilver":
         case "lightningpubg":
         case "lovecard":
         case "lovelycute":
         case "masteryavatar":
         case "merrycard":
         case "messagecoffee":
         case "metalstar":
         case "milkcake":
         case "modengold3":
         case "moderngold":
         case "moderngold2":
         case "moderngoldsilver":
         case "nameonheart":
         case "noeltext":
         case "projectyasuo":
         case "pubgbirthday":
         case "pubgglicthvideo":
         case "pubgmascotlogo":
         case "puppycute":
         case "realembroidery":
         case "retrotext":
         case "rosebirthday":
         case "snowontext":
         case "starsnight":
         case "summerbeach":
         case "sunglightshadow":
         case "textcakes":
         case "texthalloween":
         case "textonglass":
         case "textsky":
         case "thundertext":
         case "twittergold":
         case "twittersilver":
         case "viettel":
         case "vintagetelevision":
         case "watercolor2":
         case "womansday":
         case "writeblood":
         case "writegalaxy":
         case "writehorror":
         case "youtubegold":
         case "youtubesilver":
         case "zombie3d": {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/ephoto360/' + command, {
               text: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }

         break
         case "shirtclub":
         case 'steellettering':
         case 'letterstext':
         case 'barcashirt':
         case 'premiercup':
         case 'stylepoligon':
         case 'lifebuoys':
         case 'juventusshirt': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/ephoto360/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'horror':
         case 'game8bit':
         case 'layered':
         case 'glitch2':
         case 'cool-graffiti':
         case 'cool-wall-graffiti':
         case 'realistic':
         case 'space3d':
         case 'glitch-tiktok':
         case 'stone':
         case 'marvel':
         case 'marvel2':
         case "metal-rose-gold":
         case 'pornhub':
         case 'avengers':
         case 'metal-rainbow':
         case 'metal-gold':
         case 'metal-galaxy':
         case "metal-silver":
         case 'lion':
         case 'wolf-black-white':
         case 'wolf-galaxy':
         case 'ninja':
         case '3dsteel':
         case 'horror2':
         case 'lava':
         case 'bagel': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api(global.APIs.alfa, '/api/textpro/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'battlegrounds-logo':
         case 'battlefield4':
         case 'text-8bit': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api(global.APIs.alfa, '/api/photooxy/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'typography-flower':
         case 'under-flower':
         case 'bevel-text':
         case 'silk-text':
         case 'sweet-andy':
         case 'smoke-typography':
         case 'carvedwood':
         case 'scary-cemetery':
         case 'royallook':
         case 'coffeecup2':
         case 'illuminated':
         case 'harry-potter2': //case 'woodblack': //case 'butterfly-reflection': //case 'watermelon': // case 'striking':// case 'metallicglow': //case 'rainbow-text':
         case 'birthday-cake':
         case 'embroidery': // case 'crisp': 
         case 'flaming':
         case 'furtext':
         case 'nightsky':
         case 'glow-rainbow':
         case 'gradient-avatar':
         case 'white-cube': // case 'honey-text': // case 'vintage-style': //case 'glowing-3d': // case 'army-camouflage': 
         case 'graffiti-cover':
         case 'rainbow-shine':
         case 'smoky-neon':
         case 'quotes-underfall': //case 'layered-leaves': 
         case 'vector-nature':
         case 'yellow-rose':
         case 'love-text':
         case 'underwater-ocean':
         case 'nature-text':
         case 'wolf-metal':
         case 'summer-text':
         case 'wooden-board': //case 'flower-heart':
         case 'quote-wood':
         case 'love-text':
         case 'quotes-undergrass':
         case 'naruto-banner':
         case 'love-message':
         case 'textoncup2':
         case 'burn-paper':
         case 'smoke':
         case 'romantic-messages':
         case 'shadow-sky':
         case 'text-cup':
         case 'coffecup': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/photooxy/' + command, {
               text: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case "3dbox":
         case "3dchrome":
         case "3dglue":
         case "3dstone":
         case "abstra":
         case "advanced":
         case "bear":
         case "berry":
         case "biscuit":
         case "black-metal":
         case "blackpink":
         case "blood":
         case "blood2":
         case "blue-balloon":
         case "blue-gem":
         case "blue-glass":
         case "blue-glitter":
         case "blue-jewelry":
         case "blue-metal":
         case "blue-sparkling":
         case "bokeh":
         case "bread":
         case "broken":
         case "bronze-glitter":
         case "candy":
         case "captain-as2":
         case "carbon":
         case "chocolate":
         case "chrismast":
         case "christmas":
         case "cloudsky":
         case "cyan-balloon":
         case "cyan-glass":
         case "cyan-jewelry":
         case "cyan-sparkling":
         case "dark-gold":
         case "decorate":
         case "decorate-purple":
         case "decorative":
         case "deluxe-gold":
         case "demon":
         case "denim":
         case "discovery":
         case "dropwater":
         case "drug":
         case "embossed":
         case "engraved":
         case "equalizer":
         case "eroded-metal":
         case "fabric":
         case "fiction":
         case "firework":
         case "glitch":
         case "gloss":
         case "glossy":
         case "glossy-blue":
         case "glossy-carbon":
         case "gold-balloon":
         case "gold-glitter":
         case "gold-sparkling":
         case "golden":
         case "gradient":
         case "gradient2":
         case "green-balloon":
         case "green-glass":
         case "green-glitter":
         case "green-jewelry":
         case "green-neon":
         case "green-sparkling":
         case "halloween":
         case "halloween2":
         case "holographic":
         case "honey2":
         case "hot-metal":
         case "ice":
         case "joker":
         case "juice":
         case "koifish":
         case "luxury2":
         case "magma":
         case "marble":
         case "marble2":
         case "matrix":
         case "metaldark":
         case "metallic2":
         case "minion":
         case "multicolor":
         case "natural":
         case "neon":
         case "neon-devil":
         case "neon-light":
         case "neon2":
         case "neonc":
         case "neonlight":
         case "neonligth2":
         case "newyear":
         case "newyear2":
         case "orange-glass":
         case "orange-jewelry":
         case "oscar":
         case "papercut":
         case "peridot":
         case "pink-balloon":
         case "pink-glitter":
         case "pink-sparkling":
         case "purple":
         case "purple-balloon":
         case "purple-gem":
         case "purple-glass":
         case "purple-glitter":
         case "purple-jewelry":
         case "purple-shiny-glass":
         case "purple-sparkling":
         case "rainbow2":
         case "red-balloon":
         case "red-glass":
         case "red-jewelry":
         case "red-sparkling":
         case "road-warning":
         case "robot":
         case "rock":
         case "rusty":
         case "scifi":
         case "shiny":
         case "silver-glitter":
         case "silver-jewelry":
         case "sircuit":
         case "skeleton":
         case "sketch":
         case "snow":
         case "steel":
         case "strawberry":
         case "summer":
         case "summery":
         case "thunder":
         case "thunder2":
         case "toxic":
         case "transformer":
         case "underwater":
         case "wall":
         case "water-pipe":
         case "watercolor":
         case "wicker":
         case "wonderful-graffiti":
         case "wood":
         case "writing":
         case "xmas":
         case "yellow-glass":
         case "yellow-jewelry": {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/textpro/' + command, {
               text: text
            }, 'apikey'))
            if (res.status != 200) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'chika':
         case 'rikagusriani':
         case 'bocil':
         case 'geayubi':
         case 'santuy':
         case 'ukhty':
         case 'asupan':
         case 'delvira':
         case 'ayu':
         case 'bunga':
         case 'aura':
         case 'nisa':
         case 'ziva':
         case 'yana':
         case 'viona':
         case 'syania':
         case 'riri':
         case 'syifa':
         case 'mama_gina':
         case 'alcakenya':
         case 'mangayutri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'asupan.mp4', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'china':
         case 'indonesia':
         case 'malaysia':
         case 'thailand':
         case 'korea':
         case 'japan':
         case 'vietnam':
         case 'jenni':
         case 'jiiso':
         case 'lisa':
         case 'rose': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'hentai': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            anu = await hentai()
            result = anu[Math.floor(Math.random(), anu.length)]
            alpha.sendMessage(m.chat, {
               video: {
                  url: result.video_1
               },
               caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}`
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'cuddle':
         case 'foxgirl':
         case 'kemonomimi2':
         case 'woof':
         case 'holo2':
         case 'hug':
         case 'kiss':
         case 'lizard':
         case 'meowi':
         case 'neko2':
         case 'pat':
         case 'poke':
         case 'slap':
         case 'tickle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/sfw/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'sfw.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'baka':
         case 'smug':
         case 'neko-sfw':
         case 'hentai-gif':
         case 'spank':
         case 'blowjob':
         case 'cumarts':
         case 'eroyuri':
         case 'eroneko':
         case 'erokemonomimi':
         case 'erokitsune':
         case 'ero':
         case 'feet':
         case 'erofeet':
         case 'feetgif':
         case 'femdom':
         case 'futanari':
         case 'hentai':
         case 'holoero':
         case 'holo':
         case 'keta':
         case 'kitsune':
         case 'kemonomimi':
         case 'pussyart':
         case 'pussywankgif':
         case 'girl-solo':
         case 'girl-solo-gif':
         case 'tits':
         case 'trap':
         case 'yuri':
         case 'avatar2':
         case 'anal':
         case 'bj':
         case 'boobs':
         case 'classic':
         case 'cumsluts':
         case 'kuni':
         case 'lesbian':
         case 'neko':
         case 'neko-gif':
         case 'ahegao':
         case 'bdsm':
         case 'cuckold':
         case 'cum':
         case 'foot':
         case 'gangbang':
         case 'glasses':
         case 'jahy':
         case 'masturbation':
         case 'nsfw-neko':
         case 'orgy':
         case 'panties':
         case 'tentacles':
         case 'thighs':
         case 'zettai': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/nsfw/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'nsfw.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         //sound
         case 'sound71':
         case 'sound72':
         case 'sound73':
         case 'sound74':
         case 'sound75':
         case 'sound1':
         case 'sound2':
         case 'sound3':
         case 'sound4':
         case 'sound5':
         case 'sound6':
         case 'sound7':
         case 'sound8':
         case 'sound9':
         case 'sound10':
         case 'sound11':
         case 'sound12':
         case 'sound13':
         case 'sound14':
         case 'sound15':
         case 'sound16':
         case 'sound17':
         case 'sound18 ':
         case 'sound19':
         case 'sound20':
         case 'sound21':
         case 'sound22':
         case 'sound23':
         case 'sound24':
         case 'sound25':
         case 'sound26':
         case 'sound27':
         case 'sound28':
         case 'sound29':
         case 'sound30':
         case 'sound31':
         case 'sound32':
         case 'sound33':
         case 'sound34':
         case 'sound35':
         case 'sound36':
         case 'sound37':
         case 'sound38':
         case 'sound39':
         case 'sound40':
         case 'sound41':
         case 'sound42':
         case 'sound43':
         case 'sound44':
         case 'sound45':
         case 'sound46':
         case 'sound47':
         case 'sound48':
         case 'sound49':
         case 'sound50':
         case 'sound51':
         case 'sound52':
         case 'sound53':
         case 'sound54':
         case 'sound55':
         case 'sound56':
         case 'sound57':
         case 'sound58':
         case 'sound59':
         case 'sound60':
         case 'sound61':
         case 'sound62':
         case 'sound63':
         case 'sound64':
         case 'sound65':
         case 'sound66':
         case 'sound67':
         case 'sound68':
         case 'sound69':
         case 'sound70': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/sound/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendMessage(m.chat, {
               audio: img,
               mimetype: 'audio/mpeg',
               ptt: true
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverbannerlol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.CoverBanLol(prefix, command))
            if (!text.includes('|')) return reply(lang.CoverBanLol(prefix, command))
            arg = args.join(' ')
            atas = arg.split('|')[0]
            bawah = arg.split('|')[1]
            const style = ['jinx7', 'jinx-8', 'kassadin-5', 'nissfortune-5', 'pyke-7', 'riven-8', 'sylas-5', 'vayne-9', 'kassadin-4', 'qiyana-5', 'renataglasc', 'shen-5', 'heimerdinger-3', 'nunu-5', 'orianna-4', 'ziggs-4', 'soraka-9', 'soraka-10', 'xayah-3', 'zeri-2', 'ahri-9', 'akshan-2', 'amumu-4', 'annie-3', 'bard-3', 'brand-5', 'diana-4', 'draven-3', 'ekko-6', 'elise-4', 'ezreal-7', 'gwen-3', 'janna-6', 'kindred-3', 'leblanc-7', 'leona-7', 'lissandra-4', 'lux-8', 'lux-9', 'nalzahar-4', 'nasteryi-7', 'reksai-3', 'sett-3', 'sivir-6', 'teemo-5', 'tristana-6', 'vladimir-5', 'xinzhao-5', 'zed-7', 'zeri', 'caitlyn-6', 'caitlyn-7', 'caitlyn-8', 'caitlyn-9', 'caitlyn-10', 'caitlyn-11', 'jayce-5', 'kaisa-8', 'karma-7', 'thresh-6', 'vi-5', 'yasuo-8', 'yasuo-9', 'fiora-8', 'norgana-7', 'nami-5', 'poppy-4', 'syndra-5', 'yuumi-4', 'jarvaniv-6', 'kayn-4', 'kayle-5', 'lillia-2', 'norgana-6', 'tryndamere-3', 'vex', 'vex-2', 'yone-4', 'tristana-5', 'viego-2', 'akali-10', 'anivia-4', 'darius-5', 'graves-6', 'seraphine-5', 'shaco-2', 'twistedfate-4', 'xayah-2', 'zyra-5', 'ahri-8', 'ashe-6', 'cassiopeia-4', 'evelynn-6', 'leblanc-6', 'nalphite-4', 'warwick-5', 'akshan', 'graves-5', 'nissfortune-5', 'pyke-6', 'rengar-6', 'thresh-5', 'diana-3', 'relia-11', 'olaf-3', 'pantheon-6', 'pantheon-7', 'riven-7', 'vayne-8', 'corki-4', 'naokai-2', 'rammus-4', 'veigar-4', 'zed-6', 'camille-4', 'drmundo-3', 'lucian-6', 'nordekaiser-4', 'renekton-4', 'sejuani-5', 'senna-3', 'sylas-4', 'varus-5', 'xerath-3', 'damwon', 'galio-3', 'gwen', 'gwen-2', 'jax-5', 'jinx-6', 'kayle-5', 'sion-2', 'twitch-4', 'velkoz-4', 'blitzcrank-3', 'leona-6', 'lulu-3', 'lulu-4', 'lux-7', 'nasus-5', 'nunu-4', 'rumble-2', 'samira-3', 'aphelios-2', 'blitzcrank-2', 'caitlyn-5', 'garen-6', 'kogmaw-4', 'leona-5', 'alzahar-3', 'syndra-4', 'wukong-4', 'yone-3', 'yuumi-3', 'zyra-4', 'alistar-4', 'chogath-2', 'draven-2', 'fiora-7', 'jarvan-5', 'jhin-5', 'karma-6', 'nautilus-2', 'neeko-5', 'shyvana-3', 'viego', 'azir-4', 'diana-4', 'gragas-2', 'janna-5', 'kalista-3', 'katarina-6', 'ornn-2', 'qiyana-4', 'quinn-3', 'rell', 'xinzhao-4', 'anivia-3', 'hecarim-4', 'illaoi-2', 'jayce-4', 'lissandra-3', 'nami-4', 'nasus-4', 'nidalee-5', 'seraphine-4', 'singed-2', 'skarner-2', 'soraka-7', 'varus-4', 'vladimir-4', 'yorick-4', 'zac', 'riven-8', 'ahri-7', 'akali-9', 'evelynn-5', 'kaisa-7', 'lucian-5', 'seraphine', 'seraphine-2', 'seraphine-3', 'aatrox-6', 'amumu-3', 'lise-3', 'fizz-5', 'karma-5', 'zeri-2', 'kassadin-3', 'khazix-4', 'sivir-5', 'twistedfate-3', 'ashe-5', 'brand-4', 'leesin-5', 'olaf-2', 'sett-2', 'kayle-4', 'leblanc-5', 'pyke-5', 'samira', 'samira-2', 'viktor-2', 'yasuo-7', 'zed-5', 'ezreal-6', 'nasteryi-6', 'shen-4', 'sona-4', 'vi-4', 'yone', 'yone-2', 'ziggs-3', 'ahri-6', 'cassiopeia-3', 'kindred-2', 'riven-6', 'kennen-2', 'kogmaw-3', 'lillia', 'syndra-3', 'teemo-4', 'thresh-4', 'vayne-7', 'velkoz-3', 'yasuo-6', 'zoe-4', 'bard-2', 'gnar-3', 'irelia-10', 'nocturne-4', 'poppy-3', 'enna-2', 'volibear-3', 'volibear-4', 'ekko-5', 'fiora-6', 'lucian-4', 'pantheon-5', 'leblanc-4', 'norgana-5', 'urgot-4', 'zyra-3', 'jinx-5', 'sett', 'alistar-3', 'katarina-5', 'lux-5', 'lux-6', 'nasteryi-5', 'nalphite-3', 'nordekaiser-3', 'reksai-2', 'sejuani-4', 'tryndamere-2', 'xerath-2', 'aphelios', 'garen-5', 'jax-4', 'karma-4', 'leesin-4', 'leona-4', 'nidalee-4', 'rengar-5', 'soraka-5', 'soraka-6', 'swain-4', 'sylas-3', 'trundle-2', 'vladimir-3', 'aatrox-5', 'akali-8', 'ekko-4', 'qiyana-3', 'senna', 'yasuo-5', 'ashe-4', 'darius-4', 'hecarim-3', 'norgana-4', 'nami-3', 'riven-4', 'riven-5', 'ryze-3', 'neeko-3', 'eeko-4', 'xayahrakan', 'zoe-3', 'airi-6', 'noctune-3', 'pantheon-3', 'pantheon-4', 'rammus-3', 'udyr-2', 'veigar-3', 'akali-7', 'garen-4', 'irelia-8', 'irelia-9', 'jinx-4', 'lucian-3', 'pyke-4', 'warwick-4', 'caitlyn-3', 'caitlyn-4', 'kaisa-6', 'qiyana', 'qiyana-2', 'yasuo-4', 'jhin-3', 'karma-3', 'nordekaiser-2', 'tristana-4', 'nami', 'poppy-3', 'aatrox', 'lulu', 'braum', 'camille', 'karma', 'kindred', 'hecarim', 'norgana', 'renekton', 'kennen', 'akali', 'varus', 'orianna', 'blitzcrank', 'bloodmoonjhin', 'bloodmoontalon', 'arcaderiven', 'udyr', 'rumble', 'gnar', 'shaco', 'twitch', 'veigar', 'tryndamere', 'viktor', 'trundle', 'ezreal', 'poppy', 'lissandra', 'jax', 'vi', 'vellkoz', 'darius', 'diana', 'corki', 'sivir', 'ryze', 'azir', 'tristana', 'kled', 'volibear', 'twisterfate', 'anivia', 'zyra', 'quinn', 'nissfortune', 'kalista', 'ezrealandshen', 'gangplank', 'hextachannie', 'elementalistlux', 'xinzhao', 'vayne', 'jhin', 'reksai', 'graves', 'kogmaw', 'garen', 'porojinx', 'warwick', 'fizz', 'caitlyn', 'rengar', 'talon', 'nidalee', 'lux', 'jinx', 'thresh', 'wukong', 'sona', 'ahri', 'riven', 'zed', 'leesin', 'janna', 'katarina', 'leblanc', 'leona', 'fiora', 'lucian', 'shen', 'ziggs', 'yasuo', 'ekko', 'draven', 'ashe', 'ekko-5', 'teemo', 'khazix', 'nasteryi', 'brand', 'taliyah', 'nocturne', 'cassiopeia', 'xayah', 'rakan', 'syndra', 'irelia', 'leesingf', 'yasuobm', 'aurelionsol', 'pantheon', 'bard', 'singed', 'soraka', 'taric', 'naokai', 'xerath', 'gragas', 'jayce', 'riven3', 'nalphite', 'naster_yi2', 'chogath', 'zed2', 'darius2', 'talon2', 'kayle', 'drmundo', 'rammus', 'vladimir', 'ahri-2', 'karma-2', 'jarvan', 'nidalee-2', 'vayner-2', 'warwick-2', 'rengar-2', 'yasuo-3', 'galio', 'pantheon-2', 'jinx-2', 'nalzahar', 'olaf', 'shyvana', 'thresh-2', 'sion', 'caitlyn-2', 'swain', 'kassadin', 'heimerdinger', 'amumu', 'alistar', 'nasus', 'sejuani', 'ezreal3', 'nautilus', 'fiddlesticks', 'sona2', 'karthus', 'ekko2', 'orianna2', 'velkoz-2', 'xinzhao2', 'garen2', 'annie-2', 'yasuonb', 'rivendb', 'kayn', 'kaisa', 'veigar-2', 'vayne-3', 'twitch-2', 'tristana-2', 'rhaast', 'nalzahar-2', 'kayle-2', 'illaoi', 'fizz-2', 'elise', 'brand-2', 'syndra-2', 'soraka-2', 'nissfortune-2', 'hecarim-2', 'ezreal-2', 'ahri-3', 'yorick', 'z-2', 'tahmkench', 'shen-2', 'ornn', 'cassiopeia-2', 'renekton-2', 'nasus-2', 'jarvan-2', 'fiora-2', 'alistar-2', 'taric-2', 'zac-2', 'yorick-2', 'varus-2', 'nordekaiser', 'nasteryi-3', 'katarina-2', 'janna-2', 'fiora-3', 'evelynn', 'elise-2', 'ashe-2', 'annie', 'zoe', 'vi-2', 'vayne-4', 'rengar-3', 'jhin-2', 'graves-2', 'xayahrakan', 'warwick-3', 'nissfortune-3', 'lux-2', 'kaisa', 'jarvaniv', 'zoe-2', 'swain-2', 'sivir-2', 'nissfortune-4', 'jax-2', 'galio-2', 'varus-3', 'urgot', 'twistedfate-2', 'taric-3', 'swain-3', 'shen-3', 'rammus-2', 'pyke-2', 'pyke', 'nasus-3', 'talon', 'khazix-2', 'kayn-2', 'irelia-2', 'evelynn-2', 'akali-2', 'vladimir-2', 'jayce-2', 'janna-3', 'irelia-4', 'irelia-3', 'diana-2', 'zed-3', 'teemo-2', 'taliyah-2', 'shyvana-2', 'poppy-2', 'katarina-3', 'jax-3', 'garen-3', 'darius-3', 'chogath-2', 'aatrox-2', 'soraka-3', 'sona-3', 'sivir-3', 'kaisa-2', 'akali-4', 'akali-3', 'xinzhao-3', 'urgot-3', 'urgot-2', 'tristana-3', 'talon-3', 'sejuani-2', 'nunu-2', 'lulu-2', 'lucian-2', 'irelia-6', 'irelia-5', 'ashe-3', 'ziggs-2', 'yasuo-2', 'sona-4', 'nalphite-2', 'khazix-3', 'kayn-3', 'jinx-3', 'orianna-3', 'kaisa-4', 'kaisa-3', 'heimerdinger-2', 'ezreal-4', 'evelynn-3', 'akali-5', 'ahri-4', 'thresh-3', 'ryze-2', 'kled-2', 'janna-4', 'graves-3', 'fiddlesticks-2', 'ekko-3', 'amumu-2', 'nami-2', 'lulusoraka', 'lissandra-2', 'leona-3', 'leona-2', 'leblanc-2', 'ezrealmissfortune', 'camille-2', 'twitch-3', 'soraka-4', 'renekton-3', 'neeko-2', 'neeko', 'nasteryi-4', 'drmundo-2', 'akali-6', 'zyra-2', 'zilean', 'wukong-3', 'wukong-2', 'teemo-3', 'skarner', 'sivir-4', 'riven-2', 'quinn-2', 'pyke-3', 'nocturne-2', 'nidalee-3', 'norgana-2', 'leesin-3', 'kogmaw-2', 'kassadin-2', 'karthus-2', 'kalista-2', 'gnar-2', 'gangplank-2', 'corki-2', 'azir-3', 'azir-2', 'aatrox-4', 'aatrox-3', 'vi-3', 'vayne-6', 'vayne-5', 'tahmkench-2', 'sylas-2', 'sylas', 'sejuani-3', 'fiora-4', 'nunu-3', 'norgana-3', 'kayle-3', 'brand-3', 'anivia-2', 'ahri-5', 'yorick-3', 'rengar-4', 'fizz-4', 'fizz-3', 'corki-3', 'zed-4', 'rakan-2', 'leblanc-3', 'kaisa-5', 'jarvaniv', 'ivern', 'irelia-7', 'fiora-5', 'evelynn-4', 'camille-3', 'yuumi-2', 'yuumi', 'lux-4', 'lux-3', 'katarina-4', 'jayce-3', 'graves-4', 'ezreal-5']
            if (!style.includes(bawah)) {
               let listt = `${lang.coverbannerlol(style.length)}`
               no = 0

               for (var i = 0; i < style.length; i++) {
                  no += 1

                  listt += no.toString() + '.  ' + style[i] + '\n'

               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: atas,
                  heroes: bawah
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'pubglogomaker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.pubglogomaker(prefix, command))
            if (!text.includes('|')) return reply(lang.pubglogomaker(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['women', 'nen']
            if (!style.includes(bawah)) {
               let listt = `${lang.pubglogomaker_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'colorfulpubg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.colorfulpubg(prefix, command))
            if (!text.includes('|')) return reply(lang.colorfulpubg(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['gold', 'green-blue', 'pink-yellow', 'green-yellow', 'cyan-purple', 'orange-red']
            if (!style.includes(m2)) {
               let listt = `${lang.colorfulpubg_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  color: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'astronotspace': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}??🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.astronotspace(prefix, command))
            if (!text.includes('|')) return reply(lang.astronotspace(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['anubis', 'dragon', 'duck', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bull', 'rhino', 'rooster', 'pikachu', 'parrot', 'boar', 'bee', 'hurricane', 'deer', 'horse', 'crocodile', 'pitbull']
            if (!style.includes(m2)) {
               let listt = `${lang.pubglogomaker_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wallpaperaov': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.wallpaperaov(prefix, command))
            if (!text.includes('|')) return reply(lang.wallpaperaov(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['allain', 'allain-2', 'kahlii-3', 'nakroth-4', 'preyta-2', 'skud-2', 'taara-4', 'valhein-4', 'arum-4', 'butterfly-6', 'capheny-3', 'elandorr-2', 'ilumia-3', 'ishar-4', 'lauriel-6', 'laville', 'liliana-5', 'nurad-8', 'quillen-5', 'rouie', 'rouie-2', 'taara-3', 'telannas-5', 'yena-4', 'yena-5', 'zata', 'ata', 'lauriel-5', 'qi-3', 'roxie-3', 'wukong-5', 'aleister-2', 'amily-3', 'arthur-3', 'arum-3', 'astrid-2', 'dirak', 'dirak-2', 'grakk-5', 'hayate-4', 'ishar-2', 'ishar-3', 'jinna-2', 'keera', 'keera-3', 'lauriel-4', 'nax', 'natalya-5', 'quillen-4', 'raz-3', 'richter-2', 'ryoma-4', 'telannas-4', 'ulen-6', 'valhein-3', 'violet-7', 'yorn-4', 'zill-3', 'ignis-2', 'lubu-2', 'naloch-2', 'sephera-3', 'butterfly-5', 'diaochan-4', 'elandoor', 'krizzix-2', 'nina-2', 'natalya-3', 'veera-3', 'violet-6', 'yena-2', 'yena-3', 'krizziz', 'nurad-7', 'volkath', 'volkath-2', 'airi-4', 'arduin-3', 'enzo-3', 'hayate-3', 'krixi-3', 'nurad-6', 'quillen-3', 'telannas-3', 'wisp-2', 'zip-2', 'gildur-2', 'ishar', 'tulen-5', 'amily-2', 'annette-3', 'arthur-2', 'butterfly-4', 'errol-2', 'joker', 'kahlii-2', 'kilgroth', 'lauriel-3', 'nurad-5', 'arduin-2', 'darcy-2', 'florentino-3', 'noren', 'quillen-2', 'ryoma-5', 'sephera-3', 'violet-5', 'airi-3', 'diaochan-3', 'diaochanlubu', 'elsuroxie', 'lindis-3', 'taara-2', 'toro-2', 'tulen-4', 'violet-4', 'wonderwoman', 'ybneth', 'zill-2', 'arum-2', 'florentino-2', 'liliana-4', 'nurad-4', 'yorn-3', 'zip', 'annette-2', 'qi', 'qi-2', 'celica', 'capheny-2', 'diaochan-2', 'elsu-2', 'ilumia-2', 'krixi-2', 'narja-2', 'nurad-3', 'preyta', 'telannas-2', 'valhein', 'veera-2', 'veres-2', 'yorn-2', 'zephys-2', 'airi-2', 'annette', 'baldum', 'butterfly-3', 'elsu-2', 'errol', 'fennik', 'lauriel-2', 'liliana-2', 'liliana-3', 'lindis-2', 'nurad-2', 'nakroth-2', 'nakroth-3', 'natalya-2', 'raz-2', 'ryoma-2', 'slimz', 'teemee', 'tulen-2', 'tulen-3', 'violet-3', 'wiro', 'wukong-3', 'wukong-4', 'zill', 'aleister', 'alice', 'arduin', 'arthur', 'azzenka', 'batman', 'butterfly-2', 'cresh', 'darcy', 'diaochan', 'enzo-2', 'hayate-2', 'jinna', 'lubu', 'nganga', 'violet-2', 'wukong-2', 'zanis-2', 'florentino', 'gildur', 'ignis', 'naloch', 'narja', 'nakroth', 'omen', 'payna', 'raz', 'rourke', 'roxie', 'ryoma', 'skud', 'taara', 'toro', 'valhein', 'veres', 'violet', 'wisp', 'wukong', 'wonderwoman', 'xeniel', 'yorn', 'zanis', 'elsu', 'flash', 'hayate', 'ilumia', 'kahlii', 'krixi', 'lauriel', 'liliana', 'lindis', 'nina', 'nurad', 'natalya', 'quillen', 'richter', 'sephera', 'superman', 'telannas', 'thane', 'airi', 'amily', 'arum', 'astrid', 'butterfly', 'capheny', 'enzo', 'tulen', 'veera', 'yena', 'ryoma-4', 'zephys', 'zuka']
            if (!style.includes(m2)) {
               let listt = `${lang.coverbannerlol(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'maketeamlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['anubis', 'cowgirl', 'dragon', 'duck', 'ghost', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bee', 'crocodile', 'deer', 'pitbull', 'horse', 'hurricane', 'indian', 'assassin', 'boar', 'rapid', 'raven', 'warrior', 'pikachu', 'pubg', 'ninja', 'drift', 'yasuo', 'rhino', 'phoenix', 'bull', 'hornet', 'eagle', 'hunter', 'parrot', 'rooster', 'lion', 'skull', 'wolver', 'wolf', 'cobra', 'dragon', 'panther', 'owl', 'tiger', 'reaper', 'warrior']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'circlemarcotteam': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['panther', 'rhino', 'squirrel', 'unicorn', 'zebra', 'lionsnake', 'bear', 'bull', 'dragon', 'eagle', 'fox', 'griffin', 'hawk', 'lion', 'peacock', 'phoenix', 'tiger', 'wolver']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wallpaperml': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aldous', 'alice-2', 'angela-2', 'argus-2', 'chou', 'chou-2', 'estes', 'eudora', 'eudora-2', 'granger', 'granger-2', 'gusion-3', 'hanabi-2', 'hanzo', 'helcurt', 'layla-3', 'lesley-4', 'lunox-2', 'odette-3', 'saber', 'thamuz', 'vexana', 'argus', 'dyrroth', 'esmeralda-2', 'kadita-2', 'lancelot', 'leomord-2', 'lylia', 'vale', 'valir', 'xborg', 'zhask', 'alice', 'alpha', 'athena', 'badang', 'balmond', 'bane', 'diggie', 'trunks', 'fanny-2', 'fanny-3', 'freya', 'guinevere', 'gusion', 'gusion-2', 'hanabi', 'harith', 'harith-2', 'hayabusa-2', 'kadita', 'kagura-2', 'kagura-3', 'karina-2', 'kimmy', 'layla-2', 'leomord', 'lesley-2', 'lesley-3', 'lunox', 'nartis', 'niya-2', 'nana', 'nana-2', 'natalia', 'natalia-2', 'odette-2', 'pharsa', 'rafaela-2', 'selena-2', 'zilong', 'alucard', 'angela', 'bruno', 'change', 'claude', 'fanny', 'hayabusa', 'hilda', 'hylos', 'kagura', 'karina', 'karrie', 'layla', 'lesley', 'lolita', 'ninotaur', 'ninsittar', 'niya', 'noskov', 'odette', 'rafaela', 'selena']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'dragonballfb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['cabba', 'caulifla', 'cooler', 'cumber', 'hit', 'kale', 'kaminoren', 'gokuui', 'xenogokuss3', 'xenogokuss4', 'xenovegeta', 'xenovegito', 'android-18', 'blackgoku', 'bulma', 'frieza', 'gotenks-2', 'kaio', 'krillinandroid-18', 'launch', 'nutenroshi-2', 'oldkai', 'oolong', 'pilaf', 'tienshinhan', 'trunks-3', 'bardock', 'gotenks', 'nutenroshi', 'piccolo', 'songoku-2', 'songoku-3', 'songoten', 'trunks-2', 'vegeta-2', 'vegito', 'krillin', 'najinbuu', 'songohan', 'songoku', 'trunks', 'vegeta']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofaov': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['peura', 'rouie-5', 'roxie-2', 'sinestrea-4', 'tachi', 'telannas-7', "tulen-7", "veera-3", "veera-4", "veres-6", "violet-7", "wukong-3", "annette-6", "astrid-5", "bright-2", "butterfly-4", "butterfly-5", "diao-chan", "enzo-4", "helen", "iggy-3", "ilumia-4", "ishar-5", "lauriel-7", "mina-4", "annette-5", "aoi-3", "arum-3", "azzenka", "bright", "capheny-6", "celica-2", "elsu-3", "ilumia-3", "ishar-4", "kahlii-2", "lauriel-6", "laville-4", "liliana-6", "mina-3", "paine", "rouie-4", "veres5", "murad-6", "veres-2", "tulen-5", "lindis-2", "dextra", "nakroth-6", "sephera3", "darcy2", "capheny4", "astrid4", "yorn2", "airi4", "sinestrea2", "sinestrea1", "zephys2", "yena4", "volkath3", "tulen4", "thorne", "quillen5", "nakroth5", "laville3", "hayate4", "florentino3", "butterfly3", "amily3", "annette4", "allain", "arum2", "astrid3", "ata2", "ata", "butterfly2", "capheny3", "dirak", "elandorr2", "elandorr", "florentino2", "hayate3", "ilumia2", "ishar3", "jinna2", "keera", "lauriel4", "laville2", "laville", "liliana4", "lubu2", "mganga2", "murad5", "nakroth4", "omen2", "paine", "preyta", "qi2", "quillen4", "rouie2", "rouie", "skud2", "taara", "telannas4", "valhein3", "valhein2", "violet5", "violet4", "yena3", "yena2", "zata", "zata2", "enzo", "hayate2", "krixi2", "krizziz", "murad4", "volkath2", "volkath", "wukong2", "arduin2", "mina2", "zuka2", "wisp2", "errol2", "ishar2", "lubu&diaochan", "maloch", "ormarr", "thane", "tulen&butterfly", "ishar", "tulen3", "butterfly", "lauriel3", "liliana3", "nakroth3", "baldum", "lauriel2", "celica", "annette3", "capheny2", "gildur2", "quillen2", "sephera2", "ryoma2", "tulen2", "tulen1", "qi", "liliana2", "murad3", "zephys", "zip2", "airi3", "amily2", "astrid2", "lauriel", "nakroth2", "violet3", "airi2", "alice3", "arduin", "elsu2", "ignis", "jinna", "joker", "kilgroth", "lubu", "marja", "moren", "payna", "ryoma", "skud", "superman", "valhein", "xeniel", "zill", "yena", "zip", "sephera", "aleister", "alice2", "annette2", "arthur", "arum", "astrid", "darcy", "batman", "errol", "fennik", "flash", "florentino", "gildur", "grakk", "hayate", "kahlii", "mganga", "mina", "murad2", "omen", "richter", "rourke", "telannas2", "toro", "violet2", "wonderwomen", "roxie", "natalya", "airi", "amily", "annette", "elsu", "ilumia", "alice", "zuka", "wisp", "wiro", "veres", "quillen", "lindis", "krixi", "murad", "liliana", "enzo", "diaochan", "capheny", "veera", "tulen", "slimz", "yorn", "violet", "telannas", "raz", "wukong", "nakroth"]
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'effect3donbeach': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
            const style = ['beach-1', 'beach-2', 'beach-3', 'beach-4', 'beach-5', 'beach-6']
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  background: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'cutegirlgamer': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'footballteam': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['nau-1', 'nau-2', 'nau-3', 'nau-4', 'nau-5', 'nau-6']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'beautifulshimmering': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aleister', 'alice', 'butterfly', 'diaochan', 'kahlii', 'krixi', 'nina', 'nakroth', 'natalya', 'taara', 'thane', 'violet', 'zanis', 'zata', 'airi', 'annette', 'arthur', 'arum', 'astrid', 'elandorr', 'gildur', 'gildur', 'hayate', 'ilumia', 'ishar', 'lauriel', 'lindis', 'nurad', 'quillen', 'rouie', 'sephera', 'yena', 'yorn']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Champion')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  champion: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'pubgcutelogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['chicken', 'soldier']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'elegantrotation': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bull', 'dragon', 'eagle', 'lion', 'rhino', 'tiger']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'logogamingassasin': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12', 'style-13', 'style-14', 'style-15', 'style-16', 'style-17', 'style-18', 'style-19', 'style-20', 'style-21', 'style-22', 'style-23', 'style-24']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'introvideomaker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bull', 'dragon', 'eagle', 'lion', 'tiger', 'skull']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gaminglogo4fvs': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['girl', 'ghost', 'soldier-2', 'swat', 'woman', 'soldier', 'sniper', 'raccoon', 'rabbit', 'panda', 'chicken']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'blueneon': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['tiger', 'shark', 'dugong', 'bull', 'cheetah', 'lion']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'metalmascot': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['snakelion', 'dragon', 'ragon-2', 'eagle', 'falcon', 'fox', 'lion', 'panther', 'phoenix', 'phoenix', 'rhino', 'squirrel', 'tiger', 'unicorn', 'wolf', 'zebra']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'anonymous2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style1', 'style2', 'style3']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/anonymous', {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'lolpentakill': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['jhin', 'syndra', 'olaf', 'nocturne', 'chogath', 'kassadin', 'nidalee', 'fiora', 'fiddlesticks', 'garen', 'irelia-2', 'janna', 'lissandra', 'ezreal', 'riven', 'nalphite', 'khazix', 'nasteryi', 'irelia', 'alista', 'jayce', 'singed', 'galio', 'velkoz', 'yi', 'yasuo', 'sona', 'nidalee-2', 'teemo', 'leesin', 'jinx', 'zed', 'camille', 'brand', 'warwick', 'rengar', 'vayne', 'leona', 'ashe', 'ezreal', 'annie', 'xerath', 'ahri', 'kayle', 'nissfortune', 'caitlyn', 'vi', 'leesin', 'darius', 'fizz', 'bloodyasuo', 'ekko', 'lucian', 'rakanandayah']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatarleagueofking': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'volkath-3', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-4', 'zanis-8', 'zata', 'zata-2', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'keera-2', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-8', 'aleister-4', 'dirak-2', 'grakk-5', 'kerra', 'raz-5', 'amily-5', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-6', 'natalya-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizziz-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'krizziz', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annette-4', 'capheny-3', 'elsu-5', 'narja', 'veres-3', 'violet-10', 'zip', 'zip-2', 'diaochan-5', 'enzo-2', 'lubu-7', 'nganga-4', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena-2', 'zuka-8', 'notos', 'chaugnar', 'kahlii', 'lubo', 'nina', 'krixi', 'zanis-3', 'jinna', 'fennik', 'airi', 'ormarr', 'toro', 'butterfly', 'nakroth', 'gildur', 'omega', 'natalya', 'lumburr', 'yorn', 'dieu-thuyen', 'nganga', 'grankk-2', 'azzenka', 'alice', 'violet', 'violet2', 'butterfly2', 'krixi2', 'natalya2', 'taara', 'ormarr2', 'valhein', 'zephys', 'nakroth2', 'aleister', 'payna', 'wukong', 'naloch', 'kricnak', 'slimz2', 'cresht', 'slimz', 'dieu-thuyen2', 'thane-2', 'preyta', 'fennik-2', 'raz', 'preyta-2', 'payna-2', 'illumia', 'nortos-2', 'yorn-2', 'violet-3', 'valhein-2', 'taara-2', 'skud-1', 'skud', 'natalya-3', 'lu-bu', 'jinna-2', 'illumia-2', 'butterfly-4', 'batman', 'zuka-2', 'airi-2', 'zanis', 'nurad', 'nurad-2', 'nina-2', 'lauriel-2', 'ignis-2', 'ignis', 'grakk', 'airi-3', 'zill-2', 'zill', 'zanis-2', 'yorn-3', 'veera-3', 'veera-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'illumia-3', 'batman-2', 'arduin-2', 'arduin', 'wukong-2', 'nakroth-3', 'arthur', 'ryoma-2', 'ryoma', 'raz-2', 'nganga-2', 'astrid-2', 'astrid', 'zanis-4', 'xeniel', 'wukong-3', 'noren', 'lauriel-3', 'joker', 'xeniel-2', 'telannas-3', 'nurad-3', 'lubu-4', 'lubu-3', 'kriknak-2', 'kahlii-2', 'diaochanlubu', 'chaugnar-2', 'azzenka-2', 'alice-2', 'aleister-2', 'noren-2', 'lubu-5', 'lauriel-4', 'kilgoth', 'gildur-2', 'fennik-3', 'zephys-3', 'wonderwoman', 'superman-2', 'slimz-3', 'natalya-4', 'krixi-5', 'krixi-4', 'zephys-2', 'zanis-5', 'yorn-4', 'xeniel-3', 'wonderwoman-2', 'violet-4', 'naloch-3', 'airi-4', 'telannas-4', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'natalya-5', 'fennik-4', 'valhein-3', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'tulen', 'toro-2', 'nina-3', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'aleister-3', 'tulen-2', 'toro-3', 'taara-3', 'omen-2', 'omen', 'zill-3', 'arthurtelannas', 'zuka-4', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'nax-2', 'krixnak-3', 'joker-3', 'chaugnar-3', 'wisp', 'ryoma-3', 'batman-3', 'airi-6', 'tulen-3', 'cresht-3', 'cresht-2', 'astris-3', 'flash', 'arum-2', 'arum', 'butterfly-6', 'alice-3', 'xeniel-4', 'valhein-4', 'tulen-4', 'rourke-2', 'rourke', 'nurad-4', 'nax-3', 'wisp-2', 'narja-2', 'narja', 'zuka-5', 'jinna-3', 'butterfly-7', 'arthur-5', 'valhein-5', 'superman-3', 'liliana-3', 'kilgroth', 'wirosabaleng', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'telannas-6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-5', 'veera-5', 'liliana-4', 'flash-2', 'arthur-2', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-7', 'yorn-6', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-5', 'violet-8', 'valhein-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatarff': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'ford', 'hayato', 'joseph', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie', 'wukong']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'overwatchwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ana', 'ashe', 'ashe-2', 'baptiste', 'baptiste-2', 'brigitte', 'dva', 'dva-2', 'genji', 'hanzo', 'junkrat', 'lucio', 'nccree', 'nei', 'nercy', 'nercy-2', 'nercy-3', 'noira', 'pharah', 'reaper', 'roadhog', 'soldier-76', 'sombra', 'sombra-2', 'symmetra', 'tracer', 'tracer-2', 'widowmaker', 'widowmaker-2', 'zarya']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'rovwallpaperhd': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-5', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annette-4', 'capheny-3', 'elsu-5', 'narja-3', 'veres-3', 'violet-10', 'zip-2', 'zip-3', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-4', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena-2', 'zuka-8', 'zephys-3', 'zephys-2', 'zephys', 'zanis-5', 'zanis-4', 'zanis-3', 'zanis-2', 'zanis', 'violet-5', 'violet-4', 'violet-3', 'violet-2', 'violet', 'veera-4', 'veera-3', 'veera-2', 'valhein-3', 'valhein-2', 'valhein', 'thane-2', 'thane', 'nina-3', 'nina-2', 'nina', 'nganga-2', 'nganga', 'lubu-5', 'lubu-4', 'lubu-3', 'lubu-2', 'lubu', 'krixi-5', 'krixi-4', 'krixi-3', 'krixi-2', 'krixi', 'kahlii-3', 'kahlii-2', 'kahlii', 'diaochan-3', 'diaochan-2', 'diaochan', 'chaugnar', 'butterfly-5', 'butterfly-4', 'butterfly-2', 'butterfly', 'yorn-4', 'yorn-3', 'yorn-2', 'yorn', 'wukong-3', 'wukong-2', 'wukong', 'toro-2', 'toro', 'taara-2', 'taara', 'slimz-3', 'slimz-2', 'slimz', 'payna-2', 'payna', 'ormarr-4', 'ormarr-3', 'ormarr-2', 'kaisa-2', 'ormarr', 'natalya-5', 'natalya-4', 'natalya-3', 'natalya-2', 'natalya', 'nakroth-4', 'nakroth-3', 'nakroth-2', 'nakroth', 'naloch-3', 'naloch-2', 'naloch', 'lumburr', 'kriknak-2', 'kriknak', 'jinna-2', 'jinna', 'grakk-3', 'grakk-2', 'grakk', 'gildur-2', 'gildur', 'fennik-4', 'fennik-3', 'fennik-2', 'fennik', 'cresht', 'azzenka-2', 'azzenka', 'arthur-3', 'arthur-2', 'arthur', 'alice-2', 'alice', 'aleister-2', 'aleister', 'zuka-2', 'zuka', 'zill-2', 'zill', 'xeniel-2', 'xeniel', 'wonderwoman-2', 'wonderwoman', 'telannas-4', 'telannas-3', 'telannas-2', 'telannas', 'superman-2', 'superman', 'skud-2', 'skud', 'ryoma-2', 'ryoma', 'preyta-3', 'preyta-2', 'preyta', 'nurad-3', 'nurad-2', 'nurad', 'noren-2', 'noren', 'lauriel-4', 'lauriel-3', 'lauriel-2', 'lauriel', 'kilgroth-2', 'kilgroth', 'joker', 'illumia-3', 'illumia-2', 'illumia', 'ignis-2', 'ignis', 'batman-2', 'batman', 'astrid-2', 'astrid', 'arduin-2', 'arduin', 'airi-5', 'airi-4', 'airi-3', 'airi-2', 'airi', 'teemee-2', 'teemee', 'zuka-3', 'tulen', 'raz-2', 'raz', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'zill-3', 'raz-3', 'liliana-2', 'tulen-3', 'telannas-5', 'taara-3', 'ryoma-3', 'nax-2', 'kriknak-3', 'flash', 'cresht-3', 'cresht-2', 'arthur-4', 'aleister-3', 'airi-6', 'arum-2', 'arum', 'wisp-2', 'wisp', 'rourke-2', 'rourke', 'narja-2', 'narja', 'butterfly-6', 'batman-3', 'astris-3', 'jinna-3', 'butterfly-7', 'arthur-5', 'valhein-4', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-3', 'veera-5', 'liliana4', 'flash-2', 'arthur-6', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'rovwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera-2', 'lorion', 'grakk-6', 'keera-2', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'dextra', 'dextra-2', 'lindis-6', 'nurad-10', 'nakroth-9', 'quillen-7', 'sephera-5', 'yorn-8', 'airi-10', 'amily-6', 'astrid-6', 'ata-3', 'capheny-5', 'darcy-4', 'diaochan-8', 'hayate-6', 'lauriel-10', 'laville-3', 'rourke-4', 'ryoma-7', 'sinestrea', 'sinestrea-2', 'telannas-9', 'thorne', 'thorne-2', 'veres-4', 'yena-6', 'zephys-7', 'allain', 'allain-2', 'butterfly-12', 'kahlii-6', 'nakroth-8', 'preyta-4', 'taara-7', 'valhein-8', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-6', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'kerra-2', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'keera', 'raz-4', 'ishar-2', 'nax-4', 'valhein-7', 'zill-5', 'arthur-7', 'rum-5', 'lubu-8', 'naloch-7', 'sephera-4', 'diaochan-6', 'ignis-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'elsu-5', 'narja-3', 'annette-4', 'capheny-3', 'veres-3', 'zip-2', 'zip', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'errol', 'yena-2', 'zuka-8', 'valhein', 'violet', 'airi', 'skud', 'zanis', 'zephis', 'butterfly', 'wukong', 'taara', 'nakroth', 'prayta', 'yorn', 'natalya', 'thane', 'toro', 'ormarr', 'omega', 'nina', 'nganga', 'lubu2', 'lubu', 'kahlii-2', 'kahlii', 'fennik-2', 'fennik', 'diaochan', 'cresht', 'azzenka', 'aleister', 'zuka2', 'zuka', 'payna-2', 'payna', 'nakroth-2', 'nortos-2', 'nortos', 'kriknak', 'jinna-2', 'jinna', 'batman', 'airi-2', 'violet-3', 'violet-2', 'skud-2', 'raz-2', 'raz', 'ignis-2', 'ignis', 'gildur', 'butterfly-4', 'butterfly-3', 'zanis-2', 'nurad', 'yorn-2', 'slimz', 'ormarr-2', 'nurad-2', 'nina-2', 'lauriel-2', 'grakk-2', 'grakk', 'diaochan-2', 'airi-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'taara-2', 'joker', 'ilumia-2', 'batman-2', 'arduin-2', 'arduin', 'wukong-2', 'nakroth-3', 'ilumia-3', 'arthur', 'ryoma-2', 'ryoma', 'astrid-2', 'astrid', 'zephis-2', 'natalya-3', 'natalya-2', 'ubu-3', 'chaugnar', 'azzenka-2', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'aleister-2', 'nurad-3', 'noren-2', 'lubu-5', 'kilgroth', 'gildur-2', 'fennik-3', 'lauriel-4', 'zephys-3', 'xeniel-2', 'wonderwomen', 'superman-2', 'slimz-2', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'xeniel', 'wonderwoman-2', 'violet-4', 'preyta2', 'diaochan-3', 'airi-4', 'valhein-4', 'preyta-3', 'nina-3', 'alice-2', 'airi-5', 'telannas-3', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'natalya-5', 'fennik-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'valhein-2', 'tulen', 'toro-2', 'naloch-4', 'naloch-3', 'lumburr', 'lindis-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zill-3', 'telannas-', 'athur-4', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'tulen-3', 'nax-2', 'flash', 'cresht-3', 'cresht-2', 'chaugnar-2', 'aleister-3', 'ryoma-3', 'kriknak-3', 'airi-6', 'wisp-2', 'wisp', 'batman-3', 'arum-2', 'arum', 'butterfly-6', 'rourke-2', 'rourke', 'narja-2', 'narja', 'taara-3', 'jinna-3', 'butterfly-7', 'arthur-4', 'arthur-3', 'arthur-2', 'valhein-3', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'astrid-3', 'amily-2', 'liliana-4', 'xeniel-5', 'veera-5', 'flash-2', 'athur-5', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'utterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'beautifulgalaxylol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ashe-2', 'darius-2', 'hecarim-2', 'akali-2', 'jhin-2', 'jinx-2', 'kaisa-2', 'khazix-2', 'nordekaiser-2', 'pantheon-2', 'qiyana', 'rammus-2', 'renekton-2', 'tahmkench-2', 'teemo-2', 'udyr-2', 'yasuo-2', 'yuumi', 'drmundo', 'zyra', 'zoe', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twitch', 'twistedfate', 'tryndamere', 'trundle', 'tristana', 'thresh', 'teemo', 'taric', 'talyah', 'talon', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'ornn', 'orianna', 'olaf', 'nunu', 'nocturne', 'nidalee', 'nautilus', 'nasus', 'nami', 'norgana', 'norderkaiser', 'nissfortune', 'nasteryi', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'kaisa', 'jinx', 'jhin', 'jayce', 'jax', 'jarvaniv', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'sylas', 'pyke', 'nunuwillump', 'neeko', 'norgana-2', 'kayle-2', 'akali-2', 'aatrox-2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'crossfirecover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['spop', 'swat', 'switcher', 'redpower', 'whitenurse', 'blthefates', 'jns', 'natahari', 'dx', 'nursezombie', 'omohswat', 'sfg', 'fox', 'bllaswat', 'bljtf', 'grjtf', 'blarch', 'hero-4', 'gsg9', 'hero-3', 'opes', 'abf', 'shadows', 'devilhunter']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'lolwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aatrox-2', 'arhi-2', 'akali-3', 'akali-2', 'braum', 'camille', 'evelynn-5', 'ezreal-2', 'fizz', 'graves-2', 'irelia-3', 'irelia-2', 'jayce-2', 'jhin-2', 'jinx-2', 'kaisa', 'katarina-2', 'lux-2', 'neeko', 'orianna-2', 'pantheon', 'pyke', 'qiyana', 'riven-2', 'sylas', 'teemo-2', 'viktor', 'vladimir', 'warwick-2', 'yasuo-3', 'yasuo-2', 'zoe', 'nasteryi', 'lux', 'lulu', 'leesin', 'jinx', 'jhin', 'ezreal', 'janna', 'ashe', 'arhi', 'poppy', 'nissfortune', 'soraka', 'syndra', 'zyra', 'yasuo', 'vi', 'vayne', 'taliyah', 'sona', 'sivir', 'shyvana', 'riven', 'quinn', 'nidalee', 'norgana', 'leblanc', 'kennen', 'karma', 'irelia', 'fiora', 'elise', 'diana', 'caitlyn', 'zed', 'xayah', 'tristana', 'talon', 'shen', 'rakan', 'orianna', 'nami', 'kayn', 'kayle', 'katarina', 'kalista', 'ekko', 'azir', 'udyr', 'thresh', 'tf', 'teemo', 'ryze', 'nocturne', 'lucian', 'khazik', 'graves', 'darius', 'annie', 'akali', 'zilean', 'ziggs', 'yorick', 'warwick', 'nasteryi-2', 'janna-2', 'hecarim', 'gangplank', 'fiora-2', 'draven', 'brand', 'aatrox', 'velkoz', 'shaco', 'rengar', 'reksai', 'ornn', 'leona', 'kindred', 'jayce', 'jax', 'jarvan-iv', 'garen', 'xinzhao', 'nasus', 'kled', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn', 'cassiopeia', 'zac', 'xerath', 'wukong', 'velkoz-2', 'veigar', 'varus', 'urgot', 'twich', 'kassadin', 'elise-2', 'annie-2', 'alistar']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Wallpaper')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  wallpaper: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverdota2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar ??🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['void', 'riki', 'lycan', 'ursa', 'zeus', 'dragonkinght', 'warlord', 'phantomassassin', 'bountyhunter', 'antimage', 'spectre', 'luna', 'vengerfulspirit', 'undying', 'tusk', 'tinker', 'shadowfiend', 'sandking', 'nightstalker', 'nagasiren', 'nirana', 'neepo', 'lina', 'juggernaut', 'huskar', 'emberspirit', 'emberspirit', 'emberspirit', 'earthshaker', 'drowranger', 'clockwerk', 'bristleback', 'bloodseeker', 'axe']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverleagueofking': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['thane', 'orrmarr', 'omega', 'nakroth', 'nina', 'ngangar', 'gildur', 'dieuthuyen', 'chaugnar', 'butterfly', 'azzenka', 'alice', 'lubo', 'kriknak-2', 'natalya-2', 'trieu-van', 'taara-2', 'naloch', 'kriknak', 'natalya', 'taara', 'ngo-khong', 'airi', 'butterfly-2', 'butterfly-3', 'kahlii', 'krixi', 'toro', 'grakk', 'ilumia', 'zephys', 'veera-2', 'violet', 'preyta-2', 'violet-2', 'valhein', 'yorn', 'veera', 'notos', 'valhein-2', 'preyta', 'illumia-2', 'fennik-2', 'lumburr', 'fennik', 'nakroth-2', 'krixi-2', 'gildur2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatar3q360': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['tieu_kieu', 'luu_bi', 'truong_oanh_oanh', 'truong_phi', 'tu_ma_y', 'van_uong', 'hoang_nguyet_anh', 'hoang_nguyet_anh2', 'hoang_trung', 'hua_chu', 'truong_giac', 'dieu_thuyen']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverofwarface': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['warface-4', 'warface-3', 'warface-2', 'warface', 'sniper-3', 'sniper-2', 'sniper', 'rifleman', 'nedic-2', 'nedic', 'exosuit', 'engineer']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'newlolavatar': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['udyr', 'twitch', 'twistedfate', 'trundle', 'teemo', 'swain', 'shyvana', 'shen', 'sejuani', 'renekton', 'reksai', 'rammus', 'zyra', 'zilean', 'ziggs', 'zac', 'xerath', 'warwick', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'volibear', 'tristana', 'taliyah', 'shaco', 'leblanc', 'jinx', 'graves', 'fizz', 'ekko', 'corki', 'cassiopeia', 'caitlyn', 'blitzcrank', 'bard', 'alistar', 'akali', 'aatrox', 'janna', 'wukong', 'thresh', 'taric', 'talon', 'ryze', 'nordekaiser', 'karma', 'kalista', 'irelia', 'gnar', 'garen', 'galio', 'soraka', 'sona', 'sivir', 'riven', 'quinn', 'nocturne', 'nami', 'lux', 'kindred', 'khazix', 'katarina', 'jarvan', 'fiora', 'diana', 'aurelionsol', 'ashe', 'ahri', 'varus', 'syndra', 'nidalee', 'kennen', 'jhin', 'zed', 'yasuo', 'rengar', 'lucian', 'ezreal', 'azir', 'annie', 'leesin', 'nasteryi', 'poppy', 'pantheon', 'orianna', 'nasus', 'norgana', 'nissfortune', 'naokai', 'nalzaha', 'lulu', 'lissandra', 'leona', 'kled', 'jayce', 'jax', 'illaoi', 'xayah', 'rakan', 'gangplank', 'naster_yi2', 'riven2', 'elise', 'darius', 'xayah_rakan', 'katarina2', 'nauthilus', 'hecarim', 'thresh2', 'ashe2', 'xinzhao', 'tryndamere', 'syndra-2', 'sivir-2', 'lissandra2', 'karma-2', 'draven']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'csgocover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ump45', 'tec9', 'n4a1', 'xm1014', 'famas', 'np9', 'pp-bizon', 'p2000', 'negev', 'usps', 'dualberettas', 'np5', 'karambit', 'awpdragonlore', 'np7', 'galilar', 'ak-47', 'glock', 'sg-553', 'ak47', 'r8revolver', 'aug', 'butterflyknife', 'deserteagle', 'gsg9', 'p90asiimov', 'awphawking', 'n4a4', 'sas', 'awpasiimov', 'ssg08bitw', 'sg553ds', 'r8fade', 'p90ed', 'n4a1sdecimator', 'n4a1howl', 'karambitds', 'flipknifemf', 'awmmedusa', 'augaa', 'ak47vulcan', 'ak47fs']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  background: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverloknew': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-5', 'teemee-3', 'telannas-6', 'volkath-3', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-4', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'lsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-4', 'jinna-5', 'kerra-2', 'lauriel-7', 'nina-5', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-8', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'amily-5', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-7', 'volkath', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annettte-4', 'capheny-3', 'elsu-5', 'narja-3', 'vilolet-10', 'violet-10', 'zip-2', 'zip-2a', 'airi-9', 'diaochan-5', 'enzo-2', 'lubu-7', 'nganga-4', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena', 'yena-2', 'zuka-8', 'yorn', 'violet', 'zanis', 'thane', 'slimz', 'skud', 'preyta', 'payna', 'nakroth', 'nina', 'naloch', 'illumia', 'krixi', 'diaochan', 'butterfly', 'veera', 'valhein', 'toro', 'taara', 'raz', 'ormarr', 'nganga', 'lubu', 'kriknak', 'kahlil', 'grakk', 'gildur', 'alice', 'omega', 'wukong', 'natalya', 'nortos', 'cresht', 'airi', 'aleister', 'lumburr', 'zephis', 'violet-2', 'jinna', 'chaugnar', 'azzenka', 'valhein-2', 'zanis-2', 'skud-2', 'payna-2', 'natalya-3', 'natalya-2', 'nortos-2', 'krixi-2', 'jinna-2', 'illumia-2', 'butterfly-3', 'butterfly-2', 'yorn-2', 'taara-2', 'nakroth-2', 'lubu2', 'lauriel', 'kahlii-2', 'zuka-2', 'zuka', 'batman', 'airi-2', 'airi-3', 'butterfly-4', 'diaochan-2', 'grakk-2', 'ignis', 'ignis-2', 'lauriel2', 'nina-2', 'nurad', 'nurad-2', 'ormarr-2', 'raz-2', 'slimz2', 'violet-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'joker', 'illumia-3', 'batman-2', 'arduin-2', 'arduin', 'zephis-2', 'wukong-2', 'ryoma-2', 'ryoma', 'nakroth-3', 'nganga-2', 'azzenka-2', 'astrid-2', 'astrid', 'arthur', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'lubu-3', 'chaugnar-2', 'aleister-2', 'xeniel', 'telannas-3', 'preyta-2', 'nurad-3', 'kriknak-2', 'fennik-2', 'diaochanlubu', 'alice-2', 'noren-2', 'lubu-5', 'lauriel-4', 'kilgroth', 'gildur-2', 'fennik-3', 'zephys-3', 'xeniel-2', 'xeniel-2', 'wonderwoman', 'supeman-2', 'slimz-3', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'wonderwoman-2', 'violet-4', 'prayta-3', 'naloch-3', 'airi-4', 'telannas-4', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'airi-5', 'natalya-5', 'fennik-4', 'valhein-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'tulen', 'toro-2', 'nina-3', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'aleister-3', 'tulen-2', 'toro-3', 'taara-3', 'omen-2', 'omen', 'zill-3', 'telannas-5', 'athur-2', 'zuka-4', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'nax-2', 'kriknak-3', 'joker-3', 'chaugnar-3', 'wisp', 'ryoma-3', 'batman-3', 'airi-6', 'tulen-3', 'flash', 'cresht-3', 'cresht-2', 'astris-3', 'arum-2', 'arum', 'butterfly-6', 'lice-3', 'xeniel-3', 'valhein-4', 'tulen-4', 'rourke-2', 'rourke', 'nurad-4', 'nax-3', 'wisp-2', 'narja-2', 'narja', 'zuka-5', 'jinna-3', 'butterfly-7', 'arthur-2', 'violet-6', 'valhein-5', 'superman-3', 'liliana-3', 'kilgroth-3', 'diaochan-3', 'wirosabaleng-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'telannas-6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-4', 'veera-5', 'liliana-4', 'flash-2', 'arthur-3', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-6', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'veera-6', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverfblol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['yasuo', 'shen', 'riven', 'pantheon', 'orianna', 'nocturne', 'nami', 'norgana', 'naster-yi', 'lux', 'lucian', 'katarina', 'kalista', 'jinx', 'jhin', 'irelia', 'hecarim', 'graves', 'garen', 'fizz', 'fiora', 'ezreal', 'ekko', 'diana', 'darius', 'cassiopeia', 'caitlyn', 'braum', 'azir', 'ashe', 'warwick', 'thresh', 'leblanc', 'khazix', 'kayn', 'draven', 'zyra', 'zed', 'xayah', 'taric', 'talon', 'sona', 'sivir', 'rengar', 'rakan', 'leesin', 'gnar', 'elise']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Letters')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  letters: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'overwatchcover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['zwinston', 'zjunkrat', 'zwidowmaker', 'ztracer', 'ztorbjorn', 'zsymmetra', 'zsombra', 'zsoldier76', 'zroadhog', 'zreinhardt', 'zreaper', 'zpharah', 'zorisa', 'zmercy', 'zmei', 'zmccree', 'zlucio', 'zhanzo', 'zgenji', 'zenyatta', 'zdva', 'zbastion', 'zarya', 'zana', 'yzenyatta', 'yzarya', 'ywinston', 'ywidowmaker', 'ytracer', 'ytorbjorn', 'ysymmetra', 'ysombra', 'ysoldier76', 'yroadhog', 'yreinhardt', 'yreaper', 'ypharah', 'yorisa', 'ymercy', 'ymei', 'ymccree', 'ylucio', 'yjunkrat', 'yhanzo', 'ygenji', 'ydva', 'ybastion', 'yana', 'xzenyatta', 'xzarya', 'xwinston', 'xwidowmaker', 'xtracer', 'xtorbjorn', 'xsymmetra', 'xsombra', 'xsoldier76', 'xroadhog', 'xreinhardt', 'xreaper', 'xpharah', 'xorisa', 'xmercy', 'xmei', 'xmccree', 'xlucio', 'xjunkrat', 'xhanzo', 'xgenji', 'xdva', 'xbastion', 'xana', 'wzenyatta', 'wzarya', 'wtracer', 'wtorbjorn', 'wsymmetra', 'wsombra', 'wsoldier76', 'wroadhog', 'wreinhardt', 'wreaper', 'wpharah', 'worisa', 'wmercy', 'wmei', 'wmccree', 'wlucio', 'wjunkrat', 'winston', 'widowmaker', 'whanzo', 'wgenji', 'wdva', 'wbastion', 'wana', 'vzenyatta', 'vzarya', 'vwinston', 'vwidowmaker', 'vtracer', 'vtorbjorn', 'vsymmetra', 'vsombra', 'vsoldier76', 'vroadhog', 'vreinhardt', 'vreaper', 'vpharah', 'vorisa', 'vmercy', 'vmei', 'vmccree', 'vlucio', 'vjunkrat', 'vhanzo', 'vgenji', 'vdva', 'vbastion', 'vana', 'uzenyatta', 'uzarya', 'uwinston', 'uwidowmaker', 'utracer', 'utorbjorn', 'usymmetra', 'usombra', 'usoldier76', 'uroadhog', 'ureinhardt', 'ureaper', 'upharah', 'uorisa', 'umercy', 'umei', 'umccree', 'ulucio', 'ujunkrat', 'uhanzo', 'ugenji', 'udva', 'ubastion', 'uana', 'tzenyatta', 'tzarya', 'twinston', 'twidowmaker', 'tsymmetra', 'tsombra', 'tsoldier76', 'troadhog', 'treinhardt', 'treaper', 'tracer', 'tpharah', 'torisa', 'torbjorn', 'tmercy', 'tmei', 'tmccree', 'tlucio', 'tjunkrat', 'thanzo', 'tgenji', 'tdva', 'tbastion', 'tana', 'szenyatta', 'szarya', 'symmetra', 'swinston', 'swidowmaker', 'stracer', 'storbjorn', 'sroadhog', 'sreinhardt', 'sreaper', 'spharah', 'sorisa', 'sombra', 'soldier76', 'smercy', 'smei', 'smccree', 'slucio', 'sjunkrat', 'shanzo', 'sgenji', 'sdva', 'sbastion', 'sana', 'rzenyatta', 'rzarya', 'rwinston', 'rwidowmaker', 'rtracer', 'rtorbjorn', 'rsymmetra', 'rsombra', 'rsoldier76', 'rrmei', 'rpharah', 'rorisa', 'roadhog', 'rmercy', 'rmccree', 'rlucio', 'rjunkrat', 'rhanzo', 'rgenji', 'reinhardt', 'reaper', 'rdva', 'rbastion', 'rana', 'qzenyatta', 'qzarya', 'qwinston', 'qwidowmaker', 'qtracer', 'qtorbjorn', 'qsymmetra', 'qsombra', 'qsoldier76', 'qroadhog', 'qreinhardt', 'qreaper', 'qpharah', 'qorisa', 'qmercy', 'qmei', 'qmccree', 'qlucio', 'qjunkrat', 'qhanzo', 'qgenji', 'qdva', 'qbastion', 'qana', 'pzenyatta', 'pzarya', 'pwinston', 'pwidowmaker', 'ptracer', 'ptorbjorn', 'psymmetra', 'psombra', 'psoldier76', 'proadhog', 'preinhardt', 'preaper', 'porisa', 'pmercy', 'pmei', 'pmccree', 'plucio', 'pjunkrat', 'pharah', 'phanzo', 'pgenji', 'pdva', 'pbastion', 'pana', 'ozenyatta', 'ozarya', 'owinston', 'owidowmaker', 'otracer', 'otorbjorn', 'osymmetra', 'osombra', 'osoldier76', 'oroadhog', 'orisa', 'oreinhardt', 'oreaper', 'opharah', 'omercy', 'omei', 'omccree', 'olucio', 'ojunkrat', 'ohanzo', 'ogenji', 'odva', 'obastion', 'oana', 'nzenyatta', 'nzarya', 'nwinston', 'nwidowmaker', 'ntracer', 'ntorbjorn', 'nsymmetra', 'nsombra', 'nsoldier76', 'nroadhog', 'nreinhardt', 'nreaper', 'npharah', 'norisa', 'nmercy', 'nmei', 'nmccree', 'nlucio', 'njunkrat', 'nhanzo', 'ngenji', 'ndva', 'nbastion', 'nana', 'mzenyatta', 'mzarya', 'mwinston', 'mwidowmaker', 'mtracer', 'mtorbjorn', 'msymmetra', 'msombra', 'msoldier76', 'mroadhog', 'mreinhardt', 'mreaper', 'mpharah', 'morisa', 'mlucio', 'mjunkrat', 'mhanzo', 'mgenji', 'mercy', 'mei', 'mdva', 'mccree', 'mbastion', 'mana', 'lzenyatta', 'lzarya', 'lwinston', 'lwidowmaker', 'lucio', 'ltracer', 'ltorbjorn', 'lsymmetra', 'lsombra', 'lsoldier76', 'lroadhog', 'lreinhardt', 'lreaper', 'lpharah', 'lorisa', 'lmercy', 'lmei', 'lmccree', 'ljunkrat', 'lhanzo', 'lgenji', 'ldva', 'lbastion', 'lana', 'kzenyatta', 'kzarya', 'kwinston', 'kwidowmaker', 'ktracer', 'ktorbjorn', 'ksymmetra', 'ksombra', 'ksoldier76', 'kroadhog', 'kreinhardt', 'kreaper', 'kpharah', 'korisa', 'kmercy', 'kmei', 'kmccree', 'klucio', 'kjunkrat', 'khanzo', 'kgenji', 'kdva', 'kbastion', 'kana', 'jzenyatta', 'jzarya', 'jwinston', 'jwidowmaker', 'junkrat', 'jtracer', 'jtorbjorn', 'jsymmetra', 'jsombra', 'jsoldier76', 'jroadhog', 'jreinhardt', 'jreaper', 'jpharah', 'jorisa', 'jmercy', 'jmei', 'jmccree', 'jlucio', 'jhanzo', 'jgenji', 'jdva', 'jbastion', 'jana', 'izenyatta', 'izarya', 'iwinston', 'iwidowmaker', 'itracer', 'itorbjorn', 'isymmetra', 'isombra', 'isoldier76', 'iroadhog', 'ireinhardt', 'ireaper', 'ipharah', 'iorisa', 'imercy', 'imei', 'imccree', 'ilucio', 'ijunkrat', 'ihanzo', 'igenji', 'idva', 'ibastion', 'iana', 'hzenyatta', 'hzarya', 'hwinston', 'hwidowmaker', 'htracer', 'htorbjorn', 'hsymmetra', 'hsombra', 'hsoldier76', 'hroadhog', 'hreinhardt', 'hreaper', 'hpharah', 'horisa', 'hmercy', 'hmei', 'hmccree', 'hlucio', 'hjunkrat', 'hgenji', 'hdva', 'hbastion', 'hanzo', 'hana', 'gzenyatta', 'gzarya', 'gwinston', 'gwidowmaker', 'gtracer', 'gtorbjorn', 'gsymmetra', 'gsombra', 'gsoldier76', 'groadhog', 'greinhardt', 'greaper', 'gpharah', 'gorisa', 'gmercy', 'gmei', 'gmccree', 'glucio', 'gjunkrat', 'genji', 'gdva', 'gbastion', 'ganafzenyatta', 'fzarya', 'fwinston', 'fwidowmaker', 'ftracer', 'ftorbjorn', 'fsymmetra', 'fsombra', 'fsoldier76', 'froadhog', 'freinhardt', 'freaper', 'fpharah', 'forisa', 'fmercy', 'fmei', 'fmccree', 'flucio', 'fjunkrat', 'fhanzo', 'fgenji', 'fdva', 'fbastion', 'fana', 'ezenyatta', 'ezarya', 'ewinston', 'ewidowmaker', 'etracer', 'etorbjorn', 'esymmetra', 'esombra', 'esoldier76', 'eroadhog', 'ereinhardt', 'ereaper', 'epharah', 'eorisa', 'emercy', 'emei', 'emccree', 'elucio', 'ejunkrat', 'ehanzo', 'egenji', 'edva', 'ebastion', 'eana', 'dzenyatta', 'dzarya', 'dwinston', 'dwidowmaker', 'dva', 'dtracer', 'dtorbjorn', 'dsymmetra', 'dsombra', 'dsoldier76', 'droadhog', 'dreinhardt', 'dreaper', 'dpharah', 'dorisa', 'dmercy', 'dmei', 'dmccree', 'dlucio', 'djunkrat', 'dhanzo', 'dgenji', 'dbastion', 'dana', 'czenyatta', 'czarya', 'cwinston', 'cwidowmaker', 'ctracer', 'ctorbjorn', 'csymmetra', 'csombra', 'csoldier76', 'croadhog', 'creinhardt', 'creaper', 'cpharah', 'corisa', 'cmercy', 'cmei', 'cmccree', 'clucio', 'cjunkrat', 'chanzo', 'cgenji', 'cdva', 'cbastion', 'cana', 'bzenyatta', 'bzarya', 'bwinston', 'bwidowmaker', 'btracer', 'btorbjorn', 'bsymmetra', 'bsombra', 'bsoldier76', 'broadhog', 'breinhardt', 'breaper', 'bpharah', 'borisa', 'bmercy', 'bmei', 'bmccree', 'blucio', 'bjunkrat', 'bhanzo', 'bgenji', 'bdva', 'bastion', 'bana', 'azenyatta', 'azarya', 'awinston', 'awidowmaker', 'atracer', 'atorbjorn', 'asymmetra', 'asombra', 'asoldier76', 'aroadhog', 'areinhardt', 'areaper', 'apharah', 'aorisa', 'ana', 'amercy', 'amei', 'amccree', 'alucio', 'ajunkrat', 'ahanzo', 'agenji', 'adva', 'abastion', 'zdoomfist', 'ydoomfist', 'xdoomfist', 'wdoomfist', 'vdoomfist', 'udoomfist', 'tdoomfist', 'sdoomfist', 'rdoomfist', 'qdoomfist', 'pdoomfist', 'odoomfist', 'ndoomfist', 'mdoomfist', 'ldoomfist', 'kdoomfist', 'jdoomfist', 'idoomfist', 'hdoomfist', 'gdoomfist', 'fdoomfist', 'edoomfist', 'doomfist', 'cdoomfist', 'bdoomfist', 'adoomfist']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'crossfirestyle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['spop', 'switcher', 'switcher-2', 'switcher-3', 'thefates', 'thefates-2', 'thefates-3', 'swat', 'fox', 'star', 'omoh', 'sabel', 'sas', 'sia', 'navy-seals', 'jtf', 'jns', 'laswat', 'sraf', 'shadow', 'nemesis', 'nocha', 'ixions', 'gsg-9', 'ghosty', 'hermes', 'foxu', 'dh', 'angelapt', 'ac']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatarlolbyname': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['katarina-0', 'zyra-4', 'zyra-3', 'zyra-2', 'zyra-1', 'zyra-0', 'zilean-5', 'zilean-4', 'zilean-3', 'zilean-2', 'zilean-1', 'zilean-0', 'ziggs-5', 'ziggs-4', 'ziggs-3', 'ziggs-2', 'ziggs-1', 'ziggs-0', 'zed-3', 'zed-2', 'zed-10', 'zed-1', 'zed-0', 'zac-2', 'zac-1', 'zac-0', 'yorick-2', 'yorick-1', 'yorick-0', 'yasuo-4', 'yasuo-3', 'yasuo-2', 'yasuo-1', 'yasuo-0', 'xinzhao-6', 'xinzhao-13', 'xinzhao-5', 'xinzhao-4', 'xinzhao-3', 'xinzhao-2', 'xinzhao-1', 'xinzhao-0', 'xerath-4', 'xerath-3', 'xerath-2', 'xerath-1', 'xerath-0', 'xayah-1', 'xayah-0', 'warwick-8', 'warwick-7', 'warwick-6', 'warwick-5', 'warwick-4', 'warwick-3', 'warwick-2', 'warwick-1', 'warwick-0', 'volibear-5', 'volibear-4', 'volibear-3', 'volibear-2', 'volibear-1', 'volibear-0', 'vladimir-7', 'vladimir-6', 'vladimir-5', 'vladimir-4', 'vladimir-3', 'vladimir-2', 'vladimir-1', 'vladimir-0', 'viktor-2', 'viktor-1', 'viktor-0', 'vi-5', 'vi-4', 'vi-3', 'vi-2', 'vi-1', 'vi-0', 'velkoz-3', 'velkoz-2', 'velkoz-1', 'velkoz-0', 'veigar-8', 'veigar-7', 'veigar-6', 'veigar-5', 'veigar-4', 'veigar-3', 'veigar-2', 'veigar-1', 'veigar-0', 'vayne-6', 'vayne-5', 'vayne-4', 'vayne-3', 'vayne-2', 'vayne-1', 'vayne-0', 'vayne-10', 'varus-6', 'varus-5', 'varus-4', 'varus-3', 'varus-2', 'varus-1', 'varus-0', 'urgot-3', 'urgot-2', 'urgot-1', 'urgot-0', 'udyr-4', 'udyr-3', 'udyr-2', 'udyr-1', 'udyr-0', 'twitch-7', 'twitch-6', 'twitch-5', 'twitch-4', 'twitch-3', 'twitch-2', 'twitch-1', 'twitch-0', 'twistedfate-9', 'twistedfate-10', 'twistedfate-8', 'twistedfate-7', 'twistedfate-6', 'twistedfate-5', 'twistedfate-4', 'twistedfate-3', 'twistedfate-2', 'twistedfate-1', 'twistedfate-0', 'tryndamere-9', 'tryndamere-8', 'tryndamere-7', 'tryndamere-6', 'tryndamere-5', 'tryndamere-4', 'tryndamere-3', 'tryndamere-2', 'tryndamere-1', 'tryndamere-0', 'trundle-5', 'trundle-4', 'trundle-3', 'trundle-2', 'trundle-1', 'trundle-0', 'tristana-6', 'tristana-5', 'tristana-4', 'tristana-3', 'tristana-2', 'tristana-1', 'tristana-0', 'tristana-10', 'tristana-11', 'thresh-5', 'thresh-4', 'thresh-3', 'thresh-2', 'thresh-1', 'thresh-0', 'teemo-8', 'teemo-7', 'teemo-6', 'teemo-5', 'teemo-4', 'teemo-3', 'teemo-2', 'teemo-1', 'teemo-0', 'teemo-14', 'taric-4', 'taric-3', 'taric-2', 'taric-1', 'taric-0', 'talon-5', 'talon-4', 'talon-3', 'talon-2', 'talon-1', 'talon-0', 'taliyah-1', 'taliyah-0', 'tahmkench-2', 'tahmkench-1', 'tahmkench-0', 'syndra-4', 'syndra-3', 'syndra-2', 'syndra-1', 'syndra-0', 'swain-3', 'swain-2', 'swain-1', 'swain-0', 'soraka-6', 'soraka-5', 'soraka-4', 'soraka-3', 'soraka-2', 'soraka-1', 'soraka-0', 'sona-6', 'sona-5', 'sona-4', 'sona-3', 'sona-2', 'sona-1', 'sona-0', 'skarner-4', 'skarner-3', 'skarner-2', 'skarner-1', 'skarner-0', 'sivir-7', 'sivir-6', 'sivir-5', 'sivir-4', 'sivir-3', 'sivir-2', 'sivir-1', 'sivir-0', 'sion-5', 'sion-4', 'sion-3', 'sion-2', 'sion-1', 'sion-0', 'singed-8', 'singed-7', 'singed-6', 'singed-5', 'singed-4', 'singed-3', 'singed-2', 'singed-1', 'singed-0', 'shyvana-6', 'shyvana-5', 'shyvana-4', 'shyvana-3', 'shyvana-3', 'shyvana-2', 'shyvana-1', 'shyvana-0', 'shen-6', 'shen-5', 'shen-4', 'shen-3', 'shen-2', 'shen-1', 'shen-0', 'shaco-7', 'shaco-6', 'shaco-5', 'shaco-4', 'shaco-3', 'shaco-2', 'shaco-1', 'shaco-0', 'sejuani-7', 'sejuani-6', 'sejuani-5', 'sejuani-4', 'sejuani-3', 'sejuani-2', 'sejuani-1', 'sejuani-0', 'ryze-10', 'ryze-9', 'ryze-8', 'ryze-7', 'ryze-6', 'ryze-5', 'ryze-4', 'ryze-3', 'ryze-2', 'ryze-1', 'ryze-0', 'rumble-3', 'rumble-2', 'rumble-1', 'rumble-0', 'riven-8', 'riven-7', 'riven-6', 'riven-5', 'riven-4', 'riven-3', 'riven-2', 'riven-1', 'riven-0', 'rengar-3', 'rengar-2', 'rengar-1', 'rengar-0', 'renekton-9', 'renekton-8', 'renekton-7', 'renekton-6', 'renekton-5', 'renekton-4', 'renekton-3', 'renekton-2', 'renekton-1', 'renekton-0', 'reksai-1', 'reksai-2', 'reksai-0', 'rammus-7', 'rammus-6', 'rammus-5', 'rammus-4', 'rammus-3', 'rammus-2', 'rammus-1', 'rammus-0', 'rakan-1', 'rakan-0', 'quinn-4', 'quinn-3', 'quinn-2', 'quinn-1', 'quinn-0', 'poppy-7', 'poppy-6', 'poppy-5', 'poppy-4', 'poppy-3', 'poppy-2', 'poppy-1', 'poppy-0', 'pantheon-8', 'pantheon-7', 'pantheon-6', 'pantheon-5', 'pantheon-4', 'pantheon-3', 'pantheon-2', 'pantheon-1', 'pantheon-0', 'orianna-7', 'orianna-6', 'orianna-5', 'orianna-4', 'orianna-3', 'orianna-2', 'orianna-1', 'orianna-0', 'olaf-6', 'olaf-5', 'olaf-4', 'olaf-3', 'olaf-2', 'olaf-1', 'olaf-0', 'nunu-7', 'nunu-6', 'nunu-5', 'nunu-4', 'nunu-3', 'nunu-2', 'nunu-1', 'nunu-0', 'nocturne-6', 'nocturne-5', 'nocturne-4', 'nocturne-3', 'nocturne-2', 'nocturne-1', 'nocturne-0', 'nidalee-8', 'nidalee-7', 'nidalee-6', 'nidalee-5', 'nidalee-4', 'nidalee-3', 'nidalee-2', 'nidalee-1', 'nidalee-0', 'nautilus-5', 'nautilus-4', 'nautilus-3', 'nautilus-2', 'nautilus-1', 'nautilus-0', 'nasus-6', 'nasus-5', 'nasus-4', 'nasus-3', 'nasus-2', 'nasus-1', 'nasus-0', 'nasus-10', 'nami-7', 'nami-6', 'nami-5', 'nami-4', 'nami-3', 'nami-2', 'nami-1', 'nami-0', 'norgana-6', 'norgana-5', 'norgana-4', 'norgana-3', 'norgana-2', 'norgana-1', 'norgana-0', 'norgana-10', 'norgana-11', 'nordekaiser-4', 'nordekaiser-3', 'nordekaiser-2', 'nordekaiser-1', 'nordekaiser-0', 'nonkeyking-5', 'nonkeyking-4', 'nonkeyking-3', 'nonkeyking-2', 'nonkeyking-1', 'nonkeyking-0', 'nissfortune-9', 'nissfortune-8', 'nissfortune-7', 'nissfortune-6', 'nissfortune-5', 'nissfortune-4', 'nissfortune-3', 'nissfortune-2', 'nissfortune-1', 'nissfortune-0', 'nasteryi-3', 'nasteryi-2', 'nasteryi-1', 'nasteryi-0', 'nasteryi-9', 'nasteryi-5', 'nasteryi-4', 'nasteryi-10', 'naokai-7', 'naokai-6', 'naokai-5', 'naokai-4', 'naokai-3', 'naokai-2', 'naokai-1', 'naokai-0', 'nalzahar-5', 'nalzahar-4', 'nalzahar-3', 'nalzahar-2', 'nalzahar-1', 'nalzahar-0', 'nalphite-7', 'nalphite-6', 'nalphite-5', 'nalphite-4', 'nalphite-3', 'nalphite-2', 'nalphite-1', 'nalphite-0', 'lux-7', 'lux-6', 'lux-5', 'lux-4', 'lux-3', 'lux-2', 'lux-1', 'lux-0', 'lulu-6', 'lulu-5', 'lulu-4', 'lulu-3', 'lulu-2', 'lulu-1', 'lulu-0', 'lucian-6', 'lucian-7', 'lucian-2', 'lucian-1', 'lucian-0', 'lissandra-3', 'lissandra-2', 'lissandra-1', 'lissandra-0', 'leona-9', 'leona-8', 'leona-7', 'leona-6', 'leona-5', 'leona-4', 'leona-3', 'leona-2', 'leona-1', 'leona-0', 'leesin-6', 'leesin-5', 'leesin-4', 'leesin-3', 'leesin-2', 'leesin-1', 'leesin-0', 'leesin-10', 'leesin-11', 'leblanc-5', 'leblanc-4', 'leblanc-3', 'leblanc-2', 'leblanc-1', 'leblanc-0', 'kogmaw-9', 'kogmaw-8', 'kogmaw-7', 'kogmaw-6', 'kogmaw-5', 'kogmaw-4', 'kogmaw-3', 'kogmaw-2', 'kogmaw-1', 'kogmaw-0', 'kled-1', 'kled-0', 'kindred-2', 'kindred-1', 'kindred-0', 'khazix-4', 'khazix-3', 'khazix-2', 'khazix-1', 'khazix-0', 'kennen-7', 'kennen-6', 'kennen-5', 'kennen-4', 'kennen-3', 'kennen-2', 'kennen-1', 'kennen-0', 'kayle-8', 'kayle-7', 'kayle-6', 'kayle-5', 'kayle-4', 'kayle-3', 'kayle-2', 'kayle-1', 'kayle-0', 'katarina-9', 'katarina-8', 'katarina-7', 'katarina-5', 'katarina-6', 'katarina-4', 'katarina-3', 'katarina-2', 'katarina-1', 'kassadin-4', 'kassadin-3', 'kassadin-2', 'kassadin-1', 'kassadin-0', 'karthus-9', 'karthus-5', 'karthus-4', 'karthus-3', 'karthus-2', 'karthus-1', 'karthus-0', 'karma-7', 'karma-6', 'karma-5', 'karma-4', 'karma-3', 'karma-2', 'karma-1', 'karma-0', 'kalista-3', 'kalista-2', 'kalista-1', 'kalista-0', 'jinx-4', 'jinx-3', 'jinx-2', 'jinx-1', 'jinx-0', 'jayce-4', 'jayce-3', 'jayce-2', 'jayce-1', 'jayce-0', 'jax-9', 'jax-8', 'jax-7', 'jax-6', 'jax-5', 'jax-4', 'jax-3', 'jax-2', 'jax-1', 'jax-0', 'jarvaniv-6', 'jarvaniv-5', 'jarvaniv-4', 'jarvaniv-3', 'jarvaniv-2', 'jarvaniv-1', 'jarvaniv-0', 'janna-7', 'janna-6', 'janna-5', 'janna-4', 'janna-3', 'janna-2', 'janna-1', 'ivern-1', 'ivern-0', 'irelia-5', 'irelia-4', 'irelia-3', 'irelia-2', 'irelia-1', 'irelia-0', 'illaoi-1', 'illaoi-0', 'heimerdinger-5', 'heimerdinger-4', 'heimerdinger-3', 'heimerdinger-2', 'heimerdinger-1', 'heimerdinger-0', 'hecarim-6', 'hecarim-5', 'hecarim-4', 'hecarim-3', 'hecarim-2', 'hecarim-1', 'hecarim-0', 'graves-7', 'graves-6', 'graves-5', 'graves-4', 'graves-3', 'graves-2', 'graves-1', 'graves-0', 'gragas-9', 'gragas-8', 'gragas-7', 'gragas-6', 'gragas-5', 'gragas-4', 'gragas-3', 'gragas-3', 'gragas-2', 'gragas-1', 'gragas-0', 'gnar-4', 'gnar-3', 'gnar-2', 'gnar-1', 'gnar-0', 'garen-6', 'garen-5', 'garen-4', 'garen-3', 'garen-2', 'garen-1', 'garen-0', 'garen-10', 'garen-11', 'gangplank-8', 'gangplank-7', 'gangplank-6', 'gangplank-5', 'gangplank-4', 'gangplank-3', 'gangplank-2', 'gangplank-1', 'gangplank-0', 'galio-5', 'galio-4', 'galio-3', 'galio-2', 'galio-1', 'galio-0', 'fizz-9', 'fizz-8', 'fizz-4', 'fizz-3', 'fizz-2', 'fizz-1', 'fizz-0', 'fiora-5', 'fiora-4', 'fiora-3', 'fiora-2', 'fiora-1', 'fiora-0', 'fiddlesticks-7', 'fiddlesticks-6', 'fiddlesticks-5', 'fiddlesticks-4', 'fiddlesticks-3', 'fiddlesticks-2', 'fiddlesticks-1', 'fiddlesticks-0', 'ezreal-9', 'ezreal-8', 'ezreal-7', 'ezreal-6', 'ezreal-5', 'ezreal-4', 'ezreal-3', 'ezreal-2', 'ezreal-1', 'ezreal-0', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn-1', 'evelynn-0', 'elise-4', 'elise-3', 'elise-2', 'elise-1', 'elise-0', 'ekko-3', 'ekko-2', 'ekko-1', 'ekko-0', 'draven-6', 'draven-5', 'draven-4', 'draven-3', 'draven-2', 'draven-1', 'draven-0', 'drmundo-9', 'drmundo-8', 'drmundo-7', 'drmundo-6', 'drmundo-5', 'drmundo-4', 'drmundo-3', 'drmundo-2', 'drmundo-1', 'drmundo-0', 'diana-3', 'diana-2', 'diana-1', 'diana-0', 'diana-11', 'darius-8', 'darius-4', 'darius-3', 'darius-2', 'darius-1', 'darius-0', 'darius-14', 'corki-8', 'corki-7', 'corki-6', 'corki-5', 'corki-4', 'corki-3', 'corki-2', 'corki-1', 'corki-0', 'chogath-6', 'chogath-5', 'chogath-4', 'chogath-3', 'chogath-2', 'chogath-1', 'chogath-0', 'cassiopeia-4', 'cassiopeia-3', 'cassiopeia-2', 'cassiopeia-1', 'cassiopeia-0', 'camille-1', 'camille-0', 'caitlyn-6', 'caitlyn-5', 'caitlyn-4', 'caitlyn-3', 'caitlyn-2', 'caitlyn-1', 'caitlyn-0', 'caitlyn-10', 'caitlyn-11', 'braum-3', 'braum-2', 'braum-1', 'braum-0', 'braum-10', 'brand-5', 'brand-4', 'brand-3', 'brand-2', 'brand-1', 'brand-0', 'blitzcrank-7', 'blitzcrank-6', 'blitzcrank-5', 'blitzcrank-4', 'blitzcrank-3', 'blitzcrank-2', 'blitzcrank-1', 'blitzcrank-0', 'blitzcrank-11', 'bard-6', 'bard-5', 'bard-4', 'bard-3', 'bard-2', 'bard-1', 'bard-0', 'azir-4', 'azir-3', 'azir-2', 'azir-1', 'azir-0', 'aurelionsol-1', 'aurelionsol-0', 'ashe-8', 'ashe-7', 'ashe-6', 'ashe-5', 'ashe-4', 'ashe-3', 'ashe-2', 'ashe-1', 'ashe-0', 'annie-9', 'annie-8', 'annie-7', 'annie-6', 'annie-5', 'annie-4', 'annie-3', 'annie-2', 'annie-1', 'annie-0', 'annie-10', 'anivia-7', 'anivia-6', 'anivia-5', 'anivia-4', 'anivia-3', 'anivia-2', 'anivia-1', 'anivia-0', 'amumu-8', 'amumu-7', 'amumu-6', 'amumu-5', 'amumu-4', 'amumu-3', 'amumu-2', 'amumu-1', 'amumu-0', 'alistar-9', 'alistar-8', 'alistar-7', 'alistar-6', 'alistar-5', 'alistar-4', 'alistar-3', 'alistar-2', 'alistar-1', 'alistar-0', 'akali-8', 'akali-7', 'akali-6', 'akali-5', 'akali-4', 'akali-3', 'akali-2', 'akali-1', 'akali-0', 'ahri-7', 'ahri-6', 'ahri-5', 'ahri-4', 'ahri-3', 'ahri-2', 'ahri-1', 'ahri-0', 'aatrox-3', 'aatrox-2', 'aatrox-1', 'aatrox-0', 'zacskt', 'teemoskt', 'olafskt', 'namiskt', 'syndraskt', 'jhinskt', 'ekkoskt', 'urgot-8', 'urgot-7', 'urgot-6', 'urgot-5', 'kayn-2', 'kayn', 'sona-8', 'veigaros', 'twitchos', 'tristanaos', 'fizzos', 'zigg', 'nalzah01', 'kayle', 'hecarim', 'brand', 'ornn2', 'ornn', 'syndra', 'soraka', 'nissfortune', 'ezreal', 'ahri', 'yorick', 'singed', 'nasteryi', 'janna', 'fiora', 'cassiopeia', 'ashe', 'zed', 'viktor', 'nidalee', 'katarina', 'gnar', 'evelynn-7', 'evelynn-6', 'evelynn-5', 'evelynn', 'elise', 'annie', 'rengar', 'blitzcrank-9', 'blitzcrank-8', 'zoe-2', 'zoe', 'vi', 'vayne', 'varus', 'poppy', 'kogmaw', 'jinx', 'jhin', 'jax', 'graves', 'draven', 'xinzhao', 'warwick', 'swain-8', 'swain-7', 'swain-6', 'swain-5', 'swain-4', 'rakan', 'nasus', 'nissfortune-15', 'nissfortune-14', 'nissfortune-13', 'nissfortune-12', 'nissfortune-11', 'nissfortune-10', 'lux', 'kaisa-2', 'kaisa', 'jarvan-iv', 'illaoi', 'gragas', 'wukong', 'sivir', 'nissfortune-16', 'irelia-11', 'irelia-10', 'irelia-9', 'irelia-8', 'irelia-7', 'irelia-6', 'galio', 'alistar', 'varus-7', 'twistedfate', 'teemo', 'shen', 'rumble', 'riven', 'evelynn-8', 'zoe3', 'xinzhao-7', 'urgot', 'thresh', 'talon', 'taliya', 'pyke-2', 'pyke', 'poppy-8', 'nunu-15', 'nunu-14', 'nunu-13', 'nunu-12', 'nunu-11', 'nunu-10', 'nunu-9', 'nunu-8', 'lulu', 'lucian', 'jarvan-iv-7', 'irelia-12', 'garen', 'gangplank', 'darius', 'caitlyn', 'braum', 'aurelionsol-2', 'ashe-9', 'akali-18', 'akali-17', 'akali-16', 'akali-15', 'akali-14', 'akali-13', 'akali-12', 'akali-11', 'akali-10', 'akali-9', 'aatrox-7', 'aatrox-6', 'aatrox-5', 'aatrox-4', 'ziggs-6', 'yasuo', 'sona', 'nalphite', 'khazix', 'kayn-3', 'jinx-5']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'lolcoverbyname': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['zyra', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twictch', 'tryndamere', 'trundle', 'tristana', 'thresh', 'twistedfate', 'teemo', 'taric', 'talon', 'taliyah', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'orianna', 'olaf', 'nunu', 'nasteryi', 'naokai', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'nocturne', 'nedalee', 'nautilus', 'nasus', 'nami', 'norgana', 'noderkaiser', 'nissfortune', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'jinx', 'jhin', 'jayce', 'jax', 'jarvan', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'drmundo', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'zoe', 'sylas', 'swain-2', 'pyke', 'nunu-2', 'neeko', 'norgana2', 'kayle-2', 'kaisa', 'evelynn-2', 'aatrox-2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'cyberhunterfb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', '10', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', '10', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverfreefirefb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'hayato', 'kapella', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gamingmascot': {
            if (!text) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bear-2', 'dragon-2', 'hydra', 'lion', 'reaper', 'wolf-2', 'bear', 'eagle', 'iguana', 'shark', 'snake', 'spartan', 'griffin', 'owl', 'wolf', 'tiger', 'wolver', 'dragon']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coveronepiecefb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ace', 'brook', 'chopper', 'franky', 'garp', 'jinbei', 'law', 'luffy', 'nerry', 'nami', 'rayleigh', 'robin', 'sabo', 'sanji', 'shanks', 'sunny', 'usopp', 'zoro']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerytcsgo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['banner-1', 'banner-2', 'banner-3', 'banner-4', 'banner-5', 'banner-6', 'banner-7']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  banner: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'fbgamepubgcover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar ??🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['cover-1', 'cover-2', 'cover-3', 'cover-4', 'cover-5', 'cover-6', 'cover-7', 'cover-8', 'cover-9', 'cover-10', 'cover-11', 'cover-12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Template')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  template: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'banneroflol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
            var memek = args.join(" ").split("|")
            var m1 = memek[0]
            var m2 = memek[1]
            var m3 = memek[2]
            const style = ['ahri-2', 'neeko', 'nocturne', 'shen-2', 'veigar', 'rakanayah-2', 'zoe-2', 'pantheon-2', 'rammus', 'udyr', 'darius-2', 'ekko-2', 'lablanc', 'leona', 'nissfotune', 'poppy', 'quinn', 'talon-2', 'akali-2', 'irelia-2', 'jinx-2', 'nordekaiser', 'pyke-2', 'renekton', 'rengar', 'sivir', 'sona', 'soraka', 'tristana', 'warwick', 'yuumi', 'ziggs', 'leesin', 'lulu', 'lux', 'naster-yi', 'norgana', 'nasus', 'pantheon', 'pyke', 'qiyana', 'rakan', 'rakanxayah', 'riven', 'shen', 'sylas', 'talon', 'teemo', 'thresh', 'tryndamere', 'varus', 'vayne', 'velkoz', 'vladimir', 'yasuo', 'zed', 'zoe', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvan-iv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'drmundo', 'draven', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  banner: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofaov2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            const style = ['airi-2', 'aleister', 'astrid-2', 'ata', 'butterfly-2', 'dirak', 'ignis-2', 'ishar', 'jinna', 'lauriel-3', 'nina-2', 'natalya-2', 'omen-2', 'qi-2', 'quillen3', 'raz', 'roxie-2', 'ryoma-2', 'taara-2', 'violet-3', 'wukong-4', 'wukong-3', 'krixi-2', 'krizziz', 'nurad-5', 'volkath', 'wisp-2', 'wukong-2', 'enzo-2', 'hayate-2', 'annette-2', 'capheny-2', 'celica', 'gildur-2', 'lauriel-2', 'nurad-4', 'quillen-2', 'sephera-2', 'qi', 'nurad-3', 'nurad-2', 'nakroth-2', 'zip', 'diao-chan-2', 'enzo', 'errol', 'joker', 'payna', 'slimz', 'thane', 'toro', 'veres', 'violet-2', 'wisp', 'yena', 'zill', 'arduin', 'arthur', 'batman', 'capheny', 'darcy', 'elsu', 'florentino', 'gildur', 'ignis', 'wukong', 'yena', 'zanis', 'violet', 'tulen', 'sephera', 'nurad', 'nina', 'lindis', 'liliana', 'lauriel', 'krixi', 'kahlii', 'hayate', 'diao-chan', 'butterfly', 'astrid', 'arum', 'annette', 'amily', 'airi', 'zuka', 'zephys', 'zanis', 'yorn', 'xeniel', 'veres', 'veera', 'tel-annas', 'taara', 'superman', 'skud', 'ryoma', 'roxie', 'quillen', 'omen', 'natalya', 'nakroth', 'lubu']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  banner: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'teamlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            const style = ['cobra', 'dragon', 'eagle2', 'falcon', 'lion2', 'tiger2', 'bear', 'buffalo', 'eagle', 'lion', 'tiger', 'wolf']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'companylogo2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'companylogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gradientlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'pencilsketch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            const style = ['bird', 'butterfly', 'coffee', 'dove', 'leaf', 'like', 'lotus', 'milk-tea', 'panda', 'tree', 'woman', 'bear', 'bull', 'dragon', 'eagle', 'hawk', 'ninja', 'paw', 'rooster', 'sabertooth', 'skull', 'warrior', 'zebra']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Icon')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  icon: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gunlogogaming': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            const style = ['ak47', 'ak47-s', 'an94', 'ar15', 'aug', 'awm', 'g36k', 'm4a1', 'm4-s', 'm14ebr', 'm16', 'm60', 'm82a1', 'mp5', 'scar', 'svd', 'xm8', 'xm1014']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'banneroffreefire': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            const style = ['andrew', 'caroline', 'kelly', 'laura', 'maxim', 'miguel', 'misha', 'moco', 'nikita', 'notora', 'olivia', 'steffi']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'letterlogos': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            const style = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofoverwatch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            const style = ['widowmaker', 'tracer', 'symmetra', 'sombra', 'soldier76', 'reinhardt', 'reaper', 'orisa', 'mercy', 'mei', 'genji', 'dva', 'doomfist', 'ashe', 'ana']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofapex': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            const style = ['bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofpubg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            const style = ['bg11', 'bg10', 'bg9', 'bg8', 'bg7', 'bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'mascotstyle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            const style = ['dragon-5', 'jet', 'knight', 'skull-3', 'skull-cyborg', 'tiger-4', 'bee-3', 'dragon-4', 'fox-3', 'goat-2', 'kitsune', 'octopus-2', 'piranha', 'wolf', 'bear-2', 'cat', 'ceberus', 'crocodile', 'dinosaur', 'dragon-3', 'eagle-3', 'horse-2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat2', 'demon', 'fox', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', 'skull2', 'tiger3', 'tiger2', 'tiger', 'shark', 'sabertooth', 'rooster', 'rhino', 'puma', 'phoenix', 'panther', 'owl', 'lion', 'horse', 'hornet', 'griffin', 'goat', 'fox', 'eagle', 'dragon2', 'dragon', 'devil', 'cobra', 'bull', 'bear', 'monkey', 'warrior', 'rabbit', 'pirates', 'owl2', 'neonwolf', 'lionking', 'godzilla', 'flashwolf', 'fire', 'eagle2', 'dog', 'mask', 'team', 'pubg', 'drift', 'bee2']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'logoaccording': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            const style = ['bear2', 'cat2', 'ceberus', 'crocodile', 'dinosaur', 'dragon3', 'eagle3', 'horse2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat', 'demon', 'fox-2', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', '-2', 'tiger-3', 'bg-tiger', 'bg-buffalo', 'chicken', 'bull', 'bg-wolf', 'jaguar', 'horse', 'eagle', 'dragon', 'wolver', 'shark', 'sabertooth', 'rhino', 'phoenix', 'lion', 'hornet', 'griffin', 'bear', 'tiger2', 'panther', 'owl', 'monkey', 'goat', 'fox', 'dragon2', 'devil', 'cobra', 'reaper', 'pirates', 'owl2', 'mask', 'fire', 'eagle2', 'chamois', 'neptune', 'parrots', 'samurai']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avataroverwatch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            const style = ['mccree', 'mercy', 'zenyatta', 'zarya', 'winston', 'widowmaker', 'tracer', 'torbjorn', 'symmetra', 'sombra', 'soldier76', 'soldier_76', 'roadhog', 'reinhardt', 'reaper2', 'reaper', 'pharah', 'orisa', 'mei', 'lucio', 'junkrat', 'hanzo', 'genji', 'dva', 'bastion', 'ana2', 'ana', 'doomfist', 'bg-1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'asmaulhusna': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  let txt = '*Asmaul Husna*\n\n'
                  txt += `• Latin : ${data.result.latin}\n`
                  txt += `• Arabic : ${data.result.arabic}\n`
                  txt += `• Tr id : ${data.result.translation_id}\n`
                  txt += `• Tr en : ${data.result.translation_en}`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'kisahnabi': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Adam'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  nabi: q
               }, 'apikey'))
               .then(async data => {
                  let txt = '*Kisah Nabi*\n\n'
                  txt += `• Name : ${data.result.name}\n`
                  txt += `• Birth : ${data.result.birth}\n`
                  txt += `• Death Age : ${data.result.death_age}\n`
                  txt += `• Country : ${data.result.country_from}\n`
                  txt += `• Story : ${data.result.story}\n`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'jadwalshalat': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Makassar'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  daerah: q
               }, 'apikey'))
               .then(async data => {
                  let txt = '*Jadwal Shalat *\n\n'
                  txt += `• Daerah : ${q}\n\n`
                  txt += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
                  txt += `• Subuh : ${data.result.today.Shubuh}\n`
                  txt += `• Zuhur : ${data.result.today.Dzuhur}\n`
                  txt += `• Ashr : ${data.result.today.Ashr}\n`
                  txt += `• Magrib : ${data.result.today.Maghrib}\n`
                  txt += `• Isya : ${data.result.today.Isya}\n`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'randomquran': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮?? _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  let short = data.result.resources
                  let txt = '*Random Quran*\n\n'
                  txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                  txt += `• Surah ke : ${short.numberOfSurah}\n`
                  txt += `• Total ayat : ${short.totalAyah}\n`
                  txt += `• Ayat ke : ${short.numberOfAyah}\n`
                  txt += `• Arab : ${short.ayah.text.arab}\n`
                  txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
                  txt += `• Tr en : ${short.ayah.translation.en}\n`
                  txt += `• Tr id : ${short.ayah.translation.id}\n\n`
                  txt += `_*Audio sedang dalam di proses pengiriman*_`
                  reply(txt)
                  let buff = await getBuffer(short.ayah.audio.primary)
                  alpha.sendMessage(from, {
                     audio: {
                        url: short.ayah.audio.primary
                     },
                     mimetype: 'audio/mpeg'
                  }, {
                     quoted: m
                  })
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'randomquran2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran2(prefix, commad, 'Juz', '1'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  juz: q
               }, 'apikey'))
               .then(async data => {
                  let short = data.result.resources
                  let txt = '*Random Quran*\n\n'
                  txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                  txt += `• Surah ke : ${short.numberOfSurah}\n`
                  txt += `• Total ayat : ${short.totalAyah}\n`
                  txt += `• Ayat ke : ${short.numberOfAyah}\n`
                  txt += `• Arab : ${short.ayah.text.arab}\n`
                  txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
                  txt += `• Tr en : ${short.ayah.translation.en}\n`
                  txt += `• Tr id : ${short.ayah.translation.id}\n\n`
                  txt += `_*Audio sedang dalam di proses pengiriman*_`
                  reply(txt)
                  alpha.sendMessage(from, {
                     audio: {
                        url: short.ayah.audio.primary
                     },
                     mimetype: 'audio/mpeg'
                  }, {
                     quoted: m
                  })
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'listsurah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  listt = '*List Surah*\n\n'
                  reply(listt + data.result)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'tafsirsurah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮?? _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran2(prefix, command, 'Surah', 'Al-fatihah'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  surah: q
               }, 'apikey'))
               .then(async data => {
                  let listt = '*Tafsir Surah*\n\n'
                  let no = 0
                  for (var i = 0; i < data.result.length; i++) {
                     no += 1
                     listt += `• Surah : ${data.result[i].surah}\n`
                     listt += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
                  }
                  reply(listt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'alquranaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `??🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran3(prefix, command, 'Surah', 'ayat', '1', '2'))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio2', {
               ayat: m2,
               surah: m1
            }, 'apikey'))
            let short = asma.result.data
            let listt = '*Alquran Audio*\n\n'
            listt += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
            listt += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
            listt += `• Surah ke : ${short.surah.number}\n`
            listt += `• Urutan : ${short.surah.sequence}\n`
            listt += `• Total ayat : ${short.surah.numberOfVerses}\n`
            listt += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
            listt += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
            listt += `• Juz : ${short.meta.juz}\n`
            listt += `• Page : ${short.meta.page}\n`
            listt += `• Manzil : ${short.meta.manzil}\n`
            listt += `• Ruku : ${short.meta.ruku}\n`
            listt += `• Quarte : ${short.meta.hizbQuarter}\n`
            listt += `• Arab : ${short.text.arab}\n`
            listt += `• Latin : ${short.text.transliteration.en}\n`
            listt += `• Tr en : ${short.translation.en}\n`
            listt += `• Tr id : ${short.translation.id}\n`
            listt += `• Tafsir short : ${short.tafsir.id.short}\n`
            listt += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
            let aud_nya = await getBuffer(short.audio.primary)
            alpha.sendMessage(from, {
               audio: {
                  url: short.audio.primary
               },
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            reply(listt)
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'awoawo':
         case 'benedict':
         case 'chat':
         case 'dbfly':
         case 'dino_kuning':
         case 'doge':
         case 'gojosatoru':
         case 'hope_boy':
         case 'jisoo':
         case 'kr_robot':
         case 'kucing':
         case 'lonte':
         case 'manusia_lidi':
         case 'menjamet':
         case 'meow':
         case 'nicholas':
         case 'patrick':
         case 'popoci':
         case 'sponsbob':
         case 'kawan_sponsbob':
         case 'tyni': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let textpro2 = await fetch(api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
            if (!textpro2.ok) throw await textpro2.text()
            let img = await textpro2.buffer()
            alpha.sendImageAsSticker(m.chat, img, m, {
               packname: global.packname,
               author: global.author
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'brainly': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
            let res = await fetch(api('alfa', '/api/search/brainly', {
               query: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.json()
            let answer = await img.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n----------------------------------------\n\n')
            reply(answer)
         }
         break
         case 'google': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
            google({
               'query': text
            }).then(res => {
               let teks = `*Google Search*\n_Query : ${text}_\n\n`
               for (let g of res) {
                  teks += `*Title* : ${g.title}\n`
                  teks += `*Description* : ${g.snippet}\n`
                  teks += `*Link* : ${g.link}\n\n----------------------------------------\n\n`
               }
               reply(teks)
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'fetch':
         case 'get': {
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'https://google.com'))
            if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
            reply(lang.wait())
            let _url = new URL(text)
            let url = global.api(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'apikey')
            let res = await fetch(url)
            if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
            }
            if (!/text|json/.test(res.headers.get('content-type'))) return alpha.sendFile(m.chat, url, 'file', lang.ok(), m)
            let txt = await res.buffer()
            try {
               txt = util.format(JSON.parse(txt + ''))
            } catch (e) {
               txt = txt + ''
            } finally {
               reply(txt.slice(0, 65536) + '')
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'nulis':
            reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Subscribe Ya YT zeeoneofc`)
            break
         case 'foliokiri':
         case 'foliokanan':
         case 'nuliskanan':
         case 'nuliskiri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = text
            let res = await fetch(global.api(global.APIs.alfa, '/api/canvas/' + command, {
               text: tulisan
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'nulis.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'ssweb':
         case 'screenshoot': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Kirim perintah ${prefix + command} url|device\n\nExample:\n${prefix + command} https://google.com|phone`)
            if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} url|device\n\nExample:\n${prefix + command} https://google.com|phone`)
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            if (!isUrl(m1)) return reply(`Kirim perintah ${prefix + command} url|device\n\nExample:\n${prefix + command} https://google.com|phone\n\nDevice yang tersedia yaitu phone, tablet, dan desktop`)
            if (!["phone", "tablet", "desktop"].includes(m2)) {} else {
               let res = await fetch(global.api(global.APIs.alfa, '/api/tools/ssweb', {
                  url: m1,
                  device: m2
               }, 'apikey'))
               if (!res.ok) throw await res.text()
               let img = await res.buffer()
               alpha.sendFile(m.chat, img, 'ssweb.jpg', lang.ok(), m)
               db.data.users[m.sender].limit = addLimit
            }
         }
         break
         case 'bass':
         case 'blown':
         case 'deep':
         case 'earrape':
         case 'fast':
         case 'fat':
         case 'nightcore':
         case 'reverse':
         case 'robot':
         case 'slow':
         case 'smooth':
         case 'tupai':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            try {
               let set
               if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
               if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
               if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
               if (/earrape/.test(command)) set = '-af volume=12'
               if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
               if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
               if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
               if (/reverse/.test(command)) set = '-filter_complex "areverse"'
               if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
               if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
               if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
               if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
               if (/audio/.test(mime)) {
                  reply(lang.wait())
                  let media = await alpha.downloadAndSaveMediaMessage(quoted)
                  let ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(media)
                     if (err) return reply(lang.err())
                     let buff = fs.readFileSync(ran)
                     alpha.sendMessage(m.chat, {
                        audio: buff,
                        mimetype: 'audio/mpeg'
                     }, {
                        quoted: m
                     })
                     fs.unlinkSync(ran)
                  })
               } else reply(lang.NoAudRep(prefix, command))
            } catch (e) {
               reply(lang.err())

            }
            db.data.users[m.sender].limit = addLimit
            break
         case 'adventure': {
            rpg.adventure(alpha, m, prefix, reply)
         }
         break
         case 'jadian':
         case 'tembak': {
            rpg.jadiantembak(alpha, text, m, reply, prefix)
         }
         break
         case 'terima': {
            rpg.jadianterima(alpha, text, m, reply, prefix)
         }
         break
         case 'tolak': {
            rpg.jadiantolak(alpha, text, m, reply, prefix)
         }
         break
         case 'ikhlas':
         case 'ikhlasin': {
            rpg.jadianikhlas(alpha, text, m, reply, prefix)
         }
         break
         case 'putus':
         case 'putusin': {
            rpg.jadianputus(alpha, text, m, reply, prefix)
         }
         break
         case 'pasangan':
         case 'cekpasangan':
         case 'cekpacar': {
            rpg.jadiancek(alpha, text, m, reply, prefix)
         }
         break
         case 'open': {
            rpg.openc(alpha, m, prefix, args, command, reply)
         }
         break
         case 'bangun':
         case 'build': {
            rpg.build(alpha, m, prefix, args, command, reply)
         }
         break
         case 'berkebon': {
            rpg.berkebon(alpha, m, prefix, reply)
         }
         break
         case 'berdagang': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let whoi = m.mentionedJid[0]
            if (!whoi) return reply('Tag salah satu yang kamu ingin ajak berdagang')
            rpg.berdagang(alpha, m, prefix, reply)
         }
         break
         case 'bansos': {
            rpg.bansos(alpha, m, prefix, reply)
         }
         break
         case 'bank': {
            rpg.bank(alpha, m, prefix, reply)
         }
         break
         case 'casino': {
            rpg.casino(alpha, m, prefix, args, reply)
         }
         break
         case 'chop': {
            rpg.chop(alpha, m, prefix, reply)
         }
         break
         case 'collect': {
            rpg.collect(alpha, m, prefix, args, command, reply)
         }
         break
         case 'cook': {
            rpg.cook(alpha, m, prefix, args, command, reply)
         }
         break
         //case 'cd':
         case 'cooldown': {
            rpg.cooldown(alpha, m, prefix, args, command, reply)
         }
         break
         case 'craft': {
            rpg.craft(alpha, m, prefix, args, command, reply)
         }
         break
         case 'claim':
         case 'daily': {
            rpg.daily(alpha, m, prefix, reply)
         }
         break
         case 'dya':
         case 'dno':
         case 'duel': {
            rpg.duel(alpha, m, prefix, args, command, reply)
         }
         break
         case 'feed': {
            rpg.feed(alpha, m, prefix, args, reply)
         }
         break
         case 'tokoikan':
         case 'fishop': {
            rpg.fishop(alpha, m, prefix, args, command, reply)
         }
         break
         case 'hourly': {
            rpg.hourly(alpha, m, prefix, reply)
         }
         break
         case 'inventory':
         case 'inv': {
            rpg.inventory(isPremium, alpha, m, prefix, reply)
         }
         break

         case 'judi': {
            rpg.judi(alpha, m, prefix, args, reply)
         }
         break
         case 'kandang': {
            rpg.kandang(alpha, m, prefix, reply)
         }
         break
         case 'work':
         case 'kerja': {
            rpg.kerja(alpha, m, prefix, args, command, reply)
         }
         break
         case 'buyall':
         case 'buy': {
            rpg.buy(alpha, m, prefix, args, command, reply)
         }
         break
         case 'koboy': {
            rpg.koboy(alpha, m, prefix, args, command, text, reply)
         }
         break
         case 'piscina':
         case 'kolam': {
            rpg.kolam(alpha, m, prefix, reply)
         }
         break
         case 'mancing': {
            rpg.mancing(alpha, m, prefix, pushname, reply)
         }
         break
         case 'merampok':
         case 'rampok': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let whoi = m.mentionedJid[0]
            if (!whoi) return reply('Tag salah satu yang kamu ingin rampok')
            rpg.merampok(alpha, m, prefix, reply)
         }
         break
         case 'levelup': {
            rpg.levelup(alpha, pushname, m, reply, ownername)
         }
         break
         case 'mining': {
            rpg.mining(alpha, m, prefix, reply)
         }
         break
         case 'monthly': {
            rpg.monthly(alpha, m, prefix, reply)
         }
         break
         case 'nabung': {
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} 100`)
            rpg.nabung(alpha, m, prefix, args, command, reply)
         }
         break

         case 'narik': {
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} 100`)
            rpg.narik(alpha, m, prefix, args, command, reply)
         }
         break
         case 'nguli': {
            rpg.nguli(alpha, m, prefix, reply)
         }
         break
         case 'jadiojek':
         case 'ngojek':
         case 'ojek': {
            rpg.ojek(alpha, m, prefix, pushname, reply)
         }
         break
         case 'toko':
         case 'pasar': {
            if (!text) return reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
            if (!args[0] && !args[1]) return reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
            rpg.pasar(alpha, m, prefix, args, command, reply)
         }
         break
         case 'buy':
         case 'shell':
         case 'toko':
         case 'shop': {
            if (!text) return reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
            if (!args[0] && !args[1]) return reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
            rpg.shop(alpha, m, prefix, args, command, reply)
         }
         break
         case 'slot': {
            rpg.slot(alpha, m, prefix, args, command, text, reply)
         }
         break
         case 'transfer': {
            rpg.transfer(alpha, m, prefix, args, reply)
         }
         break
         case 'heal':
         case 'use': {
            rpg.use(alpha, m, prefix, args, command, reply)
         }
         break
         case 'weekly': {
            rpg.weekly(alpha, m, prefix, reply)
         }
         break
         case 'berburu': {
            rpg.berburu(alpha, m, prefix, reply)
         }
         break
         case 'ceklimit':
         case 'checklimit':
         case 'limit': {
            reply(lang.limitLu(isPremium ? limitawal.premium : db.data.users[m.sender].limit))
         }
         break
         default:
            if ((budy) && ["p", "proses", "Proses", "P"].includes(budy) && !isCmd && !m.key.fromMe) {
               //if (!m.isGroup) return
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return
               if (!m.quoted) return reply(lang.LockCmd())
               let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
               const getTextP = getTextSetProses(m.chat, set_proses);
               let proses = (getTextP || `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
               alpha.sendTextWithMentions(m.chat, proses, m)
            }


            if ((budy) && ["d", 'done', "Done", "D"].includes(budy) && !isCmd && !m.key.fromMe) {
               //if (!m.isGroup) return
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return
               if (!m.quoted) return reply(lang.LockCmd())
               let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
               const getTextD = await getTextSetDone(m.chat, set_done);
               let sukses = (getTextD || `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
               alpha.sendTextWithMentions(m.chat, sukses, m)
            }


            if (budy.startsWith('=>')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())

               function Return(sul) {
                  sat = JSON.stringify(sul, null, 2)
                  bang = util.format(sat)
                  if (sat == undefined) {
                     bang = util.format(sul)
                  }
                  return reply(bang)
               }
               try {
                  reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
               } catch (e) {
                  reply(util.format(e))
               }
            }

            if (m.isGroup && mentionUser.includes(ownernomer)) {
               //console.log(m.mentionedJid[0])
               alpha.sendMessage(m.chat, {
                  audio: fs.readFileSync(tag_owner),
                  mimetype: "audio/mpeg",
                  ptt: true
               }, {
                  quoted: m
               })
            }
            if (budy.startsWith('> ')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               try {
                  let evaled = await eval(budy.slice(2))
                  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                  await reply(evaled)
               } catch (err) {
                  await reply(util.format(err))
               }
            }


            if (budy.startsWith('< ')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               try {
                  return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
               } catch (e) {
                  reply(util.format(e))
               }
            }

            if (budy.startsWith('$ ')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               mengtermuk = budy.slice(2)
               exec(mengtermuk, (err, stdout) => {
                  if (err) return reply(err)
                  if (stdout) return reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
               })
            }
      }
   } catch (err) {
      //console.log(err)
      m.reply(util.format(err))
   }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update ${__filename}`))
   delete require.cache[file]
   require(file)
})