const siteUpdates = [
  { 
    id: 2, 
    date: "25/02/2026", 
    title: "A Magia Sonora & Novidades ✨", 
    desc: "A música ambiente agora flui por toda a escola, com controle no seu perfil.", 
    details: "Nesta atualização, a atmosfera musical agora inicia automaticamente ao entrar no Espelho Sombrio (de acordo com a permissão do seu navegador). Além disso, adicionamos um controle na sua página de perfil para que você possa ligar ou desligar a música quando preferir. As notificações também foram agrupadas para sua melhor leitura!", 
    type: "feature" 
  },
  { 
    id: 1, 
    date: "24/02/2026", 
    title: "Bem-vindos ao Novo TWPlay 🏰", 
    desc: "A plataforma foi reconstruída com encantamentos modernos e diversas novidades.", 
    details: "Várias melhorias foram implementadas na Night Raven College: o player de vídeo foi otimizado, a navegação está mais fluida com o novo seletor de temporadas, novas animações mágicas de dormitórios foram conjuradas na busca e agora você ganha XP e sobe de nível ao assistir seus episódios favoritos. Uma experiência digna de um estudante exemplar!", 
    type: "update" 
  }
];

const seasonData = {
  title: "Heartslabyul",
  episodes: [
    { 
      id: 1, 
      number: "T1.E1", 
      title: "O Despertar", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BZWQ3ODVhMTQtYjI5YS00N2JmLWI2MDgtOGUxN2Y4ZjgwMWI3XkEyXkFqcGc@._V1_QL75_UX386_.jpg", 
      videoUrl: "https://short.icu/zBi5-r9h1" 
    },
    { 
      id: 2, 
      number: "T1.E2", 
      title: "O Ranking do Desprezo", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMDNjOGIxYTktYTkyYS00MDYzLTg0OTEtZjJlMDg0NWM1Njg2XkEyXkFqcGc@._V1_QL75_UX395_.jpg", 
      videoUrl: "https://short.icu/I56uGOPGxT" 
    },
    { 
      id: 3, 
      number: "T1.E3", 
      title: "A Mina Encantada", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMDNjMTIwZTYtZGY2Zi00MjUwLTk2NmYtMTU2OTEyOTA0MWI4XkEyXkFqcGc@._V1_QL75_UX387_.jpg", 
      videoUrl: "https://short.icu/c2OfvrKVY" 
    },
    { 
      id: 4, 
      number: "T1.E4", 
      title: "Coração em Desespero", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMTI3ZTFhNWEtMDJlZi00NzBkLThjMjAtMTgzY2VjYTIzZTc4XkEyXkFqcGc@._V1_QL75_UX389_.jpg", 
      videoUrl: "https://short.icu/OnDbFnbkg" 
    },
    { 
      id: 5, 
      number: "T1.E5", 
      title: "Um Papo a Mesa", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BN2M1ODQ2NDItMTQyZi00YzIzLTg4NWEtMDc3ZDQ4YzJkOTA2XkEyXkFqcGc@._V1_QL75_UX387_.jpg", 
      videoUrl: "https://short.icu/IMEtCofON" 
    },
    { 
      id: 6, 
      number: "T1.E6", 
      title: "Exército de Um Só", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMjkyMzIzNTQtNTA3YS00MjQ1LTlhZGItYTMyYjU3NGFhYmQxXkEyXkFqcGc@._V1_QL75_UX383_.jpg", 
      videoUrl: "https://short.icu/SbExIoEV6" 
    },
    { 
      id: 7, 
      number: "T1.E7", 
      title: "Um Duelo Imprudente", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BYTQxN2E2ZWMtMjRkYS00MmQzLTgxZWQtNDkzNTI0NjY3NDA3XkEyXkFqcGc@._V1_QL75_UX388_.jpg", 
      videoUrl: "https://short.icu/BlDUzW7g-" 
    },
    { 
      id: 8, 
      number: "T1.E8", 
      title: "Um Fim para Heartslabyul", 
      thumbnail: "https://up.yimg.com/ib/th/id/OVP.FWQbs-FLK3sPsceHHAU4HgHgFo?pid=Api&w=296&h=156&c=7&p=0&rs=1&qlt=95", 
      videoUrl: "https://short.icu/2RSW9kuYA" 
    }
  ]
};

const dormitories = [
  { id: 'ramshackle', name: 'Ramshackle', color: '#8b5cf6', hover: '#7c3aed', icon: 'fa-solid fa-ghost', image: 'https://64.media.tumblr.com/c3c8b091b13e35c444fb78ba2fc09e7d/e352c3e4b5786b48-1a/s640x960/fbcffe666df79887a5c25f5c70b55dc042282e91.pnj' },
  { id: 'heartslabyul', name: 'Heartslabyul', color: '#ff2424', hover: '#cc0000', icon: 'fa-solid fa-heart', image: 'https://twistedwonderland.wiki.gg/images/Heartslabyul.png' },
  { id: 'savannaclaw', name: 'Savannaclaw', color: '#eab308', hover: '#ca8a04', icon: 'fa-solid fa-paw', image: 'https://twistedwonderland.wiki.gg/images/Savanaclaw.png' },
  { id: 'octavinelle', name: 'Octavinelle', color: '#818cf8', hover: '#6366f1', icon: 'fa-brands fa-octopus-deploy', image: 'https://twistedwonderland.wiki.gg/images/Octavinelle.png' },
  { id: 'scarabia', name: 'Scarabia', color: '#7a1111', hover: '#4a0505', icon: 'fa-solid fa-staff-snake', image: 'https://twistedwonderland.wiki.gg/images/Scarabia.png' },
  { id: 'pomefiore', name: 'Pomefiore', color: '#9333ea', hover: '#7e22ce', icon: 'fa-solid fa-apple-whole', image: 'https://twistedwonderland.wiki.gg/images/Pomefiore.png' },
  { id: 'ignihyde', name: 'Ignihyde', color: '#06b6d4', hover: '#0891b2', icon: 'fa-solid fa-fire', image: 'https://twistedwonderland.wiki.gg/images/Ignihyde.png' },
  { id: 'diasomnia', name: 'Diasomnia', color: '#22c55e', hover: '#16a34a', icon: 'fa-solid fa-dragon', image: 'https://twistedwonderland.wiki.gg/images/Diasomnia.png' },
  { id: 'nrc_staff', name: 'Equipe NRC', color: '#ffffff', hover: '#d4d4d8', icon: 'fa-solid fa-crow', image: 'https://twistedwonderland.wiki.gg/images/thumb/Night_Raven_College.png/200px-Night_Raven_College.png' }
];

const charactersData = {
  ramshackle: [
    { id: 'yuu', name: 'Yuu', img: 'https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2025/10/twisted-2.webp' },
    { id: 'grim', name: 'Grim', img:'https://twistedwonderland.wiki.gg/images/Icon_Grim_SR_Striped_Ribbon.png' }
  ],
  heartslabyul: [
    { id: 'riddle', name: 'Riddle', img: 'https://twistedwonderland.wiki.gg/images/Riddle_icon.png' },
    { id: 'trey', name: 'Trey', img: 'https://twistedwonderland.wiki.gg/images/Trey_icon.png' },
    { id: 'cater', name: 'Cater', img: 'https://twistedwonderland.wiki.gg/images/Cater_icon.png' },
    { id: 'ace', name: 'Ace', img: 'https://twistedwonderland.wiki.gg/images/Ace_icon.png' },
    { id: 'deuce', name: 'Deuce', img: 'https://twistedwonderland.wiki.gg/images/Deuce_icon.png' }
  ],
  savannaclaw: [
    { id: 'leona', name: 'Leona', img: 'https://twistedwonderland.wiki.gg/images/Icon_Leona_R_School_Uniform.png' },
    { id: 'jack', name: 'Jack', img: 'https://twistedwonderland.wiki.gg/images/Icon_Jack_R_School_Uniform.png' },
    { id: 'ruggie', name: 'Ruggie', img: 'https://twistedwonderland.wiki.gg/images/Icon_Ruggie_R_School_Uniform.png' }
  ],
  octavinelle: [
    { id: 'azul', name: 'Azul', img: 'https://twistedwonderland.wiki.gg/images/Icon_Azul_R_School_Uniform.png' },
    { id: 'jade', name: 'Jade', img: 'https://twistedwonderland.wiki.gg/images/Icon_Jade_R_School_Uniform.png' },
    { id: 'floyd', name: 'Floyd', img: 'https://twistedwonderland.wiki.gg/images/Icon_Floyd_R_School_Uniform.png' }
  ],
  scarabia: [
    { id: 'kalim', name: 'Kalim', img: 'https://twistedwonderland.wiki.gg/images/Icon_Kalim_R_School_Uniform.png' },
    { id: 'jamil', name: 'Jamil', img: 'https://twistedwonderland.wiki.gg/images/Icon_Jamil_R_School_Uniform.png' }
  ],
  pomefiore: [
    { id: 'vil', name: 'Vil', img: 'https://twistedwonderland.wiki.gg/images/Icon_Vil_R_School_Uniform.png' },
    { id: 'rook', name: 'Rook', img: 'https://twistedwonderland.wiki.gg/images/Icon_Rook_R_School_Uniform.png' },
    { id: 'epel', name: 'Epel', img: 'https://twistedwonderland.wiki.gg/images/Icon_Epel_R_School_Uniform.png' }
  ],
  ignihyde: [
    { id: 'idia', name: 'Idia', img: 'https://twistedwonderland.wiki.gg/images/Icon_Idia_R_School_Uniform.png' },
    { id: 'ortho', name: 'Ortho', img: 'https://twistedwonderland.wiki.gg/images/Icon_Ortho_R_Archetype_Gear.png' }
  ],
  diasomnia: [
    { id: 'malleus', name: 'Malleus', img: 'https://twistedwonderland.wiki.gg/images/Icon_Malleus_R_School_Uniform.png' },
    { id: 'lilia', name: 'Lilia', img: 'https://twistedwonderland.wiki.gg/images/Icon_Lilia_R_School_Uniform.png' },
    { id: 'silver', name: 'Silver', img: 'https://twistedwonderland.wiki.gg/images/Icon_Silver_R_School_Uniform.png' },
    { id: 'sebek', name: 'Sebek', img: 'https://twistedwonderland.wiki.gg/images/Icon_Sebek_R_School_Uniform.png' }
  ],
  nrc_staff: [
    { id: 'crowley', name: 'Diretor Crowley', img: 'https://twistedwonderland.wiki.gg/images/Icon_Crowley_SSR_Raven_Jacket.png' },
    { id: 'trein', name: 'Prof. Trein', img: 'https://twistedwonderland.wiki.gg/images/Icon_Trein_SSR_Strict_Suit.png' },
    { id: 'crewel', name: 'Prof. Crewel', img: 'https://twistedwonderland.wiki.gg/images/Icon_Crewel_SSR_Rich_Fur_Coat.png' },
    { id: 'vargas', name: 'Prof. Vargas', img: 'https://twistedwonderland.wiki.gg/images/Icon_Vargas_SSR_Handsome_Jersey.png' },
    { id: 'sam', name: 'Sam', img: 'https://twistedwonderland.wiki.gg/images/thumb/College_chara_sam%402x.png/800px-College_chara_sam%402x.png' }
  ]
};

// ==========================================
// 2. ESTADO GLOBAL (STORE) E UTILITÁRIOS
// ==========================================
const store = {
  currentUser: null,
  favorites: [],
  settings: { musicEnabled: true, themeMode: 'dark' },
  selectedDormId: 'ramshackle',
  selectedCharacterImg: '',

  async load() {
    try {
      const stored = localStorage.getItem('twplay_user');
      if (stored) {
        this.currentUser = JSON.parse(stored);
        if (typeof this.currentUser.xp === 'undefined') this.currentUser.xp = 0;
        const dorm = dormitories.find(d => d.id === this.currentUser.dormitory) || dormitories[0];
        applyTheme(dorm);
      } else {
        applyTheme(dormitories[0]);
      }

      const storedFavs = localStorage.getItem('twplay_favorites');
      if (storedFavs) this.favorites = JSON.parse(storedFavs);

      const storedSettings = localStorage.getItem('twplay_settings');
      if (storedSettings) this.settings = { ...this.settings, ...JSON.parse(storedSettings) };

      applyThemeMode();
    } catch (e) {
      console.error(e);
    }
  },

  saveUser() {
    try { localStorage.setItem('twplay_user', JSON.stringify(this.currentUser)); } catch (e) {}
    updateUserUI();
  },

  saveFavorites() {
    try { localStorage.setItem('twplay_favorites', JSON.stringify(this.favorites)); } catch (e) {}
    window.dispatchEvent(new CustomEvent('favoritesUpdated'));
  },

  saveSettings() {
    try { localStorage.setItem('twplay_settings', JSON.stringify(this.settings)); } catch (e) {}
  },

  addXP(amount) {
    if (!this.currentUser) return;
    const currentLevel = Math.floor(this.currentUser.xp / 100) + 1;
    this.currentUser.xp = Math.max(0, this.currentUser.xp + amount);
    const newLevel = Math.floor(this.currentUser.xp / 100) + 1;
    this.saveUser();

    if (newLevel > currentLevel) {
      showToast(`Subiu de Nível! Nível Mágico ${newLevel} alcançado! ✨`, 'fa-solid fa-wand-magic-sparkles', 'text-yellow-400');
    }
    updateProfileStatsUI();
  },
  
  toggleFavorite(id) {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(f => f !== id);
      this.addXP(-5);
    } else {
      this.favorites.push(id);
      this.addXP(5);
    }
    this.saveFavorites();
  }
};

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return `${(bigint >> 16) & 255} ${(bigint >> 8) & 255} ${bigint & 255}`;
}

function applyThemeMode() {
  const mode = store.settings.themeMode || 'dark';
  let isLight = false;
  
  if (mode === 'light') isLight = true;
  else if (mode === 'auto') {
    isLight = !window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  if (isLight) document.documentElement.classList.add('theme-light');
  else document.documentElement.classList.remove('theme-light');
  
  updateThemeUI();
}

function updateThemeUI() {
  const mode = store.settings.themeMode || 'dark';
  const btns = document.querySelectorAll('.theme-btn');
  
  btns.forEach(btn => {
    if (btn.dataset.mode === mode) {
      btn.style.backgroundColor = 'rgba(var(--color-primary), 0.2)';
      btn.style.borderColor = 'rgb(var(--color-primary))';
      btn.style.color = 'rgb(var(--color-primary))';
    } else {
      btn.style.backgroundColor = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }
  });
}

function applyTheme(dorm) {
  document.documentElement.style.setProperty('--color-primary', hexToRgb(dorm.color));
  document.documentElement.style.setProperty('--color-primary-hover', hexToRgb(dorm.hover));
  document.documentElement.style.setProperty('--color-on-primary', dorm.id === 'nrc_staff' ? '0 0 0' : '255 255 255');
  
  const navIcon = document.getElementById('navDormIcon');
  if (navIcon) {
    navIcon.src = dorm.image;
    navIcon.className = `w-7 h-7 md:w-9 md:h-9 ml-1 cursor-pointer transition-all duration-500 hover:scale-125 hover:-rotate-12 active:scale-90 drop-shadow-[0_0_8px_rgba(var(--color-primary),0.6)]`;
    navIcon.classList.remove('hidden');
  }
}

function showToast(message, icon = 'fa-solid fa-info-circle', iconColor = 'text-current') {
  const oldToast = document.getElementById('comingSoonToast');
  if (oldToast) oldToast.remove();

  const toast = document.createElement('div');
  toast.id = 'comingSoonToast';
  toast.className = 'fixed bottom-6 right-6 bg-primary text-onPrimary px-4 py-3 rounded shadow-xl transform transition-all translate-y-10 opacity-0 z-[9999] flex items-center gap-3 font-medium text-sm border border-white/10';
  
  let iconHtml = `<i class="${icon} ${iconColor}"></i>`;
  if (icon && icon.startsWith('http')) {
    iconHtml = `<img src="${icon}" class="w-5 h-5 object-contain">`;
  }
  
  toast.innerHTML = `${iconHtml} <span>${message}</span>`;
  document.body.appendChild(toast);
  
  requestAnimationFrame(() => toast.classList.remove('translate-y-10', 'opacity-0'));
  
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function updateUserUI() {
  const btn = document.getElementById('userBtn');
  if (!btn) return;

  if (store.currentUser) {
    btn.innerHTML = `<img src="${store.currentUser.avatar}" class="w-full h-full rounded-full object-cover">`;
    btn.classList.add('border-primary');
    btn.classList.remove('border-transparent');
  } else {
    btn.innerHTML = `<i class="fa-solid fa-user text-xs"></i>`;
    btn.classList.remove('border-primary');
    btn.classList.add('border-transparent');
  }
}

function updateProfileStatsUI() {
  if (!store.currentUser) return;

  const favEl = document.getElementById('profilePageFavCount');
  if (favEl) favEl.innerText = store.favorites.length;
  
  const level = Math.floor(store.currentUser.xp / 100) + 1;
  const currentLevelXp = store.currentUser.xp % 100;
  
  const levelEl = document.getElementById('profilePageLevelCount');
  if (levelEl) levelEl.innerText = level;
  
  const xpEl = document.getElementById('profilePageXpCount');
  if (xpEl) xpEl.innerText = store.currentUser.xp;
  
  const nextXpEl = document.getElementById('profilePageNextLevelXp');
  if (nextXpEl) nextXpEl.innerText = (level * 100);
  
  const xpBar = document.getElementById('profilePageXpBar');
  if (xpBar) xpBar.style.width = `${currentLevelXp}%`;
}

function renderDormSelector(containerId, currentSelectedId, onSelectCallback) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  dormitories.forEach(dorm => {
    const isSelected = dorm.id === currentSelectedId;
    const borderClass = isSelected ? 'border-primary' : 'border-white/10 hover:border-white/30';
    const bgClass = isSelected ? 'bg-primary/20' : 'bg-[#202024] hover:bg-[#2a2a2e]';
    const scaleClass = isSelected ? 'scale-105 shadow-lg shadow-[rgba(var(--color-primary),0.3)]' : 'scale-100 shadow-none';
    
    const btn = document.createElement('button');
    btn.className = `flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-300 ${borderClass} ${bgClass} ${scaleClass}`;
    btn.onclick = () => onSelectCallback(dorm);
    btn.innerHTML = `
      <img src="${dorm.image}" class="w-10 h-10 md:w-12 md:h-12 mb-1.5 object-contain drop-shadow-[0_0_5px_rgba(var(--color-primary),0.8)]">
      <span class="text-[9px] sm:text-[10px] font-bold text-gray-300 uppercase tracking-wider truncate w-full text-center">${dorm.name}</span>
    `;
    container.appendChild(btn);
  });
}

function renderAvatarSelector(containerId, dormId, currentSelectedAvatarUrl, onSelectCallback) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const chars = charactersData[dormId] || charactersData['ramshackle'];
  
  chars.forEach(char => {
    const isSelected = char.img === currentSelectedAvatarUrl || (char.img === '' && currentSelectedAvatarUrl === '');
    const borderClass = isSelected ? 'border-primary shadow-[0_0_15px_rgba(var(--color-primary),0.8)]' : 'border-transparent hover:border-white/30';
    const scaleClass = isSelected ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100';
    
    const btn = document.createElement('button');
    btn.className = `w-20 md:w-24 flex-none flex flex-col items-center gap-1.5 transition-all duration-300 snap-center cursor-pointer p-1`;
    btn.onclick = () => onSelectCallback(char);
    
    const imgHtml = char.img 
      ? `<img src="${char.img}" class="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-[3px] ${borderClass} ${scaleClass} bg-black">` 
      : `<div class="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-[3px] ${borderClass} ${scaleClass} bg-[#202024] text-white"><i class="fa-solid fa-user-pen"></i></div>`;
    
    btn.innerHTML = `
      ${imgHtml}
      <span class="text-[9px] md:text-[10px] font-semibold text-gray-300 uppercase tracking-wide truncate w-full text-center px-1 ${isSelected ? 'text-white' : ''}">${char.name}</span>
    `;
    container.appendChild(btn);
  });
}

function renderNotifications() {
  const list = document.getElementById('notificationsList');
  if (!list) return;

  const lastSeenId = parseInt(localStorage.getItem('twplay_last_notif') || '0');
  
  if (siteUpdates.length === 0) {
    list.innerHTML = '<p class="text-center text-textMuted py-4">Nenhuma novidade no momento.</p>';
    return;
  }

  let html = '<div class="relative border-l-2 border-white/5 ml-3 space-y-5 pb-2 mt-2">';
  
  siteUpdates.forEach(update => {
    const isNew = update.id > lastSeenId;
    const icon = update.type === 'feature' ? 'fa-wand-magic-sparkles text-yellow-400' : 'fa-wrench text-blue-400';
    const dotColor = isNew ? 'bg-primary shadow-[0_0_8px_rgba(var(--color-primary),0.8)]' : 'bg-gray-600';
    
    html += `
      <div class="relative pl-6">
        <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${dotColor} border-2 border-[#18181b] z-10"></div>
        <div class="bg-[#202024] p-3.5 rounded-lg border relative transition-all duration-300 ${isNew ? 'border-primary/40 bg-gradient-to-r from-primary/10 to-[#202024]' : 'border-white/5'}">
          ${isNew ? '<span class="absolute -top-2.5 -right-2 bg-primary text-onPrimary text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">NOVO</span>' : ''}
          
          <div class="flex items-center gap-2 mb-1.5">
            <i class="fa-solid ${icon} text-sm"></i>
            <h4 class="text-gray-100 font-bold text-sm leading-tight">${update.title}</h4>
          </div>
          
          <p class="text-xs text-gray-400 mb-2 leading-relaxed">${update.desc}</p>
          
          <div id="notif-details-${update.id}" class="hidden text-xs text-gray-300 mt-2 p-2.5 bg-black/40 rounded border border-white/5 mb-3">
            ${update.details}
          </div>
          
          <div class="flex items-center justify-between mt-3">
            <span class="text-[9px] text-gray-500 font-bold uppercase tracking-wider bg-black/40 px-2 py-1 rounded-md border border-white/5">
              <i class="fa-regular fa-calendar mr-1"></i>${update.date}
            </span>
            <button onclick="toggleNotifDetails(${update.id})" id="btn-notif-${update.id}" class="text-[10px] text-primary font-bold uppercase tracking-wider">
              Saiba mais <i class="fa-solid fa-chevron-down ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  list.innerHTML = html;
}

function checkUnreadNotifications() {
  const lastSeenId = parseInt(localStorage.getItem('twplay_last_notif') || '0');
  const hasUnread = siteUpdates.some(u => u.id > lastSeenId);
  const badge = document.getElementById('notifBadge');
  if (badge) badge.style.display = hasUnread ? 'block' : 'none';
}

function initModals() {
  window.setThemeMode = function(mode) {
    store.settings.themeMode = mode;
    store.saveSettings();
    applyThemeMode();
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (store.settings.themeMode === 'auto') applyThemeMode();
  });

  window.handleUserClick = function() {
    if (store.currentUser) window.location.hash = '#profile';
    else window.openAuthModal();
  };

  window.openAuthModal = function() {
    store.selectedDormId = store.currentUser ? (store.currentUser.dormitory || 'ramshackle') : 'ramshackle';
    store.selectedCharacterImg = charactersData[store.selectedDormId][0].img;
    
    const updateAuthAvatar = (char) => {
      store.selectedCharacterImg = char.img;
      renderAvatarSelector('avatarSelectionContainer', store.selectedDormId, store.selectedCharacterImg, updateAuthAvatar);
    };
    
    const updateAuthDorm = (dorm) => {
      store.selectedDormId = dorm.id;
      applyTheme(dorm);
      renderDormSelector('dormSelectionContainer', store.selectedDormId, updateAuthDorm);
      store.selectedCharacterImg = charactersData[dorm.id][0].img;
      renderAvatarSelector('avatarSelectionContainer', dorm.id, store.selectedCharacterImg, updateAuthAvatar);
    };
    
    renderDormSelector('dormSelectionContainer', store.selectedDormId, updateAuthDorm);
    renderAvatarSelector('avatarSelectionContainer', store.selectedDormId, store.selectedCharacterImg, updateAuthAvatar);
    applyTheme(dormitories.find(d => d.id === store.selectedDormId) || dormitories[0]);
    
    const modal = document.getElementById('authModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => document.getElementById('authUsername').focus(), 100);
  };

  window.closeAuthModal = function() {
    const modal = document.getElementById('authModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (store.currentUser) {
      applyTheme(dormitories.find(d => d.id === store.currentUser.dormitory) || dormitories[0]);
    } else {
      applyTheme(dormitories[0]);
    }
  };

  window.handleLogin = async function() {
    const input = document.getElementById('authUsername');
    const name = input.value.trim();
    if (!name) return;
    
    const dorm = dormitories.find(d => d.id === store.selectedDormId) || dormitories[0];
    let finalAvatar = store.selectedCharacterImg;
    
    if (!finalAvatar) {
      const seed = encodeURIComponent(name);
      const bgHex = dorm.color.replace('#', '');
      finalAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=${bgHex}&textColor=ffffff`;
    }
    
    store.currentUser = { name, avatar: finalAvatar, dormitory: dorm.id, xp: 0 };
    store.saveUser();
    applyTheme(dorm);
    closeAuthModal();
    input.value = '';
    showToast(`Bem-vindo à Night Raven, ${name}!`, dorm.image);
    window.location.hash = '#profile';
  };

  window.handleLogout = async function() {
    store.currentUser = null;
    try { localStorage.removeItem('twplay_user'); } catch (e) { }
    applyTheme(dormitories[0]);
    updateUserUI();
    window.location.hash = '#home';
    showToast("Você saiu do Espelho Sombrio.", 'fa-solid fa-door-closed');
  };

  window.openTermsModal = function() {
    const modal = document.getElementById('termsModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; 
  };

  window.closeTermsModal = function() {
    const modal = document.getElementById('termsModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (!document.fullscreenElement) document.body.style.overflow = ''; 
  };

  window.openNotificationsModal = function() {
    renderNotifications();
    const modal = document.getElementById('notificationsModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    const maxId = Math.max(...siteUpdates.map(u => u.id));
    localStorage.setItem('twplay_last_notif', maxId);
    
    const badge = document.getElementById('notifBadge');
    if (badge) badge.style.display = 'none';
  };

  window.closeNotificationsModal = function() {
    const modal = document.getElementById('notificationsModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  window.toggleNotifDetails = function(id) {
    const details = document.getElementById(`notif-details-${id}`);
    const btn = document.getElementById(`btn-notif-${id}`);
    if(details.classList.contains('hidden')) {
      details.classList.remove('hidden');
      btn.innerHTML = 'Mostrar menos <i class="fa-solid fa-chevron-up ml-1"></i>';
    } else {
      details.classList.add('hidden');
      btn.innerHTML = 'Saiba mais <i class="fa-solid fa-chevron-down ml-1"></i>';
    }
  };
  
  window.toggleFavoriteCurrent = function() {
    const epId = Number(document.getElementById('watchView').dataset.currentEpisodeId);
    if (epId) store.toggleFavorite(epId);
  };
  
  window.toggleFavorite = function(id, event) {
    if (event) event.stopPropagation();
    store.toggleFavorite(id);
  };

  window.handleSeasonChange = function(selectElement) {
    if (selectElement.value !== "1") {
      showToast(`A Temporada ${selectElement.value} será lançada em breve!`, 'fa-solid fa-lock', 'text-gray-400');
      selectElement.value = "1";
    }
  };

  window.goHome = () => { window.location.hash = '#home'; };
  window.showNews = () => { window.location.hash = '#news'; };
  window.playFeatured = () => { window.location.hash = '#watch/1'; };
  window.playVideo = (ep) => { window.location.hash = `#watch/${ep.id}`; };
}

// ==========================================
// 3. NAVEGAÇÃO, AÚDIO E INICIALIZAÇÃO (PAGES)
// ==========================================
const GLOBAL_AUDIO_URL = "https://image2url.com/r2/default/audio/1771990050142-bf323803-226c-48fa-96c4-eb407b7f578a.mp3"; 
let globalAudioPlayer = null;

function playGlobalAudio() {
  if (!store.settings.musicEnabled) return;
  if (!globalAudioPlayer && GLOBAL_AUDIO_URL && GLOBAL_AUDIO_URL.trim() !== "") {
    globalAudioPlayer = new Audio(GLOBAL_AUDIO_URL);
    globalAudioPlayer.loop = true;
    globalAudioPlayer.volume = 0.1;
  }
  if (globalAudioPlayer && globalAudioPlayer.paused) {
    globalAudioPlayer.play().catch(e => console.log('Autoplay bloqueado pelo navegador.'));
  }
}

function stopGlobalAudio() {
  if (globalAudioPlayer && !globalAudioPlayer.paused) {
    globalAudioPlayer.pause();
  }
}

window.toggleMusic = function() {
  store.settings.musicEnabled = !store.settings.musicEnabled;
  store.saveSettings();
  if (store.settings.musicEnabled) {
    const hash = window.location.hash;
    if (!hash.includes('watch')) playGlobalAudio();
  } else {
    stopGlobalAudio();
  }
  updateMusicToggleUI();
};

function updateMusicToggleUI() {
  const btn = document.getElementById('musicToggleBtn');
  const thumb = document.getElementById('musicToggleThumb');
  if (!btn || !thumb) return;
  
  if (store.settings.musicEnabled) {
    btn.classList.remove('bg-[#202024]');
    btn.classList.add('bg-primary');
    thumb.classList.remove('translate-x-1');
    thumb.classList.add('translate-x-6');
  } else {
    btn.classList.remove('bg-primary');
    btn.classList.add('bg-[#202024]');
    thumb.classList.remove('translate-x-6');
    thumb.classList.add('translate-x-1');
  }
}

let isFakeFullscreen = false;
let currentEpisodeIndex = -1;
let isAnimatingDorm = false;

function renderHome() {
  setupSearch();
  const highlights = seasonData.episodes.slice(0, 4);
  renderGrid('homeHighlightsGrid', highlights);
  
  window.removeEventListener('favoritesUpdated', handleFavoritesUpdateGlobal);
  window.addEventListener('favoritesUpdated', handleFavoritesUpdateGlobal);
}

function renderCatalog() {
  setupSearch();
  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  
  const titleEl = document.getElementById('catalogTitle');
  
  let episodesToRender = seasonData.episodes;
  if (query.length > 0) {
    if(titleEl) titleEl.innerHTML = `<i class="fa-solid fa-search text-primary"></i> Resultados para: "${query}"`;
    episodesToRender = seasonData.episodes.filter(ep => 
      ep.title.toLowerCase().includes(query) || ep.number.toLowerCase().includes(query)
    );
  } else {
    if(titleEl) titleEl.innerHTML = `<i class="fa-solid fa-book-journal-whills text-primary"></i> Catálogo Completo`;
  }

  renderGrid('catalogGrid', episodesToRender);
  window.removeEventListener('favoritesUpdated', handleFavoritesUpdateGlobal);
  window.addEventListener('favoritesUpdated', handleFavoritesUpdateGlobal);
}

function renderFavoritesPage() {
  setupSearch();
  const favEps = store.favorites.map(id => seasonData.episodes.find(e => e.id === id)).filter(Boolean);
  renderGrid('favoritesPageGrid', favEps);
  
  window.removeEventListener('favoritesUpdated', handleFavoritesUpdateGlobal);
  window.addEventListener('favoritesUpdated', handleFavoritesUpdateGlobal);
}

function renderNews() {}

function renderProfile() {
  if (!store.currentUser) {
    window.location.hash = '#home';
    return;
  }

  document.getElementById('profilePageAvatar').src = store.currentUser.avatar;
  document.getElementById('profilePageName').innerText = store.currentUser.name;
  updateProfileStatsUI();

  const dorm = dormitories.find(d => d.id === store.currentUser.dormitory) || dormitories[0];
  const profileDorm = document.getElementById('profilePageDorm');
  
  if (profileDorm) {
    profileDorm.innerHTML = `
      <img src="${dorm.image}" class="w-4 h-4 object-contain inline-block mr-1.5 filter drop-shadow-[0_0_5px_rgba(var(--color-primary),0.8)]"> ${dorm.name}
    `;
  }

  const updateProfileAvatar = async (char) => {
    let finalAvatar = char.img;
    if (!finalAvatar) {
      const seed = encodeURIComponent(store.currentUser.name);
      const bgHex = dorm.color.replace('#', '');
      finalAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=${bgHex}&textColor=ffffff`;
    }
    store.currentUser.avatar = finalAvatar;
    document.getElementById('profilePageAvatar').src = store.currentUser.avatar;
    renderAvatarSelector('profilePageAvatarContainer', store.currentUser.dormitory, char.img, updateProfileAvatar);
    store.saveUser();
  };

  const updateProfileDorm = async (newDorm) => {
    store.currentUser.dormitory = newDorm.id;
    applyTheme(newDorm);
    
    document.getElementById('profilePageDorm').innerHTML = `
      <img src="${newDorm.image}" class="w-4 h-4 object-contain inline-block mr-1.5 filter drop-shadow-[0_0_5px_rgba(var(--color-primary),0.8)]"> ${newDorm.name}
    `;
    
    const leaderImg = charactersData[newDorm.id][0].img;
    if (store.currentUser.avatar.includes('dicebear.com')) {
      const seed = encodeURIComponent(store.currentUser.name);
      const bgHex = newDorm.color.replace('#', '');
      store.currentUser.avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=${bgHex}&textColor=ffffff`;
      document.getElementById('profilePageAvatar').src = store.currentUser.avatar;
      renderAvatarSelector('profilePageAvatarContainer', newDorm.id, '', updateProfileAvatar);
    } else {
      store.currentUser.avatar = leaderImg;
      document.getElementById('profilePageAvatar').src = store.currentUser.avatar;
      renderAvatarSelector('profilePageAvatarContainer', newDorm.id, leaderImg, updateProfileAvatar);
    }
    
    renderDormSelector('profilePageDormContainer', store.currentUser.dormitory, updateProfileDorm);
    store.saveUser();
  };

  renderDormSelector('profilePageDormContainer', store.currentUser.dormitory, updateProfileDorm);
  
  let currentImgMatch = store.currentUser.avatar.includes('dicebear.com') ? '' : store.currentUser.avatar;
  renderAvatarSelector('profilePageAvatarContainer', store.currentUser.dormitory, currentImgMatch, updateProfileAvatar);
  
  updateMusicToggleUI();
  updateThemeUI();
}

function renderWatch(episodeId) {
  const episode = seasonData.episodes.find(e => e.id === episodeId);
  if (!episode) {
    window.location.hash = '#home';
    return;
  }

  currentEpisodeIndex = seasonData.episodes.findIndex(e => e.id === episode.id);
  document.getElementById('watchView').dataset.currentEpisodeId = episode.id;

  if (store.currentUser) store.addXP(10);

  const container = document.getElementById('playerContainer');
  let mediaHtml = '';
  
  if (episode.videoUrl.endsWith('.mp4') || episode.videoUrl.endsWith('.mkv')) {
    mediaHtml = `
      <video class="w-full h-full object-contain bg-black outline-none" controls autoplay>
        <source src="${episode.videoUrl}" type="video/mp4">Seu navegador não suporta este vídeo.
      </video>`;
  } else {
    mediaHtml = `
      <iframe class="w-full h-full border-0 absolute inset-0" src="${episode.videoUrl}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    `;
  }

  container.innerHTML = `
    <button id="fakeFullscreenClose" onclick="exitAnyFullscreen()" class="hidden absolute top-4 right-4 z-[10000] bg-black/70 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm border border-white/20">
      <i class="fa-solid fa-compress text-xl"></i>
    </button>
    ${mediaHtml}
  `;

  document.getElementById('watchTitle').innerText = episode.title;
  document.getElementById('watchSub').innerText = episode.number;

  renderSidebar(episode.id);
  updateNavButtons();
  updateFavoriteButtonUI();

  window.removeEventListener('favoritesUpdated', updateFavoriteButtonUI);
  window.addEventListener('favoritesUpdated', updateFavoriteButtonUI);
}

function handleFavoritesUpdateGlobal() {
  const hash = window.location.hash;
  if (hash === '#favorites') renderFavoritesPage();
  else if (hash.startsWith('#catalog')) renderCatalog();
  else if (hash === '#profile') updateProfileStatsUI();
  else if (hash === '#home' || hash === '') renderHome();
}

function createEpisodeCard(ep, index = 0) {
  const card = document.createElement('div');
  card.className = `group cursor-pointer flex flex-col relative w-full animate-card`;
  card.style.animationDelay = `${index * 0.05}s`;
  card.onclick = () => { window.location.hash = `#watch/${ep.id}`; };

  const isFav = store.favorites.includes(ep.id);

  card.innerHTML = `
    <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-black mb-3 shadow-md border border-white/10 group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
      <img src="${ep.thumbnail}" alt="${ep.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity"></div>
      
      <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
        <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-onPrimary shadow-[0_0_15px_rgba(var(--color-primary),0.8)] transform scale-75 group-hover:scale-100 transition-all duration-300">
          <i class="fa-solid fa-play ml-1 text-lg"></i>
        </div>
      </div>
      
      <div class="absolute bottom-2 left-2 bg-black/80 backdrop-blur-sm text-white dark-preserve text-[10px] font-bold px-2 py-1 rounded border border-white/10">${ep.number}</div>
      
      <button onclick="window.toggleFavorite(${ep.id}, event)" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur hover:bg-black/90 flex items-center justify-center text-white dark-preserve transition-all duration-300 border border-white/10 z-10 hover:scale-110" title="Favoritar">
        <i class="${isFav ? 'fa-solid text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'fa-regular'} fa-heart"></i>
      </button>
    </div>
    <h4 class="text-sm font-bold text-gray-200 group-hover:text-primary transition-colors line-clamp-1">${ep.title}</h4>
    <p class="text-xs text-textMuted mt-1 font-medium flex items-center gap-1"><i class="fa-solid fa-microphone-lines text-[10px]"></i> Dublado</p>
  `;
  return card;
}

function renderGrid(containerId, episodesToRender) {
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';

  if (!episodesToRender || episodesToRender.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center text-gray-400 py-16 bg-[#18181b] rounded-xl border border-white/5 shadow-inner">
        <i class="fa-solid fa-ghost text-5xl mb-4 text-primary/40 animate-pulse"></i>
        <p class="font-medium text-lg">Nenhuma magia encontrada aqui.</p>
      </div>`;
    return;
  }
  
  episodesToRender.forEach((ep, index) => container.appendChild(createEpisodeCard(ep, index)));
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput || searchInput.dataset.listener) return;
  searchInput.dataset.listener = 'true';

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const dormMatch = dormitories.find(d => query === d.name.toLowerCase() || query === d.id);
    
    if (dormMatch && !isAnimatingDorm) triggerDormAnimation(dormMatch.id);
    
    if (window.location.hash !== '#catalog' && window.location.hash !== '#catalog/') {
      window.location.hash = '#catalog';
    } else {
      renderCatalog();
    }
  });
}

function triggerDormAnimation(dormId) {
  if (isAnimatingDorm) return;
  isAnimatingDorm = true;
  const dormInfo = dormitories.find(d => d.id === dormId) || dormitories[0];

  const container = document.createElement('div');
  container.className = 'fixed inset-0 z-[100000] pointer-events-none overflow-hidden flex flex-col items-center justify-center transition-opacity duration-700 opacity-0';
  
  let particlesHtml = '';
  for(let i = 0; i < 20; i++) {
    const left = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const size = Math.random() * 4 + 2;
    particlesHtml += `
      <div class="absolute rounded-full animate-particle" 
           style="left: ${left}%; bottom: 10%; width: ${size}px; height: ${size}px; background-color: ${dormInfo.color}; animation-delay: ${delay}s; box-shadow: 0 0 10px ${dormInfo.color}">
      </div>`;
  }

  container.innerHTML = `
    <div class="absolute inset-0 bg-black/85 backdrop-blur-md"></div>
    <div class="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--dorm-color)_0%,_transparent_60%)] mix-blend-screen" style="--dorm-color: ${dormInfo.color}"></div>
    
    ${particlesHtml}

    <div class="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full animate-spin-slow flex items-center justify-center">
      <div class="w-[280px] h-[280px] md:w-[420px] md:h-[420px] border-t-2 border-b-2 rounded-full animate-spin-reverse-fast opacity-50" style="border-color: ${dormInfo.color}"></div>
      <div class="absolute w-[260px] h-[260px] md:w-[390px] md:h-[390px] border-l-2 border-r-2 rounded-full animate-spin-slow opacity-30" style="border-color: ${dormInfo.color}"></div>
    </div>

    <div class="relative z-10 animate-dorm-icon-pro">
      <img src="${dormInfo.image}" class="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(0,0,0,1)]" style="filter: drop-shadow(0 0 30px ${dormInfo.color})">
    </div>

    <h2 class="relative z-10 mt-6 md:mt-10 text-2xl sm:text-3xl md:text-5xl px-6 w-full max-w-[100vw] font-black text-white uppercase text-center break-words animate-dorm-text-pro drop-shadow-[0_0_20px_rgba(0,0,0,1)]" style="font-family: 'Cinzel Decorative', serif; text-shadow: 0 0 30px ${dormInfo.color}">
      ${dormInfo.name}
    </h2>

    <div class="absolute inset-0 bg-white animate-dorm-flash mix-blend-overlay"></div>
  `;

  document.body.appendChild(container);

  requestAnimationFrame(() => {
    container.classList.remove('opacity-0');
    container.classList.add('opacity-100');
  });

  setTimeout(() => {
    container.classList.remove('opacity-100');
    container.classList.add('opacity-0');
    setTimeout(() => {
      container.remove();
      isAnimatingDorm = false;
    }, 700);
  }, 3500);
}

function renderSidebar(currentId) {
  const sidebar = document.getElementById('sidebarList');
  if(!sidebar) return;
  sidebar.innerHTML = '';

  seasonData.episodes.forEach((ep, index) => {
    const isPlaying = ep.id === currentId;
    const div = document.createElement('div');
    div.className = `flex gap-3 p-2 rounded-lg cursor-pointer transition-all animate-card ${isPlaying ? 'bg-primary/20 border border-primary/50 shadow-[inset_0_0_10px_rgba(var(--color-primary),0.2)]' : 'hover:bg-[#202024] border border-transparent hover:border-white/5'}`;
    div.style.animationDelay = `${index * 0.03}s`;
    
    if(!isPlaying) div.onclick = () => { window.location.hash = `#watch/${ep.id}`; };

    div.innerHTML = `
      <div class="relative w-28 flex-none aspect-video rounded overflow-hidden bg-black border border-white/10">
        <img src="${ep.thumbnail}" class="w-full h-full object-cover transition-transform duration-300 ${isPlaying ? 'scale-110 opacity-50' : 'opacity-80 hover:scale-105 hover:opacity-100'}">
        ${isPlaying ? `<div class="absolute inset-0 flex items-center justify-center text-primary text-sm shadow-[0_0_10px_rgba(0,0,0,0.5)]"><i class="fa-solid fa-play animate-pulse"></i></div>` : ''}
      </div>
      <div class="flex-1 min-w-0 flex flex-col justify-center">
        <span class="text-[10px] text-textMuted font-bold mb-1 uppercase tracking-wide">${ep.number}</span>
        <h5 class="text-xs font-bold text-gray-200 line-clamp-2 leading-tight ${isPlaying ? 'text-primary' : 'group-hover:text-white'}">${ep.title}</h5>
      </div>
    `;
    sidebar.appendChild(div);
  });
}

function updateNavButtons() {
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  if(!btnPrev || !btnNext) return;
  
  if (currentEpisodeIndex <= 0) {
    btnPrev.disabled = true;
    btnPrev.onclick = null;
  } else {
    btnPrev.disabled = false;
    btnPrev.onclick = () => { window.location.hash = `#watch/${seasonData.episodes[currentEpisodeIndex - 1].id}`; };
  }

  if (currentEpisodeIndex === -1 || currentEpisodeIndex >= seasonData.episodes.length - 1) {
    btnNext.disabled = true;
    btnNext.onclick = null;
  } else {
    btnNext.disabled = false;
    btnNext.onclick = () => { window.location.hash = `#watch/${seasonData.episodes[currentEpisodeIndex + 1].id}`; };
  }
}

function updateFavoriteButtonUI() {
  if (currentEpisodeIndex === -1) return;
  const currentEpId = seasonData.episodes[currentEpisodeIndex].id;
  const btnFav = document.getElementById('btnFavorite');
  if (!btnFav) return;
  
  const icon = btnFav.querySelector('i');
  if (store.favorites.includes(currentEpId)) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid', 'text-accent', 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]');
    btnFav.classList.add('border-accent');
  } else {
    icon.classList.remove('fa-solid', 'text-accent', 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]');
    icon.classList.add('fa-regular');
    btnFav.classList.remove('border-accent');
  }
}

function exitAnyFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  }
  if (isFakeFullscreen) {
    fakeFullscreenToggle(document.getElementById('playerContainer'));
  }
}

window.exitAnyFullscreen = exitAnyFullscreen;

window.toggleFakeFullscreen = function() {
  const container = document.getElementById('playerContainer');
  const isNativeFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
  if (isNativeFullscreen || isFakeFullscreen) {
    exitAnyFullscreen();
    return;
  }
  if (container.requestFullscreen) container.requestFullscreen().catch(() => fakeFullscreenToggle(container));
  else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
  else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
  else if (container.msRequestFullscreen) container.msRequestFullscreen();
  else fakeFullscreenToggle(container);
};

function fakeFullscreenToggle(container) {
  if (!container) return;
  const closeBtn = document.getElementById('fakeFullscreenClose');
  const desktopNav = document.querySelector('nav');
  const mobileNav = document.querySelector('.md\\:hidden.fixed.bottom-0');
  
  isFakeFullscreen = !isFakeFullscreen;
  
  if (isFakeFullscreen) {
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '999999';
    container.style.borderRadius = '0';
    container.classList.remove('aspect-video', 'relative', 'md:rounded-lg', 'w-full');
    document.body.style.overflow = 'hidden';
    
    if (desktopNav) desktopNav.style.display = 'none';
    if (mobileNav) mobileNav.style.display = 'none';
    if (closeBtn) closeBtn.classList.remove('hidden');
  } else {
    container.style.position = '';
    container.style.top = '';
    container.style.left = '';
    container.style.width = '';
    container.style.height = '';
    container.style.zIndex = '';
    container.style.borderRadius = '';
    container.classList.add('aspect-video', 'relative', 'md:rounded-lg', 'w-full');
    document.body.style.overflow = '';
    
    if (desktopNav) desktopNav.style.display = '';
    if (mobileNav) mobileNav.style.display = '';
    if (closeBtn) closeBtn.classList.add('hidden');
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') exitAnyFullscreen();
});

window.playCurrentDormAnimation = function(event) {
  if (event) event.stopPropagation();
  const dormId = store.currentUser ? store.currentUser.dormitory : store.selectedDormId || 'ramshackle';
  triggerDormAnimation(dormId);
};

async function initApp() {
  try {
    await store.load();
    initModals();
    checkUnreadNotifications();

    const navigate = () => {
      let hash = window.location.hash.slice(1) || 'home';
      let [route, param] = hash.split('/');
      
      const views = ['homeView', 'newsView', 'watchView', 'catalogView', 'favoritesView', 'profileView'];
      
      views.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.classList.add('hidden');
          el.classList.remove('animate-page-enter');
        }
      });

      exitAnyFullscreen();
      window.scrollTo({ top: 0, behavior: 'instant' });

      let activeViewId = 'homeView';
      let baseRoute = 'home';

      if (route === 'news') { activeViewId = 'newsView'; baseRoute = 'news'; }
      else if (route === 'catalog') { activeViewId = 'catalogView'; baseRoute = 'catalog'; }
      else if (route === 'favorites') { activeViewId = 'favoritesView'; baseRoute = 'favorites'; }
      else if (route === 'profile') { activeViewId = 'profileView'; baseRoute = 'profile'; }
      else if (route === 'watch' && param) { activeViewId = 'watchView'; baseRoute = 'watch'; }

      document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${baseRoute}`) {
          link.classList.add('active-link');
        }
      });

      const view = document.getElementById(activeViewId);
      if (view) {
        view.classList.remove('hidden');
        void view.offsetWidth; 
        view.classList.add('animate-page-enter');
      }

      if (route === 'news') renderNews();
      else if (route === 'catalog') renderCatalog();
      else if (route === 'favorites') renderFavoritesPage();
      else if (route === 'profile') renderProfile();
      else if (route === 'watch' && param) {
        renderWatch(Number(param));
        stopGlobalAudio(); 
      } else renderHome();

      if (route !== 'watch') {
        playGlobalAudio();
      }
    };

    window.addEventListener('hashchange', navigate);
    navigate(); 
    
  } catch (e) {
    console.error("Erro na inicialização:", e);
  } finally {
    const splash = document.getElementById('splashScreen');
    if (splash) {
      setTimeout(() => {
        splash.classList.add('opacity-0');
        setTimeout(() => {
          splash.remove();
          document.body.style.overflow = '';
        }, 800); 
      }, 5000); 
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
