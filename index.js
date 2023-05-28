function getInputMessage() {

    return document.getElementById('inputText').value.toLowerCase();

}

function showOutput(message) {

    const outputInfo = document.getElementById('outputInfo');
    const outputMessage = document.getElementById('outputMessage');
    const outputText = document.getElementById('outputText');

    if (message.length != 0) {

        outputInfo.style.display = 'none';
        outputMessage.style.display = 'block';
        outputText.value = message;
    }

    else {

        outputInfo.style.display = 'block';
        outputMessage.style.display = 'none';
    }
}

function deleteSpecial(character) {

    const alphabet = /^[a-z]+$/;

    if (character.match(alphabet) || character == ' ') {

        return character;

    }

    else {

        const letter = {
            á: 'a',
            é: 'e',
            í: 'i',
            ó: 'o',
            ú: 'u',
            ñ: 'n',
        }

        return letter[character] ?? undefined;

    }
}

function encryptCharacter(character) {

    const value = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }

    return value[character] ?? character;

}

function decryptString(string) {

    const value = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u'
    }

    return value[string] ?? string;

}

function encryptMessage(message) {

    var character = '';
    var newMessage = '';
    var specialCharacter = false;

    for (let i = 0; i < message.length; i++) {

        character = encryptCharacter(deleteSpecial(message[i]));

        if (character == undefined) {
            specialCharacter = true;
            break;
        }

        else {
            newMessage += character;
        }
    }

    if (!specialCharacter) {

        return newMessage;

    }

    else {

        alert("Favor no utilizar caracteres especiales");
        return '';

    }
}

function decryptMessage(message) {
    var newMessage = '';
    var character = '';
    var memory = '';
    var specialCharacter = false;
    var starts = false;
    var filter = ['ai', 'enter', 'imes', 'ober', 'ufat'];

    for (let i = 0; i < message.length; i++) {
        starts = false;
        character = deleteSpecial(message[i]);
        
        if (character == undefined) {
            specialCharacter = true;
            break;
        }
        
        memory += character;
        
        filter.forEach(element => {
            if (element.startsWith(memory)) {
                if (element == memory) {
                    newMessage += decryptString(memory);
                    memory = '';
                }

                else {
                    starts = true;
                }
            }
        });

        if (!starts) {
            newMessage += memory;
            memory = '';
        }

    }

    if (!specialCharacter) {

        return newMessage;

    }

    else {

        alert("Favor no utilizar caracteres especiales");
        return '';

    }

}

function copyText() {

    var copyText = document.getElementById("outputText");
    navigator.clipboard.writeText(copyText.value);

}

function encrypt() {

    showOutput(encryptMessage(getInputMessage()));

}

function decrypt() {

    showOutput(decryptMessage(getInputMessage()));

}