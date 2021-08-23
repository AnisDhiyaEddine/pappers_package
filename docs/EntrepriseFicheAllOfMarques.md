# PappersApi.EntrepriseFicheAllOfMarques

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numero** | **String** | Numéro de la marque. | [optional] 
**dateEnregistrement** | **String** | Date d&#39;enregistrement de la marque, au format AAAA-MM-JJ. | [optional] 
**dateExpiration** | **String** | Date d&#39;expiration de la marque au format AAAA-MM-JJ. | [optional] 
**lieuEnregistrement** | **String** | Lieu d&#39;enregistrement de la marque. | [optional] 
**statut** | **String** | Statut de la marque. La description des différents types est disponible en page 11 du document suivant : https://www.inpi.fr/sites/default/files/doctech_marques_v1_4.pdf. | [optional] 
**texte** | **String** | Texte de la marque. | [optional] 
**type** | **String** | Type de la marque. | [optional] 
**lienImage** | **String** | Lien vers l&#39;image déposée. | [optional] 
**descriptions** | **[String]** | Liste des descriptions de la marque. | [optional] 
**classes** | [**[EntrepriseFicheAllOfClasses]**](EntrepriseFicheAllOfClasses.md) | Liste des classes (produits et services) de la marque. La liste des classes est disponible à l&#39;adresse suivante : https://bases-marques.inpi.fr/Typo3_INPI_Marques/listeClasseNice. | [optional] 
**deposant** | [**PersonneMarque**](PersonneMarque.md) |  | [optional] 
**mandataire** | [**PersonneMarque**](PersonneMarque.md) |  | [optional] 
**evenements** | [**[EntrepriseFicheAllOfEvenements]**](EntrepriseFicheAllOfEvenements.md) | Liste des événements associés à la marque. | [optional] 



## Enum: StatutEnum


* `Demande déposée` (value: `"Demande déposée"`)

* `Demande publiée` (value: `"Demande publiée"`)

* `Demande non publiée` (value: `"Demande non publiée"`)

* `Demande irrecevable après publication` (value: `"Demande irrecevable après publication"`)

* `Marque enregistrée` (value: `"Marque enregistrée"`)

* `Renouvellement demandé` (value: `"Renouvellement demandé"`)

* `Marque renouvelée` (value: `"Marque renouvelée"`)

* `Demande totalement rejetée` (value: `"Demande totalement rejetée"`)

* `Marque ayant fait l&#39;objet d&#39;une renonciation totale` (value: `"Marque ayant fait l'objet d'une renonciation totale"`)

* `Marque ayant fait l&#39;objet d&#39;un retrait total` (value: `"Marque ayant fait l'objet d'un retrait total"`)

* `Marque annulée` (value: `"Marque annulée"`)

* `Marque expirée` (value: `"Marque expirée"`)





## Enum: TypeEnum


* `Mixte` (value: `"Mixte"`)

* `Figuratif` (value: `"Figuratif"`)

* `Hologramme` (value: `"Hologramme"`)

* `Son` (value: `"Son"`)

* `Texte` (value: `"Texte"`)

* `3D` (value: `"3D"`)

* `Position` (value: `"Position"`)

* `Mouvement` (value: `"Mouvement"`)

* `Multimedia` (value: `"Multimedia"`)

* `Motifs` (value: `"Motifs"`)

* `Couleur` (value: `"Couleur"`)

* `Forme` (value: `"Forme"`)

* `Autre` (value: `"Autre"`)




