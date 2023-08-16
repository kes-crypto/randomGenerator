function generate() {
    let container = document.getElementById('result');
    let total = parseInt(document.getElementsByTagName('input')[0].value);
    let dices = parseInt(document.getElementById('dice-type').value);
    container.innerHTML = ''
    if (dices != 0 && total > 0) {

        for (let i = 0; i < total; i++) {
            let box = document.createElement('button')
            box.classList.add('btn')
            box.innerText =  Math.floor(Math.random() * dices) + 1 
            container.append(box)
        }
    }
}
