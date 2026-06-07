(function initTheme() {
    const saved = localStorage.getItem('lingua-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('.theme-icon');

        function updateIcon() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            icon.textContent = isDark ? '○' : '◐';
            themeToggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        }

        updateIcon();

        themeToggle.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('lingua-theme', next);
            updateIcon();
        });
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                hamburger.classList.remove('open');
            });
        });

        document.addEventListener('click', function (e) {
            if (!navbar.contains(e.target)) {
                navLinks.classList.remove('open');
                hamburger.classList.remove('open');
            }
        });
    }

    /* ---- FAQ ACCORDION (contact page) ---- */
    document.querySelectorAll('.faq-q').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const answer  = btn.nextElementSibling;
            const isOpen  = answer.classList.contains('open');
            document.querySelectorAll('.faq-a').forEach(function (a) {
                a.classList.remove('open');
            });
            document.querySelectorAll('.faq-q').forEach(function (b) {
                b.setAttribute('aria-expanded', 'false');
            });

            /* Open clicked if it was closed */
            if (!isOpen) {
                answer.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

});

function showToast(message, type) {
    type = type || 'info';

    const container = document.getElementById('toastContainer');
    if (!container) return;

    const icons = { success: '✓', error: '✕', info: 'ℹ' };

    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.innerHTML =
        '<span class="toast-icon">' + icons[type] + '</span>' +
        '<span class="toast-msg">' + escapeHtml(message) + '</span>';

    container.appendChild(toast);

    setTimeout(function () {
        toast.classList.add('hide');
        toast.addEventListener('animationend', function () {
            toast.remove();
        });
    }, 3000);
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
