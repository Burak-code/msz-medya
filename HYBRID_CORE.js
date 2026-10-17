// ============================================================
// MSZ MEDYA - HİBRİT CORE (MQTT + Firebase)
// Bu dosyayı mevcut script.js'in başına ekleyebilir veya
// ilgili fonksiyonları değiştirebilirsin.
// ============================================================

// Firebase import'ları zaten var, sadece şunları ekle:
// import { ..., push, child, query, orderByChild, limitToLast, onChildAdded } from ".../firebase-database.js";

// ============================================================
// FIREBASE YARDIMCI FONKSİYONLAR
// ============================================================

/** Chat ID oluştur (her iki kullanıcı için aynı olur) */
function getChatId(user1, user2) {
  return [user1, user2].sort().join('_');
}

/** Kullanıcıyı Firebase'e kaydet / güncelle */
async function saveUserToFirebase(user) {
  if (!user?.username) return;
  try {
    await set(ref(rtdb, 'users/' + user.username), {
      username: user.username,
      fullname: user.fullname || user.username,
      bio: user.bio || '',
      color: user.color || 'bg-cyan-600',
      avatarUrl: user.avatarUrl || null,
      followers: user.followers || [],
      following: user.following || [],
      neonColor: user.neonColor || null,
      hasTik: !!user.hasTik,
      tikRengi: user.tikRengi || null,
      postCount: typeof user.postCount === 'number' ? user.postCount : 0,
      joinedAt: user.joinedAt || new Date().toISOString(),
      lastSeen: new Date().toISOString()
    });
  } catch (e) {
    console.error('Firebase user kaydetme hatası:', e);
  }
}

/** Tek kullanıcıyı Firebase'den çek */
async function loadUserFromFirebase(username) {
  try {
    const snap = await get(ref(rtdb, 'users/' + username));
    return snap.exists() ? snap.val() : null;
  } catch (e) {
    console.error('Firebase user yükleme hatası:', e);
    return null;
  }
}

/** Tüm kullanıcıları Firebase'den çek */
async function loadAllUsersFromFirebase() {
  try {
    const snap = await get(ref(rtdb, 'users'));
    if (!snap.exists()) return {};
    return snap.val();
  } catch (e) {
    console.error('Firebase users yükleme hatası:', e);
    return {};
  }
}

/** Post'u Firebase'e kaydet */
async function savePostToFirebase(post) {
  try {
    await set(ref(rtdb, 'posts/' + post.id), post);
  } catch (e) {
    console.error('Firebase post kaydetme hatası:', e);
  }
}

/** Post sil */
async function deletePostFromFirebase(postId) {
  try {
    await remove(ref(rtdb, 'posts/' + postId));
  } catch (e) {
    console.error('Firebase post silme hatası:', e);
  }
}

/** Tüm postları Firebase'den çek (en yeni 100) */
async function loadPostsFromFirebase() {
  try {
    const snap = await get(ref(rtdb, 'posts'));
    if (!snap.exists()) return [];
    const posts = Object.values(snap.val());
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return posts.slice(0, MAX_POSTS);
  } catch (e) {
    console.error('Firebase posts yükleme hatası:', e);
    return [];
  }
}

/** Yorum kaydet */
async function saveCommentToFirebase(comment) {
  try {
    await set(ref(rtdb, `comments/${comment.postId}/${comment.id}`), comment);
  } catch (e) {
    console.error('Firebase comment kaydetme hatası:', e);
  }
}

/** Bir postun yorumlarını çek */
async function loadCommentsForPost(postId) {
  try {
    const snap = await get(ref(rtdb, 'comments/' + postId));
    if (!snap.exists()) return [];
    return Object.values(snap.val());
  } catch (e) {
    return [];
  }
}

/** Tüm yorumları çek */
async function loadAllCommentsFromFirebase() {
  try {
    const snap = await get(ref(rtdb, 'comments'));
    if (!snap.exists()) return [];
    const all = [];
    const data = snap.val();
    for (const postId in data) {
      for (const cid in data[postId]) {
        all.push(data[postId][cid]);
      }
    }
    return all;
  } catch (e) {
    return [];
  }
}

/** DM kaydet */
async function saveDmToFirebase(msg) {
  try {
    const chatId = getChatId(msg.sender, msg.recipient);
    await set(ref(rtdb, `dms/${chatId}/${msg.id}`), msg);
  } catch (e) {
    console.error('Firebase DM kaydetme hatası:', e);
  }
}

/** İki kullanıcı arasındaki sohbeti çek */
async function loadChatFromFirebase(user1, user2) {
  try {
    const chatId = getChatId(user1, user2);
    const snap = await get(ref(rtdb, 'dms/' + chatId));
    if (!snap.exists()) return [];
    const msgs = Object.values(snap.val());
    msgs.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    return msgs;
  } catch (e) {
    return [];
  }
}

/** Kullanıcının tüm DM'lerini çek (son 30 gün veya son 200 mesaj) */
async function loadUserDmsFromFirebase(username) {
  try {
    const snap = await get(ref(rtdb, 'dms'));
    if (!snap.exists()) return [];
    const all = [];
    const data = snap.val();
    for (const chatId in data) {
      if (chatId.includes(username)) {
        for (const mid in data[chatId]) {
          all.push(data[chatId][mid]);
        }
      }
    }
    all.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    return all.slice(0, 300); // son 300 mesaj
  } catch (e) {
    return [];
  }
}

/** Grup kaydet */
async function saveGroupToFirebase(group) {
  try {
    await set(ref(rtdb, 'groups/' + group.id), group);
  } catch (e) {
    console.error('Firebase group kaydetme hatası:', e);
  }
}

/** Tüm grupları çek */
async function loadGroupsFromFirebase() {
  try {
    const snap = await get(ref(rtdb, 'groups'));
    if (!snap.exists()) return [];
    return Object.values(snap.val());
  } catch (e) {
    return [];
  }
}

/** Ban kaydet */
async function saveBanToFirebase(ban) {
  try {
    await set(ref(rtdb, 'bans/' + ban.username), ban);
  } catch (e) {
    console.error('Firebase ban kaydetme hatası:', e);
  }
}

/** Ban sil */
async function removeBanFromFirebase(username) {
  try {
    await remove(ref(rtdb, 'bans/' + username));
  } catch (e) {}
}

/** Tüm banları çek */
async function loadBansFromFirebase() {
  try {
    const snap = await get(ref(rtdb, 'bans'));
    if (!snap.exists()) return [];
    return Object.values(snap.val());
  } catch (e) {
    return [];
  }
}

/** DM Request kaydet */
async function saveDmRequestToFirebase(req) {
  try {
    await set(ref(rtdb, 'dm_requests/' + req.id), req);
  } catch (e) {}
}

/** DM Request'leri çek */
async function loadDmRequestsFromFirebase() {
  try {
    const snap = await get(ref(rtdb, 'dm_requests'));
    if (!snap.exists()) return [];
    return Object.values(snap.val());
  } catch (e) {
    return [];
  }
}

// ============================================================
// HİBRİT YÜKLEME (Uygulama açılınca çağır)
// ============================================================
async function loadEverythingFromFirebase() {
  logSystem('Firebase\'den veriler yükleniyor...');
  
  try {
    const [users, posts, comments, groups, bans, dmReqs] = await Promise.all([
      loadAllUsersFromFirebase(),
      loadPostsFromFirebase(),
      loadAllCommentsFromFirebase(),
      loadGroupsFromFirebase(),
      loadBansFromFirebase(),
      loadDmRequestsFromFirebase()
    ]);

    // Kullanıcılar
    if (users && Object.keys(users).length > 0) {
      usersDb = { ...usersDb, ...users };
    }

    // Postlar (Firebase kaynak of truth)
    if (posts && posts.length > 0) {
      // Mevcut IndexedDB postlarıyla birleştir, ID'ye göre unique tut
      const map = new Map();
      postsDb.forEach(p => map.set(p.id, p));
      posts.forEach(p => map.set(p.id, p));
      postsDb = Array.from(map.values())
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, MAX_POSTS);
    }

    // Yorumlar
    if (comments && comments.length > 0) {
      const map = new Map();
      commentsDb.forEach(c => map.set(c.id, c));
      comments.forEach(c => map.set(c.id, c));
      commentsDb = Array.from(map.values());
    }

    // Gruplar
    if (groups && groups.length > 0) {
      const map = new Map();
      groupsDb.forEach(g => map.set(g.id, g));
      groups.forEach(g => map.set(g.id, g));
      groupsDb = Array.from(map.values());
    }

    // Banlar
    if (bans && bans.length > 0) {
      bannedUsers = bans.filter(b => new Date(b.until).getTime() > Date.now());
    }

    // DM Requests
    if (dmReqs && dmReqs.length > 0) {
      const map = new Map();
      dmRequestsDb.forEach(r => map.set(r.id, r));
      dmReqs.forEach(r => map.set(r.id, r));
      dmRequestsDb = Array.from(map.values());
    }

    // Kullanıcının kendi DM'lerini de yükle
    if (currentUser) {
      const myDms = await loadUserDmsFromFirebase(currentUser.username);
      if (myDms.length > 0) {
        const map = new Map();
        dmsDb.forEach(m => map.set(m.id, m));
        myDms.forEach(m => map.set(m.id, m));
        dmsDb = Array.from(map.values());
      }
    }

    // IndexedDB'ye de kaydet (offline cache)
    await Promise.all([
      saveUsersToDB(),
      savePostsToDB(),
      saveCommentsToDB(),
      saveGroupsToDB(),
      saveBannedUsersToDB(),
      saveDmRequestsToDB(),
      saveMessagesToDB()
    ]);

    logSystem(`Firebase yüklendi → ${Object.keys(usersDb).length} kullanıcı, ${postsDb.length} post, ${dmsDb.length} mesaj`);
    return true;
  } catch (e) {
    console.error('Firebase yükleme hatası:', e);
    logSystem('Firebase yükleme hatası, IndexedDB kullanılıyor');
    return false;
  }
}

// ============================================================
// HİBRİT YAZMA ÖRNEKLERİ (mevcut fonksiyonların içine ekle)
// ============================================================

/*
=== submitPost içine eklenecek (post oluşturulduktan sonra) ===

  // 1. Firebase'e kaydet (kalıcı)
  await savePostToFirebase(post);
  
  // 2. MQTT ile yayınla (anlık)
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.POSTS, JSON.stringify({ type: 'NEW_POST', post }));
  }

=== sendDirectMessage içine eklenecek ===

  // 1. Firebase'e kaydet
  await saveDmToFirebase(msg);
  
  // 2. MQTT ile alıcıya gönder
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.DM + selectedDmUser, JSON.stringify({ type: 'DIRECT_MESSAGE', message: msg }));
  }

=== toggleLike içine eklenecek ===

  // Like değişince postu Firebase'e tekrar yaz
  await savePostToFirebase(post);
  
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.LIKES, JSON.stringify({ type: 'LIKE_UPDATE', postId: post.id, likes: post.likes }));
  }

=== modBanUser içine eklenecek ===

  await saveBanToFirebase(ban);
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.MOD, JSON.stringify({ type: 'BAN_USER', ban }));
  }

=== modUnbanUser ===

  await removeBanFromFirebase(targetUsername);
  if (mqttClient?.connected) {
    mqttClient.publish(TOPICS.MOD, JSON.stringify({ type: 'UNBAN_USER', username: targetUsername }));
  }
*/

// ============================================================
// INIT'te çağırılacak yer
// ============================================================

/*
window.addEventListener('DOMContentLoaded', async () => {
  // ... mevcut IndexedDB yükleme kodu ...

  // Firebase'den de yükle (kaynak of truth)
  await loadEverythingFromFirebase();

  // ... session kontrolü vs. ...
});
*/

console.log('%c[MSZ] Hibrit Core yüklendi (MQTT + Firebase)', 'color:#06b6d4;font-weight:bold');
