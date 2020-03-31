# projet-web-visu
simple visualisation of biological mechanism
> _auteur :_Solweig Hennechart
> _date : _**2020/03/31

##Projet Final de Web Avancé sujet 5

###Présentation du sujet

L'objectif de ce projet est de modéliser un processus biologique pour une visualisation sur le web, plus précisément le mécanisme de liaison d'un neurotransmetteur à son récepteur. Pour cela nous allons devoir fait un document HTML permettant la visualisation sur un navigateur, un document CSS pour gérer l'aspect de la visualisation et enfin le document JavaScript pour toute la partie modélisation.

###Réalisation

*HTML : En plus des éléments de bases essentiels à tout fichiers HTML, (à compléter avec le cours web1) ce document doit permettre de visualiser la modélisation grâce à un canvas.
*CSS: Ce fichier prend en charge l'aspect extérieur au canvas.
*JavaScript : 

####Analyse des besoins

Dans le sujet 5, l'espace post-synaptique est délimité dans un rectangle dont seulement la bordure droite permet l'entrée des neurotransmetteurs. Ceux-ci sont initialisé aléatoirement dans l'espace pré-synaptique (à l'extérieur du rectangle donc). Les récepteurs en position fermés sont eux localisé dans l'espace post-synaptique en début de simulation et immobiles. Une fois que le neurotransmetteur parvient à entrer dans le rectangle et s'il entre en collision avec un récepteur, celui ci s'ouvre, et devient mobile (en suivant la même trajectoire que le neurotransmetteur, mais en changeant de vitesse ?? (un peut moins vite? ou plus vite peut être ? est ce qu'il peut sortir de l'espace post-synaptique ?)). (si le temps le permet : J'aimerais également ajouter des fonctionnalités supplémentaires pour plus de fonctionnalités utilisateur, comme changer la couleur des neurotransmetteurs ou bien leur direction avec un click, et la couleur des récepteurs en cliquant sur ceux ci dans la légende.)
####Description du code et de l'algorithme

Pour faire ce projet je me suis énormément inspiré du programme "bouncing balls" que nous avons étudié pour la préparation de l'évaluation moodle. En effet beaucoup de fonctionnalités de ce programme sont soit identiques soit très proche de celles nécessaires pour le programme de simulation à faire ici. 

####Rendu du programme

###Conclusion

