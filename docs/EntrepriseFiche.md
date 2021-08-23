# PappersApi.EntrepriseFiche

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
**statutRcs** | **String** | Statut de l&#39;entreprise au RCS. Peut valoir \&quot;Inscrit\&quot;, \&quot;Non inscrit\&quot; ou \&quot;Radié\&quot;. | [optional] 
**siege** | [**EtablissementFiche**](EtablissementFiche.md) |  | [optional] 
**diffusable** | **Boolean** | Le statut de diffusion de l&#39;entreprise. Non diffusable correspond à une personne physique ayant demandé à être exclue de la diffusion. Aucune information n&#39;est alors disponible. Cette modalité n&#39;est visible que pour les organismes habilités au titre de l&#39;article R. 123-224 ou les administrations. | [optional] 
**sigle** | **String** | Sigle de l&#39;entreprise si personne morale. | [optional] 
**objetSocial** | **String** | Objet social de l&#39;entreprise. | [optional] 
**capitalFormate** | **String** | Capital l&#39;entreprise au format xx xxx €. | [optional] 
**capitalActuelSiVariable** | **String** | Capital actuel de l&#39;entreprise si variable. | [optional] 
**deviseCapital** | **String** | Devise de capital_formate et capital_actuel_si_variable. | [optional] 
**numeroRcs** | **String** | Numéro RCS de l&#39;entreprise. | [optional] 
**dateClotureExercice** | **String** | Date de clôture d&#39;exercice de l&#39;entreprise. | [optional] 
**dateClotureExerciceExceptionnelle** | **String** | Date de clôture d&#39;exercice exceptionnel de l&#39;entreprise. | [optional] 
**dateClotureExerciceExceptionnelleFormate** | **String** | Date de clôture d&#39;exercice exceptionnel formatée de l&#39;entreprise. | [optional] 
**prochaineDateClotureExercice** | **String** | Prochaine date de clôture d&#39;exercice de l&#39;entreprise. | [optional] 
**prochaineDateClotureExerciceFormate** | **String** | Prochaine date de clôture d&#39;exercice formatée de l&#39;entreprise. | [optional] 
**economieSocialeSolidaire** | **Boolean** | Vrai si l&#39;entreprise est une entreprise de l&#39;économie sociale et solidaire. | [optional] 
**dureePersonneMorale** | **String** | Durée de la personne morale. | [optional] 
**dernierTraitement** | **Date** | Date de dernier traitement de l&#39;entreprise. | [optional] 
**derniereMiseAJourSirene** | **Date** | Dernière mise à jour de la base de donnée sirène au format AAAA-MM-JJ. | [optional] 
**derniereMiseAJourRcs** | **Date** | Dernière mise à jour de la base de donnée RCS au format AAAA-MM-JJ. | [optional] 
**greffe** | **String** | Greffe RCS de l&#39;entreprise. | [optional] 
**codeGreffe** | **String** | Code greffe RCS de l&#39;entreprise. | [optional] 
**dateImmatriculationRcs** | **String** | Date d&#39;immatriculation de l&#39;entreprise au RCS. | [optional] 
**datePremiereImmatriculationRcs** | **String** | Date de la première immatriculation de l&#39;entreprise au RCS. | [optional] 
**dateRadiationRcs** | **String** | Date de radiation de l&#39;entreprise au RCS. | [optional] 
**numeroTvaIntracommunautaire** | **String** | Numéro de TVA intracommunautaire de l&#39;entreprise. | [optional] 
**associeUnique** | **Boolean** | Si vrai, l&#39;entreprise est à associé unique (notamment pour les SASU et les EURL). | [optional] 
**etablissements** | [**[EtablissementFiche]**](EtablissementFiche.md) | Liste des établissements de l&#39;entreprise. | [optional] 
**finances** | **[Object]** | Liste des finances de l&#39;entreprise. | [optional] 
**representants** | [**[Representant]**](Representant.md) | Liste des représentants de l&#39;entreprise. | [optional] 
**beneficiairesEffectifs** | [**[EntrepriseFicheAllOfBeneficiairesEffectifs]**](EntrepriseFicheAllOfBeneficiairesEffectifs.md) | Liste des bénéficiaires effectifs de l&#39;entreprise (si disponibles). | [optional] 
**depotsActes** | [**[EntrepriseFicheAllOfDepotsActes]**](EntrepriseFicheAllOfDepotsActes.md) | Liste des actes de l&#39;entreprise. | [optional] 
**comptes** | [**[EntrepriseFicheAllOfComptes]**](EntrepriseFicheAllOfComptes.md) | Liste des comptes de l&#39;entreprise. | [optional] 
**publicationsBodacc** | [**[Bodacc]**](Bodacc.md) | Liste des publications au Bodacc de l&#39;entreprise. | [optional] 
**proceduresCollectives** | [**[EntrepriseFicheAllOfProceduresCollectives]**](EntrepriseFicheAllOfProceduresCollectives.md) | Liste des procédures collectives de l&#39;entreprise. | [optional] 
**procedureCollectiveExiste** | **Boolean** | Vrai si l&#39;entreprise a des procédures collectives (en cours ou terminées), faux sinon. | [optional] 
**procedureCollectiveEnCours** | **Boolean** | Vrai si l&#39;entreprise a des procédures collectives en cours, faux sinon. | [optional] 
**derniersStatuts** | [**EntrepriseFicheAllOfDerniersStatuts**](EntrepriseFicheAllOfDerniersStatuts.md) |  | [optional] 
**extraitImmatriculation** | [**EntrepriseFicheAllOfExtraitImmatriculation**](EntrepriseFicheAllOfExtraitImmatriculation.md) |  | [optional] 
**rnm** | [**EntrepriseFicheAllOfRnm**](EntrepriseFicheAllOfRnm.md) |  | [optional] 
**marques** | [**[EntrepriseFicheAllOfMarques]**](EntrepriseFicheAllOfMarques.md) | Liste des marques françaises déposées par l&#39;entreprise. Uniquement présent si le paramètre \&quot;marques\&quot; a été mis à vrai. | [optional] 

