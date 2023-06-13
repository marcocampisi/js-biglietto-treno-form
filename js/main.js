const tariffaKm = 0.21;
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const costoBiglietto = document.getElementById('costoBiglietto');

generateBtn.addEventListener('click',
    function() {
        const inputFullName = document.getElementById('inputFullName').value;
        const inputKm = parseInt(document.getElementById('inputKm').value);
        const inputAge = document.getElementById('inputAge').value;
        let prezzo = parseFloat((tariffaKm * inputKm).toFixed(2));
        if (inputAge == 'under18') {
            costoBiglietto.innerHTML = ((prezzo) - (prezzo * .20)) + '€';
        } else if (inputAge == 'over65') {
            costoBiglietto.innerHTML = ((prezzo) - (prezzo * .40)) + '€';
        } else {
            costoBiglietto.innerHTML = prezzo + '€';
        }
    }
);

resetBtn.addEventListener('click',
    function() {
        document.querySelector('form').reset();
    }
);