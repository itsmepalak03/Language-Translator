document.addEventListener('DOMContentLoaded', function () {

    var form          = document.getElementById('contactForm');
    var formSuccess   = document.getElementById('formSuccess');
    var sendAnotherBtn = document.getElementById('sendAnotherBtn');
    var submitBtn     = document.getElementById('submitBtn');
    var submitText    = document.getElementById('submitText');
    var submitSpinner = document.getElementById('submitSpinner');

    var nameInput    = document.getElementById('contactName');
    var emailInput   = document.getElementById('contactEmail');
    var subjectInput = document.getElementById('contactSubject');
    var messageInput = document.getElementById('contactMessage');
    var msgCount     = document.getElementById('msgCount');

    var nameError    = document.getElementById('nameError');
    var emailError   = document.getElementById('emailError');
    var subjectError = document.getElementById('subjectError');
    var messageError = document.getElementById('messageError');

    if (messageInput && msgCount) {
        messageInput.addEventListener('input', function () {
            msgCount.textContent = messageInput.value.length + ' / 2000';
        });
    }

    if (nameInput) {
        nameInput.addEventListener('blur', function () { validateName(); });
    }
    if (emailInput) {
        emailInput.addEventListener('blur', function () { validateEmail(); });
    }
    if (subjectInput) {
        subjectInput.addEventListener('blur', function () { validateSubject(); });
    }
    if (messageInput) {
        messageInput.addEventListener('blur', function () { validateMessage(); });
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var valid =
                validateName()    &
                validateEmail()   &
                validateSubject() &
                validateMessage();

            if (!valid) {
                showToast('Please fix the errors above.', 'error');
                return;
            }

            setSubmitting(true);

            setTimeout(function () {
                setSubmitting(false);
                form.style.display = 'none';
                if (formSuccess) formSuccess.style.display = 'flex';
                showToast('Message sent successfully!', 'success');
            }, 1800);
        });
    }

    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', function () {
            if (formSuccess) formSuccess.style.display = 'none';
            if (form) {
                form.style.display = 'flex';
                form.reset();
                if (msgCount) msgCount.textContent = '0 / 2000';
                clearErrors();
            }
        });
    }

    /* VALIDATORS */

    function validateName() {
        var val = nameInput.value.trim();
        if (!val) {
            setError(nameInput, nameError, 'Please enter your name.');
            return false;
        }
        if (val.length < 2) {
            setError(nameInput, nameError, 'Name must be at least 2 characters.');
            return false;
        }
        clearError(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        var val = emailInput.value.trim();
        var re  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!val) {
            setError(emailInput, emailError, 'Please enter your email address.');
            return false;
        }
        if (!re.test(val)) {
            setError(emailInput, emailError, 'Please enter a valid email address.');
            return false;
        }
        clearError(emailInput, emailError);
        return true;
    }

    function validateSubject() {
        if (!subjectInput.value) {
            setError(subjectInput, subjectError, 'Please select a topic.');
            return false;
        }
        clearError(subjectInput, subjectError);
        return true;
    }

    function validateMessage() {
        var val = messageInput.value.trim();
        if (!val) {
            setError(messageInput, messageError, 'Please enter your message.');
            return false;
        }
        if (val.length < 10) {
            setError(messageInput, messageError, 'Message must be at least 10 characters.');
            return false;
        }
        clearError(messageInput, messageError);
        return true;
    }

    function setError(input, errorEl, msg) {
        input.style.borderColor = 'var(--error)';
        if (errorEl) errorEl.textContent = msg;
    }

    function clearError(input, errorEl) {
        input.style.borderColor = '';
        if (errorEl) errorEl.textContent = '';
    }

    function clearErrors() {
        [nameInput, emailInput, subjectInput, messageInput].forEach(function (el) {
            if (el) el.style.borderColor = '';
        });
        [nameError, emailError, subjectError, messageError].forEach(function (el) {
            if (el) el.textContent = '';
        });
    }

    function setSubmitting(on) {
        submitBtn.disabled = on;
        submitText.textContent  = on ? 'Sending…' : 'Send Message';
        submitSpinner.style.display = on ? 'flex' : 'none';
    }

});
