/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

function multiplyOddIndices(numbers) {

  //Affecte la méthode ".map" à la fonction "numbers"
  //Les paramètres de la fonction sont ceux par défaut :...
  //...l'élément du tableau, l'indice de l'élément du tableau
  return numbers.map(function(nombre, indice) {

    //Si l'index est pair...
    if (indice%2 === 0) {

      //... alors retourne le nombre...
      return nombre;

      //...sinon s'il est impair...
    } else {
      
      //...retourne comme résultat, le nombre x par son indice
      return nombre * indice;
    }

  })
}

module.exports = multiplyOddIndices;