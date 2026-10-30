/* HANTAS prototipe aplikasi pendamping. Semua angka adalah data ilustrasi. */

// ---------- ikon ----------
const I = {
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/><path d="M12 7v5l3 2"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><circle cx="12" cy="17.5" r=".6" fill="currentColor"/>',
  flame: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 1.8 1.3 2.8 2.5 3-.8-2.5-.5-5.5 0-8z"/>',
  fan: '<circle cx="12" cy="12" r="1.8"/><path d="M12 10.2C12 6 13 3.5 15.5 3.5S19 6 16 8.5"/><path d="M13.8 12.3c3.6 2 5.4 4 4.2 6.2s-3.8 1.5-4.6-2.3"/><path d="M10.2 12.6c-3.6 2.1-6.2 2.4-7.4.3s.8-4 4.6-3"/>',
  thermo: '<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  cloud: '<path d="M7 18a4 4 0 0 1-.6-8 5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 0 1 17 18z"/>',
  alert: '<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4.5"/><circle cx="12" cy="17.3" r=".6" fill="currentColor"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.7-7.7z"/><path d="M14.7 6.3L17 4l3 3-2.3 2.3"/>',
  house: '<path d="M4 12c0-4.5 3.6-8 8-8s8 3.5 8 8"/><path d="M5 12v8h14v-8"/><path d="M10 20v-4h4v4"/>',
  chart: '<path d="M4 19h16"/><path d="M5 15l4-4 3 2 6-6"/>',
  sync: '<path d="M20 11a8 8 0 0 0-14-4.5L4 9"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14 4.5l2-2.5"/><path d="M20 20v-5h-5"/>',
  bt: '<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  battery: '<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10.5v3"/>',
  signal: '<path d="M4 19v-2M9 19v-6M14 19v-10M19 19V5"/>',
  nosignal: '<path d="M4 19v-2M9 19v-6"/><path d="M14 9l6 6M20 9l-6 6"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  camera: '<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  valve: '<circle cx="12" cy="12" r="8"/><path d="M7 12h10"/>',
  co: '<circle cx="12" cy="12" r="9"/><path d="M8 14.5a2.5 2.5 0 1 1 0-5"/><circle cx="14.5" cy="12" r="2.5"/>',
};
const ic = (name, size = 18, extra = '') =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${I[name]}</svg>`;

// ---------- skenario (data ilustrasi) ----------
const SCENARIOS = {
  normal: {
    label: 'Normal', color: 'var(--good)', level: 'good',
    status: 'Udara baik', note: 'Kipas bekerja pelan. Panas dari saluran ikut menghangatkan rumah.',
    pm: 18, co: 2, tin: 20.6, tout: 16.2, fan: 1, bat: 82, valve: 100,
    T1: 162, T2: 104, T3: 16.2, T4: 71.5,
    eff: [0.39, 0.39, 0.38, 0.38, 0.37, 0.37, 0.37, 0.36],
  },
  asap: {
    label: 'Asap naik saat memasak', color: 'var(--warn)', level: 'warn',
    status: 'Asap meningkat', note: 'Kipas dinaikkan otomatis sampai asap turun. Tidak perlu menekan apa pun.',
    pm: 96, co: 9, tin: 21.4, tout: 16.0, fan: 2, bat: 79, valve: 100,
    T1: 214, T2: 128, T3: 16.0, T4: 88.4,
    eff: [0.39, 0.39, 0.38, 0.38, 0.37, 0.37, 0.37, 0.36],
  },
  co: {
    label: 'Bahaya CO', color: 'var(--bad)', level: 'bad',
    status: 'Bahaya CO', note: 'Kadar CO tinggi. Keluar rumah dan bangunkan semua penghuni.',
    pm: 142, co: 68, tin: 21.0, tout: 15.4, fan: 3, bat: 76, valve: 100,
    T1: 196, T2: 121, T3: 15.4, T4: 80.1,
    eff: [0.39, 0.39, 0.38, 0.38, 0.37, 0.37, 0.37, 0.36],
  },
  t2: {
    label: 'Suhu asap keluar rendah', color: 'var(--cool)', level: 'cool',
    status: 'Mode lindungi saluran', note: 'Api mengecil sehingga asap terlalu dingin. Katup udara masuk dipersempit agar tar tidak mengendap.',
    pm: 24, co: 4, tin: 19.1, tout: 15.1, fan: 1, bat: 74, valve: 35,
    T1: 92, T2: 46, T3: 15.1, T4: 38.6,
    eff: [0.39, 0.39, 0.38, 0.38, 0.37, 0.37, 0.37, 0.36],
  },
  kotor: {
    label: 'Saluran mulai kotor', color: 'var(--warn)', level: 'warn',
    status: 'Perlu dibersihkan', note: 'Pemulihan panas menurun. Kader sudah dijadwalkan membersihkan saluran.',
    pm: 31, co: 4, tin: 18.7, tout: 16.0, fan: 2, bat: 80, valve: 100,
    T1: 168, T2: 131, T3: 16.0, T4: 58.0,
    eff: [0.39, 0.38, 0.36, 0.35, 0.33, 0.32, 0.30, 0.28],
  },
};
const EFF_LIMIT = 0.30;

// ---------- state ----------
const state = {
  role: 'penghuni',
  screen: 'beranda',
  scenario: 'normal',
  online: true,
  boostUntil: null,
  sent: false,
  cleanDone: [true, true, false, false, false],
  logs: [
    { date: '24 Okt 2026', type: 'Bersihkan pipa dalam', who: 'Yonas W.', res: 'Efektivitas kembali 0,39' },
    { date: '02 Okt 2026', type: 'Cek alarm CO', who: 'Yonas W.', res: 'Alarm berbunyi normal' },
    { date: '18 Sep 2026', type: 'Ganti saringan kasa', who: 'Mince H.', res: 'Aliran buang normal' },
  ],
  newLog: { type: 'Bersihkan pipa dalam' },
};

const S = () => SCENARIOS[state.scenario];
const fmt = (n, d = 1) => n.toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });
const effNow = sc => (sc.T4 - sc.T3) / (sc.T1 - sc.T3);

// ---------- potongan UI ----------
function statusbar(dark = false) {
  const sig = state.online ? ic('signal', 14) : ic('nosignal', 14);
  return `<div class="statusbar"${dark ? ' style="color:#fff"' : ''}><span>19.42</span><span class="sig">${sig}${ic('battery', 16)}</span></div>`;
}
function appbar(eyebrow, title, back) {
  return `<div class="appbar"><div class="row">
    <div>${back ? `<button class="back" data-go="${back}" aria-label="Kembali">${ic('back', 16)}</button>` : ''}
      <div class="eyebrow">${eyebrow}</div><h1>${title}</h1></div>
    <span class="badge-ilus">DATA ILUSTRASI</span></div></div>`;
}
function syncStrip() {
  return state.online
    ? `<div class="offline-strip ok">${ic('check', 14)} Tersinkron 2 menit lalu</div>`
    : `<div class="offline-strip">${ic('cloud', 14)} Data tersimpan di ponsel, menunggu sinyal untuk dikirim</div>`;
}
function nav(items) {
  return `<nav class="nav">${items.map(([id, name, label]) =>
    `<button data-go="${id}" class="${state.screen === id || (state.screen === 'pembersihan' && id === 'saluran') || (state.screen === 'tambah' && id === 'perawatan') ? 'active' : ''}">${ic(name, 20)}${label}</button>`).join('')}</nav>`;
}
const navPenghuni = () => nav([['beranda', 'home', 'Beranda'], ['riwayat', 'history', 'Riwayat'], ['bantuan', 'help', 'Bantuan']]);
const navKader = () => nav([['rumah', 'house', 'Rumah'], ['saluran', 'chart', 'Saluran'], ['pasang', 'wrench', 'Pasang'], ['perawatan', 'check', 'Rawat'], ['sinkron', 'sync', 'Sinkron']]);

function fanBars(level) {
  return `<div class="fanbars">${[1, 2, 3].map(n => `<i class="${n <= level ? 'on' : ''}"></i>`).join('')}</div>`;
}

// ---------- layar penghuni ----------
function scrBeranda() {
  const sc = S();
  const fan = state.boostUntil ? 3 : sc.fan;
  const levelIcon = { good: 'check', warn: 'alert', bad: 'alert', cool: 'valve' }[sc.level];
  const pmLvl = sc.pm < 35 ? ['good', 'Rendah'] : sc.pm < 100 ? ['warn', 'Meningkat'] : ['bad', 'Tinggi'];
  const coLvl = sc.co < 9 ? ['good', 'Aman'] : sc.co < 35 ? ['warn', 'Waspada'] : ['bad', 'Bahaya'];
  return `<div class="app">${statusbar()}
    ${appbar('Rumah Keluarga Wenda, Kampung Wesaput', 'Kondisi rumah')}
    ${syncStrip()}
    <div class="content">
      <div class="card hero">
        <div class="ring ${sc.level}"><div class="ring-in">${ic(levelIcon, 34)}<strong>${sc.status}</strong><span>diperbarui 19.41</span></div></div>
        <p>${state.boostUntil ? 'Kipas maksimal aktif selama 15 menit atas permintaan penghuni.' : sc.note}</p>
      </div>
      <div class="metrics">
        <div class="metric"><div class="k">Asap (PM2,5)${ic('cloud', 14)}</div><div class="v">${sc.pm}<small>µg/m³</small></div><div class="s ${pmLvl[0]}">${pmLvl[1]}</div></div>
        <div class="metric"><div class="k">Karbon monoksida${ic('co', 14)}</div><div class="v">${sc.co}<small>ppm</small></div><div class="s ${coLvl[0]}">${coLvl[1]}</div></div>
        <div class="metric"><div class="k">Suhu dalam rumah${ic('thermo', 14)}</div><div class="v">${fmt(sc.tin)}<small>°C</small></div><div class="s" style="color:var(--ink-3)">Luar ${fmt(sc.tout)}°C</div></div>
        <div class="metric"><div class="k">Tingkat kipas${ic('fan', 14)}</div>${fanBars(fan)}<div class="s" style="color:var(--ink-3)">Tingkat ${fan} dari 3</div></div>
      </div>
      <div class="card" style="display:flex;align-items:center;gap:12px">
        <span class="ico good">${ic('battery', 18)}</span>
        <div style="flex:1"><div style="display:flex;justify-content:space-between"><b style="font-size:13.5px">Baterai surya</b><span style="font-size:13px">${sc.bat}%</span></div>
        <div class="battery"><i style="width:${sc.bat}%"></i></div></div>
      </div>
      <button class="btn ember" data-act="boost">${ic('fan', 18)} Kipas maksimal 15 menit</button>
    </div>
    ${navPenghuni()}
    <div class="toast" id="toast"></div>
  </div>`;
}

function scrAlarm() {
  const sc = SCENARIOS.co;
  return `<div class="alarm">${statusbar(true)}
    <div class="body">
      <div class="pulse">${ic('alert', 56)}</div>
      <h1>Kadar CO tinggi</h1>
      <div class="val">${sc.co} ppm di area tidur, terbaca 02.17</div>
      <ol>
        <li>Buka pintu sekarang.</li>
        <li>Bangunkan semua penghuni dan keluar rumah.</li>
        <li>Jangan kembali sebelum lampu alat berwarna hijau.</li>
      </ol>
      <div class="note">Alarm CO mandiri di dekat tempat tidur juga berbunyi, terpisah dari aplikasi ini.</div>
      <button class="btn white" data-act="callkader">${ic('phone', 18)} Hubungi kader</button>
      <button class="btn ghost" style="background:rgba(255,255,255,.18);color:#fff" data-act="safe">Saya sudah aman</button>
    </div>
    <div class="toast" id="toast"></div>
  </div>`;
}

function scrRiwayat() {
  const ev = [
    ['Hari ini', [
      ['warn', 'cloud', 'Asap meningkat saat memasak', 'PM2,5 naik ke 96 µg/m³, kipas naik ke tingkat 2, turun lagi dalam 25 menit.', '18.05'],
      ['cool', 'valve', 'Mode lindungi saluran', 'Asap keluar terlalu dingin, katup udara masuk dipersempit 40 menit.', '05.30'],
    ]],
    ['Kemarin', [
      ['good', 'check', 'Pembersihan saluran selesai', 'Oleh kader Yonas W. Pemulihan panas kembali normal.', '10.12'],
      ['bad', 'co', 'Peringatan CO', 'CO 41 ppm pukul 02.17. Kipas maksimal, alarm berbunyi, normal kembali 02.40.', '02.17'],
    ]],
    ['26 Okt 2026', [
      ['warn', 'battery', 'Baterai rendah', 'Baterai 18% setelah hujan seharian. Sensor dan alarm tetap diprioritaskan.', '21.40'],
    ]],
  ];
  return `<div class="app">${statusbar()}${appbar('Catatan alat', 'Riwayat kejadian')}
    ${syncStrip()}
    <div class="content"><div class="card" style="padding:4px 14px">
    ${ev.map(([day, rows]) => `<div class="day">${day}</div>` + rows.map(([lv, icn, t, d, time]) =>
      `<div class="row-item"><span class="ico ${lv}">${ic(icn, 17)}</span><div><div class="t">${t}</div><div class="d">${d}</div></div><span class="time">${time}</span></div>`).join('')).join('')}
    </div></div>${navPenghuni()}</div>`;
}

function scrBantuan() {
  return `<div class="app">${statusbar()}${appbar('Panduan singkat', 'Bantuan')}
    <div class="content">
      <div class="card help"><h3>Arti warna lampu</h3>
        <div class="swatch"><i style="background:var(--good)"></i><span><b>Hijau</b>, udara baik. Kipas berjalan pelan.</span></div>
        <div class="swatch"><i style="background:var(--warn)"></i><span><b>Kuning</b>, asap meningkat atau saluran perlu dibersihkan.</span></div>
        <div class="swatch"><i style="background:var(--cool)"></i><span><b>Biru</b>, alat sedang melindungi saluran dari endapan tar.</span></div>
        <div class="swatch"><i style="background:var(--bad)"></i><span><b>Merah dan berbunyi</b>, bahaya CO. Buka pintu dan keluar rumah.</span></div>
      </div>
      <div class="card help"><h3>Yang perlu diingat</h3>
        <div class="check"><span class="box" style="border-color:var(--ember)"></span><span>Jangan menutup lubang udara masuk di bawah saluran.</span></div>
        <div class="check"><span class="box" style="border-color:var(--ember)"></span><span>Alarm CO di dekat tempat tidur memakai baterai sendiri. Tekan tombol tes sebulan sekali.</span></div>
        <div class="check"><span class="box" style="border-color:var(--ember)"></span><span>Alat ini mengurangi asap, tetapi tidur di dekat api yang menyala tetap berisiko.</span></div>
      </div>
      <div class="card house-card"><span class="h-ico">${ic('phone', 20)}</span><div class="h-main"><div class="h-name">Kader HANTAS kampung</div><div class="h-meta">Yonas Wenda, 0812 xxxx xxxx</div></div></div>
    </div>${navPenghuni()}</div>`;
}

// ---------- layar kader ----------
function scrRumah() {
  const sc = S();
  const firstStatus = { good: ['good', 'Normal'], warn: ['warn', sc.status], bad: ['bad', 'Bahaya CO'], cool: ['cool', 'Lindungi saluran'] }[sc.level];
  const houses = [
    ['Keluarga Wenda', 'HTS-021 · Wesaput', firstStatus, 'baru saja'],
    ['Keluarga Itlay', 'HTS-018 · Wesaput', ['warn', 'Perlu dibersihkan'], '3 jam lalu'],
    ['Keluarga Lokobal', 'HTS-014 · Hubikosi', ['good', 'Normal'], '1 hari lalu'],
    ['Keluarga Hisage', 'HTS-009 · Hubikosi', ['gray', 'Belum tersinkron'], '4 hari lalu'],
  ];
  return `<div class="app">${statusbar()}${appbar('Mode kader · Yonas Wenda', 'Rumah dampingan')}
    ${syncStrip()}
    <div class="content">
      <div class="summary"><div><b>12</b><span>Rumah</span></div><div><b class="warn">2</b><span>Perlu tindakan</span></div><div><b class="good">9</b><span>Normal</span></div></div>
      ${houses.map(([n, m, [lv, st], t], i) => `<div class="card house-card" ${i === 0 ? 'data-go="saluran" style="cursor:pointer"' : ''}>
        <span class="h-ico">${ic('house', 22)}</span>
        <div class="h-main"><div class="h-name">${n}</div><div class="h-meta">${m} · data ${t}</div></div>
        <span class="pill ${lv}">${st}</span></div>`).join('')}
    </div>${navKader()}</div>`;
}

function effChart(eff) {
  const W = 300, H = 150, L = 34, R = 10, T = 12, B = 26;
  const ymin = 0.2, ymax = 0.45;
  const x = i => L + i * (W - L - R) / (eff.length - 1);
  const y = v => T + (ymax - v) / (ymax - ymin) * (H - T - B);
  const pts = eff.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const last = eff[eff.length - 1];
  const below = last < EFF_LIMIT;
  const ticks = [0.2, 0.3, 0.4];
  const labels = ['Mg 1', 'Mg 2', 'Mg 3', 'Mg 4'];
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Efektivitas pemulihan panas empat minggu terakhir">
    ${ticks.map(t => `<line x1="${L}" x2="${W - R}" y1="${y(t)}" y2="${y(t)}" stroke="#eee6da"/><text x="${L - 6}" y="${y(t) + 4}" font-size="10" text-anchor="end" fill="#8a8077">${fmt(t, 2)}</text>`).join('')}
    <line x1="${L}" x2="${W - R}" y1="${y(EFF_LIMIT)}" y2="${y(EFF_LIMIT)}" stroke="#c98a12" stroke-dasharray="4 4" stroke-width="1.5"/>
    <text x="${L + 4}" y="${y(EFF_LIMIT) + 13}" font-size="10" text-anchor="start" fill="#c98a12">batas bersihkan 0,30</text>
    <polyline points="${pts}" fill="none" stroke="${below ? '#d9622b' : '#2f8f5b'}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${eff.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="${i === eff.length - 1 ? 4.5 : 2.5}" fill="${i === eff.length - 1 ? (below ? '#d9622b' : '#2f8f5b') : '#fff'}" stroke="${below ? '#d9622b' : '#2f8f5b'}" stroke-width="1.5"/>`).join('')}
    ${labels.map((l, i) => `<text x="${x(i * 2 + 1)}" y="${H - 6}" font-size="10" text-anchor="middle" fill="#8a8077">${l}</text>`).join('')}
  </svg>`;
}

function scrSaluran() {
  const sc = S();
  const eff = sc.eff;
  const last = eff[eff.length - 1];
  const below = last < EFF_LIMIT;
  const t2low = state.scenario === 't2';
  let call;
  if (below) call = `<div class="callout warn">${ic('alert', 20)}<div><b>Saluran perlu dibersihkan</b>Efektivitas turun dari 0,39 ke ${fmt(last, 2)} dalam 4 minggu. Kemungkinan jelaga menebal di pipa dalam.</div></div>`;
  else if (t2low) call = `<div class="callout cool">${ic('valve', 20)}<div><b>Mode lindungi saluran aktif</b>Suhu asap keluar (T2) di bawah batas. Katup udara masuk dipersempit ke ${sc.valve}% agar tar tidak mengendap.</div></div>`;
  else call = `<div class="callout good">${ic('check', 20)}<div><b>Saluran dalam kondisi baik</b>Pembersihan berikutnya diperkirakan sekitar 3 minggu lagi.</div></div>`;
  return `<div class="app">${statusbar()}${appbar('HTS-021 · Keluarga Wenda', 'Kesehatan saluran', 'rumah')}
    <div class="content">
      ${call}
      <div class="card"><h3>Efektivitas pemulihan panas</h3><div class="sub">4 minggu terakhir · (T4 − T3) / (T1 − T3)</div>
        <div class="chart-box">${effChart(eff)}</div></div>
      <div class="card"><h3>Sensor suhu saluran saat ini</h3>
        <div class="kv">
          <div><div class="k">T1 asap masuk</div><div class="v">${sc.T1}°C</div></div>
          <div><div class="k">T2 asap keluar</div><div class="v ${t2low ? 'cool' : ''}">${sc.T2}°C</div></div>
          <div><div class="k">T3 udara luar</div><div class="v">${fmt(sc.T3)}°C</div></div>
          <div><div class="k">T4 udara hangat</div><div class="v">${fmt(sc.T4)}°C</div></div>
        </div>
        <div class="legend"><span><i style="background:var(--ember)"></i>Katup udara masuk ${sc.valve}%</span><span><i style="background:var(--good)"></i>Efektivitas saat ini ${fmt(effNow(sc), 2)}</span></div>
      </div>
      <button class="btn ${below ? 'ember' : 'ghost'}" data-go="pembersihan">${ic('wrench', 18)} Mulai pembersihan</button>
    </div>${navKader()}</div>`;
}

function scrPembersihan() {
  const steps = ['Matikan api dan tunggu saluran dingin', 'Lepas klem dan turunkan segmen pipa dalam', 'Sikat endapan jelaga dan tar, kosongkan perangkap jelaga', 'Pasang kembali segmen dan kencangkan klem', 'Nyalakan uji kipas dan periksa aliran buang'];
  const done = state.cleanDone.filter(Boolean).length;
  return `<div class="app">${statusbar()}${appbar('HTS-021 · Keluarga Wenda', 'Pembersihan saluran', 'saluran')}
    <div class="content">
      <div class="card"><div style="display:flex;justify-content:space-between;font-size:13px"><b>Langkah kerja</b><span>${done} dari ${steps.length}</span></div>
        <div class="progress"><i style="width:${done / steps.length * 100}%;background:var(--good)"></i></div>
        ${steps.map((s, i) => `<div class="check ${state.cleanDone[i] ? 'done' : ''}" data-act="step" data-i="${i}" style="cursor:pointer"><span class="box">${state.cleanDone[i] ? ic('check', 14) : ''}</span><span>${s}</span></div>`).join('')}
      </div>
      <div class="card"><h3>Foto bukti</h3><div class="photos">
        <div class="photo filled">${ic('camera', 20)}<br>Sebelum<br><small>tersimpan</small></div>
        <div class="photo">${ic('camera', 20)}<br>Sesudah<br><small>ketuk untuk ambil</small></div></div></div>
      <button class="btn primary" data-act="saveclean">${ic('check', 18)} Simpan pembersihan</button>
    </div>${navKader()}<div class="toast" id="toast"></div></div>`;
}

function denah() {
  return `<svg viewBox="0 0 260 200" width="100%" role="img" aria-label="Denah Honai dengan posisi komponen">
    <circle cx="130" cy="100" r="86" fill="#f6efe4" stroke="#8a6a3f" stroke-width="3"/>
    <rect x="122" y="182" width="16" height="10" fill="#faf7f2" stroke="#8a6a3f"/>
    <text x="130" y="198" font-size="9" text-anchor="middle" fill="#8a8077">pintu</text>
    <circle cx="130" cy="100" r="16" fill="#fbe7dc" stroke="#d9622b" stroke-width="2"/>
    <text x="130" y="104" font-size="10" text-anchor="middle" fill="#d9622b">api</text>
    <circle cx="130" cy="100" r="26" fill="none" stroke="#5b524a" stroke-dasharray="3 3"/>
    <text x="130" y="68" font-size="9" text-anchor="middle" fill="#5b524a">tudung + saluran</text>
    <circle cx="70" cy="70" r="7" fill="#2f6f9f"/><text x="70" y="58" font-size="9" text-anchor="middle" fill="#2f6f9f">sensor</text>
    <circle cx="186" cy="138" r="7" fill="#c23a2b"/><text x="186" y="157" font-size="9" text-anchor="middle" fill="#c23a2b">alarm CO</text>
    <rect x="58" y="124" width="44" height="22" rx="4" fill="#efe8de"/><text x="80" y="139" font-size="9" text-anchor="middle" fill="#5b524a">tidur</text>
    <rect x="170" y="112" width="44" height="22" rx="4" fill="none"/>
    <rect x="198" y="58" width="12" height="16" rx="2" fill="#1f1a16"/><text x="204" y="50" font-size="9" text-anchor="middle" fill="#1f1a16">kontrol</text>
  </svg>`;
}

function scrPasang() {
  const items = [['Jarak bebas saluran dari jerami atap', true], ['Pelat pelindung titik tembus atap terpasang', true], ['Lubang udara masuk tidak tertutup', true], ['Unit sensor setinggi kepala orang duduk', true], ['Alarm CO berbunyi saat tombol tes ditekan', false]];
  return `<div class="app">${statusbar()}${appbar('Mode kader', 'Profil pemasangan', 'rumah')}
    <div class="content">
      <div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><div><b>HTS-021 · Keluarga Wenda</b><div class="sub">Kampung Wesaput · dipasang 12 Sep 2026</div></div><span class="pill cool">Konfig v1.3</span></div>
        <div style="margin-top:8px">${denah()}</div>
        <div class="legend"><span><i style="background:var(--cool)"></i>Sensor area</span><span><i style="background:var(--bad)"></i>Alarm CO</span><span><i style="background:var(--ember)"></i>Perapian</span></div>
      </div>
      <div class="card"><h3>Pemeriksaan awal</h3>
        ${items.map(([t, d]) => `<div class="check ${d ? 'done' : ''}"><span class="box">${d ? ic('check', 14) : ''}</span><span>${t}</span></div>`).join('')}
      </div>
      <div class="card"><div style="display:flex;align-items:center;gap:10px"><span class="ico cool">${ic('bt', 18)}</span><div style="flex:1"><b style="font-size:13.5px">Kirim konfigurasi ke perangkat</b><div class="sub" id="btText">${state.sent ? 'Konfigurasi v1.3 diterima perangkat' : 'Dekatkan ponsel ke kotak kontrol'}</div></div></div>
        <div class="progress"><i id="btBar" style="width:${state.sent ? 100 : 0}%"></i></div></div>
      <button class="btn primary" data-act="send">${ic('bt', 18)} Kirim ke perangkat (Bluetooth)</button>
    </div>${navKader()}<div class="toast" id="toast"></div></div>`;
}

function scrPerawatan() {
  return `<div class="app">${statusbar()}${appbar('HTS-021 · Keluarga Wenda', 'Catatan perawatan')}
    <div class="content">
      <div class="card" style="padding:4px 14px">
        ${state.logs.map(l => `<div class="row-item"><span class="ico ember">${ic('wrench', 17)}</span><div><div class="t">${l.type}</div><div class="d">${l.who} · ${l.res}</div></div><span class="time">${l.date}</span></div>`).join('')}
      </div>
      <button class="btn primary" data-go="tambah">${ic('plus', 18)} Tambah catatan</button>
    </div>${navKader()}</div>`;
}

function scrTambah() {
  const types = ['Bersihkan pipa dalam', 'Ganti sensor', 'Cek alarm CO', 'Ganti saringan kasa', 'Cek panel surya'];
  return `<div class="app">${statusbar()}${appbar('HTS-021 · Keluarga Wenda', 'Catatan baru', 'perawatan')}
    <div class="content">
      <div class="card">
        <div class="field"><label>Jenis pekerjaan</label><div class="chips">${types.map(t => `<button class="chip ${state.newLog.type === t ? 'on' : ''}" data-act="pick" data-t="${t}">${t}</button>`).join('')}</div></div>
        <div class="field"><label>Kader</label><div class="input">Yonas Wenda</div></div>
        <div class="field"><label>Hasil pemeriksaan ulang</label><div class="input">Aliran buang normal, efektivitas 0,38</div></div>
        <div class="field"><label>Foto</label><div class="photos"><div class="photo">${ic('camera', 20)}<br>Tambah foto</div></div></div>
      </div>
      <button class="btn primary" data-act="savelog">${ic('check', 18)} Simpan catatan</button>
    </div>${navKader()}<div class="toast" id="toast"></div></div>`;
}

function scrSinkron() {
  const on = state.online;
  return `<div class="app">${statusbar()}${appbar('Mode kader', 'Status sinkronisasi')}
    <div class="content">
      <div class="callout ${on ? 'good' : 'warn'}">${ic(on ? 'check' : 'cloud', 20)}<div><b>${on ? 'Semua data terkirim' : 'Menunggu sinyal'}</b>${on ? 'Data 12 rumah sudah tersimpan di server program.' : 'Data tetap aman di ponsel dan akan dikirim otomatis saat ada sinyal.'}</div></div>
      <div class="card" style="padding:4px 14px">
        <div class="row-item"><span class="ico cool">${ic('bt', 17)}</span><div><div class="t">Diambil lewat Bluetooth</div><div class="d">Log 4 rumah dari kunjungan hari ini</div></div><span class="time">14.20</span></div>
        <div class="row-item"><span class="ico ${on ? 'good' : 'warn'}">${ic('sync', 17)}</span><div><div class="t">${on ? 'Terkirim ke server' : 'Antrean pengiriman'}</div><div class="d">${on ? '1.284 catatan sensor, 3 catatan perawatan' : '1.284 catatan sensor, 3 catatan perawatan menunggu'}</div></div><span class="time">${on ? '19.40' : '-'}</span></div>
        <div class="row-item"><span class="ico good">${ic('check', 17)}</span><div><div class="t">Konfigurasi perangkat</div><div class="d">Semua perangkat memakai konfigurasi yang disetujui</div></div><span class="time">kemarin</span></div>
      </div>
      <div class="card"><h3>Data yang dikirim</h3><div class="d" style="font-size:13px;color:var(--ink-2);line-height:1.5">ID perangkat, pembacaan sensor, dan catatan perawatan. Aplikasi tidak menyimpan data kesehatan penghuni.</div></div>
    </div>${navKader()}</div>`;
}

const SCREENS = {
  beranda: scrBeranda, alarm: scrAlarm, riwayat: scrRiwayat, bantuan: scrBantuan,
  rumah: scrRumah, saluran: scrSaluran, pembersihan: scrPembersihan, pasang: scrPasang,
  perawatan: scrPerawatan, tambah: scrTambah, sinkron: scrSinkron,
};

// ---------- render & interaksi ----------
const phone = document.getElementById('phone');
function render() {
  if (state.role === 'penghuni' && state.scenario === 'co' && state.screen === 'beranda') state.screen = 'alarm';
  phone.innerHTML = SCREENS[state.screen]();
  document.querySelectorAll('#roleSeg button').forEach(b => b.classList.toggle('active', b.dataset.role === state.role));
  document.querySelectorAll('#scenarioBtns button').forEach(b => b.classList.toggle('active', b.dataset.s === state.scenario));
}
function toast(msg) {
  const t = phone.querySelector('#toast'); if (!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200);
}

phone.addEventListener('click', e => {
  const go = e.target.closest('[data-go]');
  if (go) { state.screen = go.dataset.go; render(); return; }
  const act = e.target.closest('[data-act]'); if (!act) return;
  const a = act.dataset.act;
  if (a === 'boost') { state.boostUntil = Date.now() + 15 * 60e3; render(); toast('Kipas maksimal selama 15 menit'); }
  if (a === 'safe') { state.scenario = 'normal'; state.screen = 'beranda'; render(); }
  if (a === 'callkader') toast('Menghubungi kader Yonas Wenda...');
  if (a === 'step') { const i = +act.dataset.i; state.cleanDone[i] = !state.cleanDone[i]; render(); }
  if (a === 'saveclean') {
    if (state.cleanDone.every(Boolean)) {
      state.logs.unshift({ date: '29 Okt 2026', type: 'Bersihkan pipa dalam', who: 'Yonas W.', res: 'Efektivitas kembali 0,39' });
      if (state.scenario === 'kotor') state.scenario = 'normal';
      state.screen = 'perawatan'; render();
    } else toast('Selesaikan semua langkah terlebih dahulu');
  }
  if (a === 'send') {
    const bar = phone.querySelector('#btBar'), txt = phone.querySelector('#btText');
    let p = 0; txt.textContent = 'Menghubungkan ke HTS-021...';
    const iv = setInterval(() => {
      p += 20; bar.style.width = p + '%';
      if (p >= 100) { clearInterval(iv); state.sent = true; txt.textContent = 'Konfigurasi v1.3 diterima perangkat'; toast('Konfigurasi terkirim dan tercatat'); }
    }, 300);
  }
  if (a === 'pick') { state.newLog.type = act.dataset.t; render(); }
  if (a === 'savelog') {
    state.logs.unshift({ date: '29 Okt 2026', type: state.newLog.type, who: 'Yonas W.', res: 'Aliran buang normal' });
    state.screen = 'perawatan'; render();
  }
});

// panel simulasi
const sb = document.getElementById('scenarioBtns');
sb.innerHTML = Object.entries(SCENARIOS).map(([k, v]) => `<button data-s="${k}"><span class="dot" style="background:${v.color}"></span>${v.label}</button>`).join('');
sb.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  state.scenario = b.dataset.s; state.boostUntil = null;
  if (state.role === 'penghuni') state.screen = 'beranda';
  render();
});
document.getElementById('roleSeg').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  state.role = b.dataset.role;
  state.screen = state.role === 'penghuni' ? 'beranda' : 'rumah';
  render();
});
document.getElementById('onlineToggle').addEventListener('change', e => { state.online = e.target.checked; render(); });

// ---------- galeri ----------
const GALLERY = [
  ['beranda', 'normal', true, 'Gambar 4a / Lampiran 4a', 'Beranda mode penghuni, kondisi normal'],
  ['beranda', 'asap', true, 'Lampiran 4a (variasi)', 'Beranda saat asap meningkat'],
  ['alarm', 'co', true, 'Lampiran 4b', 'Layar peringatan CO'],
  ['saluran', 'kotor', true, 'Gambar 4b / Lampiran 4c', 'Kesehatan saluran, perlu dibersihkan'],
  ['saluran', 't2', true, 'Lampiran 4c (variasi)', 'Mode lindungi saluran dari endapan tar'],
  ['pasang', 'normal', true, 'Gambar 4c / Lampiran 4d', 'Profil pemasangan dan kirim konfigurasi'],
  ['perawatan', 'normal', true, 'Lampiran 4e', 'Catatan perawatan'],
  ['pembersihan', 'kotor', true, 'Lampiran 4e (alur)', 'Langkah pembersihan saluran'],
  ['riwayat', 'normal', false, 'Lampiran 4f', 'Riwayat kejadian, menunggu sinyal'],
  ['rumah', 'normal', true, 'Tambahan', 'Daftar rumah dampingan kader'],
  ['sinkron', 'normal', false, 'Lampiran 4f (variasi)', 'Status sinkronisasi saat tanpa sinyal'],
  ['bantuan', 'normal', true, 'Tambahan', 'Bantuan dan arti warna lampu'],
];
function buildGallery() {
  const g = document.getElementById('galeri');
  const saved = { ...state };
  g.innerHTML = GALLERY.map(([scr, sc, on, tag, cap], i) => {
    state.scenario = sc; state.online = on; state.screen = scr; state.boostUntil = null;
    state.role = ['rumah', 'saluran', 'pembersihan', 'pasang', 'perawatan', 'tambah', 'sinkron'].includes(scr) ? 'kader' : 'penghuni';
    return `<figure id="shot-${i + 1}"><div class="screen-frame">${SCREENS[scr]()}</div><figcaption><b>${tag}</b><br>${cap}</figcaption></figure>`;
  }).join('');
  Object.assign(state, saved);
}

document.querySelectorAll('.view-switch button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.view-switch button').forEach(x => x.classList.toggle('active', x === b));
  const gal = b.dataset.view === 'galeri';
  document.getElementById('galeri').hidden = !gal;
  document.getElementById('interaktif').hidden = gal;
  if (gal) buildGallery();
}));

if (location.hash === '#galeri') document.querySelector('[data-view="galeri"]').click();
render();
