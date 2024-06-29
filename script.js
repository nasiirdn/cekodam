function checkKhodam () {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (name === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Nama tidak boleh kosong</p>";
        return;
    }

    const khodamNames = [
        "Khodam Naga Api",
        "Khodam Naga Es",
        "Khodam Naga Air",
        "Kura-Kura Sad Boy",
        "Siput Kayang",
        "Raja Tapir",
        "Buaya Ngesod"
    ];
    
    const khodamPresent = Math.random() > 0.5;

    if (khodamPresent) {
        const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
        resultDiv.innerHTML = `<p style='color: green'; >${name}, Anda memiliki khodam ${khodamName} yang melindungi anda!<p/>`;
    } else {
        resultDiv.innerHTML = `<p style='color: red'; >${name}, maaf anda tidak memiliki khodam. </p>`
    }
    checkButton.disabled = true;
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('checkButton').disabled = false;
}
