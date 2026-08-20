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
        navCustom:     "Custom Plans",
        customOverline: "Custom Plans",
        customTitle:    "Need something tailored?",
        customDesc:     "Build your server with the exact amount of RAM, CPU, and storage you need. Priority support and VIP setup.",
        customBtn:      "💬 Request Custom Plan",
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
        modalFree:    "+$0.00",
        modalTermsText: "I have read and agree to the <a href=\"/terminos\" target=\"_blank\" style=\"color: var(--primary);\">Terms and Conditions</a>.",
        modalTermsErr: "You must accept the Terms and Conditions to proceed.",
        modalFree:    "+$0.00",
        modalTermsText: "I have read and agree to the <a href=\"/terminos\" target=\"_blank\" style=\"color: var(--primary);\">Terms and Conditions</a>.",
        modalTermsErr: "You must accept the Terms and Conditions to proceed.",

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

        ref_h1: "1. Overview and No Refund Policy",
        ref_p1: "<strong>Solar Cloud</strong> operates on a strict <strong>NO REFUNDS</strong> policy. By purchasing any of our services (including but not limited to Minecraft Hosting, Bot Hosting, and VPS), you acknowledge and agree that all sales are final. We do not offer refunds, prorated refunds, or credits under any circumstances, regardless of service usage, downtime, or account termination.",
        ref_p2: "We highly recommend that you carefully review your order and the service specifications before completing your purchase.",
        ref_h2: "2. Chargebacks and Payment Disputes",
        ref_p3: "Any attempt to dispute a payment, initiate a chargeback with your bank, credit card company, or PayPal, or otherwise reverse a transaction will result in the <strong>immediate and permanent ban of your account</strong>.",
        ref_p4: "In the event of a chargeback or payment dispute:",
        ref_li1: "All active services associated with your account will be <strong>terminated and deleted immediately</strong> without notice.",
        ref_li2: "All data, files, and configurations will be permanently lost and cannot be recovered.",
        ref_li3: "You will be blacklisted from purchasing or using any future Solar Cloud services.",
        ref_p5: "If you experience a billing issue, you must contact our support team to resolve the matter directly rather than initiating a dispute with your payment provider.",
        ref_h3: "3. Exceptions (Legal Compliance)",
        ref_p6: "Exceptions to this strict No Refund policy will only be made if explicitly required by applicable local or international law that supersedes these terms. In all other cases, the No Refund policy stands absolute.",
        ref_h4: "4. Changes to This Policy",
        ref_p7: "Solar Cloud reserves the right to modify this Refund Policy at any time. It is your responsibility to review this policy periodically. Continued use of our services constitutes agreement to the updated policy.",
        ref_h9: "9. Contact",
        ref_p8: "For any refund-related inquiries, please reach out to us at: <strong>support@solarcloud.lat</strong>",
        term_h1: "1. Acceptance of Terms",
        term_p1: "By accessing or using any service provided by <strong>Solar Cloud</strong> (\"we,\" \"us,\" or \"the Company\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree with any part of these Terms, you may not use our services.",
        term_h2: "2. Description of Services",
        term_p2: "Solar Cloud provides hosting services including, but not limited to:",
        term_li1: "Minecraft server hosting (Canada, USA, Colombia locations)",
        term_li2: "Discord bot hosting",
        term_li3: "Web application hosting",
        term_p3: "We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.",
        term_h3: "3. Account Responsibilities & Backups",
        term_p4: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify Solar Cloud immediately of any unauthorized access to your account.",
        term_p5: "<strong>Data and Backups:</strong> Solar Cloud does <strong>not</strong> keep or guarantee backups of your server data. It is solely the responsibility of the user (and their players) to create, manage, and safely store backups of their files, worlds, databases, and configurations. We are not liable for any data loss under any circumstances.",
        term_h4: "4. Acceptable Use Policy & Liability",
        term_p6: "You agree NOT to use our services to:",
        term_li4: "Host, distribute, or facilitate illegal content of any kind.",
        term_li5: "Launch DDoS attacks, port scanning, or any form of network abuse.",
        term_li6: "Mine cryptocurrency. <strong>Cryptocurrency mining is 100% prohibited</strong> and will trigger automatic permanent suspension.",
        term_li7: "Engage in any illegal activities or violate any local, national, or international laws.",
        term_p7: "<strong>User Content Liability:</strong> Solar Cloud acts strictly as an infrastructure provider. We do not monitor, endorse, and are <strong>not legally responsible</strong> for what users or players install, upload, or run on their servers. The account holder assumes full legal responsibility for all content, software, and activity on their server.",
        term_p8: "Violation of this policy will result in immediate termination of your service, deletion of your files, and a permanent ban without any possibility of a refund.",
        term_h5: "5. Payment and Billing",
        term_p9: "All services are billed in advance on a monthly basis. Payments are processed through our payment provider (Paymenter). Prices are subject to change with 30 days' notice. Failure to pay may result in service suspension.",
        term_h6: "6. Service Level Agreement (SLA)",
        term_p10: "Solar Cloud strives to maintain a <strong>99.9% uptime</strong> for all services. Scheduled maintenance will be communicated in advance when possible. Downtime due to DDoS attacks, hardware failures beyond our control, or force majeure events may not be covered by this SLA.",
        term_h7: "7. Limitation of Liability",
        term_p11: "Solar Cloud shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, resulting from your use of the service or inability to access the service.",
        term_h8: "8. Termination",
        term_p12: "We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use the service will immediately cease.",
        term_h9: "9. Changes to Terms",
        term_p13: "We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or through our website. Continued use of our services after such changes constitutes your acceptance of the new Terms.",
        term_h10: "10. Governing Law",
        term_p14: "These Terms shall be governed by and construed in accordance with applicable international law. Disputes shall be resolved through good-faith negotiation before any legal action is taken.",
        term_h11: "11. Contact",
        term_p15: "For questions regarding these Terms, please contact us at: <strong>support@solarcloud.lat</strong>",
    },

    es: {
        ref_h1: "1. Visión General y Política de No Reembolso",
        ref_p1: "<strong>Solar Cloud</strong> opera bajo una estricta política de <strong>NO REEMBOLSOS</strong>. Al comprar cualquiera de nuestros servicios (incluyendo pero no limitado a Hosting de Minecraft, Bots y VPS), reconoces y aceptas que todas las ventas son finales. No ofrecemos reembolsos, reembolsos prorrateados ni créditos bajo ninguna circunstancia, sin importar el uso del servicio, tiempo de inactividad o terminación de cuenta.",
        ref_p2: "Recomendamos encarecidamente que revise cuidadosamente su pedido y las especificaciones del servicio antes de completar su compra.",
        ref_h2: "2. Contracargos y Disputas de Pago",
        ref_p3: "Cualquier intento de disputar un pago, iniciar un contracargo con su banco, compañía de tarjeta de crédito o PayPal, o revertir de otra manera una transacción resultará en el <strong>baneo inmediato y permanente de su cuenta</strong>.",
        ref_p4: "En el caso de un contracargo o disputa de pago:",
        ref_li1: "Todos los servicios activos asociados con su cuenta serán <strong>terminados y eliminados inmediatamente</strong> sin previo aviso.",
        ref_li2: "Todos los datos, archivos y configuraciones se perderán de forma permanente y no podrán ser recuperados.",
        ref_li3: "Será incluido en una lista negra para comprar o usar cualquier servicio futuro de Solar Cloud.",
        ref_p5: "Si experimenta un problema de facturación, debe contactar a nuestro equipo de soporte para resolver el asunto directamente en lugar de iniciar una disputa con su proveedor de pago.",
        ref_h3: "3. Excepciones (Cumplimiento Legal)",
        ref_p6: "Solo se harán excepciones a esta estricta política de No Reembolso si así lo exige explícitamente la ley local o internacional aplicable que prevalezca sobre estos términos. En todos los demás casos, la política de No Reembolso es absoluta.",
        ref_h4: "4. Cambios en Esta Política",
        ref_p7: "Solar Cloud se reserva el derecho de modificar esta Política de Reembolsos en cualquier momento. Es su responsabilidad revisar esta política periódicamente. El uso continuo de nuestros servicios constituye su acuerdo con la política actualizada.",
        ref_h9: "9. Contacto",
        ref_p8: "Para cualquier consulta relacionada con reembolsos, contáctenos en: <strong>support@solarcloud.lat</strong>",
        term_h1: "1. Aceptación de los Términos",
        term_p1: "Al acceder o usar cualquier servicio proporcionado por <strong>Solar Cloud</strong> (\"nosotros\", \"la Compañía\"), usted acepta estar sujeto a estos Términos de Servicio (\"Términos\"). Si no está de acuerdo con alguna parte de estos Términos, no puede utilizar nuestros servicios.",
        term_h2: "2. Descripción de los Servicios",
        term_p2: "Solar Cloud proporciona servicios de hosting que incluyen, entre otros:",
        term_li1: "Hosting de servidores de Minecraft (ubicaciones en Canadá, EE. UU., Colombia)",
        term_li2: "Hosting de bots de Discord",
        term_li3: "Hosting de aplicaciones web",
        term_p3: "Nos reservamos el derecho de modificar, suspender o discontinuar cualquier servicio en cualquier momento con un aviso razonable.",
        term_h3: "3. Responsabilidades de la Cuenta y Backups",
        term_p4: "Usted es responsable de mantener la confidencialidad de las credenciales de su cuenta. Acepta notificar a Solar Cloud inmediatamente sobre cualquier acceso no autorizado a su cuenta.",
        term_p5: "<strong>Datos y Backups:</strong> Solar Cloud <strong>no</strong> mantiene ni garantiza backups (respaldos) de los datos de su servidor. Es responsabilidad exclusiva del usuario (y de sus jugadores) crear, administrar y almacenar de manera segura backups de sus archivos, mundos, bases de datos y configuraciones. No somos responsables de ninguna pérdida de datos bajo ninguna circunstancia.",
        term_h4: "4. Política de Uso Aceptable y Responsabilidad",
        term_p6: "Usted acepta NO usar nuestros servicios para:",
        term_li4: "Alojar, distribuir o facilitar contenido ilegal de cualquier tipo.",
        term_li5: "Lanzar ataques DDoS, escaneo de puertos o cualquier forma de abuso de red.",
        term_li6: "Minar criptomonedas. <strong>La minería de criptomonedas está 100% prohibida</strong> y desencadenará una suspensión permanente automática.",
        term_li7: "Participar en cualquier actividad ilegal o violar cualquier ley local, nacional o internacional.",
        term_p7: "<strong>Responsabilidad del Contenido del Usuario:</strong> Solar Cloud actúa estrictamente como un proveedor de infraestructura. No monitoreamos, no respaldamos y <strong>no somos legalmente responsables</strong> de lo que los usuarios o jugadores instalen, suban o ejecuten en sus servidores. El titular de la cuenta asume toda la responsabilidad legal por todo el contenido, software y actividad en su servidor.",
        term_p8: "La violación de esta política resultará en la terminación inmediata de su servicio, la eliminación de sus archivos y un baneo permanente sin posibilidad de reembolso.",
        term_h5: "5. Pago y Facturación",
        term_p9: "Todos los servicios se facturan por adelantado mensualmente. Los pagos se procesan a través de nuestro proveedor de pagos (Paymenter). Los precios están sujetos a cambios con 30 días de anticipación. La falta de pago puede resultar en la suspensión del servicio.",
        term_h6: "6. Acuerdo de Nivel de Servicio (SLA)",
        term_p10: "Solar Cloud se esfuerza por mantener un <strong>tiempo de actividad del 99.9%</strong> para todos los servicios. El mantenimiento programado se comunicará por adelantado cuando sea posible. El tiempo de inactividad debido a ataques DDoS, fallas de hardware fuera de nuestro control o eventos de fuerza mayor pueden no estar cubiertos por este SLA.",
        term_h7: "7. Limitación de Responsabilidad",
        term_p11: "Solar Cloud no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo pero no limitado a la pérdida de beneficios, datos, fondo de comercio u otras pérdidas intangibles, resultantes de su uso del servicio o la incapacidad de acceder al servicio.",
        term_h8: "8. Terminación",
        term_p12: "Nos reservamos el derecho de terminar o suspender su cuenta inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo pero no limitado a un incumplimiento de estos Términos. Al terminar, su derecho a usar el servicio cesará inmediatamente.",
        term_h9: "9. Cambios en los Términos",
        term_p13: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Notificaremos los cambios significativos por correo electrónico o a través de nuestro sitio web. El uso continuo de nuestros servicios después de dichos cambios constituye su aceptación de los nuevos Términos.",
        term_h10: "10. Ley Aplicable",
        term_p14: "Estos Términos se regirán e interpretarán de acuerdo con el derecho internacional aplicable. Las disputas se resolverán a través de negociaciones de buena fe antes de emprender cualquier acción legal.",
        term_h11: "11. Contacto",
        term_p15: "Si tiene preguntas sobre estos Términos, contáctenos en: <strong>support@solarcloud.lat</strong>",

        navHome:       "Inicio",
        navMinecraft:  "Minecraft",
        navBots:       "Bots y Web",
        navVPS:        "VPS",
        navCustom:     "Planes Custom",
        customOverline: "Planes Custom",
        customTitle:    "¿Necesitas algo a medida?",
        customDesc:     "Arma tu servidor con la cantidad exacta de RAM, CPU y almacenamiento que necesitas. Soporte prioritario y configuración VIP.",
        customBtn:      "💬 Solicitar Plan Custom",
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
        modalFree:    "Gratis",
        modalTermsText: "He leído y acepto los <a href=\"/terminos\" target=\"_blank\" style=\"color: var(--primary);\">Términos y Condiciones</a>.",
        modalTermsErr: "Debes aceptar los Términos y Condiciones para continuar.",

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
    const T = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
    const termsCheckbox = document.getElementById('agreeTerms');
    
    if (termsCheckbox && !termsCheckbox.checked) {
        showToast('⚠️ ' + (T.modalTermsErr || "You must accept the Terms to proceed."));
        return;
    }

    if (!currentPlanKey || !currentPlanCategory) return;
    const categoryConfig = CONFIG[currentPlanCategory];
    if (!categoryConfig || !categoryConfig[currentPlanKey]) {
        closeLocationModal();
        return;
    }
    const url = categoryConfig[currentPlanKey][region];
    // Permitiendo redirección incluso sin configurar por pedido del usuario
    if (!url) { closeLocationModal(); return; }
    
    // Disable buttons while processing
    const buttons = document.querySelectorAll('.location-btn');
    buttons.forEach(btn => { btn.style.opacity = '0.5'; btn.style.pointerEvents = 'none'; });
    
    // Log IP to Discord
    const webhookUrl = 'https://discord.com/api/webhooks/1540089326367547434/ic2SYOIw2elDWdrIzIFUofAl2ovuTdULix1_E0vNoMoiFKXkvjL7M2bUyM36RrEVpnDJ';
    
    // Function to send webhook
    const sendWebhook = (ip) => {
        const payload = {
            embeds: [{
                title: "🛒 New Checkout Intent",
                color: 0x00ff00,
                fields: [
                    { name: "IP Address", value: ip, inline: true },
                    { name: "Plan Category", value: currentPlanCategory, inline: true },
                    { name: "Plan ID", value: currentPlanKey, inline: true },
                    { name: "Region", value: region, inline: true },
                    { name: "Timestamp", value: new Date().toISOString(), inline: false }
                ],
                footer: { text: "Solar Cloud Security" }
            }]
        };
        return fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(e => console.error("Webhook error:", e));
    };

    fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => sendWebhook(data.ip))
        .catch(err => {
            console.error('Failed to get IP (Adblocker?):', err);
            return sendWebhook('Desconocida (Bloqueada por Adblocker)');
        })
        .finally(() => {
            closeLocationModal();
            document.body.classList.add('fade-out');
            setTimeout(() => { window.location.href = url; }, 280);
        });
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
