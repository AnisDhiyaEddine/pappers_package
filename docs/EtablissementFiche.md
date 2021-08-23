# PappersApi.EtablissementFiche

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siret** | **String** | Numéro siret de l&#39;établissement au format xxxxxxxxxxxxxx. | [optional] 
**siretFormate** | **String** | Numéro siret de l&#39;établissement au format xxx xxx xxx xxxxx. | [optional] 
**nic** | **String** | Numéro NIC de l&#39;établissement. | [optional] 
**codePostal** | **String** | Code postal de l&#39;établissement. | [optional] 
**ville** | **String** | Ville de l&#39;établissement. | [optional] 
**pays** | **String** | Pays de l&#39;établissement | [optional] 
**codePays** | **String** | Code du pays de l&#39;établissement | [optional] 
**latitude** | **Number** | Latitude de l&#39;établissement. | [optional] 
**longitude** | **Number** | Longitude de l&#39;établissement. | [optional] 
**etablissementCesse** | **Boolean** | Vrai si l&#39;établissement est cessé, faux si il est en activité. | [optional] 
**siege** | **Boolean** | Vrai si l&#39;établissement est siège, faux s&#39;il ne l&#39;est pas. | [optional] 
**etablissementEmployeur** | **Boolean** | Si vrai, l&#39;établissement a au moins un employé. | [optional] 
**effectif** | **String** | Tranche d&#39;effectif de l&#39;établissement. | [optional] 
**effectifMin** | **Number** | Effectif minimal de l&#39;établissement. | [optional] 
**effectifMax** | **Number** | Effectif maximal de l&#39;établissement. | [optional] 
**trancheEffectif** | **String** | Tranche d&#39;effectif de l&#39;établissement, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
**anneeEffectif** | **Number** | Année correspondante à la tranche d&#39;effectif de l&#39;établissement. | [optional] 
**codeNaf** | **String** | Code NAF de l&#39;établissement. | [optional] 
**libelleCodeNaf** | **String** | Libellé du code NAF de l&#39;établissement. | [optional] 
**dateDeCreation** | **String** |  | [optional] 
**numeroVoie** | **Number** | Numéro de voie de l&#39;établissement. | [optional] 
**indiceRepetition** | **String** | Indice de répétition de l&#39;établissement. | [optional] 
**typeVoie** | **String** | Type de voie de l&#39;établissement. | [optional] 
**libelleVoie** | **String** | Libellé de la voie de l&#39;établissement. | [optional] 
**complementAdresse** | **String** | Complément d&#39;adresse de l&#39;établissement. | [optional] 
**adresseLigne1** | **String** | Première ligne de l&#39;adresse de l&#39;établissement. Correspond à l&#39;ensemble des données numero_voie, indice_repetition, type_voie et libelle_voie. | [optional] 
**adresseLigne2** | **String** | Seconde ligne de l&#39;adresse de l&#39;établissement. Est égal à complement_adresse | [optional] 
**dateCessation** | **String** | Date de fermeture de l&#39;établissement | [optional] 
**domiciliation** | [**EtablissementFicheDomiciliation**](EtablissementFicheDomiciliation.md) |  | [optional] 


