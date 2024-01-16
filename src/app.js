/* istanbul ignore file */
try {
    const { isValid } = require('./services/validations');
    const body = document.getElementById('body');
    const gamerTagInput = document.getElementById('gamerTagInput');
    const checkButton = document.getElementById('gamerTagCheckButton');
    const resetButton = document.getElementById('resetButton');
    const feedbackMessage = document.getElementById('gamerTagFeedback');
    const defaultBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(9, 9, 121, 1) 35%,
                rgba(0, 212, 255, 1) 100%
            ) !important`;
    const greenBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(11, 255, 168, 1) 35%,
                rgba(0, 212, 0, 1) 100%
            ) !important`;
    const redBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(200, 9, 70, 1) 35%,
                rgba(255, 0, 0, 1) 100%
            ) !important`;
    let gamerTagValue;
    gamerTagInput.addEventListener('change', (event) => {
        gamerTagValue = event.target.value;
    });
    checkButton.addEventListener('click', () => {
        const validationResult = isValid(gamerTagValue);
        // TODO : Define the correct error messages regarding the validation rules
        let errorMessage = '';
        if (!gamerTagValue || gamerTagValue.length < 8) {
            errorMessage = 'Invalid - gamertag length must be at least 8 characters';
        } else if (!/[&$!è§à_]/.test(gamerTagValue)) {
            errorMessage = 'Invalid - gamertag must contain at least a special character';
        } else if (!/\d/.test(gamerTagValue)) {
            errorMessage = 'Invalid - gamertag must contain at least a number';
        }
        feedbackMessage.textContent = errorMessage || (validationResult ? 'Gamer tag is not valid' : 'Gamer tag is valid');
        // ----------------------------------------------------------------------
        body.setAttribute(
            'style',
            validationResult ? greenBackgroundColor : redBackgroundColor
        );
    });
    resetButton.addEventListener('click', () => {
        feedbackMessage.textContent = '';
        body.setAttribute('style', defaultBackgroundColor);
    });
} catch (err) {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(err));
}
