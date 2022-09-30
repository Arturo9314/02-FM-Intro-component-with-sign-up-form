(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')
    const name = document.getElementById('validationServer01')
    const lastname = document.getElementById('validationServer02')
    const email = document.getElementById('validationServer03')
    const password = document.getElementById('validationServer04')
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
            name.setAttribute('placeholder', "")
            lastname.setAttribute('placeholder', "")
            email.setAttribute('placeholder', "email@example/com")
            password.setAttribute('placeholder', "")
        }, false)
        })
})()
