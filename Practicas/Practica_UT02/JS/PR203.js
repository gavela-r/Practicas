/*Ejercicio 3
Crea un script que pida al usuario los siguientes datos, 
asumiendo en todos los casos que el usuario introducirá un valor numérico:
Precio por kilo de manzanas
Cantidad de manzanas
Precio por kilo de naranjas
Cantidad de naranjas
Precio por kilo de plátanos
Cantidad de plátanos
Cuando el usuario haya introducido todos los datos
 muestra un mensaje de la forma "Has comprado un total de <kilos> kilos de fruta y
  te ha costado <importe_total> euros".*/

  let precioManzana = prompt('Indicame el precio de las manzanas'); 
  let CantidadManzanas = prompt('indicame la cantidad de manzanas');
  let precioNaranjas = prompt('Indicame el precio de las naranjas');
  let cantidadNaranjas = prompt('Indicame la cantidad de las naranjas');
  let cantidadPlatanos = prompt('Indicame la cantidad de platanos');
  

  console.log(`Has comprado un total de ${cantidadNaranjas + CantidadManzanas + cantidadPlatanos} kilos de fruta y te ha costado ${precioManzana + precioNaranjas} euros`);

  