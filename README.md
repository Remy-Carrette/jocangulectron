# Jocangulectron

Test technique pour le poste de développeur multimédia frontend au sein des [éditions Jocatop](https://jocatop.fr/).

## Technologies utilisées

- Angular : Framework TypeScript pour un développement rapide d'interfaces utilisateurs.

- Angular Material: Framework Angular qui permet d'appliquer un design Material à des application Angular.

- ElectronJS : Framework JS qui permet de développer des clients lourds gràces à des technologies web.

## Le module interactif.

J'ai choisi de développer un module simple ayant comme cible des enfants de maternelle.

Ce module été inspiré par le module [ZOUM+ structuration de l'espace](https://jocatop.fr/cycle-1/325-zoum-plus-structuration-de-l-espace.html) des éditions Jocatop. Le but de mon exercice est de déplacer des pièces de couleur et avec une forme d'animal sur un socle qui à cette même couleur et la même forme d'animal inscrit dessus.

Les socles changent de place à chaque partie pour permettre une rejouabilité interessante.

Une musique est lancée automatiquement au début de l'application, il est possible de la mettre sur pause avec un bouton prévu à cet effet en bas à droite de l'écran.

## Evolutions possible

Etant donnée le delai que j'ai eu pour développer cette application, le design et les possibilités sont sommaires, j'ai cependant des idées pour un certain nombre d'évolutions qui pourraient être faites:

1. Amélioration de l'exercice:

   -Proposer une montée en difficulté dans l'exercice en utilisant des pièces et des socles plus petit et en ajoutant des pièces possible (avec des couleurs et de formes différentes) pour le même nombre de socles disponible.

   - Techniquement cela pourrait être fait en ajoutant de nouveaux objets à ma liste de pieceSettings dans le composant puzzle-game.

   - Lancer un message audio au démarrage de l'exercice pour donner clairement la consigne "Déplace les pièces de couleur sur les socles en haut du plateau."

   - Lancer un message audio à chaque fois qu'une pièce à été bien placée sur le socle en donnant le nom de l'animal "Bravo ! Tu as bien placé le lion sur son socle rouge !".

2. Amélioration du code:

   - Il pourrait être interessant d'avoir un générateur de pièces et de socles(les composants goal) qui remplace les listes de pieceSettings et goalSettings pour permettre une meilleure évolutivité.

   - L'application electron une fois packagée fait environ 1Go. Un paramétrage du build permettrait de réduire la taille de l'application.

   - La fonction recivePiecePosition() du composant puzzle-game qui abrite toute la logique de l'exercice pourrait être refactoré pour permettre une meilleure maintenabilité et évolutivité.
