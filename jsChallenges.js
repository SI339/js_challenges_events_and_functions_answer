// Challenge 1: show or hide the email field
function challenge1(element) {
    if (element.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }
}

// Challenge 2: copy the billing address into the home address
function challenge2(element) {
    let bill = document.querySelector("#bill");
    let home = document.querySelector("#home");

    if (element.checked) {
        home.value = bill.value;
        home.readOnly = true;
    } else {
        home.value = "";
        home.readOnly = false;
    }
}

// Challenge 3: one radio button in each group must be selected
function challenge3() {
    let date = document.querySelector('input[name="gradDate"]:checked');
    let standing = document.querySelector('input[name="standing"]:checked');

    if (date == null || standing == null) {
        alert("You must select a choice from each set of radio buttons");
        return false;
    }
    return true;
}

// Challenge 4: show an error message for each empty field
function challenge4() {
    let nameField = document.querySelector("#name").value;
    let addrField = document.querySelector("#addr").value;
    let nameError = document.querySelector("#nameError");
    let addrError = document.querySelector("#addrError");

    if (nameField.length == 0) {
        nameError.classList.remove("errormsg");
    } else {
        nameError.classList.add("errormsg");
    }

    if (addrField.length == 0) {
        addrError.classList.remove("errormsg");
    } else {
        addrError.classList.add("errormsg");
    }

    if (nameField.length == 0 || addrField.length == 0) {
        return false;
    }
    return true;
}

// Challenge 5: show the image and alt text on mouseover or focus
function showImage(element) {
    let display = document.querySelector("#display");
    display.style.backgroundImage = "url('" + element.src + "')";
    display.innerHTML = element.alt;
}

// Challenge 5: put the display back on mouseout or blur
function resetDisplay() {
    let display = document.querySelector("#display");
    display.style.backgroundImage = "";
    display.innerHTML = "Hover over or tab to an image below to display the image and the alt text.";
}
