const imc = (peso, altura) => (peso / (altura * altura));
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));