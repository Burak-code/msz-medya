// server.js - Tik kontrolü (şifre Render'da gizli!)
const express = require('express');
const cors = require('cors');
const app = express();

// CORS ayarları - Tüm kaynaklara izin ver (geçici çözüm)
app.use(cors({
    origin: '*', // Herkese açık (test için)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Şifre Render'daki Environment Variable'dan gelir!
const GIZLI_KOD = process.env.TIK_KODU;

// Ana sayfa (opsiyonel)
app.get('/', (req, res) => {
    res.json({ message: 'MSZ MEDYA Backend çalışıyor!' });
});

// Tik kontrol endpoint'i
app.post('/api/tik-kontrol', (req, res) => {
    const { kod } = req.body;
    
    if (!kod) {
        return res.status(400).json({ error: '❌ Kod gerekli!' });
    }
    
    if (kod === GIZLI_KOD) {
        res.json({ success: true, mesaj: '✅ Tik alındı!' });
    } else {
        res.status(401).json({ error: '❌ Hatalı kod!' });
    }
});

// Sağlık kontrolü
app.get('/api/health', (req, res) => {
    res.json({ status: 'online', timestamp: new Date().toISOString() });
});

// Sunucuyu başlat
app.listen(3000, () => {
    console.log('🚀 MSZ MEDYA Backend çalışıyor!');
    console.log(`🔐 TIK_KODU: ${GIZLI_KOD ? '✅ Tanımlı' : '❌ Tanımlı değil!'}`);
});
