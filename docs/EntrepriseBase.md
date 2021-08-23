# PappersApi.EntrepriseBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siren** | **String** | Le numéro SIREN de l&#39;entreprise au format xxxxxxxxx. | [optional] 
**sirenFormate** | **String** | Le numéro SIREN de l&#39;entreprise au format xxx xxx xxx. | [optional] 
**nomEntreprise** | **String** | Le nom de l&#39;entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique. | [optional] 
**personneMorale** | **Boolean** | Vrai en cas de personne morale, faux en cas de personne physique. | [optional] 
**denomination** | **String** | Dénomination de l&#39;entreprise si personne morale. | [optional] 
**nom** | **String** | Nom si personne physique. | [optional] 
**prenom** | **String** | Prénom si personne physique. | [optional] 
**sexe** | **String** | Sexe si personne physique. F pour féminin, M pour masculin. | [optional] 
**codeNaf** | **String** | Code NAF de l&#39;entreprise. | [optional] 
**libelleCodeNaf** | **String** | Libellé du code NAF de l&#39;entreprise. | [optional] 
**domaineActivite** | **String** | Domaine d&#39;activité de l&#39;entreprise. | [optional] 
**conventionsCollectives** | [**[EntrepriseBaseConventionsCollectives]**](EntrepriseBaseConventionsCollectives.md) | Liste des conventions collectives de l&#39;entreprise. | [optional] 
**dateCreation** | **Date** | Date de création de l&#39;entreprise au format AAAA-MM-JJ. | [optional] 
**dateCreationFormate** | **String** | Date de création de l&#39;entreprise au format JJ/MM/AAAA. | [optional] 
**entrepriseCessee** | **Boolean** | Si vrai, l&#39;entreprise n&#39;est plus en activité. Sinon, elle est toujours en activité. | [optional] 
**dateCessation** | **String** | Date de cessation de l&#39;entreprise au format AAAA-MM-JJ. | [optional] 
**entrepriseEmployeuse** | **Boolean** | Si vrai, l&#39;entreprise a au moins un employé. | [optional] 
**categorieJuridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). | [optional] 
**formeJuridique** | **String** | Forme juridique de l&#39;entreprise. | [optional] 
**effectif** | **String** | Tranche d&#39;effectif de l&#39;entreprise. | [optional] 
**effectifMin** | **Number** | Effectif minimal de l&#39;entreprise. | [optional] 
**effectifMax** | **Number** | Effectif maximal de l&#39;entreprise. | [optional] 
**trancheEffectif** | **String** | Tranche d&#39;effectif de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
**anneeEffectif** | **Number** | Année de validité des variables effectif, effectif_min et effectif_max. | [optional] 
**capital** | **Number** | Capital de l&#39;entreprise. | [optional] 
**statutRcs** | **String** | Statut de l&#39;entreprise au RCS | [optional] 


