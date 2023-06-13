const tariffaKm = 0.21;
const inputFullName = document.getElementById('inputFullName').value;
const inputKm = parseInt(document.getElementById('inputKm').value);
const inputAge = document.getElementById('inputAge').value;
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');

generateBtn.addEventListener('click',
    function() {
        console.log(inputFullName, inputKm, inputAge)
    }
)

resetBtn.addEventListener('click',
    function() {
        document.querySelector('form').reset()
    }
)