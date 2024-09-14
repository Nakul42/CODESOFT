function appendValue(value) {
    document.getElementById('input-area').value += value;
}

function deleteValue() {
    let input = document.getElementById('input-area').value;
    document.getElementById('input-area').value = input.slice(0, -1);
}

function resetValue() {
    document.getElementById('input-area').value = '';
}

function calculateValue() {
    let input = document.getElementById('input-area').value;
    try {
        let result = eval(input.replace(/x/g, '*'));
        document.getElementById('input-area').value = result;
    } catch (error) {
        document.getElementById('input-area').value = 'Error';
    }
}