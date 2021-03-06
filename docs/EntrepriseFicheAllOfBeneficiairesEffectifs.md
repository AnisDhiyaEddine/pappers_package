# PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateGreffe** | **Date** | Date de génération des bénéficiaires effectifs, au format AAAA-MM-JJ. | [optional] 
**type** | **String** | Type du bénéficiaire effectif | [optional] 
**nom** | **String** | Nom du bénéficiaire effectif. | [optional] 
**nomUsage** | **String** | Nom d&#39;usage du bénéficiaire effectif. | [optional] 
**prenom** | **String** | Prénom du bénéficiaire effectif. | [optional] 
**pseudonyme** | **String** |  | [optional] 
**dateDeNaissanceFormatee** | **String** | Mois et année de naissance du bénéficiaire effectif, au format MM/AAAA. | [optional] 
**dateDeNaissanceCompleteFormatee** | **Date** | Date de naissance complète du bénéficiaire effectif, au format JJ/MM/AAAA. | [optional] 
**nationalite** | **String** | Nationalité du bénéficiaire effectif. | [optional] 
**codeNationalite** | **String** | Code de la nationalité du bénéficiaire effectif. | [optional] 
**villeDeNaissance** | **String** | Ville de naissance du bénéficiaire effectif. | [optional] 
**paysDeNaissance** | **String** | Pays de naissance du bénéficiaire effectif. | [optional] 
**codePaysDeNaissance** | **String** | Code du pays de naissance du bénéficiaire effectif. | [optional] 
**adresseLigne1** | **String** | Première ligne de l&#39;adresse du bénéficiaire effectif. | [optional] 
**adresseLigne2** | **String** | Deuxième ligne de l&#39;adresse du bénéficiaire effectif. | [optional] 
**adresseLigne3** | **String** | Troisième ligne de l&#39;adresse du bénéficiaire effectif. | [optional] 
**codePostal** | **String** | Code postal du bénéficiaire effectif. | [optional] 
**ville** | **String** | Ville du bénéficiaire effectif. | [optional] 
**pays** | **String** | Pays du bénéficiaire effectif. | [optional] 
**codePays** | **String** | Code du pays du bénéficiaire effectif. | [optional] 
**pourcentageParts** | **Number** | Parts détenues par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] 
**pourcentagePartsDirectes** | **Number** | Parts détenues de façon directe par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] 
**pourcentagePartsIndirectes** | **Number** | Parts détenues de façon indirecte par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] 
**pourcentagePartsVocationTitulaire** | **Number** | Parts dont le bénéficiaire effectif a vocation à devenir titulaire par l&#39;effet d&#39;un acte juridique, en pourcentage des parts totales. | [optional] 
**detailsPartsDirectes** | [**EntrepriseFicheAllOfDetailsPartsDirectes**](EntrepriseFicheAllOfDetailsPartsDirectes.md) |  | [optional] 
**detailsPartsIndirectes** | [**EntrepriseFicheAllOfDetailsPartsIndirectes**](EntrepriseFicheAllOfDetailsPartsIndirectes.md) |  | [optional] 
**detailsPartsVocationTitulaire** | [**EntrepriseFicheAllOfDetailsPartsVocationTitulaire**](EntrepriseFicheAllOfDetailsPartsVocationTitulaire.md) |  | [optional] 
**pourcentageVotes** | **Number** | Droits de vote détenus par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] 
**pourcentageVotesDirects** | **Number** | Droits de vote détenus de façon directe par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] 
**pourcentageVotesIndirect** | **Number** | Droits de vote détenus de façon indirecte par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] 
**detailsVotesDirects** | [**EntrepriseFicheAllOfDetailsVotesDirects**](EntrepriseFicheAllOfDetailsVotesDirects.md) |  | [optional] 
**detailsVotesIndirects** | [**EntrepriseFicheAllOfDetailsVotesIndirects**](EntrepriseFicheAllOfDetailsVotesIndirects.md) |  | [optional] 
**detailsSocieteDeGestion** | [**EntrepriseFicheAllOfDetailsSocieteDeGestion**](EntrepriseFicheAllOfDetailsSocieteDeGestion.md) |  | [optional] 
**detentionPouvoirDecisionAg** | **Boolean** | Vaut vrai pour les moyens de contrôle sur les organes d&#39;administration, de gestion, de direction ou de surveillance de la personne morale autre que le pouvoir de nommer ou de révoquer la majorité des membres. | [optional] 
**detentionPouvoirNomMembreConseilAdministration** | **Boolean** | Vaut vrai si le moyen de contrôle est le pouvoir de nommer ou de révoquer la majorité des membres des organes d&#39;administration, de gestion, de direction ou de surveillance de la personne morale. | [optional] 
**detentionAutresMoyensControle** | **Boolean** | Vaut vrai s&#39;il existe d&#39;autres moyens de contrôle. | [optional] 
**beneficiaireRepresentantLegal** | **Boolean** | Vaut vrai dans le cas où le bénéficiaire effectif a été défini comme le représentant légal par défaut. | [optional] 
**representantLegalPlacementSansGestionDelegation** | **Boolean** | Vaut vrai dans le cas où le bénéficiaire effectif est le représentant légal du placement collectif (cas où le placement collectif n&#39;a pas délégué sa gestion à une société de gestion). | [optional] 


