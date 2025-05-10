console.log("añadiendo 5 elementos en un array");
let animalArray = ["cat", "dog", "tiger", "lion", "dolphin"];
console.log(animalArray);

console.log("añadiendo un elemento al inicio del array");
animalArray.unshift("dolphin");
console.log(animalArray);

console.log("añadiendo un elemento al final del array");
animalArray.push("elephant");
console.log(animalArray);

console.log("Eliminando el elemento en la tercera posición del array");
animalArray.splice(2, 1);
console.log(animalArray);

console.log("creando un set que alamacene 5 libros");
let bookSet = new Set(["book1", "book2", "book3", "book4", "book5"]);
console.log(bookSet);

console.log("añadiendo dos elementos más uno de ellos repetido");
bookSet.add("book5", "book1");
console.log(bookSet);

console.log("Eliminado un elemeto de mi preferencia dentro del set");
console.log(bookSet.delete("book1"));
console.log(bookSet);

console.log("crenado un map que asocie un numero con el nombre de cada mes");
let mesMap = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  ["meses de verano", ["jule", "august", "september"]],
]);
console.log(mesMap);

console.log("comprobando si el numero 5 existe dentro del map de meses");
if (mesMap.has(5) == true) {
  console.log("si existe y es " + mesMap.get(5));
} else {
  console.log("no existe en la coleccion de elementos");
}

console.log("convirtiendo un array en set y luego alamacenandolo en un map");
let newArray = ["Francisco", "Camila", "Jose"];
console.log(newArray);

let newSet = new Set(newArray);
console.log(newSet);

let newMap = new Map([["data", newSet]]);

console.log(newMap);
