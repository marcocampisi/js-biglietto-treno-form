const tariffaKm = 0.21;
const inputFullName = document.getElementById('inputFullName').value;
const inputKm = parseInt(document.getElementById('inputKm').value);
const inputAge = parseInt(document.getElementById('inputAge').value);
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click',
    function() {
        console.log(inputFullName, inputKm, inputAge)
    }
)
