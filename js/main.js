                                                // CLASE N° 1 - PROMPT, ALERT y CONSOLE

let nombreUsuario = prompt("Ingresar Nombre y Apellido")

        if ((nombreUsuario == "") || (nombreUsuario = Number)) {
            alert ("No ingresaste el nombre de usuario");
        }
        else{
        let salida = "Hola " + nombreUsuario + "!"; 
        alert (salida)
        }


let codigoUsuario = parseInt(prompt("Ingresar código de usuario"));
        if (codigoUsuario == "") {
            alert ("El código de usuario consiste en números exclusivamente");
        }
        else{
        let salida =  nombreUsuario + "," + "ingresaste el número" + codigoUsuario; 
        alert (salida)
        }

                                                // CLASE N° 2 - CONDICIONALES

// EJEMPLOS DE IF para iniciar presupuesto

let saldo = prompt("Debe ingresar un saldo inicial para comenzar") 

do { alert ("Debe ingresar el presupuesto base");  
    console.log("Para comenzar el presupuesto el saldo debe ser mayor a 0"); } while ( saldo > 0) {
      alert ("Puede comenzar presupuesto");  
      console.log("Puede comenzar presupuesto");
      } else (saldo < 0) {
        alert("saldo insuficiente");
        console.log("No puede comenzar o continuar el presupuesto si no dispone de fondos");
      }
    




  if((presupuesto/6)>restante){
  //  clase="alert alert-critic";
    console.log("Nivel de recursos crítico");
    alert("Consultar vencimientos y posibilidad de créditos y moratorias");

}else if((presupuesto/4)>restante){
  //  clase="alert alert-warning";
    console.log("Nivel de recursos bajo");

}else if((presupuesto/2)>restante){
  //  clase="alert alert-warning";
    console.log("Nivel de recursos medio");

}else{
  //  clase="alert alert-success";
    console.log("Nivel de recursos óptimo");
    alert("Consultar portfolio de inversiones");
}


                                            // CLASE N° 3 - CICLOS E ITERACIONES

// LOOP FOR + break

const gastoNuevo = ["alquiler", "expensas", "energía", "gas", "alimentos", "ocio", "viáticos", "intereses", "impuestos fiscales", "otros"];

const activoNuevo = ["alquiler", "lotería", "salario", "préstamo bancario", "regalías", "herencia", "dividendos", "intereses de activos", "otros"];

const text = "";
for (let i = 0; i < gastoNuevo.length; i++) {
  text += gastoNuevo[i] + "<br>";
  let ingresarGasto = prompt ("Ingresar gasto");

      if (i== restante<0) {
        break;
      }
      console.log("Nivel de recursos crítico");
    alert("Consultar vencimientos y posibilidad de créditos y moratorias");
   
}

let restante = presupuesto - gastoNuevo

for (let i = 0; i < 1; i++) {
  if (i <= 1 ) { break; }
  text += "El saldo es insuficiente para continuar" + "<br>";
}

// LOOP FOR + continue



for (let i = 0; i < gastoNuevo.length; i++) {
  text += gastoNuevo[i] + "<br>";
  let ingresarGasto = prompt ("Ingresar gasto");

      if (i== restante<0) {
        break;
      }
      console.log("Nivel de recursos crítico");
    alert("Consultar vencimientos y posibilidad de créditos y moratorias");
}


// LOOP - SWITCH

/* ejemplo para vencimientos
restante

switch () {
  case 1:
    restante = "día 01 del mes ";
    break;
  case 1:
    day = "día 05 del mes";
    break;
  case 2:
     day = "día 10 del mes";
    break;
  case 3:
    day = "día 15 del mes";
    break;
  case 4:
    day = "día 20 del mes";
    break;
  case 5:
    day = "día 25 del mes";
    break;
  case 6:
    day = "día 30 del mes";
}
*/

// DEUDAS - SIMULADOR DE PRESTAMOS


/*
const interestRate = (prestamo, interestRate) => interestRate*prestamo /100;
return;

/*

switch (mesdeatraso().getDay()) {
  case 0:
    interestRate = "5";
    break;
  case 1:
    interestRate = "6";
    break;
  case 2:
      interestRate = "7";
    break;
  case 3:
    interestRate = "8";
    break;
  case 4:
    interestRate = "9";
    break;
  case 5:
    interestRate = "10";
    break;
  case 6:
    interestRate = "Concurso de acreedores y riesgo de BANCARROTA";
}

*/


switch (restante > 0){
  case 1:
    ((presupuesto/6)>restante)
    clase="alert alert-critic";
    console.log("Nivel de recursos crítico");
    alert("Consultar vencimientos y posibilidad de créditos y moratorias");
    break;

 case 2:((presupuesto/4)>restante)
    clase="alert alert-warning";
    console.log("Nivel de recursos bajo");
    break;

 case 3:((presupuesto/2)>restante)
    clase="alert alert-warning";
    console.log("Nivel de recursos medio");
    break;

 case 4: ((presupuesto)>200000)
    clase="alert alert-success";
    console.log("Nivel de recursos óptimo");
    alert("Consultar portfolio de inversiones");
    break;

  default: (presupuesto == !Number)
    clase="alert alert-success";
    console.log("Solo puede ingresar números");
    alert("Ponderar un presupesto requiere un saldo inicial");
  
}



                                      // CLASE N° 4 - FUNCIONES, VARIABLES GLOBALES y LOCALES

let prestamo = a
let tasaRatio= b  

const interestRate = (a, b) => {prestamo * tasaRatio /100}
console.log (interestRate);
alert ("Este activo acarrea una tasa de interés que será ingresada a la lista de Gastos" );

 // FUNCION: GUARDAR PRESUPUESTO

const guardarPresupuesto = () => {
    let presupuesto= parseInt(document.querySelector("#presupuestoInicial").value);
    if(presupuesto<1 || isNaN(presupuesto)){

        mostrarError("#msj-error-pregunta","CANTIDAD NO VALIDA");
        return;
    } 
        localStorage.setItem("presupuesto", presupuesto);
        localStorage.setItem("gastos",JSON.stringify([]));
        actualizarVista();
        }


 // FUNCION: AGREGAR GASTOS  (PASIVOS en gral.)


const agregarGasto=() => {
    let tipoGasto = document.querySelector("#tipoGasto").value;
    let cantidad = parseInt(document.querySelector("#cantidadGasto").value);
    
        /*
        do (agregarGasto = (cantidad>restante); cantidad>restante; i++) {

            while
        }
        */
    
        if(cantidad<1 || isNaN(cantidad) || tipoGasto.trim()==='') {
            mostrarError("#msj_error_creargasto","ERROR EN CAMPOS");
            return;

        }
        
        
        if(cantidad>restante){
            alert("NO CUENTA CON LOS SUFICIENTES RECURSOS - necesita incorporar ACTIVOS");
            return;
            /*break / continue*/
            
        }}




                            // CLASE N° 5: OBJETOS
                            

const nuevoGasto = { tipoGasto: "", cantidadGasto: "", acreedor: "",}

// const nuevoActivo = { tipoActivo: "", cantidadActivo: ""}

const prestamo = { emisor: "", cantidad: "", interestRate: "", tiempoDevolucion: ""}

// CONSTRUCTOR

function nuevoGasto (tipoGasto, cantidadGasto, acreedor) {
  this.tipoGasto = tipoGasto;
  this.cantidadGasto= cantidadGasto;
  this.acreedor = acreedor;
  this.ingreso = function () {alert("Usted ingresó" + nuevoGasto + ", verifique que los datos sean correctos")}
}

const nuevoGasto0 = new nuevoGasto ({ tipoGasto: "alquiler", cantidadGasto:"120000", acreedor: "De los Palotes, Juan"});
const nuevoGasto1 = new nuevoGasto ({tipoGasto: "expensas", cantidadGasto:"15000", acreedor: "Consorcio Av. S.F. 2982"});
const nuevoGasto2 = new nuevoGasto ({ tipoGasto:"energía", cantidadGasto:"1200", acreedor: "Edenor"});
const nuevoGasto3 = new nuevoGasto ({ tipoGasto:"gas", cantidadGasto:"220", acreedor: "Metrogas"});

// CLASS

class nuevoActivo {
  constructor (tipoActivo, cantidadActivo) {
  this.tipoActivo = tipoActivo;
  this.cantidadActivo= cantidadActivo;}

  ingreso () {alert("Usted ingresó" + nuevoActivo + ", verifique que los datos sean correctos");}
  }
  

const nuevoActivo0 = new nuevoActivo ({ tipoActivo: "alquileres", cantidadActivo: "55000"});  
const nuevoActivo1 = new nuevoActivo ({ tipoActivo: "salario", cantidadActivo: "149000"});
const nuevoActivo2 = new nuevoActivo ({ tipoActivo: "dividendos", cantidadActivo: "120000"});



function prestamo (emisor, cantidad, interestRate, tiempoDevolucion)


                                            // CLASE N° 6 & 7 - ARRAYS + FUNCIONES DE ORDEN SUPERIOR

// ARRAY GASTOS


const gastosNuevo = ["alquiler", "expensas", "energía", "gas", "alimentos", "ocio", "viáticos", "intereses", "impuestos fiscales", "curso informática", "curso chino", "otros"];

const activosNuevo = ["alquileres", "lotería", "salario", "préstamo bancario", "regalías", "herencia", "dividendos", "intereses de activos", "otros"];


// INVERSIONES

const inversionesArray = ["bienes raíces", "préstamos otorgados", "ayuda familiar", "acciones en bolsa", "interés general", "actividades cultrales"];

// console.log (inversionesArray)

// acceso
console.log( inversionesArray [0]);

// extensión
console.log(inversionesArray.lenght);

// recorrido
for (let index = 0; index < 6; index++){
  alert (inversionesArray[index])
}

// agregar elementos
inversionesArray.push('donaciones'); // al final
console.log(inversionesArray.lenght);

inversionesArray.unshift('apuestas'); // al ppio
console.log(inversionesArray.lenght);

// eliminar elementos

inversionesArray.pop(); // al final
console.log(inversionesArray.lenght);
console.log(nombres)

inversionesArray.shift(); // al ppio
console.log(inversionesArray.lenght);
console.log(nombres)

inversionesArray.splice (4,1)// splice

const inversionesNoLucrativas= inversionesArray.slice(4,4) // slice

// concatenar

const activosTotales = nuevoActivo.concat(inversionesArray)// concat

// recorrer

console.log (inversionesArray.indexOf('acciones en bolsa'))// indexOf
console.log (inversionesArray.indexOf('ocio'))// indexOf => -1

console.log (inversionesArray.includes ('donaciones')) // includes

inversionesArray.reverse (); // reverse
console.log (inversionesArray);

// Para ejemplos consultar líneas 300 - 360


let total = 0;
for (let i=1; i<=10; i++) {
  total += i;
}
console.log (total);

/*

function balancePresupesto ()
  if (nuevoGasto)

  else if (nuevoActivo)

  else if (inversionesArray)

  else if (inversionesNoLucrativas)
  */

   // FUNCION: AGREGAR ACTIVOS  (ACTIVOS en gral.) 

 /*

const agregarActivo=() => {
    let tipoActivo = document.querySelector("#tipoActivo").value;
    let cantidad = parseInt(document.querySelector("#cantidadActivo").value);
    
        
        if(cantidad<1 || isNaN(cantidad) || tipoActivo.trim()==='') {
            mostrarError("#msj_error_crearactivo","ERROR EN CAMPOS");
            return;
        }
        
        
        if(cantidad>restante){
            console.log("Puede continuar operando");
            alert(Se reautorizan a proceder a nuevos gastos)
            return;
        }

        let nuevoActivo = {
            tipoActivo,
            cantidad

        }

        let activo = JSON.parse(localStorage.getItem("activos"));
        activos.push(nuevoActivo);
        localStorage.setItem("activos",JSON.stringify(activos));
        refrescarListado();
        document.querySelector("#formActivos").reset();
}

*/

// ** Funciones con elementos de la CLASE N°8

/*
const eliminarGasto=() => {
    let tipoGasto = localStorage.clear();
    
}
*/

// FUNCION - REFRESCAR LISTADO

const refrescarListado = () => {
    
  let presupuesto=localStorage.getItem("presupuesto");
  let gastos = JSON.parse(localStorage.getItem("gastos"));}

  let totalGastos=0;
  let listadoHTML= ``;
  gastos.map(gasto=>{
      listadoHTML+=`<li class="gastos">
                      <p> ${gasto.tipoGasto}
                      <span class="gasto">$ ${gasto.cantidad}</span>
                      </p>
                  </li>`; 
      totalGastos+=parseInt(gasto.cantidad);
  });

const reiniciarPresupuesto = () => {
  localStorage.clear();
  location.reload(true);
}


const mostrarError = (elemento, mensaje) => {
    divError=document.querySelector(elemento);
    divError.innerHTML= `<p class="alert alert-danger error">${mensaje}</p>`;
    setTimeout(() =>{divError.innerHTML=``;}, 2000);

}




 // FUNCION - ACTUALIZAR VISTA

const actualizarVista = () => {

  let presupuesto=localStorage.getItem("presupuesto");
  restante = presupuesto;

  let divPregunta = document.querySelector("#pregunta");
  let divGastos = document.querySelector("#divGastos");
  let divControlGastos = document.querySelector("#divControlGastos");
  divPregunta.style.display="none";
  divGastos.style.display="none";
  let controlGastos= `<div class="gastos-realizados"> 
                          <h2>Listado de Gastos</h2>
                          <div class="alert alert-primary">
                          Presupuesto:$ ${presupuesto}</div>
                          <div class="alert alert-success">
                          Restante:$ ${presupuesto}</div>
                      </div> `;

  if(!presupuesto) {
      divPregunta.style.display = "block";
  }else{
      divPregunta.style.display="none";
      divGastos.style.display = "block";
      divControlGastos.innerHTML = controlGastos;
      refrescarListado();
      
  }

}

/*

OBJETO

const nuevoGasto0 = new nuevoGasto ({ tipoGasto: "alquiler", cantidadGasto:"120000", acreedor: "De los Palotes, Juan"});
const nuevoGasto1 = new nuevoGasto ({tipoGasto: "expensas", cantidadGasto:"15000", acreedor: "Consorcio Av. S.F. 2982"});
const nuevoGasto2 = new nuevoGasto ({ tipoGasto:"energía", cantidadGasto:"1200", acreedor: "Edenor"});
const nuevoGasto3 = new nuevoGasto ({ tipoGasto:"gas", cantidadGasto:"220", acreedor: "Metrogas"});

ARRAY GASTOS

const gastosNuevo = ["alquiler", "expensas", "energía", "gas", "alimentos", "ocio", "viáticos", "intereses", "impuestos fiscales", "curso informática", "curso chino", "otros"];

const activosNuevo = ["alquileres", "lotería", "salario", "préstamo bancario", "regalías", "herencia", "dividendos", "intereses de activos", "otros"];
*/

// ref - líneas 306 - 309

const resultado = nuevoGasto.find ((el) => el.tipoGasto === "Alquiler") // FIND
console.log (resultado)

const resultado1 = nuevoGasto.filter ((el) => el.cantidadGasto < 50000) // ALQUILER
console.log (resultado1)

const resultado2 = nuevoGasto.map ((el) => el.tipoGasto) // ALQUILER
console.log (resultado2)
