    // ============================================================
    // TİK KONFIGURASYONU - BURADAN DEĞİŞTİR !!!
    // ============================================================
    const gecerliKod = "000000000f00000₺000044ertugrulveMSZ";
    const tikRengi = "blue"; // "purple" veya "blue" - BURADAN DEĞİŞTİR!

    // ============================================================
    // DİL DESTEĞİ
    // ============================================================
    const langData = {
      tr: {
        "auth-subtitle": "Gerçek Zamanlı Sosyal Ağ",
        "auth-login-tab": "Giriş Yap",
        "auth-register-tab": "Kayıt Ol",
        "login-username-label": "Kullanıcı Adı",
        "login-password-label": "Şifre",
        "remember-label": "Beni Hatırla",
        "login-submit-btn": "Sisteme Giriş Yap",
        "reg-username-label": "Kullanıcı Adı",
        "reg-password-label": "Şifre",
        "reg-submit-btn": "Hesap Oluştur ve Giriş Yap",
        "nav-feed-label": "Akış",
        "nav-messages-label": "Mesajlar",
        "nav-groups-label": "Gruplar",
        "nav-users-label": "Topluluk",
        "nav-profile-label": "Profilim",
        "settings-change-pass": "Şifre Değiştir",
        "settings-forgot-pass": "Şifremi Unuttum",
        "settings-delete-account": "Hesabı Sil",
        "settings-logout": "Çıkış Yap",
        "sidebar-post-label": "Gönderi",
        "sidebar-followers-label": "Takipçi",
        "sidebar-user-label": "Takip",
        "sidebar-social-title": "Sosyal Bağlantılar",
        "sidebar-website": "Web Sitem",
        "sidebar-instagram": "Instagram",
        "sidebar-log-title": "Sistem Akış Logu",
        "feed-title": "Canlı Gönderi Akışı",
        "submit-post-text": "Paylaş",
        "dm-chats-title": "Sohbetler",
        "chat-profile-btn-text": "Profil",
        "groups-title": "Gruplar",
        "create-group-btn-text": "Grup Oluştur",
        "users-title": "Topluluk",
        "users-subtitle": "En çok takipçisi olan popüler kullanıcılar",
        "rewards-title": "Ödüller",
        "reward-1": "10 Takipçi → ",
        "reward-2": "50 Takipçi → ",
        "reward-3": "100 Takipçi → ",
        "profile-edit-btn": "Profili Düzenle",
        "profile-stat-posts-label": "Gönderi",
        "profile-stat-followers-label": "Takipçi",
        "profile-stat-following-label": "Takip",
        "profile-active-label": "Aktif",
        "profile-posts-title": "Gönderilerim",
        "pub-dm-btn-text": "Mesaj",
        "pub-posts-label": "Gönderi",
        "pub-followers-label": "Takipçi",
        "pub-following-label": "Takip",
        "pub-posts-title": "Gönderileri",
        "pub-active-label": "Aktif",
        "edit-profile-title": "Profili Düzenle",
        "edit-avatar-label": "Profil Fotoğrafı Yükle",
        "edit-avatar-btn-text": "Fotoğraf Seç",
        "edit-avatar-hint": "Otomatik sıkıştırılır.",
        "edit-fullname-label": "Ad Soyad",
        "edit-bio-label": "Biyografi",
        "edit-cancel-btn": "İptal",
        "edit-save-btn": "Kaydet",
        "tik-modal-title": "Tik Al",
        "tik-modal-desc": "Kodunu girmek için aşağıdaki alanı kullan:",
        "tik-confirm-btn": "Onayla",
        "tik-congrats-title": "Tebrikler!",
        "tik-congrats-desc": "Tik başarıyla alındı!",
        "tik-close-btn": "Kapat",
        "tik-get-btn": "Tik Al",
        "notif-modal-title": "Bildirimler",
        "change-pass-title": "Şifre Değiştir",
        "current-pass-label": "Mevcut Şifre",
        "new-pass-label": "Yeni Şifre",
        "new-pass-confirm-label": "Yeni Şifre (Tekrar)",
        "cancel-pass-btn": "İptal",
        "update-pass-btn": "Şifreyi Güncelle",
        "delete-account-title": "Hesabı Sil",
        "delete-warning-text": "Bu işlem geri alınamaz! Tüm gönderileriniz, yorumlarınız ve mesajlarınız silinecektir.",
        "delete-pass-label": "Şifreniz",
        "delete-confirm-label": "Onaylamak için yazın: ",
        "cancel-delete-btn": "İptal",
        "confirm-delete-btn": "Hesabı Sil",
        "forgot-pass-title": "Şifremi Unuttum",
        "forgot-pass-desc": "Yeni şifreni belirle.",
        "forgot-username-label": "Kullanıcı Adı",
        "forgot-new-pass-label": "Yeni Şifre",
        "forgot-new-pass-confirm-label": "Yeni Şifre (Tekrar)",
        "forgot-cancel-btn": "İptal",
        "forgot-reset-btn": "Şifreyi Sıfırla",
        "followers-modal-title": "Takipçiler",
        "following-modal-title": "Takip Edilenler",
        "create-group-title": "Grup Oluştur",
        "group-name-label": "Grup Adı *",
        "group-desc-label": "Açıklama *",
        "group-type-label": "Katılım Tipi *",
        "group-password-label": "Grup Şifresi (isteğe bağlı)",
        "group-emoji-label": "Grup Emojisi (isteğe bağlı)",
        "group-tag-label": "Tag (isteğe bağlı)",
        "group-photo-label": "Grup Fotoğrafı (isteğe bağlı)"
      },
      en: {
        "auth-subtitle": "Real-Time Social Network",
        "auth-login-tab": "Login",
        "auth-register-tab": "Register",
        "login-username-label": "Username",
        "login-password-label": "Password",
        "remember-label": "Remember Me",
        "login-submit-btn": "Login",
        "reg-username-label": "Username",
        "reg-password-label": "Password",
        "reg-submit-btn": "Create Account & Login",
        "nav-feed-label": "Feed",
        "nav-messages-label": "Messages",
        "nav-groups-label": "Groups",
        "nav-users-label": "Community",
        "nav-profile-label": "Profile",
        "settings-change-pass": "Change Password",
        "settings-forgot-pass": "Forgot Password",
        "settings-delete-account": "Delete Account",
        "settings-logout": "Logout",
        "sidebar-post-label": "Posts",
        "sidebar-followers-label": "Followers",
        "sidebar-user-label": "Following",
        "sidebar-social-title": "Social Links",
        "sidebar-website": "My Website",
        "sidebar-instagram": "Instagram",
        "sidebar-log-title": "System Log",
        "feed-title": "Live Post Feed",
        "submit-post-text": "Share",
        "dm-chats-title": "Chats",
        "chat-profile-btn-text": "Profile",
        "groups-title": "Groups",
        "create-group-btn-text": "Create Group",
        "users-title": "Community",
        "users-subtitle": "Most followed users",
        "rewards-title": "Rewards",
        "reward-1": "10 Followers → ",
        "reward-2": "50 Followers → ",
        "reward-3": "100 Followers → ",
        "profile-edit-btn": "Edit Profile",
        "profile-stat-posts-label": "Posts",
        "profile-stat-followers-label": "Followers",
        "profile-stat-following-label": "Following",
        "profile-active-label": "Active",
        "profile-posts-title": "My Posts",
        "pub-dm-btn-text": "Message",
        "pub-posts-label": "Posts",
        "pub-followers-label": "Followers",
        "pub-following-label": "Following",
        "pub-posts-title": "Posts",
        "pub-active-label": "Active",
        "edit-profile-title": "Edit Profile",
        "edit-avatar-label": "Upload Profile Photo",
        "edit-avatar-btn-text": "Choose Photo",
        "edit-avatar-hint": "Auto compressed.",
        "edit-fullname-label": "Full Name",
        "edit-bio-label": "Bio",
        "edit-cancel-btn": "Cancel",
        "edit-save-btn": "Save",
        "tik-modal-title": "Get Tik",
        "tik-modal-desc": "Enter your code below:",
        "tik-confirm-btn": "Confirm",
        "tik-congrats-title": "Congratulations!",
        "tik-congrats-desc": "Tik successfully obtained!",
        "tik-close-btn": "Close",
        "tik-get-btn": "Get Tik",
        "notif-modal-title": "Notifications",
        "change-pass-title": "Change Password",
        "current-pass-label": "Current Password",
        "new-pass-label": "New Password",
        "new-pass-confirm-label": "New Password (Again)",
        "cancel-pass-btn": "Cancel",
        "update-pass-btn": "Update Password",
        "delete-account-title": "Delete Account",
        "delete-warning-text": "This action cannot be undone! All your posts, comments and messages will be deleted.",
        "delete-pass-label": "Your Password",
        "delete-confirm-label": "Type to confirm: ",
        "cancel-delete-btn": "Cancel",
        "confirm-delete-btn": "Delete Account",
        "forgot-pass-title": "Forgot Password",
        "forgot-pass-desc": "Set your new password.",
        "forgot-username-label": "Username",
        "forgot-new-pass-label": "New Password",
        "forgot-new-pass-confirm-label": "New Password (Again)",
        "forgot-cancel-btn": "Cancel",
        "forgot-reset-btn": "Reset Password",
        "followers-modal-title": "Followers",
        "following-modal-title": "Following",
        "create-group-title": "Create Group",
        "group-name-label": "Group Name *",
        "group-desc-label": "Description *",
        "group-type-label": "Join Type *",
        "group-password-label": "Group Password (optional)",
        "group-emoji-label": "Group Emoji (optional)",
        "group-tag-label": "Tag (optional)",
        "group-photo-label": "Group Photo (optional)"
      }
    };
    let currentLang = 'tr';

    function setLanguage(lang) {
      if (!langData[lang]) return;
      currentLang = lang;
      const data = langData[lang];
      document.getElementById('auth-subtitle').innerText = data['auth-subtitle'] || 'Real-Time Social Network';
      document.getElementById('nav-feed-label').innerText = data['nav-feed-label'] || 'Feed';
      document.getElementById('nav-messages-label').innerText = data['nav-messages-label'] || 'Messages';
      document.getElementById('nav-groups-label').innerText = data['nav-groups-label'] || 'Groups';
      document.getElementById('nav-users-label').innerText = data['nav-users-label'] || 'Community';
      document.getElementById('nav-profile-label').innerText = data['nav-profile-label'] || 'Profile';
      document.getElementById('submit-post-text').innerText = data['submit-post-text'] || 'Share';
      document.getElementById('sidebar-post-label').innerText = data['sidebar-post-label'] || 'Posts';
      document.getElementById('sidebar-followers-label').innerText = data['sidebar-followers-label'] || 'Followers';
      document.getElementById('sidebar-user-label').innerText = data['sidebar-user-label'] || 'Following';
      document.getElementById('sidebar-social-title').innerText = data['sidebar-social-title'] || 'Social Links';
      document.getElementById('sidebar-website').innerText = data['sidebar-website'] || 'My Website';
      document.getElementById('sidebar-instagram').innerText = data['sidebar-instagram'] || 'Instagram';
      document.getElementById('sidebar-log-title').innerText = data['sidebar-log-title'] || 'System Log';
      document.getElementById('feed-title').innerText = data['feed-title'] || 'Live Post Feed';
      document.getElementById('dm-chats-title').innerText = data['dm-chats-title'] || 'Chats';
      document.getElementById('chat-profile-btn-text').innerText = data['chat-profile-btn-text'] || 'Profile';
      document.getElementById('groups-title').innerText = data['groups-title'] || 'Groups';
      document.getElementById('create-group-btn-text').innerText = data['create-group-btn-text'] || 'Create Group';
      document.getElementById('users-title').innerText = data['users-title'] || 'Community';
      document.getElementById('users-subtitle').innerText = data['users-subtitle'] || 'Most followed users';
      document.getElementById('rewards-title').innerText = data['rewards-title'] || 'Rewards';
      document.getElementById('reward-1').innerText = data['reward-1'] || '10 Followers → ';
      document.getElementById('reward-2').innerText = data['reward-2'] || '50 Followers → ';
      document.getElementById('reward-3').innerText = data['reward-3'] || '100 Followers → ';
      document.getElementById('profile-edit-btn').innerText = data['profile-edit-btn'] || 'Edit Profile';
      document.getElementById('profile-stat-posts-label').innerText = data['profile-stat-posts-label'] || 'Posts';
      document.getElementById('profile-stat-followers-label').innerText = data['profile-stat-followers-label'] || 'Followers';
      document.getElementById('profile-stat-following-label').innerText = data['profile-stat-following-label'] || 'Following';
      document.getElementById('profile-active-label').innerText = data['profile-active-label'] || 'Active';
      document.getElementById('profile-posts-title').innerText = data['profile-posts-title'] || 'My Posts';
      document.getElementById('pub-dm-btn-text').innerText = data['pub-dm-btn-text'] || 'Message';
      document.getElementById('pub-posts-label').innerText = data['pub-posts-label'] || 'Posts';
      document.getElementById('pub-followers-label').innerText = data['pub-followers-label'] || 'Followers';
      document.getElementById('pub-following-label').innerText = data['pub-following-label'] || 'Following';
      document.getElementById('pub-posts-title').innerText = data['pub-posts-title'] || 'Posts';
      document.getElementById('pub-active-label').innerText = data['pub-active-label'] || 'Active';
      document.getElementById('edit-profile-title').innerText = data['edit-profile-title'] || 'Edit Profile';
      document.getElementById('edit-avatar-label').innerText = data['edit-avatar-label'] || 'Upload Profile Photo';
      document.getElementById('edit-avatar-btn-text').innerText = data['edit-avatar-btn-text'] || 'Choose Photo';
      document.getElementById('edit-avatar-hint').innerText = data['edit-avatar-hint'] || 'Auto compressed.';
      document.getElementById('edit-fullname-label').innerText = data['edit-fullname-label'] || 'Full Name';
      document.getElementById('edit-bio-label').innerText = data['edit-bio-label'] || 'Bio';
      document.getElementById('edit-cancel-btn').innerText = data['edit-cancel-btn'] || 'Cancel';
      document.getElementById('edit-save-btn').innerText = data['edit-save-btn'] || 'Save';
      document.getElementById('tik-modal-title').innerText = data['tik-modal-title'] || 'Get Tik';
      document.getElementById('tik-modal-desc').innerText = data['tik-modal-desc'] || 'Enter your code below:';
      document.getElementById('tik-confirm-btn').innerText = data['tik-confirm-btn'] || 'Confirm';
      document.getElementById('tik-congrats-title').innerText = data['tik-congrats-title'] || 'Congratulations!';
      document.getElementById('tik-congrats-desc').innerText = data['tik-congrats-desc'] || 'Tik successfully obtained!';
      document.getElementById('tik-close-btn').innerText = data['tik-close-btn'] || 'Close';
      document.getElementById('tik-get-btn').innerText = data['tik-get-btn'] || 'Get Tik';
      document.getElementById('notif-modal-title').innerText = data['notif-modal-title'] || 'Notifications';
      document.getElementById('change-pass-title').innerText = data['change-pass-title'] || 'Change Password';
      document.getElementById('current-pass-label').innerText = data['current-pass-label'] || 'Current Password';
      document.getElementById('new-pass-label').innerText = data['new-pass-label'] || 'New Password';
      document.getElementById('new-pass-confirm-label').innerText = data['new-pass-confirm-label'] || 'New Password (Again)';
      document.getElementById('cancel-pass-btn').innerText = data['cancel-pass-btn'] || 'Cancel';
      document.getElementById('update-pass-btn').innerText = data['update-pass-btn'] || 'Update Password';
      document.getElementById('delete-account-title').innerText = data['delete-account-title'] || 'Delete Account';
      document.getElementById('delete-warning-text').innerText = data['delete-warning-text'] ||
        'This action cannot be undone! All your posts, comments and messages will be deleted.';
      document.getElementById('delete-pass-label').innerText = data['delete-pass-label'] || 'Your Password';
      document.getElementById('delete-confirm-label').innerHTML = data['delete-confirm-label'] ||
        'Type to confirm: <span class="text-rose-400 font-bold">hesabımı sil</span>';
      document.getElementById('cancel-delete-btn').innerText = data['cancel-delete-btn'] || 'Cancel';
      document.getElementById('confirm-delete-btn').innerHTML =
        `<i class="fa-solid fa-trash-can mr-1"></i> ${data['confirm-delete-btn'] || 'Delete Account'}`;
      document.getElementById('auth-login-tab').innerText = data['auth-login-tab'] || 'Login';
      document.getElementById('auth-register-tab').innerText = data['auth-register-tab'] || 'Register';
      document.getElementById('login-username-label').innerText = data['login-username-label'] || 'Username';
      document.getElementById('login-password-label').innerText = data['login-password-label'] || 'Password';
      document.getElementById('remember-label').innerText = data['remember-label'] || 'Remember Me';
      document.getElementById('login-submit-btn').innerText = data['login-submit-btn'] || 'Login';
      document.getElementById('reg-username-label').innerText = data['reg-username-label'] || 'Username';
      document.getElementById('reg-password-label').innerText = data['reg-password-label'] || 'Password';
      document.getElementById('reg-submit-btn').innerText = data['reg-submit-btn'] || 'Create Account & Login';
      document.getElementById('settings-forgot-pass').innerText = data['settings-forgot-pass'] || 'Forgot Password';
      document.getElementById('forgot-pass-title').innerText = data['forgot-pass-title'] || 'Forgot Password';
      document.getElementById('forgot-pass-desc').innerText = data['forgot-pass-desc'] || 'Set your new password.';
      document.getElementById('forgot-username-label').innerText = data['forgot-username-label'] || 'Username';
      document.getElementById('forgot-new-pass-label').innerText = data['forgot-new-pass-label'] || 'New Password';
      document.getElementById('forgot-new-pass-confirm-label').innerText = data['forgot-new-pass-confirm-label'] || 'New Password (Again)';
      document.getElementById('forgot-cancel-btn').innerText = data['forgot-cancel-btn'] || 'Cancel';
      document.getElementById('forgot-reset-btn').innerText = data['forgot-reset-btn'] || 'Reset Password';
      document.getElementById('followers-modal-title').innerText = data['followers-modal-title'] || 'Followers';
      document.getElementById('following-modal-title').innerText = data['following-modal-title'] || 'Following';
      document.getElementById('create-group-title').innerText = data['create-group-title'] || 'Create Group';
      document.getElementById('group-name-label').innerText = data['group-name-label'] || 'Group Name *';
      document.getElementById('group-desc-label').innerText = data['group-desc-label'] || 'Description *';
      document.getElementById('group-type-label').innerText = data['group-type-label'] || 'Join Type *';
      document.getElementById('group-password-label').innerText = data['group-password-label'] || 'Group Password (optional)';
      document.getElementById('group-emoji-label').innerText = data['group-emoji-label'] || 'Group Emoji (optional)';
      document.getElementById('group-tag-label').innerText = data['group-tag-label'] || 'Tag (optional)';
      document.getElementById('group-photo-label').innerText = data['group-photo-label'] || 'Group Photo (optional)';
    }

    // ============================================================
    // KONFIGURASYON
    // ============================================================
    const BROKER_URL = 'wss://broker.emqx.io:8084/mqtt';
    const TOPIC_PREFIX = 'social_pulse_net_v3/';
    const TOPIC_POSTS = TOPIC_PREFIX + 'posts';
    const TOPIC_LIKES = TOPIC_PREFIX + 'likes';
    const TOPIC_USERS = TOPIC_PREFIX + 'users';
    const TOPIC_FOLLOWS = TOPIC_PREFIX + 'follows';
    const TOPIC_DM = TOPIC_PREFIX + 'dm/';
    const TOPIC_COMMENTS = TOPIC_PREFIX + 'comments';
    const TOPIC_GROUPS = TOPIC_PREFIX + 'groups';

    let dmUnreadCounts = {};

    // ============================================================
    // STATE
    // ============================================================
    let currentUser = null;
    let mqttClient = null;
    let activeTab = 'feed';
    let selectedDmUser = null;
    let viewingPublicUsername = null;
    let tempAvatarBase64 = null;
    let isMqttConnected = false;
    let isDBReady = false;
    let lastPostTime = 0;
    const POST_COOLDOWN_MS = 3 * 60 * 1000;
    const MAX_POSTS = 100;

    let notifications = [];
    let notificationCount = 0;
    let dmLastMessageTime = {};

    // Grup sistemi
    let groupsDb = [];
    let selectedGroupId = null;

    // ============================================================
    // INDEXEDDB
    // ============================================================
    const DB_NAME = 'MSZMedyaDB';
    const DB_VERSION = 2;
    let db = null;

    function openDatabase() {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => { console.error('❌ IndexedDB açılamadı:', request.error);
          reject(request.error); };
        request.onsuccess = () => { db = request.result;
          isDBReady = true;
          console.log('✅ IndexedDB başarıyla açıldı!');
          resolve(db); };
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains('users')) db.createObjectStore('users', { keyPath: 'username' });
          if (!db.objectStoreNames.contains('posts')) {
            const postStore = db.createObjectStore('posts', { keyPath: 'id' });
            postStore.createIndex('createdAt', 'createdAt', { unique: false });
            postStore.createIndex('author', 'author.username', { unique: false });
          }
          if (!db.objectStoreNames.contains('comments')) {
            const commentStore = db.createObjectStore('comments', { keyPath: 'id' });
            commentStore.createIndex('postId', 'postId', { unique: false });
            commentStore.createIndex('createdAt', 'createdAt', { unique: false });
          }
          if (!db.objectStoreNames.contains('messages')) {
            const msgStore = db.createObjectStore('messages', { keyPath: 'id' });
            msgStore.createIndex('sender', 'sender', { unique: false });
            msgStore.createIndex('recipient', 'recipient', { unique: false });
            msgStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
          if (!db.objectStoreNames.contains('groups')) {
            const groupStore = db.createObjectStore('groups', { keyPath: 'id' });
            groupStore.createIndex('createdAt', 'createdAt', { unique: false });
            groupStore.createIndex('owner', 'owner', { unique: false });
          }
        };
      });
    }

    function saveToDB(storeName, data) {
      return new Promise((resolve, reject) => {
        if (!db) { reject(new Error('Veritabanı açık değil')); return; }
        try {
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);
          const request = store.put(data);
          request.onsuccess = () => resolve(data);
          request.onerror = () => reject(request.error);
        } catch (err) { reject(err); }
      });
    }

    function getAllFromDB(storeName) {
      return new Promise((resolve, reject) => {
        if (!db) { reject(new Error('Veritabanı açık değil')); return; }
        try {
          const transaction = db.transaction(storeName, 'readonly');
          const store = transaction.objectStore(storeName);
          const request = store.getAll();
          request.onsuccess = () => resolve(request.result || []);
          request.onerror = () => reject(request.error);
        } catch (err) { reject(err); }
      });
    }

    function deleteFromDB(storeName, key) {
      return new Promise((resolve, reject) => {
        if (!db) { reject(new Error('Veritabanı açık değil')); return; }
        try {
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);
          const request = store.delete(key);
          request.onsuccess = () => resolve();
          request.onerror = () => reject(request.error);
        } catch (err) { reject(err); }
      });
    }

    function clearDB(storeName) {
      return new Promise((resolve, reject) => {
        if (!db) { reject(new Error('Veritabanı açık değil')); return; }
        try {
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);
          const request = store.clear();
          request.onsuccess = () => resolve();
          request.onerror = () => reject(request.error);
        } catch (err) { reject(err); }
      });
    }

    // ============================================================
    // VERİ TAŞIMA
    // ============================================================
    async function migrateFromLocalStorage() {
      try {
        const users = JSON.parse(localStorage.getItem('sp_social_users') || '{}');
        for (const [key, value] of Object.entries(users)) await saveToDB('users', value);
        const posts = JSON.parse(localStorage.getItem('sp_social_posts') || '[]');
        for (const post of posts) await saveToDB('posts', post);
        const comments = JSON.parse(localStorage.getItem('sp_social_comments') || '[]');
        for (const comment of comments) await saveToDB('comments', comment);
        const messages = JSON.parse(localStorage.getItem('sp_social_dms') || '[]');
        for (const msg of messages) await saveToDB('messages', msg);
        const groups = JSON.parse(localStorage.getItem('sp_social_groups') || '[]');
        for (const group of groups) await saveToDB('groups', group);
        return true;
      } catch (err) { console.error('❌ Veri taşıma hatası:', err); return false; }
    }

    async function loadAllFromDB() {
      try {
        const users = await getAllFromDB('users');
        const posts = await getAllFromDB('posts');
        const comments = await getAllFromDB('comments');
        const messages = await getAllFromDB('messages');
        const groups = await getAllFromDB('groups');
        const usersObj = {};
        users.forEach(u => { usersObj[u.username] = u; });
        return { users: usersObj, posts, comments, messages, groups };
      } catch (err) { console.error('❌ Veri yükleme hatası:', err); return null; }
    }

    // ============================================================
    // YENİ SAVE FONKSİYONLARI
    // ============================================================
    async function savePostsToDB() {
      try { await clearDB('posts'); for (const post of postsDb) await saveToDB('posts', post); } catch (err) { console.error(
          'Gönderi kaydetme hatası:', err); }
    }
    async function saveCommentsToDB() {
      try { await clearDB('comments'); for (const comment of commentsDb) await saveToDB('comments', comment); } catch (err) {
        console.error('Yorum kaydetme hatası:', err); }
    }
    async function saveMessagesToDB() {
      try { await clearDB('messages'); for (const msg of dmsDb) await saveToDB('messages', msg); } catch (err) { console.error(
          'Mesaj kaydetme hatası:', err); }
    }
    async function saveUsersToDB() {
      try { await clearDB('users'); for (const [key, value] of Object.entries(usersDb)) await saveToDB('users', value); } catch (
      err) { console.error('Kullanıcı kaydetme hatası:', err); }
    }
    async function saveGroupsToDB() {
      try { await clearDB('groups'); for (const group of groupsDb) await saveToDB('groups', group); } catch (err) { console.error(
          'Grup kaydetme hatası:', err); }
    }

    // ============================================================
    // LOCAL DATABASE
    // ============================================================
    let usersDb = {};
    let postsDb = [];
    let dmsDb = [];
    let commentsDb = [];

    // ============================================================
    // INIT
    // ============================================================
    window.addEventListener('DOMContentLoaded', async () => {
      try {
        await openDatabase();
        const hasLocalStorage = localStorage.getItem('sp_social_posts') !== null;
        const hasDBData = await getAllFromDB('posts');
        if (hasLocalStorage && hasDBData.length === 0) {
          await migrateFromLocalStorage();
        }
        const data = await loadAllFromDB();
        if (data) {
          usersDb = data.users || {};
          postsDb = data.posts || [];
          commentsDb = data.comments || [];
          dmsDb = data.messages || [];
          groupsDb = data.groups || [];
          console.log(`📊 ${postsDb.length} gönderi, ${commentsDb.length} yorum, ${dmsDb.length} mesaj, ${groupsDb.length} grup yüklendi`);
        }
      } catch (err) {
        console.error('❌ IndexedDB hatası:', err);
        usersDb = JSON.parse(localStorage.getItem('sp_social_users') || '{}');
        postsDb = JSON.parse(localStorage.getItem('sp_social_posts') || '[]');
        dmsDb = JSON.parse(localStorage.getItem('sp_social_dms') || '[]');
        commentsDb = JSON.parse(localStorage.getItem('sp_social_comments') || '[]');
        groupsDb = JSON.parse(localStorage.getItem('sp_social_groups') || '[]');
        showToast('⚠️ IndexedDB kullanılamıyor, localStorage kullanılıyor.', 'warning');
      }

      const postInput = document.getElementById('post-input');
      if (postInput) {
        postInput.addEventListener('input', (e) => {
          const charCounter = document.getElementById('char-counter');
          if (charCounter) charCounter.innerText = `${e.target.value.length} / 280`;
        });
        postInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault();
            submitPost(); }
        });
      }

      const dmInput = document.getElementById('dm-input-text');
      if (dmInput) {
        dmInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault();
            document.getElementById('dm-form').dispatchEvent(new Event('submit')); }
        });
      }

      document.addEventListener('keydown', function(e) {
        if (e.target && e.target.id && e.target.id.startsWith('comment-input-')) {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const postId = e.target.id.replace('comment-input-', '');
            submitComment(postId);
          }
        }
      });

      const savedSession = localStorage.getItem('sp_social_active_user');
      const savedUsername = localStorage.getItem('sp_social_username');
      const savedPassword = localStorage.getItem('sp_social_password');

      if (savedSession && usersDb[savedSession]) {
        currentUser = usersDb[savedSession];
        if (!currentUser.followers) currentUser.followers = [];
        if (!currentUser.following) currentUser.following = [];
        launchMainApp();
      } else if (savedUsername && savedPassword && usersDb[savedUsername] && usersDb[savedUsername].password === savedPassword) {
        currentUser = usersDb[savedUsername];
        if (!currentUser.followers) currentUser.followers = [];
        if (!currentUser.following) currentUser.following = [];
        localStorage.setItem('sp_social_active_user', savedUsername);
        launchMainApp();
      }
    });

    // ============================================================
    // AUTH
    // ============================================================
    function switchAuthTab(tab) {
      const loginForm = document.getElementById('login-form');
      const regForm = document.getElementById('register-form');
      const tabLoginBtn = document.getElementById('tab-login-btn');
      const tabRegBtn = document.getElementById('tab-register-btn');
      const forgotLink = document.getElementById('forgot-password-link-container');

      if (tab === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        forgotLink.classList.remove('hidden');
        tabLoginBtn.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition bg-cyan-500 text-white shadow';
        tabRegBtn.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition text-slate-400 hover:text-white';
      } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        forgotLink.classList.add('hidden');
        tabRegBtn.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition bg-indigo-500 text-white shadow';
        tabLoginBtn.className = 'flex-1 py-2.5 text-xs font-semibold rounded-lg transition text-slate-400 hover:text-white';
      }
    }

    async function handleRegister(e) {
      e.preventDefault();
      const username = document.getElementById('reg-username').value.trim().toLowerCase();
      const password = document.getElementById('reg-password').value;

      if (usersDb[username]) {
        showModal('Hata', 'Bu kullanıcı adı zaten başka bir üye tarafından alınmış!', 'error');
        return;
      }

      const colors = ['bg-cyan-600', 'bg-indigo-600', 'bg-emerald-600', 'bg-purple-600', 'bg-rose-600', 'bg-amber-600'];
      const userColor = colors[Math.floor(Math.random() * colors.length)];

      const newUser = {
        username,
        fullname: username,
        bio: 'MSZ MEDYA üyesi.',
        password,
        color: userColor,
        avatarUrl: null,
        followers: [],
        following: [],
        neonColor: null,
        hasTik: false,
        tikRengi: null,
        joinedAt: new Date().toISOString()
      };

      usersDb[username] = newUser;
      await saveUsersToDB();

      currentUser = newUser;
      localStorage.setItem('sp_social_active_user', username);
      localStorage.setItem('sp_social_username', username);
      localStorage.setItem('sp_social_password', password);

      showToast('Kayıt başarılı! Hoş geldiniz.', 'success');
      launchMainApp();
    }

    async function handleLogin(e) {
      e.preventDefault();
      const username = document.getElementById('login-username').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;
      const rememberMe = document.getElementById('remember-me').checked;

      const user = usersDb[username];
      if (!user || user.password !== password) {
        showModal('Giriş Başarısız', 'Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyin.', 'error');
        return;
      }

      if (!user.followers) user.followers = [];
      if (!user.following) user.following = [];

      currentUser = user;
      localStorage.setItem('sp_social_active_user', username);

      if (rememberMe) {
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
      localStorage.removeItem('sp_social_active_user');
      if (mqttClient) mqttClient.end();
      location.reload();
    }

    function launchMainApp() {
      document.getElementById('auth-screen').classList.add('hidden');
      document.getElementById('main-app').classList.remove('hidden');
      console.log('🚀 MSZ MEDYA başlatıldı! Kullanıcı:', currentUser.username);
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
    // FORGOT PASSWORD
    // ============================================================
    function openForgotPasswordModal() {
      if (!currentUser) {
        showModal('Hata', 'Önce giriş yapmalısınız!', 'error');
        return;
      }
      document.getElementById('forgot-password-modal').classList.remove('hidden');
      document.getElementById('forgot-username').value = currentUser.username;
      document.getElementById('forgot-username').disabled = true;
      document.getElementById('forgot-new-password').value = '';
      document.getElementById('forgot-new-password-confirm').value = '';
    }

    function closeForgotPasswordModal() {
      document.getElementById('forgot-password-modal').classList.add('hidden');
    }

    async function resetPassword(e) {
      e.preventDefault();
      const newPass = document.getElementById('forgot-new-password').value;
      const confirmPass = document.getElementById('forgot-new-password-confirm').value;

      if (!currentUser) {
        showModal('Hata', 'Oturum açmış bir kullanıcı bulunamadı!', 'error');
        return;
      }

      if (newPass.length < 4) {
        showModal('Hata', 'Şifre en az 4 karakter olmalı!', 'error');
        return;
      }

      if (newPass !== confirmPass) {
        showModal('Hata', 'Şifreler eşleşmiyor!', 'error');
        return;
      }

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
    let followersModalTarget = null;
    let followingModalTarget = null;

    function openFollowersModal(username) {
      followersModalTarget = username;
      const user = usersDb[username];
      if (!user) { showToast('Kullanıcı bulunamadı.', 'error'); return; }
      
      const title = document.getElementById('followers-modal-title');
      title.innerText = currentLang === 'tr' ? `${user.fullname} Takipçileri` : `${user.fullname}'s Followers`;
      
      const list = document.getElementById('followers-list');
      const followers = user.followers || [];
      
      if (followers.length === 0) {
        list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz takipçi yok.</div>`;
      } else {
        list.innerHTML = followers.map(f => {
          const followerUser = usersDb[f];
          if (!followerUser) return '';
          const groupEmoji = getGroupEmojiForUser(followerUser.username);
          return `
            <div class="flex items-center justify-between p-2 hover:bg-slate-800 rounded-xl transition">
              <div class="flex items-center gap-3 cursor-pointer" onclick="openPublicProfileModal('${followerUser.username}'); closeFollowersModal();">
                <div class="w-8 h-8 shrink-0">${renderAvatarElement(followerUser, "w-8 h-8 text-xs")}</div>
                <div>
                  <div class="font-bold text-xs text-white">${groupEmoji}${getUserDisplayName(followerUser)}</div>
                  <div class="text-[10px] text-slate-500">@${followerUser.username}</div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
      
      document.getElementById('followers-modal').classList.remove('hidden');
    }

    function closeFollowersModal() {
      document.getElementById('followers-modal').classList.add('hidden');
      followersModalTarget = null;
    }

    function openFollowingModal(username) {
      followingModalTarget = username;
      const user = usersDb[username];
      if (!user) { showToast('Kullanıcı bulunamadı.', 'error'); return; }
      
      const title = document.getElementById('following-modal-title');
      title.innerText = currentLang === 'tr' ? `${user.fullname} Takip Ettikleri` : `${user.fullname} Following`;
      
      const list = document.getElementById('following-list');
      const following = user.following || [];
      
      if (following.length === 0) {
        list.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz kimse takip edilmiyor.</div>`;
      } else {
        list.innerHTML = following.map(f => {
          const followingUser = usersDb[f];
          if (!followingUser) return '';
          const groupEmoji = getGroupEmojiForUser(followingUser.username);
          return `
            <div class="flex items-center justify-between p-2 hover:bg-slate-800 rounded-xl transition">
              <div class="flex items-center gap-3 cursor-pointer" onclick="openPublicProfileModal('${followingUser.username}'); closeFollowingModal();">
                <div class="w-8 h-8 shrink-0">${renderAvatarElement(followingUser, "w-8 h-8 text-xs")}</div>
                <div>
                  <div class="font-bold text-xs text-white">${groupEmoji}${getUserDisplayName(followingUser)}</div>
                  <div class="text-[10px] text-slate-500">@${followingUser.username}</div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
      
      document.getElementById('following-modal').classList.remove('hidden');
    }

    function closeFollowingModal() {
      document.getElementById('following-modal').classList.add('hidden');
      followingModalTarget = null;
    }

    function openFollowersModalFromPublic() {
      if (viewingPublicUsername) openFollowersModal(viewingPublicUsername);
    }

    function openFollowingModalFromPublic() {
      if (viewingPublicUsername) openFollowingModal(viewingPublicUsername);
    }

    // ============================================================
    // GRUP SİSTEMİ
    // ============================================================
    function getGroupEmojiForUser(username) {
      for (const group of groupsDb) {
        if (group.members && group.members.includes(username) && group.emoji) {
          return group.emoji + ' ';
        }
      }
      return '';
    }

    function updateGroupCreateButton() {
      const btn = document.getElementById('create-group-btn');
      if (!currentUser || !currentUser.hasTik) {
        btn.disabled = true;
        btn.className = 'px-3 py-1.5 bg-slate-700 text-slate-400 text-xs font-semibold rounded-xl cursor-not-allowed touch-target';
        btn.innerHTML = `<i class="fa-solid fa-lock mr-1"></i> <span id="create-group-btn-text">Tik Gerekli</span>`;
      } else {
        btn.disabled = false;
        btn.className = 'px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold rounded-xl shadow transition touch-target';
        btn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> <span id="create-group-btn-text">Grup Oluştur</span>`;
      }
    }

    function openCreateGroupModal() {
      if (!currentUser || !currentUser.hasTik) {
        showModal('Tik Gerekli', 'Grup oluşturmak için Tik sahibi olmalısın!', 'warning');
        return;
      }
      document.getElementById('create-group-modal').classList.remove('hidden');
      document.getElementById('group-name').value = '';
      document.getElementById('group-desc').value = '';
      document.getElementById('group-type').value = 'public';
      document.getElementById('group-password').value = '';
      document.getElementById('group-emoji').value = '';
      document.getElementById('group-tag').value = '';
      document.getElementById('group-photo').value = '';
    }

    function closeCreateGroupModal() {
      document.getElementById('create-group-modal').classList.add('hidden');
    }

    async function createGroup(e) {
      e.preventDefault();
      const name = document.getElementById('group-name').value.trim();
      const desc = document.getElementById('group-desc').value.trim();
      const type = document.getElementById('group-type').value;
      const password = document.getElementById('group-password').value.trim();
      const emoji = document.getElementById('group-emoji').value.trim() || '📁';
      const tag = document.getElementById('group-tag').value.trim();
      const photoInput = document.getElementById('group-photo');

      if (!name || !desc) {
        showModal('Hata', 'Grup adı ve açıklama zorunlu!', 'error');
        return;
      }

      let photoData = null;
      if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        photoData = await new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(photoInput.files[0]);
        });
      }

      const newGroup = {
        id: 'group_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        name,
        description: desc,
        type,
        password: password || null,
        emoji,
        tag: tag || null,
        photo: photoData || null,
        owner: currentUser.username,
        members: [currentUser.username],
        joinRequests: [],
        createdAt: new Date().toISOString()
      };

      groupsDb.push(newGroup);
      await saveGroupsToDB();
      closeCreateGroupModal();
      renderGroups();
      showToast('✅ Grup başarıyla oluşturuldu!', 'success');
      
      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_GROUPS, JSON.stringify({ type: 'NEW_GROUP', group: newGroup }));
      }
    }

    function renderGroups() {
      const container = document.getElementById('groups-container');
      if (!container) return;

      if (groupsDb.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-500 text-sm py-8">Henüz hiç grup oluşturulmamış.</div>`;
        return;
      }

      const sortedGroups = [...groupsDb].sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );

      container.innerHTML = sortedGroups.map(group => {
        const isMember = group.members && group.members.includes(currentUser.username);
        const isOwner = group.owner === currentUser.username;
        const memberCount = group.members ? group.members.length : 0;
        const emoji = group.emoji || '📁';
        
        return `
          <div class="group-card bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg cursor-pointer" onclick="openGroupDetail('${group.id}')">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl overflow-hidden flex-shrink-0">
                ${group.photo ? `<img src="${group.photo}" class="w-full h-full object-cover">` : emoji}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="font-bold text-white text-sm truncate">${escapeHtml(group.name)}</h3>
                  ${isOwner ? `<span class="text-[9px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded font-semibold">Kurucu</span>` : ''}
                  ${isMember ? `<span class="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-semibold">Üye</span>` : ''}
                </div>
                <p class="text-xs text-slate-400 truncate">${escapeHtml(group.description)}</p>
                <div class="flex items-center gap-3 mt-1 text-[10px] text-slate-500">
                  <span>👥 ${memberCount} üye</span>
                  <span>🏷️ ${group.type === 'public' ? 'Herkese Açık' : group.type === 'request' ? 'İstek Gerekli' : 'Sadece Takipçiler'}</span>
                  ${group.tag ? `<span class="text-cyan-400">${escapeHtml(group.tag)}</span>` : ''}
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                ${isOwner ? `<button onclick="event.stopPropagation(); deleteGroup('${group.id}')" class="p-2 hover:bg-rose-500/10 text-slate-500 hover:text-rose-400 rounded-lg transition text-xs"><i class="fa-solid fa-trash-can"></i></button>` : ''}
                <i class="fa-solid fa-chevron-right text-slate-600 text-xs"></i>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function openGroupDetail(groupId) {
      selectedGroupId = groupId;
      const group = groupsDb.find(g => g.id === groupId);
      if (!group) { showToast('Grup bulunamadı.', 'error'); return; }

      document.getElementById('group-detail-name').innerText = group.name;
      document.getElementById('group-detail-emoji').innerText = group.emoji || '📁';
      document.getElementById('group-detail-desc').innerText = group.description;
      document.getElementById('group-detail-owner').innerText = `Kurucu: @${group.owner}`;
      
      const typeLabels = { public: 'Herkese Açık', request: 'İstek Gönder', followers: 'Sadece Takipçiler' };
      document.getElementById('group-detail-type').innerText = typeLabels[group.type] || 'Herkese Açık';
      
      if (group.photo) {
        document.getElementById('group-detail-photo').innerHTML = `<img src="${group.photo}" class="w-full h-full object-cover rounded-2xl">`;
      } else {
        document.getElementById('group-detail-photo').innerHTML = group.emoji || '📁';
        document.getElementById('group-detail-photo').className = 'w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl overflow-hidden';
      }

      const isMember = group.members && group.members.includes(currentUser.username);
      const isOwner = group.owner === currentUser.username;
      const hasPassword = group.password && group.password.length > 0;

      const passContainer = document.getElementById('group-detail-password-container');
      if (hasPassword && !isMember) {
        passContainer.classList.remove('hidden');
      } else {
        passContainer.classList.add('hidden');
      }

      const joinBtn = document.getElementById('group-detail-join-btn');
      const leaveBtn = document.getElementById('group-detail-leave-btn');
      const deleteBtn = document.getElementById('group-detail-delete-btn');

      if (isMember) {
        joinBtn.classList.add('hidden');
        leaveBtn.classList.remove('hidden');
        deleteBtn.classList.add('hidden');
        if (isOwner) {
          deleteBtn.classList.remove('hidden');
        }
      } else {
        joinBtn.classList.remove('hidden');
        leaveBtn.classList.add('hidden');
        deleteBtn.classList.add('hidden');
        if (group.type === 'request') {
          joinBtn.innerText = 'Katılmak İste';
        } else if (group.type === 'followers') {
          joinBtn.innerText = 'Takip Et ve Katıl';
        } else {
          joinBtn.innerText = 'Gruba Katıl';
        }
      }

      const membersContainer = document.getElementById('group-detail-members');
      const members = group.members || [];
      document.getElementById('group-detail-member-count').innerText = members.length;

      if (members.length === 0) {
        membersContainer.innerHTML = `<div class="text-xs text-slate-500 text-center py-4">Henüz katılımcı yok.</div>`;
      } else {
        membersContainer.innerHTML = members.map(username => {
          const user = usersDb[username];
          if (!user) return '';
          const groupEmoji = getGroupEmojiForUser(username);
          const isOwnerBadge = username === group.owner ? ' 👑' : '';
          return `
            <div class="flex items-center gap-2 p-1.5 hover:bg-slate-800 rounded-lg transition cursor-pointer" onclick="openPublicProfileModal('${username}'); closeGroupDetailModal();">
              <div class="w-6 h-6 shrink-0">${renderAvatarElement(user, "w-6 h-6 text-xs")}</div>
              <span class="text-xs text-slate-200">${groupEmoji}${escapeHtml(user.fullname)}${isOwnerBadge}</span>
              <span class="text-[9px] text-slate-500">@${escapeHtml(username)}</span>
            </div>
          `;
        }).join('');
      }

      document.getElementById('group-detail-modal').classList.remove('hidden');
    }

    function closeGroupDetailModal() {
      document.getElementById('group-detail-modal').classList.add('hidden');
      selectedGroupId = null;
    }

    async function joinGroup() {
      if (!selectedGroupId) return;
      const group = groupsDb.find(g => g.id === selectedGroupId);
      if (!group) { showToast('Grup bulunamadı.', 'error'); return; }

      const passwordInput = document.getElementById('group-detail-password-input');
      if (group.password && group.password.length > 0) {
        const enteredPass = passwordInput.value.trim();
        if (enteredPass !== group.password) {
          showToast('❌ Grup şifresi yanlış!', 'error');
          return;
        }
      }

      if (group.type === 'followers') {
        if (!currentUser.followers || !currentUser.followers.includes(group.owner)) {
          showToast('❌ Bu gruba katılmak için kurucuyu takip etmelisin!', 'warning');
          return;
        }
      }

      if (group.type === 'request') {
        if (!group.joinRequests) group.joinRequests = [];
        if (!group.joinRequests.includes(currentUser.username)) {
          group.joinRequests.push(currentUser.username);
          await saveGroupsToDB();
          showToast('✅ Katılma isteğin gönderildi! Kurucu onaylayacak.', 'success');
          renderGroups();
          openGroupDetail(selectedGroupId);
        } else {
          showToast('Zaten istek gönderdin.', 'info');
        }
        return;
      }

      if (!group.members) group.members = [];
      if (!group.members.includes(currentUser.username)) {
        group.members.push(currentUser.username);
        await saveGroupsToDB();
        showToast('✅ Gruba katıldın!', 'success');
        renderGroups();
        openGroupDetail(selectedGroupId);
        updateUserUI();
      }
    }

    async function leaveGroup() {
      if (!selectedGroupId) return;
      const group = groupsDb.find(g => g.id === selectedGroupId);
      if (!group) { showToast('Grup bulunamadı.', 'error'); return; }

      if (group.owner === currentUser.username) {
        showModal('Uyarı', 'Kurucusu olduğun gruptan ayrılamazsın. Grubu silmen gerekir.', 'warning');
        return;
      }

      group.members = group.members.filter(u => u !== currentUser.username);
      await saveGroupsToDB();
      showToast('Gruptan ayrıldın.', 'info');
      renderGroups();
      closeGroupDetailModal();
      updateUserUI();
    }

    async function deleteGroup(groupId) {
      if (!groupId) {
        if (!selectedGroupId) return;
        groupId = selectedGroupId;
      }
      const group = groupsDb.find(g => g.id === groupId);
      if (!group) { showToast('Grup bulunamadı.', 'error'); return; }

      if (group.owner !== currentUser.username) {
        showModal('Yetkisiz', 'Sadece kurucu grubu silebilir.', 'error');
        return;
      }

      if (!confirm(`"${group.name}" grubunu silmek istediğine emin misin?`)) return;

      groupsDb = groupsDb.filter(g => g.id !== groupId);
      await saveGroupsToDB();
      showToast('✅ Grup silindi.', 'success');
      renderGroups();
      closeGroupDetailModal();
    }

    // ============================================================
    // DELETE ACCOUNT
    // ============================================================
    function openDeleteAccountModal() {
      document.getElementById('delete-account-modal').classList.remove('hidden');
      document.getElementById('delete-password').value = '';
      document.getElementById('delete-confirm-text').value = '';
    }

    function closeDeleteAccountModal() {
      document.getElementById('delete-account-modal').classList.add('hidden');
    }

    async function deleteAccount(e) {
      e.preventDefault();

      const password = document.getElementById('delete-password').value;
      const confirmText = document.getElementById('delete-confirm-text').value.trim().toLowerCase();

      if (currentUser.password !== password) {
        showModal('Hata', 'Şifreniz yanlış!', 'error');
        return;
      }

      if (confirmText !== 'hesabımı sil') {
        showModal('Hata', 'Lütfen onaylamak için "hesabımı sil" yazın.', 'error');
        return;
      }

      const userPosts = postsDb.filter(p => p.author.username === currentUser.username);
      for (const post of userPosts) {
        postsDb = postsDb.filter(p => p.id !== post.id);
        commentsDb = commentsDb.filter(c => c.postId !== post.id);
      }
      await savePostsToDB();
      await saveCommentsToDB();

      dmsDb = dmsDb.filter(m => m.sender !== currentUser.username && m.recipient !== currentUser.username);
      await saveMessagesToDB();

      const ownedGroups = groupsDb.filter(g => g.owner === currentUser.username);
      for (const group of ownedGroups) {
        groupsDb = groupsDb.filter(g => g.id !== group.id);
      }
      groupsDb.forEach(g => {
        if (g.members) g.members = g.members.filter(u => u !== currentUser.username);
        if (g.joinRequests) g.joinRequests = g.joinRequests.filter(u => u !== currentUser.username);
      });
      await saveGroupsToDB();

      delete usersDb[currentUser.username];
      await saveUsersToDB();

      for (const [username, user] of Object.entries(usersDb)) {
        let changed = false;
        if (user.following && user.following.includes(currentUser.username)) {
          user.following = user.following.filter(u => u !== currentUser.username);
          changed = true;
        }
        if (user.followers && user.followers.includes(currentUser.username)) {
          user.followers = user.followers.filter(u => u !== currentUser.username);
          changed = true;
        }
        if (changed) {
          usersDb[username] = user;
        }
      }
      await saveUsersToDB();

      localStorage.removeItem('sp_social_active_user');
      localStorage.removeItem('sp_social_username');
      localStorage.removeItem('sp_social_password');

      closeDeleteAccountModal();
      showToast('✅ Hesabınız başarıyla silindi.', 'success');

      if (mqttClient) mqttClient.end();
      setTimeout(() => {
        location.reload();
      }, 1000);
    }

    // ============================================================
    // PASSWORD
    // ============================================================
    function openChangePasswordModal() {
      document.getElementById('change-password-modal').classList.remove('hidden');
      document.getElementById('current-password').value = '';
      document.getElementById('new-password').value = '';
      document.getElementById('new-password-confirm').value = '';
    }

    function closeChangePasswordModal() {
      document.getElementById('change-password-modal').classList.add('hidden');
    }

    async function changePassword(e) {
      e.preventDefault();
      const current = document.getElementById('current-password').value;
      const newPass = document.getElementById('new-password').value;
      const confirmPass = document.getElementById('new-password-confirm').value;

      if (currentUser.password !== current) {
        showModal('Hata', 'Mevcut şifreniz yanlış!', 'error');
        return;
      }
      if (newPass.length < 4) {
        showModal('Hata', 'Yeni şifre en az 4 karakter olmalı!', 'error');
        return;
      }
      if (newPass !== confirmPass) {
        showModal('Hata', 'Yeni şifreler eşleşmiyor!', 'error');
        return;
      }

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
      const dropdown = document.getElementById('settings-dropdown');
      dropdown.classList.toggle('hidden');
    }

    document.addEventListener('click', function(e) {
      const dropdown = document.getElementById('settings-dropdown');
      const btn = e.target.closest('.relative');
      if (!btn && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
      }
    });

    // ============================================================
    // MQTT
    // ============================================================
    function initNetworkConnection() {
      const statusBadge = document.getElementById('status-badge');
      const statusText = document.getElementById('status-text');
      logSystem(`Sunucu bağlantısı kuruluyor...`);

      const clientId = 'sp_client_' + currentUser.username + '_' + Math.random().toString(16).substring(2, 8);

      try {
        mqttClient = mqtt.connect(BROKER_URL, {
          clientId: clientId,
          clean: true,
          connectTimeout: 10000,
          reconnectPeriod: 3000,
          keepalive: 60
        });

        mqttClient.on('connect', () => {
          isMqttConnected = true;
          logSystem('Canlı ağ bağlantısı başarıyla oluşturuldu.');
          statusBadge.className = 'flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium';
          statusText.innerText = 'Canlı Bağlantı';
          mqttClient.subscribe(TOPIC_POSTS);
          mqttClient.subscribe(TOPIC_LIKES);
          mqttClient.subscribe(TOPIC_USERS);
          mqttClient.subscribe(TOPIC_FOLLOWS);
          mqttClient.subscribe(TOPIC_DM + currentUser.username);
          mqttClient.subscribe(TOPIC_COMMENTS);
          mqttClient.subscribe(TOPIC_GROUPS);
          mqttClient.publish(TOPIC_USERS, JSON.stringify({ type: 'PRESENCE', user: sanitizeUserObj(currentUser) }));
        });

        mqttClient.on('message', (topic, payload) => {
          try { const data = JSON.parse(payload.toString());
            handleIncomingNetworkData(topic, data); } catch (err) { console.error('Data Parsing Error:', err); }
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

        mqttClient.on('reconnect', () => {
          logSystem('Yeniden bağlanılıyor...');
          statusText.innerText = 'Yeniden Bağlanıyor...';
        });

      } catch (err) {
        logSystem(`Bağlantı Başlatma Hatası: ${err.message}`);
      }
    }

    // ============================================================
    // MQTT MESSAGE HANDLER
    // ============================================================
    async function handleIncomingNetworkData(topic, data) {
      if (topic === TOPIC_POSTS && data.type === 'NEW_POST') {
        if (!postsDb.some(p => p.id === data.post.id)) {
          postsDb.unshift(data.post);
          if (postsDb.length > MAX_POSTS) {
            postsDb = postsDb.slice(0, MAX_POSTS);
          }
          await savePostsToDB();
          if (data.post.author.username !== currentUser.username) {
            addNotification(`${data.post.author.fullname} (@${data.post.author.username}) yeni bir gönderi paylaştı.`);
          }
        }
        renderFeed();
        return;
      }
      if (topic === TOPIC_LIKES && data.type === 'TOGGLE_LIKE') {
        const targetPost = postsDb.find(p => p.id === data.postId);
        if (targetPost) { targetPost.likes = data.likes;
          await savePostsToDB(); }
        renderFeed();
        return;
      }
      if (topic === TOPIC_USERS && data.type === 'PRESENCE') {
        const rxUser = data.user;
        if (rxUser.username !== currentUser.username) {
          usersDb[rxUser.username] = { ...(usersDb[rxUser.username] || {}), ...rxUser, followers: rxUser.followers || (usersDb[
              rxUser.username] ? usersDb[rxUser.username].followers : []), following: rxUser.following || (usersDb[rxUser
              .username] ? usersDb[rxUser.username].following : []) };
          await saveUsersToDB();
          renderDmUserList();
          renderUsersLeaderboard();
        }
        return;
      }
      if (topic === TOPIC_FOLLOWS && data.type === 'FOLLOW_UPDATE') {
        if (usersDb[data.targetUsername]) usersDb[data.targetUsername].followers = data.followers;
        if (usersDb[data.followerUsername]) usersDb[data.followerUsername].following = data.following;
        await saveUsersToDB();
        if (data.targetUsername === currentUser.username) currentUser.followers = data.followers;
        if (data.followerUsername !== currentUser.username && data.targetUsername === currentUser.username) {
          const follower = usersDb[data.followerUsername];
          if (follower) {
            addNotification(`${follower.fullname} (@${follower.username}) sizi takip etmeye başladı! 🎉`);
          }
        }
        renderUsersLeaderboard();
        updateUserUI();
        if (viewingPublicUsername) renderPublicProfileModal(viewingPublicUsername);
        return;
      }
      if (topic === TOPIC_DM + currentUser.username && data.type === 'DIRECT_MESSAGE') {
        if (data.message.sender !== currentUser.username) {
          if (!dmUnreadCounts[data.message.sender]) dmUnreadCounts[data.message.sender] = 0;
          dmUnreadCounts[data.message.sender]++;
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
      if (topic === TOPIC_COMMENTS && data.type === 'NEW_COMMENT') {
        if (!commentsDb.some(c => c.id === data.comment.id)) {
          commentsDb.push(data.comment);
          await saveCommentsToDB();
          if (data.comment.author.username !== currentUser.username) {
            const post = postsDb.find(p => p.id === data.comment.postId);
            if (post && post.author.username === currentUser.username) {
              addNotification(`${data.comment.author.fullname} (@${data.comment.author.username}) gönderinize yorum yaptı: "${data.comment.text}"`);
            } else {
              addNotification(`${data.comment.author.fullname} (@${data.comment.author.username}) bir gönderiye yorum yaptı.`);
            }
          }
          renderFeed();
        }
        return;
      }
      if (topic === TOPIC_GROUPS && data.type === 'NEW_GROUP') {
        if (!groupsDb.some(g => g.id === data.group.id)) {
          groupsDb.push(data.group);
          await saveGroupsToDB();
          renderGroups();
        }
        return;
      }
    }

    // ============================================================
    // BİLDİRİMLER
    // ============================================================
    function addNotification(text) {
      notifications.unshift({
        id: 'notif_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        text: text,
        timestamp: new Date().toISOString(),
        read: false
      });
      notificationCount = notifications.filter(n => !n.read).length;
      updateNotificationBadge();
      showToast('🔔 ' + text, 'info');
    }

    function updateNotificationBadge() {
      const badge = document.getElementById('notification-badge');
      if (notificationCount > 0) {
        badge.innerText = notificationCount > 99 ? '99+' : notificationCount;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }

    function openNotificationModal() {
      const modal = document.getElementById('notification-modal');
      const list = document.getElementById('notification-list');
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

    function closeNotificationModal() {
      document.getElementById('notification-modal').classList.add('hidden');
    }

    function clearAllNotifications() {
      notifications = [];
      notificationCount = 0;
      updateNotificationBadge();
      closeNotificationModal();
      showToast('Tüm bildirimler temizlendi.', 'info');
    }

    // ============================================================
    // HELPERS
    // ============================================================
    function sanitizeUserObj(u) {
      return { username: u.username, fullname: u.fullname, bio: u.bio, color: u.color, avatarUrl: u.avatarUrl,
      followers: u.followers || [], following: u.following || [], neonColor: u.neonColor || null, hasTik: u.hasTik || false, tikRengi: u.tikRengi || null };
    }

    function logSystem(msg) {
      const box = document.getElementById('system-log-box');
      if (!box) return;
      const time = new Date().toLocaleTimeString('tr-TR', { hour12: false });
      const entry = document.createElement('div');
      entry.className = 'leading-tight hover:text-white transition';
      entry.innerHTML = `<span class="text-slate-600">[${time}]</span> ${escapeHtml(msg)}`;
      box.appendChild(entry);
      box.scrollTop = box.scrollHeight;
    }

    // ============================================================
    // TAB SWITCHING
    // ============================================================
    function switchTab(tab) {
      activeTab = tab;
      const feedTab = document.getElementById('tab-content-feed');
      const msgTab = document.getElementById('tab-content-messages');
      const groupsTab = document.getElementById('tab-content-groups');
      const usersTab = document.getElementById('tab-content-users');
      const profileTab = document.getElementById('tab-content-profile');

      const navFeed = document.getElementById('nav-feed');
      const navMsg = document.getElementById('nav-messages');
      const navGroups = document.getElementById('nav-groups');
      const navUsers = document.getElementById('nav-users');
      const navProf = document.getElementById('nav-profile');

      [feedTab, msgTab, groupsTab, usersTab, profileTab].forEach(el => el.classList.add('hidden'));
      [navFeed, navMsg, navGroups, navUsers, navProf].forEach(el => {
        el.className =
          'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 text-slate-400 hover:bg-slate-800/60 hover:text-white transition relative';
      });

      if (tab === 'feed') {
        feedTab.classList.remove('hidden');
        navFeed.className =
          'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-slate-800 text-cyan-400 border border-slate-700/50';
        renderFeed();
      } else if (tab === 'messages') {
        msgTab.classList.remove('hidden');
        navMsg.className =
          'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-slate-800 text-cyan-400 border border-slate-700/50 relative';
        document.getElementById('unread-dm-badge').classList.add('hidden');
        renderDmUserList();
        if (selectedDmUser) renderChatMessages();
      } else if (tab === 'groups') {
        groupsTab.classList.remove('hidden');
        navGroups.className =
          'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-slate-800 text-cyan-400 border border-slate-700/50';
        renderGroups();
      } else if (tab === 'users') {
        usersTab.classList.remove('hidden');
        navUsers.className =
          'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-slate-800 text-cyan-400 border border-slate-700/50';
        renderUsersLeaderboard();
      } else if (tab === 'profile') {
        profileTab.classList.remove('hidden');
        navProf.className =
          'nav-btn px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 bg-slate-800 text-cyan-400 border border-slate-700/50';
        renderProfileTab();
      }
    }

    // ============================================================
    // RENDER FUNCTIONS
    // ============================================================
    function renderAvatarElement(userObj, sizeClasses = "w-10 h-10 text-sm") {
      if (userObj && userObj.avatarUrl) {
        return `<img src="${userObj.avatarUrl}" class="${sizeClasses} object-cover rounded-xl shadow" alt="Avatar" loading="lazy">`;
      }
      const letter = (userObj && userObj.fullname) ? userObj.fullname.charAt(0).toUpperCase() : '?';
      const color = (userObj && userObj.color) ? userObj.color : 'bg-indigo-600';
      return `<div class="${sizeClasses} rounded-xl ${color} text-white flex items-center justify-center font-bold shadow">${letter}</div>`;
    }

    function showTikBadge(userObj) {
      if (userObj && userObj.hasTik) {
        // Kullanıcının tik rengine göre dosya seç
        const tikDosya = userObj.tikRengi === 'purple' ? 'tick-p.png' : 'tick-b.png';
        return `<img src="${tikDosya}" class="tik-rozet" alt="Tik">`;
      }
      return '';
    }

    function getUserDisplayName(userObj) {
      if (!userObj) return '?';
      const followerCount = (userObj.followers || []).length;
      let nameHtml = escapeHtml(userObj.fullname);

      if (followerCount >= 10 && userObj.neonColor) {
        nameHtml = `<span class="neon-text" style="color: ${userObj.neonColor};">${nameHtml}</span>`;
      }

      nameHtml += showTikBadge(userObj);

      return nameHtml;
    }

    function updateUserUI() {
      if (!currentUser) return;
      document.getElementById('header-avatar').innerHTML = renderAvatarElement(currentUser, "w-full h-full text-sm");
      document.getElementById('header-username-display').innerHTML = '@' + currentUser.username + showTikBadge(currentUser);
      document.getElementById('sidebar-avatar').innerHTML = renderAvatarElement(currentUser, "w-full h-full text-lg");
      document.getElementById('sidebar-username-display').innerHTML = getUserDisplayName(currentUser);
      document.getElementById('sidebar-bio').innerText = currentUser.bio;
      document.getElementById('composer-avatar').innerHTML = renderAvatarElement(currentUser, "w-full h-full text-sm");
      const myPosts = postsDb.filter(p => p.author.username === currentUser.username);
      document.getElementById('sidebar-post-count').innerText = myPosts.length;
      document.getElementById('sidebar-followers-count').innerText = (currentUser.followers || []).length;
      document.getElementById('sidebar-user-count').innerText = (currentUser.following || []).length;
      updateGroupCreateButton();
    }

    function toggleImageInput() {
      document.getElementById('image-url-container').classList.toggle('hidden');
    }

    // ============================================================
    // LINK DÖNÜŞTÜRÜCÜ
    // ============================================================
    function convertLinksToAnchors(text) {
      const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
      return text.replace(urlRegex, function(url) {
        let href = url;
        if (!href.startsWith('http://') && !href.startsWith('https://')) {
          href = 'https://' + href;
        }
        return `<a href="${href}" target="_blank" class="message-link" rel="noopener noreferrer">${escapeHtml(url)}</a>`;
      });
    }

    // ============================================================
    // POSTS
    // ============================================================
    function containsForbidden(text) {
      const allowedDomains = ['youtube.com', 'youtu.be', 'instagram.com', 'twitter.com', 'x.com'];
      
      const urlRegex = /(https?:\/\/|www\.)([^\s]+)/gi;
      let match;
      while ((match = urlRegex.exec(text)) !== null) {
        const fullMatch = match[0];
        const isAllowed = allowedDomains.some(domain => fullMatch.includes(domain));
        if (isAllowed) {
          return false;
        }
      }
      
      const forbiddenLinks = /\b(https?:\/\/|www\.)(?!(youtube\.com|youtu\.be|instagram\.com|twitter\.com|x\.com)[\/\s]?)/i;
      const forbiddenWords = /\b(fuck|siktir|amk|orospu|piç|göt|yarrak|amcık|sik|kahpe|kaltak|şerefsiz|hain|döl|sperm|çük|yavşak|ibne|puşt|gavat|pezevenk|şişko|çomar|mal|embesil|gerizekalı|salak|aptal|dangalak|mankafa)\b/i;
      
      return forbiddenLinks.test(text) || forbiddenWords.test(text);
    }

    function censorText(text) {
      if (containsForbidden(text)) {
        return '****';
      }
      return text;
    }

    function renderTextWithLinks(text) {
      const censored = censorText(text);
      if (censored === '****') return '****';
      return convertLinksToAnchors(censored);
    }

    async function submitPost() {
      const input = document.getElementById('post-input');
      const imgUrlInput = document.getElementById('post-image-url');
      if (!input) return;
      let text = input.value.trim();
      
      if (containsForbidden(text)) {
        showToast('Bu gönderi yasaklı içerik içeriyor!', 'error');
        return;
      }
      text = censorText(text);
      
      const imageUrl = imgUrlInput ? imgUrlInput.value.trim() : '';
      if (!text) { showToast('Lütfen yayınlamak için bir şeyler yazın.', 'warning'); return; }

      const now = Date.now();
      if (now - lastPostTime < POST_COOLDOWN_MS) {
        const remaining = Math.ceil((POST_COOLDOWN_MS - (now - lastPostTime)) / 1000);
        showToast(`Lütfen ${remaining} saniye bekleyin.`, 'warning');
        return;
      }
      lastPostTime = now;

      const newPost = {
        id: 'post_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        text, imageUrl,
        createdAt: new Date().toISOString(),
        likes: [],
        comments: [],
        author: { username: currentUser.username, fullname: currentUser.fullname, color: currentUser.color || 'bg-cyan-600',
          avatarUrl: currentUser.avatarUrl || null, hasTik: currentUser.hasTik || false, tikRengi: currentUser.tikRengi || null }
      };

      postsDb.unshift(newPost);
      if (postsDb.length > MAX_POSTS) {
        postsDb = postsDb.slice(0, MAX_POSTS);
        showToast('⚠️ Maksimum 100 gönderiye ulaşıldı, en eski gönderiler silindi.', 'warning');
      }
      await savePostsToDB();
      renderFeed();
      updateUserUI();

      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_POSTS, JSON.stringify({ type: 'NEW_POST', post: newPost }));
      }

      input.value = '';
      if (imgUrlInput) imgUrlInput.value = '';
      document.getElementById('image-url-container').classList.add('hidden');
      document.getElementById('char-counter').innerText = '0 / 280';
      showToast('✅ Gönderiniz yayınlandı!', 'success');
    }

    function toggleComments(postId) {
      const container = document.getElementById('comments-container-' + postId);
      if (container) {
        container.classList.toggle('hidden');
        if (!container.classList.contains('hidden')) renderComments(postId);
      }
    }

    async function submitComment(postId) {
      const input = document.getElementById('comment-input-' + postId);
      if (!input) return;
      let text = input.value.trim();
      if (!text) return;
      if (containsForbidden(text)) {
        showToast('Yorum yasaklı içerik içeriyor!', 'error');
        return;
      }
      text = censorText(text);

      const comment = {
        id: 'cmt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        postId, text,
        author: { username: currentUser.username, fullname: currentUser.fullname, color: currentUser.color || 'bg-cyan-600',
          avatarUrl: currentUser.avatarUrl || null, hasTik: currentUser.hasTik || false, tikRengi: currentUser.tikRengi || null },
        createdAt: new Date().toISOString()
      };

      commentsDb.push(comment);
      await saveCommentsToDB();

      const post = postsDb.find(p => p.id === postId);
      if (post) { if (!post.comments) post.comments = []; 
        post.comments.push(comment.id);
        await savePostsToDB(); }

      input.value = '';
      renderComments(postId);
      renderFeed();

      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_COMMENTS, JSON.stringify({ type: 'NEW_COMMENT', comment }));
      }
      
      const container = document.getElementById('comments-container-' + postId);
      if (container && container.classList.contains('hidden')) {
        container.classList.remove('hidden');
      }
    }

    function renderComments(postId) {
      const container = document.getElementById('comments-list-' + postId);
      if (!container) return;
      const postComments = commentsDb.filter(c => c.postId === postId);
      if (postComments.length === 0) { container.innerHTML =
          `<div class="text-xs text-slate-500 text-center py-2">Henüz yorum yok. İlk yorumu sen yap!</div>`; return; }
      container.innerHTML = postComments.map(c => `
          <div class="flex items-start gap-2 p-2 bg-slate-950 rounded-xl">
            <div class="w-6 h-6 shrink-0">${renderAvatarElement(c.author, "w-6 h-6 text-xs")}</div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-bold text-xs text-white">${escapeHtml(c.author.fullname)}${showTikBadge(c.author)}</span>
                <span class="text-[9px] text-slate-500">@${escapeHtml(c.author.username)}</span>
                <span class="text-[9px] text-slate-600">${formatTimeAgo(c.createdAt)}</span>
              </div>
              <p class="text-xs text-slate-300 break-words">${renderTextWithLinks(c.text)}</p>
            </div>
            ${c.author.username === currentUser.username ? `<button onclick="deleteComment('${c.id}', '${postId}')" class="text-slate-600 hover:text-rose-400 text-xs transition touch-target p-1"><i class="fa-solid fa-times"></i></button>` : ''}
          </div>
        `).join('');
    }

    async function deleteComment(commentId, postId) {
      commentsDb = commentsDb.filter(c => c.id !== commentId);
      await saveCommentsToDB();
      const post = postsDb.find(p => p.id === postId);
      if (post && post.comments) { post.comments = post.comments.filter(id => id !== commentId); 
        await savePostsToDB(); }
      renderComments(postId);
      renderFeed();
    }

    async function toggleLike(postId) {
      const post = postsDb.find(p => p.id === postId);
      if (!post) return;
      const userIndex = post.likes.indexOf(currentUser.username);
      if (userIndex === -1) post.likes.push(currentUser.username);
      else post.likes.splice(userIndex, 1);
      await savePostsToDB();
      renderFeed();
      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_LIKES, JSON.stringify({ type: 'TOGGLE_LIKE', postId, likes: post.likes }));
      }
    }

    async function deletePost(postId) {
      commentsDb = commentsDb.filter(c => c.postId !== postId);
      await saveCommentsToDB();
      postsDb = postsDb.filter(p => p.id !== postId);
      await savePostsToDB();
      renderFeed();
      updateUserUI();
      showToast('Gönderi silindi.', 'info');
    }

    function createPostCardHtml(post) {
      const isLiked = post.likes.includes(currentUser.username);
      const isOwner = post.author.username === currentUser.username;
      const timeAgo = formatTimeAgo(post.createdAt);
      const commentCount = commentsDb.filter(c => c.postId === post.id).length;
      const latestAuthor = usersDb[post.author.username] || post.author;
      const groupEmoji = getGroupEmojiForUser(latestAuthor.username);

      const authorDisplay = getUserDisplayName(latestAuthor);

      return `
        <div class="bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-lg transition space-y-3 post-card">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3 cursor-pointer min-w-0" onclick="openPublicProfileModal('${escapeHtml(latestAuthor.username)}')">
              <div class="w-10 h-10 shrink-0">${renderAvatarElement(latestAuthor, "w-10 h-10 text-sm")}</div>
              <div class="min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-bold text-sm text-white hover:text-cyan-400 transition truncate">${groupEmoji}${authorDisplay}</span>
                  <span class="text-xs text-slate-500 truncate">@${escapeHtml(latestAuthor.username)}</span>
                </div>
                <span class="text-[10px] text-slate-500 font-mono">${timeAgo}</span>
              </div>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              ${!isOwner ? `<button onclick="startDirectMessageWith('${escapeHtml(latestAuthor.username)}')" title="DM Gönder" class="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-lg transition text-xs touch-target"><i class="fa-solid fa-paper-plane"></i></button>` : ''}
              ${isOwner ? `<button onclick="deletePost('${post.id}')" title="Gönderiyi Sil" class="p-1.5 hover:bg-rose-500/10 text-slate-500 hover:text-rose-400 rounded-lg transition text-xs touch-target"><i class="fa-solid fa-trash-can"></i></button>` : ''}
            </div>
          </div>
          <p class="text-sm text-slate-200 leading-relaxed whitespace-pre-line break-words">${renderTextWithLinks(post.text)}</p>
          ${post.imageUrl ? `<div class="rounded-xl overflow-hidden border border-slate-800 max-h-80 bg-slate-950"><img src="${escapeHtml(post.imageUrl)}" onerror="this.style.display='none'" alt="Gönderi Görseli" class="w-full h-full object-cover" loading="lazy"></div>` : ''}
          <div class="flex items-center gap-4 sm:gap-6 pt-2 border-t border-slate-800/60 text-xs text-slate-400 flex-wrap">
            <button onclick="toggleLike('${post.id}')" class="flex items-center gap-1.5 hover:text-rose-400 transition touch-target ${isLiked ? 'text-rose-500 font-bold' : ''}">
              <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              <span>${post.likes.length}</span>
            </button>
            <button onclick="toggleComments('${post.id}')" class="flex items-center gap-1.5 hover:text-cyan-400 transition touch-target">
              <i class="fa-regular fa-comment"></i>
              <span>${commentCount} Yorum</span>
            </button>
            <button onclick="startDirectMessageWith('${escapeHtml(latestAuthor.username)}')" class="flex items-center gap-1.5 hover:text-cyan-400 transition touch-target">
              <i class="fa-regular fa-paper-plane"></i>
              <span>Mesaj At</span>
            </button>
          </div>
          <div id="comments-container-${post.id}" class="hidden space-y-3 pt-2 border-t border-slate-800/40">
            <div id="comments-list-${post.id}" class="space-y-2 max-h-48 overflow-y-auto custom-scrollbar"></div>
            <div class="flex gap-2">
              <input id="comment-input-${post.id}" type="text" placeholder="Yorum yaz..." class="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 min-h-[40px]">
              <button onclick="submitComment('${post.id}')" class="px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl text-xs font-semibold transition touch-target"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      `;
    }

    function renderFeed() {
      const container = document.getElementById('posts-container');
      if (!container) return;
      
      const sortedPosts = [...postsDb].sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      
      const feedCount = document.getElementById('post-feed-count');
      if (feedCount) feedCount.innerText = `${sortedPosts.length} Gönderi`;
      
      if (sortedPosts.length === 0) {
        container.innerHTML =
          `<div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500 space-y-2"><i class="fa-solid fa-comments text-3xl text-slate-700"></i><p class="text-sm">Henüz hiç gönderi paylaşılmadı. İlk gönderiyi sen at!</p></div>`;
        return;
      }
      container.innerHTML = sortedPosts.map(post => createPostCardHtml(post)).join('');
    }

    // ============================================================
    // USERS / LEADERBOARD
    // ============================================================
    function renderUsersLeaderboard() {
      const container = document.getElementById('users-leaderboard-container');
      const badge = document.getElementById('total-users-badge');
      if (!container) return;
      const allUsers = Object.values(usersDb);
      if (badge) badge.innerText = `${allUsers.length} Kayıtlı Üye`;
      allUsers.sort((a, b) => { const fA = a.followers ? a.followers.length : 0; const fB = b.followers ? b.followers.length :
          0; return fB - fA; });
      if (allUsers.length === 0) { container.innerHTML =
          `<div class="p-4 text-center text-xs text-slate-500">Henüz kimse katılmış görünmüyor.</div>`; return; }
      container.innerHTML = allUsers.map((u, index) => {
        const followerCount = u.followers ? u.followers.length : 0;
        const isMe = u.username === currentUser.username;
        const isFollowing = currentUser.following && currentUser.following.includes(u.username);
        const groupEmoji = getGroupEmojiForUser(u.username);
        let rankBadge =
          `<span class="w-7 h-7 rounded-xl bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center shrink-0">${index + 1}</span>`;
        if (index === 0) rankBadge =
          `<span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥇</span>`;
        if (index === 1) rankBadge =
          `<span class="w-8 h-8 rounded-xl bg-slate-400/20 text-slate-300 border border-slate-400/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥈</span>`;
        if (index === 2) rankBadge =
          `<span class="w-8 h-8 rounded-xl bg-amber-700/20 text-amber-600 border border-amber-700/40 font-extrabold text-sm flex items-center justify-center shrink-0">🥉</span>`;

        const nameDisplay = getUserDisplayName(u);

        return `
          <div class="bg-slate-950 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-3 flex items-center justify-between gap-3 transition">
            <div class="flex items-center gap-3 overflow-hidden min-w-0">
              ${rankBadge}
              <div class="w-10 h-10 shrink-0 cursor-pointer" onclick="openPublicProfileModal('${escapeHtml(u.username)}')">${renderAvatarElement(u, "w-10 h-10 text-sm")}</div>
              <div class="overflow-hidden cursor-pointer min-w-0" onclick="openPublicProfileModal('${escapeHtml(u.username)}')">
                <div class="flex items-center gap-2 flex-wrap">
                  <h4 class="font-bold text-sm text-white hover:text-cyan-400 transition truncate">${groupEmoji}${nameDisplay}</h4>
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
          </div>
        `;
      }).join('');
    }

    async function toggleFollowUser(targetUsername) {
      if (targetUsername === currentUser.username) return;
      const targetUser = usersDb[targetUsername];
      if (!targetUser) return;
      if (!targetUser.followers) targetUser.followers = [];
      if (!currentUser.following) currentUser.following = [];
      const followerIndex = targetUser.followers.indexOf(currentUser.username);
      const followingIndex = currentUser.following.indexOf(targetUsername);
      if (followerIndex === -1) {
        targetUser.followers.push(currentUser.username);
        currentUser.following.push(targetUsername);

        if (targetUser.followers.length >= 10 && !targetUser.neonColor) {
          const neonColors = [
            '#b026ff', '#9b00ff', '#8b00cc', '#7a00b3', '#6a0099',
            '#c44dff', '#d580ff', '#e6b3ff', '#a64dff', '#8000ff'
          ];
          targetUser.neonColor = neonColors[Math.floor(Math.random() * neonColors.length)];
          usersDb[targetUsername] = targetUser;
          await saveUsersToDB();
          showToast(`🎉 @${targetUsername} 10 takipçiye ulaştı ve neon renk kazandı!`, 'success');
          addNotification(`🎉 @${targetUsername} 10 takipçiye ulaştı ve neon renk kazandı!`);
        }

        showToast(`@${targetUsername} takip edilmeye başlandı.`, 'info');
      } else {
        targetUser.followers.splice(followerIndex, 1);
        if (followingIndex !== -1) currentUser.following.splice(followingIndex, 1);
        showToast(`@${targetUsername} takipten çıkarıldı.`, 'info');
      }
      usersDb[targetUsername] = targetUser;
      usersDb[currentUser.username] = currentUser;
      await saveUsersToDB();
      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_FOLLOWS, JSON.stringify({ type: 'FOLLOW_UPDATE', targetUsername, followerUsername: currentUser
            .username, followers: targetUser.followers, following: currentUser.following }));
      }
      renderUsersLeaderboard();
      updateUserUI();
      if (viewingPublicUsername === targetUsername) renderPublicProfileModal(targetUsername);
    }

    // ============================================================
    // DIRECT MESSAGES
    // ============================================================
    function renderDmUserList() {
      const container = document.getElementById('dm-users-list');
      if (!container) return;
      
      const dmUsers = new Set();
      dmsDb.forEach(m => {
        if (m.sender === currentUser.username) dmUsers.add(m.recipient);
        if (m.recipient === currentUser.username) dmUsers.add(m.sender);
      });
      
      const otherUsers = Object.values(usersDb).filter(u => u.username !== currentUser.username);
      
      const sortedUsers = otherUsers.sort((a, b) => {
        const aHasDm = dmUsers.has(a.username);
        const bHasDm = dmUsers.has(b.username);
        if (aHasDm && !bHasDm) return -1;
        if (!aHasDm && bHasDm) return 1;
        
        if (aHasDm && bHasDm) {
          const aTime = dmLastMessageTime[a.username] || 0;
          const bTime = dmLastMessageTime[b.username] || 0;
          return bTime - aTime;
        }
        
        return a.fullname.localeCompare(b.fullname);
      });
      
      if (sortedUsers.length === 0) {
        container.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">Kayıtlı başka kullanıcı yok.</div>`;
        return;
      }
      
      container.innerHTML = sortedUsers.map(u => {
        const isSelected = selectedDmUser === u.username;
        const nameDisplay = getUserDisplayName(u);
        const unreadCount = dmUnreadCounts[u.username] || 0;
        const groupEmoji = getGroupEmojiForUser(u.username);
        
        return `<div onclick="selectChatUser('${u.username}')" class="dm-item p-2.5 rounded-xl flex items-center gap-3 cursor-pointer transition ${isSelected ? 'dm-item-selected' : 'hover:bg-slate-900'}">
          <div class="w-8 h-8 shrink-0">${renderAvatarElement(u, "w-8 h-8 text-xs")}</div>
          <div class="overflow-hidden min-w-0 flex-1">
            <div class="font-bold text-xs text-white truncate">${groupEmoji}${nameDisplay}</div>
            <div class="text-[10px] text-slate-500 truncate">@${escapeHtml(u.username)}</div>
          </div>
          ${unreadCount > 0 ? `<span class="dm-unread-badge">${unreadCount}</span>` : ''}
        </div>`;
      }).join('');
    }

    function filterDmUsers() {
      const query = document.getElementById('dm-user-search').value.toLowerCase();
      document.querySelectorAll('#dm-users-list > div').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(query) ? 'flex' : 'none';
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
      if (dmUnreadCounts[username]) {
        dmUnreadCounts[username] = 0;
        renderDmUserList();
      }
      const targetUser = usersDb[username] || { fullname: username, username };
      document.getElementById('chat-target-avatar').innerHTML = renderAvatarElement(targetUser, "w-10 h-10 text-base");
      document.getElementById('chat-target-name').innerHTML = getUserDisplayName(targetUser);
      document.getElementById('chat-target-handle').innerText = '@' + targetUser.username;
      document.getElementById('chat-view-profile-btn').classList.remove('hidden');
      document.getElementById('dm-input-text').disabled = false;
      document.getElementById('dm-send-btn').disabled = false;
      renderDmUserList();
      renderChatMessages();
    }

    function openChatUserProfile() {
      if (selectedDmUser) openPublicProfileModal(selectedDmUser);
    }

    function openSelectedUserProfile() { if (selectedDmUser) openPublicProfileModal(selectedDmUser); }

    function sendFileAttachment(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      if (file.size > 10 * 1024 * 1024) {
        showToast('Dosya boyutu 10MB\'dan büyük olamaz!', 'error');
        event.target.value = '';
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        const fileData = e.target.result;
        let messageText = '';
        const fileType = file.type;
        const fileName = file.name;
        
        if (fileType.startsWith('image/')) {
          messageText = `📷 Resim: ${fileName}`;
        } else if (fileType.startsWith('audio/')) {
          messageText = `🎵 Müzik: ${fileName}`;
        } else {
          messageText = `📎 Dosya: ${fileName}`;
        }
        
        const message = {
          id: 'dm_' + Date.now(),
          sender: currentUser.username,
          recipient: selectedDmUser,
          text: messageText,
          timestamp: new Date().toISOString(),
          attachment: {
            data: fileData,
            type: fileType,
            name: fileName,
            size: file.size
          }
        };
        
        dmsDb.push(message);
        saveMessagesToDB();
        if (mqttClient && mqttClient.connected) {
          mqttClient.publish(TOPIC_DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE', message }));
        }
        renderChatMessages();
        showToast('📎 Dosya gönderildi!', 'success');
        event.target.value = '';
      };
      reader.readAsDataURL(file);
    }

    async function sendDirectMessage(e) {
      e.preventDefault();
      const input = document.getElementById('dm-input-text');
      let text = input.value.trim();
      if (!text || !selectedDmUser) return;
      
      if (containsForbidden(text)) {
        showToast('Mesaj yasaklı içerik içeriyor!', 'error');
        return;
      }
      text = censorText(text);
      
      const message = { id: 'dm_' + Date.now(), sender: currentUser.username, recipient: selectedDmUser, text,
        timestamp: new Date().toISOString() };
      dmsDb.push(message);
      await saveMessagesToDB();
      if (mqttClient && mqttClient.connected) mqttClient.publish(TOPIC_DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE',
          message }));
      input.value = '';
      renderChatMessages();
    }

    function renderChatMessages() {
      const container = document.getElementById('chat-messages-inner');
      if (!container) return;
      
      if (!selectedDmUser) {
        container.innerHTML = `<div class="h-full flex items-center justify-center text-slate-500 text-xs text-center p-4">Sohbet başlatmak için listeden bir kullanıcı seçin.</div>`;
        return;
      }
      
      const conversation = dmsDb.filter(m => (m.sender === currentUser.username && m.recipient === selectedDmUser) || (m
        .sender === selectedDmUser && m.recipient === currentUser.username));
        
      if (conversation.length === 0) {
        container.innerHTML = `<div class="h-full flex items-center justify-center text-slate-500 text-xs text-center p-4">@${selectedDmUser} ile henüz hiç mesajınız yok. Selam verin!</div>`;
        return;
      }
      
      container.innerHTML = conversation.map(m => {
        const isMe = m.sender === currentUser.username;
        const time = formatTimeAgo(m.timestamp);
        let content = renderTextWithLinks(m.text);
        
        if (m.attachment) {
          if (m.attachment.type && m.attachment.type.startsWith('image/')) {
            content += `<div class="mt-2 max-w-[200px] rounded-lg overflow-hidden border border-slate-700">
              <img src="${m.attachment.data}" alt="Resim" class="w-full h-auto object-cover" loading="lazy" onclick="window.open('${m.attachment.data}', '_blank')">
            </div>`;
          } else if (m.attachment.type && m.attachment.type.startsWith('audio/')) {
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
      
      const parentBox = document.getElementById('chat-messages-box');
      if (parentBox) {
        parentBox.scrollTop = parentBox.scrollHeight;
      }
    }

    function updateUnreadBadge() {
      const badge = document.getElementById('unread-dm-badge');
      let totalUnread = 0;
      for (const key in dmUnreadCounts) {
        totalUnread += dmUnreadCounts[key];
      }
      if (badge) {
        if (totalUnread > 0) {
          badge.innerText = totalUnread > 99 ? '99+' : totalUnread;
          badge.classList.remove('hidden');
        } else {
          badge.classList.add('hidden');
        }
      }
    }

    // ============================================================
    // PROFILE
    // ============================================================
    function renderProfileTab() {
      if (!currentUser) return;
      document.getElementById('profile-main-avatar').innerHTML = renderAvatarElement(currentUser,
        "w-20 h-20 sm:w-24 sm:h-24 text-2xl sm:text-3xl");
      document.getElementById('profile-fullname').innerHTML = getUserDisplayName(currentUser);
      document.getElementById('profile-username-display').innerHTML = '@' + currentUser.username + showTikBadge(currentUser);
      document.getElementById('profile-bio').innerText = currentUser.bio;
      
      const myPosts = postsDb
        .filter(p => p.author.username === currentUser.username)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
      document.getElementById('profile-stat-posts').innerText = myPosts.length;
      document.getElementById('profile-stat-followers').innerText = (currentUser.followers || []).length;
      document.getElementById('profile-stat-following').innerText = (currentUser.following || []).length;
      
      const container = document.getElementById('profile-posts-container');
      if (myPosts.length === 0) {
        container.innerHTML =
          `<div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-slate-500 text-xs">Henüz hiç gönderiniz bulunmuyor.</div>`;
      } else {
        container.innerHTML = myPosts.map(post => createPostCardHtml(post)).join('');
      }
    }

    // ============================================================
    // PUBLIC PROFILE (BÜYÜK)
    // ============================================================
    function openPublicProfileModal(username) {
      if (username === currentUser.username) { switchTab('profile'); return; }
      viewingPublicUsername = username;
      renderPublicProfileModal(username);
      document.getElementById('public-profile-modal').classList.remove('hidden');
    }

    function closePublicProfileModal() {
      viewingPublicUsername = null;
      document.getElementById('public-profile-modal').classList.add('hidden');
    }

    function renderPublicProfileModal(username) {
      const u = usersDb[username];
      if (!u) return;
      const groupEmoji = getGroupEmojiForUser(username);
      
      document.getElementById('pub-profile-avatar').innerHTML = renderAvatarElement(u,
        "w-20 h-20 sm:w-24 sm:h-24 text-2xl sm:text-3xl");
      document.getElementById('pub-profile-fullname').innerHTML = groupEmoji + getUserDisplayName(u);
      document.getElementById('pub-profile-username').innerHTML = '@' + u.username + showTikBadge(u);
      document.getElementById('pub-profile-bio').innerText = u.bio || 'Biyografi yok.';
      const followers = u.followers || [];
      const following = u.following || [];
      
      const userPosts = postsDb
        .filter(p => p.author.username === username)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
      document.getElementById('pub-profile-posts-count').innerText = userPosts.length;
      document.getElementById('pub-profile-followers-count').innerText = followers.length;
      document.getElementById('pub-profile-following-count').innerText = following.length;
      
      const isFollowing = currentUser.following && currentUser.following.includes(username);
      const followBtn = document.getElementById('pub-profile-follow-btn');
      if (followBtn) {
        followBtn.innerText = isFollowing ? 'Takiptesin' : 'Takip Et';
        followBtn.className = isFollowing ?
          'px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 text-slate-300 hover:bg-rose-500/20 hover:text-rose-400 text-xs font-semibold rounded-xl border border-slate-700 transition touch-target' :
          'px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold rounded-xl shadow transition touch-target';
      }
      const postsList = document.getElementById('pub-profile-posts-list');
      if (userPosts.length === 0) {
        postsList.innerHTML =
          `<div class="p-4 text-center text-xs text-slate-500 bg-slate-950 rounded-xl">Gönderi bulunmuyor.</div>`;
      } else {
        postsList.innerHTML = userPosts.map(p => createPostCardHtml(p)).join('');
      }
    }

    function toggleFollowPublicUser() { if (viewingPublicUsername) toggleFollowUser(viewingPublicUsername); }

    function messagePublicUser() { if (viewingPublicUsername) startDirectMessageWith(viewingPublicUsername); }

    // ============================================================
    // EDIT PROFILE
    // ============================================================
    function openEditProfileModal() {
      document.getElementById('edit-fullname').value = currentUser.fullname;
      document.getElementById('edit-bio').value = currentUser.bio;
      document.getElementById('edit-avatar-preview').innerHTML = renderAvatarElement(currentUser, "w-full h-full text-xl");
      tempAvatarBase64 = null;
      document.getElementById('edit-profile-modal').classList.remove('hidden');
    }

    function closeEditProfileModal() {
      tempAvatarBase64 = null;
      document.getElementById('edit-profile-modal').classList.add('hidden');
    }

    function handleAvatarSelect(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const maxDim = 250;
          let width = img.width,
            height = img.height;
          if (width > height) { if (width > maxDim) { height *= maxDim / width; 
              width = maxDim; } } else { if (height > maxDim) { width *= maxDim / height; 
              height = maxDim; } }
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          tempAvatarBase64 = canvas.toDataURL('image/jpeg', 0.85);
          document.getElementById('edit-avatar-preview').innerHTML =
            `<img src="${tempAvatarBase64}" class="w-full h-full object-cover rounded-2xl">`;
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }

    async function saveProfileChanges(e) {
      e.preventDefault();
      const newFullname = document.getElementById('edit-fullname').value.trim();
      const newBio = document.getElementById('edit-bio').value.trim();
      currentUser.fullname = newFullname;
      currentUser.bio = newBio;
      if (tempAvatarBase64) currentUser.avatarUrl = tempAvatarBase64;
      usersDb[currentUser.username] = currentUser;
      await saveUsersToDB();
      postsDb.forEach(p => { if (p.author.username === currentUser.username) { p.author.fullname = newFullname; 
          p.author.avatarUrl = currentUser.avatarUrl; } });
      await savePostsToDB();
      commentsDb.forEach(c => { if (c.author.username === currentUser.username) { c.author.fullname = newFullname; 
          c.author.avatarUrl = currentUser.avatarUrl; } });
      await saveCommentsToDB();
      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_USERS, JSON.stringify({ type: 'PRESENCE', user: sanitizeUserObj(currentUser) }));
      }
      closeEditProfileModal();
      updateUserUI();
      renderProfileTab();
      renderFeed();
      renderUsersLeaderboard();
      showToast('Profiliniz güncellendi.', 'success');
    }

    // ============================================================
    // TİK ŞARTLARI
    // ============================================================
    function openTikModal() {
      // Önce şartları göster
      document.getElementById('tik-terms-modal').classList.remove('hidden');
    }

    function closeTikTermsModal() {
      document.getElementById('tik-terms-modal').classList.add('hidden');
    }

    function closeTikTermsAndContinue() {
      document.getElementById('tik-terms-modal').classList.add('hidden');
      // Tik kod modalını aç
      document.getElementById('tik-modal').classList.remove('hidden');
      document.getElementById('tik-input').value = '';
      document.getElementById('tik-sonuc').innerText = '';
    }

    function closeTikModal() {
      document.getElementById('tik-modal').classList.add('hidden');
    }

    function tikKontrolEt() {
      const girilenKod = document.getElementById('tik-input').value.trim();
      const sonuc = document.getElementById('tik-sonuc');

      if (girilenKod === gecerliKod) {
        currentUser.hasTik = true;
        currentUser.tikRengi = tikRengi;
        usersDb[currentUser.username] = currentUser;
        saveUsersToDB();
        
        postsDb.forEach(p => { 
          if (p.author.username === currentUser.username) {
            p.author.hasTik = true;
            p.author.tikRengi = tikRengi;
          }
        });
        savePostsToDB();
        
        commentsDb.forEach(c => { 
          if (c.author.username === currentUser.username) {
            c.author.hasTik = true;
            c.author.tikRengi = tikRengi;
          }
        });
        saveCommentsToDB();

        document.getElementById('tik-modal').classList.add('hidden');
        // Tik göster modalında doğru resmi göster
        const tikImg = document.getElementById('tik-goster-img');
        tikImg.src = tikRengi === 'purple' ? 'tick-p.png' : 'tick-b.png';
        document.getElementById('tik-goster').classList.remove('hidden');
        sonuc.style.color = "green";
        sonuc.innerText = "Tik başarıyla alındı!";
        
        updateUserUI();
        renderFeed();
        renderUsersLeaderboard();
        renderDmUserList();
        renderProfileTab();
        renderGroups();
        updateGroupCreateButton();
      } else {
        sonuc.style.color = "red";
        sonuc.innerText = "❌ Kod hatalı! Kod almak için @burak_msz instagram adresine DM at.";
      }
    }

    // ============================================================
    // UI HELPERS
    // ============================================================
    function showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      const bgColors = { success: 'bg-emerald-950 border-emerald-800 text-emerald-200', error: 'bg-rose-950 border-rose-800 text-rose-200',
        warning: 'bg-amber-950 border-amber-800 text-amber-200', info: 'bg-cyan-950 border-cyan-800 text-cyan-200' };
      toast.className =
        `p-3 rounded-xl border text-xs font-medium shadow-xl backdrop-blur-md pointer-events-auto transition-all transform duration-300 translate-y-2 opacity-0 ${bgColors[type] || bgColors.info}`;
      toast.innerText = message;
      container.appendChild(toast);
      setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 10);
      setTimeout(() => { toast.classList.add('opacity-0'); 
        setTimeout(() => toast.remove(), 300); }, 4000);
    }

    function showModal(title, bodyText, iconType = 'info') {
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-body').innerText = bodyText;
      document.getElementById('modal-overlay').classList.remove('hidden');
    }

    function closeModal() { document.getElementById('modal-overlay').classList.add('hidden'); }

    function formatTimeAgo(isoString) {
      if (!isoString) return 'şimdi';
      const now = new Date();
      const past = new Date(isoString);
      const diffInSec = Math.floor((now - past) / 1000);
      if (diffInSec < 60) return `${diffInSec} sn önce`;
      if (diffInSec < 3600) return `${Math.floor(diffInSec / 60)} dk önce`;
      if (diffInSec < 86400) return `${Math.floor(diffInSec / 3600)} sa önce`;
      return past.toLocaleDateString('tr-TR');
    }

    function escapeHtml(str) {
      if (!str) return '';
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g,
        "&#039;");
    }

    setLanguage('tr');
