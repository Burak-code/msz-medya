// ============================================================
// KONFIGURASYON - BURADAN DEĞİŞTİR !!!
// ============================================================
const gecerliKod = "000000000f00000₺000044ertugrulveMSZ";
const tikRengi = "blue"; // "purple" veya "blue"
const GUVENLIK_CEVABI = "msz-şifremi-unuttum";

const BROKER_URL = 'wss://broker.emqx.io:8084/mqtt';
const TOPIC_PREFIX = 'social_pulse_net_v3/';
const TOPICS = {
  POSTS: TOPIC_PREFIX + 'posts',
  LIKES: TOPIC_PREFIX + 'likes',
  USERS: TOPIC_PREFIX + 'users',
  FOLLOWS: TOPIC_PREFIX + 'follows',
  DM: TOPIC_PREFIX + 'dm/',
  COMMENTS: TOPIC_PREFIX + 'comments',
  GROUPS: TOPIC_PREFIX + 'groups'
};
const POST_COOLDOWN_MS = 180000;
const MAX_POSTS = 100;
const DB_NAME = 'MSZMedyaDB';
const DB_VERSION = 2;
const NEON_COLORS = ['#b026ff','#9b00ff','#8b00cc','#7a00b3','#6a0099','#c44dff','#d580ff','#e6b3ff','#a64dff','#8000ff'];
const USER_COLORS = ['bg-cyan-600','bg-indigo-600','bg-emerald-600','bg-purple-600','bg-rose-600','bg-amber-600'];
const PRESENCE_INTERVAL_MS = 30000;

// ============================================================
// DİL DESTEĞİ
// ============================================================
const langData = {
  tr: { "auth-subtitle":"Gerçek Zamanlı Sosyal Ağ","auth-login-tab":"Giriş Yap","auth-register-tab":"Kayıt Ol","login-username-label":"Kullanıcı Adı","login-password-label":"Şifre","remember-label":"Beni Hatırla","login-submit-btn":"Sisteme Giriş Yap","reg-username-label":"Kullanıcı Adı","reg-password-label":"Şifre","reg-submit-btn":"Hesap Oluştur ve Giriş Yap","nav-feed-label":"Akış","nav-messages-label":"Mesajlar","nav-groups-label":"Gruplar","nav-users-label":"Topluluk","nav-profile-label":"Profilim","settings-change-pass":"Şifre Değiştir","settings-forgot-pass":"Şifremi Unuttum","settings-delete-account":"Hesabı Sil","settings-logout":"Çıkış Yap","sidebar-post-label":"Gönderi","sidebar-followers-label":"Takipçi","sidebar-user-label":"Takip","sidebar-social-title":"Sosyal Bağlantılar","sidebar-website":"Web Sitem","sidebar-instagram":"Instagram","sidebar-log-title":"Sistem Akış Logu","feed-title":"Canlı Gönderi Akışı","submit-post-text":"Paylaş","dm-chats-title":"Sohbetler","chat-profile-btn-text":"Profil","groups-title":"Gruplar","create-group-btn-text":"Grup Oluştur","users-title":"Topluluk","users-subtitle":"En çok takipçisi olan popüler kullanıcılar","rewards-title":"Ödüller","reward-1":"10 Takipçi → ","reward-2":"50 Takipçi → ","reward-3":"100 Takipçi → ","profile-edit-btn":"Profili Düzenle","profile-stat-posts-label":"Gönderi","profile-stat-followers-label":"Takipçi","profile-stat-following-label":"Takip","profile-active-label":"Aktif","profile-posts-title":"Gönderilerim","pub-dm-btn-text":"Mesaj","pub-posts-label":"Gönderi","pub-followers-label":"Takipçi","pub-following-label":"Takip","pub-posts-title":"Gönderileri","pub-active-label":"Aktif","edit-profile-title":"Profili Düzenle","edit-avatar-label":"Profil Fotoğrafı Yükle","edit-avatar-btn-text":"Fotoğraf Seç","edit-avatar-hint":"Otomatik sıkıştırılır.","edit-fullname-label":"Ad Soyad","edit-bio-label":"Biyografi","edit-cancel-btn":"İptal","edit-save-btn":"Kaydet","tik-modal-title":"Tik Al","tik-modal-desc":"Kodunu girmek için aşağıdaki alanı kullan:","tik-confirm-btn":"Onayla","tik-congrats-title":"Tebrikler!","tik-congrats-desc":"Tik başarıyla alındı!","tik-close-btn":"Kapat","tik-get-btn":"Tik Al","notif-modal-title":"Bildirimler","change-pass-title":"Şifre Değiştir","current-pass-label":"Mevcut Şifre","new-pass-label":"Yeni Şifre","new-pass-confirm-label":"Yeni Şifre (Tekrar)","cancel-pass-btn":"İptal","update-pass-btn":"Şifreyi Güncelle","delete-account-title":"Hesabı Sil","delete-warning-text":"Bu işlem geri alınamaz! Tüm gönderileriniz, yorumlarınız ve mesajlarınız silinecektir.","delete-pass-label":"Şifreniz","delete-confirm-label":"Onaylamak için yazın: ","cancel-delete-btn":"İptal","confirm-delete-btn":"Hesabı Sil","forgot-pass-title":"Şifremi Unuttum","forgot-pass-desc":"Yeni şifreni belirle.","forgot-username-label":"Kullanıcı Adı","forgot-new-pass-label":"Yeni Şifre","forgot-new-pass-confirm-label":"Yeni Şifre (Tekrar)","forgot-cancel-btn":"İptal","forgot-reset-btn":"Şifreyi Sıfırla","followers-modal-title":"Takipçiler","following-modal-title":"Takip Edilenler","create-group-title":"Grup Oluştur","group-name-label":"Grup Adı *","group-desc-label":"Açıklama *","group-type-label":"Katılım Tipi *","group-password-label":"Grup Şifresi (isteğe bağlı)","group-emoji-label":"Grup Emojisi (isteğe bağlı)","group-tag-label":"Tag (isteğe bağlı)","group-photo-label":"Grup Fotoğrafı (isteğe bağlı)" },
  en: { "auth-subtitle":"Real-Time Social Network","auth-login-tab":"Login","auth-register-tab":"Register","login-username-label":"Username","login-password-label":"Password","remember-label":"Remember Me","login-submit-btn":"Login","reg-username-label":"Username","reg-password-label":"Password","reg-submit-btn":"Create Account & Login","nav-feed-label":"Feed","nav-messages-label":"Messages","nav-groups-label":"Groups","nav-users-label":"Community","nav-profile-label":"Profile","settings-change-pass":"Change Password","settings-forgot-pass":"Forgot Password","settings-delete-account":"Delete Account","settings-logout":"Logout","sidebar-post-label":"Posts","sidebar-followers-label":"Followers","sidebar-user-label":"Following","sidebar-social-title":"Social Links","sidebar-website":"My Website","sidebar-instagram":"Instagram","sidebar-log-title":"System Log","feed-title":"Live Post Feed","submit-post-text":"Share","dm-chats-title":"Chats","chat-profile-btn-text":"Profile","groups-title":"Groups","create-group-btn-text":"Create Group","users-title":"Community","users-subtitle":"Most followed users","rewards-title":"Rewards","reward-1":"10 Followers → ","reward-2":"50 Followers → ","reward-3":"100 Followers → ","profile-edit-btn":"Edit Profile","profile-stat-posts-label":"Posts","profile-stat-followers-label":"Followers","profile-stat-following-label":"Following","profile-active-label":"Active","profile-posts-title":"My Posts","pub-dm-btn-text":"Message","pub-posts-label":"Posts","pub-followers-label":"Followers","pub-following-label":"Following","pub-posts-title":"Posts","pub-active-label":"Active","edit-profile-title":"Edit Profile","edit-avatar-label":"Upload Profile Photo","edit-avatar-btn-text":"Choose Photo","edit-avatar-hint":"Auto compressed.","edit-fullname-label":"Full Name","edit-bio-label":"Bio","edit-cancel-btn":"Cancel","edit-save-btn":"Save","tik-modal-title":"Get Tik","tik-modal-desc":"Enter your code below:","tik-confirm-btn":"Confirm","tik-congrats-title":"Congratulations!","tik-congrats-desc":"Tik successfully obtained!","tik-close-btn":"Close","tik-get-btn":"Get Tik","notif-modal-title":"Notifications","change-pass-title":"Change Password","current-pass-label":"Current Password","new-pass-label":"New Password","new-pass-confirm-label":"New Password (Again)","cancel-pass-btn":"Cancel","update-pass-btn":"Update Password","delete-account-title":"Delete Account","delete-warning-text":"This action cannot be undone! All your posts, comments and messages will be deleted.","delete-pass-label":"Your Password","delete-confirm-label":"Type to confirm: ","cancel-delete-btn":"Cancel","confirm-delete-btn":"Delete Account","forgot-pass-title":"Forgot Password","forgot-pass-desc":"Set your new password.","forgot-username-label":"Username","forgot-new-pass-label":"New Password","forgot-new-pass-confirm-label":"New Password (Again)","forgot-cancel-btn":"Cancel","forgot-reset-btn":"Reset Password","followers-modal-title":"Followers","following-modal-title":"Following","create-group-title":"Create Group","group-name-label":"Group Name *","group-desc-label":"Description *","group-type-label":"Join Type *","group-password-label":"Group Password (optional)","group-emoji-label":"Group Emoji (optional)","group-tag-label":"Tag (optional)","group-photo-label":"Group Photo (optional)" }
};
let currentLang = 'tr';

// ============================================================
// STATE
// ============================================================
let currentUser = null, mqttClient = null, activeTab = 'feed', selectedDmUser = null, viewingPublicUsername = null;
let tempAvatarBase64 = null, isMqttConnected = false, isDBReady = false, lastPostTime = 0, selectedGroupId = null;
let usersDb = {}, postsDb = [], dmsDb = [], commentsDb = [], groupsDb = [];
let notifications = [], notificationCount = 0, dmUnreadCounts = {}, dmLastMessageTime = {};
let db = null, followersModalTarget = null, followingModalTarget = null;
let presenceInterval = null;

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
      ['users','posts','comments','messages','groups'].forEach(name => {
        if (!d.objectStoreNames.contains(name)) {
          const s = d.createObjectStore(name, { keyPath: name === 'users' ? 'username' : 'id' });
          if (name === 'posts') { s.createIndex('createdAt','createdAt'); s.createIndex('author','author.username'); }
          if (name === 'comments') { s.createIndex('postId','postId'); s.createIndex('createdAt','createdAt'); }
          if (name === 'messages') { s.createIndex('sender','sender'); s.createIndex('recipient','recipient'); s.createIndex('timestamp','timestamp'); }
          if (name === 'groups') { s.createIndex('createdAt','createdAt'); s.createIndex('owner','owner'); }
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

function deleteFromDB(store, key) {
  return new Promise((resolve, reject) => {
    try { const r = tx(store, 'readwrite').delete(key); r.onsuccess = () => resolve(); r.onerror = () => reject(r.error); } catch(e) { reject(e); }
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

async function loadAllFromDB() {
  try {
    const [users, posts, comments, messages, groups] = await Promise.all([
      getAllFromDB('users'), getAllFromDB('posts'), getAllFromDB('comments'),
      getAllFromDB('messages'), getAllFromDB('groups')
    ]);
    const usersObj = {}; users.forEach(u => usersObj[u.username] = u);
    return { users: usersObj, posts, comments, messages, groups };
  } catch(e) { console.error('Veri yükleme hatası:', e); return null; }
}

async function migrateFromLocalStorage() {
  try {
    const stores = [
      { name:'users', key:'sp_social_users' }, { name:'posts', key:'sp_social_posts' },
      { name:'comments', key:'sp_social_comments' }, { name:'messages', key:'sp_social_dms' },
      { name:'groups', key:'sp_social_groups' }
    ];
    for (const s of stores) {
      const data = localStorage.getItem(s.key);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) { for (const item of parsed) await saveToDB(s.name, item); }
        else { for (const [key, value] of Object.entries(parsed)) await saveToDB(s.name, value); }
      }
    }
    return true;
  } catch(e) { console.error('Veri taşıma hatası:', e); return false; }
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
function sanitizeUserObj(u) {
  return { username:u.username, fullname:u.fullname, bio:u.bio, color:u.color, avatarUrl:u.avatarUrl,
    followers:u.followers||[], following:u.following||[], neonColor:u.neonColor||null, hasTik:u.hasTik||false, tikRengi:u.tikRengi||null };
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
    warning:'bg-amber-950 border-amber-800 text-amber-200', info:'bg-cyan-950 border-cyan-800 text-cyan-200' };
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

// ============================================================
// FALLBACK USER - Kullanıcı yoksa oluştur
// ============================================================
function ensureUserExists(username, partialData = {}) {
  if (!username) return null;
  if (usersDb[username]) return usersDb[username];
  const fallback = {
    username,
    fullname: partialData.fullname || username,
    bio: partialData.bio || 'MSZ MEDYA üyesi.',
    color: partialData.color || USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)],
    avatarUrl: partialData.avatarUrl || null,
    followers: partialData.followers || [],
    following: partialData.following || [],
    neonColor: partialData.neonColor || null,
    hasTik: partialData.hasTik || false,
    tikRengi: partialData.tikRengi || null,
    joinedAt: partialData.joinedAt || new Date().toISOString()
  };
  usersDb[username] = fallback;
  return fallback;
}

// ============================================================
// RENDER FONKSİYONLARI
// ============================================================
function renderAvatar(user, size = "w-10 h-10 text-sm") {
  if (user?.avatarUrl) return `<img src="${user.avatarUrl}" class="${size} object-cover rounded-xl shadow" alt="Avatar" loading="lazy">`;
  const letter = user?.fullname ? user.fullname.charAt(0).toUpperCase() : (user?.username ? user.username.charAt(0).toUpperCase() : '?');
  const color = user?.color || 'bg-indigo-600';
  return `<div class="${size} rounded-xl ${color} text-white flex items-center justify-center font-bold shadow">${letter}</div>`;
}

function showTikBadge(user) {
  if (user?.hasTik) {
    const file = user.tikRengi === 'purple' ? 'tick-p.png' : 'tick-b.png';
    return `<img src="${file}" class="tik-rozet" alt="Tik">`;
  }
  return '';
}

function getUserDisplayName(user) {
  if (!user) return '?';
  let name = escapeHtml(user.fullname || user.username);
  if ((user.followers||[]).length >= 10 && user.neonColor) {
    name = `<span class="neon-text" style="color:${user.neonColor}">${name}</span>`;
  }
  return name + showTikBadge(user);
}

function getGroupEmojiForUser(username) {
  for (const g of groupsDb) {
    if (g.members?.includes(username) && g.emoji) return g.emoji + ' ';
  }
  return '';
}

function containsForbidden(text) {
  const allowed = ['youtube.com','youtu.be','instagram.com','twitter.com','x.com'];
  const urlRegex = /(https?:\/\/|www\.)([^\s]+)/gi;
  let m;
  while ((m = urlRegex.exec(text)) !== null) {
    if (allowed.some(d => m[0].includes(d))) return false;
  }
  const forbiddenLinks = /\b(https?:\/\/|www\.)(?!(youtube\.com|youtu\.be|instagram\.com|twitter\.com|x\.com)[\/\s]?)/i;
  const forbiddenWords = /\b(fuck|siktir|amk|orospu|piç|göt|yarrak|amcık|sik|kahpe|kaltak|şerefsiz|hain|döl|sperm|çük|yavşak|ibne|puşt|gavat|pezevenk|şişko|çomar|mal|embesil|gerizekalı|salak|aptal|dangalak|mankafa)\b/i;
  return forbiddenLinks.test(text) || forbiddenWords.test(text);
}

function censorText(text) {
  return containsForbidden(text) ? '****' : text;
}

function convertLinks(text) {
  return text.replace(/(https?:\/\/[^\s]+|www\.[^\s]+)/gi, (url) => {
    const href = url.startsWith('http') ? url : 'https://' + url;
    return `<a href="${href}" target="_blank" class="message-link" rel="noopener">${escapeHtml(url)}</a>`;
  });
}

function renderText(text) {
  const censored = censorText(text);
  return censored === '****' ? '****' : convertLinks(censored);
}

// ============================================================
// SET LANGUAGE
// ============================================================
function setLanguage(lang) {
  if (!langData[lang]) return;
  currentLang = lang;
  const d = langData[lang];
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (d[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = d[key];
      else el.innerText = d[key];
    }
  });
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
  if (usersDb[username]) { showModal('Hata', 'Bu kullanıcı adı zaten alınmış!'); return; }
  const newUser = {
    username, fullname: username, bio: 'MSZ MEDYA üyesi.', password,
    color: USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)],
    avatarUrl: null, followers: [], following: [], neonColor: null, hasTik: false, tikRengi: null,
    joinedAt: new Date().toISOString()
  };
  usersDb[username] = newUser;
  await saveUsersToDB();
  currentUser = newUser;
  sessionStorage.setItem('sp_social_active_user', username);
  showToast('Kayıt başarılı! Hoş geldiniz.', 'success');
  launchMainApp();
}

async function handleLogin(e) {
  e.preventDefault();
  const username = $('login-username').value.trim().toLowerCase();
  const password = $('login-password').value;
  const remember = $('remember-me').checked;
  const user = usersDb[username];
  if (!user || user.password !== password) {
    showModal('Giriş Başarısız', 'Kullanıcı adı veya şifre hatalı.');
    return;
  }
  if (!user.followers) user.followers = [];
  if (!user.following) user.following = [];
  currentUser = user;
  sessionStorage.setItem('sp_social_active_user', username);
  if (remember) {
    localStorage.setItem('sp_social_username', username);
    localStorage.setItem('sp_social_password', password);
  } else {
    localStorage.removeItem('sp_social_username');
    localStorage.removeItem('sp_social_password');
  }
  showToast(`Tekrar hoş geldin, ${user.fullname}!`, 'info');
  launchMainApp();
}

function logout() {
  sessionStorage.removeItem('sp_social_active_user');
  if (presenceInterval) { clearInterval(presenceInterval); presenceInterval = null; }
  if (mqttClient) { try { mqttClient.end(true); } catch(e){} mqttClient = null; }
  currentUser = null;
  selectedDmUser = null;
  viewingPublicUsername = null;
  // Auth ekranına dön, sayfa yenilenmez
  $('main-app').classList.add('hidden');
  $('auth-screen').classList.remove('hidden');
  // Formu temizle
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
  console.log('🚀 MSZ MEDYA v1.9 başlatıldı! Kullanıcı:', currentUser.username);
  updateUserUI();
  initNetworkConnection();
  renderFeed();
  renderDmUserList();
  renderUsersLeaderboard();
  renderGroups();
  updateNotificationBadge();
  updateGroupCreateButton();
}

// ============================================================
// FORGOT PASSWORD (Güvenlik Sorusu)
// ============================================================
function openForgotPasswordModal() {
  if (!currentUser) { showModal('Hata', 'Önce giriş yapmalısınız!'); return; }
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
  if (!currentUser) { showModal('Hata', 'Oturum açmış kullanıcı bulunamadı!'); return; }
  if (answer !== GUVENLIK_CEVABI) { showModal('Güvenlik Hatası', 'Güvenlik cevabı yanlış! Şifrenizi sıfırlayamazsınız.'); return; }
  if (newPass.length < 4) { showModal('Hata', 'Şifre en az 4 karakter olmalı!'); return; }
  if (newPass !== confirmPass) { showModal('Hata', 'Şifreler eşleşmiyor!'); return; }
  currentUser.password = newPass;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  if (localStorage.getItem('sp_social_username') === currentUser.username) {
    localStorage.setItem('sp_social_password', newPass);
  }
  closeForgotPasswordModal();
  showToast('✅ Şifreniz başarıyla sıfırlandı!', 'success');
}

// ============================================================
// FOLLOWERS & FOLLOWING MODALS
// ============================================================
function openFollowersModal(username) {
  followersModalTarget = username;
  const user = usersDb[username];
  if (!user) { showToast('Kullanıcı bulunamadı.', 'error'); return; }
  $('followers-modal-title').innerText = currentLang === 'tr' ? `${user.fullname} Takipçileri` : `${user.fullname}'s Followers`;
  const list = $('followers-list');
  const followers = user.followers || [];
  if (followers.length === 0) {
    list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz takipçi yok.</div>`;
  } else {
    list.innerHTML = followers.map(f => {
      const fu = ensureUserExists(f);
      if (!fu) return '';
      return `<div class="flex items-center justify-between p-2 hover:bg-slate-800 rounded-xl transition">
        <div class="flex items-center gap-3 cursor-pointer" onclick="openPublicProfileModal('${fu.username}'); closeFollowersModal();">
          <div class="w-8 h-8 shrink-0">${renderAvatar(fu, "w-8 h-8 text-xs")}</div>
          <div><div class="font-bold text-xs text-white">${getGroupEmojiForUser(fu.username)}${getUserDisplayName(fu)}</div>
          <div class="text-[10px] text-slate-500">@${fu.username}</div></div>
        </div>
      </div>`;
    }).join('');
  }
  $('followers-modal').classList.remove('hidden');
}
function closeFollowersModal() { $('followers-modal').classList.add('hidden'); followersModalTarget = null; }

function openFollowingModal(username) {
  followingModalTarget = username;
  const user = usersDb[username];
  if (!user) { showToast('Kullanıcı bulunamadı.', 'error'); return; }
  $('following-modal-title').innerText = currentLang === 'tr' ? `${user.fullname} Takip Ettikleri` : `${user.fullname} Following`;
  const list = $('following-list');
  const following = user.following || [];
  if (following.length === 0) {
    list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz kimse takip edilmiyor.</div>`;
  } else {
    list.innerHTML = following.map(f => {
      const fu = ensureUserExists(f);
      if (!fu) return '';
      return `<div class="flex items-center justify-between p-2 hover:bg-slate-800 rounded-xl transition">
        <div class="flex items-center gap-3 cursor-pointer" onclick="openPublicProfileModal('${fu.username}'); closeFollowingModal();">
          <div class="w-8 h-8 shrink-0">${renderAvatar(fu, "w-8 h-8 text-xs")}</div>
          <div><div class="font-bold text-xs text-white">${getGroupEmojiForUser(fu.username)}${getUserDisplayName(fu)}</div>
          <div class="text-[10px] text-slate-500">@${fu.username}</div></div>
        </div>
      </div>`;
    }).join('');
  }
  $('following-modal').classList.remove('hidden');
}
function closeFollowingModal() { $('following-modal').classList.add('hidden'); followingModalTarget = null; }
function openFollowersModalFromPublic() { if (viewingPublicUsername) openFollowersModal(viewingPublicUsername); }
function openFollowingModalFromPublic() { if (viewingPublicUsername) openFollowingModal(viewingPublicUsername); }

// ============================================================
// GRUP SİSTEMİ
// ============================================================
function updateGroupCreateButton() {
  const btn = $('create-group-btn');
  if (!btn) return;
  if (!currentUser?.hasTik) {
    btn.disabled = true;
    btn.className = 'px-3 py-1.5 bg-slate-700 text-slate-400 text-xs font-semibold rounded-xl cursor-not-allowed touch-target';
    btn.innerHTML = `<i class="fa-solid fa-lock mr-1"></i> <span>Tik Gerekli</span>`;
  } else {
    btn.disabled = false;
    btn.className = 'px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold rounded-xl shadow transition touch-target';
    btn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> <span>Grup Oluştur</span>`;
  }
}

function openCreateGroupModal() {
  if (!currentUser?.hasTik) { showModal('Tik Gerekli', 'Grup oluşturmak için Tik sahibi olmalısın!'); return; }
  $('create-group-modal').classList.remove('hidden');
  ['group-name','group-desc','group-password','group-emoji','group-tag'].forEach(id => { const el = $(id); if (el) el.value = ''; });
  $('group-type').value = 'public';
  $('group-photo').value = '';
}
function closeCreateGroupModal() { $('create-group-modal').classList.add('hidden'); }

async function createGroup(e) {
  e.preventDefault();
  const name = $('group-name').value.trim();
  const desc = $('group-desc').value.trim();
  const type = $('group-type').value;
  const password = $('group-password').value.trim();
  const emoji = $('group-emoji').value.trim() || '📁';
  const tag = $('group-tag').value.trim();
  const photoInput = $('group-photo');
  if (!name || !desc) { showModal('Hata', 'Grup adı ve açıklama zorunlu!'); return; }
  let photoData = null;
  if (photoInput.files?.[0]) {
    const reader = new FileReader();
    photoData = await new Promise(resolve => { reader.onload = e => resolve(e.target.result); reader.readAsDataURL(photoInput.files[0]); });
  }
  const newGroup = {
    id: 'group_' + Date.now() + '_' + Math.random().toString(36).substring(2,7),
    name, description: desc, type, password: password || null, emoji, tag: tag || null,
    photo: photoData || null, owner: currentUser.username, members: [currentUser.username],
    joinRequests: [], createdAt: new Date().toISOString()
  };
  groupsDb.push(newGroup);
  await saveGroupsToDB();
  closeCreateGroupModal();
  renderGroups();
  showToast('✅ Grup başarıyla oluşturuldu!', 'success');
  if (mqttClient?.connected) mqttClient.publish(TOPICS.GROUPS, JSON.stringify({ type: 'NEW_GROUP', group: newGroup }));
}

function renderGroups() {
  const container = $('groups-container');
  if (!container) return;
  if (groupsDb.length === 0) {
    container.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz hiç grup oluşturulmamış.</div>`;
    return;
  }
  const sorted = [...groupsDb].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  container.innerHTML = sorted.map(g => {
    const isMember = g.members?.includes(currentUser.username);
    const isOwner = g.owner === currentUser.username;
    const memberCount = g.members?.length || 0;
    const emoji = g.emoji || '📁';
    return `<div class="group-card bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg cursor-pointer" onclick="openGroupDetail('${g.id}')">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl overflow-hidden flex-shrink-0">
          ${g.photo ? `<img src="${g.photo}" class="w-full h-full object-cover">` : emoji}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="font-bold text-white text-sm truncate">${escapeHtml(g.name)}</h3>
            ${isOwner ? '<span class="text-[9px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded font-semibold">Kurucu</span>' : ''}
            ${isMember ? '<span class="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-semibold">Üye</span>' : ''}
          </div>
          <p class="text-xs text-slate-400 truncate">${escapeHtml(g.description)}</p>
          <div class="flex items-center gap-3 mt-1 text-[10px] text-slate-500">
            <span>👥 ${memberCount} üye</span>
            <span>🏷️ ${g.type === 'public' ? 'Herkese Açık' : g.type === 'request' ? 'İstek Gerekli' : 'Sadece Takipçiler'}</span>
            ${g.tag ? `<span class="text-cyan-400">${escapeHtml(g.tag)}</span>` : ''}
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          ${isOwner ? `<button onclick="event.stopPropagation(); deleteGroup('${g.id}')" class="p-2 hover:bg-rose-500/10 text-slate-500 hover:text-rose-400 rounded-lg transition text-xs"><i class="fa-solid fa-trash-can"></i></button>` : ''}
          <i class="fa-solid fa-chevron-right text-slate-600 text-xs"></i>
        </div>
      </div>
    </div>`;
  }).join('');
}

function openGroupDetail(groupId) {
  selectedGroupId = groupId;
  const g = groupsDb.find(x => x.id === groupId);
  if (!g) { showToast('Grup bulunamadı.', 'error'); return; }
  $('group-detail-name').innerText = g.name;
  $('group-detail-emoji').innerText = g.emoji || '📁';
  $('group-detail-desc').innerText = g.description;
  $('group-detail-owner').innerText = `Kurucu: @${g.owner}`;
  const typeLabels = { public:'Herkese Açık', request:'İstek Gönder', followers:'Sadece Takipçiler' };
  $('group-detail-type').innerText = typeLabels[g.type] || 'Herkese Açık';
  const photoEl = $('group-detail-photo');
  if (g.photo) { photoEl.innerHTML = `<img src="${g.photo}" class="w-full h-full object-cover rounded-2xl">`; }
  else { photoEl.innerHTML = g.emoji || '📁'; photoEl.className = 'w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl overflow-hidden'; }
  const isMember = g.members?.includes(currentUser.username);
  const isOwner = g.owner === currentUser.username;
  const hasPassword = g.password?.length > 0;
  const passContainer = $('group-detail-password-container');
  if (hasPassword && !isMember) passContainer.classList.remove('hidden');
  else passContainer.classList.add('hidden');
  const joinBtn = $('group-detail-join-btn'), leaveBtn = $('group-detail-leave-btn'), deleteBtn = $('group-detail-delete-btn');
  if (isMember) {
    joinBtn.classList.add('hidden'); leaveBtn.classList.remove('hidden'); deleteBtn.classList.add('hidden');
    if (isOwner) deleteBtn.classList.remove('hidden');
  } else {
    joinBtn.classList.remove('hidden'); leaveBtn.classList.add('hidden'); deleteBtn.classList.add('hidden');
    joinBtn.innerText = g.type === 'request' ? 'Katılmak İste' : g.type === 'followers' ? 'Takip Et ve Katıl' : 'Gruba Katıl';
  }
  const members = g.members || [];
  $('group-detail-member-count').innerText = members.length;
  const membersContainer = $('group-detail-members');
  if (members.length === 0) {
    membersContainer.innerHTML = `<div class="text-xs text-slate-500 text-center py-4">Henüz katılımcı yok.</div>`;
  } else {
    membersContainer.innerHTML = members.map(u => {
      const user = ensureUserExists(u);
      if (!user) return '';
      return `<div class="flex items-center gap-2 p-1.5 hover:bg-slate-800 rounded-lg transition cursor-pointer" onclick="openPublicProfileModal('${u}'); closeGroupDetailModal();">
        <div class="w-6 h-6 shrink-0">${renderAvatar(user, "w-6 h-6 text-xs")}</div>
        <span class="text-xs text-slate-200">${getGroupEmojiForUser(u)}${escapeHtml(user.fullname)}${u === g.owner ? ' 👑' : ''}</span>
        <span class="text-[9px] text-slate-500">@${escapeHtml(u)}</span>
      </div>`;
    }).join('');
  }
  $('group-detail-modal').classList.remove('hidden');
}
function closeGroupDetailModal() { $('group-detail-modal').classList.add('hidden'); selectedGroupId = null; }

async function joinGroup() {
  if (!selectedGroupId) return;
  const g = groupsDb.find(x => x.id === selectedGroupId);
  if (!g) { showToast('Grup bulunamadı.', 'error'); return; }
  if (g.password?.length > 0) {
    if ($('group-detail-password-input').value.trim() !== g.password) {
      showToast('❌ Grup şifresi yanlış!', 'error'); return;
    }
  }
  if (g.type === 'followers') {
    if (!currentUser.followers?.includes(g.owner)) {
      showToast('❌ Bu gruba katılmak için kurucuyu takip etmelisin!', 'warning'); return;
    }
  }
  if (g.type === 'request') {
    if (!g.joinRequests) g.joinRequests = [];
    if (!g.joinRequests.includes(currentUser.username)) {
      g.joinRequests.push(currentUser.username);
      await saveGroupsToDB();
      showToast('✅ Katılma isteğin gönderildi!', 'success');
      renderGroups();
      openGroupDetail(selectedGroupId);
    } else showToast('Zaten istek gönderdin.', 'info');
    return;
  }
  if (!g.members?.includes(currentUser.username)) {
    g.members.push(currentUser.username);
    await saveGroupsToDB();
    showToast('✅ Gruba katıldın!', 'success');
    renderGroups();
    openGroupDetail(selectedGroupId);
    updateUserUI();
  }
}

async function leaveGroup() {
  if (!selectedGroupId) return;
  const g = groupsDb.find(x => x.id === selectedGroupId);
  if (!g) { showToast('Grup bulunamadı.', 'error'); return; }
  if (g.owner === currentUser.username) {
    showModal('Uyarı', 'Kurucusu olduğun gruptan ayrılamazsın. Grubu silmen gerekir.');
    return;
  }
  g.members = g.members.filter(u => u !== currentUser.username);
  await saveGroupsToDB();
  showToast('Gruptan ayrıldın.', 'info');
  renderGroups();
  closeGroupDetailModal();
  updateUserUI();
}

async function deleteGroup(groupId) {
  const id = groupId || selectedGroupId;
  if (!id) return;
  const g = groupsDb.find(x => x.id === id);
  if (!g) { showToast('Grup bulunamadı.', 'error'); return; }
  if (g.owner !== currentUser.username) { showModal('Yetkisiz', 'Sadece kurucu grubu silebilir.'); return; }
  if (!confirm(`"${g.name}" grubunu silmek istediğine emin misin?`)) return;
  groupsDb = groupsDb.filter(x => x.id !== id);
  await saveGroupsToDB();
  showToast('✅ Grup silindi.', 'success');
  renderGroups();
  closeGroupDetailModal();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.GROUPS, JSON.stringify({ type: 'DELETE_GROUP', groupId: id }));
}

// ============================================================
// DELETE ACCOUNT
// ============================================================
function openDeleteAccountModal() {
  $('delete-account-modal').classList.remove('hidden');
  $('delete-password').value = '';
  $('delete-confirm-text').value = '';
}
function closeDeleteAccountModal() { $('delete-account-modal').classList.add('hidden'); }

async function deleteAccount(e) {
  e.preventDefault();
  const password = $('delete-password').value;
  const confirmText = $('delete-confirm-text').value.trim().toLowerCase();
  if (currentUser.password !== password) { showModal('Hata', 'Şifreniz yanlış!'); return; }
  if (confirmText !== 'hesabımı sil') { showModal('Hata', 'Lütfen onaylamak için "hesabımı sil" yazın.'); return; }
  const deletedUsername = currentUser.username;

  // Önce herkese haber ver
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.USERS, JSON.stringify({ type: 'DELETE_ACCOUNT', username: deletedUsername }));
  }

  // Kendi DB'mizden temizle
  const userPosts = postsDb.filter(p => p.author.username === deletedUsername);
  for (const p of userPosts) {
    postsDb = postsDb.filter(x => x.id !== p.id);
    commentsDb = commentsDb.filter(c => c.postId !== p.id);
  }
  await savePostsToDB(); await saveCommentsToDB();
  dmsDb = dmsDb.filter(m => m.sender !== deletedUsername && m.recipient !== deletedUsername);
  await saveMessagesToDB();
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
  showToast('✅ Hesabınız başarıyla silindi.', 'success');
  if (presenceInterval) { clearInterval(presenceInterval); presenceInterval = null; }
  if (mqttClient) { try { mqttClient.end(true); } catch(e){} mqttClient = null; }
  currentUser = null;
  // Auth ekranına dön, reload yok
  $('main-app').classList.add('hidden');
  $('auth-screen').classList.remove('hidden');
  const lu = $('login-username'), lp = $('login-password');
  if (lu) lu.value = '';
  if (lp) lp.value = '';
}

// ============================================================
// PASSWORD
// ============================================================
function openChangePasswordModal() {
  $('change-password-modal').classList.remove('hidden');
  $('current-password').value = '';
  $('new-password').value = '';
  $('new-password-confirm').value = '';
}
function closeChangePasswordModal() { $('change-password-modal').classList.add('hidden'); }

async function changePassword(e) {
  e.preventDefault();
  const current = $('current-password').value;
  const newPass = $('new-password').value;
  const confirmPass = $('new-password-confirm').value;
  if (currentUser.password !== current) { showModal('Hata', 'Mevcut şifreniz yanlış!'); return; }
  if (newPass.length < 4) { showModal('Hata', 'Yeni şifre en az 4 karakter olmalı!'); return; }
  if (newPass !== confirmPass) { showModal('Hata', 'Yeni şifreler eşleşmiyor!'); return; }
  currentUser.password = newPass;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  if (localStorage.getItem('sp_social_username') === currentUser.username) {
    localStorage.setItem('sp_social_password', newPass);
  }
  closeChangePasswordModal();
  showToast('Şifreniz başarıyla güncellendi!', 'success');
}

// ============================================================
// SETTINGS
// ============================================================
function toggleSettingsDropdown() {
  $('settings-dropdown').classList.toggle('hidden');
}
document.addEventListener('click', function(e) {
  const dropdown = $('settings-dropdown');
  if (!dropdown) return;
  if (!e.target.closest('.relative') && !dropdown.classList.contains('hidden')) {
    dropdown.classList.add('hidden');
  }
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
      logSystem('Canlı ağ bağlantısı başarıyla oluşturuldu.');
      statusBadge.className = 'flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium';
      statusText.innerText = 'Canlı Bağlantı';
      mqttClient.subscribe(TOPICS.POSTS);
      mqttClient.subscribe(TOPICS.LIKES);
      mqttClient.subscribe(TOPICS.USERS);
      mqttClient.subscribe(TOPICS.FOLLOWS);
      mqttClient.subscribe(TOPICS.DM + currentUser.username);
      mqttClient.subscribe(TOPICS.COMMENTS);
      mqttClient.subscribe(TOPICS.GROUPS);
      publishPresence();
      // Tüm kullanıcı listesini iste
      mqttClient.publish(TOPICS.USERS, JSON.stringify({ type: 'REQUEST_USERS', from: currentUser.username }));
      // Periyodik presence
      if (presenceInterval) clearInterval(presenceInterval);
      presenceInterval = setInterval(publishPresence, PRESENCE_INTERVAL_MS);
    });
    mqttClient.on('message', (topic, payload) => {
      try { const data = JSON.parse(payload.toString()); handleIncomingNetworkData(topic, data); } catch(e) { console.error('Data Parsing Error:', e); }
    });
    mqttClient.on('error', (err) => {
      isMqttConnected = false;
      logSystem(`Bağlantı Hatası: ${err.message}`);
      statusBadge.className = 'flex items-center gap-1.5 text-[10px] text-rose-400 font-medium';
      statusText.innerText = 'Bağlantı Hatası';
    });
    mqttClient.on('offline', () => {
      isMqttConnected = false;
      statusBadge.className = 'flex items-center gap-1.5 text-[10px] text-amber-400 font-medium';
      statusText.innerText = 'Çevrimdışı';
    });
    mqttClient.on('reconnect', () => { logSystem('Yeniden bağlanılıyor...'); statusText.innerText = 'Yeniden Bağlanıyor...'; });
  } catch(e) { logSystem(`Bağlantı Başlatma Hatası: ${e.message}`); }
}

function publishPresence() {
  if (!mqttClient?.connected || !currentUser) return;
  mqttClient.publish(TOPICS.USERS, JSON.stringify({ type: 'PRESENCE', user: sanitizeUserObj(currentUser) }));
}

// ============================================================
// MQTT MESSAGE HANDLER
// ============================================================
async function handleIncomingNetworkData(topic, data) {
  if (topic === TOPICS.POSTS && data.type === 'NEW_POST') {
    if (!postsDb.some(p => p.id === data.post.id)) {
      postsDb.unshift(data.post);
      if (postsDb.length > MAX_POSTS) postsDb = postsDb.slice(0, MAX_POSTS);
      await savePostsToDB();
      if (data.post.author.username !== currentUser.username) {
        ensureUserExists(data.post.author.username, data.post.author);
        addNotification(`${data.post.author.fullname} (@${data.post.author.username}) yeni bir gönderi paylaştı.`);
      }
    }
    renderFeed(); return;
  }
  if (topic === TOPICS.POSTS && data.type === 'DELETE_POST') {
    postsDb = postsDb.filter(p => p.id !== data.postId);
    commentsDb = commentsDb.filter(c => c.postId !== data.postId);
    await savePostsToDB(); await saveCommentsToDB();
    renderFeed(); renderProfileTab?.(); return;
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
      usersDb[rxUser.username] = {
        ...(existing || {}), ...rxUser,
        followers: rxUser.followers || (existing?.followers || []),
        following: rxUser.following || (existing?.following || [])
      };
      await saveUsersToDB();
      renderDmUserList();
      renderUsersLeaderboard();
    }
    return;
  }
  if (topic === TOPICS.USERS && data.type === 'REQUEST_USERS') {
    if (data.from !== currentUser.username) publishPresence();
    return;
  }
  if (topic === TOPICS.USERS && data.type === 'DELETE_ACCOUNT') {
    const deleted = data.username;
    if (deleted === currentUser.username) return;
    postsDb = postsDb.filter(p => p.author.username !== deleted);
    commentsDb = commentsDb.filter(c => c.author?.username !== deleted);
    dmsDb = dmsDb.filter(m => m.sender !== deleted && m.recipient !== deleted);
    groupsDb.forEach(g => {
      if (g.members) g.members = g.members.filter(u => u !== deleted);
      if (g.joinRequests) g.joinRequests = g.joinRequests.filter(u => u !== deleted);
    });
    groupsDb = groupsDb.filter(g => g.owner !== deleted);
    delete usersDb[deleted];
    for (const [uname, user] of Object.entries(usersDb)) {
      if (user.following?.includes(deleted)) user.following = user.following.filter(u => u !== deleted);
      if (user.followers?.includes(deleted)) user.followers = user.followers.filter(u => u !== deleted);
    }
    await saveUsersToDB(); await savePostsToDB(); await saveCommentsToDB(); await saveMessagesToDB(); await saveGroupsToDB();
    renderFeed(); renderDmUserList(); renderUsersLeaderboard(); renderGroups();
    return;
  }
  if (topic === TOPICS.FOLLOWS && data.type === 'FOLLOW_UPDATE') {
    if (usersDb[data.targetUsername]) usersDb[data.targetUsername].followers = data.followers;
    if (usersDb[data.followerUsername]) usersDb[data.followerUsername].following = data.following;
    await saveUsersToDB();
    if (data.targetUsername === currentUser.username) currentUser.followers = data.followers;
    if (data.followerUsername !== currentUser.username && data.targetUsername === currentUser.username) {
      const follower = usersDb[data.followerUsername];
      if (follower) addNotification(`${follower.fullname} (@${follower.username}) sizi takip etmeye başladı! 🎉`);
    }
    renderUsersLeaderboard();
    updateUserUI();
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
    addNotification(`@${data.message.sender} kullanıcısından yeni mesajınız var! 💬`);
    if (activeTab === 'messages' && selectedDmUser === data.message.sender) {
      dmUnreadCounts[data.message.sender] = 0;
      renderChatMessages();
      renderDmUserList();
    } else {
      updateUnreadBadge();
      renderDmUserList();
    }
    return;
  }
  if (topic === TOPICS.COMMENTS && data.type === 'NEW_COMMENT') {
    if (!commentsDb.some(c => c.id === data.comment.id)) {
      commentsDb.push(data.comment);
      await saveCommentsToDB();
      ensureUserExists(data.comment.author.username, data.comment.author);
      if (data.comment.author.username !== currentUser.username) {
        const post = postsDb.find(p => p.id === data.comment.postId);
        if (post?.author.username === currentUser.username) {
          addNotification(`${data.comment.author.fullname} (@${data.comment.author.username}) gönderinize yorum yaptı: "${data.comment.text}"`);
        } else {
          addNotification(`${data.comment.author.fullname} (@${data.comment.author.username}) bir gönderiye yorum yaptı.`);
        }
      }
      renderFeed();
    }
    return;
  }
  if (topic === TOPICS.GROUPS && data.type === 'NEW_GROUP') {
    if (!groupsDb.some(g => g.id === data.group.id)) {
      groupsDb.push(data.group);
      await saveGroupsToDB();
      renderGroups();
    }
    return;
  }
  if (topic === TOPICS.GROUPS && data.type === 'DELETE_GROUP') {
    groupsDb = groupsDb.filter(g => g.id !== data.groupId);
    await saveGroupsToDB();
    renderGroups();
    return;
  }
}

// ============================================================
// BİLDİRİMLER
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
  if (notificationCount > 0) {
    badge.innerText = notificationCount > 99 ? '99+' : notificationCount;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function openNotificationModal() {
  const modal = $('notification-modal'), list = $('notification-list');
  modal.classList.remove('hidden');
  notifications.forEach(n => n.read = true);
  notificationCount = 0;
  updateNotificationBadge();
  if (notifications.length === 0) {
    list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz bildirim yok.</div>`;
  } else {
    list.innerHTML = notifications.map(n => `
      <div class="bg-slate-950 rounded-xl p-3 border border-slate-800">
        <p class="text-xs text-slate-200">${escapeHtml(n.text)}</p>
        <span class="text-[9px] text-slate-500 font-mono">${formatTimeAgo(n.timestamp)}</span>
      </div>
    `).join('');
  }
}
function closeNotificationModal() { $('notification-modal').classList.add('hidden'); }
function clearAllNotifications() {
  notifications = []; notificationCount = 0; updateNotificationBadge(); closeNotificationModal();
  showToast('Tüm bildirimler temizlendi.', 'info');
}

// ============================================================
// TAB SWITCHING
// ============================================================
function switchTab(tab) {
  activeTab = tab;
  const tabs = ['feed','messages','groups','users','profile'];
  const contentIds = ['tab-content-feed','tab-content-messages','tab-content-groups','tab-content-users','tab-content-profile'];
  const navIds = ['nav-feed','nav-messages','nav-groups','nav-users','nav-profile'];
  contentIds.forEach(id => { const el = $(id); if (el) el.classList.add('hidden'); });
  navIds.forEach(id => {
    const el = $(id); if (!el) return;
    el.className = 'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 text-slate-400 hover:bg-slate-800/60 hover:text-white transition relative';
  });
  const idx = tabs.indexOf(tab);
  if (idx !== -1) {
    const cEl = $(contentIds[idx]); if (cEl) cEl.classList.remove('hidden');
    const nEl = $(navIds[idx]); if (nEl) nEl.className = 'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-slate-800 text-cyan-400 border border-slate-700/50';
  }
  if (tab === 'feed') renderFeed();
  else if (tab === 'messages') { $('unread-dm-badge').classList.add('hidden'); renderDmUserList(); if (selectedDmUser) renderChatMessages(); }
  else if (tab === 'groups') renderGroups();
  else if (tab === 'users') renderUsersLeaderboard();
  else if (tab === 'profile') renderProfileTab();
}

// ============================================================
// USER UI UPDATE
// ============================================================
function updateUserUI() {
  if (!currentUser) return;
  $('header-avatar').innerHTML = renderAvatar(currentUser, "w-full h-full text-sm");
  $('header-username-display').innerHTML = '@' + currentUser.username + showTikBadge(currentUser);
  $('sidebar-avatar').innerHTML = renderAvatar(currentUser, "w-full h-full text-lg");
  $('sidebar-username-display').innerHTML = getUserDisplayName(currentUser);
  $('sidebar-bio').innerText = currentUser.bio;
  $('composer-avatar').innerHTML = renderAvatar(currentUser, "w-full h-full text-sm");
  const myPosts = postsDb.filter(p => p.author.username === currentUser.username);
  $('sidebar-post-count').innerText = myPosts.length;
  $('sidebar-followers-count').innerText = (currentUser.followers || []).length;
  $('sidebar-user-count').innerText = (currentUser.following || []).length;
  updateGroupCreateButton();
}
function toggleImageInput() { $('image-url-container').classList.toggle('hidden'); }

// ============================================================
// POSTS
// ============================================================
async function submitPost() {
  const input = $('post-input'), imgInput = $('post-image-url');
  if (!input) return;
  let text = input.value.trim();
  if (containsForbidden(text)) { showToast('Bu gönderi yasaklı içerik içeriyor!', 'error'); return; }
  text = censorText(text);
  const imageUrl = imgInput?.value.trim() || '';
  if (!text) { showToast('Lütfen yayınlamak için bir şeyler yazın.', 'warning'); return; }
  const now = Date.now();
  if (now - lastPostTime < POST_COOLDOWN_MS) {
    const remaining = Math.ceil((POST_COOLDOWN_MS - (now - lastPostTime)) / 1000);
    showToast(`Lütfen ${remaining} saniye bekleyin.`, 'warning');
    return;
  }
  lastPostTime = now;
  const newPost = {
    id: 'post_' + Date.now() + '_' + Math.random().toString(36).substring(2,7),
    text, imageUrl, createdAt: new Date().toISOString(), likes: [], comments: [],
    author: { username: currentUser.username, fullname: currentUser.fullname, color: currentUser.color || 'bg-cyan-600',
      avatarUrl: currentUser.avatarUrl || null, hasTik: currentUser.hasTik || false, tikRengi: currentUser.tikRengi || null }
  };
  postsDb.unshift(newPost);
  if (postsDb.length > MAX_POSTS) postsDb = postsDb.slice(0, MAX_POSTS);
  await savePostsToDB();
  renderFeed();
  updateUserUI();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.POSTS, JSON.stringify({ type: 'NEW_POST', post: newPost }));
  input.value = '';
  if (imgInput) imgInput.value = '';
  $('image-url-container').classList.add('hidden');
  $('char-counter').innerText = '0 / 280';
  showToast('✅ Gönderiniz yayınlandı!', 'success');
}

function toggleComments(postId) {
  const container = $('comments-container-' + postId);
  if (container) {
    container.classList.toggle('hidden');
    if (!container.classList.contains('hidden')) renderComments(postId);
  }
}

async function submitComment(postId) {
  const input = $('comment-input-' + postId);
  if (!input) return;
  let text = input.value.trim();
  if (!text) return;
  if (containsForbidden(text)) { showToast('Yorum yasaklı içerik içeriyor!', 'error'); return; }
  text = censorText(text);
  const comment = {
    id: 'cmt_' + Date.now() + '_' + Math.random().toString(36).substring(2,7),
    postId, text,
    author: { username: currentUser.username, fullname: currentUser.fullname, color: currentUser.color || 'bg-cyan-600',
      avatarUrl: currentUser.avatarUrl || null, hasTik: currentUser.hasTik || false, tikRengi: currentUser.tikRengi || null },
    createdAt: new Date().toISOString()
  };
  commentsDb.push(comment);
  await saveCommentsToDB();
  const post = postsDb.find(p => p.id === postId);
  if (post) { if (!post.comments) post.comments = []; post.comments.push(comment.id); await savePostsToDB(); }
  input.value = '';
  renderComments(postId);
  renderFeed();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.COMMENTS, JSON.stringify({ type: 'NEW_COMMENT', comment }));
  const container = $('comments-container-' + postId);
  if (container?.classList.contains('hidden')) container.classList.remove('hidden');
}

function renderComments(postId) {
  const container = $('comments-list-' + postId);
  if (!container) return;
  const postComments = commentsDb.filter(c => c.postId === postId);
  if (postComments.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-500 text-center py-2">Henüz yorum yok. İlk yorumu sen yap!</div>`;
    return;
  }
  container.innerHTML = postComments.map(c => `
    <div class="flex items-start gap-2 p-2 bg-slate-950 rounded-xl">
      <div class="w-6 h-6 shrink-0">${renderAvatar(c.author, "w-6 h-6 text-xs")}</div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-bold text-xs text-white">${escapeHtml(c.author.fullname)}${showTikBadge(c.author)}</span>
          <span class="text-[9px] text-slate-500">@${escapeHtml(c.author.username)}</span>
          <span class="text-[9px] text-slate-600">${formatTimeAgo(c.createdAt)}</span>
        </div>
        <p class="text-xs text-slate-300 break-words">${renderText(c.text)}</p>
      </div>
      ${c.author.username === currentUser.username ? `<button onclick="deleteComment('${c.id}','${postId}')" class="text-slate-600 hover:text-rose-400 text-xs transition touch-target p-1"><i class="fa-solid fa-times"></i></button>` : ''}
    </div>
  `).join('');
}

async function deleteComment(commentId, postId) {
  commentsDb = commentsDb.filter(c => c.id !== commentId);
  await saveCommentsToDB();
  const post = postsDb.find(p => p.id === postId);
  if (post?.comments) { post.comments = post.comments.filter(id => id !== commentId); await savePostsToDB(); }
  renderComments(postId);
  renderFeed();
}

async function toggleLike(postId) {
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
  commentsDb = commentsDb.filter(c => c.postId !== postId);
  await saveCommentsToDB();
  postsDb = postsDb.filter(p => p.id !== postId);
  await savePostsToDB();
  renderFeed();
  renderProfileTab();
  updateUserUI();
  showToast('Gönderi silindi.', 'info');
  if (mqttClient?.connected) mqttClient.publish(TOPICS.POSTS, JSON.stringify({ type: 'DELETE_POST', postId }));
}

function createPostCard(post) {
  const isLiked = post.likes.includes(currentUser.username);
  const isOwner = post.author.username === currentUser.username;
  const author = ensureUserExists(post.author.username, post.author);
  const commentCount = commentsDb.filter(c => c.postId === post.id).length;
  const groupEmoji = getGroupEmojiForUser(author.username);
  const authorDisplay = getUserDisplayName(author);
  return `<div class="bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-lg transition space-y-3 post-card">
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-3 cursor-pointer min-w-0" onclick="openPublicProfileModal('${escapeHtml(author.username)}')">
        <div class="w-10 h-10 shrink-0">${renderAvatar(author, "w-10 h-10 text-sm")}</div>
        <div class="min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-bold text-sm text-white hover:text-cyan-400 transition truncate">${groupEmoji}${authorDisplay}</span>
            <span class="text-xs text-slate-500 truncate">@${escapeHtml(author.username)}</span>
          </div>
          <span class="text-[10px] text-slate-500 font-mono">${formatTimeAgo(post.createdAt)}</span>
        </div>
      </div>
      <div class="flex items-center gap-1 shrink-0">
        ${!isOwner ? `<button onclick="startDirectMessageWith('${escapeHtml(author.username)}')" title="DM Gönder" class="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-lg transition text-xs touch-target"><i class="fa-solid fa-paper-plane"></i></button>` : ''}
        ${isOwner ? `<button onclick="deletePost('${post.id}')" title="Gönderiyi Sil" class="p-1.5 hover:bg-rose-500/10 text-slate-500 hover:text-rose-400 rounded-lg transition text-xs touch-target"><i class="fa-solid fa-trash-can"></i></button>` : ''}
      </div>
    </div>
    <p class="text-sm text-slate-200 leading-relaxed whitespace-pre-line break-words">${renderText(post.text)}</p>
    ${post.imageUrl ? `<div class="rounded-xl overflow-hidden border border-slate-800 max-h-80 bg-slate-950"><img src="${escapeHtml(post.imageUrl)}" onerror="this.style.display='none'" alt="Gönderi Görseli" class="w-full h-full object-cover" loading="lazy"></div>` : ''}
    <div class="flex items-center gap-4 sm:gap-6 pt-2 border-t border-slate-800/60 text-xs text-slate-400 flex-wrap">
      <button onclick="toggleLike('${post.id}')" class="flex items-center gap-1.5 hover:text-rose-400 transition touch-target ${isLiked ? 'text-rose-500 font-bold' : ''}">
        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span>${post.likes.length}</span>
      </button>
      <button onclick="toggleComments('${post.id}')" class="flex items-center gap-1.5 hover:text-cyan-400 transition touch-target">
        <i class="fa-regular fa-comment"></i> <span>${commentCount} Yorum</span>
      </button>
      <button onclick="startDirectMessageWith('${escapeHtml(author.username)}')" class="flex items-center gap-1.5 hover:text-cyan-400 transition touch-target">
        <i class="fa-regular fa-paper-plane"></i> <span>Mesaj At</span>
      </button>
    </div>
    <div id="comments-container-${post.id}" class="hidden space-y-3 pt-2 border-t border-slate-800/40">
      <div id="comments-list-${post.id}" class="space-y-2 max-h-48 overflow-y-auto custom-scrollbar"></div>
      <div class="flex gap-2">
        <input id="comment-input-${post.id}" type="text" placeholder="Yorum yaz..." class="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 min-h-[40px]">
        <button onclick="submitComment('${post.id}')" class="px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl text-xs font-semibold transition touch-target"><i class="fa-solid fa-paper-plane"></i></button>
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
  if (sorted.length === 0) {
    container.innerHTML = `<div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500 space-y-2"><i class="fa-solid fa-comments text-3xl text-slate-700"></i><p class="text-sm">Henüz hiç gönderi paylaşılmadı. İlk gönderiyi sen at!</p></div>`;
    return;
  }
  container.innerHTML = sorted.map(p => createPostCard(p)).join('');
}

// ============================================================
// USERS / LEADERBOARD
// ============================================================
function renderUsersLeaderboard() {
  const container = $('users-leaderboard-container');
  const badge = $('total-users-badge');
  if (!container) return;
  const allUsers = Object.values(usersDb);
  if (badge) badge.innerText = `${allUsers.length} Kayıtlı Üye`;
  allUsers.sort((a,b) => (b.followers||[]).length - (a.followers||[]).length);
  if (allUsers.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">Henüz kimse katılmış görünmüyor.</div>`;
    return;
  }
  container.innerHTML = allUsers.map((u, i) => {
    const followerCount = (u.followers||[]).length;
    const isMe = u.username === currentUser.username;
    const isFollowing = currentUser.following?.includes(u.username);
    const groupEmoji = getGroupEmojiForUser(u.username);
    let rank = `<span class="w-7 h-7 rounded-xl bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center shrink-0">${i+1}</span>`;
    if (i === 0) rank = `<span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥇</span>`;
    if (i === 1) rank = `<span class="w-8 h-8 rounded-xl bg-slate-400/20 text-slate-300 border border-slate-400/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥈</span>`;
    if (i === 2) rank = `<span class="w-8 h-8 rounded-xl bg-amber-700/20 text-amber-600 border border-amber-700/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥉</span>`;
    return `<div class="bg-slate-950 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-3 flex items-center justify-between gap-3 transition">
      <div class="flex items-center gap-3 overflow-hidden min-w-0">
        ${rank}
        <div class="w-10 h-10 shrink-0 cursor-pointer" onclick="openPublicProfileModal('${escapeHtml(u.username)}')">${renderAvatar(u, "w-10 h-10 text-sm")}</div>
        <div class="overflow-hidden cursor-pointer min-w-0" onclick="openPublicProfileModal('${escapeHtml(u.username)}')">
          <div class="flex items-center gap-2 flex-wrap">
            <h4 class="font-bold text-sm text-white hover:text-cyan-400 transition truncate">${groupEmoji}${getUserDisplayName(u)}</h4>
            ${isMe ? `<span class="text-[9px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded font-semibold shrink-0">Sen</span>` : ''}
            ${followerCount >= 10 && u.neonColor ? `<span class="text-[9px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded font-semibold shrink-0">✨ Neon</span>` : ''}
          </div>
          <p class="text-xs text-slate-500 truncate">@${escapeHtml(u.username)} • <span class="text-indigo-400 font-semibold">${followerCount} Takipçi</span></p>
        </div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${!isMe ? `
          <button onclick="toggleFollowUser('${escapeHtml(u.username)}')" class="px-2 sm:px-3 py-1.5 text-xs font-semibold rounded-xl transition touch-target ${isFollowing ? 'bg-slate-800 text-slate-300 hover:bg-rose-500/20 hover:text-rose-400' : 'bg-cyan-500 hover:bg-cyan-400 text-white shadow'}">
            ${isFollowing ? 'Takiptesin' : 'Takip Et'}
          </button>
          <button onclick="startDirectMessageWith('${escapeHtml(u.username)}')" title="Mesaj Gönder" class="w-8 h-8 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl flex items-center justify-center text-xs transition touch-target"><i class="fa-solid fa-paper-plane"></i></button>
        ` : `<button onclick="switchTab('profile')" class="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl touch-target">Profilim</button>`}
      </div>
    </div>`;
  }).join('');
}

async function toggleFollowUser(targetUsername) {
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
    if (target.followers.length >= 10 && !target.neonColor) {
      target.neonColor = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
      usersDb[targetUsername] = target;
      await saveUsersToDB();
      showToast(`🎉 @${targetUsername} 10 takipçiye ulaştı ve neon renk kazandı!`, 'success');
      addNotification(`🎉 @${targetUsername} 10 takipçiye ulaştı ve neon renk kazandı!`);
    }
    showToast(`@${targetUsername} takip edilmeye başlandı.`, 'info');
  } else {
    target.followers.splice(idx, 1);
    if (followingIdx !== -1) currentUser.following.splice(followingIdx, 1);
    showToast(`@${targetUsername} takipten çıkarıldı.`, 'info');
  }
  usersDb[targetUsername] = target;
  usersDb[currentUser.username] = currentUser;
  await saveUsersToDB();
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.FOLLOWS, JSON.stringify({
      type: 'FOLLOW_UPDATE', targetUsername, followerUsername: currentUser.username,
      followers: target.followers, following: currentUser.following
    }));
  }
  renderUsersLeaderboard();
  updateUserUI();
  if (viewingPublicUsername === targetUsername) renderPublicProfileModal(targetUsername);
}

// ============================================================
// DIRECT MESSAGES
// ============================================================
function renderDmUserList() {
  const container = $('dm-users-list');
  if (!container) return;
  const dmUsers = new Set();
  dmsDb.forEach(m => {
    if (m.sender === currentUser.username) dmUsers.add(m.recipient);
    if (m.recipient === currentUser.username) dmUsers.add(m.sender);
  });
  const others = Object.values(usersDb).filter(u => u.username !== currentUser.username);
  const sorted = others.sort((a,b) => {
    const aHas = dmUsers.has(a.username), bHas = dmUsers.has(b.username);
    if (aHas && !bHas) return -1;
    if (!aHas && bHas) return 1;
    if (aHas && bHas) return (dmLastMessageTime[b.username]||0) - (dmLastMessageTime[a.username]||0);
    return (a.fullname||a.username).localeCompare(b.fullname||b.username);
  });
  if (sorted.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">Kayıtlı başka kullanıcı yok.</div>`;
    return;
  }
  container.innerHTML = sorted.map(u => {
    const isSelected = selectedDmUser === u.username;
    const unread = dmUnreadCounts[u.username] || 0;
    return `<div onclick="selectChatUser('${u.username}')" class="dm-item p-2.5 rounded-xl flex items-center gap-3 cursor-pointer transition ${isSelected ? 'dm-item-selected' : 'hover:bg-slate-900'}">
      <div class="w-8 h-8 shrink-0">${renderAvatar(u, "w-8 h-8 text-xs")}</div>
      <div class="overflow-hidden min-w-0 flex-1">
        <div class="font-bold text-xs text-white truncate">${getGroupEmojiForUser(u.username)}${getUserDisplayName(u)}</div>
        <div class="text-[10px] text-slate-500 truncate">@${escapeHtml(u.username)}</div>
      </div>
      ${unread > 0 ? `<span class="dm-unread-badge">${unread}</span>` : ''}
    </div>`;
  }).join('');
}

function filterDmUsers() {
  const query = $('dm-user-search').value.toLowerCase();
  document.querySelectorAll('#dm-users-list > div').forEach(el => {
    el.style.display = el.innerText.toLowerCase().includes(query) ? 'flex' : 'none';
  });
}

function startDirectMessageWith(username) {
  if (username === currentUser.username) { showToast('Kendinize mesaj atamazsınız.', 'warning'); return; }
  closePublicProfileModal();
  closeNotificationModal();
  switchTab('messages');
  selectChatUser(username);
}

function selectChatUser(username) {
  selectedDmUser = username;
  if (dmUnreadCounts[username]) { dmUnreadCounts[username] = 0; renderDmUserList(); }
  const target = ensureUserExists(username);
  $('chat-target-avatar').innerHTML = renderAvatar(target, "w-10 h-10 text-base");
  $('chat-target-name').innerHTML = getUserDisplayName(target);
  $('chat-target-handle').innerText = '@' + target.username;
  $('chat-view-profile-btn').classList.remove('hidden');
  $('dm-input-text').disabled = false;
  $('dm-send-btn').disabled = false;
  renderDmUserList();
  renderChatMessages();
}
function openChatUserProfile() { if (selectedDmUser) openPublicProfileModal(selectedDmUser); }

function sendFileAttachment(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) { showToast('Dosya boyutu 10MB\'dan büyük olamaz!', 'error'); event.target.value = ''; return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    const fileData = e.target.result;
    const fileType = file.type;
    const fileName = file.name;
    let text = fileType.startsWith('image/') ? `📷 Resim: ${fileName}` : fileType.startsWith('audio/') ? `🎵 Müzik: ${fileName}` : `📎 Dosya: ${fileName}`;
    const msg = { id: 'dm_' + Date.now(), sender: currentUser.username, recipient: selectedDmUser, text, timestamp: new Date().toISOString(),
      attachment: { data: fileData, type: fileType, name: fileName, size: file.size } };
    dmsDb.push(msg);
    saveMessagesToDB();
    if (mqttClient?.connected) mqttClient.publish(TOPICS.DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE', message: msg }));
    renderChatMessages();
    showToast('📎 Dosya gönderildi!', 'success');
    event.target.value = '';
  };
  reader.readAsDataURL(file);
}

async function sendDirectMessage(e) {
  e.preventDefault();
  const input = $('dm-input-text');
  let text = input.value.trim();
  if (!text || !selectedDmUser) return;
  if (containsForbidden(text)) { showToast('Mesaj yasaklı içerik içeriyor!', 'error'); return; }
  text = censorText(text);
  const msg = { id: 'dm_' + Date.now(), sender: currentUser.username, recipient: selectedDmUser, text, timestamp: new Date().toISOString() };
  dmsDb.push(msg);
  await saveMessagesToDB();
  if (mqttClient?.connected) mqttClient.publish(TOPICS.DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE', message: msg }));
  input.value = '';
  renderChatMessages();
}

function renderChatMessages() {
  const container = $('chat-messages-inner');
  if (!container) return;
  if (!selectedDmUser) {
    container.innerHTML = `<div class="h-full flex items-center justify-center text-slate-500 text-xs text-center p-4">Sohbet başlatmak için listeden bir kullanıcı seçin.</div>`;
    return;
  }
  const convo = dmsDb.filter(m => (m.sender === currentUser.username && m.recipient === selectedDmUser) || (m.sender === selectedDmUser && m.recipient === currentUser.username));
  if (convo.length === 0) {
    container.innerHTML = `<div class="h-full flex items-center justify-center text-slate-500 text-xs text-center p-4">@${selectedDmUser} ile henüz hiç mesajınız yok. Selam verin!</div>`;
    return;
  }
  container.innerHTML = convo.map(m => {
    const isMe = m.sender === currentUser.username;
    const time = formatTimeAgo(m.timestamp);
    let content = renderText(m.text);
    if (m.attachment) {
      if (m.attachment.type?.startsWith('image/')) {
        content += `<div class="mt-2 max-w-[200px] rounded-lg overflow-hidden border border-slate-700"><img src="${m.attachment.data}" alt="Resim" class="w-full h-auto object-cover" loading="lazy" onclick="window.open('${m.attachment.data}','_blank')"></div>`;
      } else if (m.attachment.type?.startsWith('audio/')) {
        content += `<div class="mt-2"><audio controls class="w-full max-w-[200px] h-8"><source src="${m.attachment.data}" type="${m.attachment.type}">Tarayıcınız audio desteklemiyor.</audio></div>`;
      } else {
        content += `<div class="mt-1 text-[10px] text-slate-400">📎 ${m.attachment.name || 'Dosya'}</div>`;
      }
    }
    return `<div class="flex flex-col ${isMe ? 'items-end' : 'items-start'}">
      <div class="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${isMe ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'} shadow break-words">${content}</div>
      <span class="text-[9px] text-slate-500 font-mono mt-1 px-1">${time}</span>
    </div>`;
  }).join('');
  const box = $('chat-messages-box');
  if (box) box.scrollTop = box.scrollHeight;
}

function updateUnreadBadge() {
  const badge = $('unread-dm-badge');
  let total = 0;
  for (const key in dmUnreadCounts) total += dmUnreadCounts[key];
  if (badge) {
    if (total > 0) { badge.innerText = total > 99 ? '99+' : total; badge.classList.remove('hidden'); }
    else badge.classList.add('hidden');
  }
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
  $('profile-stat-posts').innerText = myPosts.length;
  $('profile-stat-followers').innerText = (currentUser.followers||[]).length;
  $('profile-stat-following').innerText = (currentUser.following||[]).length;
  const container = $('profile-posts-container');
  if (myPosts.length === 0) {
    container.innerHTML = `<div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-slate-500 text-xs">Henüz hiç gönderiniz bulunmuyor.</div>`;
  } else {
    container.innerHTML = myPosts.map(p => createPostCard(p)).join('');
  }
}

// ============================================================
// PUBLIC PROFILE
// ============================================================
function openPublicProfileModal(username) {
  if (username === currentUser.username) { switchTab('profile'); return; }
  viewingPublicUsername = username;
  ensureUserExists(username);
  renderPublicProfileModal(username);
  $('public-profile-modal').classList.remove('hidden');
}
function closePublicProfileModal() {
  viewingPublicUsername = null;
  $('public-profile-modal').classList.add('hidden');
}

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
  $('pub-profile-posts-count').innerText = userPosts.length;
  $('pub-profile-followers-count').innerText = followers.length;
  $('pub-profile-following-count').innerText = following.length;
  const isFollowing = currentUser.following?.includes(username);
  const followBtn = $('pub-profile-follow-btn');
  if (followBtn) {
    followBtn.innerText = isFollowing ? 'Takiptesin' : 'Takip Et';
    followBtn.className = isFollowing ?
      'px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 text-slate-300 hover:bg-rose-500/20 hover:text-rose-400 text-xs font-semibold rounded-xl border border-slate-700 transition touch-target' :
      'px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold rounded-xl shadow transition touch-target';
  }
  const postsList = $('pub-profile-posts-list');
  if (userPosts.length === 0) {
    postsList.innerHTML = `<div class="p-4 text-center text-xs text-slate-500 bg-slate-950 rounded-xl">Gönderi bulunmuyor.</div>`;
  } else {
    postsList.innerHTML = userPosts.map(p => createPostCard(p)).join('');
  }
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
  updateUserUI();
  renderProfileTab();
  renderFeed();
  renderUsersLeaderboard();
  showToast('Profiliniz güncellendi.', 'success');
}

// ============================================================
// TİK
// ============================================================
function openTikModal() { $('tik-terms-modal').classList.remove('hidden'); }
function closeTikTermsModal() { $('tik-terms-modal').classList.add('hidden'); }
function closeTikTermsAndContinue() {
  $('tik-terms-modal').classList.add('hidden');
  $('tik-modal').classList.remove('hidden');
  $('tik-input').value = '';
  $('tik-sonuc').innerText = '';
}
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
    img.src = tikRengi === 'purple' ? 'tick-p.png' : 'tick-b.png';
    $('tik-goster').classList.remove('hidden');
    result.style.color = "green";
    result.innerText = "Tik başarıyla alındı!";
    publishPresence();
    updateUserUI();
    renderFeed();
    renderUsersLeaderboard();
    renderDmUserList();
    renderProfileTab();
    renderGroups();
    updateGroupCreateButton();
  } else {
    result.style.color = "red";
    result.innerText = "❌ Kod hatalı! Kod almak için @burak_msz instagram adresine DM at.";
  }
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded', async () => {
  try {
    await openDatabase();
    const hasLocalStorage = localStorage.getItem('sp_social_posts') !== null;
    const hasDBData = await getAllFromDB('posts');
    if (hasLocalStorage && hasDBData.length === 0) await migrateFromLocalStorage();
    const data = await loadAllFromDB();
    if (data) {
      usersDb = data.users || {};
      postsDb = data.posts || [];
      commentsDb = data.comments || [];
      dmsDb = data.messages || [];
      groupsDb = data.groups || [];
      console.log(`📊 ${postsDb.length} gönderi, ${commentsDb.length} yorum, ${dmsDb.length} mesaj, ${groupsDb.length} grup yüklendi`);
    }
  } catch(err) {
    console.error('❌ IndexedDB hatası:', err);
    usersDb = JSON.parse(localStorage.getItem('sp_social_users') || '{}');
    postsDb = JSON.parse(localStorage.getItem('sp_social_posts') || '[]');
    dmsDb = JSON.parse(localStorage.getItem('sp_social_dms') || '[]');
    commentsDb = JSON.parse(localStorage.getItem('sp_social_comments') || '[]');
    groupsDb = JSON.parse(localStorage.getItem('sp_social_groups') || '[]');
    showToast('⚠️ IndexedDB kullanılamıyor, localStorage kullanılıyor.', 'warning');
  }

  // Event Listeners
  const postInput = $('post-input');
  if (postInput) {
    postInput.addEventListener('input', (e) => {
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
    if (!dropdown) return;
    if (!e.target.closest('.relative') && !dropdown.classList.contains('hidden')) {
      dropdown.classList.add('hidden');
    }
  });

  // Oturum kontrolü: önce sessionStorage, sonra localStorage (Beni Hatırla)
  const sessionUser = sessionStorage.getItem('sp_social_active_user');
  const savedUsername = localStorage.getItem('sp_social_username');
  const savedPassword = localStorage.getItem('sp_social_password');

  // Giriş formuna hatırlanan kullanıcı adını doldur
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
    launchMainApp();
  } else if (savedUsername && savedPassword && usersDb[savedUsername] && usersDb[savedUsername].password === savedPassword) {
    // Beni hatırla ile otomatik giriş
    currentUser = usersDb[savedUsername];
    if (!currentUser.followers) currentUser.followers = [];
    if (!currentUser.following) currentUser.following = [];
    sessionStorage.setItem('sp_social_active_user', savedUsername);
    launchMainApp();
  }

  setLanguage('tr');
});
