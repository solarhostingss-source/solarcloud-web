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
        heroSub:       "Enterprise-grade hosting for Minecraft servers and Discord bots, starting at <span class='price-highlight'>$1.00/mo</span>. Canada, USA and Colombia locations available.",
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
        vpsDelivery: "Delivery time: 1-12 hours max",
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
        modalDiscount: "Use code <strong>SLC</strong> for 30% OFF at checkout!",
        modalPaypal:   "Accepting PayPal, Credit & Debit Cards.",
        modalSoldOut:  "Out of Stock",
        modalLowStock: "Low Stock",
        modalTermsText: "I have read and agree to the <a href=\"/terminos\" target=\"_blank\" style=\"color: var(--primary);\">Terms and Conditions</a>.",
        modalTermsErr: "You must accept the Terms and Conditions to proceed.",
        modalFree:    "+$0.00",
        modalTermsText: "I have read and agree to the <a href=\"/terminos\" target=\"_blank\" style=\"color: var(--primary);\">Terms and Conditions</a>.",
        modalTermsErr: "You must accept the Terms and Conditions to proceed.",

        // Wizard UI
        wizardBadge: "⚡ Hosting Advisor",
        wizardTitle: "Find Your Ideal Plan in 30 Seconds",
        wizardDesc: "Answer 2 quick questions and our system will calculate the exact RAM and resources your server needs.",
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
        starterDesc: "The ultimate jumpstart for new servers. High RAM and 1-on-1 VIP setup assistance.",
        starterVipFeature: "Includes VIP Staff Help for initial server setup & configs.",
        starterVipLink: "What's included in VIP Help? ℹ️",
        vipModalTitle: "VIP Staff Setup Assistance",
        vipModalSub: "We don't just give you a server; our team helps you set it up from scratch.",
        vipPerk1Title: "Pre-configured Templates",
        vipPerk1Desc: "Get ready-to-play optimized configurations for Paper, Purpur, BoxPvP or Survival.",
        vipPerk2Title: "Exclusive Step-by-Step Guides",
        vipPerk2Desc: "Easy tutorials for installing plugins, world generation, subdomain connection, and lag optimization.",
        vipPerk3Title: "Priority 1-on-1 Discord Help",
        vipPerk3Desc: "Direct priority assistance from our Senior Staff team in Discord for first-time server owners.",

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
        lastUpdate:    "Last updated: August 2026",

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
        heroSub:       "Hosting de nivel empresarial para servidores Minecraft y bots de Discord, desde <span class='price-highlight'>$1.00/mes</span>. Ubicaciones en Canadá, EE.UU. y Colombia.",
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
        vpsDelivery: "Entre 1-12 horas máximo",
        vpsComingTitle: "VPS Hosting está en camino",
        vpsComingDesc:  "Estamos trabajando para traerte Servidores Privados Virtuales potentes y asequibles. Sé el primero en saber cuando lancemos.",
        vpsBuyBtn:      "Próximamente",

        modalTitle:   "Elige tu Ubicación",
        modalSub:     "Selecciona el centro de datos más cercano a tus jugadores.",
        modalCanada:  "Canadá",
        modalCaCity:  "Montréal",
        modalUSA:     "EE.UU.",
        modalUSCity:  "Nueva York",
        modalCol:     "Colombia",
        modalCoCity:  "Bogotá",
        modalFree:    "Gratis",
        modalDiscount: "¡Usa el código <strong>SLC</strong> para un 30% de DTO!",
        modalPaypal:   "Aceptamos PayPal, Tarjetas de Crédito y Débito.",
        modalSoldOut:  "Agotado",
        modalLowStock: "Poco Espacio",
        modalTermsText: "He leído y acepto los <a href=\"/terminos\" target=\"_blank\" style=\"color: var(--primary);\">Términos y Condiciones</a>.",
        modalTermsErr: "Debes aceptar los Términos y Condiciones para continuar.",

        // Wizard UI
        wizardBadge: "⚡ Asesor de Hosting",
        wizardTitle: "Encuentra tu Plan Ideal en 30 Segundos",
        wizardDesc: "Responde 2 preguntas rápidas y nuestro sistema calculará la RAM y recursos exactos que necesita tu servidor.",
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
        starterDesc: "El impulso definitivo para servidores nuevos. Alta memoria RAM y ayuda VIP del Staff.",
        starterVipFeature: "Incluye ayuda VIP del Staff para la configuración inicial de tu servidor.",
        starterVipLink: "¿Qué incluye la Ayuda VIP? ℹ️",
        vipModalTitle: "Ayuda VIP de Configuración",
        vipModalSub: "No te damos solo un servidor; nuestro equipo te ayuda a configurarlo desde cero.",
        vipPerk1Title: "Plantillas Pre-configuradas",
        vipPerk1Desc: "Recibe configuraciones optimizadas listas para jugar de Paper, Purpur, BoxPvP o Survival.",
        vipPerk2Title: "Guías y Tutoriales Exclusivos",
        vipPerk2Desc: "Paso a paso para instalar plugins, conectar tu dominio personalizado y optimizar el lag.",
        vipPerk3Title: "Soporte Prioritario 1 a 1 en Discord",
        vipPerk3Desc: "Asistencia directa de nuestro Staff técnico en Discord para dueños de servidores primerizos.",

        footerDesc:     "Hosting de alto rendimiento para gamers y desarrolladores. Con energía de Solar Cloud.",
        footerServices: "Servicios",
        footerLegal:    "Legal",
        footerContact:  "Contacto",
        footerCopy:     "© 2025 Solar Cloud. Todos los derechos reservados.",

        privacyTitle:  "Política de Privacidad",
        refundTitle:   "Política de Reembolsos",
        termsTitle:    "Términos y Condiciones",
        lastUpdate:    "Última actualización: Agosto del 2026",
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
    if (currentPlanKey && currentPlanCategory) {
        updateLocationAvailability(currentPlanCategory, currentPlanKey);
    }
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

/* ─── LOCATION AVAILABILITY & STOCK ───────────────────────── */
const PLAN_RAM = {
    minecraft: {
        starter:    4,
        starter8gb: 8,
        pro:        6,
        elite:      9,
        ultra:      16
    },
    bots: {
        basic:    0.5,
        advanced: 2,
        nginx:    3
    },
    vps: {
        vps1: 8,
        vps2: 12,
        vps3: 24
    }
};

const REGION_LIMITS = {
    canada: 12
};

function updateLocationAvailability(planCategory, planKey) {
    const ram = (PLAN_RAM[planCategory] && PLAN_RAM[planCategory][planKey]) || 0;
    const T = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];

    const regions = [
        { id: 'canada', limit: 12, text: T.modalLowStock || 'Low Stock' },
        { id: 'usa', limit: Infinity, text: '+$1.00 • ' + (T.modalLowStock || 'Low Stock') },
        { id: 'colombia', limit: Infinity, text: T.modalLowStock || 'Low Stock' },
        { id: 'europa', limit: Infinity, text: T.modalLowStock || 'Low Stock' }
    ];

    regions.forEach(r => {
        const btn = document.querySelector(`.location-btn[onclick*="'${r.id}'"]`);
        if (!btn) return;
        const priceSpan = btn.querySelector('.location-price');

        if (ram > r.limit) {
            btn.disabled = true;
            btn.style.opacity = '0.45';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            if (priceSpan) {
                priceSpan.style.color = '#ef4444';
                priceSpan.textContent = T.modalSoldOut || 'Out of Stock';
            }
        } else {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
            btn.style.borderColor = '';
            if (priceSpan) {
                priceSpan.style.color = (r.id === 'usa') ? 'var(--primary)' : '#f59e0b';
                priceSpan.textContent = r.text;
            }
        }
    });
}

/* ─── LOCATION MODAL ───────────────────────────────────────── */
function openLocationModal(planCategory, planKey, planLabel) {
    currentPlanKey      = planKey;
    currentPlanCategory = planCategory;
    const overlay = document.getElementById('locationModal');
    const planInfo = document.getElementById('modalPlanInfo');
    if (planInfo) planInfo.textContent = planLabel;
    updateLocationAvailability(planCategory, planKey);
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

    const ram = (PLAN_RAM[currentPlanCategory] && PLAN_RAM[currentPlanCategory][currentPlanKey]) || 0;
    if (region === 'canada' && ram > 12) {
        showToast('⚠️ ' + (T.modalSoldOut || "Out of Stock in this location."));
        return;
    }

    const categoryConfig = CONFIG[currentPlanCategory];
    if (!categoryConfig || !categoryConfig[currentPlanKey]) {
        closeLocationModal();
        return;
    }
    const url = categoryConfig[currentPlanKey][region] || categoryConfig[currentPlanKey]['colombia'];
    // Permitiendo redirección incluso sin configurar por pedido del usuario
    if (!url) { closeLocationModal(); return; }
    
    // Disable buttons while processing
    const buttons = document.querySelectorAll('.location-btn');
    buttons.forEach(btn => { btn.style.opacity = '0.5'; btn.style.pointerEvents = 'none'; });
    
    // Log IP to Discord (proxy en: webhook-proxy.solarcloud.lat cuando DNS propague)
    const webhookUrl = 'https://discord.com/api/webhooks/1540532586915307561/lBImq8LWEyr90ZUebjt6B73q5Lwk3VrT67fCdL_THVL_7wALTZcqdHHuqW-E7jnlywWf';
    
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

/* ─── WIZARD LOGIC (ASESOR INTERACTIVO) ─────────────────────── */
let wizardAnswers = {
    type: null,
    players: null
};

function selectWizardOption(step, value, el) {
    if (step === 1) {
        wizardAnswers.type = value;
        const parent = document.getElementById('wizardStep1');
        if (parent) parent.querySelectorAll('.wizard-card').forEach(c => c.classList.remove('selected'));
        if (el) el.classList.add('selected');

        setTimeout(() => {
            const s1 = document.getElementById('wizardStep1');
            const s2 = document.getElementById('wizardStep2');
            if (s1 && s2) {
                s1.classList.remove('active');
                s2.classList.add('active');
            }
            
            const i1 = document.getElementById('wStepItem1');
            const l1 = document.getElementById('wStepLine1');
            const i2 = document.getElementById('wStepItem2');
            if (i1) { i1.classList.remove('active'); i1.classList.add('completed'); }
            if (l1) l1.classList.add('active');
            if (i2) i2.classList.add('active');
        }, 220);
    } else if (step === 2) {
        wizardAnswers.players = value;
        const parent = document.getElementById('wizardStep2');
        if (parent) parent.querySelectorAll('.wizard-card').forEach(c => c.classList.remove('selected'));
        if (el) el.classList.add('selected');

        setTimeout(() => {
            const s2 = document.getElementById('wizardStep2');
            const s3 = document.getElementById('wizardStep3');
            if (s2 && s3) {
                s2.classList.remove('active');
                s3.classList.add('active');
            }
            
            const i2 = document.getElementById('wStepItem2');
            const l2 = document.getElementById('wStepLine2');
            const i3 = document.getElementById('wStepItem3');
            if (i2) { i2.classList.remove('active'); i2.classList.add('completed'); }
            if (l2) l2.classList.add('active');
            if (i3) i3.classList.add('active');

            renderWizardRecommendation();
        }, 220);
    }
}

function resetWizard() {
    wizardAnswers = { type: null, players: null };
    document.querySelectorAll('.wizard-card').forEach(c => c.classList.remove('selected'));

    const s1 = document.getElementById('wizardStep1');
    const s2 = document.getElementById('wizardStep2');
    const s3 = document.getElementById('wizardStep3');
    if (s1) s1.classList.add('active');
    if (s2) s2.classList.remove('active');
    if (s3) s3.classList.remove('active');

    const i1 = document.getElementById('wStepItem1');
    const l1 = document.getElementById('wStepLine1');
    const i2 = document.getElementById('wStepItem2');
    const l2 = document.getElementById('wStepLine2');
    const i3 = document.getElementById('wStepItem3');

    if (i1) i1.className = 'wizard-step-item active';
    if (l1) l1.className = 'wizard-step-line';
    if (i2) i2.className = 'wizard-step-item';
    if (l2) l2.className = 'wizard-step-line';
    if (i3) i3.className = 'wizard-step-item';
}

function renderWizardRecommendation() {
    const isEs = currentLang === 'es';
    const type = wizardAnswers.type;
    const players = wizardAnswers.players;

    let rec = {
        title: isEs ? "Plan Starter (8GB)" : "Starter Plan (8GB)",
        ram: "8 GB RAM",
        reason: isEs 
            ? "¡La opción ideal para empezar! Con 8GB de RAM tendrás rendimiento fluido, cero lag y acompañamiento VIP del Staff para la configuración."
            : "The ultimate jumpstart! 8GB RAM delivers smooth gameplay, zero lag, and VIP Staff setup assistance included.",
        features: isEs 
            ? ["⭐ Ayuda VIP del Staff", "⚡ 8 GB RAM", "🚀 Configuración Inmediata", "🛡️ Anti-DDoS"]
            : ["⭐ VIP Staff Setup", "⚡ 8 GB RAM", "🚀 Instant Setup", "🛡️ DDoS Protection"],
        planKey: "starter8gb",
        planLabel: isEs ? "Plan Starter VIP (8GB) — $10.00/mes" : "Starter VIP Plan (8GB) — $10.00/mo"
    };

    if (type === 'modpack' || players === 'p3') {
        if (players === 'p3' || (type === 'modpack' && players === 'p2')) {
            rec = {
                title: isEs ? "Plan Scientist (16GB)" : "Scientist Plan (16GB)",
                ram: "16 GB RAM",
                reason: isEs
                    ? "Para networks de +50 jugadores o modpacks masivos, 16GB de RAM y 8 vCPUs aseguran TPS perfecto y carga rápida de mundos."
                    : "For +50 player networks or massive modpacks, 16GB RAM and 8 vCPUs guarantee maximum TPS and instant world loading.",
                features: isEs
                    ? ["⚡ 16 GB RAM", "🔥 8 vCPU Cores", "💾 100 GB SSD", "👑 Soporte Prioritario"]
                    : ["⚡ 16 GB RAM", "🔥 8 vCPU Cores", "💾 100 GB SSD", "👑 Priority Support"],
                planKey: "ultra",
                planLabel: isEs ? "Scientist — $18.00/mes" : "Scientist — $18.00/mo"
            };
        } else {
            rec = {
                title: isEs ? "Plan Astronaut (9GB)" : "Astronaut Plan (9GB)",
                ram: "9 GB RAM",
                reason: isEs
                    ? "Excelente para modpacks y comunidades medianas. 9GB de RAM brindan el espacio necesario para cargar mods pesados."
                    : "Perfect for modpacks and medium communities. 9GB RAM gives ample headroom for heavy mods and plugins.",
                features: isEs
                    ? ["⚡ 9 GB RAM", "🔥 5 vCPU Cores", "💾 50 GB SSD", "🛡️ Anti-DDoS"]
                    : ["⚡ 9 GB RAM", "🔥 5 vCPU Cores", "💾 50 GB SSD", "🛡️ DDoS Protection"],
                planKey: "elite",
                planLabel: isEs ? "Astronaut — $12.00/mes" : "Astronaut — $12.00/mo"
            };
        }
    } else if (type === 'boxpvp' && players === 'p2') {
        rec = {
            title: isEs ? "Plan Invader (6GB)" : "Invader Plan (6GB)",
            ram: "6 GB RAM",
            reason: isEs
                ? "Ideal para servidores BoxPvP y modalidades de hasta 30 jugadores con múltiples plugins y arenas activas."
                : "Ideal for BoxPvP servers and modalities up to 30 players with multiple arenas and plugins.",
            features: isEs
                ? ["⚡ 6 GB RAM", "🔥 4 vCPU Cores", "💾 25 GB SSD", "🛡️ Anti-DDoS"]
                : ["⚡ 6 GB RAM", "🔥 4 vCPU Cores", "💾 25 GB SSD", "🛡️ DDoS Protection"],
            planKey: "pro",
            planLabel: isEs ? "Invader — $8.00/mes" : "Invader — $8.00/mo"
        };
    }

    const titleEl = document.getElementById('wizardResultTitle');
    const ramEl = document.getElementById('wizardResultRam');
    const reasonEl = document.getElementById('wizardResultReason');
    const featuresEl = document.getElementById('wizardResultFeatures');
    const btnEl = document.getElementById('wizardResultBtn');

    if (titleEl) titleEl.textContent = rec.title;
    if (ramEl) ramEl.textContent = rec.ram;
    if (reasonEl) reasonEl.textContent = rec.reason;
    if (featuresEl) {
        featuresEl.innerHTML = rec.features.map(f => `<span class="wizard-result-pill">${f}</span>`).join('');
    }
    if (btnEl) {
        btnEl.onclick = () => openLocationModal('minecraft', rec.planKey, rec.planLabel);
    }
}

/* ─── VIP HELP MODAL ────────────────────────────────────────── */
function openVipModal() {
    const modal = document.getElementById('vipModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeVipModal() {
    const modal = document.getElementById('vipModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ─── CLOSE MODAL ON OVERLAY CLICK ────────────────────────── */
function initModalClose() {
    const overlay = document.getElementById('locationModal');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeLocationModal();
        });
    }
    const vipOverlay = document.getElementById('vipModal');
    if (vipOverlay) {
        vipOverlay.addEventListener('click', (e) => {
            if (e.target === vipOverlay) closeVipModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLocationModal();
            closeVipModal();
        }
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

    document.querySelectorAll('.feature-card, .plan-card, .wizard-container').forEach(el => {
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
