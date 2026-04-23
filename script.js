const btnMenu = document.querySelector('#header nav button');

btnMenu.addEventListener('click', function() {
    const menuExpansivo = document.querySelector('#header nav ul');
    console.log(menuExpansivo.classList);

    // //Transforma o DOMTOKENlist em um Arrey
    // const classes = Array.from(menuExpansivo.classList);

    // //se Existir o valor "Ativado" dentro do Array de classes
    // if (classes.includes("ativado")) {

    //     //Remove a classes da lista
    //     menuExpansivo.classList.remove("ativado");

    // } else {

    //     //Adiciona a classes da lista
    //     menuExpansivo.classList.add("ativado");

    // }

    menuExpansivo.classList.toggle("Ativado");
});

const btnEnviar = document.querySelector('#enviarForm');
const btnLimpar = document.querySelector('#limparForm');
const formContato = document.querySelector('#formContato');

const inputCPF = document.querySelector('#CPF');
const inputemail = document.querySelector('#email');
const inputtel = document.querySelector('#tel');

// ARROW Function () => ()
btnLimpar.addEventListener('click', (event) => {
    event.preventDefault();
    limparForm();
});

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    enviarForm();
});

function limparForm() {
    formContato.reset();
}

function enviarForm() {
    console.log('Funcao Enviar');

    if (inputCPF.value == "") {
        document.querySelector(".messageError.cpf").innerHTML = "Preencha o CPF"
        inputCPF.classList.add("inputError");
    }

    if (inputemail.value == "") {
        document.querySelector(".messageError.cpf").innerHTML = "Preencha o Email"
        inputCPF.classList.add("inputError");
    }

    if (inputtel.value == "") {
        document.querySelector(".messageError.cpf").innerHTML = "Preencha o Telefone"
        inputCPF.classList.add("inputError");
    }
}

inputCPF.addEventListener('keyup', (event) => {
    console.log(event.target);
})