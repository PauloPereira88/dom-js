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