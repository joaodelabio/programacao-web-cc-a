const form = document.querySelector('.forms');

form.addEventListener('submit', function (event) {
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;

    function validarNome(nome) {
        if (nome === "") {
            alert("campo vazio.");
            return false;
        }
        const regex = /^[A-Za-z\s]/;
        if (!regex.test(nome)) {
            alert("o nome não pode conter números.");
            return false;
        }
        return true;
    }

    function validarEmail(email) {
        if (email === "") {
            alert("campo email vazio.");
            return false;
        }
        if (/^[\w]+@[\w]+.[a-zA-Z]+$/.test(email)) {
            return true
        }

    }

    function validarIdade(idade) {
        if (idade === "" || isNaN(idade) || idade <= 0) {
            alert("insira uma idade válida.");
            return false;
        }
        return true;
    }

    function validarCPF(cpf) {
        if (cpf === "") {
            alert("campo cpf vazio.");
            return false;
        }

        if (/[a-zA-Z]/.test(cpf)) {
            alert("cpf não pode conter letras.");
            return false;
        }

        if (!/^\d{11}$/.test(cpf)) {
            alert("cpf deve conter exatos 11 dígitos numéricos.");
            return false;
        }
        return true;
    }

    if (!validarNome(nome)) return;
    if (!validarEmail(email)) return;
    if (!validarIdade(idade)) return;
    if (!validarCPF(cpf)) return;

    const formData = {
        nome: nome,
        email: email,
        idade: idade,
        cpf: cpf,
    };

    const jsonData = JSON.stringify(formData);

    console.log(jsonData);
    alert(`usuário cadastrado`);
});