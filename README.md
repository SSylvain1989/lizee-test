# Test technique pour Lizee

Cette application doit contenir :\
Deux pages:
- une page d’accueil (/) présentant un site e-commerce classique
- une page de fiche produit (/product/{slug})

## Prérequis

Installer Node (version minimale : v15.8.0 ), Sass

## Commencer

1. Exécutez `npm install` pour mettre à jour vos dépendances
2. Pour voir le projet `npm run dev`, il s'ouvrira sur http://localhost:3000/

## Choix techniques et réflexions

### Web framework : Next.js

Next.js est un framework gratuit et open source s'appuyant sur la bibliothèque JavaScript React et sur la technologie Node.js. C'est sur ce framework que Lizee développe ses applications je souhaite donc démontrer mes compétences avec celui-ci.
J'utilise également TypeScript un outil puissant qui peut  aider à écrire du code plus propre, plus organisé et plus facile à maintenir et surtout rend le code plus lisible, très important quand on travaille en équipe.
Évidemment, j'utilise `Next Image` pour une meilleure optimisation des images.

### UI framework : MUI

Material-UI est une librairie de composants React. Lizee l'utilise pour développer ses applications, je ne l'ai jamais utilisé, mais je souhaite démontrer mes compétences avec celui-ci et par la même occasion me challenger.
J’ai utilisé par contre mon propre font système pour plus de liberté.

### Récupération de la data 

#### Pourquoi `getStaticProps`

Les pages statiques sont plus rapides à charger que les pages dynamiques, ce qui peut améliorer l'expérience utilisateur. C'est également un avantage pour le SEO, Google aime les pages qui s'affichent rapidement et aura tendance à les placer plus haut dans les résultats de recherche
J'ai ainsi fait le choix de partir sur `getStaticProps` pour générer mes pages. 
J'ai cependant utilisé un revalidate assez court ce qui va permettre de mettre à jour nos produits si besoin , sans re build le projet, et de garder une expérience fluide et sans accros pour l'utilisateur.

Je reste conscient que cette décision doit être prise en consensus avec l'équipe marketing et l'équipe tech pour que chacun puisse être conscient de ce que cela implique.

#### Pourquoi `getStaticProps` est peut-être un mauvais choix ? 

`getStaticProps` peut être un également un mauvais choix.
Si les données du site sont mises à jour fréquemment ou si elles dépendent de l'utilisateur connecté ( par exemple on veut afficher à l'utilisateur des produits en relation avec ces précédents achats / location ), il peut être préférable d'utiliser `getServerSideProps`. 

## Suggestions : 

EN BDD il serait préférable de rajouter un `boolean` dans l'objet “ taxons “ qui va indiquer si le vêtement est pour une femme ou un homme , ça serait plus “ solide “ que de tester si la string `taxons.main` contient “womens”, si cette valeur est changée plus tard, que quelqu'un décide de nommer ça autrement ça risque de ne plus fonctionner.

La short description devrait être limité à un nombre de caractères égal ou maximum pour tous.
Par exemple, la dernière fait 210 caractères. Les autres font beaucoup moins elles devraient toutes être égales ou ne pas dépasser un certains nombre de caractères pour une meilleure harmonie.

Pour pallier à ce problème j’aurais pu utiliser la méthode `substring` et n’afficher qu’un certain nombre de caractères ,et `lastIndexOf` pour ne pas couper un mot. C’est pas très propre, le plus propre c’est de s’entendre avec le service marketing, et de leur donner un nombre de caractères maximum pour rédiger cette short description pour ne pas couper la description en front .

Exemple : 

```html
  <p className={styles.description}>
  {shortDescription.substring(0, (shortDescription.lastIndexOf(" ", 95)))}
  </p>
 ```

 Sur chaque produit on trouve un objet `associations`, parfois celui-ci est vide, et parfois on retrouve le produit sur lequel nous sommes. L'utilisateur ne souhaite pas revoir en dessous du produits sélectionné le produit sélectionné, ça fera doublons et pas tres professionnel de mon point de vue. 

 ## Bug ou embûche volontaire ? 

 Pour le t-shirt **Loose white designer T-Shirt** qui n’a pas d’objet price comme les autres objets. Volontaire ou non je tenais à la souligner , et j'ai donc mis en place une logique dans ce sens pour éviter tout bug.

 ## Améliorations possible :

 - sous chaque produit dans la page produit on pourrait remettre tous les produits et retirer le produit " courant " que nous sommes en train d'afficher.
 - on pourrait se servir des autres photos du produit pour en faire un slide , avec swiper js par exemple
 - des tests seraient la bienvenue
 - Un snapshot des composants sensibles pourrait également être mis en place pour éviter toute régression sur l'ux / ui