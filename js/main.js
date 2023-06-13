const tariffaKm = 0.21;
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const costoBiglietto = document.getElementById('costoBiglietto');
const nameField = document.getElementById('nameField');
const promoField = document.getElementById('promoField');
const numCarrozza = document.getElementById('numCarrozza');

generateBtn.addEventListener('click',
    function() {
        const inputFullName = document.getElementById('inputFullName').value;
        const inputKm = parseFloat(document.getElementById('inputKm').value);
        const inputAge = document.getElementById('inputAge').value;
        let prezzo = parseFloat((tariffaKm * inputKm).toFixed(2));

        nameField.innerHTML = inputFullName;
        numCarrozza.innerHTML = Math.round(Math.random() * 10);

        if (inputAge == 'under18') {
            costoBiglietto.innerHTML = ((prezzo) - (prezzo * .20)) + '€';
            promoField.innerHTML = 'Biglietto ridotto minorenni';
        } else if (inputAge == 'over65') {
            costoBiglietto.innerHTML = ((prezzo) - (prezzo * .40)) + '€';
            promoField.innerHTML - 'Biglietto ridotto anziani';
        } else {
            costoBiglietto.innerHTML = prezzo + '€';
            promoField.innerHTML = 'Biglietto standard';
        }
    }
);

resetBtn.addEventListener('click',
    function() {
        document.querySelector('form').reset();
    }
);