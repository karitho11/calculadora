//muestra un mensaje de bienvenida 
alert("hola,bienvenoido y bienvenida a la calculadora");
//solicita al usuario que indrese el primer numero y lo combierte en numero punto flotante 
var numero1 =parseFloat( prompt("porfavor ingresar un numero del 0 al infinito"));

//muestra el numero ingresado por el usuario
alert("elegidte un numero"+numero1);
//solicita al usuario que ingrese el segundo numero y lo comberte en numero punto flotante 
var numero2 = parseFloat (prompt("porfavor ingresa un segundo numero de 0 al infinito"));

//muestra el segundo numero ingresado por el ususario
alert("tu segundo numero es " + numero2);
// solicita al usuario que elija la operacion 
alert("elige la operacion que deceas hacer con los numeros" + numero1 +" y " + numero2); 
//solicita al usuario que elija una operacion y la combierta en numero entero
var operacion = parseInt(prompt("elige una opcion.\n1 es suma.\n2 es resta.\n3 es multiplicacion.\n4 es divicion."));
//variable para almacenar el resultado de la operacion 
var resultado;
//variable para almacenar el nombre de la operacion realizada 
var nombre="";
//verifica que operacion a elegido el usuario y realiza la operacion corespondiente 
if(operacion == 1){
    resultado = numero1 + numero2;
    nombre = " la suma es " + resultado;
}else if(operacion == 2){
    resultado = numero1 - numero2;
    nombre = " la resta es " + resultado;
}else if (operacion == 3){
    resultado = numero1 * numero2;
    nombre = " la multiplicación es " + resultado;
}else if (operacion == 4){
    if(numero2 !== 0){
        resultado = numero1 / numero2;
        nombre = " la divion es " +resultado;
    }else{
         nombre= "no se puede dividir por cero";
    }
}else{
        nombre=" operacion no valida ";
    }

//muestra el resultado de la operación
alert(nombre);
//muestra los numeros ingresados por el usuario y el resultado de la operacion 
document.write("los numeros que ingresaste fueron" + numero1 + " y " + numero2 + " y el resultadode la operacion de " + nombre);