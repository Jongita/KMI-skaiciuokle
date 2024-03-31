const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btn = document.getElementById("btn");
const kmi = document.getElementById("kmi");

const skaiciuoti = () => {
    const height = heightInput.valueAsNumber / 100;
    const weight = weightInput.valueAsNumber;
    if (isNaN(height) || isNaN(weight)) {
        kmi.innerHTML = `Įveskite skaičius`;
    } else {
        const sum = (weight / height ** 2).toFixed(2)
        kmi.innerHTML = sum;
    }

}

btn.onclick = skaiciuoti;
