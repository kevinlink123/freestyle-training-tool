import { test } from "./beatChanger.js";
test();

document.querySelector(".stop").addEventListener("click",detener);
document.querySelector(".reiniciar").addEventListener("click",reestrablecer);
document.querySelector(".boton.tiempo.un-minuto").addEventListener("click", set60Seconds)

document.getElementById("hms").innerHTML="00";
var id;
var s = 0;

export function set60Seconds() {
  console.log("60 segundos");
  s = 60;
  formatearYSetearTiempo();
  document.querySelector(".boton.start").addEventListener("click",tiempo);
  document.querySelector(".boton.tiempo.un-minuto").removeEventListener("click", set60Seconds)
}

function tiempo() {
  console.log("Corre Tiempo");
  contar();
  id = setInterval(contar, 1000);
  document.querySelector(".start").removeEventListener("click", tiempo);
}

function detener() {
  console.log("Parar tiempo");
  clearInterval(id);
  document.querySelector(".start").addEventListener("click",tiempo);
}

function reestrablecer() {
  console.log("Volver al set anterior");
  clearInterval(id);
  s = 0;
  document.querySelector(".boton.tiempo.un-minuto").addEventListener("click", set60Seconds)
  document.getElementById("hms").innerHTML = "00"
}

function contar() {
  // if (s<0){m--; s=59}
  s--;
  var tiempo = formatearYSetearTiempo();
  if (s == 0){
    reestrablecer();
    return;
  }
}

function formatearYSetearTiempo() {
  var mAux, sAux;
  if (s<10){sAux="0" + s;} else{sAux = s;}
  document.getElementById("hms").innerHTML = sAux;

  return;
}