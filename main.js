const fichaPersonal = [];
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellito");
let edad = parseInt(prompt("Ingrese su edad"));
let anio = parseInt(prompt("Ingrese su anio de nacimiento"));
let localidad = prompt("Ingrese su localidad");
let direccion = prompt("Ingrese su direccion");
let trabajo = parseInt(
  prompt(
    "Selleccione la opcion deseada. 1 - Colocacion de ceramicas. 2 - Armado de techo. 3 - Construccion desde cero."
  )
);

while (
  !nombre ||
  !apellido ||
  !edad ||
  !anio ||
  !localidad ||
  !direccion ||
  !trabajo
) {
  alert(
    "Para continuar revise los datos ingresados.Nos eoncontramos con un dato erroneo o sin completar"
  );
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellito");
  edad = parseInt(prompt("Ingrese su edad"));
  anio = parseInt(prompt("Ingrese su anio de nacimiento"));
  localidad = prompt("Ingrese su localidad");
  direccion = prompt("Ingrese su direccion");
  trabajo = parseInt(
    prompt(
      "Selleccione la opcion deseada. 1 - Colocacion de ceramicas. 2 - Armado de techo. 3 - Construccion desde cero."
    )
  );
}

fichaPersonal.push(
  "Nombre: " + nombre,
  "Apellido: " + apellido,
  "Edad: " + edad,
  "Año: " + anio,
  "Localidad: " + localidad,
  "Direccion: " + direccion
);

const iva = (a, b) => a * b * 0.21;

const calcularMetros = (num) => {
  let metros = parseInt(prompt("Ingrese totalidad de los metros a construir"));
  total = metros * num + iva(metros, num);
  alert("El trabajo vale " + total);
  fichaPersonal.push("Total presupuestado: " + total);
  alert("Los datos del presupuesto final son los siguentes " + fichaPersonal);
};

switch (trabajo) {
  case 1:
    calcularMetros(1000);
    break;
  case 2:
    calcularMetros(1200);
    break;
  case 3:
    calcularMetros(3500);
    break;
  default:
    alert("La opcion ingresada es incorrecta");
    break;
}

fichaPersonal.forEach((fichaPersonal) => console.log(fichaPersonal));

let container = document.createElement("div");

container.innerHTML = `
<h2>Presupuesto: </h2>
<p>${fichaPersonal[0]}</p>asd
<p>${fichaPersonal[1]}</p>
<p>${fichaPersonal[2]}</p>
<p>${fichaPersonal[3]}</p>
<p>${fichaPersonal[4]}</p>
<p>${fichaPersonal[5]}</p>
<p>${fichaPersonal[6]}</p>`;

document.body.appendChild(container);


const boton1 = document.getElementById('check1');

boton1.onclick = () => console.log('Click');

const boton2 = document.getElementById('check2');

boton2.onclick = () => console.log('Click');

const boton3 = document.getElementById('check3');

boton3.onclick = () => console.log('Click');


