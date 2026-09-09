// server.js - Tik kontrolü (şifre Render'da gizli!)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Şifre Render'daki Environment Variable'dan gelir!
const GIZLI_KOD = process.env.TIK_KODU;

app.post('/api/tik-kontrol', (req, res) => {
    const { kod } = req.body;
    
    if (kod === GIZLI_KOD) {
        res.json({ success: true, mesaj: '✅ Tik alındı!' });
    } else {
        res.status(401).json({ error: '❌ Hatalı kod!' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'online', timestamp: new Date().toISOString() });
});

app.listen(3000, () => {
    console.log('🚀 MSZ MEDYA Backend çalışıyor!');
});
