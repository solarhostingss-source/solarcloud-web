// ============================================================
// SOLAR CLOUD - script.js
// Bilingual support (EN default), page transitions, modals
// ============================================================

/* ─── TRANSLATIONS ─────────────────────────────────────────── */
const TRANSLATIONS = {
    en: {
        // Navbar
        navHome:       "Home",
        navMinecraft:  "Minecraft",
        navBots:       "Bots & Web",
        navVPS:        "VPS",
        navPrivacy:    "Privacy Policy",
        navRefunds:    "Refund Policy",
        navTerms:      "Terms of Service",
        langBtn:       "🌐 ES",

        // Hero
        heroBadge:     "⚡ High-Performance Hosting",
        heroTitle:     "Power Your Server with <span class='gradient-text'>Solar Cloud</span>",
        heroSub:       "Enterprise-grade hosting for Minecraft servers and Discord bots, starting at <span class='price-highlight'>$2.50/mo</span>. Canada, USA and Colombia locations available.",
        heroBtn1:      "Get Started",
        heroBtn2:      "View Plans",
        statServers:   "Active Servers",
        statUptime:    "Uptime",
        statSupport:   "Support",

        // Features section
        featOverline:  "Why Choose Us",
        featTitle:     "Everything you need, nothing you don't",
        featDesc:      "We built Solar Cloud for game server admins and developers who demand reliability without breaking the bank.",
        f1Title: "Solid Infrastructure",     f1Desc: "We use top-tier data centers in Canada, USA, and Colombia to ensure maximum reliability and zero-downtime experiences.",
        f2Title: "DDoS Protection",          f2Desc: "Enterprise-grade mitigation systems keep your server online even during heavy and unexpected cyber attacks.",
        f3Title: "Instant Deployment",       f3Desc: "Your server is set up and ready to use within seconds of purchase — fully automated, no waiting.",
        f4Title: "Optimized Routing",        f4Desc: "Our network is configured to guarantee the lowest possible latency for players across North America and Latin America.",
        f5Title: "Wallet Friendly",          f5Desc: "Premium quality hosting at prices that make sense. We believe great infrastructure shouldn't cost a fortune.",
        f6Title: "Highly Scalable",          f6Desc: "Start small and upgrade any time. Our plans grow with your community without complicated migrations.",

        // Plan feature list items (translatable)
        liUnlimitedBW:     "Unlimited Bandwidth",
        liDDoS:            "DDoS Protection",
        liInstantSetup:    "Instant Setup",
        liPanel:           "Panel Access (Pterodactyl)",
        liCustomDomain:    "Custom Domain",
        liPrioritySupport: "Priority Support",
        liMultipleBots:    "Multiple Bots",
        li247Uptime:       "24/7 Uptime",
        liWebPanel:        "Web Control Panel",

        // Pricing (MC)
        mcOverline:  "Minecraft Hosting",
        mcTitle:     "Pick your plan",
        mcDesc:      "All plans include full control panel access, instant setup, and our 99.9% uptime guarantee.",
        mcBuyBtn:    "Buy Now",

        // Pricing (Bots)
        botOverline: "Bots & Web Hosting",
        botTitle:    "Always-on Bot Hosting",
        botDesc:     "Keep your Discord bot online 24/7 with our reliable and affordable hosting solutions.",
        botBuyBtn:   "Buy Now",

        // VPS
        vpsOverline:    "VPS Hosting",
        vpsTitle:       "Virtual Private Servers",
        vpsDesc:        "Full root access, dedicated resources, and enterprise-grade hardware. Coming soon.",
        vpsComingBadge: "🚀 Coming Soon",
        vpsComingTitle: "VPS Hosting is on its way",
        vpsComingDesc:  "We're working hard to bring you powerful, affordable Virtual Private Servers. Be the first to know when we launch.",
        vpsBuyBtn:      "Coming Soon",

        // Modal
        modalTitle:   "Choose Your Location",
        modalSub:     "Select the data center closest to your players for the best performance.",
        modalCanada:  "Canada",
        modalCaCity:  "Montréal",
        modalUSA:     "USA",
        modalUSCity:  "New York",
        modalCol:     "Colombia",
        modalCoCity:  "Bogotá",

        // Footer
        footerDesc:     "High-performance hosting for gamers and developers. Powered by Solar Cloud.",
        footerServices: "Services",
        footerLegal:    "Legal",
        footerContact:  "Contact",
        footerCopy:     "© 2025 Solar Cloud. All rights reserved.",

        // Legal pages titles
        privacyTitle:  "Privacy Policy",
        refundTitle:   "Refund Policy",
        termsTitle:    "Terms of Service",
    },

    es: {
        navHome:       "Inicio",
        navMinecraft:  "Minecraft",
        navBots:       "Bots y Web",
        navVPS:        "VPS",
        navPrivacy:    "Privacidad",
        navRefunds:    "Reembolsos",
        navTerms:      "Términos",
        langBtn:       "🌐 EN",

        heroBadge:     "⚡ Hosting de Alto Rendimiento",
        heroTitle:     "Potencia tu Servidor con <span class='gradient-text'>Solar Cloud</span>",
        heroSub:       "Hosting de nivel empresarial para servidores Minecraft y bots de Discord, desde <span class='price-highlight'>$2.50/mes</span>. Ubicaciones en Canadá, EE.UU. y Colombia.",
        heroBtn1:      "Comenzar",
        heroBtn2:      "Ver Planes",
        statServers:   "Servidores Activos",
        statUptime:    "Disponibilidad",
        statSupport:   "Soporte",

        featOverline:  "Por Qué Elegirnos",
        featTitle:     "Todo lo que necesitas, sin complicaciones",
        featDesc:      "Construimos Solar Cloud para admins de servidores y desarrolladores que exigen confiabilidad sin gastar de más.",
        f1Title: "Infraestructura Sólida",    f1Desc: "Usamos centros de datos de primer nivel en Canadá, EE.UU. y Colombia para máxima fiabilidad y cero interrupciones.",
        f2Title: "Protección Anti-DDoS",      f2Desc: "Nuestros sistemas de mitigación empresarial mantienen tu servidor en línea incluso ante ataques cibernéticos masivos.",
        f3Title: "Despliegue Instantáneo",    f3Desc: "Tu servidor está listo en segundos tras la compra, totalmente automatizado, sin esperas.",
        f4Title: "Enrutamiento Optimizado",   f4Desc: "Nuestra red garantiza la menor latencia posible para jugadores en Norteamérica y Latinoamérica.",
        f5Title: "Precios Accesibles",        f5Desc: "Hosting premium a precios que tienen sentido. Creemos que una gran infraestructura no debería costar una fortuna.",
        f6Title: "Altamente Escalable",       f6Desc: "Comienza pequeño y actualiza cuando quieras. Nuestros planes crecen con tu comunidad.",

        // Plan feature list items (translatable)
        liUnlimitedBW:     "Ancho de banda ilimitado",
        liDDoS:            "Protección Anti-DDoS",
        liInstantSetup:    "Configuración instantánea",
        liPanel:           "Panel de control (Pterodactyl)",
        liCustomDomain:    "Dominio personalizado",
        liPrioritySupport: "Soporte prioritario",
        liMultipleBots:    "Múltiples bots",
        li247Uptime:       "Disponibilidad 24/7",
        liWebPanel:        "Panel de control web",

        mcOverline:  "Hosting de Minecraft",
        mcTitle:     "Elige tu plan",
        mcDesc:      "Todos los planes incluyen acceso completo al panel de control, configuración instantánea y garantía de 99.9% de disponibilidad.",
        mcBuyBtn:    "Comprar",

        botOverline: "Bots y Web Hosting",
        botTitle:    "Tu Bot siempre en línea",
        botDesc:     "Mantén tu bot de Discord activo 24/7 con nuestras soluciones de hosting confiables y asequibles.",
        botBuyBtn:   "Comprar",

        vpsOverline:    "VPS Hosting",
        vpsTitle:       "Servidores Privados Virtuales",
        vpsDesc:        "Acceso root completo, recursos dedicados y hardware empresarial. Próximamente.",
        vpsComingBadge: "🚀 Próximamente",
        vpsComingTitle: "VPS Hosting está en camino",
        vpsComingDesc:  "Estamos trabajando para traerte Servidores Privados Virtuales potentes y asequibles. Sé el primero en saber cuando lancemos.",
        vpsBuyBtn:      "Próximamente",

        modalTitle:   "Elige tu Ubicación",
        modalSub:     "Selecciona el centro de datos más cercano a tus jugadores para el mejor rendimiento.",
        modalCanada:  "Canadá",
        modalCaCity:  "Montréal",
        modalUSA:     "EE.UU.",
        modalUSCity:  "Nueva York",
        modalCol:     "Colombia",
        modalCoCity:  "Bogotá",

        footerDesc:     "Hosting de alto rendimiento para gamers y desarrolladores. Con energía de Solar Cloud.",
        footerServices: "Servicios",
        footerLegal:    "Legal",
        footerContact:  "Contacto",
        footerCopy:     "© 2025 Solar Cloud. Todos los derechos reservados.",

        privacyTitle:  "Política de Privacidad",
        refundTitle:   "Política de Reembolsos",
        termsTitle:    "Términos y Condiciones",
    }
};

/* ─── STATE ────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('sc-lang') || 'en';
let currentPlanKey = null;
let currentPlanCategory = null;

/* ─── APPLY TRANSLATIONS ───────────────────────────────────── */
function applyTranslations() {
    const T = TRANSLATIONS[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (T[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = T[key];
            } else {
                el.innerHTML = T[key];
            }
        }
    });
    localStorage.setItem('sc-lang', currentLang);
    document.documentElement.lang = currentLang;
}

function toggleLang() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyTranslations();
}

/* ─── NAVBAR SCROLL ────────────────────────────────────────── */
function initNavbar() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ─── PAGE TRANSITIONS ─────────────────────────────────────── */
function initPageTransitions() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('http') || link.target === '_blank') return;
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => { window.location.href = href; }, 280);
    });
}

/* ─── LOCATION MODAL ───────────────────────────────────────── */
function openLocationModal(planCategory, planKey, planLabel) {
    currentPlanKey      = planKey;
    currentPlanCategory = planCategory;
    const overlay = document.getElementById('locationModal');
    const planInfo = document.getElementById('modalPlanInfo');
    if (planInfo) planInfo.textContent = planLabel;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLocationModal() {
    const overlay = document.getElementById('locationModal');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentPlanKey      = null;
    currentPlanCategory = null;
}

function selectLocation(region) {
    if (!currentPlanKey || !currentPlanCategory) return;
    const categoryConfig = CONFIG[currentPlanCategory];
    if (!categoryConfig || !categoryConfig[currentPlanKey]) {
        closeLocationModal();
        return;
    }
    const url = categoryConfig[currentPlanKey][region];
    if (!url || url.includes('paymenter.tusitio.com')) {
        showToast('⚠️ Link not configured yet. Edit config.js');
        closeLocationModal();
        return;
    }
    closeLocationModal();
    document.body.classList.add('fade-out');
    setTimeout(() => { window.location.href = url; }, 280);
}

/* ─── VPS COMING SOON ──────────────────────────────────────── */
function showComingSoon() {
    const T = TRANSLATIONS[currentLang];
    showToast('🚀 ' + (T.vpsComingBadge || 'Coming Soon!'));
}

/* ─── CLOSE MODAL ON OVERLAY CLICK ────────────────────────── */
function initModalClose() {
    const overlay = document.getElementById('locationModal');
    if (!overlay) return;
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLocationModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLocationModal();
    });
}

/* ─── TOAST ─────────────────────────────────────────────────── */
function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ─── SCROLL REVEAL ─────────────────────────────────────────── */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity   = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .plan-card').forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

/* ─── INIT ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    initNavbar();
    initPageTransitions();
    initModalClose();
    initScrollReveal();
});
