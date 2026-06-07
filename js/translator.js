'use strict';

/* 1. LANGUAGE DATA */
var LANGUAGES = [
    { code: 'auto', name: 'Auto-Detect',   flag: '🌐' },
    { code: 'af',   name: 'Afrikaans',     flag: '🇿🇦' },
    { code: 'sq',   name: 'Albanian',      flag: '🇦🇱' },
    { code: 'ar',   name: 'Arabic',        flag: '🇸🇦' },
    { code: 'az',   name: 'Azerbaijani',   flag: '🇦🇿' },
    { code: 'be',   name: 'Belarusian',    flag: '🇧🇾' },
    { code: 'bn',   name: 'Bengali',       flag: '🇧🇩' },
    { code: 'bg',   name: 'Bulgarian',     flag: '🇧🇬' },
    { code: 'ca',   name: 'Catalan',       flag: '🏴' },
    { code: 'zh',   name: 'Chinese',       flag: '🇨🇳' },
    { code: 'hr',   name: 'Croatian',      flag: '🇭🇷' },
    { code: 'cs',   name: 'Czech',         flag: '🇨🇿' },
    { code: 'da',   name: 'Danish',        flag: '🇩🇰' },
    { code: 'nl',   name: 'Dutch',         flag: '🇳🇱' },
    { code: 'en',   name: 'English',       flag: '🇬🇧' },
    { code: 'et',   name: 'Estonian',      flag: '🇪🇪' },
    { code: 'fi',   name: 'Finnish',       flag: '🇫🇮' },
    { code: 'fr',   name: 'French',        flag: '🇫🇷' },
    { code: 'gl',   name: 'Galician',      flag: '🏴' },
    { code: 'de',   name: 'German',        flag: '🇩🇪' },
    { code: 'el',   name: 'Greek',         flag: '🇬🇷' },
    { code: 'gu',   name: 'Gujarati',      flag: '🇮🇳' },
    { code: 'he',   name: 'Hebrew',        flag: '🇮🇱' },
    { code: 'hi',   name: 'Hindi',         flag: '🇮🇳' },
    { code: 'hu',   name: 'Hungarian',     flag: '🇭🇺' },
    { code: 'is',   name: 'Icelandic',     flag: '🇮🇸' },
    { code: 'id',   name: 'Indonesian',    flag: '🇮🇩' },
    { code: 'ga',   name: 'Irish',         flag: '🇮🇪' },
    { code: 'it',   name: 'Italian',       flag: '🇮🇹' },
    { code: 'ja',   name: 'Japanese',      flag: '🇯🇵' },
    { code: 'kn',   name: 'Kannada',       flag: '🇮🇳' },
    { code: 'ko',   name: 'Korean',        flag: '🇰🇷' },
    { code: 'lv',   name: 'Latvian',       flag: '🇱🇻' },
    { code: 'lt',   name: 'Lithuanian',    flag: '🇱🇹' },
    { code: 'mk',   name: 'Macedonian',    flag: '🇲🇰' },
    { code: 'ms',   name: 'Malay',         flag: '🇲🇾' },
    { code: 'ml',   name: 'Malayalam',     flag: '🇮🇳' },
    { code: 'mt',   name: 'Maltese',       flag: '🇲🇹' },
    { code: 'mr',   name: 'Marathi',       flag: '🇮🇳' },
    { code: 'no',   name: 'Norwegian',     flag: '🇳🇴' },
    { code: 'fa',   name: 'Persian',       flag: '🇮🇷' },
    { code: 'pl',   name: 'Polish',        flag: '🇵🇱' },
    { code: 'pt',   name: 'Portuguese',    flag: '🇵🇹' },
    { code: 'ro',   name: 'Romanian',      flag: '🇷🇴' },
    { code: 'ru',   name: 'Russian',       flag: '🇷🇺' },
    { code: 'sr',   name: 'Serbian',       flag: '🇷🇸' },
    { code: 'sk',   name: 'Slovak',        flag: '🇸🇰' },
    { code: 'sl',   name: 'Slovenian',     flag: '🇸🇮' },
    { code: 'es',   name: 'Spanish',       flag: '🇪🇸' },
    { code: 'sw',   name: 'Swahili',       flag: '🇰🇪' },
    { code: 'sv',   name: 'Swedish',       flag: '🇸🇪' },
    { code: 'tl',   name: 'Tagalog',       flag: '🇵🇭' },
    { code: 'ta',   name: 'Tamil',         flag: '🇮🇳' },
    { code: 'te',   name: 'Telugu',        flag: '🇮🇳' },
    { code: 'th',   name: 'Thai',          flag: '🇹🇭' },
    { code: 'tr',   name: 'Turkish',       flag: '🇹🇷' },
    { code: 'uk',   name: 'Ukrainian',     flag: '🇺🇦' },
    { code: 'ur',   name: 'Urdu',          flag: '🇵🇰' },
    { code: 'vi',   name: 'Vietnamese',    flag: '🇻🇳' },
    { code: 'cy',   name: 'Welsh',         flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' }
];

/** Quick-access language pills shown below the translator */
var QUICK_LANGS = [
    { code: 'es', name: 'Spanish',    flag: '🇪🇸' },
    { code: 'fr', name: 'French',     flag: '🇫🇷' },
    { code: 'de', name: 'German',     flag: '🇩🇪' },
    { code: 'ja', name: 'Japanese',   flag: '🇯🇵' },
    { code: 'zh', name: 'Chinese',    flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic',     flag: '🇸🇦' },
    { code: 'hi', name: 'Hindi',      flag: '🇮🇳' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian',    flag: '🇷🇺' },
    { code: 'ko', name: 'Korean',     flag: '🇰🇷' },
    { code: 'it', name: 'Italian',    flag: '🇮🇹' },
    { code: 'tr', name: 'Turkish',    flag: '🇹🇷' }
];

/* ============================================================
   2. API FUNCTIONS
   Both are 100% free, no API key, work from browsers.
   ============================================================ */

/**
 * PRIMARY: MyMemory Translation API
 * Docs: https://mymemory.translated.net/doc/spec.php
 * Limit: 500 words/day (anonymous), 10k with email param
 * Returns: { translation, detectedLang }
 */
function translateWithMyMemory(text, srcLang, tgtLang) {
    /* MyMemory uses "en|es" format. "auto" → "autodetect" */
    var pair = (srcLang === 'auto' ? 'autodetect' : srcLang) + '|' + tgtLang;
    var url  = 'https://api.mymemory.translated.net/get'
             + '?q='        + encodeURIComponent(text)
             + '&langpair=' + encodeURIComponent(pair)
             + '&de=user@linguaai.app'; /* email gives 10k/day instead of 500 */

    return fetch(url)
        .then(function (res) {
            if (!res.ok) {
                throw new Error('MyMemory responded with HTTP ' + res.status);
            }
            return res.json();
        })
        .then(function (data) {
            /* responseStatus 200 = OK, 206 = partial match */
            if (data.responseStatus !== 200 && data.responseStatus !== 206) {
                throw new Error(data.responseMessage || 'MyMemory error ' + data.responseStatus);
            }

            var translated = data.responseData && data.responseData.translatedText;
            if (!translated) {
                throw new Error('MyMemory returned empty translation');
            }

            /* MyMemory returns "MYMEMORY WARNING" string when limit is hit */
            if (translated.toUpperCase().indexOf('MYMEMORY WARNING') === 0) {
                throw new Error('MyMemory daily limit reached — switching to backup API');
            }

            /* Detect language returned in matches[0].source */
            var detectedLang = null;
            if (srcLang === 'auto' && data.matches && data.matches.length > 0) {
                var raw = data.matches[0].source;
                if (raw && raw !== 'autodetect') {
                    /* MyMemory returns "en-GB", we only need "en" */
                    detectedLang = raw.split('-')[0].toLowerCase();
                }
            }

            return {
                translation:  translated,
                detectedLang: detectedLang
            };
        });
}

/**
 * FALLBACK: Google Translate (unofficial client=gtx endpoint)
 * This is the same endpoint used by many open-source tools.
 * No API key required. Works reliably from browsers.
 * Returns: { translation, detectedLang }
 */
function translateWithGoogle(text, srcLang, tgtLang) {
    var sl  = srcLang === 'auto' ? 'auto' : srcLang;
    var url = 'https://translate.googleapis.com/translate_a/single'
            + '?client=gtx'
            + '&sl='  + encodeURIComponent(sl)
            + '&tl='  + encodeURIComponent(tgtLang)
            + '&dt=t'
            + '&dt=ld'   /* language detection info */
            + '&q='   + encodeURIComponent(text);

    return fetch(url)
        .then(function (res) {
            if (!res.ok) {
                throw new Error('Google Translate responded with HTTP ' + res.status);
            }
            return res.json();
        })
        .then(function (data) {
            /*
             * Google response structure (array):
             * data[0] = array of translated segments: [[translated, source, ...], ...]
             * data[2] = detected source language string
             */
            if (!Array.isArray(data) || !Array.isArray(data[0])) {
                throw new Error('Unexpected response from Google Translate');
            }

            /* Concatenate all translated segments */
            var translated = data[0]
                .filter(function (seg) { return seg && seg[0]; })
                .map(function   (seg) { return seg[0]; })
                .join('');

            if (!translated) {
                throw new Error('Google Translate returned empty translation');
            }

            /* Detected language is at data[2] */
            var detectedLang = null;
            if (srcLang === 'auto' && data[2]) {
                detectedLang = String(data[2]).split('-')[0].toLowerCase();
            }

            return {
                translation:  translated,
                detectedLang: detectedLang
            };
        });
}

/**
 * Main translate function — tries MyMemory first, falls back to Google.
 * Returns a Promise resolving to { translation, detectedLang, source }
 */
function translate(text, srcLang, tgtLang) {
    return translateWithMyMemory(text, srcLang, tgtLang)
        .then(function (result) {
            result.apiSource = 'MyMemory';
            return result;
        })
        .catch(function (primaryErr) {
            console.warn('[LinguaAI] MyMemory failed:', primaryErr.message, '— trying Google Translate…');

            return translateWithGoogle(text, srcLang, tgtLang)
                .then(function (result) {
                    result.apiSource = 'Google Translate';
                    return result;
                })
                .catch(function (fallbackErr) {
                    /* Both APIs failed — throw a user-friendly error */
                    throw new Error(
                        'Translation failed. Both APIs are unavailable right now. '
                        + 'Please check your internet connection and try again.'
                    );
                });
        });
}

/* ============================================================
   3. APP STATE
   ============================================================ */
var appState = {
    currentTranslation: '',   /* Last successful translated text */
    ttsActive:          false, /* Is TTS currently speaking? */
    isLoading:          false, /* Is a translation in progress? */
    history:            []     /* Array of past translation objects */
};

/* ============================================================
   4. DOM ELEMENT CACHE
   ============================================================ */
var el = {};

/* ============================================================
   5. INITIALISATION — runs after DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

    /* --- Cache all DOM elements --- */
    el.srcLang          = document.getElementById('srcLang');
    el.tgtLang          = document.getElementById('tgtLang');
    el.srcText          = document.getElementById('srcText');
    el.outputHint       = document.getElementById('outputHint');
    el.outputResult     = document.getElementById('outputResult');
    el.charCount        = document.getElementById('charCount');
    el.wordCount        = document.getElementById('wordCount');
    el.srcLangName      = document.getElementById('srcLangName');
    el.tgtLangName      = document.getElementById('tgtLangName');
    el.transSpeed       = document.getElementById('transSpeed');
    el.detectedBadge    = document.getElementById('detectedBadge');
    el.translateBtn     = document.getElementById('translateBtn');
    el.btnTranslateMobile = document.getElementById('btnTranslateMobile');
    el.fabArrow         = document.getElementById('fabArrow');
    el.fabSpin          = document.getElementById('fabSpin');
    el.mobileBtnIcon    = document.getElementById('mobileBtnIcon');
    el.mobileBtnSpinner = document.getElementById('mobileBtnSpinner');
    el.mobileBtnText    = document.getElementById('mobileBtnText');
    el.swapBtn          = document.getElementById('swapBtn');
    el.srcClearBtn      = document.getElementById('srcClearBtn');
    el.srcCopyBtn       = document.getElementById('srcCopyBtn');
    el.srcSpeakBtn      = document.getElementById('srcSpeakBtn');
    el.tgtCopyBtn       = document.getElementById('tgtCopyBtn');
    el.ttsBtn           = document.getElementById('ttsBtn');
    el.shareBtn         = document.getElementById('shareBtn');
    el.statusBanner     = document.getElementById('statusBanner');
    el.statusBannerIcon = document.getElementById('statusBannerIcon');
    el.statusBannerText = document.getElementById('statusBannerText');
    el.statusBannerClose = document.getElementById('statusBannerClose');
    el.quickPills       = document.getElementById('quickPills');
    el.historyGrid      = document.getElementById('historyGrid');
    el.historyEmpty     = document.getElementById('historyEmpty');
    el.btnClearHistory  = document.getElementById('btnClearHistory');
    el.navbar           = document.getElementById('navbar');
    el.themeBtn         = document.getElementById('themeBtn');
    el.iconSun          = document.getElementById('iconSun');
    el.iconMoon         = document.getElementById('iconMoon');
    el.hamburger        = document.getElementById('hamburger');
    el.navLinks         = document.getElementById('navLinks');

    /* --- Boot sequence --- */
    initTheme();
    initNavbar();
    populateLanguageSelects();
    buildQuickPills();
    loadHistoryFromStorage();
    bindAllEvents();
});

/* ============================================================
   6. THEME
   ============================================================ */
function initTheme() {
    var saved = localStorage.getItem('lingua-theme') || 'light';
    applyTheme(saved);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lingua-theme', theme);

    /* Toggle sun/moon icons */
    if (el.iconSun && el.iconMoon) {
        el.iconSun.style.display  = theme === 'dark' ? 'none'  : 'block';
        el.iconMoon.style.display = theme === 'dark' ? 'block' : 'none';
    }
}

/* ============================================================
   7. NAVBAR
   ============================================================ */
function initNavbar() {
    /* Scroll shadow */
    window.addEventListener('scroll', function () {
        if (el.navbar) {
            el.navbar.classList.toggle('scrolled', window.scrollY > 8);
        }
    }, { passive: true });
}

/* ============================================================
   8. POPULATE <select> ELEMENTS
   ============================================================ */
function populateLanguageSelects() {
    /* Source select: includes Auto-Detect */
    el.srcLang.innerHTML = '';
    LANGUAGES.forEach(function (lang) {
        var opt       = document.createElement('option');
        opt.value     = lang.code;
        opt.textContent = (lang.code === 'auto')
            ? lang.flag + ' Auto-Detect'
            : lang.flag + ' ' + lang.name;
        el.srcLang.appendChild(opt);
    });

    /* Target select: excludes Auto-Detect */
    el.tgtLang.innerHTML = '';
    LANGUAGES.filter(function (l) { return l.code !== 'auto'; })
             .forEach(function (lang) {
        var opt       = document.createElement('option');
        opt.value     = lang.code;
        opt.textContent = lang.flag + ' ' + lang.name;
        el.tgtLang.appendChild(opt);
    });

    /* Restore last-used preferences */
    var savedSrc = localStorage.getItem('lingua-src') || 'auto';
    var savedTgt = localStorage.getItem('lingua-tgt') || 'es';

    el.srcLang.value = savedSrc;
    el.tgtLang.value = savedTgt;

    updateLangLabels();
}

/* ============================================================
   9. QUICK LANGUAGE PILLS
   ============================================================ */
function buildQuickPills() {
    el.quickPills.innerHTML = '';

    QUICK_LANGS.forEach(function (lang) {
        var btn = document.createElement('button');
        btn.className   = 'quick-pill';
        btn.setAttribute('data-code', lang.code);
        btn.setAttribute('aria-label', 'Translate to ' + lang.name);
        btn.innerHTML   = '<span class="pill-flag">' + lang.flag + '</span>' + lang.name;

        if (el.tgtLang.value === lang.code) {
            btn.classList.add('is-active');
        }

        btn.addEventListener('click', function () {
            el.tgtLang.value = lang.code;
            localStorage.setItem('lingua-tgt', lang.code);
            updateLangLabels();
            refreshQuickPillActive();

            /* If there is source text, immediately translate */
            if (el.srcText.value.trim()) {
                runTranslation();
            }
        });

        el.quickPills.appendChild(btn);
    });
}

function refreshQuickPillActive() {
    var pills = el.quickPills.querySelectorAll('.quick-pill');
    pills.forEach(function (btn) {
        btn.classList.toggle('is-active', btn.getAttribute('data-code') === el.tgtLang.value);
    });
}

/* ============================================================
   10. EVENT BINDING
   ============================================================ */
function bindAllEvents() {

    /* ---- Theme button ---- */
    el.themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    /* ---- Hamburger ---- */
    el.hamburger.addEventListener('click', function () {
        var open = el.navLinks.classList.toggle('is-open');
        el.hamburger.classList.toggle('is-open', open);
        el.hamburger.setAttribute('aria-expanded', open);
    });

    /* Close mobile nav on link click */
    el.navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            el.navLinks.classList.remove('is-open');
            el.hamburger.classList.remove('is-open');
        });
    });

    /* ---- Source textarea ---- */
    el.srcText.addEventListener('input', function () {
        /* Update character counter */
        var len = el.srcText.value.length;
        el.charCount.textContent = len + ' / 5000';

        /* Clear output when source is emptied */
        if (!el.srcText.value.trim()) {
            clearOutput();
            hideDetectedBadge();
        }
    });

    /* Ctrl/Cmd + Enter → translate */
    el.srcText.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runTranslation();
        }
    });

    /* ---- Translate buttons ---- */
    el.translateBtn.addEventListener('click', runTranslation);
    el.btnTranslateMobile.addEventListener('click', runTranslation);

    /* ---- Swap languages ---- */
    el.swapBtn.addEventListener('click', swapLanguages);

    /* ---- Clear source ---- */
    el.srcClearBtn.addEventListener('click', function () {
        el.srcText.value = '';
        el.charCount.textContent = '0 / 5000';
        clearOutput();
        hideDetectedBadge();
        hideBanner();
        el.srcText.focus();
    });

    /* ---- Copy source text ---- */
    el.srcCopyBtn.addEventListener('click', function () {
        var text = el.srcText.value.trim();
        if (!text) {
            showToast('Nothing to copy.', 'error');
            return;
        }
        copyText(text, 'Source text copied!');
    });

    /* ---- Speak source text ---- */
    el.srcSpeakBtn.addEventListener('click', function () {
        var text = el.srcText.value.trim();
        if (!text) {
            showToast('Enter some text to speak.', 'info');
            return;
        }
        var lang = el.srcLang.value === 'auto' ? 'en' : el.srcLang.value;
        speakText(text, lang);
    });

    /* ---- Copy translation ---- */
    el.tgtCopyBtn.addEventListener('click', function () {
        if (!appState.currentTranslation) {
            showToast('Nothing to copy yet.', 'error');
            return;
        }
        copyText(appState.currentTranslation, 'Translation copied!');
    });

    /* ---- TTS for translation ---- */
    el.ttsBtn.addEventListener('click', toggleTTS);

    /* ---- Share translation ---- */
    el.shareBtn.addEventListener('click', shareTranslation);

    /* ---- Language selects ---- */
    el.srcLang.addEventListener('change', function () {
        localStorage.setItem('lingua-src', el.srcLang.value);
        updateLangLabels();
        hideDetectedBadge();
    });

    el.tgtLang.addEventListener('change', function () {
        localStorage.setItem('lingua-tgt', el.tgtLang.value);
        updateLangLabels();
        refreshQuickPillActive();
    });

    /* ---- Banner close ---- */
    el.statusBannerClose.addEventListener('click', hideBanner);

    /* ---- Clear history ---- */
    el.btnClearHistory.addEventListener('click', function () {
        appState.history = [];
        saveHistoryToStorage();
        renderHistory();
        showToast('History cleared.', 'info');
    });
}

/* ============================================================
   11. MAIN TRANSLATE FLOW
   ============================================================ */
function runTranslation() {
    var text   = el.srcText.value.trim();
    var srcLang = el.srcLang.value;
    var tgtLang = el.tgtLang.value;

    /* Validation */
    if (!text) {
        showBanner('Please type or paste some text to translate.', 'error');
        el.srcText.focus();
        return;
    }

    if (srcLang !== 'auto' && srcLang === tgtLang) {
        showBanner('Source and target languages are the same — please choose different ones.', 'error');
        return;
    }

    /* Start loading state */
    setLoadingState(true);
    hideBanner();
    hideDetectedBadge();

    var startTime = Date.now();

    /* Call API */
    translate(text, srcLang, tgtLang)
        .then(function (result) {
            var elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

            /* Display translation */
            setOutputText(result.translation);

            /* Show speed */
            el.transSpeed.textContent = elapsed + 's via ' + result.apiSource;

            /* Show detected language badge */
            if (result.detectedLang) {
                var detectedLangObj = LANGUAGES.find(function (l) {
                    return l.code === result.detectedLang;
                });
                if (detectedLangObj) {
                    showDetectedBadge(detectedLangObj.flag + ' ' + detectedLangObj.name + ' detected');
                }
            }

            /* Save to history */
            var effectiveSrc = result.detectedLang || (srcLang === 'auto' ? 'en' : srcLang);
            pushToHistory(
                text,
                result.translation,
                effectiveSrc,
                tgtLang,
                getLangName(effectiveSrc),
                getLangName(tgtLang)
            );

            showToast('Translated in ' + elapsed + 's ✓', 'success');
        })
        .catch(function (err) {
            var msg = err.message || 'Translation failed. Please try again.';
            showBanner(msg, 'error');
            showToast(msg, 'error');
        })
        .finally(function () {
            setLoadingState(false);
        });
}

/* ============================================================
   12. SWAP LANGUAGES
   ============================================================ */
function swapLanguages() {
    var curSrc = el.srcLang.value;
    var curTgt = el.tgtLang.value;

    if (curSrc === 'auto' && !appState.currentTranslation) {
        showToast('Select a specific source language to swap.', 'info');
        return;
    }

    /* Determine new values */
    var newSrc = curTgt;                           /* old target becomes source */
    var newTgt = curSrc === 'auto' ? 'en' : curSrc; /* old source becomes target */

    /* Set selects (guard against missing options) */
    var srcHas = Array.from(el.srcLang.options).some(function (o) { return o.value === newSrc; });
    var tgtHas = Array.from(el.tgtLang.options).some(function (o) { return o.value === newTgt; });

    if (srcHas) el.srcLang.value = newSrc;
    if (tgtHas) el.tgtLang.value = newTgt;

    /* Swap text box contents */
    var oldSource = el.srcText.value.trim();
    var oldTarget = appState.currentTranslation;

    if (oldTarget) {
        el.srcText.value = oldTarget;
        el.charCount.textContent = oldTarget.length + ' / 5000';
        setOutputText(oldSource);
    }

    /* Persist */
    localStorage.setItem('lingua-src', el.srcLang.value);
    localStorage.setItem('lingua-tgt', el.tgtLang.value);

    updateLangLabels();
    refreshQuickPillActive();
    hideDetectedBadge();

    showToast('Languages swapped!', 'info');
}

/* ============================================================
   13. TEXT-TO-SPEECH
   ============================================================ */
function toggleTTS() {
    if (!appState.currentTranslation) {
        showToast('Nothing to speak yet — translate first.', 'info');
        return;
    }

    if (!window.speechSynthesis) {
        showToast('Text-to-speech is not supported in your browser.', 'error');
        return;
    }

    if (appState.ttsActive) {
        /* Stop playback */
        speechSynthesis.cancel();
        appState.ttsActive = false;
        updateTTSButton(false);
        return;
    }

    speakText(appState.currentTranslation, el.tgtLang.value);
}

function speakText(text, langCode) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel(); /* stop any ongoing speech */

    var utt  = new SpeechSynthesisUtterance(text);
    utt.lang = langCode || 'en';

    utt.onstart = function () {
        appState.ttsActive = true;
        updateTTSButton(true);
    };

    utt.onend = function () {
        appState.ttsActive = false;
        updateTTSButton(false);
    };

    utt.onerror = function (e) {
        appState.ttsActive = false;
        updateTTSButton(false);
        /* Ignore 'interrupted' error — happens when user clicks stop */
        if (e.error !== 'interrupted') {
            showToast('Speech failed for this language.', 'error');
        }
    };

    speechSynthesis.speak(utt);
}

function updateTTSButton(playing) {
    var playIcon = el.ttsBtn.querySelector('.tts-play-icon');
    var stopIcon = el.ttsBtn.querySelector('.tts-stop-icon');
    var label    = el.ttsBtn.querySelector('.tts-label');

    if (playIcon) playIcon.style.display = playing ? 'none' : '';
    if (stopIcon) stopIcon.style.display = playing ? ''     : 'none';
    if (label)    label.textContent      = playing ? 'Stop' : 'Listen';

    el.ttsBtn.classList.toggle('is-playing', playing);
    el.ttsBtn.title = playing ? 'Stop speaking' : 'Listen to translation';
}

/* ============================================================
   14. COPY TO CLIPBOARD
   ============================================================ */
function copyText(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(function ()  { showToast(successMsg, 'success'); })
            .catch(function () { legacyCopy(text, successMsg); });
    } else {
        legacyCopy(text, successMsg);
    }
}

function legacyCopy(text, successMsg) {
    var ta       = document.createElement('textarea');
    ta.value     = text;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;top:0;left:0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
        document.execCommand('copy');
        showToast(successMsg, 'success');
    } catch (e) {
        showToast('Copy failed — please select and copy manually.', 'error');
    }
    document.body.removeChild(ta);
}

/* ============================================================
   15. SHARE
   ============================================================ */
function shareTranslation() {
    if (!appState.currentTranslation) {
        showToast('Nothing to share yet.', 'info');
        return;
    }

    var srcName    = getLangName(el.srcLang.value);
    var tgtName    = getLangName(el.tgtLang.value);
    var shareText  = '🌐 Translated with LinguaAI\n'
                   + srcName + ' → ' + tgtName + '\n\n'
                   + el.srcText.value.trim()
                   + '\n↓\n'
                   + appState.currentTranslation;

    if (navigator.share) {
        navigator.share({ title: 'LinguaAI Translation', text: shareText })
            .catch(function () { /* user dismissed share sheet */ });
    } else {
        /* Fallback: copy the formatted text */
        copyText(shareText, 'Copied to clipboard for sharing!');
    }
}

/* ============================================================
   16. TRANSLATION HISTORY
   ============================================================ */
function pushToHistory(srcText, tgtText, srcCode, tgtCode, srcName, tgtName) {
    /* Remove duplicate of same src+tgt pair */
    appState.history = appState.history.filter(function (h) {
        return !(h.srcText === srcText && h.tgtCode === tgtCode);
    });

    /* Prepend newest */
    appState.history.unshift({
        id:      Date.now(),
        srcText: srcText,
        tgtText: tgtText,
        srcCode: srcCode,
        tgtCode: tgtCode,
        srcName: srcName,
        tgtName: tgtName,
        time:    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    /* Limit to 25 most recent */
    if (appState.history.length > 25) {
        appState.history = appState.history.slice(0, 25);
    }

    saveHistoryToStorage();
    renderHistory();
}

function saveHistoryToStorage() {
    try {
        localStorage.setItem('lingua-history', JSON.stringify(appState.history));
    } catch (e) {
        /* Storage full — keep only 5 latest and retry */
        appState.history = appState.history.slice(0, 5);
        try {
            localStorage.setItem('lingua-history', JSON.stringify(appState.history));
        } catch (e2) { /* give up gracefully */ }
    }
}

function loadHistoryFromStorage() {
    try {
        var raw = localStorage.getItem('lingua-history');
        if (raw) {
            appState.history = JSON.parse(raw);
        }
    } catch (e) {
        appState.history = [];
    }
    renderHistory();
}

function renderHistory() {
    /* Remove existing cards (leave the empty-state element) */
    el.historyGrid.querySelectorAll('.history-card').forEach(function (c) { c.remove(); });

    if (appState.history.length === 0) {
        el.historyEmpty.style.display = 'flex';
        return;
    }

    el.historyEmpty.style.display = 'none';

    appState.history.forEach(function (item) {
        var card = document.createElement('div');
        card.className = 'history-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label',
            'Restore: ' + htmlEsc(item.srcName) + ' → ' + htmlEsc(item.tgtName));

        card.innerHTML =
            '<div class="hc-langs">'
          +   '<span>' + htmlEsc(item.srcName) + '</span>'
          +   ' → '
          +   '<span>' + htmlEsc(item.tgtName) + '</span>'
          + '</div>'
          + '<div class="hc-source">'  + htmlEsc(item.srcText) + '</div>'
          + '<div class="hc-target">'  + htmlEsc(item.tgtText) + '</div>'
          + '<div class="hc-time">'    + htmlEsc(item.time)    + '</div>';

        function restoreEntry() {
            /* Restore source & target text */
            el.srcText.value = item.srcText;
            el.charCount.textContent = item.srcText.length + ' / 5000';

            /* Restore language selections */
            var srcOption = Array.from(el.srcLang.options)
                .find(function (o) { return o.value === item.srcCode; });
            if (srcOption) el.srcLang.value = item.srcCode;

            var tgtOption = Array.from(el.tgtLang.options)
                .find(function (o) { return o.value === item.tgtCode; });
            if (tgtOption) el.tgtLang.value = item.tgtCode;

            /* Persist selection */
            localStorage.setItem('lingua-src', el.srcLang.value);
            localStorage.setItem('lingua-tgt', el.tgtLang.value);

            updateLangLabels();
            refreshQuickPillActive();
            setOutputText(item.tgtText);

            /* Smooth scroll to translator */
            document.getElementById('transCard').scrollIntoView({
                behavior: 'smooth', block: 'start'
            });

            showToast('Translation restored.', 'info');
        }

        card.addEventListener('click', restoreEntry);
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                restoreEntry();
            }
        });

        el.historyGrid.appendChild(card);
    });
}

/* ============================================================
   17. UI STATE HELPERS
   ============================================================ */

/** Show translated text in the output panel */
function setOutputText(text) {
    appState.currentTranslation = text;

    if (text) {
        el.outputHint.style.display   = 'none';
        el.outputResult.style.display = '';
        el.outputResult.textContent   = text;

        /* Word count */
        var words = text.trim().split(/\s+/).filter(Boolean).length;
        el.wordCount.textContent = words + (words === 1 ? ' word' : ' words');
    } else {
        clearOutput();
    }
}

/** Reset the output panel to its empty state */
function clearOutput() {
    appState.currentTranslation   = '';
    el.outputHint.style.display   = '';
    el.outputResult.style.display = 'none';
    el.outputResult.textContent   = '';
    el.wordCount.textContent      = '';
    el.transSpeed.textContent     = '';
}

/** Toggle loading state on the translate buttons */
function setLoadingState(on) {
    appState.isLoading = on;

    /* FAB button */
    el.translateBtn.disabled = on;
    el.fabArrow.style.display = on ? 'none' : '';
    el.fabSpin.style.display  = on ? ''     : 'none';

    /* Mobile button */
    el.btnTranslateMobile.disabled = on;
    el.mobileBtnIcon.style.display    = on ? 'none' : '';
    el.mobileBtnSpinner.style.display = on ? ''     : 'none';
    el.mobileBtnText.textContent      = on ? 'Translating…' : 'Translate';

    /* Swap button */
    el.swapBtn.disabled = on;
}

/** Show detected language badge above source select */
function showDetectedBadge(text) {
    el.detectedBadge.textContent = text;
}

/** Clear detected language badge */
function hideDetectedBadge() {
    el.detectedBadge.textContent = '';
}

/** Update the small lang-name labels above each panel */
function updateLangLabels() {
    var srcName = getLangName(el.srcLang.value);
    var tgtName = getLangName(el.tgtLang.value);

    el.srcLangName.textContent = (srcName === 'Auto-Detect') ? 'Source Text' : srcName;
    el.tgtLangName.textContent = tgtName;
}

/** Show the status/error banner inside the card */
function showBanner(message, type) {
    el.statusBanner.style.display = 'flex';
    el.statusBanner.className     = 'status-banner' + (type === 'success' ? ' is-success' : '');
    el.statusBannerIcon.textContent = type === 'success' ? '✓' : '⚠';
    el.statusBannerText.textContent = message;
}

/** Hide the status banner */
function hideBanner() {
    el.statusBanner.style.display = 'none';
}

/* ============================================================
   18. TOAST NOTIFICATIONS
   ============================================================ */
var TOAST_ICONS = { success: '✓', error: '✕', info: 'ℹ' };

function showToast(message, type) {
    type = type || 'info';

    var stack = document.getElementById('toastStack');
    if (!stack) return;

    var toast = document.createElement('div');
    toast.className = 'toast toast--' + type;
    toast.innerHTML =
        '<span class="toast-icon">' + (TOAST_ICONS[type] || 'ℹ') + '</span>'
      + '<span class="toast-msg">'  + htmlEsc(message) + '</span>';

    stack.appendChild(toast);

    /* Auto-dismiss after 3 seconds */
    setTimeout(function () {
        toast.classList.add('is-hiding');
        toast.addEventListener('animationend', function () {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, { once: true });
    }, 3000);
}

/* ============================================================
   19. UTILITY FUNCTIONS
   ============================================================ */

/** Get human-readable language name from code */
function getLangName(code) {
    if (!code || code === 'auto') return 'Auto-Detect';
    var match = LANGUAGES.find(function (l) { return l.code === code; });
    return match ? match.name : code;
}

/** Escape HTML special characters to prevent XSS */
function htmlEsc(str) {
    return String(str)
        .replace(/&/g,  '&amp;')
        .replace(/</g,  '&lt;')
        .replace(/>/g,  '&gt;')
        .replace(/"/g,  '&quot;')
        .replace(/'/g,  '&#39;');
}
