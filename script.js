// OMO Website Script

const OMO_TRANSLATIONS = {
    home: {
        es: {
            "meta.title": "OMO — Pocket Tools para una vida más consciente",
            "hero.title": "Pocket Tools<br>para una vida más consciente",
            "hero.sub": "Un ecosistema de micro-apps diseñadas para acompañarte en la vida diaria. Sin ruido ni distracciones. On My Own.",
            "hero.cta": "Explorar OMO",
            "ecosystem.eyebrow": "El ecosistema OMO",
            "ecosystem.heading": "uxOS — la forma más natural<br>de interactuar con la tecnología",
            "ecosystem.sub": "Interfaces limpias, funciones esenciales, cero ruido. Autonomía sin fricción.",
            "pillar.min.title": "Minimalismo",
            "pillar.min.desc": "Sin ruido, sin distracciones",
            "pillar.priv.title": "Privacidad",
            "pillar.priv.desc": "Sin tracking. Tus datos, con claridad.",
            "pillar.pres.title": "Presencia",
            "pillar.pres.desc": "Tecnología que te devuelve al momento",
            "support.cta": "Apoya el proyecto",
            "catalog.eyebrow": "Pocket Tools",
            "catalog.heading": "Las herramientas del ecosistema",
            "catalog.sub": "Micro-apps diseñadas para acompañarte en la vida diaria. Sin ruido ni distracciones.",
            "omoni.label": "Pocket Tool Nº 1",
            "status.progress": "En progreso",
            "status.coming": "Próximamente",
            "omoni.desc": "Consciencia financiera en tu bolsillo. ¿Cuánto te cuesta vivir hoy?",
            "learn.more": "Conocer más",
            "chip.inventory": "Inventario",
            "chip.expenses": "Gastos",
            "chip.habits": "Hábitos",
            "ob.label": "Pocket Tool Nº 2",
            "ob.desc": "Respiración consciente. Pausas que cambian el estado.",
            "chip.breath": "Respiración",
            "chip.calm": "Calma",
            "oh.label": "Pocket Tool Nº 3",
            "oh.desc": "Hábitos sin presión. Pequeños gestos, grandes cambios.",
            "chip.progress": "Progreso",
            "od.label": "Pocket Tool Nº 4",
            "od.desc": "Diario de consciencia. Tu espacio más íntimo y privado.",
            "chip.diary": "Diario",
            "chip.privacy": "Privacidad",
            "os.label": "Pocket Tool Nº 5",
            "os.desc": "Espacios de calma. El antídoto al ruido digital.",
            "chip.silence": "Silencio",
            "chip.focus": "Foco",
            "osc.label": "Pocket Tool Nº 6",
            "osc.desc": "Red social sin likes. Conexión real, sin métricas de validación.",
            "chip.social": "Social",
            "chip.minimal": "Minimal",
            "story.eyebrow": "Quién está detrás",
            "story.heading": "El origen de OMO",
            "story.excerpt": "De un cuarto con una computadora vieja a un Mac comprado con dinero de jardín. La historia de por qué OMO existe.",
            "story.cta": "Leer mi historia",
            "footer.story": "Mi Historia",
            "footer.glossary": "Glosario",
            "footer.terms": "Términos",
            "footer.privacy": "Privacidad",
            "footer.support": "Donaciones"
        },
        en: {
            "meta.title": "OMO — Pocket Tools for a More Conscious Life",
            "hero.title": "Pocket Tools<br>for a more conscious life",
            "hero.sub": "A micro-app ecosystem designed to accompany daily life. No noise. No distractions. On My Own.",
            "hero.cta": "Explore OMO",
            "ecosystem.eyebrow": "The OMO ecosystem",
            "ecosystem.heading": "uxOS — the most natural<br>way to interact with technology",
            "ecosystem.sub": "Clean interfaces, essential functions, zero noise. Autonomy without friction.",
            "pillar.min.title": "Minimalism",
            "pillar.min.desc": "No noise, no distractions",
            "pillar.priv.title": "Privacy",
            "pillar.priv.desc": "No tracking. Your data, with clarity.",
            "pillar.pres.title": "Presence",
            "pillar.pres.desc": "Technology that brings you back to the moment",
            "support.cta": "Support the project",
            "catalog.eyebrow": "Pocket Tools",
            "catalog.heading": "Tools in the ecosystem",
            "catalog.sub": "Micro-apps designed to accompany daily life. No noise. No distractions.",
            "omoni.label": "Pocket Tool No. 1",
            "status.progress": "In progress",
            "status.coming": "Coming soon",
            "omoni.desc": "Financial awareness in your pocket. How much does it cost you to live today?",
            "learn.more": "Learn more",
            "chip.inventory": "Inventory",
            "chip.expenses": "Expenses",
            "chip.habits": "Habits",
            "ob.label": "Pocket Tool No. 2",
            "ob.desc": "Conscious breathing. Pauses that change your state.",
            "chip.breath": "Breathing",
            "chip.calm": "Calm",
            "oh.label": "Pocket Tool No. 3",
            "oh.desc": "Habits without pressure. Small gestures, big change.",
            "chip.progress": "Progress",
            "od.label": "Pocket Tool No. 4",
            "od.desc": "A consciousness journal. Your most intimate private space.",
            "chip.diary": "Journal",
            "chip.privacy": "Privacy",
            "os.label": "Pocket Tool No. 5",
            "os.desc": "Spaces of calm. The antidote to digital noise.",
            "chip.silence": "Silence",
            "chip.focus": "Focus",
            "osc.label": "Pocket Tool No. 6",
            "osc.desc": "A social network without likes. Real connection, no validation metrics.",
            "chip.social": "Social",
            "chip.minimal": "Minimal",
            "story.eyebrow": "Who is behind it",
            "story.heading": "The origin of OMO",
            "story.excerpt": "From a room with an old computer to a Mac bought with gardening money. The story of why OMO exists.",
            "story.cta": "Read my story",
            "footer.story": "My Story",
            "footer.glossary": "Glossary",
            "footer.terms": "Terms",
            "footer.privacy": "Privacy",
            "footer.support": "Donations"
        }
    },
    terms: {
        es: {
            "meta.title": "Términos de Uso — OMO",
            "legal.label": "Legal",
            "legal.title": "Términos de Uso",
            "legal.sub": "Estos términos regulan el acceso y uso de las experiencias digitales publicadas bajo el ecosistema OMO, incluyendo OMONI y futuras Pocket Tools.",
            "legal.updated": "Última actualización: 25 de mayo de 2026",
            "legal.domain": "Dominio: omopockettool.com",
            "terms.s1.title": "1. Sobre OMO",
            "terms.s1.p1": "OMO es un ecosistema de Pocket Tools diseñado para acompañar a las personas con más claridad, presencia y autonomía. OMONI es la primera herramienta del catálogo y forma parte de esta visión.",
            "terms.s1.p2": "Al usar este sitio web o cualquiera de las apps presentes o futuras del catálogo OMO, aceptas estos términos en la medida aplicable al producto o servicio que estés utilizando.",
            "terms.s2.title": "2. Uso permitido",
            "terms.s2.p1": "Puedes usar OMO y OMONI para fines personales y legítimos. No está permitido utilizar nuestros productos o contenidos para actividades ilícitas, fraudulentas o que dañen el funcionamiento normal del servicio.",
            "terms.s2.li1": "No debes intentar vulnerar la seguridad del sitio o de la app.",
            "terms.s2.li2": "No debes copiar, distribuir o explotar comercialmente el contenido de OMO sin autorización previa.",
            "terms.s2.li3": "No debes utilizar la marca OMO o OMONI de manera que genere confusión sobre su origen.",
            "terms.s3.title": "3. Naturaleza de OMONI",
            "terms.s3.p1": "OMONI es una herramienta de consciencia financiera y organización personal. No constituye asesoramiento financiero, legal, fiscal ni contable.",
            "terms.s3.p2": "Las decisiones que tomes a partir de la información introducida en la app son responsabilidad exclusiva del usuario.",
            "terms.s4.title": "4. Cuenta, identidad y datos introducidos",
            "terms.s4.p1": "En la versión actual de OMONI, el usuario puede introducir información básica como su nombre para personalizar la experiencia inicial. La app puede funcionar con datos mantenidos localmente en el dispositivo.",
            "terms.s4.p2": "Si en el futuro se activan funciones opcionales como sincronización en la nube, newsletter o servicios conectados, se solicitará un consentimiento específico antes de usar esos datos con esa finalidad.",
            "terms.s5.title": "5. Propiedad intelectual",
            "terms.s5.p1": "La marca OMO, OMONI, sus diseños, textos, elementos visuales, conceptos de producto y estructura de experiencia forman parte del trabajo original de su creador y están protegidos por las leyes aplicables de propiedad intelectual.",
            "terms.s5.p2": "No se concede ningún derecho de uso más allá del necesario para el acceso personal al sitio o la app.",
            "terms.s6.title": "6. Disponibilidad y cambios",
            "terms.s6.p1": "OMO puede actualizar, modificar, pausar o retirar partes del sitio, del contenido o de las aplicaciones en cualquier momento, especialmente durante fases tempranas del producto.",
            "terms.s6.p2": "No garantizamos que todas las funciones estén disponibles de forma ininterrumpida ni que el sitio o las apps estén libres de errores en todo momento.",
            "terms.s6.p3": "Estas herramientas están hechas por humanos para humanos. Eso significa que pueden existir fallos, comportamientos no previstos o aspectos mejorables, y nuestro compromiso es corregirlos a la mayor brevedad razonable.",
            "terms.s7.title": "7. Limitación de responsabilidad",
            "terms.s7.p1": "En la medida permitida por la ley, OMO no será responsable por daños indirectos, incidentales o derivados del uso o imposibilidad de uso del sitio o de la app.",
            "terms.s7.p2": "Esto incluye pérdida de datos, interrupciones del servicio o decisiones personales tomadas a partir de la información introducida por el usuario.",
            "terms.s7.p3": "Para ayudar a reducir ese riesgo, OMONI incluye funciones de backup, exportación e importación desde Ajustes. Recomendamos utilizarlas especialmente antes de reemplazar datos o realizar cambios importantes.",
            "terms.s8.title": "8. Cambios en estos términos",
            "terms.s8.p1": "Podemos actualizar estos términos para reflejar cambios en el producto, en la web o en nuestras prácticas. La versión vigente será siempre la publicada en esta página.",
            "terms.s9.title": "9. Contacto",
            "terms.s9.p1": "Si tienes dudas sobre estos términos, puedes escribirnos.",
            "terms.s9.emailLabel": "Email:",
            "terms.s9.note": "Al contactarnos sobre asuntos legales, intenta incluir el producto o página a la que haces referencia.",
            "footer.story": "Mi Historia",
            "footer.glossary": "Glosario",
            "footer.terms": "Términos",
            "footer.privacy": "Privacidad",
            "footer.support": "Donaciones"
        },
        en: {
            "meta.title": "Terms of Use — OMO",
            "legal.label": "Legal",
            "legal.title": "Terms of Use",
            "legal.sub": "These terms govern access to and use of digital experiences published under the OMO ecosystem, including OMONI and future Pocket Tools.",
            "legal.updated": "Last updated: May 25, 2026",
            "legal.domain": "Domain: omopockettool.com",
            "terms.s1.title": "1. About OMO",
            "terms.s1.p1": "OMO is a Pocket Tools ecosystem designed to accompany people with more clarity, presence, and autonomy. OMONI is the first tool in the catalog and part of that vision.",
            "terms.s1.p2": "By using this website or any present or future app in the OMO catalog, you accept these terms to the extent they apply to the product or service you are using.",
            "terms.s2.title": "2. Permitted use",
            "terms.s2.p1": "You may use OMO and OMONI for personal and legitimate purposes. It is not permitted to use our products or content for unlawful, fraudulent, or harmful activities that interfere with the normal operation of the service.",
            "terms.s2.li1": "You must not attempt to breach the security of the website or the app.",
            "terms.s2.li2": "You must not copy, distribute, or commercially exploit OMO content without prior authorization.",
            "terms.s2.li3": "You must not use the OMO or OMONI brand in a way that creates confusion about its origin.",
            "terms.s3.title": "3. Nature of OMONI",
            "terms.s3.p1": "OMONI is a financial awareness and personal organization tool. It does not constitute financial, legal, tax, or accounting advice.",
            "terms.s3.p2": "Any decisions you make based on information entered in the app are the sole responsibility of the user.",
            "terms.s4.title": "4. Identity and data entered",
            "terms.s4.p1": "In the current version of OMONI, users may enter basic information such as their name to personalize the initial experience. The app may operate with data stored locally on the device.",
            "terms.s4.p2": "If optional features such as cloud sync, newsletters, or connected services are enabled in the future, specific consent will be requested before using that data for those purposes.",
            "terms.s5.title": "5. Intellectual property",
            "terms.s5.p1": "The OMO and OMONI brand, their designs, texts, visual elements, product concepts, and experience structure are part of the creator's original work and are protected by applicable intellectual property laws.",
            "terms.s5.p2": "No usage rights are granted beyond what is necessary for personal access to the website or app.",
            "terms.s6.title": "6. Availability and changes",
            "terms.s6.p1": "OMO may update, modify, pause, or withdraw parts of the website, content, or applications at any time, especially during early product phases.",
            "terms.s6.p2": "We do not guarantee uninterrupted availability of all features or that the website or apps will be free of errors at all times.",
            "terms.s6.p3": "These tools are made by humans for humans. That means bugs, unexpected behaviors, or areas for improvement may exist, and our commitment is to correct them as quickly as reasonably possible.",
            "terms.s7.title": "7. Limitation of liability",
            "terms.s7.p1": "To the extent permitted by law, OMO will not be liable for indirect, incidental, or consequential damages arising from the use or inability to use the website or app.",
            "terms.s7.p2": "This includes data loss, service interruptions, or personal decisions made based on information entered by the user.",
            "terms.s7.p3": "To help reduce that risk, OMONI includes backup, export, and import features in Settings. We recommend using them especially before replacing data or making important changes.",
            "terms.s8.title": "8. Changes to these terms",
            "terms.s8.p1": "We may update these terms to reflect changes to the product, website, or our practices. The current version will always be the one published on this page.",
            "terms.s9.title": "9. Contact",
            "terms.s9.p1": "If you have questions about these terms, you can write to us.",
            "terms.s9.emailLabel": "Email:",
            "terms.s9.note": "When contacting us about legal matters, try to include the product or page you are referring to.",
            "footer.story": "My Story",
            "footer.glossary": "Glossary",
            "footer.terms": "Terms",
            "footer.privacy": "Privacy",
            "footer.support": "Donations"
        }
    },
    privacy: {
        es: {
            "meta.title": "Política de Privacidad — OMO",
            "legal.label": "Legal",
            "legal.title": "Política de Privacidad",
            "legal.sub": "Esta política explica qué información puede tratar OMO, cómo se usa y qué decisiones tomamos para proteger una experiencia más privada y consciente.",
            "legal.updated": "Última actualización: 25 de mayo de 2026",
            "legal.domain": "Sitio oficial: omopockettool.com",
            "privacy.s1.title": "1. Enfoque general",
            "privacy.s1.p1": "OMO nace con una filosofía clara: crear tecnología más humana, con menos ruido y más control para el usuario. Por eso buscamos minimizar la recogida de datos y evitar prácticas invasivas siempre que sea posible.",
            "privacy.s2.title": "2. Información que podemos tratar",
            "privacy.s2.p1": "Dependiendo del producto o página que utilices, OMO puede tratar información como:",
            "privacy.s2.li1": "Datos que introduces tú mismo, como nombre u otra información necesaria para personalizar la experiencia.",
            "privacy.s2.li2": "Mensajes que nos envías al contactarnos por email.",
            "privacy.s2.li3": "Datos técnicos mínimos necesarios para el funcionamiento básico del sitio o de la app.",
            "privacy.s2.p2": "En la versión actual de OMONI, los datos del usuario pueden mantenerse localmente en el dispositivo y no se utilizan para tracking publicitario.",
            "privacy.s3.title": "3. Qué no hacemos",
            "privacy.s3.li1": "No vendemos tus datos personales.",
            "privacy.s3.li2": "No usamos tracking publicitario agresivo como base del producto.",
            "privacy.s3.li3": "No activamos funciones futuras de nube o newsletter sin una acción y consentimiento claros por parte del usuario.",
            "privacy.s4.title": "4. Para qué usamos la información",
            "privacy.s4.p1": "La información que el usuario comparte puede utilizarse para:",
            "privacy.s4.li1": "Permitir el funcionamiento básico de la experiencia.",
            "privacy.s4.li2": "Responder a mensajes o solicitudes de soporte.",
            "privacy.s4.li3": "Mejorar el producto y corregir errores.",
            "privacy.s4.li4": "Ofrecer futuras funciones opcionales solo si el usuario decide activarlas.",
            "privacy.s5.title": "5. Conservación de datos",
            "privacy.s5.p1": "Conservamos la información solo durante el tiempo necesario para la finalidad correspondiente o mientras exista una obligación legal aplicable. Si ciertos datos permanecen localmente en tu dispositivo, su gestión dependerá del uso que hagas de la app y de las opciones de exportación, backup o eliminación disponibles.",
            "privacy.s6.title": "6. Compartición con terceros",
            "privacy.s6.p1": "OMO puede usar servicios técnicos necesarios para operar determinadas partes del sitio o del ecosistema. Cuando eso ocurra, intentaremos limitar al máximo los datos compartidos y elegir soluciones razonables para un producto pequeño e independiente.",
            "privacy.s6.p2": "No compartimos información personal con terceros para fines publicitarios propios de esos terceros.",
            "privacy.s7.title": "7. Tus derechos",
            "privacy.s7.p1": "Si nos has compartido datos personales por canales que gestionamos directamente, puedes solicitar información, rectificación o eliminación, dentro de lo permitido por la ley y por la viabilidad técnica del producto en cada etapa.",
            "privacy.s7.contactLabel": "Contacto:",
            "privacy.s7.note": "Si escribes por privacidad, indica el contexto y el producto al que se refiere tu solicitud.",
            "privacy.s8.title": "8. Cambios en esta política",
            "privacy.s8.p1": "Podemos actualizar esta política para reflejar cambios en el sitio, en las apps o en nuestras prácticas. La versión vigente será siempre la publicada en esta página.",
            "footer.story": "Mi Historia",
            "footer.glossary": "Glosario",
            "footer.terms": "Términos",
            "footer.privacy": "Privacidad",
            "footer.support": "Donaciones"
        },
        en: {
            "meta.title": "Privacy Policy — OMO",
            "legal.label": "Legal",
            "legal.title": "Privacy Policy",
            "legal.sub": "This policy explains what information OMO may process, how it is used, and the decisions we make to protect a more private, conscious experience.",
            "legal.updated": "Last updated: May 25, 2026",
            "legal.domain": "Official site: omopockettool.com",
            "privacy.s1.title": "1. General approach",
            "privacy.s1.p1": "OMO was born from a clear philosophy: creating more human technology, with less noise and more user control. That is why we aim to minimize data collection and avoid invasive practices whenever possible.",
            "privacy.s2.title": "2. Information we may process",
            "privacy.s2.p1": "Depending on the product or page you use, OMO may process information such as:",
            "privacy.s2.li1": "Data you enter yourself, such as your name or other information needed to personalize the experience.",
            "privacy.s2.li2": "Messages you send us when contacting us by email.",
            "privacy.s2.li3": "Minimum technical data needed for the basic functioning of the website or app.",
            "privacy.s2.p2": "In the current version of OMONI, user data may remain locally on the device and is not used for advertising tracking.",
            "privacy.s3.title": "3. What we do not do",
            "privacy.s3.li1": "We do not sell your personal data.",
            "privacy.s3.li2": "We do not rely on aggressive advertising tracking as the foundation of the product.",
            "privacy.s3.li3": "We do not enable future cloud or newsletter features without a clear user action and consent.",
            "privacy.s4.title": "4. What we use information for",
            "privacy.s4.p1": "Information shared by the user may be used to:",
            "privacy.s4.li1": "Enable the basic functioning of the experience.",
            "privacy.s4.li2": "Respond to messages or support requests.",
            "privacy.s4.li3": "Improve the product and fix errors.",
            "privacy.s4.li4": "Offer future optional features only if the user chooses to activate them.",
            "privacy.s5.title": "5. Data retention",
            "privacy.s5.p1": "We retain information only for as long as necessary for the relevant purpose or while a legal obligation applies. If certain data remains locally on your device, its management will depend on how you use the app and on the export, backup, or deletion options available.",
            "privacy.s6.title": "6. Sharing with third parties",
            "privacy.s6.p1": "OMO may use technical services necessary to operate certain parts of the website or ecosystem. When that happens, we will try to minimize shared data and choose reasonable solutions for a small independent product.",
            "privacy.s6.p2": "We do not share personal information with third parties for those third parties' own advertising purposes.",
            "privacy.s7.title": "7. Your rights",
            "privacy.s7.p1": "If you have shared personal data with us through channels we directly manage, you may request information, correction, or deletion, within what is allowed by law and by the technical viability of the product at each stage.",
            "privacy.s7.contactLabel": "Contact:",
            "privacy.s7.note": "If you write about privacy, please indicate the context and product your request refers to.",
            "privacy.s8.title": "8. Changes to this policy",
            "privacy.s8.p1": "We may update this policy to reflect changes in the website, apps, or our practices. The current version will always be the one published on this page.",
            "footer.story": "My Story",
            "footer.glossary": "Glossary",
            "footer.terms": "Terms",
            "footer.privacy": "Privacy",
            "footer.support": "Donations"
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializePreferences();
    bindControls();
    addNavbarScrollBehavior();
    applyLanguage();
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initializePreferences() {
    const storedTheme = localStorage.getItem('omo-theme');
    const storedLanguage = localStorage.getItem('omo-language');
    const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    applyTheme(storedTheme || (preferredDark ? 'dark' : 'light'));
    applyLanguage(storedLanguage || document.documentElement.lang || 'es');
}

function bindControls() {
    document.querySelectorAll('[data-theme-toggle]').forEach((toggle) => {
        toggle.addEventListener('click', function() {
            const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    });

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
        button.addEventListener('click', function() {
            applyLanguage(button.dataset.langSwitch);
        });
    });
}

function applyTheme(theme) {
    const finalTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = finalTheme;
    localStorage.setItem('omo-theme', finalTheme);

    document.querySelectorAll('[data-theme-toggle]').forEach((toggle) => {
        toggle.dataset.themeState = finalTheme;
        const icon = toggle.querySelector('.theme-toggle-icon');
        if (icon) {
            icon.textContent = finalTheme === 'dark' ? '☀' : '☾';
        }
    });
}

function applyLanguage(language) {
    const finalLanguage = language === 'en' ? 'en' : 'es';
    const page = document.body.dataset.page;
    const pageTranslations = OMO_TRANSLATIONS[page]?.[finalLanguage];

    document.documentElement.lang = finalLanguage;
    localStorage.setItem('omo-language', finalLanguage);

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.langSwitch === finalLanguage);
    });

    if (!pageTranslations) return;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (pageTranslations[key]) {
            element.textContent = pageTranslations[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const key = element.dataset.i18nHtml;
        if (pageTranslations[key]) {
            element.innerHTML = pageTranslations[key];
        }
    });
}

function addNavbarScrollBehavior() {
    const navbar = document.querySelector('.navbar, .detail-navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navbar.classList.contains('navbar')) {
            navbar.style.transform = scrollTop <= 50 ? 'translateY(-100%)' : 'translateY(0)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    });
}
