// === Акордеон ===
class Accordion {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector('summary');
        this.list = el.querySelector('.list');
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;

        this.summary.addEventListener('click', (e) => this.onClick(e));
    }

    onClick(e) {
        e.preventDefault();
        this.el.style.overflow = 'hidden';

        if (this.isClosing || !this.el.open) {
            this.open();
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        this.isClosing = true;
        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        if (this.animation) this.animation.cancel();

        this.animation = this.el.animate({ height: [startHeight, endHeight] }, { duration: 400, easing: 'ease-out' });

        this.animation.onfinish = () => this.onAnimationFinish(false);
        this.animation.oncancel = () => this.isClosing = false;
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpanding = true;
        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight + this.list.offsetHeight}px`;

        if (this.animation) this.animation.cancel();

        this.animation = this.el.animate({ height: [startHeight, endHeight] }, { duration: 400, easing: 'ease-out' });

        this.animation.onfinish = () => this.onAnimationFinish(true);
        this.animation.oncancel = () => this.isExpanding = false;
    }

    onAnimationFinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.el.style.height = this.el.style.overflow = '';
    }
}

document.querySelectorAll('details').forEach((el) => new Accordion(el));

// === Анімація появи елементів ===
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);

// === Обробка форми ===
const form = document.querySelector('#form');
const launchBtn = document.querySelector('#launch-btn');
const goToFormButton = document.querySelector('#go-to-form-btn');
const userEmailField = document.querySelector('#user-email');

if (goToFormButton) {
    goToFormButton.addEventListener('click', function (e) {
        e.preventDefault();
        form.scrollIntoView();
    });
}

function clearFormFields() {
    const modalFields = form.querySelectorAll('input');

    modalFields.forEach(field => {
        field.value = '';
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    launchBtn.setAttribute('disabled', true);

    if (userEmailField?.value?.length > 30) {
        return;
    }

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            showGooseAnim();

            setTimeout(() => {
                // launchBtn.removeAttribute('disabled')
                // clearFormFields();
            }, 2000);
        })
        .catch((error) => console.log('Sending form failed'));
});

// === Логіка для сайдбару ===
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.createElement("button");
    const overlay = document.createElement("div");

    toggleButton.textContent = "☰";
    toggleButton.classList.add("sidebar-toggle");
    document.body.appendChild(toggleButton);

    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");

        if (sidebar.classList.contains("active")) {
            // Забороняємо прокрутку основного контенту, але дозволяємо прокрутку в сайдбарі
            document.body.style.overflow = "hidden";
            sidebar.style.overflowY = "auto";
            sidebar.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            // Відновлюємо прокрутку основного контенту
            document.body.style.overflow = "";
            sidebar.style.overflowY = "hidden";
        }
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");

        // Відновлюємо прокрутку основного контенту
        document.body.style.overflow = "";
        sidebar.style.overflowY = "hidden";
    });
});
