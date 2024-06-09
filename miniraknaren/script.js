document.addEventListener('DOMContentLoaded', () => {
    const buttons = [...document.getElementsByClassName('input')];
    const input = document.getElementById('input');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target;
            const buttonText = target.innerHTML;

            if (buttonText === 'Clear') {
                input.value = '';
            } else if (buttonText === '=') {
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'Error';
                }
            } else {
                input.value += buttonText;
            }
        });
    });
});
