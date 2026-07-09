// === Локалізація (EN / UK) ===
// Англійська береться напряму з HTML (це дефолт), тут зберігаються лише
// українські переклади. Вибір мови зберігається в localStorage.
(function () {
    'use strict';

    var STORAGE_KEY = 'cv-lang';
    var DEFAULT_LANG = 'en';

    var UK = {
        // --- UI ---
        'ui.projectsOpen': 'Опенсорс-проєкти',
        'ui.projectsClose': 'Опенсорс-проєкти...',
        'ui.workOpen': 'Досвід роботи↓',
        'ui.workClose': 'Досвід роботи...',
        'ui.techSkills': 'Технічні навички',
        'ui.softSkills': 'Гнучкі навички',
        'ui.contacts': 'Контакти',

        // --- Форма ---
        'form.title': 'Напишіть повідомлення, і я відповім.',
        'form.emailPh': 'Ел. пошта',
        'form.messagePh': 'Повідомлення',
        'form.submit': 'Надіслати',
        'form.success': 'Ваше повідомлення надіслано. Дякую!',
        'form.error': 'Щось пішло не так. Спробуйте ще раз.',

        // --- Про мене ---
        'about.position': 'Full-Stack / Vibe Coding розробник',
        'about.name': 'Владислав Пушин',
        'about.desc': 'Python Full-Stack розробник / AI Engineer із 2+ роками комерційного досвіду, спеціалізуюся на AI-інтегрованих продуктах для e-commerce. Як єдиний розробник у команді з 5 осіб я спроєктував, побудував і вивів у продакшн 11 проєктів під ключ — від архітектури до CI/CD. Працюю на всьому стеку (FastAPI + React/TypeScript) з фокусом на інтеграцію LLM, AI-assisted розробку та чистий, покритий тестами код.',

        // --- Гнучкі навички ---
        'soft.list': `
                    <li class="soft-skills-item"><span class="soft-skills-text">Володіння задачею від і до</span></li>
                    <li class="soft-skills-item"><span class="soft-skills-text">Самоорганізація</span></li>
                    <li class="soft-skills-item"><span class="soft-skills-text">Розв’язання проблем</span></li>
                    <li class="soft-skills-item"><span class="soft-skills-text">Швидке навчання</span></li>
                    <li class="soft-skills-item"><span class="soft-skills-text">Чітка комунікація</span></li>
                    <li class="soft-skills-item"><span class="soft-skills-text">Командна робота</span></li>
                    <li class="soft-skills-item"><span class="soft-skills-text">Аджайл / Скрам</span></li>`,

        // --- Освіта ---
        'education.title': 'Освіта↓',
        'edu1.uni': 'Херсонський національний технічний університет',
        'edu1.pos': 'Інженерія програмного забезпечення',
        'edu1.period': 'Вересень 2020 — Червень 2024 <span class="line">|</span> Україна',
        'edu1.l1': 'Перший рівень (бакалавр)',
        'edu1.l2': 'Спеціальність 121 «Інженерія програмного забезпечення»',
        'edu2.uni': 'Херсонський національний технічний університет',
        'edu2.pos': 'Інженерія програмного забезпечення',
        'edu2.period': 'Вересень 2024 — Грудень 2025 <span class="line">|</span> Україна',
        'edu2.l1': 'Другий рівень (магістр)',
        'edu2.l2': 'Спеціальність 121 «Інженерія програмного забезпечення»',

        // --- Досвід роботи (увесь список) ---
        'work.list': `
                        <div class="reveal company">
                            <h4 class="work-position">Python Full-Stack розробник / AI Engineer <span class="organization">Amzprofessional</span>
                            </h4>
                            <p class="period">Серпень 2025 — Серпень 2026 <span class="line">|</span> Віддалено</p>
                            <ul class="work-list">
                                <li class="work-list-item">Єдиний розробник 11 продакшн-проєктів у Amazon e-commerce команді з 5 осіб — повний цикл від архітектури до CI/CD та деплою в продакшн (50K+ рядків бекенду, 30K+ фронтенду).</li>
                                <li class="work-list-item">Побудував єдину внутрішню платформу, що інтегрує 5 AI-інструментів, зі SSO-авторизацією (Keycloak), історією, експортом, адмін-панеллю та i18n — FastAPI + React, Docker, HashiCorp Nomad, GitLab CI/CD.</li>
                                <li class="work-list-item">Розробив багатоетапні AI-пайплайни генерації контенту для лістингів Amazon (заголовки, буллети, описи, ключові слова) з NLP, OpenAI-ембедінгами, cosine-релевантністю та LLM API (OpenAI / Claude / Gemini через OpenRouter).</li>
                                <li class="work-list-item">Створив великі веб-скрапери, що обробляють тисячі сторінок Amazon (curl_cffi, BeautifulSoup, ротація проксі, browser impersonation), з асинхронним ETL у PostgreSQL.</li>
                                <li class="work-list-item">Реалізував сервіс транскрибації аудіо/відео з real-time діаризацією спікерів (PyTorch / faster-whisper, WebSockets) у веб- та десктоп-версіях.</li>
                                <li class="work-list-item">Побудував систему аналітики товарів і повернень з TF-IDF кластеризацією відгуків, скорингом та AI-рекомендаціями, а також KPI-систему бонусів із формулами оцінки, дашбордами та Excel-експортом.</li>
                                <li class="work-list-item">Писав чистий, покритий тестами код за принципами Clean Architecture — pytest (883+ тестів), Vitest і Playwright E2E з відео-доказами.</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">QA Automation Engineer <span class="organization">DataArt</span>
                            </h4>
                            <p class="period">Січень 2025 — Лютий 2025 <span class="line">|</span> Віддалено</p>
                            <ul class="work-list">
                                <li class="work-list-item">Пройшов практику від університету з автоматизованого тестування вебсайтів на C#.</li>
                                <li class="work-list-item">Розробив власний фреймворк для автоматизації тестів, що полегшує їх написання, і опублікував його в публічному репозиторії (<a href="https://github.com/HOKER1597/Framework" target="_blank" class="work-project">github.com/Framework</a>).</li>
                                <li class="work-list-item">Отримав найвищий бал за практику.</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Python-розробник (курсова робота) <span class="organization">Херсонський національний технічний університет</span>
                            </h4>
                            <p class="period">Жовтень 2024 — Грудень 2024 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив основний функціонал банківських операцій, зокрема обробку транзакцій та управління рахунками.</li>
                                <li class="work-list-item">Реалізував функції розрахунку відсоткових ставок і оцінки ризиків.</li>
                                <li class="work-list-item">Створив користувацький інтерфейс для взаємодії з банківськими сервісами.</li>
                                <li class="work-list-item">Створив користувацький інтерфейс для взаємодії з банківськими сервісами (<a href="#23" class="work-project">проєкт №23</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Arduino-розробник <span class="organization">Херсонський національний технічний університет</span>
                            </h4>
                            <p class="period">Березень 2024 — Травень 2024 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив основну логіку автоматизації розумного будинку.</li>
                                <li class="work-list-item">Реалізував керування пристроями та моніторинг їх стану.</li>
                                <li class="work-list-item">Оптимізував код для ефективної взаємодії між компонентами.</li>
                                <li class="work-list-item">Відрефакторив проєкт для кращої читабельності та підтримуваності (<a href="#22" class="work-project">проєкт №22</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">C-розробник (дипломна робота) <span class="organization">Херсонський національний технічний університет</span>
                            </h4>
                            <p class="period">Березень 2024 — Травень 2024 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив логіку настільної гри Go.</li>
                                <li class="work-list-item">Створив користувацький інтерфейс для ігрового процесу.</li>
                                <li class="work-list-item">Реалізував правила захоплення каменів і визначення території.</li>
                                <li class="work-list-item">Оптимізував код для ефективної валідації ходів та ігрового процесу (<a href="#21" class="work-project">проєкт №21</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Розробник <span class="organization">UvoCorp</span>
                            </h4>
                            <p class="period">Березень 2023 — Серпень 2024 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Додавав коментарі до кожного C#-коду, запускаючи й описуючи кожну програму (<a href="#20" class="work-project">проєкт №20</a>).</li>
                                <li class="work-list-item">Розробив невеликий калькулятор температур, що обчислює середню, мінімальну та максимальну температуру, а також кількість значень понад 50 (<a href="#19" class="work-project">проєкт №19</a>).</li>
                                <li class="work-list-item">Розробив застосунок Flood it, у якому генерується випадкове поле з різними кольорами й потрібно зафарбувати все поле в один колір (<a href="#18" class="work-project">проєкт №18</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Android-розробник (курсова робота) <span class="organization">Херсонський національний технічний університет</span>
                            </h4>
                            <p class="period">Жовтень 2023 — Грудень 2023 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив логіку гри хрестики-нулики.</li>
                                <li class="work-list-item">Створив користувацький інтерфейс для Android-застосунку.</li>
                                <li class="work-list-item">Реалізував ігрову механіку для режимів «гравець проти гравця» та «гравець проти AI».</li>
                                <li class="work-list-item">Оптимізував код для плавної роботи на мобільних пристроях (<a href="#17" class="work-project">проєкт №17</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Arduino-розробник (курсова робота) <span class="organization">Херсонський національний технічний університет</span>
                            </h4>
                            <p class="period">Лютий 2023 — Травень 2023 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив логіку автоматизації розумної теплиці.</li>
                                <li class="work-list-item">Реалізував обробку даних із сенсорів та керування мікрокліматом.</li>
                                <li class="work-list-item">Створив користувацький інтерфейс для моніторингу й налаштування умов у теплиці.</li>
                                <li class="work-list-item">Оптимізував код для ефективної обробки даних і реакції системи в реальному часі (<a href="#16" class="work-project">проєкт №16</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Курси <span class="organization">GO-IT</span>
                            </h4>
                            <p class="period">Березень 2023 — Травень 2023 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив Telegram-бота Banderogus із кнопками для взаємодії (<a href="#15" class="work-project">проєкт №15</a>).</li>
                                <li class="work-list-item">Розробив дизайн і сайт із робочою кнопкою переходу та запуском гусака, а також полями для надсилання заявок на пошту (<a href="#14" class="work-project">проєкт №14</a>).</li>
                                <li class="work-list-item">Розробив гру про бандерогуса, де потрібно керувати гусаком, ловити ящики й уникати ракет (<a href="#13" class="work-project">проєкт №13</a>).</li>
                                <li class="work-list-item">Розробив дизайн мобільного застосунку, де ти обираєш, куди запустити бандерогуся палити: москва, рубль, чик-чик, бункер (<a href="#12" class="work-project">проєкт №12</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Arduino-розробник (курсова робота) <span class="organization">Херсонський національний технічний університет</span>
                            </h4>
                            <p class="period">Жовтень 2022 — Грудень 2022 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив логіку автоматизації розумного будинку.</li>
                                <li class="work-list-item">Реалізував керування пристроями та моніторинг їх стану.</li>
                                <li class="work-list-item">Створив користувацький інтерфейс для керування пристроями розумного будинку.</li>
                                <li class="work-list-item">Оптимізував код для ефективної роботи та масштабованості системи (<a href="#11" class="work-project">проєкт №11</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Front-End розробник (практика) <span class="organization">Wezom</span>
                            </h4>
                            <p class="period">09 лютого 2022 — 20 лютого 2022 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Зібрав усі іконки в SVG-спрайт.</li>
                                <li class="work-list-item">Дотримався відхилень у вертикальних відступах між елементами не більше ніж 5px (Pixel Perfect).</li>
                                <li class="work-list-item">Виконав адаптацію на розсуд виконавця, але з акцентом на UX.</li>
                                <li class="work-list-item">Стилізував усі посилання з псевдокласом :hover; кнопки стилізовані з псевдокласами :hover та :active.</li>
                                <li class="work-list-item">Результат завдання опубліковано в особистому публічному репозиторії + посилання для демонстрації (<a href="#10" class="work-project">проєкт №10</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Unity-розробник (під час курсів) <span class="organization">Unity</span>
                            </h4>
                            <p class="period">01 лютого 2022 — 08 лютого 2022 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розроблено гру, де потрібно зібрати всі монети кулькою (<a href="#9" class="work-project">проєкт №9</a>).</li>
                                <li class="work-list-item">Розроблено гру, де можна керувати автомобілем і збивати ящики (<a href="#8" class="work-project">проєкт №8</a>).</li>
                                <li class="work-list-item">Розроблено гру, де потрібно уникати тварин, що біжать на персонажа (<a href="#7" class="work-project">проєкт №7</a>).</li>
                                <li class="work-list-item">Розроблено гру, де потрібно перестрибувати перешкоди (<a href="#6" class="work-project">проєкт №6</a>).</li>
                                <li class="work-list-item">Розроблено гру, де потрібно кидати кульки з платформи (<a href="#5" class="work-project">проєкт №5</a>).</li>
                                <li class="work-list-item">Розроблено гру, де потрібно клікати по обʼєктах, що вилітають знизу (<a href="#4" class="work-project">проєкт №4</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Java-розробник (курсова робота) <span class="organization">Херсонський національний технічний університет</span></h4>
                            <p class="period">Листопад 2021 — Грудень 2021 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив логіку гри хрестики-нулики.</li>
                                <li class="work-list-item">Створив консольний користувацький інтерфейс.</li>
                                <li class="work-list-item">Реалізував ігрову механіку для режиму на двох гравців.</li>
                                <li class="work-list-item">Відрефакторив код для кращої читабельності та підтримуваності (<a href="#3" class="work-project">проєкт №3</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">Front-End розробник <span class="organization">Херсонський національний технічний університет</span></h4>
                            <p class="period">Жовтень 2021 — Грудень 2021 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив багатосторінковий вебсайт.</li>
                                <li class="work-list-item">Розробив функціональне меню.</li>
                                <li class="work-list-item">Розробив каталог із кількома книгами.</li>
                                <li class="work-list-item">Додав кілька книг та їх описи до згаданого каталогу (<a href="#2" class="work-project">проєкт №2</a>).</li>
                            </ul>
                        </div>
                        <div class="reveal company">
                            <h4 class="work-position">C++ розробник (курсова робота) <span class="organization">Херсонський національний технічний університет</span></h4>
                            <p class="period">Листопад 2020 — Грудень 2020 <span class="line">|</span> Україна</p>
                            <ul class="work-list">
                                <li class="work-list-item">Розробив логіку гри хрестики-нулики.</li>
                                <li class="work-list-item">Створив консольний користувацький інтерфейс.</li>
                                <li class="work-list-item">Реалізував ігрову механіку для режиму на двох гравців.</li>
                                <li class="work-list-item">Оптимізував код для ефективного виконання та читабельності (<a href="#1" class="work-project">проєкт №1</a>).</li>
                            </ul>
                        </div>`
    };

    var lang = DEFAULT_LANG;
    try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'uk' || saved === 'en') lang = saved;
    } catch (e) { /* localStorage недоступний */ }

    var originals = new Map();

    function captureOriginals() {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var o = originals.get(el) || {};
            o.html = el.innerHTML;
            originals.set(el, o);
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
            var o = originals.get(el) || {};
            o.ph = el.getAttribute('placeholder') || '';
            originals.set(el, o);
        });
        document.querySelectorAll('[data-i18n-open]').forEach(function (el) {
            var o = originals.get(el) || {};
            o.open = el.getAttribute('data-open') || '';
            o.close = el.getAttribute('data-close') || '';
            originals.set(el, o);
        });
    }

    function pick(key, fallback) {
        return (lang === 'uk' && UK[key] != null) ? UK[key] : fallback;
    }

    function apply(l) {
        lang = l;
        document.documentElement.setAttribute('lang', l);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var o = originals.get(el) || {};
            el.innerHTML = pick(key, o.html != null ? o.html : el.innerHTML);
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-ph');
            var o = originals.get(el) || {};
            el.setAttribute('placeholder', pick(key, o.ph || ''));
        });
        document.querySelectorAll('[data-i18n-open]').forEach(function (el) {
            var o = originals.get(el) || {};
            el.setAttribute('data-open', pick(el.getAttribute('data-i18n-open'), o.open || ''));
            el.setAttribute('data-close', pick(el.getAttribute('data-i18n-close'), o.close || ''));
        });

        // Замінені блоки (напр. досвід роботи) втрачають клас active — повертаємо видимість
        document.querySelectorAll('.reveal').forEach(function (el) {
            el.classList.add('active');
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === l);
        });
    }

    // Доступ для script.js (повідомлення форми)
    window.i18nT = function (key, enFallback) { return pick(key, enFallback); };
    window.i18nLang = function () { return lang; };

    function init() {
        captureOriginals();
        apply(lang);
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var l = btn.getAttribute('data-lang');
                try { localStorage.setItem(STORAGE_KEY, l); } catch (e) { /* ignore */ }
                apply(l);
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
