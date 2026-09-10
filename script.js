// ============================================================
// KONFIGURASYON
// ============================================================
const gecerliKod = "ııOOOııııuuu?1éııOOOııııuuu?1é";
// tikRengi: "blue" (normal), "red" (mod), "purple" (süper mod)
let tikRengi = "blue";
const GUVENLIK_CEVABI = "msz-şifremi-unuttum";

const BROKER_URL = 'wss://broker.emqx.io:8084/mqtt';
const TOPIC_PREFIX = 'social_pulse_net_v3/';
const TOPICS = {
  POSTS: TOPIC_PREFIX + 'posts',
  LIKES: TOPIC_PREFIX + 'likes',
  USERS: TOPIC_PREFIX + 'users',
  FOLLOWS: TOPIC_PREFIX + 'follows',
  DM: TOPIC_PREFIX + 'dm/',
  DM_REQUESTS: TOPIC_PREFIX + 'dm_requests',
  COMMENTS: TOPIC_PREFIX + 'comments',
  GROUPS: TOPIC_PREFIX + 'groups',
  MOD: TOPIC_PREFIX + 'mod'
};
const POST_COOLDOWN_MS = 180000;
const MAX_POSTS = 100;
const DB_NAME = 'MSZMedyaDB';
const DB_VERSION = 4;
const NEON_COLORS = ['#b026ff','#9b00ff','#8b00cc','#7a00b3','#6a0099','#c44dff','#d580ff','#e6b3ff','#a64dff','#8000ff'];
const USER_COLORS = ['bg-cyan-600','bg-indigo-600','bg-emerald-600','bg-purple-600','bg-rose-600','bg-amber-600'];
const PRESENCE_INTERVAL_MS = 30000;
const BAN_MIN_HOURS = 1;
const BAN_MAX_HOURS = 50;

const TRUSTED_DOMAINS = [
  'youtube.com','youtu.be','m.youtube.com','twitter.com','x.com','mobile.twitter.com',
  'instagram.com','instagr.am','tiktok.com','vm.tiktok.com','facebook.com','fb.com',
  'github.com','gist.github.com','wikipedia.org','tr.wikipedia.org','en.wikipedia.org',
  'google.com','drive.google.com','docs.google.com','linkedin.com','reddit.com',
  'pinterest.com','twitch.tv','discord.com','discord.gg','spotify.com','open.spotify.com',
  'apple.com','microsoft.com','amazon.com','netflix.com','medium.com','stackoverflow.com',
  'whatsapp.com','telegram.org','t.me'
];

const REWARD_TIERS = [
  { count: 10, color: '#b026ff', name: 'Neon Mor', icon: '🏆' },
  { count: 50, color: '#00d9ff', name: 'Neon Mavi', icon: '🌟' },
  { count: 100, color: '#ffb800', name: 'Neon Altın', icon: '👑' }
];

const EMOJI_LIST = [
  '😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚',
  '😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥳','😏','😒','😞','😔','😟','😕','🙁','😣','😖','😫',
  '😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭',
  '🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢',
  '🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','💀','☠️','👽','👾','🤖','🎃',
  '❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','👍',
  '👎','👌','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','👇','☝️','✋','🤚','🖐️','🖖','👋','🤝','🙏','✍️',
  '💪','🦾','🦿','🦵','🦶','👂','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','🔥','✨','⭐','🌟','💫'
];

let currentLang = 'tr';

// ============================================================
// STATE
// ============================================================
let currentUser = null, mqttClient = null, activeTab = 'feed', selectedDmUser = null, viewingPublicUsername = null;
let tempAvatarBase64 = null, isMqttConnected = false, isDBReady = false, lastPostTime = 0, selectedGroupId = null;
let usersDb = {}, postsDb = [], dmsDb = [], commentsDb = [], groupsDb = [];
let dmRequestsDb = [];
let bannedUsers = []; // { username, until, reason, by, bannedAt }
let notifications = [], notificationCount = 0, dmUnreadCounts = {}, dmLastMessageTime = {};
let db = null, followersModalTarget = null, followingModalTarget = null;
let presenceInterval = null, banCheckInterval = null;
let pendingPostMedia = null;
let replyToMessage = null;
let emojiTargetInput = null;
let mediaRecorder = null, audioChunks = [], recordingTimer = null, recordingSeconds = 0;
let modBanTarget = null, modDeletePostTarget = null;

// ============================================================
// INDEXEDDB
// ============================================================
function openDatabase() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => { db = req.result; isDBReady = true; resolve(db); };
    req.onupgradeneeded = (e) => {
      const d = e.target.result;
      ['users','posts','comments','messages','groups','dm_requests','banned_users'].forEach(name => {
        if (!d.objectStoreNames.contains(name)) {
          const s = d.createObjectStore(name, { keyPath: name === 'users' ? 'username' : 'id' });
          if (name === 'posts') { s.createIndex('createdAt','createdAt'); s.createIndex('author','author.username'); }
          if (name === 'comments') { s.createIndex('postId','postId'); s.createIndex('createdAt','createdAt'); }
          if (name === 'messages') { s.createIndex('sender','sender'); s.createIndex('recipient','recipient'); s.createIndex('timestamp','timestamp'); }
          if (name === 'groups') { s.createIndex('createdAt','createdAt'); s.createIndex('owner','owner'); }
          if (name === 'dm_requests') { s.createIndex('from','from'); s.createIndex('to','to'); }
        }
      });
    };
  });
}
function tx(store, mode = 'readonly') {
  if (!db) throw new Error('Veritabanı açık değil');
  return db.transaction(store, mode).objectStore(store);
}
function saveToDB(store, data) {
  return new Promise((resolve, reject) => {
    try { const r = tx(store, 'readwrite').put(data); r.onsuccess = () => resolve(data); r.onerror = () => reject(r.error); } catch(e) { reject(e); }
  });
}
function getAllFromDB(store) {
  return new Promise((resolve, reject) => {
    try { const r = tx(store, 'readonly').getAll(); r.onsuccess = () => resolve(r.result || []); r.onerror = () => reject(r.error); } catch(e) { reject(e); }
  });
}
function clearDB(store) {
  return new Promise((resolve, reject) => {
    try { const r = tx(store, 'readwrite').clear(); r.onsuccess = () => resolve(); r.onerror = () => reject(r.error); } catch(e) { reject(e); }
  });
}
async function saveToDBAll(store, dataArray) {
  try { await clearDB(store); for (const item of dataArray) await saveToDB(store, item); } catch(e) { console.error(store + ' hatası:', e); }
}
const savePostsToDB = () => saveToDBAll('posts', postsDb);
const saveCommentsToDB = () => saveToDBAll('comments', commentsDb);
const saveMessagesToDB = () => saveToDBAll('messages', dmsDb);
const saveUsersToDB = () => saveToDBAll('users', Object.values(usersDb));
const saveGroupsToDB = () => saveToDBAll('groups', groupsDb);
const saveDmRequestsToDB = () => saveToDBAll('dm_requests', dmRequestsDb);
const saveBannedUsersToDB = () => saveToDBAll('banned_users', bannedUsers);

async function loadAllFromDB() {
  try {
    const [users, posts, comments, messages, groups, dmReqs, bans] = await Promise.all([
      getAllFromDB('users'), getAllFromDB('posts'), getAllFromDB('comments'),
      getAllFromDB('messages'), getAllFromDB('groups'), getAllFromDB('dm_requests'),
      getAllFromDB('banned_users')
    ]);
    const usersObj = {}; users.forEach(u => usersObj[u.username] = u);
    return { users: usersObj, posts, comments, messages, groups, dmReqs, bans };
  } catch(e) { console.error('Yükleme hatası:', e); return null; }
}

// ============================================================
// HELPERS
// ============================================================
function $(id) { return document.getElementById(id); }
function escapeHtml(str) { if (!str) return ''; return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"); }
function formatTimeAgo(iso) {
  if (!iso) return 'şimdi';
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 60) return diff + ' sn önce';
  if (diff < 3600) return Math.floor(diff/60) + ' dk önce';
  if (diff < 86400) return Math.floor(diff/3600) + ' sa önce';
  return new Date(iso).toLocaleDateString('tr-TR');
}

function getTotalPostCount(username) {
  if (!username) return 0;
  const user = usersDb[username];
  if (user && typeof user.postCount === 'number') return user.postCount;
  return postsDb.filter(p => p.author.username === username).length;
}

async function incrementPostCount(username, delta = 1) {
  if (!username) return;
  const u = usersDb[username];
  if (!u) return;
  if (typeof u.postCount !== 'number') u.postCount = postsDb.filter(p => p.author.username === username).length;
  u.postCount = Math.max(0, u.postCount + delta);
  usersDb[username] = u;
  await saveUsersToDB();
}

function sanitizeUserObj(u) {
  return {
    username: u.username, fullname: u.fullname, bio: u.bio, color: u.color, avatarUrl: u.avatarUrl,
    followers: u.followers || [], following: u.following || [],
    neonColor: u.neonColor || null, hasTik: u.hasTik || false, tikRengi: u.tikRengi || null,
    postCount: typeof u.postCount === 'number' ? u.postCount : postsDb.filter(p => p.author.username === u.username).length
  };
}

function logSystem(msg) {
  const box = $('system-log-box');
  if (!box) return;
  const time = new Date().toLocaleTimeString('tr-TR', { hour12:false });
  const entry = document.createElement('div');
  entry.className = 'leading-tight hover:text-white transition';
  entry.innerHTML = `<span class="text-slate-600">[${time}]</span> ${escapeHtml(msg)}`;
  box.appendChild(entry);
  box.scrollTop = box.scrollHeight;
}

function showToast(message, type = 'info') {
  const container = $('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  const colors = { success:'bg-emerald-950 border-emerald-800 text-emerald-200', error:'bg-rose-950 border-rose-800 text-rose-200',
    warning:'bg-amber-950 border-amber-800 text-amber-200', info:'bg-cyan-950 border-cyan-800 text-cyan-200',
    mod:'bg-gradient-to-r from-amber-950 to-rose-950 border-amber-600 text-amber-100' };
  toast.className = `p-3 rounded-xl border text-xs font-medium shadow-xl backdrop-blur-md pointer-events-auto transition-all transform duration-300 translate-y-2 opacity-0 ${colors[type]||colors.info}`;
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('translate-y-2','opacity-0'), 10);
  setTimeout(() => { toast.classList.add('opacity-0'); setTimeout(() => toast.remove(), 300); }, 4000);
}

function showModal(title, bodyText) {
  $('modal-title').innerText = title;
  $('modal-body').innerText = bodyText;
  $('modal-overlay').classList.remove('hidden');
}
function closeModal() { $('modal-overlay').classList.add('hidden'); }

function ensureUserExists(username, partialData = {}) {
  if (!username) return null;
  if (usersDb[username]) {
    if (typeof usersDb[username].postCount !== 'number') usersDb[username].postCount = postsDb.filter(p => p.author.username === username).length;
    return usersDb[username];
  }
  const fallback = {
    username, fullname: partialData.fullname || username, bio: partialData.bio || 'MSZ MEDYA üyesi.',
    color: partialData.color || USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)],
    avatarUrl: partialData.avatarUrl || null, followers: partialData.followers || [], following: partialData.following || [],
    neonColor: partialData.neonColor || null, hasTik: partialData.hasTik || false, tikRengi: partialData.tikRengi || null,
    postCount: typeof partialData.postCount === 'number' ? partialData.postCount : 0,
    joinedAt: partialData.joinedAt || new Date().toISOString()
  };
  usersDb[username] = fallback;
  return fallback;
}

// ============================================================
// YETKİ KONTROLLERİ
// ============================================================
function isMod() {
  return currentUser && currentUser.hasTik && currentUser.tikRengi === 'red';
}
function isSuperMod() {
  return currentUser && currentUser.hasTik && currentUser.tikRengi === 'purple';
}
function hasModPermission() {
  return isMod() || isSuperMod();
}
function hasSuperModPermission() {
  return isSuperMod();
}

// ============================================================
// BAN SİSTEMİ
// ============================================================
function isUserBanned(username) {
  if (!username) return null;
  const ban = bannedUsers.find(b => b.username === username);
  if (!ban) return null;
  if (new Date(ban.until).getTime() <= Date.now()) return null; // süresi geçmiş
  return ban;
}

function isBanned() {
  return currentUser ? !!isUserBanned(currentUser.username) : false;
}

function getBanRemaining(ban) {
  const diff = new Date(ban.until).getTime() - Date.now();
  if (diff <= 0) return 'Süresi doldu';
  const hours = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  if (hours > 0) return `${hours}sa ${mins}dk`;
  return `${mins} dk`;
}

function showBanBanner(ban) {
  const banner = $('ban-banner');
  if (!banner) return;
  if (!ban) { banner.classList.add('hidden'); return; }
  banner.classList.remove('hidden');
  $('ban-banner-info').innerText = `Süre: ${getBanRemaining(ban)} | Sebep: ${ban.reason} | Banlayan: @${ban.by}`;
  updateBanBannerTimer(ban);
}

function updateBanBannerTimer(ban) {
  const timer = $('ban-banner-timer');
  if (!timer) return;
  timer.innerText = getBanRemaining(ban);
}

function startBanCheckInterval() {
  if (banCheckInterval) clearInterval(banCheckInterval);
  banCheckInterval = setInterval(async () => {
    if (!currentUser) return;
    const ban = isUserBanned(currentUser.username);
    if (ban) {
      showBanBanner(ban);
      updateBanBannerTimer(ban);
    } else {
      // Ban kalkmış olabilir
      const oldBanner = $('ban-banner');
      if (oldBanner && !oldBanner.classList.contains('hidden')) {
        oldBanner.classList.add('hidden');
        showToast('✅ Banınız kaldırıldı!', 'success');
        renderFeed();
        updateUserUI();
      }
    }
    // Süresi geçen banları temizle
    const now = Date.now();
    const beforeLen = bannedUsers.length;
    bannedUsers = bannedUsers.filter(b => new Date(b.until).getTime() > now);
    if (bannedUsers.length !== beforeLen) {
      await saveBannedUsersToDB();
      if (activeTab === 'mod') renderModPanel();
    }
  }, 30000);
}

async function modBanUser(targetUsername, hours, reason) {
  if (!hasModPermission()) { showToast('Yetkiniz yok.', 'error'); return; }
  if (targetUsername === currentUser.username) { showToast('Kendini banlayamazsın.', 'warning'); return; }
  if (isSuperMod() === false && isMod() === true) {
    // Kırmızı mod, mor tikliyi banlayamaz
    const target = usersDb[targetUsername];
    if (target && target.hasTik && target.tikRengi === 'purple') {
      showToast('Mor tikli birini banlayamazsın.', 'error'); return;
    }
  }
  hours = Math.max(BAN_MIN_HOURS, Math.min(BAN_MAX_HOURS, hours));
  const until = new Date(Date.now() + hours * 3600000).toISOString();
  // Önceki banı kaldır
  bannedUsers = bannedUsers.filter(b => b.username !== targetUsername);
  const ban = { id: 'ban_' + Date.now() + '_' + Math.random().toString(36).substring(2,6), username: targetUsername, until, reason, by: currentUser.username, bannedAt: new Date().toISOString() };
  bannedUsers.push(ban);
  await saveBannedUsersToDB();
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.MOD, JSON.stringify({ type: 'BAN_USER', ban }));
  }
  showToast(`🔨 @${targetUsername} ${hours} saat banlandı.`, 'mod');
  // Hedef kullanıcıya bildirim gönder (MQTT DM gibi özel topic)
  if (mqttClient?.connected) {
    const notifMsg = { id: 'notif_' + Date.now(), to: targetUsername, from: 'MOD', text: `Hesabınız ${hours} saat süreyle askıya alındı. Sebep: ${reason}`, type: 'mod_ban', timestamp: new Date().toISOString() };
    mqttClient.publish(TOPICS.MOD, JSON.stringify({ type: 'MOD_NOTIFY', notif: notifMsg }));
  }
  renderModPanel();
}

async function modUnbanUser(targetUsername) {
  if (!hasModPermission()) { showToast('Yetkiniz yok.', 'error'); return; }
  const ban = bannedUsers.find(b => b.username === targetUsername);
  if (!ban) return;
  bannedUsers = bannedUsers.filter(b => b.username !== targetUsername);
  await saveBannedUsersToDB();
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.MOD, JSON.stringify({ type: 'UNBAN_USER', username: targetUsername }));
  }
  showToast(`✅ @${targetUsername} banı kaldırıldı.`, 'success');
  renderModPanel();
}

// ============================================================
// TİK KALDIRMA (sadece süper mod)
// ============================================================
async function modRemoveTik(targetUsername) {
  if (!hasSuperModPermission()) { showToast('Sadece mor tikli kaldırabilir.', 'error'); return; }
  if (targetUsername === currentUser.username) { showToast('Kendi tikini kaldıramazsın.', 'warning'); return; }
  const target = ensureUserExists(targetUsername);
  if (!target) return;
  if (!target.hasTik) { showToast('Bu kullanıcının tiki yok.', 'info'); return; }
  if (!confirm(`@${targetUsername} kullanıcısının tikini kaldırmak istediğine emin misin?`)) return;
  target.hasTik = false;
  target.tikRengi = null;
  usersDb[targetUsername] = target;
  await saveUsersToDB();
  postsDb.forEach(p => { if (p.author.username === targetUsername) { p.author.hasTik = false; p.author.tikRengi = null; } });
  await savePostsToDB();
  commentsDb.forEach(c => { if (c.author.username === targetUsername) { c.author.hasTik = false; c.author.tikRengi = null; } });
  await saveCommentsToDB();
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.MOD, JSON.stringify({ type: 'REMOVE_TIK', username: targetUsername, by: currentUser.username }));
    mqttClient.publish(TOPICS.USERS, JSON.stringify({ type: 'PRESENCE', user: sanitizeUserObj(target) }));
  }
  showToast(`✅ @${targetUsername} tikini kaldırdın.`, 'mod');
  renderModPanel();
  renderUsersLeaderboard();
}

// ============================================================
// MOD GÖNDERİ SİLME
// ============================================================
function openModDeletePostModal(postId) {
  if (!hasModPermission()) { showToast('Yetkiniz yok.', 'error'); return; }
  const post = postsDb.find(p => p.id === postId);
  if (!post) return;
  modDeletePostTarget = postId;
  const author = ensureUserExists(post.author.username, post.author);
  $('mod-delete-post-info').innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 shrink-0">${renderAvatar(author, "w-10 h-10 text-sm")}</div>
      <div class="min-w-0">
        <div class="font-bold text-xs text-white">${escapeHtml(author.fullname)}</div>
        <div class="text-[10px] text-slate-500">@${author.username}</div>
      </div>
    </div>
    <p class="text-xs text-slate-300 mt-2 line-clamp-2 italic">"${escapeHtml((post.text || '').substring(0, 120))}"</p>
  `;
  $('mod-delete-post-reason').value = '';
  $('mod-delete-post-modal').classList.remove('hidden');
}
function closeModDeletePostModal() { $('mod-delete-post-modal').classList.add('hidden'); modDeletePostTarget = null; }

async function confirmModDeletePost() {
  if (!modDeletePostTarget || !hasModPermission()) return;
  const reason = $('mod-delete-post-reason').value.trim();
  if (!reason) { showToast('Sebep yazmak zorunlu!', 'warning'); return; }
  const post = postsDb.find(p => p.id === modDeletePostTarget);
  if (!post) { closeModDeletePostModal(); return; }
  const authorUsername = post.author.username;
  const postText = post.text || '';
  
  commentsDb = commentsDb.filter(c => c.postId !== modDeletePostTarget);
  await saveCommentsToDB();
  postsDb = postsDb.filter(p => p.id !== modDeletePostTarget);
  await savePostsToDB();
  await incrementPostCount(authorUsername, -1);
  
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.MOD, JSON.stringify({
      type: 'MOD_DELETE_POST',
      postId: modDeletePostTarget,
      reason,
      by: currentUser.username,
      authorUsername,
      postText: postText.substring(0, 80)
    }));
  }
  
  closeModDeletePostModal();
  renderFeed(); renderProfileTab(); updateUserUI();
  showToast(`✅ Gönderi silindi ve @${authorUsername} bilgilendirildi.`, 'mod');
}

// ============================================================
// TİK KONTROLÜ
// ============================================================
function containsForbidden(text) {
  const forbiddenWords = /\b(fuck|siktir|amk|orospu|piç|göt|yarrak|amcık|sik|kahpe|kaltak|şerefsiz|hain|döl|sperm|çük|yavşak|ibne|puşt|gavat|pezevenk|şişko|çomar|mal|embesil|gerizekalı|salak|aptal|dangalak|mankafa)\b/i;
  return forbiddenWords.test(text);
}
function censorText(text) { return containsForbidden(text) ? '****' : text; }

function isTrustedUrl(url) {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : 'https://' + url);
    const hostname = urlObj.hostname.toLowerCase().replace(/^www\./, '');
    return TRUSTED_DOMAINS.some(d => hostname === d || hostname.endsWith('.' + d));
  } catch(e) { return false; }
}
function openSafeLink(url) {
  const href = url.startsWith('http') ? url : 'https://' + url;
  if (isTrustedUrl(href)) window.open(href, '_blank', 'noopener,noreferrer');
  else showLinkWarning(href);
}
function showLinkWarning(url) {
  const old = document.getElementById('link-warning-modal');
  if (old) old.remove();
  const modal = document.createElement('div');
  modal.id = 'link-warning-modal';
  modal.className = 'fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4';
  modal.innerHTML = `<div class="bg-slate-900 border border-amber-500/50 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 mx-4">
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0"><i class="fa-solid fa-triangle-exclamation text-amber-400 text-xl"></i></div>
      <h3 class="text-lg font-bold text-amber-400">Güvenlik Uyarısı</h3>
    </div>
    <p class="text-sm text-slate-300">Bu linkin nereden geldiği belirsiz. <strong class="text-white">Sorumluluk platformumuzda değildir</strong>.</p>
    <div class="bg-slate-950 rounded-xl p-3 border border-slate-800"><p class="text-xs text-cyan-400 font-mono break-all">${escapeHtml(url)}</p></div>
    <div class="flex justify-end gap-2 pt-2">
      <button onclick="document.getElementById('link-warning-modal').remove()" class="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl">Hayır</button>
      <button id="link-warning-confirm" class="px-4 py-2 bg-amber-500 text-white text-xs font-semibold rounded-xl">Evet, Aç</button>
    </div>
  </div>`;
  document.body.appendChild(modal);
  modal.querySelector('#link-warning-confirm').addEventListener('click', () => { window.open(url, '_blank', 'noopener,noreferrer'); modal.remove(); });
}
function convertLinks(text) {
  return text.replace(/(https?:\/\/[^\s]+|www\.[^\s]+)/gi, (url) => {
    const href = url.startsWith('http') ? url : 'https://' + url;
    const trusted = isTrustedUrl(href);
    const icon = trusted ? '' : ' <i class="fa-solid fa-shield-halved text-[10px] opacity-70"></i>';
    return `<a href="javascript:void(0)" onclick="openSafeLink('${href.replace(/'/g, "\\'")}')" class="message-link ${trusted ? '' : 'link-untrusted'}" title="${trusted ? 'Güvenli' : 'Bilinmeyen'}">${escapeHtml(url)}${icon}</a>`;
  });
}
function renderText(text) {
  const censored = censorText(text);
  return censored === '****' ? '****' : convertLinks(censored);
}

// ============================================================
// EMOJI
// ============================================================
function openEmojiPanel(targetInputId) {
  if (isBanned()) { showToast('Banlıyken emoji kullanamazsın.', 'warning'); return; }
  emojiTargetInput = targetInputId;
  const panel = $('emoji-panel');
  const grid = $('emoji-grid');
  grid.innerHTML = EMOJI_LIST.map(e => `<button type="button" onclick="insertEmoji('${e}')" class="text-xl hover:bg-slate-800 rounded-lg p-1 transition">${e}</button>`).join('');
  panel.classList.remove('hidden');
  setTimeout(() => document.addEventListener('click', closeEmojiPanelOutside), 10);
}
function closeEmojiPanelOutside(e) {
  const panel = $('emoji-panel');
  if (!panel) return;
  if (!e.target.closest('#emoji-panel') && !e.target.closest('[onclick*="openEmojiPanel"]')) closeEmojiPanel();
}
function closeEmojiPanel() {
  const panel = $('emoji-panel');
  if (panel) panel.classList.add('hidden');
  document.removeEventListener('click', closeEmojiPanelOutside);
}
function insertEmoji(emoji) {
  if (!emojiTargetInput) return;
  const input = $(emojiTargetInput);
  if (!input) return;
  const start = input.selectionStart || input.value.length;
  const end = input.selectionEnd || input.value.length;
  input.value = input.value.substring(0, start) + emoji + input.value.substring(end);
  input.focus();
  input.selectionStart = input.selectionEnd = start + emoji.length;
  if (emojiTargetInput === 'post-input') input.dispatchEvent(new Event('input'));
}

// ============================================================
// MEDYA (POST)
// ============================================================
function handlePostMediaSelect(event) {
  if (isBanned()) { showToast('Banlıyken medya yükleyemezsin.', 'warning'); event.target.value = ''; return; }
  const file = event.target.files[0];
  if (!file) return;
  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');
  const isAudio = file.type.startsWith('audio/');
  if (!isImage && !isVideo && !isAudio) { showToast('Sadece foto/video/ses!', 'error'); event.target.value = ''; return; }
  const maxSize = isImage ? 2*1024*1024 : isVideo ? 5*1024*1024 : 2*1024*1024;
  if (file.size > maxSize) { showToast(`Max ${maxSize/(1024*1024)}MB!`, 'error'); event.target.value = ''; return; }
  const reader = new FileReader();
  reader.onload = (e) => {
    let data = e.target.result;
    if (isImage) {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let w = img.width, h = img.height;
        const maxDim = 1200;
        if (w > h) { if (w > maxDim) { h *= maxDim / w; w = maxDim; } } else { if (h > maxDim) { w *= maxDim / h; h = maxDim; } }
        canvas.width = w; canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        const compressed = canvas.toDataURL('image/jpeg', 0.85);
        pendingPostMedia = { type: 'image', data: compressed, name: file.name, size: compressed.length };
        renderPostMediaPreview();
      };
      img.src = data;
    } else {
      pendingPostMedia = { type: isVideo ? 'video' : 'audio', data, name: file.name, size: file.size };
      renderPostMediaPreview();
    }
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

function renderPostMediaPreview() {
  const container = $('post-media-preview');
  if (!container) return;
  if (!pendingPostMedia) { container.classList.add('hidden'); container.innerHTML = ''; return; }
  container.classList.remove('hidden');
  const m = pendingPostMedia;
  let preview = '';
  if (m.type === 'image') preview = `<img src="${m.data}" class="w-full max-h-60 object-contain rounded-lg bg-slate-900 mx-auto cursor-zoom-in" onclick="openMediaLightbox('${m.data}', 'image')">`;
  else if (m.type === 'video') preview = `<video src="${m.data}" controls class="w-full max-h-60 rounded-lg bg-slate-900"></video>`;
  else if (m.type === 'audio') preview = `<audio src="${m.data}" controls class="w-full"></audio>`;
  container.innerHTML = `<div class="space-y-2">${preview}<div class="flex items-center justify-between gap-2"><span class="text-[10px] text-slate-400 truncate flex-1">${escapeHtml(m.name)} (${(m.size/1024).toFixed(0)} KB)</span><button onclick="removePostMedia()" class="px-2 py-1 bg-rose-600/20 text-rose-400 text-[10px] font-semibold rounded-lg"><i class="fa-solid fa-xmark mr-1"></i>Kaldır</button></div></div>`;
}
function removePostMedia() { pendingPostMedia = null; renderPostMediaPreview(); }

function openMediaLightbox(src, type) {
  const old = document.getElementById('media-lightbox');
  if (old) old.remove();
  const lb = document.createElement('div');
  lb.id = 'media-lightbox';
  lb.className = 'fixed inset-0 bg-slate-950/95 z-[100] flex items-center justify-center p-4';
  lb.onclick = () => lb.remove();
  if (type === 'image') lb.innerHTML = `<img src="${src}" class="max-w-full max-h-full object-contain rounded-xl" onclick="event.stopPropagation()">`;
  else if (type === 'video') lb.innerHTML = `<video src="${src}" controls autoplay class="max-w-full max-h-full rounded-xl" onclick="event.stopPropagation()"></video>`;
  const closeBtn = document.createElement('button');
  closeBtn.className = 'absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center z-10';
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  closeBtn.onclick = (e) => { e.stopPropagation(); lb.remove(); };
  lb.appendChild(closeBtn);
  document.body.appendChild(lb);
}

// ============================================================
// ÖDÜL
// ============================================================
function getUnlockedTiers() {
  if (!currentUser) return [];
  const followerCount = (currentUser.followers || []).length;
  return REWARD_TIERS.filter(t => followerCount >= t.count);
}
async function applyNeonColor(colorHex) {
  if (!currentUser || isBanned()) return;
  currentUser.neonColor = colorHex;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  publishPresence();
  updateUserUI(); renderProfileTab(); renderUsersLeaderboard(); renderFeed(); renderDmUserList();
  showToast(colorHex ? '✨ Neon güncellendi!' : 'Neon kapatıldı.', colorHex ? 'success' : 'info');
}
function renderRewardSelector() {
  const container = document.getElementById('reward-selector-container');
  if (!container) return;
  const followerCount = (currentUser.followers || []).length;
  const unlockedTiers = getUnlockedTiers();
  const activeColor = currentUser.neonColor || null;
  if (unlockedTiers.length === 0) {
    container.innerHTML = `<div class="bg-slate-900 border border-slate-800 rounded-2xl p-4"><div class="bg-slate-950/50 border border-slate-800 rounded-xl p-3"><p class="text-[11px] text-slate-400"><i class="fa-solid fa-lock text-slate-600 mr-1"></i><strong class="text-amber-400">Ödül:</strong> 10 takipçi → Neon Mor, 50 → Neon Mavi, 100 → Neon Altın</p></div></div>`;
    return;
  }
  container.innerHTML = `<div class="bg-slate-900 border border-amber-500/30 rounded-2xl p-4 shadow-lg"><div class="flex items-center justify-between gap-2 flex-wrap mb-3"><h4 class="text-sm font-bold text-amber-400 flex items-center gap-2"><i class="fa-solid fa-star"></i> Neon Renk Seçimi</h4><span class="text-[10px] text-slate-400 bg-slate-950 px-2 py-1 rounded-lg">${followerCount} takipçi</span></div><div class="flex gap-2 flex-wrap"><button onclick="applyNeonColor(null)" class="px-3 py-2 text-[11px] font-semibold rounded-lg transition ${!activeColor ? 'bg-slate-700 text-white ring-2 ring-slate-500' : 'bg-slate-800 text-slate-300'}"><i class="fa-solid fa-ban mr-1"></i> Kapalı</button>${unlockedTiers.map(t => `<button onclick="applyNeonColor('${t.color}')" class="px-3 py-2 text-[11px] font-semibold rounded-lg transition ${activeColor === t.color ? 'ring-2 ring-white' : ''}" style="background: ${t.color}33; color: ${t.color}; border: 1px solid ${t.color}66;">${t.icon} ${t.name}</button>`).join('')}</div></div>`;
}

// ============================================================
// DM REQUEST
// ============================================================
function canMessageUser(targetUsername) {
  if (targetUsername === currentUser.username) return false;
  const existingDM = dmsDb.some(m => (m.sender === currentUser.username && m.recipient === targetUsername) || (m.sender === targetUsername && m.recipient === currentUser.username));
  if (existingDM) return true;
  return dmRequestsDb.some(r => r.status === 'accepted' && ((r.from === currentUser.username && r.to === targetUsername) || (r.from === targetUsername && r.to === currentUser.username)));
}
function getDmRequestStatus(targetUsername) {
  const req = dmRequestsDb.find(r => (r.from === currentUser.username && r.to === targetUsername) || (r.from === targetUsername && r.to === currentUser.username));
  return req ? req.status : null;
}
function sendDmRequest(targetUsername) {
  if (!currentUser || !targetUsername) return;
  if (isBanned()) { showToast('Banlıyken istek gönderemezsin.', 'warning'); return; }
  if (targetUsername === currentUser.username) { showToast('Kendine istek gönderemezsin.', 'warning'); return; }
  const existing = dmRequestsDb.find(r => (r.from === currentUser.username && r.to === targetUsername) || (r.from === targetUsername && r.to === currentUser.username));
  if (existing) {
    if (existing.status === 'pending') showToast('Zaten bekleyen istek var.', 'info');
    else if (existing.status === 'accepted') showToast('Zaten arkadaşsınız.', 'info');
    else showToast('Bu kullanıcı isteğini reddetti.', 'warning');
    return;
  }
  const newReq = { id: 'dmreq_' + Date.now() + '_' + Math.random().toString(36).substring(2,6), from: currentUser.username, fromFullname: currentUser.fullname, fromAvatar: currentUser.avatarUrl || null, fromColor: currentUser.color || 'bg-indigo-600', to: targetUsername, status: 'pending', timestamp: new Date().toISOString() };
  dmRequestsDb.push(newReq);
  saveDmRequestsToDB();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.DM_REQUESTS, JSON.stringify({ type: 'NEW_DM_REQUEST', request: newReq }));
  showToast(`✅ @${targetUsername} isteği gönderildi!`, 'success');
  renderDmSearchResults();
}
async function acceptDmRequest(requestId) {
  const req = dmRequestsDb.find(r => r.id === requestId);
  if (!req) return;
  req.status = 'accepted';
  await saveDmRequestsToDB();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.DM_REQUESTS, JSON.stringify({ type: 'DM_REQUEST_RESPONSE', request: req, action: 'accept' }));
  closeDmRequestModal();
  showToast(`✅ @${req.from} ile mesajlaşabilirsin!`, 'success');
  renderDmUserList();
  selectChatUser(req.from);
}
async function rejectDmRequest(requestId) {
  const req = dmRequestsDb.find(r => r.id === requestId);
  if (!req) return;
  req.status = 'rejected';
  await saveDmRequestsToDB();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.DM_REQUESTS, JSON.stringify({ type: 'DM_REQUEST_RESPONSE', request: req, action: 'reject' }));
  closeDmRequestModal();
  showToast(`❌ @${req.from} reddedildi.`, 'info');
  renderDmUserList();
}
function openDmRequestModal(requestId) {
  const req = dmRequestsDb.find(r => r.id === requestId);
  if (!req) return;
  const fromUser = ensureUserExists(req.from, { fullname: req.fromFullname, avatarUrl: req.fromAvatar, color: req.fromColor });
  $('dm-request-modal-body').innerHTML = `<div class="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800"><div class="w-12 h-12 shrink-0">${renderAvatar(fromUser, "w-12 h-12 text-base")}</div><div><div class="font-bold text-sm text-white">${getUserDisplayName(fromUser)}</div><div class="text-xs text-slate-500">@${fromUser.username}</div></div></div><p class="text-xs text-slate-300"><strong class="text-cyan-400">@${req.from}</strong> sana mesaj isteği gönderdi.</p><div class="flex justify-end gap-2 pt-2"><button onclick="rejectDmRequest('${req.id}')" class="px-4 py-2 bg-rose-600/20 text-rose-400 text-xs font-semibold rounded-xl"><i class="fa-solid fa-xmark mr-1"></i> Reddet</button><button onclick="acceptDmRequest('${req.id}')" class="px-4 py-2 bg-cyan-500 text-white text-xs font-semibold rounded-xl"><i class="fa-solid fa-check mr-1"></i> Kabul Et</button></div>`;
  $('dm-request-modal').classList.remove('hidden');
}
function closeDmRequestModal() { $('dm-request-modal').classList.add('hidden'); }

// ============================================================
// RENDER
// ============================================================
function renderAvatar(user, size = "w-10 h-10 text-sm") {
  if (user?.avatarUrl) return `<img src="${user.avatarUrl}" class="${size} object-cover rounded-xl shadow" alt="Avatar" loading="lazy">`;
  const letter = user?.fullname ? user.fullname.charAt(0).toUpperCase() : (user?.username ? user.username.charAt(0).toUpperCase() : '?');
  const color = user?.color || 'bg-indigo-600';
  return `<div class="${size} rounded-xl ${color} text-white flex items-center justify-center font-bold shadow">${letter}</div>`;
}
function showTikBadge(user) {
  if (user?.hasTik) {
    const file = user.tikRengi === 'purple' ? 'tick-p.png' : user.tikRengi === 'red' ? 'tick-r.png' : 'tick-b.png';
    return `<img src="${file}" class="tik-rozet" alt="Tik">`;
  }
  return '';
}
function getUserDisplayName(user) {
  if (!user) return '?';
  let name = escapeHtml(user.fullname || user.username);
  if ((user.followers||[]).length >= 10 && user.neonColor) name = `<span class="neon-text" style="color:${user.neonColor}">${name}</span>`;
  return name + showTikBadge(user);
}
function getGroupEmojiForUser(username) {
  for (const g of groupsDb) if (g.members?.includes(username) && g.emoji) return g.emoji + ' ';
  return '';
}

// ============================================================
// AUTH
// ============================================================
function switchAuthTab(tab) {
  const login = $('login-form'), reg = $('register-form');
  const tabLogin = $('tab-login-btn'), tabReg = $('tab-register-btn');
  const forgotLink = $('forgot-password-link-container');
  if (tab === 'login') {
    login.classList.remove('hidden'); reg.classList.add('hidden'); forgotLink.classList.remove('hidden');
    tabLogin.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition bg-cyan-500 text-white shadow';
    tabReg.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition text-slate-400 hover:text-white';
  } else {
    login.classList.add('hidden'); reg.classList.remove('hidden'); forgotLink.classList.add('hidden');
    tabReg.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition bg-indigo-500 text-white shadow';
    tabLogin.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition text-slate-400 hover:text-white';
  }
}
async function handleRegister(e) {
  e.preventDefault();
  const username = $('reg-username').value.trim().toLowerCase();
  const password = $('reg-password').value;
  if (usersDb[username]) { showModal('Hata', 'Bu kullanıcı adı alınmış!'); return; }
  const newUser = { username, fullname: username, bio: 'MSZ MEDYA üyesi.', password, color: USER_COLORS[Math.floor(Math.random()*USER_COLORS.length)], avatarUrl: null, followers: [], following: [], neonColor: null, hasTik: false, tikRengi: null, postCount: 0, joinedAt: new Date().toISOString() };
  usersDb[username] = newUser;
  await saveUsersToDB();
  currentUser = newUser;
  sessionStorage.setItem('sp_social_active_user', username);
  showToast('Kayıt başarılı!', 'success');
  launchMainApp();
}
async function handleLogin(e) {
  e.preventDefault();
  const username = $('login-username').value.trim().toLowerCase();
  const password = $('login-password').value;
  const remember = $('remember-me').checked;
  const user = usersDb[username];
  if (!user || user.password !== password) { showModal('Giriş Başarısız', 'Kullanıcı adı veya şifre hatalı.'); return; }
  if (!user.followers) user.followers = [];
  if (!user.following) user.following = [];
  if (typeof user.postCount !== 'number') user.postCount = postsDb.filter(p => p.author.username === username).length;
  currentUser = user;
  sessionStorage.setItem('sp_social_active_user', username);
  if (remember) { localStorage.setItem('sp_social_username', username); localStorage.setItem('sp_social_password', password); }
  else { localStorage.removeItem('sp_social_username'); localStorage.removeItem('sp_social_password'); }
  showToast(`Hoş geldin, ${user.fullname}!`, 'info');
  launchMainApp();
}
function logout() {
  sessionStorage.removeItem('sp_social_active_user');
  if (presenceInterval) { clearInterval(presenceInterval); presenceInterval = null; }
  if (banCheckInterval) { clearInterval(banCheckInterval); banCheckInterval = null; }
  if (mqttClient) { try { mqttClient.end(true); } catch(e){} mqttClient = null; }
  currentUser = null; selectedDmUser = null; viewingPublicUsername = null;
  $('main-app').classList.add('hidden');
  $('auth-screen').classList.remove('hidden');
  $('ban-banner').classList.add('hidden');
  const lu = $('login-username'), lp = $('login-password');
  if (lu) lu.value = '';
  if (lp) lp.value = '';
  const savedU = localStorage.getItem('sp_social_username');
  if (savedU && lu) lu.value = savedU;
  showToast('Çıkış yapıldı.', 'info');
}
function launchMainApp() {
  $('auth-screen').classList.add('hidden');
  $('main-app').classList.remove('hidden');
  console.log('🚀 MSZ MEDYA v4.0!', currentUser.username);
  updateUserUI();
  updateModUI();
  initNetworkConnection();
  renderFeed();
  renderDmUserList();
  renderUsersLeaderboard();
  renderGroups();
  updateNotificationBadge();
  updateGroupCreateButton();
  // Ban kontrolü
  const ban = isUserBanned(currentUser.username);
  if (ban) showBanBanner(ban);
  startBanCheckInterval();
}

// ============================================================
// PASSWORD
// ============================================================
function openForgotPasswordModal() {
  if (!currentUser) { showModal('Hata', 'Önce giriş yapmalısın!'); return; }
  $('forgot-password-modal').classList.remove('hidden');
  $('forgot-username').value = currentUser.username;
  $('forgot-username').disabled = true;
  $('forgot-security-answer').value = '';
  $('forgot-new-password').value = '';
  $('forgot-new-password-confirm').value = '';
}
function closeForgotPasswordModal() { $('forgot-password-modal').classList.add('hidden'); }
async function resetPassword(e) {
  e.preventDefault();
  const answer = $('forgot-security-answer').value.trim().toLowerCase();
  const newPass = $('forgot-new-password').value;
  const confirmPass = $('forgot-new-password-confirm').value;
  if (!currentUser) return;
  if (answer !== GUVENLIK_CEVABI) { showModal('Hata', 'Güvenlik cevabı yanlış!'); return; }
  if (newPass.length < 4) { showModal('Hata', 'Şifre en az 4 karakter!'); return; }
  if (newPass !== confirmPass) { showModal('Hata', 'Şifreler eşleşmiyor!'); return; }
  currentUser.password = newPass;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  if (localStorage.getItem('sp_social_username') === currentUser.username) localStorage.setItem('sp_social_password', newPass);
  closeForgotPasswordModal();
  showToast('✅ Şifre sıfırlandı!', 'success');
}
function openChangePasswordModal() {
  $('change-password-modal').classList.remove('hidden');
  $('current-password').value = ''; $('new-password').value = ''; $('new-password-confirm').value = '';
}
function closeChangePasswordModal() { $('change-password-modal').classList.add('hidden'); }
async function changePassword(e) {
  e.preventDefault();
  const current = $('current-password').value;
  const newPass = $('new-password').value;
  const confirmPass = $('new-password-confirm').value;
  if (currentUser.password !== current) { showModal('Hata', 'Mevcut şifre yanlış!'); return; }
  if (newPass.length < 4) { showModal('Hata', 'Yeni şifre en az 4 karakter!'); return; }
  if (newPass !== confirmPass) { showModal('Hata', 'Şifreler eşleşmiyor!'); return; }
  currentUser.password = newPass;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  if (localStorage.getItem('sp_social_username') === currentUser.username) localStorage.setItem('sp_social_password', newPass);
  closeChangePasswordModal();
  showToast('Şifre güncellendi!', 'success');
}

// ============================================================
// FOLLOWERS/FOLLOWING
// ============================================================
function openFollowersModal(username) {
  followersModalTarget = username;
  const user = usersDb[username];
  if (!user) { showToast('Kullanıcı bulunamadı.', 'error'); return; }
  $('followers-modal-title').innerText = `${user.fullname} Takipçileri`;
  const list = $('followers-list');
  const followers = user.followers || [];
  if (followers.length === 0) list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz takipçi yok.</div>`;
  else list.innerHTML = followers.map(f => {
    const fu = ensureUserExists(f);
    if (!fu) return '';
    return `<div class="flex items-center justify-between p-2 hover:bg-slate-800 rounded-xl transition"><div class="flex items-center gap-3 cursor-pointer" onclick="openPublicProfileModal('${fu.username}'); closeFollowersModal();"><div class="w-8 h-8 shrink-0">${renderAvatar(fu, "w-8 h-8 text-xs")}</div><div><div class="font-bold text-xs text-white">${getGroupEmojiForUser(fu.username)}${getUserDisplayName(fu)}</div><div class="text-[10px] text-slate-500">@${fu.username}</div></div></div></div>`;
  }).join('');
  $('followers-modal').classList.remove('hidden');
}
function closeFollowersModal() { $('followers-modal').classList.add('hidden'); followersModalTarget = null; }
function openFollowingModal(username) {
  followingModalTarget = username;
  const user = usersDb[username];
  if (!user) return;
  $('following-modal-title').innerText = `${user.fullname} Takip Ettikleri`;
  const list = $('following-list');
  const following = user.following || [];
  if (following.length === 0) list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz kimse takip edilmiyor.</div>`;
  else list.innerHTML = following.map(f => {
    const fu = ensureUserExists(f);
    if (!fu) return '';
    return `<div class="flex items-center justify-between p-2 hover:bg-slate-800 rounded-xl transition"><div class="flex items-center gap-3 cursor-pointer" onclick="openPublicProfileModal('${fu.username}'); closeFollowingModal();"><div class="w-8 h-8 shrink-0">${renderAvatar(fu, "w-8 h-8 text-xs")}</div><div><div class="font-bold text-xs text-white">${getGroupEmojiForUser(fu.username)}${getUserDisplayName(fu)}</div><div class="text-[10px] text-slate-500">@${fu.username}</div></div></div></div>`;
  }).join('');
  $('following-modal').classList.remove('hidden');
}
function closeFollowingModal() { $('following-modal').classList.add('hidden'); followingModalTarget = null; }
function openFollowersModalFromPublic() { if (viewingPublicUsername) openFollowersModal(viewingPublicUsername); }
function openFollowingModalFromPublic() { if (viewingPublicUsername) openFollowingModal(viewingPublicUsername); }

// ============================================================
// GROUPS
// ============================================================
function updateGroupCreateButton() {
  const btn = $('create-group-btn');
  if (!btn) return;
  const banned = isBanned();
  if (!currentUser?.hasTik || banned) {
    btn.disabled = true;
    btn.className = 'px-3 py-1.5 bg-slate-700 text-slate-400 text-xs font-semibold rounded-xl cursor-not-allowed touch-target';
    btn.innerHTML = `<i class="fa-solid fa-lock mr-1"></i> ${banned ? 'Banlı' : 'Tik Gerekli'}`;
  } else {
    btn.disabled = false;
    btn.className = 'px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold rounded-xl shadow transition touch-target';
    btn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> Grup Oluştur`;
  }
}
function openCreateGroupModal() {
  if (isBanned()) { showToast('Banlıyken grup oluşturamazsın.', 'warning'); return; }
  if (!currentUser?.hasTik) { showModal('Tik Gerekli', 'Grup oluşturmak için Tik sahibi olmalısın!'); return; }
  $('create-group-modal').classList.remove('hidden');
  ['group-name','group-desc','group-password','group-emoji','group-tag'].forEach(id => { const el = $(id); if (el) el.value = ''; });
  $('group-type').value = 'public';
  $('group-photo').value = '';
}
function closeCreateGroupModal() { $('create-group-modal').classList.add('hidden'); }
async function createGroup(e) {
  e.preventDefault();
  if (isBanned()) { showToast('Banlıyken grup oluşturamazsın.', 'warning'); return; }
  const name = $('group-name').value.trim();
  const desc = $('group-desc').value.trim();
  const type = $('group-type').value;
  const password = $('group-password').value.trim();
  const emoji = $('group-emoji').value.trim() || '📁';
  const tag = $('group-tag').value.trim();
  const photoInput = $('group-photo');
  if (!name || !desc) { showModal('Hata', 'Ad ve açıklama zorunlu!'); return; }
  let photoData = null;
  if (photoInput.files?.[0]) {
    const reader = new FileReader();
    photoData = await new Promise(resolve => { reader.onload = e => resolve(e.target.result); reader.readAsDataURL(photoInput.files[0]); });
  }
  const newGroup = { id: 'group_' + Date.now() + '_' + Math.random().toString(36).substring(2,7), name, description: desc, type, password: password || null, emoji, tag: tag || null, photo: photoData || null, owner: currentUser.username, members: [currentUser.username], joinRequests: [], createdAt: new Date().toISOString() };
  groupsDb.push(newGroup);
  await saveGroupsToDB();
  closeCreateGroupModal();
  renderGroups();
  showToast('✅ Grup oluşturuldu!', 'success');
  if (mqttClient?.connected) mqttClient.publish(TOPICS.GROUPS, JSON.stringify({ type: 'NEW_GROUP', group: newGroup }));
}
function renderGroups() {
  const container = $('groups-container');
  if (!container) return;
  if (groupsDb.length === 0) { container.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz grup yok.</div>`; return; }
  const sorted = [...groupsDb].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  container.innerHTML = sorted.map(g => {
    const isMember = g.members?.includes(currentUser.username);
    const isOwner = g.owner === currentUser.username;
    return `<div class="group-card bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg cursor-pointer" onclick="openGroupDetail('${g.id}')"><div class="flex items-center gap-4"><div class="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl overflow-hidden flex-shrink-0">${g.photo ? `<img src="${g.photo}" class="w-full h-full object-cover">` : (g.emoji || '📁')}</div><div class="flex-1 min-w-0"><div class="flex items-center gap-2 flex-wrap"><h3 class="font-bold text-white text-sm truncate">${escapeHtml(g.name)}</h3>${isOwner ? '<span class="text-[9px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded font-semibold">Kurucu</span>' : ''}${isMember ? '<span class="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-semibold">Üye</span>' : ''}</div><p class="text-xs text-slate-400 truncate">${escapeHtml(g.description)}</p><div class="flex items-center gap-3 mt-1 text-[10px] text-slate-500"><span>👥 ${g.members?.length || 0} üye</span>${g.tag ? `<span class="text-cyan-400">${escapeHtml(g.tag)}</span>` : ''}</div></div><i class="fa-solid fa-chevron-right text-slate-600 text-xs"></i></div></div>`;
  }).join('');
}
function openGroupDetail(groupId) {
  selectedGroupId = groupId;
  const g = groupsDb.find(x => x.id === groupId);
  if (!g) return;
  $('group-detail-name').innerText = g.name;
  $('group-detail-emoji').innerText = g.emoji || '📁';
  $('group-detail-desc').innerText = g.description;
  $('group-detail-owner').innerText = `Kurucu: @${g.owner}`;
  const typeLabels = { public:'Herkese Açık', request:'İstek Gönder', followers:'Sadece Takipçiler' };
  $('group-detail-type').innerText = typeLabels[g.type] || 'Herkese Açık';
  const photoEl = $('group-detail-photo');
  if (g.photo) photoEl.innerHTML = `<img src="${g.photo}" class="w-full h-full object-cover rounded-2xl">`;
  else { photoEl.innerHTML = g.emoji || '📁'; photoEl.className = 'w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl overflow-hidden'; }
  const isMember = g.members?.includes(currentUser.username);
  const isOwner = g.owner === currentUser.username;
  const hasPassword = g.password?.length > 0;
  const passContainer = $('group-detail-password-container');
  if (hasPassword && !isMember) passContainer.classList.remove('hidden'); else passContainer.classList.add('hidden');
  const joinBtn = $('group-detail-join-btn'), leaveBtn = $('group-detail-leave-btn'), deleteBtn = $('group-detail-delete-btn');
  if (isMember) { joinBtn.classList.add('hidden'); leaveBtn.classList.remove('hidden'); deleteBtn.classList.add('hidden'); if (isOwner) deleteBtn.classList.remove('hidden'); }
  else { joinBtn.classList.remove('hidden'); leaveBtn.classList.add('hidden'); deleteBtn.classList.add('hidden'); joinBtn.innerText = g.type === 'request' ? 'Katılmak İste' : g.type === 'followers' ? 'Takip Et ve Katıl' : 'Gruba Katıl'; }
  const members = g.members || [];
  $('group-detail-member-count').innerText = members.length;
  const membersContainer = $('group-detail-members');
  if (members.length === 0) membersContainer.innerHTML = `<div class="text-xs text-slate-500 text-center py-4">Katılımcı yok.</div>`;
  else membersContainer.innerHTML = members.map(u => { const user = ensureUserExists(u); if (!user) return ''; return `<div class="flex items-center gap-2 p-1.5 hover:bg-slate-800 rounded-lg transition cursor-pointer" onclick="openPublicProfileModal('${u}'); closeGroupDetailModal();"><div class="w-6 h-6 shrink-0">${renderAvatar(user, "w-6 h-6 text-xs")}</div><span class="text-xs text-slate-200">${getGroupEmojiForUser(u)}${escapeHtml(user.fullname)}${u === g.owner ? ' 👑' : ''}</span></div>`; }).join('');
  $('group-detail-modal').classList.remove('hidden');
}
function closeGroupDetailModal() { $('group-detail-modal').classList.add('hidden'); selectedGroupId = null; }
async function joinGroup() {
  if (!selectedGroupId) return;
  if (isBanned()) { showToast('Banlıyken katılamazsın.', 'warning'); return; }
  const g = groupsDb.find(x => x.id === selectedGroupId);
  if (!g) return;
  if (g.password?.length > 0 && $('group-detail-password-input').value.trim() !== g.password) { showToast('❌ Şifre yanlış!', 'error'); return; }
  if (g.type === 'followers' && !currentUser.followers?.includes(g.owner)) { showToast('❌ Kurucuyu takip et!', 'warning'); return; }
  if (g.type === 'request') {
    if (!g.joinRequests) g.joinRequests = [];
    if (!g.joinRequests.includes(currentUser.username)) { g.joinRequests.push(currentUser.username); await saveGroupsToDB(); showToast('✅ İstek gönderildi!', 'success'); renderGroups(); openGroupDetail(selectedGroupId); }
    return;
  }
  if (!g.members?.includes(currentUser.username)) { g.members.push(currentUser.username); await saveGroupsToDB(); showToast('✅ Katıldın!', 'success'); renderGroups(); openGroupDetail(selectedGroupId); updateUserUI(); }
}
async function leaveGroup() {
  if (!selectedGroupId) return;
  const g = groupsDb.find(x => x.id === selectedGroupId);
  if (!g) return;
  if (g.owner === currentUser.username) { showModal('Uyarı', 'Kurucu ayrılamaz.'); return; }
  g.members = g.members.filter(u => u !== currentUser.username);
  await saveGroupsToDB();
  showToast('Ayrıldın.', 'info');
  renderGroups();
  closeGroupDetailModal();
  updateUserUI();
}
async function deleteGroup(groupId) {
  const id = groupId || selectedGroupId;
  if (!id) return;
  const g = groupsDb.find(x => x.id === id);
  if (!g || g.owner !== currentUser.username) return;
  if (!confirm(`"${g.name}" silinsin mi?`)) return;
  groupsDb = groupsDb.filter(x => x.id !== id);
  await saveGroupsToDB();
  showToast('✅ Silindi.', 'success');
  renderGroups();
  closeGroupDetailModal();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.GROUPS, JSON.stringify({ type: 'DELETE_GROUP', groupId: id }));
}

// ============================================================
// DELETE ACCOUNT
// ============================================================
function openDeleteAccountModal() { $('delete-account-modal').classList.remove('hidden'); $('delete-password').value = ''; $('delete-confirm-text').value = ''; }
function closeDeleteAccountModal() { $('delete-account-modal').classList.add('hidden'); }
async function deleteAccount(e) {
  e.preventDefault();
  const password = $('delete-password').value;
  const confirmText = $('delete-confirm-text').value.trim().toLowerCase();
  if (currentUser.password !== password) { showModal('Hata', 'Şifre yanlış!'); return; }
  if (confirmText !== 'hesabımı sil') { showModal('Hata', 'Onay için "hesabımı sil" yaz.'); return; }
  const deletedUsername = currentUser.username;
  if (mqttClient?.connected) mqttClient.publish(TOPICS.USERS, JSON.stringify({ type: 'DELETE_ACCOUNT', username: deletedUsername }));
  const userPosts = postsDb.filter(p => p.author.username === deletedUsername);
  for (const p of userPosts) { postsDb = postsDb.filter(x => x.id !== p.id); commentsDb = commentsDb.filter(c => c.postId !== p.id); }
  await savePostsToDB(); await saveCommentsToDB();
  dmsDb = dmsDb.filter(m => m.sender !== deletedUsername && m.recipient !== deletedUsername);
  dmRequestsDb = dmRequestsDb.filter(r => r.from !== deletedUsername && r.to !== deletedUsername);
  bannedUsers = bannedUsers.filter(b => b.username !== deletedUsername);
  await saveMessagesToDB(); await saveDmRequestsToDB(); await saveBannedUsersToDB();
  const ownedGroups = groupsDb.filter(g => g.owner === deletedUsername);
  for (const g of ownedGroups) groupsDb = groupsDb.filter(x => x.id !== g.id);
  groupsDb.forEach(g => { if (g.members) g.members = g.members.filter(u => u !== deletedUsername); if (g.joinRequests) g.joinRequests = g.joinRequests.filter(u => u !== deletedUsername); });
  await saveGroupsToDB();
  delete usersDb[deletedUsername];
  await saveUsersToDB();
  for (const [username, user] of Object.entries(usersDb)) {
    let changed = false;
    if (user.following?.includes(deletedUsername)) { user.following = user.following.filter(u => u !== deletedUsername); changed = true; }
    if (user.followers?.includes(deletedUsername)) { user.followers = user.followers.filter(u => u !== deletedUsername); changed = true; }
    if (changed) usersDb[username] = user;
  }
  await saveUsersToDB();
  localStorage.removeItem('sp_social_active_user');
  localStorage.removeItem('sp_social_username');
  localStorage.removeItem('sp_social_password');
  sessionStorage.removeItem('sp_social_active_user');
  closeDeleteAccountModal();
  showToast('✅ Hesap silindi.', 'success');
  if (presenceInterval) clearInterval(presenceInterval);
  if (banCheckInterval) clearInterval(banCheckInterval);
  if (mqttClient) { try { mqttClient.end(true); } catch(e){} mqttClient = null; }
  currentUser = null;
  $('main-app').classList.add('hidden');
  $('auth-screen').classList.remove('hidden');
  $('ban-banner').classList.add('hidden');
}

// ============================================================
// SETTINGS
// ============================================================
function toggleSettingsDropdown() { $('settings-dropdown').classList.toggle('hidden'); }
document.addEventListener('click', function(e) {
  const dropdown = $('settings-dropdown');
  if (dropdown && !e.target.closest('.relative') && !dropdown.classList.contains('hidden')) dropdown.classList.add('hidden');
});

// ============================================================
// MQTT
// ============================================================
function initNetworkConnection() {
  const statusBadge = $('status-badge'), statusText = $('status-text');
  logSystem('Sunucu bağlantısı kuruluyor...');
  const clientId = 'sp_client_' + currentUser.username + '_' + Math.random().toString(16).substring(2,8);
  try {
    mqttClient = mqtt.connect(BROKER_URL, { clientId, clean:true, connectTimeout:10000, reconnectPeriod:3000, keepalive:60 });
    mqttClient.on('connect', () => {
      isMqttConnected = true;
      logSystem('Bağlantı kuruldu.');
      statusBadge.className = 'flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium';
      statusText.innerText = 'Canlı Bağlantı';
      ['POSTS','LIKES','USERS','FOLLOWS','COMMENTS','GROUPS','DM_REQUESTS','MOD'].forEach(k => mqttClient.subscribe(TOPICS[k]));
      mqttClient.subscribe(TOPICS.DM + currentUser.username);
      publishPresence();
      mqttClient.publish(TOPICS.USERS, JSON.stringify({ type: 'REQUEST_USERS', from: currentUser.username }));
      if (presenceInterval) clearInterval(presenceInterval);
      presenceInterval = setInterval(publishPresence, PRESENCE_INTERVAL_MS);
    });
    mqttClient.on('message', (topic, payload) => {
      try { const data = JSON.parse(payload.toString()); handleIncomingNetworkData(topic, data); } catch(e) {}
    });
    mqttClient.on('error', () => { isMqttConnected = false; statusText.innerText = 'Hata'; });
    mqttClient.on('offline', () => { isMqttConnected = false; statusText.innerText = 'Çevrimdışı'; });
  } catch(e) {}
}
function publishPresence() {
  if (!mqttClient?.connected || !currentUser) return;
  mqttClient.publish(TOPICS.USERS, JSON.stringify({ type: 'PRESENCE', user: sanitizeUserObj(currentUser) }));
}

// ============================================================
// MQTT HANDLER
// ============================================================
async function handleIncomingNetworkData(topic, data) {
  if (topic === TOPICS.POSTS && data.type === 'NEW_POST') {
    if (!postsDb.some(p => p.id === data.post.id)) {
      postsDb.unshift(data.post);
      if (postsDb.length > MAX_POSTS) postsDb = postsDb.slice(0, MAX_POSTS);
      await savePostsToDB();
      if (data.post.author.username !== currentUser.username) {
        ensureUserExists(data.post.author.username, data.post.author);
        if (typeof usersDb[data.post.author.username].postCount !== 'number') usersDb[data.post.author.username].postCount = 0;
        usersDb[data.post.author.username].postCount++;
        await saveUsersToDB();
        renderUsersLeaderboard();
      }
    }
    renderFeed(); return;
  }
  if (topic === TOPICS.POSTS && data.type === 'DELETE_POST') {
    const deletedPost = postsDb.find(p => p.id === data.postId);
    if (deletedPost && usersDb[deletedPost.author.username] && typeof usersDb[deletedPost.author.username].postCount === 'number' && usersDb[deletedPost.author.username].postCount > 0) {
      usersDb[deletedPost.author.username].postCount--;
      await saveUsersToDB();
    }
    postsDb = postsDb.filter(p => p.id !== data.postId);
    commentsDb = commentsDb.filter(c => c.postId !== data.postId);
    await savePostsToDB(); await saveCommentsToDB();
    renderFeed(); renderProfileTab(); renderUsersLeaderboard();
    return;
  }
  if (topic === TOPICS.LIKES && data.type === 'TOGGLE_LIKE') {
    const target = postsDb.find(p => p.id === data.postId);
    if (target) { target.likes = data.likes; await savePostsToDB(); }
    renderFeed(); return;
  }
  if (topic === TOPICS.USERS && data.type === 'PRESENCE') {
    const rxUser = data.user;
    if (rxUser.username !== currentUser.username) {
      const existing = usersDb[rxUser.username];
      usersDb[rxUser.username] = { ...(existing || {}), ...rxUser, followers: rxUser.followers || existing?.followers || [], following: rxUser.following || existing?.following || [], postCount: typeof rxUser.postCount === 'number' ? rxUser.postCount : (existing?.postCount || 0) };
      await saveUsersToDB();
      renderDmUserList(); renderUsersLeaderboard();
    }
    return;
  }
  if (topic === TOPICS.USERS && data.type === 'REQUEST_USERS') { if (data.from !== currentUser.username) publishPresence(); return; }
  if (topic === TOPICS.USERS && data.type === 'DELETE_ACCOUNT') {
    const deleted = data.username;
    if (deleted === currentUser.username) return;
    postsDb = postsDb.filter(p => p.author.username !== deleted);
    commentsDb = commentsDb.filter(c => c.author?.username !== deleted);
    dmsDb = dmsDb.filter(m => m.sender !== deleted && m.recipient !== deleted);
    dmRequestsDb = dmRequestsDb.filter(r => r.from !== deleted && r.to !== deleted);
    bannedUsers = bannedUsers.filter(b => b.username !== deleted);
    groupsDb.forEach(g => { if (g.members) g.members = g.members.filter(u => u !== deleted); if (g.joinRequests) g.joinRequests = g.joinRequests.filter(u => u !== deleted); });
    groupsDb = groupsDb.filter(g => g.owner !== deleted);
    delete usersDb[deleted];
    for (const [uname, user] of Object.entries(usersDb)) {
      if (user.following?.includes(deleted)) user.following = user.following.filter(u => u !== deleted);
      if (user.followers?.includes(deleted)) user.followers = user.followers.filter(u => u !== deleted);
    }
    await saveUsersToDB(); await savePostsToDB(); await saveCommentsToDB(); await saveMessagesToDB(); await saveDmRequestsToDB(); await saveBannedUsersToDB(); await saveGroupsToDB();
    renderFeed(); renderDmUserList(); renderUsersLeaderboard(); renderGroups();
    return;
  }
  if (topic === TOPICS.FOLLOWS && data.type === 'FOLLOW_UPDATE') {
    if (usersDb[data.targetUsername]) usersDb[data.targetUsername].followers = data.followers;
    if (usersDb[data.followerUsername]) usersDb[data.followerUsername].following = data.following;
    await saveUsersToDB();
    if (data.targetUsername === currentUser.username) { currentUser.followers = data.followers; updateUserUI(); }
    renderUsersLeaderboard();
    if (viewingPublicUsername) renderPublicProfileModal(viewingPublicUsername);
    return;
  }
  if (topic === TOPICS.DM + currentUser.username && data.type === 'DIRECT_MESSAGE') {
    if (data.message.sender !== currentUser.username) {
      dmUnreadCounts[data.message.sender] = (dmUnreadCounts[data.message.sender] || 0) + 1;
      ensureUserExists(data.message.sender);
      renderDmUserList();
    }
    dmsDb.push(data.message);
    await saveMessagesToDB();
    dmLastMessageTime[data.message.sender] = Date.now();
    addNotification(`@${data.message.sender} yeni mesaj! 💬`);
    if (activeTab === 'messages' && selectedDmUser === data.message.sender) { dmUnreadCounts[data.message.sender] = 0; renderChatMessages(); renderDmUserList(); }
    else { updateUnreadBadge(); renderDmUserList(); }
    return;
  }
  if (topic === TOPICS.DM + currentUser.username && data.type === 'DELETE_DM') {
    dmsDb = dmsDb.filter(m => m.id !== data.messageId);
    await saveMessagesToDB();
    if (selectedDmUser) renderChatMessages();
    return;
  }
  if (topic === TOPICS.DM_REQUESTS && data.type === 'NEW_DM_REQUEST') {
    const req = data.request;
    if (req.to === currentUser.username && !dmRequestsDb.some(r => r.id === req.id)) {
      dmRequestsDb.push(req);
      await saveDmRequestsToDB();
      ensureUserExists(req.from, { fullname: req.fromFullname, avatarUrl: req.fromAvatar, color: req.fromColor });
      addNotification(`@${req.from} sana mesaj isteği gönderdi!`);
      openDmRequestModal(req.id);
    }
    return;
  }
  if (topic === TOPICS.DM_REQUESTS && data.type === 'DM_REQUEST_RESPONSE') {
    const req = data.request;
    const existing = dmRequestsDb.find(r => r.id === req.id);
    if (existing) existing.status = req.status;
    else dmRequestsDb.push(req);
    await saveDmRequestsToDB();
    if (data.action === 'accept') { showToast(`✅ @${req.to} kabul etti!`, 'success'); renderDmUserList(); }
    else if (data.action === 'reject') showToast(`❌ @${req.to} reddetti.`, 'warning');
    return;
  }
  if (topic === TOPICS.COMMENTS && data.type === 'NEW_COMMENT') {
    if (!commentsDb.some(c => c.id === data.comment.id)) {
      commentsDb.push(data.comment);
      await saveCommentsToDB();
      ensureUserExists(data.comment.author.username, data.comment.author);
      renderFeed();
    }
    return;
  }
  if (topic === TOPICS.GROUPS && data.type === 'NEW_GROUP') {
    if (!groupsDb.some(g => g.id === data.group.id)) { groupsDb.push(data.group); await saveGroupsToDB(); renderGroups(); }
    return;
  }
  if (topic === TOPICS.GROUPS && data.type === 'DELETE_GROUP') { groupsDb = groupsDb.filter(g => g.id !== data.groupId); await saveGroupsToDB(); renderGroups(); return; }
  
  // MOD EVENTLERİ
  if (topic === TOPICS.MOD && data.type === 'BAN_USER') {
    const ban = data.ban;
    bannedUsers = bannedUsers.filter(b => b.username !== ban.username);
    bannedUsers.push(ban);
    await saveBannedUsersToDB();
    if (ban.username === currentUser.username) {
      showBanBanner(ban);
      showToast(`🚫 ${ban.reason} nedeniyle ${getBanRemaining(ban)} süreyle askıya alındın!`, 'error');
      updateUserUI();
    }
    if (activeTab === 'mod') renderModPanel();
    return;
  }
  if (topic === TOPICS.MOD && data.type === 'UNBAN_USER') {
    bannedUsers = bannedUsers.filter(b => b.username !== data.username);
    await saveBannedUsersToDB();
    if (data.username === currentUser.username) {
      $('ban-banner').classList.add('hidden');
      showToast('✅ Banınız kaldırıldı!', 'success');
      updateUserUI(); renderFeed();
    }
    if (activeTab === 'mod') renderModPanel();
    return;
  }
  if (topic === TOPICS.MOD && data.type === 'REMOVE_TIK') {
    const targetUser = usersDb[data.username];
    if (targetUser) {
      targetUser.hasTik = false; targetUser.tikRengi = null;
      await saveUsersToDB();
      postsDb.forEach(p => { if (p.author.username === data.username) { p.author.hasTik = false; p.author.tikRengi = null; } });
      await savePostsToDB();
      commentsDb.forEach(c => { if (c.author.username === data.username) { c.author.hasTik = false; c.author.tikRengi = null; } });
      await saveCommentsToDB();
      if (data.username === currentUser.username) {
        showToast('🚫 Tikiniz bir mod tarafından kaldırıldı!', 'error');
        updateUserUI(); updateModUI(); renderGroups();
      }
      renderFeed(); renderUsersLeaderboard();
    }
    return;
  }
  if (topic === TOPICS.MOD && data.type === 'MOD_DELETE_POST') {
    postsDb = postsDb.filter(p => p.id !== data.postId);
    commentsDb = commentsDb.filter(c => c.postId !== data.postId);
    await savePostsToDB(); await saveCommentsToDB();
    if (data.authorUsername && usersDb[data.authorUsername] && typeof usersDb[data.authorUsername].postCount === 'number' && usersDb[data.authorUsername].postCount > 0) {
      usersDb[data.authorUsername].postCount--;
      await saveUsersToDB();
    }
    if (data.authorUsername === currentUser.username) {
      addModNotification(`⚠️ Gönderiniz modlar tarafından silindi!\n\nSilen: @${data.by}\nSebep: ${data.reason}`, data);
    }
    renderFeed(); renderProfileTab();
    return;
  }
  if (topic === TOPICS.MOD && data.type === 'MOD_NOTIFY') {
    const notif = data.notif;
    if (notif.to === currentUser.username) {
      addModNotification(notif.text, notif);
    }
    return;
  }
}

// ============================================================
// MOD BİLDİRİM (özel)
// ============================================================
function addModNotification(text, meta) {
  const notif = { id: 'notif_' + Date.now(), text, timestamp: new Date().toISOString(), read: false, isMod: true, meta };
  notifications.unshift(notif);
  notificationCount = notifications.filter(n => !n.read).length;
  updateNotificationBadge();
  showToast('🛡️ ' + text.replace(/\n/g, ' | '), 'mod');
}

// ============================================================
// BİLDİRİM
// ============================================================
function addNotification(text) {
  notifications.unshift({ id: 'notif_' + Date.now() + '_' + Math.random().toString(36).substring(2,6), text, timestamp: new Date().toISOString(), read: false });
  notificationCount = notifications.filter(n => !n.read).length;
  updateNotificationBadge();
  showToast('🔔 ' + text, 'info');
}
function updateNotificationBadge() {
  const badge = $('notification-badge');
  if (!badge) return;
  if (notificationCount > 0) { badge.innerText = notificationCount > 99 ? '99+' : notificationCount; badge.classList.remove('hidden'); }
  else badge.classList.add('hidden');
}
function openNotificationModal() {
  const modal = $('notification-modal'), list = $('notification-list');
  modal.classList.remove('hidden');
  notifications.forEach(n => n.read = true);
  notificationCount = 0;
  updateNotificationBadge();
  if (notifications.length === 0) list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz bildirim yok.</div>`;
  else list.innerHTML = notifications.map(n => {
    if (n.isMod) {
      return `<div class="notif-mod rounded-xl p-3 border space-y-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="w-6 h-6 rounded-full notif-icon flex items-center justify-center text-xs"><i class="fa-solid fa-shield-halved"></i></span>
          <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider">MOD Bildirimi</span>
        </div>
        <p class="text-xs text-amber-100 font-medium whitespace-pre-line">${escapeHtml(n.text)}</p>
        <span class="text-[9px] text-amber-500/60 font-mono block">${formatTimeAgo(n.timestamp)}</span>
      </div>`;
    }
    return `<div class="bg-slate-950 rounded-xl p-3 border border-slate-800"><p class="text-xs text-slate-200">${escapeHtml(n.text)}</p><span class="text-[9px] text-slate-500 font-mono">${formatTimeAgo(n.timestamp)}</span></div>`;
  }).join('');
}
function closeNotificationModal() { $('notification-modal').classList.add('hidden'); }
function clearAllNotifications() { notifications = []; notificationCount = 0; updateNotificationBadge(); closeNotificationModal(); }

// ============================================================
// TAB
// ============================================================
function switchTab(tab) {
  if (tab === 'mod' && !hasModPermission()) { showToast('Bu bölüme erişemezsin.', 'error'); return; }
  activeTab = tab;
  const tabs = ['feed','messages','groups','users','mod','profile'];
  const contentIds = ['tab-content-feed','tab-content-messages','tab-content-groups','tab-content-users','tab-content-mod','tab-content-profile'];
  const navIds = ['nav-feed','nav-messages','nav-groups','nav-users','nav-mod','nav-profile'];
  contentIds.forEach(id => { const el = $(id); if (el) el.classList.add('hidden'); });
  navIds.forEach(id => {
    const el = $(id); if (!el) return;
    const isModBtn = id === 'nav-mod';
    el.className = isModBtn ? 
      'nav-btn hidden px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition touch-target whitespace-nowrap border border-rose-500/30' :
      'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 text-slate-400 hover:bg-slate-800/60 hover:text-white transition relative';
  });
  const idx = tabs.indexOf(tab);
  if (idx !== -1) {
    const cEl = $(contentIds[idx]); if (cEl) cEl.classList.remove('hidden');
    const nEl = $(navIds[idx]);
    if (nEl) {
      if (nEl.id === 'nav-mod') nEl.className = 'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-rose-500/20 text-rose-300 border border-rose-500/50';
      else nEl.className = 'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-slate-800 text-cyan-400 border border-slate-700/50';
    }
  }
  // MOD sekmesi her zaman yetkililere görünür
  updateModUI();
  if (tab === 'feed') renderFeed();
  else if (tab === 'messages') { $('unread-dm-badge').classList.add('hidden'); renderDmUserList(); if (selectedDmUser) renderChatMessages(); }
  else if (tab === 'groups') renderGroups();
  else if (tab === 'users') renderUsersLeaderboard();
  else if (tab === 'mod') renderModPanel();
  else if (tab === 'profile') renderProfileTab();
}

function updateModUI() {
  const modBtn = $('nav-mod');
  if (!modBtn) return;
  if (hasModPermission()) modBtn.classList.remove('hidden');
  else modBtn.classList.add('hidden');
}

// ============================================================
// USER UI
// ============================================================
function updateUserUI() {
  if (!currentUser) return;
  const banned = isBanned();
  $('header-avatar').innerHTML = renderAvatar(currentUser, "w-full h-full text-sm");
  $('header-username-display').innerHTML = '@' + currentUser.username + showTikBadge(currentUser);
  $('sidebar-avatar').innerHTML = renderAvatar(currentUser, "w-full h-full text-lg");
  $('sidebar-username-display').innerHTML = getUserDisplayName(currentUser);
  $('sidebar-bio').innerText = currentUser.bio;
  $('composer-avatar').innerHTML = renderAvatar(currentUser, "w-full h-full text-sm");
  $('sidebar-post-count').innerText = getTotalPostCount(currentUser.username);
  $('sidebar-followers-count').innerText = (currentUser.followers || []).length;
  $('sidebar-user-count').innerText = (currentUser.following || []).length;
  updateGroupCreateButton();
  // Ban durumunda UI güncelle
  const composer = $('post-input');
  if (composer) {
    composer.disabled = banned;
    composer.placeholder = banned ? '🚫 Banlıyken gönderi paylaşamazsın' : 'Neler oluyor? Dünyayla paylaş...';
  }
  const dmInput = $('dm-input-text');
  if (dmInput) dmInput.disabled = banned || !selectedDmUser;
}

// ============================================================
// POSTS
// ============================================================
async function submitPost() {
  if (isBanned()) { showToast('🚫 Banlıyken gönderi paylaşamazsın!', 'error'); return; }
  const input = $('post-input');
  if (!input) return;
  let text = input.value.trim();
  if (!text && !pendingPostMedia) { showToast('Bir şeyler yaz veya medya ekle.', 'warning'); return; }
  if (text && containsForbidden(text)) { showToast('Yasaklı içerik!', 'error'); return; }
  text = text ? censorText(text) : '';
  const now = Date.now();
  if (now - lastPostTime < POST_COOLDOWN_MS) { showToast(`Lütfen ${Math.ceil((POST_COOLDOWN_MS - (now - lastPostTime)) / 1000)} sn bekleyin.`, 'warning'); return; }
  lastPostTime = now;
  const newPost = { id: 'post_' + Date.now() + '_' + Math.random().toString(36).substring(2,7), text, imageUrl: '', media: pendingPostMedia ? { type: pendingPostMedia.type, data: pendingPostMedia.data, name: pendingPostMedia.name } : null, createdAt: new Date().toISOString(), likes: [], comments: [], author: { username: currentUser.username, fullname: currentUser.fullname, color: currentUser.color || 'bg-cyan-600', avatarUrl: currentUser.avatarUrl || null, hasTik: currentUser.hasTik || false, tikRengi: currentUser.tikRengi || null } };
  postsDb.unshift(newPost);
  if (postsDb.length > MAX_POSTS) postsDb = postsDb.slice(0, MAX_POSTS);
  await savePostsToDB();
  await incrementPostCount(currentUser.username, 1);
  renderFeed(); updateUserUI();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.POSTS, JSON.stringify({ type: 'NEW_POST', post: newPost }));
  publishPresence();
  input.value = ''; input.style.height = 'auto';
  pendingPostMedia = null; renderPostMediaPreview();
  $('char-counter').innerText = '0 / 280';
  showToast('✅ Gönderi yayınlandı!', 'success');
}
function toggleComments(postId) { const container = $('comments-container-' + postId); if (container) { container.classList.toggle('hidden'); if (!container.classList.contains('hidden')) renderComments(postId); } }
async function submitComment(postId) {
  if (isBanned()) { showToast('🚫 Banlıyken yorum yapamazsın!', 'error'); return; }
  const input = $('comment-input-' + postId);
  if (!input) return;
  let text = input.value.trim();
  if (!text) return;
  if (containsForbidden(text)) { showToast('Yasaklı içerik!', 'error'); return; }
  text = censorText(text);
  const comment = { id: 'cmt_' + Date.now() + '_' + Math.random().toString(36).substring(2,7), postId, text, author: { username: currentUser.username, fullname: currentUser.fullname, color: currentUser.color || 'bg-cyan-600', avatarUrl: currentUser.avatarUrl || null, hasTik: currentUser.hasTik || false, tikRengi: currentUser.tikRengi || null }, createdAt: new Date().toISOString() };
  commentsDb.push(comment);
  await saveCommentsToDB();
  const post = postsDb.find(p => p.id === postId);
  if (post) { if (!post.comments) post.comments = []; post.comments.push(comment.id); await savePostsToDB(); }
  input.value = '';
  renderComments(postId); renderFeed();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.COMMENTS, JSON.stringify({ type: 'NEW_COMMENT', comment }));
}
function renderComments(postId) {
  const container = $('comments-list-' + postId);
  if (!container) return;
  const postComments = commentsDb.filter(c => c.postId === postId);
  if (postComments.length === 0) { container.innerHTML = `<div class="text-xs text-slate-500 text-center py-2">Henüz yorum yok.</div>`; return; }
  container.innerHTML = postComments.map(c => `<div class="flex items-start gap-2 p-2 bg-slate-950 rounded-xl"><div class="w-6 h-6 shrink-0">${renderAvatar(c.author, "w-6 h-6 text-xs")}</div><div class="flex-1 min-w-0"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-xs text-white">${escapeHtml(c.author.fullname)}${showTikBadge(c.author)}</span><span class="text-[9px] text-slate-500">@${escapeHtml(c.author.username)}</span><span class="text-[9px] text-slate-600">${formatTimeAgo(c.createdAt)}</span></div><p class="text-xs text-slate-300 break-words">${renderText(c.text)}</p></div>${(c.author.username === currentUser.username || hasModPermission()) ? `<button onclick="deleteComment('${c.id}','${postId}')" class="text-slate-600 hover:text-rose-400 text-xs p-1"><i class="fa-solid fa-times"></i></button>` : ''}</div>`).join('');
}
async function deleteComment(commentId, postId) {
  commentsDb = commentsDb.filter(c => c.id !== commentId);
  await saveCommentsToDB();
  const post = postsDb.find(p => p.id === postId);
  if (post?.comments) { post.comments = post.comments.filter(id => id !== commentId); await savePostsToDB(); }
  renderComments(postId); renderFeed();
}
async function toggleLike(postId) {
  if (isBanned()) { showToast('🚫 Banlıyken beğenemezsin!', 'warning'); return; }
  const post = postsDb.find(p => p.id === postId);
  if (!post) return;
  const idx = post.likes.indexOf(currentUser.username);
  if (idx === -1) post.likes.push(currentUser.username);
  else post.likes.splice(idx, 1);
  await savePostsToDB();
  renderFeed();
  if (activeTab === 'profile') renderProfileTab();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.LIKES, JSON.stringify({ type: 'TOGGLE_LIKE', postId, likes: post.likes }));
}
async function deletePost(postId) {
  const post = postsDb.find(p => p.id === postId);
  if (!post) return;
  const isOwner = post.author.username === currentUser.username;
  const isModAction = hasModPermission() && !isOwner;
  
  if (isModAction) { openModDeletePostModal(postId); return; }
  if (!isOwner) { showToast('Bu gönderiyi silemezsin.', 'error'); return; }
  
  commentsDb = commentsDb.filter(c => c.postId !== postId);
  await saveCommentsToDB();
  postsDb = postsDb.filter(p => p.id !== postId);
  await savePostsToDB();
  await incrementPostCount(currentUser.username, -1);
  renderFeed(); renderProfileTab(); updateUserUI();
  publishPresence();
  showToast('Gönderi silindi.', 'info');
  if (mqttClient?.connected) mqttClient.publish(TOPICS.POSTS, JSON.stringify({ type: 'DELETE_POST', postId }));
}
function renderPostMedia(post) {
  if (post.media && post.media.data) {
    const m = post.media;
    if (m.type === 'image') return `<div class="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center max-h-96"><img src="${m.data}" class="max-w-full max-h-96 object-contain cursor-zoom-in" loading="lazy" onclick="openMediaLightbox('${m.data}', 'image')"></div>`;
    if (m.type === 'video') return `<div class="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-96"><video src="${m.data}" controls class="w-full max-h-96 object-contain"></video></div>`;
    if (m.type === 'audio') return `<div class="rounded-xl border border-slate-800 bg-slate-950 p-3"><div class="flex items-center gap-2 mb-2"><i class="fa-solid fa-music text-cyan-400"></i><span class="text-xs text-slate-300">${escapeHtml(m.name || 'Ses')}</span></div><audio src="${m.data}" controls class="w-full"></audio></div>`;
  }
  if (post.imageUrl) return `<div class="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center max-h-96"><img src="${escapeHtml(post.imageUrl)}" class="max-w-full max-h-96 object-contain cursor-zoom-in" onclick="openMediaLightbox(this.src, 'image')"></div>`;
  return '';
}
function createPostCard(post) {
  const isLiked = post.likes.includes(currentUser.username);
  const isOwner = post.author.username === currentUser.username;
  const author = ensureUserExists(post.author.username, post.author);
  const commentCount = commentsDb.filter(c => c.postId === post.id).length;
  const groupEmoji = getGroupEmojiForUser(author.username);
  const authorDisplay = getUserDisplayName(author);
  const canDelete = isOwner || hasModPermission();
  return `<div class="bg-slate-900 border border-slate-800/80 rounded-2xl p-3 sm:p-4 shadow-lg space-y-3 post-card">
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-3 cursor-pointer min-w-0" onclick="openPublicProfileModal('${escapeHtml(author.username)}')">
        <div class="w-10 h-10 shrink-0">${renderAvatar(author, "w-10 h-10 text-sm")}</div>
        <div class="min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-bold text-sm text-white truncate">${groupEmoji}${authorDisplay}</span>
            <span class="text-xs text-slate-500 truncate">@${escapeHtml(author.username)}</span>
          </div>
          <span class="text-[10px] text-slate-500 font-mono">${formatTimeAgo(post.createdAt)}</span>
        </div>
      </div>
      <div class="flex items-center gap-1 shrink-0">
        ${canDelete ? `<button onclick="${hasModPermission() && !isOwner ? `openModDeletePostModal('${post.id}')` : `deletePost('${post.id}')`}" class="p-1.5 ${hasModPermission() && !isOwner ? 'hover:bg-amber-500/10 text-amber-500' : 'hover:bg-rose-500/10 text-slate-500 hover:text-rose-400'} rounded-lg text-xs touch-target" title="${hasModPermission() && !isOwner ? 'Mod olarak sil' : 'Sil'}"><i class="fa-solid fa-trash-can"></i></button>` : ''}
      </div>
    </div>
    ${post.text ? `<p class="text-sm text-slate-200 leading-relaxed whitespace-pre-line break-words">${renderText(post.text)}</p>` : ''}
    ${renderPostMedia(post)}
    <div class="flex items-center gap-4 sm:gap-6 pt-2 border-t border-slate-800/60 text-xs text-slate-400 flex-wrap">
      <button onclick="toggleLike('${post.id}')" class="flex items-center gap-1.5 hover:text-rose-400 transition touch-target ${isLiked ? 'text-rose-500 font-bold' : ''}">
        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span>${post.likes.length}</span>
      </button>
      <button onclick="toggleComments('${post.id}')" class="flex items-center gap-1.5 hover:text-cyan-400 transition touch-target">
        <i class="fa-regular fa-comment"></i> <span>${commentCount} Yorum</span>
      </button>
    </div>
    <div id="comments-container-${post.id}" class="hidden space-y-3 pt-2 border-t border-slate-800/40">
      <div id="comments-list-${post.id}" class="space-y-2 max-h-48 overflow-y-auto custom-scrollbar"></div>
      <div class="flex gap-2">
        <input id="comment-input-${post.id}" type="text" placeholder="${isBanned() ? '🚫 Banlıyken yorum yapamazsın' : 'Yorum yaz...'}" ${isBanned() ? 'disabled' : ''} class="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500">
        <button onclick="submitComment('${post.id}')" ${isBanned() ? 'disabled' : ''} class="px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl text-xs font-semibold touch-target disabled:opacity-50"><i class="fa-solid fa-paper-plane"></i></button>
      </div>
    </div>
  </div>`;
}
function renderFeed() {
  const container = $('posts-container');
  if (!container) return;
  const sorted = [...postsDb].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  const feedCount = $('post-feed-count');
  if (feedCount) feedCount.innerText = `${sorted.length} Gönderi`;
  if (sorted.length === 0) { container.innerHTML = `<div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500"><i class="fa-solid fa-comments text-3xl text-slate-700 mb-2"></i><p class="text-sm">Henüz gönderi yok.</p></div>`; return; }
  container.innerHTML = sorted.map(p => createPostCard(p)).join('');
}

// ============================================================
// LEADERBOARD
// ============================================================
function renderUsersLeaderboard() {
  const container = $('users-leaderboard-container');
  const badge = $('total-users-badge');
  if (!container) return;
  const allUsers = Object.values(usersDb);
  if (badge) badge.innerText = `${allUsers.length} Kayıtlı Üye`;
  allUsers.sort((a,b) => (b.followers||[]).length - (a.followers||[]).length);
  if (allUsers.length === 0) { container.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">Henüz kimse yok.</div>`; return; }
  container.innerHTML = allUsers.map((u, i) => {
    const followerCount = (u.followers||[]).length;
    const isMe = u.username === currentUser.username;
    const isFollowing = currentUser.following?.includes(u.username);
    const groupEmoji = getGroupEmojiForUser(u.username);
    let rank = `<span class="w-7 h-7 rounded-xl bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center shrink-0">${i+1}</span>`;
    if (i === 0) rank = `<span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥇</span>`;
    if (i === 1) rank = `<span class="w-8 h-8 rounded-xl bg-slate-400/20 text-slate-300 border border-slate-400/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥈</span>`;
    if (i === 2) rank = `<span class="w-8 h-8 rounded-xl bg-amber-700/20 text-amber-600 border border-amber-700/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥉</span>`;
    return `<div class="bg-slate-950 border border-slate-800/80 rounded-2xl p-3 flex items-center justify-between gap-3"><div class="flex items-center gap-3 overflow-hidden min-w-0">${rank}<div class="w-10 h-10 shrink-0 cursor-pointer" onclick="openPublicProfileModal('${escapeHtml(u.username)}')">${renderAvatar(u, "w-10 h-10 text-sm")}</div><div class="overflow-hidden cursor-pointer min-w-0" onclick="openPublicProfileModal('${escapeHtml(u.username)}')"><div class="flex items-center gap-2 flex-wrap"><h4 class="font-bold text-sm text-white truncate">${groupEmoji}${getUserDisplayName(u)}</h4>${isMe ? `<span class="text-[9px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded font-semibold">Sen</span>` : ''}</div><p class="text-xs text-slate-500 truncate">@${escapeHtml(u.username)} • ${followerCount} Takipçi</p></div></div><div class="flex items-center gap-2 shrink-0">${!isMe ? `<button onclick="toggleFollowUser('${escapeHtml(u.username)}')" class="px-2 sm:px-3 py-1.5 text-xs font-semibold rounded-xl transition touch-target ${isFollowing ? 'bg-slate-800 text-slate-300' : 'bg-cyan-500 hover:bg-cyan-400 text-white shadow'}">${isFollowing ? 'Takiptesin' : 'Takip Et'}</button>` : `<button onclick="switchTab('profile')" class="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl touch-target">Profilim</button>`}</div></div>`;
  }).join('');
}
async function toggleFollowUser(targetUsername) {
  if (isBanned()) { showToast('🚫 Banlıyken takip edemezsin!', 'warning'); return; }
  if (targetUsername === currentUser.username) return;
  const target = ensureUserExists(targetUsername);
  if (!target) return;
  if (!target.followers) target.followers = [];
  if (!currentUser.following) currentUser.following = [];
  const idx = target.followers.indexOf(currentUser.username);
  const followingIdx = currentUser.following.indexOf(targetUsername);
  if (idx === -1) {
    target.followers.push(currentUser.username);
    currentUser.following.push(targetUsername);
    if (target.followers.length >= 10 && !target.neonColor) { target.neonColor = '#b026ff'; showToast(`🎉 @${targetUsername} 10 takipçiye ulaştı!`, 'success'); }
    showToast(`@${targetUsername} takip edildi.`, 'info');
  } else {
    target.followers.splice(idx, 1);
    if (followingIdx !== -1) currentUser.following.splice(followingIdx, 1);
    showToast(`@${targetUsername} takipten çıkarıldı.`, 'info');
  }
  usersDb[targetUsername] = target;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.FOLLOWS, JSON.stringify({ type: 'FOLLOW_UPDATE', targetUsername, followerUsername: currentUser.username, followers: target.followers, following: currentUser.following }));
  renderUsersLeaderboard(); updateUserUI();
  if (viewingPublicUsername === targetUsername) renderPublicProfileModal(targetUsername);
}

// ============================================================
// DM
// ============================================================
function filterDmSearch() {
  const q = $('dm-user-search').value.trim().toLowerCase();
  const results = $('dm-search-results');
  if (!q) { results.classList.add('hidden'); results.innerHTML = ''; return; }
  const matches = Object.values(usersDb).filter(u => u.username !== currentUser.username && (u.username.includes(q) || (u.fullname || '').toLowerCase().includes(q)));
  if (matches.length === 0) { results.innerHTML = `<div class="text-center text-xs text-slate-500 py-3">Kullanıcı yok.</div>`; results.classList.remove('hidden'); return; }
  results.innerHTML = matches.slice(0, 8).map(u => {
    const status = getDmRequestStatus(u.username);
    const canMsg = canMessageUser(u.username);
    let actionBtn = '';
    if (canMsg) actionBtn = `<button onclick="event.stopPropagation(); selectChatUser('${u.username}')" class="px-2 py-1 bg-cyan-500 text-white text-[10px] font-bold rounded-lg">Sohbet</button>`;
    else if (status === 'pending') actionBtn = `<span class="text-[10px] text-amber-400 font-semibold">Bekliyor</span>`;
    else if (status === 'rejected') actionBtn = `<span class="text-[10px] text-rose-400 font-semibold">Reddedildi</span>`;
    else actionBtn = `<button onclick="event.stopPropagation(); sendDmRequest('${u.username}')" class="px-2 py-1 bg-indigo-500 text-white text-[10px] font-bold rounded-lg">İstek Gönder</button>`;
    return `<div class="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-slate-800 transition"><div class="flex items-center gap-2 min-w-0 flex-1"><div class="w-7 h-7 shrink-0">${renderAvatar(u, "w-7 h-7 text-[10px]")}</div><div class="min-w-0"><div class="text-xs font-bold text-white truncate">${getUserDisplayName(u)}</div><div class="text-[9px] text-slate-500 truncate">@${u.username}</div></div></div>${actionBtn}</div>`;
  }).join('');
  results.classList.remove('hidden');
}
function renderDmUserList() {
  const container = $('dm-users-list');
  if (!container) return;
  const activeUsers = new Set();
  dmsDb.forEach(m => { if (m.sender === currentUser.username) activeUsers.add(m.recipient); if (m.recipient === currentUser.username) activeUsers.add(m.sender); });
  dmRequestsDb.forEach(r => { if (r.status === 'accepted') { if (r.from === currentUser.username) activeUsers.add(r.to); if (r.to === currentUser.username) activeUsers.add(r.from); } });
  activeUsers.delete(currentUser.username);
  if (activeUsers.size === 0) { container.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">Henüz sohbet yok.</div>`; return; }
  const users = [...activeUsers].map(u => ensureUserExists(u)).filter(u => u);
  const sorted = users.sort((a,b) => (dmLastMessageTime[b.username]||0) - (dmLastMessageTime[a.username]||0));
  container.innerHTML = sorted.map(u => {
    const isSelected = selectedDmUser === u.username;
    const unread = dmUnreadCounts[u.username] || 0;
    return `<div onclick="selectChatUser('${u.username}')" class="dm-item p-2.5 rounded-xl flex items-center gap-3 cursor-pointer transition ${isSelected ? 'dm-item-selected' : 'hover:bg-slate-900'}"><div class="w-8 h-8 shrink-0">${renderAvatar(u, "w-8 h-8 text-xs")}</div><div class="overflow-hidden min-w-0 flex-1"><div class="font-bold text-xs text-white truncate">${getUserDisplayName(u)}</div><div class="text-[10px] text-slate-500 truncate">@${escapeHtml(u.username)}</div></div>${unread > 0 ? `<span class="dm-unread-badge">${unread}</span>` : ''}</div>`;
  }).join('');
}
function startDirectMessageWith(username) {
  if (username === currentUser.username) { showToast('Kendine mesaj atamazsın.', 'warning'); return; }
  closePublicProfileModal(); closeNotificationModal();
  switchTab('messages');
  if (canMessageUser(username)) selectChatUser(username);
  else {
    const status = getDmRequestStatus(username);
    if (status === 'pending') showToast('İstek bekliyor.', 'info');
    else if (status === 'rejected') showToast('Bu kullanıcı reddetti.', 'warning');
    else { sendDmRequest(username); }
  }
}
function selectChatUser(username) {
  if (!canMessageUser(username)) { showToast('Önce istek gönder.', 'warning'); return; }
  selectedDmUser = username;
  if (dmUnreadCounts[username]) { dmUnreadCounts[username] = 0; renderDmUserList(); }
  const target = ensureUserExists(username);
  $('chat-target-avatar').innerHTML = renderAvatar(target, "w-10 h-10 text-base");
  $('chat-target-name').innerHTML = getUserDisplayName(target);
  $('chat-target-handle').innerText = '@' + target.username;
  $('chat-view-profile-btn').classList.remove('hidden');
  const banned = isBanned();
  $('dm-input-text').disabled = banned;
  $('dm-send-btn').disabled = banned;
  cancelReply();
  renderDmUserList();
  renderChatMessages();
}
function openChatUserProfile() { if (selectedDmUser) openPublicProfileModal(selectedDmUser); }

function sendFileAttachment(event) {
  if (isBanned()) { showToast('🚫 Banlıyken dosya gönderemezsin!', 'error'); event.target.value = ''; return; }
  const file = event.target.files[0];
  if (!file) return;
  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');
  const isAudio = file.type.startsWith('audio/');
  if (!isImage && !isVideo && !isAudio) { showToast('Sadece foto/video/ses!', 'error'); event.target.value = ''; return; }
  const maxSize = isImage ? 2*1024*1024 : isVideo ? 5*1024*1024 : 2*1024*1024;
  if (file.size > maxSize) { showToast(`Max ${maxSize/(1024*1024)}MB!`, 'error'); event.target.value = ''; return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    let data = e.target.result;
    const finish = (finalData) => {
      const text = isImage ? `📷 Resim: ${file.name}` : isVideo ? `🎥 Video: ${file.name}` : `🎵 Ses: ${file.name}`;
      const msg = { id: 'dm_' + Date.now() + '_' + Math.random().toString(36).substring(2,6), sender: currentUser.username, recipient: selectedDmUser, text, timestamp: new Date().toISOString(), replyTo: replyToMessage, attachment: { data: finalData, type: file.type, name: file.name, size: file.size } };
      dmsDb.push(msg);
      saveMessagesToDB();
      dmLastMessageTime[selectedDmUser] = Date.now();
      if (mqttClient?.connected) mqttClient.publish(TOPICS.DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE', message: msg }));
      cancelReply(); renderChatMessages();
      showToast('📎 Gönderildi!', 'success');
    };
    if (isImage) {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let w = img.width, h = img.height;
        const maxDim = 1200;
        if (w > h) { if (w > maxDim) { h *= maxDim / w; w = maxDim; } } else { if (h > maxDim) { w *= maxDim / h; h = maxDim; } }
        canvas.width = w; canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        finish(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = data;
    } else finish(data);
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

async function toggleMicRecording() {
  if (isBanned()) { showToast('🚫 Banlıyken ses kaydedemezsin!', 'warning'); return; }
  if (!selectedDmUser) { showToast('Önce sohbet seç.', 'warning'); return; }
  if (mediaRecorder && mediaRecorder.state === 'recording') return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = []; recordingSeconds = 0;
    mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) audioChunks.push(e.data); };
    mediaRecorder.onstop = () => stream.getTracks().forEach(t => t.stop());
    mediaRecorder.start();
    $('mic-recording-bar').classList.remove('hidden');
    $('mic-timer').innerText = '0:00';
    if (recordingTimer) clearInterval(recordingTimer);
    recordingTimer = setInterval(() => {
      recordingSeconds++;
      const m = Math.floor(recordingSeconds / 60);
      const s = (recordingSeconds % 60).toString().padStart(2, '0');
      $('mic-timer').innerText = `${m}:${s}`;
      if (recordingSeconds >= 120) stopAndSendMicRecording();
    }, 1000);
  } catch(e) { showToast('Mikrofon izni gerekli.', 'error'); }
}
function cancelMicRecording() {
  if (recordingTimer) { clearInterval(recordingTimer); recordingTimer = null; }
  if (mediaRecorder && mediaRecorder.state !== 'inactive') { mediaRecorder.onstop = null; mediaRecorder.stop(); }
  mediaRecorder = null; audioChunks = [];
  $('mic-recording-bar').classList.add('hidden');
  showToast('Kayıt iptal.', 'info');
}
function stopAndSendMicRecording() {
  if (!mediaRecorder || mediaRecorder.state !== 'recording') return;
  mediaRecorder.onstop = () => {
    if (recordingTimer) { clearInterval(recordingTimer); recordingTimer = null; }
    const blob = new Blob(audioChunks, { type: 'audio/webm' });
    if (blob.size > 2*1024*1024) { showToast('Kayıt çok uzun!', 'error'); $('mic-recording-bar').classList.add('hidden'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      const msg = { id: 'dm_' + Date.now() + '_' + Math.random().toString(36).substring(2,6), sender: currentUser.username, recipient: selectedDmUser, text: '🎤 Sesli mesaj', timestamp: new Date().toISOString(), replyTo: replyToMessage, attachment: { data: e.target.result, type: 'audio/webm', name: 'sesli.webm', size: blob.size } };
      dmsDb.push(msg);
      saveMessagesToDB();
      dmLastMessageTime[selectedDmUser] = Date.now();
      if (mqttClient?.connected) mqttClient.publish(TOPICS.DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE', message: msg }));
      cancelReply(); renderChatMessages();
      showToast('🎤 Sesli mesaj gönderildi!', 'success');
    };
    reader.readAsDataURL(blob);
    audioChunks = [];
    $('mic-recording-bar').classList.add('hidden');
  };
  mediaRecorder.stop();
}

async function sendDirectMessage(e) {
  e.preventDefault();
  if (isBanned()) { showToast('🚫 Banlıyken mesaj gönderemezsin!', 'error'); return; }
  const input = $('dm-input-text');
  let text = input.value.trim();
  if (!text || !selectedDmUser) return;
  if (containsForbidden(text)) { showToast('Yasaklı içerik!', 'error'); return; }
  text = censorText(text);
  const msg = { id: 'dm_' + Date.now() + '_' + Math.random().toString(36).substring(2,6), sender: currentUser.username, recipient: selectedDmUser, text, timestamp: new Date().toISOString(), replyTo: replyToMessage };
  dmsDb.push(msg);
  await saveMessagesToDB();
  dmLastMessageTime[selectedDmUser] = Date.now();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE', message: msg }));
  input.value = '';
  cancelReply();
  renderChatMessages();
}

function startReply(msgId) {
  const msg = dmsDb.find(m => m.id === msgId);
  if (!msg) return;
  replyToMessage = { id: msg.id, text: (msg.text || '').substring(0, 60), sender: msg.sender };
  $('reply-preview-text').innerText = replyToMessage.text;
  $('reply-preview-user').innerText = `@${msg.sender}`;
  $('reply-preview-bar').classList.remove('hidden');
}
function cancelReply() { replyToMessage = null; $('reply-preview-bar').classList.add('hidden'); }

async function deleteDmMessage(msgId) {
  const msg = dmsDb.find(m => m.id === msgId);
  if (!msg) return;
  if (msg.sender !== currentUser.username) { showToast('Sadece kendi mesajını silebilirsin.', 'warning'); return; }
  if (!confirm('Bu mesajı silmek istediğine emin misin?')) return;
  dmsDb = dmsDb.filter(m => m.id !== msgId);
  await saveMessagesToDB();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.DM + msg.recipient, JSON.stringify({ type: 'DELETE_DM', messageId: msgId }));
  renderChatMessages();
  showToast('Mesaj silindi.', 'info');
}

function renderChatMessages() {
  const container = $('chat-messages-inner');
  if (!container) return;
  if (!selectedDmUser) { container.innerHTML = `<div class="h-full flex items-center justify-center text-slate-500 text-xs text-center p-4">Sohbet seç.</div>`; return; }
  const convo = dmsDb.filter(m => (m.sender === currentUser.username && m.recipient === selectedDmUser) || (m.sender === selectedDmUser && m.recipient === currentUser.username)).sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));
  if (convo.length === 0) { container.innerHTML = `<div class="h-full flex items-center justify-center text-slate-500 text-xs text-center p-4">@${selectedDmUser} ile hiç mesajın yok.</div>`; return; }
  container.innerHTML = convo.map(m => {
    const isMe = m.sender === currentUser.username;
    const time = formatTimeAgo(m.timestamp);
    let content = '';
    if (m.replyTo) {
      const origMsg = dmsDb.find(x => x.id === m.replyTo.id);
      const replyText = origMsg ? (origMsg.text || '').substring(0, 60) : (m.replyTo.text || '');
      content += `<div class="text-[10px] ${isMe ? 'bg-cyan-700/50 text-cyan-100' : 'bg-slate-700 text-slate-300'} rounded-lg p-1.5 mb-1.5 border-l-2 border-cyan-400"><div class="font-bold">@${m.replyTo.sender}</div><div class="truncate">${escapeHtml(replyText)}</div></div>`;
    }
    content += renderText(m.text);
    if (m.attachment) {
      if (m.attachment.type?.startsWith('image/')) content += `<div class="mt-2 max-w-[240px] rounded-lg overflow-hidden border border-slate-700 bg-slate-950"><img src="${m.attachment.data}" class="w-full h-auto object-contain cursor-zoom-in" loading="lazy" onclick="openMediaLightbox('${m.attachment.data}', 'image')"></div>`;
      else if (m.attachment.type?.startsWith('audio/')) content += `<div class="mt-2"><audio controls class="w-full max-w-[240px] h-9"><source src="${m.attachment.data}" type="${m.attachment.type}"></audio></div>`;
      else if (m.attachment.type?.startsWith('video/')) content += `<div class="mt-2 max-w-[240px] rounded-lg overflow-hidden border border-slate-700 bg-slate-950"><video src="${m.attachment.data}" controls class="w-full h-auto max-h-60 object-contain"></video></div>`;
    }
    return `<div class="flex flex-col ${isMe ? 'items-end' : 'items-start'}">
      <div class="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${isMe ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'} shadow break-words">${content}</div>
      <div class="flex items-center gap-1 mt-1 px-1">
        <span class="text-[9px] text-slate-500 font-mono">${time}</span>
        <button onclick="startReply('${m.id}')" class="text-[9px] text-slate-500 hover:text-cyan-400 p-0.5"><i class="fa-solid fa-reply"></i></button>
        ${isMe ? `<button onclick="deleteDmMessage('${m.id}')" class="text-[9px] text-slate-500 hover:text-rose-400 p-0.5"><i class="fa-solid fa-trash-can"></i></button>` : ''}
      </div>
    </div>`;
  }).join('');
  const box = $('chat-messages-box');
  if (box) box.scrollTop = box.scrollHeight;
}
function updateUnreadBadge() {
  const badge = $('unread-dm-badge');
  let total = 0;
  for (const key in dmUnreadCounts) total += dmUnreadCounts[key];
  if (badge) { if (total > 0) { badge.innerText = total > 99 ? '99+' : total; badge.classList.remove('hidden'); } else badge.classList.add('hidden'); }
}

// ============================================================
// PROFILE
// ============================================================
function renderProfileTab() {
  if (!currentUser) return;
  $('profile-main-avatar').innerHTML = renderAvatar(currentUser, "w-20 h-20 sm:w-24 sm:h-24 text-2xl sm:text-3xl");
  $('profile-fullname').innerHTML = getUserDisplayName(currentUser);
  $('profile-username-display').innerHTML = '@' + currentUser.username + showTikBadge(currentUser);
  $('profile-bio').innerText = currentUser.bio;
  const myPosts = postsDb.filter(p => p.author.username === currentUser.username).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  $('profile-stat-posts').innerText = getTotalPostCount(currentUser.username);
  $('profile-stat-followers').innerText = (currentUser.followers||[]).length;
  $('profile-stat-following').innerText = (currentUser.following||[]).length;
  renderRewardSelector();
  const container = $('profile-posts-container');
  if (myPosts.length === 0) container.innerHTML = `<div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-slate-500 text-xs">Henüz gönderin yok.</div>`;
  else container.innerHTML = myPosts.map(p => createPostCard(p)).join('');
}
function openPublicProfileModal(username) {
  if (username === currentUser.username) { switchTab('profile'); return; }
  viewingPublicUsername = username;
  ensureUserExists(username);
  renderPublicProfileModal(username);
  $('public-profile-modal').classList.remove('hidden');
}
function closePublicProfileModal() { viewingPublicUsername = null; $('public-profile-modal').classList.add('hidden'); }
function renderPublicProfileModal(username) {
  const u = ensureUserExists(username);
  if (!u) return;
  const groupEmoji = getGroupEmojiForUser(username);
  $('pub-profile-avatar').innerHTML = renderAvatar(u, "w-20 h-20 sm:w-24 sm:h-24 text-2xl sm:text-3xl");
  $('pub-profile-fullname').innerHTML = groupEmoji + getUserDisplayName(u);
  $('pub-profile-username').innerHTML = '@' + u.username + showTikBadge(u);
  $('pub-profile-bio').innerText = u.bio || 'Biyografi yok.';
  const followers = u.followers || [], following = u.following || [];
  const userPosts = postsDb.filter(p => p.author.username === username).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  const totalPostCount = getTotalPostCount(username);
  $('pub-profile-posts-count').innerText = totalPostCount;
  $('pub-profile-followers-count').innerText = followers.length;
  $('pub-profile-following-count').innerText = following.length;
  const isFollowing = currentUser.following?.includes(username);
  const followBtn = $('pub-profile-follow-btn');
  if (followBtn) { followBtn.innerText = isFollowing ? 'Takiptesin' : 'Takip Et'; followBtn.className = isFollowing ? 'px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition touch-target' : 'px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500 text-white text-xs font-semibold rounded-xl shadow transition touch-target'; }
  const postsList = $('pub-profile-posts-list');
  if (userPosts.length === 0) {
    if (totalPostCount > 0) postsList.innerHTML = `<div class="p-4 text-center text-xs text-slate-500 bg-slate-950 rounded-xl"><i class="fa-solid fa-lock text-slate-600 mb-2 text-lg"></i><br>Bu kullanıcının <strong class="text-cyan-400">${totalPostCount}</strong> gönderisi arşivde.</div>`;
    else postsList.innerHTML = `<div class="p-4 text-center text-xs text-slate-500 bg-slate-950 rounded-xl">Gönderi yok.</div>`;
  } else postsList.innerHTML = userPosts.map(p => createPostCard(p)).join('');
}
function toggleFollowPublicUser() { if (viewingPublicUsername) toggleFollowUser(viewingPublicUsername); }
function messagePublicUser() { if (viewingPublicUsername) startDirectMessageWith(viewingPublicUsername); }

// ============================================================
// EDIT PROFILE
// ============================================================
function openEditProfileModal() {
  $('edit-fullname').value = currentUser.fullname;
  $('edit-bio').value = currentUser.bio;
  $('edit-avatar-preview').innerHTML = renderAvatar(currentUser, "w-full h-full text-xl");
  tempAvatarBase64 = null;
  $('edit-profile-modal').classList.remove('hidden');
}
function closeEditProfileModal() { tempAvatarBase64 = null; $('edit-profile-modal').classList.add('hidden'); }
function handleAvatarSelect(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      let w = img.width, h = img.height;
      const maxDim = 250;
      if (w > h) { if (w > maxDim) { h *= maxDim / w; w = maxDim; } } else { if (h > maxDim) { w *= maxDim / h; h = maxDim; } }
      canvas.width = w; canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      tempAvatarBase64 = canvas.toDataURL('image/jpeg', 0.85);
      $('edit-avatar-preview').innerHTML = `<img src="${tempAvatarBase64}" class="w-full h-full object-cover rounded-2xl">`;
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}
async function saveProfileChanges(e) {
  e.preventDefault();
  const newFullname = $('edit-fullname').value.trim();
  const newBio = $('edit-bio').value.trim();
  currentUser.fullname = newFullname;
  currentUser.bio = newBio;
  if (tempAvatarBase64) currentUser.avatarUrl = tempAvatarBase64;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  postsDb.forEach(p => { if (p.author.username === currentUser.username) { p.author.fullname = newFullname; p.author.avatarUrl = currentUser.avatarUrl; } });
  await savePostsToDB();
  commentsDb.forEach(c => { if (c.author.username === currentUser.username) { c.author.fullname = newFullname; c.author.avatarUrl = currentUser.avatarUrl; } });
  await saveCommentsToDB();
  publishPresence();
  closeEditProfileModal();
  updateUserUI(); renderProfileTab(); renderFeed(); renderUsersLeaderboard();
  showToast('Profil güncellendi.', 'success');
}

// ============================================================
// TİK
// ============================================================
function openTikModal() { $('tik-terms-modal').classList.remove('hidden'); }
function closeTikTermsModal() { $('tik-terms-modal').classList.add('hidden'); }
function closeTikTermsAndContinue() { $('tik-terms-modal').classList.add('hidden'); $('tik-modal').classList.remove('hidden'); $('tik-input').value = ''; $('tik-sonuc').innerText = ''; }
function closeTikModal() { $('tik-modal').classList.add('hidden'); }
function tikKontrolEt() {
  const code = $('tik-input').value.trim();
  const result = $('tik-sonuc');
  if (code === gecerliKod) {
    currentUser.hasTik = true;
    currentUser.tikRengi = tikRengi;
    usersDb[currentUser.username] = currentUser;
    saveUsersToDB();
    postsDb.forEach(p => { if (p.author.username === currentUser.username) { p.author.hasTik = true; p.author.tikRengi = tikRengi; } });
    savePostsToDB();
    commentsDb.forEach(c => { if (c.author.username === currentUser.username) { c.author.hasTik = true; c.author.tikRengi = tikRengi; } });
    saveCommentsToDB();
    $('tik-modal').classList.add('hidden');
    const img = $('tik-goster-img');
    img.src = tikRengi === 'purple' ? 'tick-p.png' : tikRengi === 'red' ? 'tick-r.png' : 'tick-b.png';
    $('tik-goster').classList.remove('hidden');
    publishPresence();
    updateUserUI(); updateModUI(); renderFeed(); renderUsersLeaderboard(); renderDmUserList(); renderProfileTab(); renderGroups();
    updateGroupCreateButton();
  } else { result.style.color = "red"; result.innerText = "❌ Kod hatalı!"; }
}

// ============================================================
// MOD PANEL RENDER
// ============================================================
function renderModPanel() {
  if (!hasModPermission()) return;
  renderModBannedList();
  renderModUserSearch();
}
function renderModBannedList() {
  const container = $('mod-banned-list');
  if (!container) return;
  const now = Date.now();
  const activeBans = bannedUsers.filter(b => new Date(b.until).getTime() > now);
  const count = $('mod-ban-count');
  if (count) count.innerText = `${activeBans.length} kişi`;
  if (activeBans.length === 0) { container.innerHTML = `<div class="text-center text-xs text-slate-500 py-4">Banlı kullanıcı yok.</div>`; return; }
  container.innerHTML = activeBans.map(b => {
    const u = ensureUserExists(b.username);
    return `<div class="mod-banned-card rounded-xl p-3 flex items-center justify-between gap-2 flex-wrap">
      <div class="flex items-center gap-2 min-w-0 flex-1">
        <div class="w-8 h-8 shrink-0">${renderAvatar(u, "w-8 h-8 text-xs")}</div>
        <div class="min-w-0">
          <div class="flex items-center gap-1 flex-wrap">
            <span class="font-bold text-xs text-rose-200">${getUserDisplayName(u)}</span>
            <span class="text-[9px] text-slate-500">@${b.username}</span>
          </div>
          <p class="text-[10px] text-rose-300/70">Sebep: ${escapeHtml(b.reason)}</p>
          <p class="text-[9px] text-slate-500">Banlayan: @${b.by} • Kalan: ${getBanRemaining(b)}</p>
        </div>
      </div>
      <button onclick="modUnbanUser('${b.username}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold rounded-lg touch-target">
        <i class="fa-solid fa-unlock mr-1"></i>Banı Kaldır
      </button>
    </div>`;
  }).join('');
}
function filterModUserSearch() {
  const q = $('mod-user-search').value.trim().toLowerCase();
  const container = $('mod-user-search-results');
  if (!q) { container.innerHTML = `<div class="text-center text-xs text-slate-500 py-3">Kullanıcı ara...</div>`; return; }
  const matches = Object.values(usersDb).filter(u => u.username !== currentUser.username && (u.username.includes(q) || (u.fullname || '').toLowerCase().includes(q)));
  if (matches.length === 0) { container.innerHTML = `<div class="text-center text-xs text-slate-500 py-3">Kullanıcı yok.</div>`; return; }
  container.innerHTML = matches.slice(0, 15).map(u => {
    const isBannedUser = isUserBanned(u.username);
    const canRemoveTik = hasSuperModPermission() && u.hasTik && u.username !== currentUser.username;
    const canBan = u.username !== currentUser.username && (!isMod() || (u.tikRengi !== 'purple'));
    return `<div class="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-2 flex-wrap">
      <div class="flex items-center gap-2 min-w-0 flex-1 cursor-pointer" onclick="openPublicProfileModal('${u.username}')">
        <div class="w-8 h-8 shrink-0">${renderAvatar(u, "w-8 h-8 text-xs")}</div>
        <div class="min-w-0">
          <div class="flex items-center gap-1 flex-wrap">
            <span class="font-bold text-xs text-white">${getUserDisplayName(u)}</span>
            ${isBannedUser ? `<span class="text-[8px] bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded font-bold">BANLI</span>` : ''}
          </div>
          <p class="text-[9px] text-slate-500">@${u.username} • ${(u.followers||[]).length} takipçi</p>
        </div>
      </div>
      <div class="flex items-center gap-1 flex-wrap">
        ${canRemoveTik ? `<button onclick="modRemoveTik('${u.username}')" class="px-2 py-1 bg-amber-600 hover:bg-amber-500 text-white text-[10px] font-bold rounded-lg touch-target" title="Tikini Kaldır"><i class="fa-solid fa-certificate"></i> Tik Kaldır</button>` : ''}
        ${isBannedUser ? `<button onclick="modUnbanUser('${u.username}')" class="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold rounded-lg touch-target"><i class="fa-solid fa-unlock"></i> Banı Kaldır</button>` : (canBan ? `<button onclick="openModBanModal('${u.username}')" class="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-bold rounded-lg touch-target"><i class="fa-solid fa-gavel"></i> Banla</button>` : '')}
      </div>
    </div>`;
  }).join('');
}
function renderModUserSearch() {
  const container = $('mod-user-search-results');
  if (container && !container.innerHTML.trim()) container.innerHTML = `<div class="text-center text-xs text-slate-500 py-3">Kullanıcı ara...</div>`;
}
function openModBanModal(username) {
  if (!hasModPermission()) return;
  const u = ensureUserExists(username);
  modBanTarget = username;
  $('mod-ban-target-info').innerHTML = `<div class="flex items-center gap-3"><div class="w-10 h-10 shrink-0">${renderAvatar(u, "w-10 h-10 text-sm")}</div><div><div class="font-bold text-xs text-white">${escapeHtml(u.fullname)}</div><div class="text-[10px] text-slate-500">@${u.username}</div></div></div>`;
  $('mod-ban-hours').value = 1;
  $('mod-ban-reason').value = '';
  $('mod-ban-modal').classList.remove('hidden');
}
function closeModBanModal() { $('mod-ban-modal').classList.add('hidden'); modBanTarget = null; }
async function confirmModBan() {
  if (!modBanTarget || !hasModPermission()) return;
  const hours = parseInt($('mod-ban-hours').value) || 1;
  const reason = $('mod-ban-reason').value.trim();
  if (!reason) { showToast('Sebep zorunlu!', 'warning'); return; }
  if (hours < BAN_MIN_HOURS || hours > BAN_MAX_HOURS) { showToast(`Süre ${BAN_MIN_HOURS}-${BAN_MAX_HOURS} saat arası olmalı!`, 'warning'); return; }
  await modBanUser(modBanTarget, hours, reason);
  closeModBanModal();
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded', async () => {
  try {
    await openDatabase();
    const data = await loadAllFromDB();
    if (data) {
      usersDb = data.users || {};
      postsDb = data.posts || [];
      commentsDb = data.comments || [];
      dmsDb = data.messages || [];
      groupsDb = data.groups || [];
      dmRequestsDb = data.dmReqs || [];
      bannedUsers = data.bans || [];
      Object.values(usersDb).forEach(u => { if (typeof u.postCount !== 'number') u.postCount = postsDb.filter(p => p.author.username === u.username).length; });
      await saveUsersToDB();
    }
  } catch(err) { console.error('DB hatası:', err); }

  const postInput = $('post-input');
  if (postInput) {
    postInput.addEventListener('input', (e) => {
      e.target.style.height = 'auto';
      e.target.style.height = Math.min(e.target.scrollHeight, 300) + 'px';
      const counter = $('char-counter');
      if (counter) counter.innerText = `${e.target.value.length} / 280`;
    });
    postInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitPost(); }
    });
  }
  const dmInput = $('dm-input-text');
  if (dmInput) {
    dmInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); $('dm-form').dispatchEvent(new Event('submit')); }
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.target?.id?.startsWith('comment-input-') && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitComment(e.target.id.replace('comment-input-', ''));
    }
  });
  document.addEventListener('click', function(e) {
    const dropdown = $('settings-dropdown');
    if (dropdown && !e.target.closest('.relative') && !dropdown.classList.contains('hidden')) dropdown.classList.add('hidden');
  });

  const sessionUser = sessionStorage.getItem('sp_social_active_user');
  const savedUsername = localStorage.getItem('sp_social_username');
  const savedPassword = localStorage.getItem('sp_social_password');
  if (savedUsername) {
    const lu = $('login-username');
    if (lu) lu.value = savedUsername;
    const rm = $('remember-me');
    if (rm) rm.checked = true;
  }
  if (sessionUser && usersDb[sessionUser]) {
    currentUser = usersDb[sessionUser];
    if (!currentUser.followers) currentUser.followers = [];
    if (!currentUser.following) currentUser.following = [];
    if (typeof currentUser.postCount !== 'number') currentUser.postCount = postsDb.filter(p => p.author.username === currentUser.username).length;
    launchMainApp();
  } else if (savedUsername && savedPassword && usersDb[savedUsername] && usersDb[savedUsername].password === savedPassword) {
    currentUser = usersDb[savedUsername];
    if (!currentUser.followers) currentUser.followers = [];
    if (!currentUser.following) currentUser.following = [];
    if (typeof currentUser.postCount !== 'number') currentUser.postCount = postsDb.filter(p => p.author.username === currentUser.username).length;
    sessionStorage.setItem('sp_social_active_user', savedUsername);
    launchMainApp();
  }
});
