# Projet Services Web

## Technologies utilisées
JavaScript - interrogation des deux api et création de marqueurs sur une carte google
Python - interrogation du fichier ruleML

Application de mashup permettant de filtrer les PoIs selon les conditions météorologiques.

Description : Comme la recommandation de PoI est sensible aux
conditions météorologiques, nous proposons de filtrer les activités
touristiques selon les conditions météorologiques. Il s’agit
d’implémenter un moteur de règles qui réalisera le filtrage. Les règles
seront définies avec le langage RuleML et seront transformées
ensuite au format supporté par le moteur Nools pour être résolues.
Enfin, les PoIs filtrés seront affichés sur une map.


### Comparaison de diverses Api
-----------------------------------------------------------------------------------------------
Nom api               |    Thèmes      |    Limits         |   Lien                           |
-----------------------------------------------------------------------------------------------
OpenWeatherMap        |    Météo       |   60 req/min      | https://openweathermap.org/api   |
-----------------------------------------------------------------------------------------------
Wunderground          |    Météo       |   10 req/min      | https://www.wunderground.com/    |
-----------------------------------------------------------------------------------------------
Foursquare API        |    POI         |    5000 req/h     | https://developer.foursquare.com |
-----------------------------------------------------------------------------------------------
Google Place API      |    POI         | 150000 req/jour   | https://developers.google.com/   |
-----------------------------------------------------------------------------------------------
Yelp                  |    POI         |   25000 req/h     | https://www.yelp.fr/san-jose     |
-----------------------------------------------------------------------------------------------
Google Maps Embed API | Affichage MAP  |    aucune         | https://developers.google.com/   |
-----------------------------------------------------------------------------------------------

Les API retenues pour ce projet, sont :
OpenWeatherMap pour la richesse de ses informations
Google Place API pour la quantité de requêtes possibles.
Google Maps Embed API pour l'affichage

## Mise en route

Ces instructions vous permettront d'obtenir une copie du projet opérationnel sur votre 
machine locale à des fins de développement et de test. Reportez-vous à la section Déploiement pour 
obtenir des notes sur le déploiement du projet sur un système actif.

### Prérequis

Vous avez besoin d'un moteur Node Js Cliquer [ici](https://nodejs.org/en/download/) pour le télécharger.

### Installation

Pour l'installation de node référez vous à la documentation d'[ici](https://nodejs.org/en/download/package-manager/)

Ajout de paquets python-shell : npm install python-shell
Ajout de paquets nools : npm install nools

## Déploiement

Après installation mettez vous dans le répertoire /bin du repo  et lancer : 

```
npm start
```

Ensuite allez à l'adresse localhost:3000\poi en local


## Auteurs

* **Kévin Marnay**  - [Mataking](https://github.com/Mataking)
* **Johnatann Vulphie**  - [Atrean](https://github.com/Atrean)
* **Salim Igué** -  - [Limsamh](https://github.com/limsamh)
* **Iandry Rakotoniaina** - [IandryRak](https://github.com/IandryRak)
