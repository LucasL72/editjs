


console.log('Mon form')

function monForm() {
    // On crée le container
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    // On crée le row 
    const row = document.createElement("div");
    row.setAttribute("class", "row")
    row.setAttribute("id", "listCard")

    app.appendChild(container);
    container.appendChild(row);

    const titleform = document.createElement("h2")
    titleform.setAttribute("class", "text-center")
    titleform.innerText = "Forms"

    row.appendChild(titleform)

    const form = document.createElement("form")
    form.setAttribute("id", "form")
    form.setAttribute("style", "display: flex; flex-direction: column;")
    form.setAttribute("enctype", "application/x-www-form-urlencoded")

    row.appendChild(form)

    const textformlab = document.createElement("label");
    textformlab.setAttribute("for", "text")
    textformlab.innerText = "Text";
    const textforminput = document.createElement("input")
    textforminput.setAttribute("type", "text")
    textforminput.setAttribute("name", "text")


    form.appendChild(textformlab);
    textformlab.appendChild(textforminput)

    const textarealab = document.createElement("label")
    textarealab.setAttribute("for", "textarea")
    textarealab.innerText = "textarea"

    const textarea = document.createElement("textarea")
    textarea.setAttribute("name", "textarea")
    textarea.setAttribute("cols", "30")
    textarea.setAttribute("rows", "10")

    form.appendChild(textarealab)
    form.appendChild(textarea)

    const colorlabel = document.createElement("label")
    colorlabel.setAttribute("for", "color")
    colorlabel.innerText = "Couleur"

    const colorinput = document.createElement("input")
    colorinput.setAttribute("type", "color")
    colorinput.setAttribute("name", "color")

    form.appendChild(colorlabel)
    form.appendChild(colorinput)

    const datelabel = document.createElement("label")
    datelabel.setAttribute("for", "date")

    const dateinput = document.createElement("input")
    dateinput.setAttribute("type", "date")
    dateinput.setAttribute("name", "date")

    form.appendChild(datelabel)
    form.appendChild(dateinput)

    const passdiv = document.createElement("div")
    passdiv.setAttribute("class", "display:flex")

    const passlabel = document.createElement("label")
    passlabel.setAttribute("for", "password")
    passlabel.innerText = "Mot de passe"

    const passinput = document.createElement("input")
    passinput.setAttribute("type", "password")
    passinput.setAttribute("name", "password")
    passinput.setAttribute("id", "password")
    //passinput.setAttribute("onchange", "checkPassword()")

    const conflabel = document.createElement("label")
    conflabel.setAttribute("for", "password")
    conflabel.innerText = "Confirmer mot de passse"

    const confinput = document.createElement("input")
    confinput.setAttribute("type", "password")
    confinput.setAttribute("name", "passwordconfirm")
    confinput.setAttribute("id", "passwordonfirm")
    //confinput.setAttribute("onchange", "checkPassword()")

    form.appendChild(passdiv)
    passdiv.appendChild(passlabel)
    passdiv.appendChild(passinput)
    passdiv.appendChild(conflabel)
    passdiv.appendChild(confinput)

    const divradio = document.createElement("div")
    divradio.setAttribute("style", "display:flex")

    const editlabel = document.createElement("label")
    editlabel.setAttribute("for", "edit")
    editlabel.innerText = "Editer"

    const editinput = document.createElement("input")
    editinput.setAttribute("type", "radio")
    editinput.setAttribute("name", "radio1")
    editinput.setAttribute("value", "edit")

    const addlabel = document.createElement("label")
    addlabel.setAttribute("for", "edit")
    addlabel.innerText = "Ajouter"

    const addinput = document.createElement("input")
    addinput.setAttribute("type", "radio")
    addinput.setAttribute("name", "radio1")
    addinput.setAttribute("value", "add")

    form.appendChild(divradio)
    divradio.appendChild(editlabel)
    divradio.appendChild(editinput)
    divradio.appendChild(addlabel)
    divradio.appendChild(addinput)

    const subbutton = document.createElement("button")
    subbutton.setAttribute("onclick", "checkForm(event)")
    subbutton.innerText = "Valider"

    form.appendChild(subbutton)
}
monForm()

function showPass() {
    let y = document.getElementById("password");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  } 

// Input Radio
for (i = 0; i < input.length; i++) {
    input[i].onclick = function (e) {
        if (e.ctrlKey) this.checked = false;
    }
}
// Envoie du formulaire
function checkForm(event) {

    event.preventDefault()

    for (let x = 0; x < input.length; x++) {
        const element = input[x];
        console.log(element.value)
    }

    alert("Le console.log de votre formulaire est dans la console !")

    form.submit()
}

/*function checkPassword() {
    const pass = document.getElementById('password').value
    const passConfirm = document.getElementById('passwordConfirm').value

    if (pass === passConfirm) console.log('Match password OK'), submit()
    else console.log('Les 2 mot de passe sont différent !!')
    console.log(pass)
}
*/
