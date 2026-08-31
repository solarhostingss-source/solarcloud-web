// ============================================================
// SOLAR CLOUD - script.js
// Bilingual support (EN default), page transitions, modals
// ============================================================

const TRANSLATIONS = {
  en: {
    // Navbar
    navHome: "Home",
    navMinecraft: "Minecraft",
    navBots: "Bots & Web",
    navVPS: "VPS",
    navCustom: "Custom Plans",
    navStatus: "Status",
    customOverline: "Custom Plans",
    customTitle: "Need something tailored?",
    customDesc:
      "Build your server with the exact amount of RAM, CPU, and storage you need. Priority support and VIP setup.",
    customBtn: "💬 Request Custom Plan",
    navPrivacy: "Privacy Policy",
    navRefunds: "Refund Policy",
    navTerms: "Terms of Service",
    langBtn: "🌐 ES",

    // Hero
    heroBadge: "⚡ High-Performance Hosting",
    heroTitle:
      "Power Your Server with <span class='gradient-text'>Solar Cloud</span>",
    heroSub:
      "Enterprise-grade hosting for Minecraft servers and Discord bots, starting at <span class='price-highlight'>$1.00/mo</span>. Canada, USA and Colombia locations available.",
    heroBtn1: "Get Started",
    heroBtn2: "View Plans",
    statServers: "Active Servers",
    statUptime: "Uptime",
    statSupport: "Support",

    // Features section
    featOverline: "Why Choose Us",
    featTitle: "Everything you need, nothing you don't",
    featDesc:
      "We built Solar Cloud for game server admins and developers who demand reliability without breaking the bank.",
    f1Title: "Solid Infrastructure",
    f1Desc:
      "We use top-tier data centers in Canada, USA, and Colombia to ensure maximum reliability and zero-downtime experiences.",
    f2Title: "DDoS Protection",
    f2Desc:
      "Enterprise-grade mitigation systems keep your server online even during heavy and unexpected cyber attacks.",
    f3Title: "Instant Deployment",
    f3Desc:
      "Your server is set up and ready to use within seconds of purchase — fully automated, no waiting.",
    f4Title: "Optimized Routing",
    f4Desc:
      "Our network is configured to guarantee the lowest possible latency for players across North America and Latin America.",
    f5Title: "Wallet Friendly",
    f5Desc:
      "Premium quality hosting at prices that make sense. We believe great infrastructure shouldn't cost a fortune.",
    f6Title: "Highly Scalable",
    f6Desc:
      "Start small and upgrade any time. Our plans grow with your community without complicated migrations.",

    // Plan feature list items (translatable)
    liUnlimitedBW: "Unlimited Bandwidth",
    liDDoS: "DDoS Protection",
    liInstantSetup: "Instant Setup",
    liPanel: "Panel Access (Pterodactyl)",
    liCustomDomain: "Custom Domain",
    liPrioritySupport: "Priority Support",
    liMultipleBots: "Multiple Bots",
    li247Uptime: "24/7 Uptime",
    liWebPanel: "Web Control Panel",

    // Pricing (MC)
    mcOverline: "Minecraft Hosting",
    mcTitle: "Pick your plan",
    mcDesc:
      "All plans include full control panel access, instant setup, and our 99.9% uptime guarantee.",
    mcBuyBtn: "Buy Now",

    // Pricing (Bots)
    botOverline: "Bots & Web Hosting",
    botTitle: "Always-on Bot Hosting",
    botDesc:
      "Keep your Discord bot online 24/7 with our reliable and affordable hosting solutions.",
    botBuyBtn: "Buy Now",

    // VPS
    vpsOverline: "VPS Hosting",
    vpsTitle: "Virtual Private Servers",
    vpsDesc:
      "Full root access, dedicated resources, high-speed ports, and enterprise-grade hardware.",
    vpsDelivery: "Delivery time: 1-12 hours max",
    vpsBuyBtn: "Buy Now",

    // Modal
    modalTitle: "Choose Your Location",
    modalSub:
      "Select the data center closest to your players for the best performance.",
    modalCanada: "Canada",
    modalCaCity: "Montréal",
    modalUSA: "USA",
    modalUSCity: "New York",
    modalCol: "Colombia",
    modalCoCity: "Bogotá",
    modalFree: "+$0.00",
    modalDiscount: "Use code <strong>SLC</strong> for 30% OFF at checkout!",
    modalPaypal: "Accepting PayPal, Credit & Debit Cards.",
    modalSoldOut: "Out of Stock",
    modalLowStock: "Low Stock",
    modalTermsText:
      'I have read and agree to the <a href="/terminos" target="_blank" style="color: var(--primary);">Terms and Conditions</a>.',
    modalTermsErr: "You must accept the Terms and Conditions to proceed.",
    modalFree: "+$0.00",
    modalTermsText:
      'I have read and agree to the <a href="/terminos" target="_blank" style="color: var(--primary);">Terms and Conditions</a>.',
    modalTermsErr: "You must accept the Terms and Conditions to proceed.",

    // Wizard UI
    wizardBadge: "⚡ Hosting Advisor",
    wizardTitle: "Find Your Ideal Plan in 30 Seconds",
    wizardDesc:
      "Answer 2 quick questions and our system will calculate the exact RAM and resources your server needs.",
    wizardStep1Text: "Server Type",
    wizardStep2Text: "Players",
    wizardStep3Text: "Recommendation",
    wizardQ1: "1. What type of server are you looking to create?",
    wOpt1Title: "Vanilla Survival",
    wOpt1Desc: "Vanilla, Paper or light survival with friends.",
    wOpt2Title: "BoxPvP / Modalities",
    wOpt2Desc: "PvP arenas, minigames, economy & plugins.",
    wOpt3Title: "Heavy Modpacks",
    wOpt3Desc: "Forge, Fabric, Cobblemon or 100+ mods.",
    wizardQ2: "2. How many simultaneous players are you expecting?",
    wP1Title: "1 - 5 Friends",
    wP1Desc: "Private server for close friends.",
    wP2Title: "10 - 30 Players",
    wP2Desc: "Growing community with events.",
    wP3Title: "+50 Network",
    wP3Desc: "Large scale public multiplayer network.",
    wizardRecBadge: "Recommended For You",
    wizardReset: "🔄 Try another combination",
    wizardRecButton: "Select Plan & Deploy",

    // Starter 8GB & VIP
    starterTag: "⭐ Beginner Friendly",
    starterTitle: "Starter Plan",
    starterDesc:
      "The ultimate jumpstart for new servers. High RAM and 1-on-1 VIP setup assistance.",
    starterVipFeature:
      "Includes VIP Staff Help for initial server setup & configs.",
    starterVipLink: "What's included in VIP Help? ℹ️",
    starterShowcaseBadge: "⭐ RECOMMENDED FOR BEGINNERS",
    starterShowcaseTitle: "Don't know how to start?",
    starterShowcaseWhy: "Why choose the Starter Plan (8GB)?",
    starterShowcaseDesc:
      "If it's your first time creating a server or you want zero hassle, the <strong>Starter Plan</strong> is your best choice. With <strong>8 GB RAM</strong> your server runs buttery smooth, and our Staff team helps you configure everything step-by-step from day one!",
    starterWhy1Title: "VIP Staff Setup Assistance:",
    starterWhy1Desc:
      "We assist you with initial configs, plugins, mods, and custom domain setup.",
    starterWhy2Title: "8 GB RAM & 4 vCPUs (AMD Ryzen 5 5600):",
    starterWhy2Desc:
      "Powered by AMD Ryzen 5 5600 for high clock speeds to play with friends or launch your community lag-free.",
    starterWhy3Title: "All-in-One Package:",
    starterWhy3Desc:
      "Pterodactyl panel, enterprise Anti-DDoS, and instant automated activation.",
    starterBuyCta: "Get Starter Plan ($10.00/mo)",
    otherPlansTitle: "Or choose from our standard tiers",
    otherPlansDesc:
      "From lightweight friend servers to high-capacity networks for large communities.",
    vipModalTitle: "VIP Staff Setup Assistance",
    vipModalSub:
      "We don't just give you a server; our team helps you set it up from scratch.",
    vipPerk1Title: "Pre-configured Templates",
    vipPerk1Desc:
      "Get ready-to-play optimized configurations for Paper, Purpur, BoxPvP or Survival.",
    vipPerk2Title: "Exclusive Step-by-Step Guides",
    vipPerk2Desc:
      "Easy tutorials for installing plugins, world generation, subdomain connection, and lag optimization.",
    vipPerk3Title: "Priority 1-on-1 Discord Help",
    vipPerk3Desc:
      "Direct priority assistance from our Senior Staff team in Discord for first-time server owners.",

    // Footer
    footerDesc:
      "High-performance hosting for gamers and developers. Powered by Solar Cloud.",
    footerServices: "Services",
    footerLegal: "Legal",
    footerContact: "Contact",
    footerHours: "Hours: 10:00 - 22:00",
    footerHoursAI: "AI Support: 24/7",

    // Solar AI Highlight
    heroAiLabel: "NEW — SOLAR AI",
    heroAiDesc: "Console crash resolution with AI in 1 second",

    // Ping Test
    pingOverline: "Node Latency",
    pingTitle: "Node Latency Test",
    pingDesc: "Measure the latency to our nodes in real time.",
    pingBtn: "Test Latency",
    pingMs: "ms",
    pingNodeUSA: "USA — New York",
    pingNodeCO: "Colombia — Bogotá",

    // Network Status
    statusOverline: "Network Status",
    statusTitle: "All Systems Operational",
    statusDesc: "Real-time monitoring of our infrastructure.",
    statusOp: "Operational",
    status90Days: "90 days ago",
    statusToday: "Today",
    statusNodeUSA: "Node USA — New York",
    statusNodeCO: "Node Colombia — Bogotá",
    statusPanel: "Web Panel",

    // FAQ
    faqOverline: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqQ1: "How do I transfer my server from another host?",
    faqA1:
      "It's very simple. Once you purchase your plan, open a ticket on our Discord and our staff will help you migrate your worlds, plugins, and configurations completely free of charge.",
    faqQ2: "Do you accept PayPal?",
    faqA2:
      "Yes! We accept PayPal, credit cards, and debit cards through our secure payment platform. Use code <strong>SLC</strong> for 30% OFF on your first purchase.",
    faqQ3: "What is Solar AI?",
    faqA3:
      "Solar AI is our exclusive artificial intelligence assistant that analyzes your server console crashes and errors in real time, providing instant solutions in just 1 second. It's available 24/7 on our website.",

    // Community
    communityTitle: "Join the Community",
    communityDesc:
      "Connect with other server owners, get support, and stay updated.",
    communityDiscord: "Join Discord",
    communityTiktok: "Follow on TikTok",
    footerCommunity: "Community",
    footerCopy: "© 2025 Solar Cloud. All rights reserved.",

    // Legal pages titles
    privacyTitle: "Privacy Policy",
    refundTitle: "Refund Policy",
    termsTitle: "Terms of Service",
    lastUpdate: "Last updated: August 2026",

    // Terms of Service (EN)
    term_s1_title: "1. Acceptance of Terms",
    term_s1_desc:
      "By accessing or using any service provided by Solar Cloud ('we', 'our', or 'the Company'), you agree to be bound by these Terms of Service. If you do not agree, you must not use our services.",
    term_s2_title: "2. Description of Services",
    term_s2_desc:
      "Solar Cloud provides hosting services including: Minecraft server hosting, Discord bots, and web applications.",
    term_s3_title: "3. Account Responsibilities & Backups",
    term_s3_desc:
      "You are responsible for maintaining the confidentiality of your credentials. Solar Cloud does not keep or guarantee backups of your server data. It is the sole responsibility of the user to create and store their backups.",
    term_s3_box:
      "<strong>⚠️ Backup Notice:</strong> We recommend periodically downloading backups of your worlds to your local storage.",
    term_s4_title: "4. Acceptable Use Policy",
    term_s4_desc:
      "You agree NOT to use our services to: Host or distribute illegal content, launch DDoS attacks, or engage in network abuse.",
    term_s4_box:
      "<strong>🚫 Strict Prohibition:</strong> Cryptocurrency mining and network abuse will result in immediate and permanent account termination and suspension without compensation.",
    term_s5_title: "5. Performance & Optimization (Anti-Lag Clause)",
    term_s5_desc:
      "We guarantee the delivery of all contracted hardware resources. However, we are not responsible for lag, drops, or crashes caused by user misconfiguration (plugin overload, /rtp command abuse, etc.).",
    term_s6_title: "6. Age Requirement",
    term_s6_desc:
      "You must be at least 18 years old, or have explicit and verifiable consent from your parents or legal guardians, to use and purchase our services.",
    term_s7_title: "7. Limitation of Legal Liability",
    term_s7_desc:
      "In no event shall Solar Cloud's total liability to you for any damage or loss exceed the total amount paid by you to our company during the month prior to the event giving rise to the claim.",
    term_s8_title: "8. Jurisdiction & Governing Law",
    term_s8_desc:
      "These Terms are governed by and construed in accordance with the laws of the Republic of Colombia. Any dispute shall be submitted to the exclusive jurisdiction of Colombian laws and courts.",

    // Refund Policy (EN)
    ref_s1_title: "1. Strict No Refunds Policy",
    ref_s1_desc:
      "Solar Cloud operates under a strict NO REFUNDS policy. All sales are final. We do not offer refunds or credits under any circumstances.",
    ref_s1_box:
      "<strong>⚠️ Final Sales:</strong> We recommend carefully reviewing your order before completing payment.",
    ref_s2_title: "2. Consumed Service Clause",
    ref_s2_desc:
      "A service is considered 'delivered and consumed' the moment the server is provisioned and powered on. No refunds will be granted for 'buyer's remorse' or 'item not as described' once hardware resources have been used.",
    ref_s3_title: "3. Disputes & Chargebacks",
    ref_s3_desc:
      "Any attempt to dispute a payment or initiate a chargeback with PayPal or your bank without using our official support will be considered fraud. This will result in immediate termination of services, total loss of data, and a permanent blacklist.",
    ref_s3_box:
      "<strong>💬 Official Support:</strong> Please contact <strong>support@solarcloud.lat</strong> first to resolve any issue.",
    ref_s4_title: "4. Legal Exceptions",
    ref_s4_desc:
      "Exceptions to this policy will only be made if consumer protection legislation in the client's country of residence strictly mandates a right of withdrawal, and solely and exclusively if the digital service has not begun execution, provisioning, or consumption.",

    // Privacy Policy (EN)
    priv_s1_title: "1. Introduction",
    priv_s1_desc:
      "<strong>Solar Cloud</strong> is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data when using our services.",
    priv_s2_title: "2. Information We Collect",
    priv_s2_desc: "We collect the following types of information:",
    priv_s2_li1:
      "<strong>Account Information:</strong> Name, email address, and encrypted password upon registration.",
    priv_s2_li2:
      "<strong>Billing Information:</strong> Payment details processed securely through our platform (Paymenter). We do not store complete card numbers.",
    priv_s2_li3:
      "<strong>Usage Data:</strong> Server resource usage (RAM, CPU, bandwidth) for billing and performance monitoring purposes.",
    priv_s2_li4:
      "<strong>Log Data:</strong> IP addresses, browser types, and timestamps for security and support purposes.",
    priv_s3_title: "3. How We Use Your Information",
    priv_s3_desc: "We use your information to:",
    priv_s3_li1: "Provide, maintain, and improve our hosting services.",
    priv_s3_li2: "Process payments and send billing notifications.",
    priv_s3_li3:
      "Send service-related communications (maintenance, updates, support).",
    priv_s3_li4: "Detect and prevent fraud, abuse, or security incidents.",
    priv_s3_li5: "Comply with applicable legal obligations.",
    priv_s3_box:
      "We <strong>do not sell</strong>, rent, or share your personal data with third parties for marketing purposes.",
    priv_s4_title: "4. Data Retention",
    priv_s4_desc:
      "We retain your personal data while your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us.",
    priv_s5_title: "5. Data Security",
    priv_s5_desc:
      "We implement industry-standard security measures to protect your data, including SSL/TLS encryption for data in transit and encrypted password storage.",
    priv_s6_title: "6. Third-Party Services",
    priv_s6_desc:
      "We use the following services which may process your data under their own privacy policies:",
    priv_s6_li1: "<strong>Paymenter:</strong> Payment processing and billing.",
    priv_s6_li2:
      "<strong>Pterodactyl:</strong> Control panel and server management.",
    priv_s7_title: "7. Contact",
    priv_s7_desc:
      "For questions or requests related to your privacy, contact us at: <strong>support@solarcloud.lat</strong>",
  },

  es: {
    // Legal pages titles
    privacyTitle: "Política de Privacidad",
    refundTitle: "Política de Reembolsos",
    termsTitle: "Términos de Servicio",
    lastUpdate: "Última actualización: Agosto de 2026",

    // Terms of Service (ES)
    term_s1_title: "1. Aceptación de los Términos",
    term_s1_desc:
      "Al acceder o utilizar cualquier servicio proporcionado por Solar Cloud ('nosotros', 'nuestro' o 'la Empresa'), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo, no debes utilizar nuestros servicios.",
    term_s2_title: "2. Descripción de los Servicios",
    term_s2_desc:
      "Solar Cloud proporciona servicios de alojamiento que incluyen: Alojamiento de servidores de Minecraft, bots de Discord y aplicaciones web.",
    term_s3_title:
      "3. Responsabilidad de la Cuenta y Copias de Seguridad (Backups)",
    term_s3_desc:
      "Eres responsable de mantener la confidencialidad de tus credenciales. Solar Cloud no guarda ni garantiza copias de seguridad de los datos de tu servidor. Es responsabilidad exclusiva del usuario crear y almacenar sus backups.",
    term_s3_box:
      "<strong>⚠️ Nota sobre Backups:</strong> Te recomendamos descargar periódicamente copias de seguridad de tus mundos a tu almacenamiento local.",
    term_s4_title: "4. Política de Uso Aceptable",
    term_s4_desc:
      "Aceptas NO utilizar nuestros servicios para: Alojar o distribuir contenido ilegal, lanzar ataques DDoS o abuso de red.",
    term_s4_box:
      "<strong>🚫 Prohibición Estricta:</strong> La minería de criptomonedas y el abuso de red resultarán en la terminación y suspensión inmediata y permanente de la cuenta sin derecho a compensación.",
    term_s5_title: "5. Rendimiento y Optimización (Cláusula Anti-Lag)",
    term_s5_desc:
      "Garantizamos la entrega de los recursos de hardware contratados. Sin embargo, no nos hacemos responsables por lag, caídas o crasheos causados por una mala configuración del usuario (exceso de plugins, abuso del comando /rtp, etc.).",
    term_s6_title: "6. Requisito de Edad",
    term_s6_desc:
      "Debes tener al menos 18 años, o contar con el consentimiento explícito y verificable de tus padres o tutores legales, para utilizar y comprar nuestros servicios.",
    term_s7_title: "7. Límite de Responsabilidad Legal",
    term_s7_desc:
      "En ningún caso la responsabilidad total de Solar Cloud hacia ti por cualquier daño o pérdida excederá el monto total pagado por ti a nuestra empresa durante el mes anterior al evento que originó el reclamo.",
    term_s8_title: "8. Jurisdicción y Ley Aplicable",
    term_s8_desc:
      "Estos Términos se rigen e interpretan de acuerdo con las leyes de la República de Colombia. Cualquier disputa será sometida a la jurisdicción exclusiva de las leyes y tribunales colombianos.",

    // Refund Policy (ES)
    ref_s1_title: "1. Política Estricta de Cero Reembolsos (No Refunds)",
    ref_s1_desc:
      "Solar Cloud opera bajo una estricta política de NO REEMBOLSOS. Todas las ventas son finales. No ofrecemos reembolsos ni créditos bajo ninguna circunstancia.",
    ref_s1_box:
      "<strong>⚠️ Ventas Finales:</strong> Te recomendamos revisar cuidadosamente tu pedido antes de completar el pago.",
    ref_s2_title: "2. Cláusula de Servicio Consumido",
    ref_s2_desc:
      "Se considera que el servicio ha sido 'entregado y consumido' en el momento en que el servidor es aprovisionado y encendido. No se otorgarán reembolsos por 'arrepentimiento de compra' o 'artículo distinto a lo descrito' una vez utilizados los recursos de hardware.",
    ref_s3_title: "3. Disputas y Contracargos",
    ref_s3_desc:
      "Cualquier intento de disputar un pago o iniciar un contracargo (chargeback) en PayPal o tu banco sin usar nuestro soporte oficial será considerado fraude. Esto resultará en la terminación inmediata de tus servicios, pérdida total de datos y bloqueo (blacklist).",
    ref_s3_box:
      "<strong>💬 Contacto Oficial:</strong> Comunícate primero a <strong>support@solarcloud.lat</strong> para resolver cualquier inconveniente.",
    ref_s4_title: "4. Excepciones Legales",
    ref_s4_desc:
      "Únicamente se realizarán excepciones a esta política si la legislación de protección al consumidor del país de residencia del cliente exige de forma obligatoria un derecho de retracto, y única y exclusivamente si el servicio digital no ha comenzado a ejecutarse, aprovisionarse o consumirse.",

    // Privacy Policy (ES)
    priv_s1_title: "1. Introducción",
    priv_s1_desc:
      "<strong>Solar Cloud</strong> se compromete a proteger tu privacidad. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y tus derechos con respecto a tus datos personales cuando utilizas nuestros servicios.",
    priv_s2_title: "2. Información que Recopilamos",
    priv_s2_desc: "Recopilamos los siguientes tipos de información:",
    priv_s2_li1:
      "<strong>Información de la Cuenta:</strong> Nombre, correo electrónico y contraseña (encriptada) al registrarte.",
    priv_s2_li2:
      "<strong>Información de Facturación:</strong> Detalles de pago procesados de forma segura a través de nuestra plataforma (Paymenter). No almacenamos números de tarjeta completos.",
    priv_s2_li3:
      "<strong>Datos de Uso:</strong> Uso de recursos del servidor (RAM, CPU, ancho de banda) para fines de facturación y monitoreo de rendimiento.",
    priv_s2_li4:
      "<strong>Datos de Registro:</strong> Direcciones IP, tipo de navegador y marcas de tiempo para fines de seguridad y soporte.",
    priv_s3_title: "3. Cómo Usamos tu Información",
    priv_s3_desc: "Utilizamos tu información para:",
    priv_s3_li1:
      "Proporcionar, mantener y mejorar nuestros servicios de hosting.",
    priv_s3_li2: "Procesar pagos y enviar notificaciones de facturación.",
    priv_s3_li3:
      "Enviar comunicaciones relacionadas con el servicio (mantenimiento, actualizaciones, soporte).",
    priv_s3_li4:
      "Detectar y prevenir fraudes, abusos o incidentes de seguridad.",
    priv_s3_li5: "Cumplir con las obligaciones legales aplicables.",
    priv_s3_box:
      "<strong>No vendemos</strong>, alquilamos ni compartimos tus datos personales con terceros con fines de marketing.",
    priv_s4_title: "4. Retención de Datos",
    priv_s4_desc:
      "Conservamos tus datos personales mientras tu cuenta esté activa o según sea necesario para proporcionar los servicios. Puedes solicitar la eliminación de tus datos en cualquier momento contactándonos.",
    priv_s5_title: "5. Seguridad de Datos",
    priv_s5_desc:
      "Implementamos medidas de seguridad estándar en la industria para proteger tus datos, incluido el cifrado SSL/TLS para todos los datos en tránsito y almacenamiento encriptado de contraseñas.",
    priv_s6_title: "6. Servicios de Terceros",
    priv_s6_desc:
      "Utilizamos los siguientes servicios que pueden procesar tus datos bajo sus propias políticas de privacidad:",
    priv_s6_li1:
      "<strong>Paymenter:</strong> Procesamiento de pagos y facturación.",
    priv_s6_li2:
      "<strong>Pterodactyl:</strong> Panel de control y administración de servidores.",
    priv_s7_title: "7. Contacto",
    priv_s7_desc:
      "Para preguntas o solicitudes relacionadas con tu privacidad, contáctanos a: <strong>support@solarcloud.lat</strong>",

    navHome: "Inicio",
    navMinecraft: "Minecraft",
    navBots: "Bots y Web",
    navVPS: "VPS",
    navCustom: "Planes Custom",
    navStatus: "Estado",
    customOverline: "Planes Custom",
    customTitle: "¿Necesitas algo a medida?",
    customDesc:
      "Arma tu servidor con la cantidad exacta de RAM, CPU y almacenamiento que necesitas. Soporte prioritario y configuración VIP.",
    customBtn: "💬 Solicitar Plan Custom",
    navPrivacy: "Privacidad",
    navRefunds: "Reembolsos",
    navTerms: "Términos",
    langBtn: "🌐 EN",

    heroBadge: "⚡ Hosting de Alto Rendimiento",
    heroTitle:
      "Potencia tu Servidor con <span class='gradient-text'>Solar Cloud</span>",
    heroSub:
      "Hosting de nivel empresarial para servidores Minecraft y bots de Discord, desde <span class='price-highlight'>$1.00/mes</span>. Ubicaciones en Canadá, EE.UU. y Colombia.",
    heroBtn1: "Comenzar",
    heroBtn2: "Ver Planes",
    statServers: "Servidores Activos",
    statUptime: "Disponibilidad",
    statSupport: "Soporte",

    featOverline: "Por Qué Elegirnos",
    featTitle: "Todo lo que necesitas, sin complicaciones",
    featDesc:
      "Construimos Solar Cloud para admins de servidores y desarrolladores que exigen confiabilidad sin gastar de más.",
    f1Title: "Infraestructura Sólida",
    f1Desc:
      "Usamos centros de datos de primer nivel en Canadá, EE.UU. y Colombia para máxima fiabilidad y cero interrupciones.",
    f2Title: "Protección Anti-DDoS",
    f2Desc:
      "Nuestros sistemas de mitigación empresarial mantienen tu servidor en línea incluso ante ataques cibernéticos masivos.",
    f3Title: "Despliegue Instantáneo",
    f3Desc:
      "Tu servidor está listo en segundos tras la compra, totalmente automatizado, sin esperas.",
    f4Title: "Enrutamiento Optimizado",
    f4Desc:
      "Nuestra red garantiza la menor latencia posible para jugadores en Norteamérica y Latinoamérica.",
    f5Title: "Precios Accesibles",
    f5Desc:
      "Hosting premium a precios que tienen sentido. Creemos que una gran infraestructura no debería costar una fortuna.",
    f6Title: "Altamente Escalable",
    f6Desc:
      "Comienza pequeño y actualiza cuando quieras. Nuestros planes crecen con tu comunidad.",

    // Plan feature list items (translatable)
    liUnlimitedBW: "Ancho de banda ilimitado",
    liDDoS: "Protección Anti-DDoS",
    liInstantSetup: "Configuración instantánea",
    liPanel: "Panel de control (Pterodactyl)",
    liCustomDomain: "Dominio personalizado",
    liPrioritySupport: "Soporte prioritario",
    liMultipleBots: "Múltiples bots",
    li247Uptime: "Disponibilidad 24/7",
    liWebPanel: "Panel de control web",

    mcOverline: "Hosting de Minecraft",
    mcTitle: "Elige tu plan",
    mcDesc:
      "Todos los planes incluyen acceso completo al panel de control, configuración instantánea y garantía de 99.9% de disponibilidad.",
    mcBuyBtn: "Comprar",

    botOverline: "Bots y Web Hosting",
    botTitle: "Tu Bot siempre en línea",
    botDesc:
      "Mantén tu bot de Discord activo 24/7 con nuestras soluciones de hosting confiables y asequibles.",
    botBuyBtn: "Comprar",

    vpsOverline: "VPS Hosting",
    vpsTitle: "Servidores Privados Virtuales",
    vpsDesc:
      "Acceso root completo, recursos dedicados, puertos de alta velocidad y hardware empresarial.",
    vpsDelivery: "Entre 1-12 horas máximo",
    vpsBuyBtn: "Comprar",

    modalTitle: "Elige tu Ubicación",
    modalSub: "Selecciona el centro de datos más cercano a tus jugadores.",
    modalCanada: "Canadá",
    modalCaCity: "Montréal",
    modalUSA: "EE.UU.",
    modalUSCity: "Nueva York",
    modalCol: "Colombia",
    modalCoCity: "Bogotá",
    modalFree: "Gratis",
    modalDiscount: "¡Usa el código <strong>SLC</strong> para un 30% de DTO!",
    modalPaypal: "Aceptamos PayPal, Tarjetas de Crédito y Débito.",
    modalSoldOut: "Agotado",
    modalLowStock: "Poco Espacio",
    modalTermsText:
      'He leído y acepto los <a href="/terminos" target="_blank" style="color: var(--primary);">Términos y Condiciones</a>.',
    modalTermsErr: "Debes aceptar los Términos y Condiciones para continuar.",

    // Wizard UI
    wizardBadge: "⚡ Asesor de Hosting",
    wizardTitle: "Encuentra tu Plan Ideal en 30 Segundos",
    wizardDesc:
      "Responde 2 preguntas rápidas y nuestro sistema calculará la RAM y recursos exactos que necesita tu servidor.",
    wizardStep1Text: "Tipo de Servidor",
    wizardStep2Text: "Jugadores",
    wizardStep3Text: "Recomendación",
    wizardQ1: "1. ¿Qué tipo de servidor buscas crear?",
    wOpt1Title: "Supervivencia Vanilla",
    wOpt1Desc: "Vanilla, Paper o survival ligero entre amigos.",
    wOpt2Title: "BoxPvP / Modalidades",
    wOpt2Desc: "Arenas PvP, minijuegos, economía y plugins.",
    wOpt3Title: "Modpacks Pesados",
    wOpt3Desc: "Forge, Fabric, Cobblemon o más de 100 mods.",
    wizardQ2: "2. ¿Para cuántos jugadores simultáneos?",
    wP1Title: "1 - 5 Amigos",
    wP1Desc: "Servidor privado para jugar tranquilos.",
    wP2Title: "10 - 30 Jugadores",
    wP2Desc: "Comunidad activa en crecimiento.",
    wP3Title: "+50 Red Grande",
    wP3Desc: "Network o servidor público masivo.",
    wizardRecBadge: "Recomendado para ti",
    wizardReset: "🔄 Probar otra combinación",
    wizardRecButton: "Elegir Plan y Configurar",

    // Starter 8GB & VIP
    starterTag: "⭐ Ideal para Principiantes",
    starterTitle: "Plan Starter",
    starterDesc:
      "El impulso definitivo para servidores nuevos. Alta memoria RAM y ayuda VIP del Staff.",
    starterVipFeature:
      "Incluye ayuda VIP del Staff para la configuración inicial de tu servidor.",
    starterVipLink: "¿Qué incluye la Ayuda VIP? ℹ️",
    starterShowcaseBadge: "⭐ RECOMENDADO PARA EMPEZAR",
    starterShowcaseTitle: "¿No sabes cómo empezar?",
    starterShowcaseWhy: "¿Por qué elegir el Plan Starter (8GB)?",
    starterShowcaseDesc:
      "Si es tu primera vez creando un servidor o buscas cero complicaciones, el <strong>Plan Starter</strong> es tu mejor opción. Con <strong>8 GB de RAM</strong> tu servidor funcionará totalmente fluido, ¡y nuestro equipo de Staff te ayuda paso a paso a configurarlo todo desde el primer día!",
    starterWhy1Title: "Ayuda VIP del Staff Incluida:",
    starterWhy1Desc:
      "Te asistimos en la configuración inicial, instalación de plugins, mods y dominio personalizado.",
    starterWhy2Title: "8 GB RAM & 4 vCPUs (AMD Ryzen 5 5600):",
    starterWhy2Desc:
      "Potenciado por AMD Ryzen 5 5600 de alta frecuencia para jugar con amigos o abrir tu comunidad sin lag.",
    starterWhy3Title: "Todo Incluido:",
    starterWhy3Desc:
      "Panel Pterodactyl en español, protección Anti-DDoS y activación instantánea.",
    starterBuyCta: "Comprar Plan Starter ($10.00/mes)",
    otherPlansTitle: "O elige entre nuestros planes estándar",
    otherPlansDesc:
      "Desde servidores pequeños hasta redes masivas para comunidades grandes.",
    vipModalTitle: "Ayuda VIP de Configuración",
    vipModalSub:
      "No te damos solo un servidor; nuestro equipo te ayuda a configurarlo desde cero.",
    vipPerk1Title: "Plantillas Pre-configuradas",
    vipPerk1Desc:
      "Recibe configuraciones optimizadas listas para jugar de Paper, Purpur, BoxPvP o Survival.",
    vipPerk2Title: "Guías y Tutoriales Exclusivos",
    vipPerk2Desc:
      "Paso a paso para instalar plugins, conectar tu dominio personalizado y optimizar el lag.",
    vipPerk3Title: "Soporte Prioritario 1 a 1 en Discord",
    vipPerk3Desc:
      "Asistencia directa de nuestro Staff técnico en Discord para dueños de servidores primerizos.",

    footerDesc:
      "Hosting de alto rendimiento para gamers y desarrolladores. Con energía de Solar Cloud.",
    footerServices: "Servicios",
    footerLegal: "Legal",
    footerContact: "Contacto",
    footerHours: "Horario: 10:00 - 22:00 (EST)",
    footerHoursAI: "Soporte IA: 24/7",

    // Solar AI Highlight
    heroAiLabel: "NUEVO — SOLAR AI",
    heroAiDesc: "Resolución de crasheos de consola con IA en 1 segundo",

    // Ping Test
    pingOverline: "Latencia de los Nodos",
    pingTitle: "Latencia de los Nodos",
    pingDesc: "Mide la latencia hacia nuestros nodos en tiempo real.",
    pingBtn: "Probar Latencia",
    pingMs: "ms",
    pingNodeUSA: "USA — New York",
    pingNodeCO: "Colombia — Bogotá",

    // Network Status
    statusOverline: "Estado de la Red",
    statusTitle: "Todos los Sistemas Operativos",
    statusDesc: "Monitoreo en tiempo real de nuestra infraestructura.",
    statusOp: "Operativo",
    status90Days: "Hace 90 días",
    statusToday: "Hoy",
    statusNodeUSA: "Nodo USA — New York",
    statusNodeCO: "Nodo Colombia — Bogotá",
    statusPanel: "Panel Web",

    // FAQ
    faqOverline: "Preguntas Frecuentes",
    faqTitle: "Preguntas Frecuentes",
    faqQ1: "¿Cómo transfiero mi servidor desde otro host?",
    faqA1:
      "Es muy sencillo. Una vez compres tu plan, abre un ticket en nuestro Discord y nuestro staff te ayudará a migrar tus mundos, plugins y configuraciones de forma totalmente gratuita.",
    faqQ2: "¿Aceptan PayPal?",
    faqA2:
      "¡Sí! Aceptamos PayPal, tarjetas de crédito y débito a través de nuestra plataforma de pago segura. Usa el código <strong>SLC</strong> para un 30% de descuento en tu primera compra.",
    faqQ3: "¿Qué es Solar AI?",
    faqA3:
      "Solar AI es nuestro asistente de inteligencia artificial exclusivo que analiza los crasheos y errores de la consola de tu servidor en tiempo real, brindando soluciones instantáneas en solo 1 segundo. Está disponible 24/7 en nuestra web.",

    // Community
    communityTitle: "Únete a la Comunidad",
    communityDesc:
      "Conecta con otros dueños de servidores, obtén soporte y mantente al día.",
    communityDiscord: "Unirse a Discord",
    communityTiktok: "Síguenos en TikTok",
    footerCommunity: "Comunidad",
    footerCopy: "© 2025 Solar Cloud. Todos los derechos reservados.",
  },
};

let currentLang = localStorage.getItem("sc-lang") || "en";
let currentPlanKey = null;
let currentPlanCategory = null;

function applyTranslations() {
  const T = TRANSLATIONS[currentLang];
  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.getAttribute("data-t");
    if (T[key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = T[key];
      } else {
        el.innerHTML = T[key];
      }
    }
  });
  if (currentPlanKey && currentPlanCategory) {
    updateLocationAvailability(currentPlanCategory, currentPlanKey);
  }
  localStorage.setItem("sc-lang", currentLang);
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === "en" ? "es" : "en";
  applyTranslations();
}

function initNavbar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initPageTransitions() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href");
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      link.target === "_blank"
    )
      return;
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = href;
    }, 280);
  });
}

const PLAN_RAM = {
  minecraft: {
    starter: 4,
    starter8gb: 8,
    pro: 6,
    elite: 9,
    ultra: 16,
  },
  bots: {
    basic: 0.5,
    advanced: 2,
    nginx: 3,
  },
  vps: {
    vps1: 8,
    vps2: 12,
    vps3: 24,
  },
};

const REGION_LIMITS = {
  canada: 12,
};

function updateLocationAvailability(planCategory, planKey) {
  const ram = (PLAN_RAM[planCategory] && PLAN_RAM[planCategory][planKey]) || 0;
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS["en"];

  const regions = [
    { id: "canada", limit: 12, text: T.modalLowStock || "Low Stock" },
    {
      id: "usa",
      limit: Infinity,
      text: "+$1.00 • " + (T.modalLowStock || "Low Stock"),
    },
    { id: "colombia", limit: Infinity, text: T.modalLowStock || "Low Stock" },
    { id: "europa", limit: Infinity, text: T.modalLowStock || "Low Stock" },
  ];

  regions.forEach((r) => {
    const btn = document.querySelector(`.location-btn[onclick*="'${r.id}'"]`);
    if (!btn) return;
    const priceSpan = btn.querySelector(".location-price");

    if (ram > r.limit) {
      btn.disabled = true;
      btn.style.opacity = "0.45";
      btn.style.cursor = "not-allowed";
      btn.style.borderColor = "rgba(239, 68, 68, 0.3)";
      if (priceSpan) {
        priceSpan.style.color = "#ef4444";
        priceSpan.textContent = T.modalSoldOut || "Out of Stock";
      }
    } else {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
      btn.style.borderColor = "";
      if (priceSpan) {
        priceSpan.style.color = r.id === "usa" ? "var(--primary)" : "#f59e0b";
        priceSpan.textContent = r.text;
      }
    }
  });
}

function openLocationModal(planCategory, planKey, planLabel) {
  currentPlanKey = planKey;
  currentPlanCategory = planCategory;
  const overlay = document.getElementById("locationModal");
  const planInfo = document.getElementById("modalPlanInfo");
  if (planInfo) planInfo.textContent = planLabel;
  updateLocationAvailability(planCategory, planKey);
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLocationModal() {
  const overlay = document.getElementById("locationModal");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  currentPlanKey = null;
  currentPlanCategory = null;
}

function selectLocation(region) {
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS["en"];
  const termsCheckbox = document.getElementById("agreeTerms");

  if (termsCheckbox && !termsCheckbox.checked) {
    showToast(
      "⚠️ " + (T.modalTermsErr || "You must accept the Terms to proceed."),
    );
    return;
  }

  if (!currentPlanKey || !currentPlanCategory) return;

  const ram =
    (PLAN_RAM[currentPlanCategory] &&
      PLAN_RAM[currentPlanCategory][currentPlanKey]) ||
    0;
  if (region === "canada" && ram > 12) {
    showToast("⚠️ " + (T.modalSoldOut || "Out of Stock in this location."));
    return;
  }

  const categoryConfig = CONFIG[currentPlanCategory];
  if (!categoryConfig || !categoryConfig[currentPlanKey]) {
    closeLocationModal();
    return;
  }
  const url =
    categoryConfig[currentPlanKey][region] ||
    categoryConfig[currentPlanKey]["colombia"];
  // Permitiendo redirección incluso sin configurar por pedido del usuario
  if (!url) {
    closeLocationModal();
    return;
  }

  // Disable buttons while processing
  const buttons = document.querySelectorAll(".location-btn");
  buttons.forEach((btn) => {
    btn.style.opacity = "0.5";
    btn.style.pointerEvents = "none";
  });

  // Log IP to Discord (proxy en: webhook-proxy.solarcloud.lat cuando DNS propague)
  const webhookUrl =
    "https://discord.com/api/webhooks/1540532586915307561/lBImq8LWEyr90ZUebjt6B73q5Lwk3VrT67fCdL_THVL_7wALTZcqdHHuqW-E7jnlywWf";

  // Function to send webhook
  const sendWebhook = (ip) => {
    const payload = {
      embeds: [
        {
          title: "🛒 New Checkout Intent",
          color: 0x00ff00,
          fields: [
            { name: "IP Address", value: ip, inline: true },
            { name: "Plan Category", value: currentPlanCategory, inline: true },
            { name: "Plan ID", value: currentPlanKey, inline: true },
            { name: "Region", value: region, inline: true },
            {
              name: "Timestamp",
              value: new Date().toISOString(),
              inline: false,
            },
          ],
          footer: { text: "Solar Cloud Security" },
        },
      ],
    };
    return fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((e) => console.error("Webhook error:", e));
  };

  fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => sendWebhook(data.ip))
    .catch((err) => {
      console.error("Failed to get IP (Adblocker?):", err);
      return sendWebhook("Desconocida (Bloqueada por Adblocker)");
    })
    .finally(() => {
      closeLocationModal();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = url;
      }, 280);
    });
}

function showComingSoon() {
  const T = TRANSLATIONS[currentLang];
  showToast("🚀 " + (T.vpsComingBadge || "Coming Soon!"));
}

let wizardAnswers = {
  type: null,
  players: null,
};

function selectWizardOption(step, value, el) {
  if (step === 1) {
    wizardAnswers.type = value;
    const parent = document.getElementById("wizardStep1");
    if (parent)
      parent
        .querySelectorAll(".wizard-card")
        .forEach((c) => c.classList.remove("selected"));
    if (el) el.classList.add("selected");

    setTimeout(() => {
      const s1 = document.getElementById("wizardStep1");
      const s2 = document.getElementById("wizardStep2");
      if (s1 && s2) {
        s1.classList.remove("active");
        s2.classList.add("active");
      }

      const i1 = document.getElementById("wStepItem1");
      const l1 = document.getElementById("wStepLine1");
      const i2 = document.getElementById("wStepItem2");
      if (i1) {
        i1.classList.remove("active");
        i1.classList.add("completed");
      }
      if (l1) l1.classList.add("active");
      if (i2) i2.classList.add("active");
    }, 220);
  } else if (step === 2) {
    wizardAnswers.players = value;
    const parent = document.getElementById("wizardStep2");
    if (parent)
      parent
        .querySelectorAll(".wizard-card")
        .forEach((c) => c.classList.remove("selected"));
    if (el) el.classList.add("selected");

    setTimeout(() => {
      const s2 = document.getElementById("wizardStep2");
      const s3 = document.getElementById("wizardStep3");
      if (s2 && s3) {
        s2.classList.remove("active");
        s3.classList.add("active");
      }

      const i2 = document.getElementById("wStepItem2");
      const l2 = document.getElementById("wStepLine2");
      const i3 = document.getElementById("wStepItem3");
      if (i2) {
        i2.classList.remove("active");
        i2.classList.add("completed");
      }
      if (l2) l2.classList.add("active");
      if (i3) i3.classList.add("active");

      renderWizardRecommendation();
    }, 220);
  }
}

function resetWizard() {
  wizardAnswers = { type: null, players: null };
  document
    .querySelectorAll(".wizard-card")
    .forEach((c) => c.classList.remove("selected"));

  const s1 = document.getElementById("wizardStep1");
  const s2 = document.getElementById("wizardStep2");
  const s3 = document.getElementById("wizardStep3");
  if (s1) s1.classList.add("active");
  if (s2) s2.classList.remove("active");
  if (s3) s3.classList.remove("active");

  const i1 = document.getElementById("wStepItem1");
  const l1 = document.getElementById("wStepLine1");
  const i2 = document.getElementById("wStepItem2");
  const l2 = document.getElementById("wStepLine2");
  const i3 = document.getElementById("wStepItem3");

  if (i1) i1.className = "wizard-step-item active";
  if (l1) l1.className = "wizard-step-line";
  if (i2) i2.className = "wizard-step-item";
  if (l2) l2.className = "wizard-step-line";
  if (i3) i3.className = "wizard-step-item";
}

function renderWizardRecommendation() {
  const isEs = currentLang === "es";
  const type = wizardAnswers.type;
  const players = wizardAnswers.players;

  let rec = {
    title: isEs ? "Plan Starter (8GB)" : "Starter Plan (8GB)",
    ram: "8 GB RAM",
    reason: isEs
      ? "¡La opción ideal para empezar! Con 8GB de RAM tendrás rendimiento fluido, cero lag y acompañamiento VIP del Staff para la configuración."
      : "The ultimate jumpstart! 8GB RAM delivers smooth gameplay, zero lag, and VIP Staff setup assistance included.",
    features: isEs
      ? [
          "⭐ Ayuda VIP del Staff",
          "⚡ 8 GB RAM",
          "🚀 Configuración Inmediata",
          "🛡️ Anti-DDoS",
        ]
      : [
          "⭐ VIP Staff Setup",
          "⚡ 8 GB RAM",
          "🚀 Instant Setup",
          "🛡️ DDoS Protection",
        ],
    planKey: "starter8gb",
    planLabel: isEs
      ? "Plan Starter VIP (8GB) — $10.00/mes"
      : "Starter VIP Plan (8GB) — $10.00/mo",
  };

  if (type === "modpack" || players === "p3") {
    if (players === "p3" || (type === "modpack" && players === "p2")) {
      rec = {
        title: isEs ? "Plan Scientist (16GB)" : "Scientist Plan (16GB)",
        ram: "16 GB RAM",
        reason: isEs
          ? "Para networks de +50 jugadores o modpacks masivos, 16GB de RAM y 8 vCPUs (AMD Ryzen 5 5600) aseguran TPS perfecto y carga rápida de mundos."
          : "For +50 player networks or massive modpacks, 16GB RAM and 8 vCPUs (AMD Ryzen 5 5600) guarantee maximum TPS and instant world loading.",
        features: isEs
          ? [
              "⚡ 16 GB RAM",
              "🔥 8 vCPUs (Ryzen 5 5600)",
              "💾 100 GB SSD",
              "👑 Soporte Prioritario",
            ]
          : [
              "⚡ 16 GB RAM",
              "🔥 8 vCPUs (Ryzen 5 5600)",
              "💾 100 GB SSD",
              "👑 Priority Support",
            ],
        planKey: "ultra",
        planLabel: isEs ? "Scientist — $20.00/mes" : "Scientist — $20.00/mo",
      };
    } else {
      rec = {
        title: isEs ? "Plan Astronaut (9GB)" : "Astronaut Plan (9GB)",
        ram: "9 GB RAM",
        reason: isEs
          ? "Excelente para modpacks y comunidades medianas. 9GB de RAM y procesadores Ryzen brindan el espacio necesario para cargar mods pesados."
          : "Perfect for modpacks and medium communities. 9GB RAM and Ryzen processors give ample headroom for heavy mods and plugins.",
        features: isEs
          ? [
              "⚡ 9 GB RAM",
              "🔥 5 vCPUs (Ryzen 5 5600)",
              "💾 50 GB SSD",
              "🛡️ Anti-DDoS",
            ]
          : [
              "⚡ 9 GB RAM",
              "🔥 5 vCPUs (Ryzen 5 5600)",
              "💾 50 GB SSD",
              "🛡️ DDoS Protection",
            ],
        planKey: "elite",
        planLabel: isEs ? "Astronaut — $12.00/mes" : "Astronaut — $12.00/mo",
      };
    }
  } else if (type === "boxpvp" && players === "p2") {
    rec = {
      title: isEs ? "Plan Invader (6GB)" : "Invader Plan (6GB)",
      ram: "6 GB RAM",
      reason: isEs
        ? "Ideal para servidores BoxPvP y modalidades de hasta 30 jugadores con múltiples plugins y arenas activas."
        : "Ideal for BoxPvP servers and modalities up to 30 players with multiple arenas and plugins.",
      features: isEs
        ? [
            "⚡ 6 GB RAM",
            "🔥 4 vCPUs (Ryzen 5 5600)",
            "💾 25 GB SSD",
            "🛡️ Anti-DDoS",
          ]
        : [
            "⚡ 6 GB RAM",
            "🔥 4 vCPUs (Ryzen 5 5600)",
            "💾 25 GB SSD",
            "🛡️ DDoS Protection",
          ],
      planKey: "pro",
      planLabel: isEs ? "Invader — $8.00/mes" : "Invader — $8.00/mo",
    };
  }

  const titleEl = document.getElementById("wizardResultTitle");
  const ramEl = document.getElementById("wizardResultRam");
  const reasonEl = document.getElementById("wizardResultReason");
  const featuresEl = document.getElementById("wizardResultFeatures");
  const btnEl = document.getElementById("wizardResultBtn");

  if (titleEl) titleEl.textContent = rec.title;
  if (ramEl) ramEl.textContent = rec.ram;
  if (reasonEl) reasonEl.textContent = rec.reason;
  if (featuresEl) {
    featuresEl.innerHTML = rec.features
      .map((f) => `<span class="wizard-result-pill">${f}</span>`)
      .join("");
  }
  if (btnEl) {
    btnEl.onclick = () =>
      openLocationModal("minecraft", rec.planKey, rec.planLabel);
  }
}

function openVipModal() {
  const modal = document.getElementById("vipModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeVipModal() {
  const modal = document.getElementById("vipModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function initModalClose() {
  const overlay = document.getElementById("locationModal");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeLocationModal();
    });
  }
  const vipOverlay = document.getElementById("vipModal");
  if (vipOverlay) {
    vipOverlay.addEventListener("click", (e) => {
      if (e.target === vipOverlay) closeVipModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLocationModal();
      closeVipModal();
    }
  });
}

function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".feature-card, .plan-card, .wizard-container")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });
}

let assistHistory = [];

function toggleAssistantChat() {
  console.log("toggleAssistantChat executed!");
  const assistWindow = document.getElementById("solar-sc-assistant-window");
  const assistInput = document.getElementById("sc-assistant-input");
  if (!assistWindow) {
    console.error("assistWindow not found in DOM!");
    return;
  }
  assistWindow.classList.toggle("open");
  console.log("assistWindow classList after toggle:", assistWindow.className);
  if (assistWindow.classList.contains("open") && assistInput) {
    setTimeout(() => assistInput.focus(), 100);
  }
}

async function sendAssistantMessage() {
  const assistInput = document.getElementById("sc-assistant-input");
  const messagesContainer = document.getElementById("sc-assistant-messages");
  const typingIndicator = document.getElementById("sc-assistant-typing");
  const BACKEND_API_URL = "/api/chat";

  if (!assistInput) return;
  const text = assistInput.value.trim();
  if (!text) return;

  function addMessage(msg, sender) {
    if (!messagesContainer) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = `sc-assistant-msg ${sender}`;
    let formattedText = msg
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
    msgDiv.innerHTML = formattedText;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  addMessage(text, "user");
  assistInput.value = "";
  if (typingIndicator) typingIndicator.style.display = "block";
  if (messagesContainer)
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

  try {
    const response = await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, history: assistHistory }),
    });
    if (!response.ok) throw new Error("Error en la API");
    const data = await response.json();
    if (typingIndicator) typingIndicator.style.display = "none";
    addMessage(data.response, "bot");
    assistHistory.push({ role: "user", content: text });
    assistHistory.push({ role: "model", content: data.response });
    if (assistHistory.length > 10) assistHistory = assistHistory.slice(-10);
  } catch (error) {
    console.error("Chat error:", error);
    if (typingIndicator) typingIndicator.style.display = "none";
    addMessage(
      "Lo siento, estoy teniendo problemas para conectarme en este momento. Intenta comunicarte al Discord o a support@solarcloud.lat.",
      "bot",
    );
  }
}

function initAssistant() {
  if (window._assistantInitialized) return;
  window._assistantInitialized = true;

  console.log("initAssistant initializing bindings...");
  const sendBtn = document.getElementById("sc-assistant-send-btn");
  const assistInput = document.getElementById("sc-assistant-input");
  const assistBtn = document.getElementById("solar-sc-assistant-btn");
  const closeBtns = document.querySelectorAll(".sc-assistant-close-btn");

  if (assistBtn) {
    assistBtn.removeAttribute("onclick");
    assistBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Chat button clicked via EventListener!");
      toggleAssistantChat();
    });
  } else {
    console.warn("Could not find #solar-sc-assistant-btn");
  }

  closeBtns.forEach((btn) => {
    btn.removeAttribute("onclick");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Close button clicked!");
      toggleAssistantChat();
    });
  });

  if (sendBtn) {
    sendBtn.addEventListener("click", sendAssistantMessage);
  }
  if (assistInput) {
    assistInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendAssistantMessage();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initNavbar();
  initPageTransitions();
  initModalClose();
  initScrollReveal();
  initAssistant();
});

if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
  initAssistant();
}

const PING_NODES = {
  USA: "https://node3.solarcloud.lat:8080",
  CO: "https://node.solarcloud.lat:8080",
};

function testNodePing(nodeKey) {
  const btn = document.getElementById("pingBtn" + nodeKey);
  const valueEl = document.getElementById("pingValue" + nodeKey);
  const circleFill = document.getElementById("pingCircleFill" + nodeKey);
  if (!btn || !valueEl) return;

  btn.classList.add("loading");
  btn.disabled = true;
  valueEl.textContent = "...";

  const start = performance.now();
  const img = new Image();
  let responded = false;

  const finish = (success) => {
    if (responded) return;
    responded = true;

    if (success) {
      const ping = Math.round(performance.now() - start);
      valueEl.textContent = ping;

      let color = "#10b981"; // green
      if (ping >= 150)
        color = "#ef4444"; // red
      else if (ping > 100) color = "#f59e0b"; // yellow

      valueEl.style.color = color;
      if (circleFill) {
        circleFill.style.stroke = color;
        const circumference = 339;
        const pct = Math.min(ping / 200, 1);
        circleFill.style.strokeDashoffset = circumference - circumference * pct;
      }
    } else {
      valueEl.textContent = "!";
      valueEl.style.color = "#ef4444";
    }
    btn.classList.remove("loading");
    btn.disabled = false;
  };

  img.onload = () => finish(true);
  img.onerror = () => finish(true); // 404 response means the node is reachable and responded!

  // Fallback timeout
  setTimeout(() => finish(false), 5000);

  // Bypass cache with timestamp
  img.src = PING_NODES[nodeKey] + "/favicon.ico?cb=" + new Date().getTime();
}

function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  if (!item) return;
  const isActive = item.classList.contains("active");
  // Close all
  document
    .querySelectorAll(".faq-item.active")
    .forEach((i) => i.classList.remove("active"));
  // Open clicked if it wasn't active
  if (!isActive) item.classList.add("active");
}

function initUptimeBars() {
  const containers = ["barsPanel", "barsUSA", "barsCO"];
  containers.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = "";
    for (let i = 0; i < 60; i++) {
      const bar = document.createElement("div");
      bar.className = "uptime-bar";
      el.appendChild(bar);
    }
  });
}
document.addEventListener("DOMContentLoaded", initUptimeBars);

function checkNetworkStatus() {
  if (!document.getElementById("network-status")) return;

  const nodes = [
    {
      id: "statusCardUSA",
      bars: "barsUSA",
      pct: "pctUSA",
      url: PING_NODES.USA,
    },
    { id: "statusCardCO", bars: "barsCO", pct: "pctCO", url: PING_NODES.CO },
    {
      id: "statusCardPanel",
      bars: "barsPanel",
      pct: "pctPanel",
      url: "https://panel.solarcloud.lat",
    },
  ];

  nodes.forEach((node) => {
    const card = document.getElementById(node.id);
    if (!card) return;
    const textEl = card.querySelector(".status-text");
    const dotEl = card.querySelector(".status-dot");
    const barsContainer = document.getElementById(node.bars);

    let responded = false;
    const img = new Image();
    const finish = (success) => {
      if (responded) return;
      responded = true;

      if (!success) {
        if (textEl) {
          textEl.textContent =
            currentLang === "en" ? "Offline" : "No Funcional";
          textEl.style.color = "#ef4444";
        }
        if (dotEl) {
          dotEl.style.background = "#ef4444";
          dotEl.style.boxShadow = "0 0 10px rgba(239, 68, 68, 0.5)";
          dotEl.style.animation = "none";
        }
        if (barsContainer && barsContainer.lastChild) {
          barsContainer.lastChild.classList.add("down");
        }
        const pctEl = document.getElementById(node.pct);
        if (pctEl) pctEl.textContent = "99.8 % uptime";
      } else {
        if (textEl) {
          textEl.textContent =
            currentLang === "en" ? "Operational" : "Operativo";
          textEl.style.color = "#10b981";
        }
        if (dotEl) {
          dotEl.style.background = "#10b981";
          dotEl.style.boxShadow = "";
          dotEl.style.animation = "pulse-dot 2s ease-in-out infinite";
        }
        if (barsContainer && barsContainer.lastChild) {
          barsContainer.lastChild.classList.remove("down");
        }
        const pctEl = document.getElementById(node.pct);
        if (pctEl) pctEl.textContent = "100.0 % uptime";
      }
    };

    img.onload = () => finish(true);
    img.onerror = () => finish(true);

    setTimeout(() => finish(false), 5000);
    img.src = node.url + "/favicon.ico?cb=" + new Date().getTime();
  });
}
