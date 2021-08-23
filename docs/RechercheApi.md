# PappersApi.RechercheApi

All URIs are relative to *https://api.pappers.fr/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recherche**](RechercheApi.md#recherche) | **GET** /recherche | Recherche les entreprises qui correspondent à des critères.
[**rechercheBeneficiaires**](RechercheApi.md#rechercheBeneficiaires) | **GET** /recherche-beneficiaires | Recherche les bénéficiaires effectifs qui correspondent à des critères.
[**rechercheDirigeants**](RechercheApi.md#rechercheDirigeants) | **GET** /recherche-dirigeants | Recherche les dirigeants qui correspondent à des critères.
[**rechercheDocuments**](RechercheApi.md#rechercheDocuments) | **GET** /recherche-documents | Recherche les documents qui correspondent à des critères.
[**recherchePublications**](RechercheApi.md#recherchePublications) | **GET** /recherche-publications | Recherche les publications BODACC qui correspondent à des critères.



## recherche

> InlineResponse200 recherche(apiToken, opts)

Recherche les entreprises qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différentes entreprises seront renvoyées dans un tableau &#x60;resultats&#x60;, et le nombre total de résultats sera renvoyé dans le champ &#x60;total&#x60;.  Pour parcourir l&#39;ensemble des résultats, deux solutions sont possibles :  - La pagination (paramètres &#x60;page&#x60; et &#x60;par_page&#x60;), limitée aux 400 premiers résultats ; - Les curseurs (paramètres &#x60;curseur&#x60; et &#x60;par_curseur&#x60;).  Cette route permet également le téléchargement d&#39;un export des résultats de recherche au format xlsx, csv ou json. Il faut pour cela utiliser le paramètre &#x60;export&#x60;. 

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.RechercheApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let opts = {
  'page': 1, // Number | Page de résultats. Valeur par défaut : `1`.
  'parPage': 20, // Number | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  'curseur': *, // String | Curseur servant à parcourir l'ensemble des résultats (alternativement à la pagination qui est limitée à 400 résultats maximum). Doit valoir `*` pour la première requête, et doit pour les requêtes suivantes reprendre la valeur `curseurSuivant` retournée par la dernière réponse.
  'parCurseur': 20, // Number | Nombre de résultats affichés par curseur. Valeur par défaut : `50`. Valeur minimale: `1`. Valeur maximale : `1000`.
  'bases': entreprises, // String | Bases de données dans lesquelles rechercher. Il est possible d'indiquer plusieurs bases en les séparant par des virgules. Valeur par défaut : `\"entreprises\"`.
  'precision': standard, // String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  '_export': xlsx, // String | Si ce champ est renseigné, la requête renverra directement un export de l'ensemble des résultats de la recherche.
  'q': Google France, // String | Texte à rechercher. Dénomination pour une personne morale, nom et prénom pour une personne physique. Si vous recherchez dans plusieurs bases, ce paramètre sera utilisé pour rechercher dans toutes les bases.
  'siege': true, // String | Défini si la requête se base sur le siège
  'codeNaf': 70.10Z, // String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  'departement': 75, // String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  'region': 11, // String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  'codePostal': 75009, // String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  'conventionCollective': 1486, // String | Convention collective de l'entreprise.
  'categorieJuridique': 5499, // String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
  'entrepriseCessee': false, // Boolean | Activité de l'entreprise cessée ou non.
  'statutRcs': inscrit, // String | Statut au RCS
  'objetSocial': La conception de moteurs de recherche sur internet., // String | Objet social de l'entreprise déclaré au RCS.
  'dateRadiationRcsMin': 15-05-2002, // String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateRadiationRcsMax': 17-05-2002, // String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  'capitalMin': 411016200, // String | Capital minimum de l'entreprise.
  'capitalMax': 411016400, // String | Capital maximum de l'entreprise.
  'chiffreAffairesMin': 411016200, // String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'chiffreAffairesMax': 411016400, // String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMin': 29327000, // String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMax': 29327100, // String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'dateCreationMin': 15-05-2002, // String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateCreationMax': 17-05-2002, // String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  'trancheEffectifMin': 40, // String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'trancheEffectifMax': 42, // String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'ageDirigeantMin': 40, // Number | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'ageDirigeantMax': 42, // Number | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceDirigeantMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceDirigeantMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'ageBeneficiaireMin': 40, // Number | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'ageBeneficiaireMax': 42, // Number | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceBeneficiaireMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceBeneficiaireMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'dateDepotDocumentMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  'dateDepotDocumentMax': Sun Dec 31 01:00:00 CET 2000, // Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  'typePublication': Procédure collective, // String | Type de publication
  'datePublicationMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  'datePublicationMax': Sun Dec 31 01:00:00 CET 2000 // Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
};
apiInstance.recherche(apiToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**| Clé d&#39;utilisation de l&#39;API | 
 **page** | **Number**| Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] 
 **parPage** | **Number**| Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] 
 **curseur** | **String**| Curseur servant à parcourir l&#39;ensemble des résultats (alternativement à la pagination qui est limitée à 400 résultats maximum). Doit valoir &#x60;*&#x60; pour la première requête, et doit pour les requêtes suivantes reprendre la valeur &#x60;curseurSuivant&#x60; retournée par la dernière réponse. | [optional] 
 **parCurseur** | **Number**| Nombre de résultats affichés par curseur. Valeur par défaut : &#x60;50&#x60;. Valeur minimale: &#x60;1&#x60;. Valeur maximale : &#x60;1000&#x60;. | [optional] 
 **bases** | **String**| Bases de données dans lesquelles rechercher. Il est possible d&#39;indiquer plusieurs bases en les séparant par des virgules. Valeur par défaut : &#x60;\&quot;entreprises\&quot;&#x60;. | [optional] 
 **precision** | **String**| Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] 
 **_export** | **String**| Si ce champ est renseigné, la requête renverra directement un export de l&#39;ensemble des résultats de la recherche. | [optional] 
 **q** | **String**| Texte à rechercher. Dénomination pour une personne morale, nom et prénom pour une personne physique. Si vous recherchez dans plusieurs bases, ce paramètre sera utilisé pour rechercher dans toutes les bases. | [optional] 
 **siege** | **String**| Défini si la requête se base sur le siège | [optional] 
 **codeNaf** | **String**| Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] 
 **departement** | **String**| Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] 
 **region** | **String**| Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] 
 **codePostal** | **String**| Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] 
 **conventionCollective** | **String**| Convention collective de l&#39;entreprise. | [optional] 
 **categorieJuridique** | **String**| Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). | [optional] 
 **entrepriseCessee** | **Boolean**| Activité de l&#39;entreprise cessée ou non. | [optional] 
 **statutRcs** | **String**| Statut au RCS | [optional] 
 **objetSocial** | **String**| Objet social de l&#39;entreprise déclaré au RCS. | [optional] 
 **dateRadiationRcsMin** | **String**| Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateRadiationRcsMax** | **String**| Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **capitalMin** | **String**| Capital minimum de l&#39;entreprise. | [optional] 
 **capitalMax** | **String**| Capital maximum de l&#39;entreprise. | [optional] 
 **chiffreAffairesMin** | **String**| Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **chiffreAffairesMax** | **String**| Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMin** | **String**| Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMax** | **String**| Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **dateCreationMin** | **String**| Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateCreationMax** | **String**| Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **trancheEffectifMin** | **String**| Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **trancheEffectifMax** | **String**| Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **ageDirigeantMin** | **Number**| Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageDirigeantMax** | **Number**| Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceDirigeantMin** | **Date**| Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceDirigeantMax** | **Date**| Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **ageBeneficiaireMin** | **Number**| Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageBeneficiaireMax** | **Number**| Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceBeneficiaireMin** | **Date**| Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceBeneficiaireMax** | **Date**| Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMin** | **Date**| Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMax** | **Date**| Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] 
 **typePublication** | **String**| Type de publication | [optional] 
 **datePublicationMin** | **Date**| Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] 
 **datePublicationMax** | **Date**| Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rechercheBeneficiaires

> InlineResponse2002 rechercheBeneficiaires(apiToken, opts)

Recherche les bénéficiaires effectifs qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différents bénéficiaires effectifs seront renvoyées dans un tableau &#x60;resultats&#x60;.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.RechercheApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let opts = {
  'parPage': 20, // Number | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  'page': 1, // Number | Page de résultats. Valeur par défaut : `1`.
  'precision': standard, // String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  'q': Xavier Niel, // String | Nom et/ou prénom du bénéficiaire effectif.
  'ageBeneficiaireMin': 40, // Number | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'ageBeneficiaireMax': 42, // Number | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceBeneficiaireMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceBeneficiaireMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'codeNaf': 70.10Z, // String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  'departement': 75, // String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  'region': 11, // String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  'codePostal': 75009, // String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  'conventionCollective': 1486, // String | Convention collective de l'entreprise.
  'categorieJuridique': 5499, // String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
  'entrepriseCessee': false, // Boolean | Activité de l'entreprise cessée ou non.
  'statutRcs': inscrit, // String | Statut au RCS
  'objetSocial': La conception de moteurs de recherche sur internet., // String | Objet social de l'entreprise déclaré au RCS.
  'dateRadiationRcsMin': 15-05-2002, // String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateRadiationRcsMax': 17-05-2002, // String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  'capitalMin': 411016200, // String | Capital minimum de l'entreprise.
  'capitalMax': 411016400, // String | Capital maximum de l'entreprise.
  'chiffreAffairesMin': 411016200, // String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'chiffreAffairesMax': 411016400, // String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMin': 29327000, // String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMax': 29327100, // String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'dateCreationMin': 15-05-2002, // String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateCreationMax': 17-05-2002, // String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  'trancheEffectifMin': 40, // String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'trancheEffectifMax': 42, // String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'ageDirigeantMin': 40, // Number | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'ageDirigeantMax': 42, // Number | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceDirigeantMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceDirigeantMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'dateDepotDocumentMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  'dateDepotDocumentMax': Sun Dec 31 01:00:00 CET 2000, // Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  'typePublication': Procédure collective, // String | Type de publication
  'datePublicationMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  'datePublicationMax': Sun Dec 31 01:00:00 CET 2000 // Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
};
apiInstance.rechercheBeneficiaires(apiToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**| Clé d&#39;utilisation de l&#39;API | 
 **parPage** | **Number**| Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] 
 **page** | **Number**| Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] 
 **precision** | **String**| Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] 
 **q** | **String**| Nom et/ou prénom du bénéficiaire effectif. | [optional] 
 **ageBeneficiaireMin** | **Number**| Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageBeneficiaireMax** | **Number**| Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceBeneficiaireMin** | **Date**| Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceBeneficiaireMax** | **Date**| Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **codeNaf** | **String**| Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] 
 **departement** | **String**| Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] 
 **region** | **String**| Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] 
 **codePostal** | **String**| Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] 
 **conventionCollective** | **String**| Convention collective de l&#39;entreprise. | [optional] 
 **categorieJuridique** | **String**| Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). | [optional] 
 **entrepriseCessee** | **Boolean**| Activité de l&#39;entreprise cessée ou non. | [optional] 
 **statutRcs** | **String**| Statut au RCS | [optional] 
 **objetSocial** | **String**| Objet social de l&#39;entreprise déclaré au RCS. | [optional] 
 **dateRadiationRcsMin** | **String**| Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateRadiationRcsMax** | **String**| Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **capitalMin** | **String**| Capital minimum de l&#39;entreprise. | [optional] 
 **capitalMax** | **String**| Capital maximum de l&#39;entreprise. | [optional] 
 **chiffreAffairesMin** | **String**| Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **chiffreAffairesMax** | **String**| Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMin** | **String**| Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMax** | **String**| Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **dateCreationMin** | **String**| Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateCreationMax** | **String**| Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **trancheEffectifMin** | **String**| Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **trancheEffectifMax** | **String**| Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **ageDirigeantMin** | **Number**| Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageDirigeantMax** | **Number**| Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceDirigeantMin** | **Date**| Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceDirigeantMax** | **Date**| Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMin** | **Date**| Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMax** | **Date**| Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] 
 **typePublication** | **String**| Type de publication | [optional] 
 **datePublicationMin** | **Date**| Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] 
 **datePublicationMax** | **Date**| Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rechercheDirigeants

> InlineResponse2001 rechercheDirigeants(apiToken, opts)

Recherche les dirigeants qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différents dirigeants seront renvoyées dans un tableau &#x60;resultats&#x60;.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.RechercheApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let opts = {
  'parPage': 20, // Number | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  'page': 1, // Number | Page de résultats. Valeur par défaut : `1`.
  'precision': standard, // String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  'q': Google France, // String | Texte à rechercher. Nom et prénom du dirigeant pour une personne physique, dénomination pour une personne morale.
  'ageDirigeantMin': 40, // Number | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'ageDirigeantMax': 42, // Number | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceDirigeantMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceDirigeantMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'codeNaf': 70.10Z, // String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  'departement': 75, // String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  'region': 11, // String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  'codePostal': 75009, // String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  'conventionCollective': 1486, // String | Convention collective de l'entreprise.
  'categorieJuridique': 5499, // String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
  'entrepriseCessee': false, // Boolean | Activité de l'entreprise cessée ou non.
  'statutRcs': inscrit, // String | Statut au RCS
  'objetSocial': La conception de moteurs de recherche sur internet., // String | Objet social de l'entreprise déclaré au RCS.
  'dateRadiationRcsMin': 15-05-2002, // String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateRadiationRcsMax': 17-05-2002, // String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  'capitalMin': 411016200, // String | Capital minimum de l'entreprise.
  'capitalMax': 411016400, // String | Capital maximum de l'entreprise.
  'chiffreAffairesMin': 411016200, // String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'chiffreAffairesMax': 411016400, // String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMin': 29327000, // String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMax': 29327100, // String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'dateCreationMin': 15-05-2002, // String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateCreationMax': 17-05-2002, // String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  'trancheEffectifMin': 40, // String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'trancheEffectifMax': 42, // String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'ageBeneficiaireMin': 40, // Number | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'ageBeneficiaireMax': 42, // Number | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceBeneficiaireMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceBeneficiaireMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'dateDepotDocumentMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  'dateDepotDocumentMax': Sun Dec 31 01:00:00 CET 2000, // Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  'typePublication': Procédure collective, // String | Type de publication
  'datePublicationMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  'datePublicationMax': Sun Dec 31 01:00:00 CET 2000 // Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
};
apiInstance.rechercheDirigeants(apiToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**| Clé d&#39;utilisation de l&#39;API | 
 **parPage** | **Number**| Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] 
 **page** | **Number**| Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] 
 **precision** | **String**| Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] 
 **q** | **String**| Texte à rechercher. Nom et prénom du dirigeant pour une personne physique, dénomination pour une personne morale. | [optional] 
 **ageDirigeantMin** | **Number**| Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageDirigeantMax** | **Number**| Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceDirigeantMin** | **Date**| Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceDirigeantMax** | **Date**| Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **codeNaf** | **String**| Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] 
 **departement** | **String**| Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] 
 **region** | **String**| Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] 
 **codePostal** | **String**| Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] 
 **conventionCollective** | **String**| Convention collective de l&#39;entreprise. | [optional] 
 **categorieJuridique** | **String**| Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). | [optional] 
 **entrepriseCessee** | **Boolean**| Activité de l&#39;entreprise cessée ou non. | [optional] 
 **statutRcs** | **String**| Statut au RCS | [optional] 
 **objetSocial** | **String**| Objet social de l&#39;entreprise déclaré au RCS. | [optional] 
 **dateRadiationRcsMin** | **String**| Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateRadiationRcsMax** | **String**| Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **capitalMin** | **String**| Capital minimum de l&#39;entreprise. | [optional] 
 **capitalMax** | **String**| Capital maximum de l&#39;entreprise. | [optional] 
 **chiffreAffairesMin** | **String**| Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **chiffreAffairesMax** | **String**| Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMin** | **String**| Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMax** | **String**| Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **dateCreationMin** | **String**| Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateCreationMax** | **String**| Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **trancheEffectifMin** | **String**| Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **trancheEffectifMax** | **String**| Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **ageBeneficiaireMin** | **Number**| Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageBeneficiaireMax** | **Number**| Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceBeneficiaireMin** | **Date**| Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceBeneficiaireMax** | **Date**| Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMin** | **Date**| Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMax** | **Date**| Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] 
 **typePublication** | **String**| Type de publication | [optional] 
 **datePublicationMin** | **Date**| Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] 
 **datePublicationMax** | **Date**| Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rechercheDocuments

> InlineResponse2003 rechercheDocuments(apiToken, opts)

Recherche les documents qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différents documents seront renvoyées dans un tableau &#x60;resultats&#x60;.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.RechercheApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let opts = {
  'parPage': 20, // Number | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  'page': 1, // Number | Page de résultats. Valeur par défaut : `1`.
  'precision': standard, // String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  'q': Rémunération, // String | Mot-clé à rechercher dans le contenu du document.
  'dateDepotDocumentMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  'dateDepotDocumentMax': Sun Dec 31 01:00:00 CET 2000, // Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  'codeNaf': 70.10Z, // String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  'departement': 75, // String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  'region': 11, // String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  'codePostal': 75009, // String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  'conventionCollective': 1486, // String | Convention collective de l'entreprise.
  'categorieJuridique': 5499, // String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
  'entrepriseCessee': false, // Boolean | Activité de l'entreprise cessée ou non.
  'statutRcs': inscrit, // String | Statut au RCS
  'objetSocial': La conception de moteurs de recherche sur internet., // String | Objet social de l'entreprise déclaré au RCS.
  'dateRadiationRcsMin': 15-05-2002, // String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateRadiationRcsMax': 17-05-2002, // String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  'capitalMin': 411016200, // String | Capital minimum de l'entreprise.
  'capitalMax': 411016400, // String | Capital maximum de l'entreprise.
  'chiffreAffairesMin': 411016200, // String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'chiffreAffairesMax': 411016400, // String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMin': 29327000, // String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMax': 29327100, // String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'dateCreationMin': 15-05-2002, // String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateCreationMax': 17-05-2002, // String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  'trancheEffectifMin': 40, // String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'trancheEffectifMax': 42, // String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'ageDirigeantMin': 40, // Number | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'ageDirigeantMax': 42, // Number | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceDirigeantMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceDirigeantMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'ageBeneficiaireMin': 40, // Number | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'ageBeneficiaireMax': 42, // Number | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceBeneficiaireMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceBeneficiaireMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'typePublication': Procédure collective, // String | Type de publication
  'datePublicationMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  'datePublicationMax': Sun Dec 31 01:00:00 CET 2000 // Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
};
apiInstance.rechercheDocuments(apiToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**| Clé d&#39;utilisation de l&#39;API | 
 **parPage** | **Number**| Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] 
 **page** | **Number**| Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] 
 **precision** | **String**| Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] 
 **q** | **String**| Mot-clé à rechercher dans le contenu du document. | [optional] 
 **dateDepotDocumentMin** | **Date**| Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMax** | **Date**| Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] 
 **codeNaf** | **String**| Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] 
 **departement** | **String**| Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] 
 **region** | **String**| Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] 
 **codePostal** | **String**| Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] 
 **conventionCollective** | **String**| Convention collective de l&#39;entreprise. | [optional] 
 **categorieJuridique** | **String**| Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). | [optional] 
 **entrepriseCessee** | **Boolean**| Activité de l&#39;entreprise cessée ou non. | [optional] 
 **statutRcs** | **String**| Statut au RCS | [optional] 
 **objetSocial** | **String**| Objet social de l&#39;entreprise déclaré au RCS. | [optional] 
 **dateRadiationRcsMin** | **String**| Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateRadiationRcsMax** | **String**| Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **capitalMin** | **String**| Capital minimum de l&#39;entreprise. | [optional] 
 **capitalMax** | **String**| Capital maximum de l&#39;entreprise. | [optional] 
 **chiffreAffairesMin** | **String**| Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **chiffreAffairesMax** | **String**| Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMin** | **String**| Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMax** | **String**| Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **dateCreationMin** | **String**| Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateCreationMax** | **String**| Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **trancheEffectifMin** | **String**| Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **trancheEffectifMax** | **String**| Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **ageDirigeantMin** | **Number**| Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageDirigeantMax** | **Number**| Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceDirigeantMin** | **Date**| Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceDirigeantMax** | **Date**| Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **ageBeneficiaireMin** | **Number**| Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageBeneficiaireMax** | **Number**| Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceBeneficiaireMin** | **Date**| Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceBeneficiaireMax** | **Date**| Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **typePublication** | **String**| Type de publication | [optional] 
 **datePublicationMin** | **Date**| Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] 
 **datePublicationMax** | **Date**| Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recherchePublications

> InlineResponse2004 recherchePublications(apiToken, opts)

Recherche les publications BODACC qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différentes publications seront renvoyées dans un tableau &#x60;resultats&#x60;.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.RechercheApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let opts = {
  'parPage': 20, // Number | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  'page': 1, // Number | Page de résultats. Valeur par défaut : `1`.
  'precision': standard, // String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  'q': Liquidation, // String | Mot-clé à rechercher dans le contenu de la publication.
  'codeNaf': 70.10Z, // String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  'departement': 75, // String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  'region': 11, // String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  'codePostal': 75009, // String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  'conventionCollective': 1486, // String | Convention collective de l'entreprise.
  'categorieJuridique': 5499, // String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
  'entrepriseCessee': false, // Boolean | Activité de l'entreprise cessée ou non.
  'statutRcs': inscrit, // String | Statut au RCS
  'objetSocial': La conception de moteurs de recherche sur internet., // String | Objet social de l'entreprise déclaré au RCS.
  'dateRadiationRcsMin': 15-05-2002, // String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateRadiationRcsMax': 17-05-2002, // String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  'capitalMin': 411016200, // String | Capital minimum de l'entreprise.
  'capitalMax': 411016400, // String | Capital maximum de l'entreprise.
  'chiffreAffairesMin': 411016200, // String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'chiffreAffairesMax': 411016400, // String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMin': 29327000, // String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'resultatMax': 29327100, // String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  'dateCreationMin': 15-05-2002, // String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  'dateCreationMax': 17-05-2002, // String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  'trancheEffectifMin': 40, // String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'trancheEffectifMax': 42, // String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
  'ageDirigeantMin': 40, // Number | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'ageDirigeantMax': 42, // Number | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceDirigeantMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceDirigeantMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'ageBeneficiaireMin': 40, // Number | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'ageBeneficiaireMax': 42, // Number | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  'dateDeNaissanceBeneficiaireMin': Thu Jan 01 01:00:00 CET 1970, // Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  'dateDeNaissanceBeneficiaireMax': Thu Dec 31 01:00:00 CET 1970, // Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  'dateDepotDocumentMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  'dateDepotDocumentMax': Sun Dec 31 01:00:00 CET 2000, // Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  'typePublication': Procédure collective, // String | Type de publication
  'datePublicationMin': Sat Jan 01 01:00:00 CET 2000, // Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  'datePublicationMax': Sun Dec 31 01:00:00 CET 2000 // Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
};
apiInstance.recherchePublications(apiToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**| Clé d&#39;utilisation de l&#39;API | 
 **parPage** | **Number**| Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] 
 **page** | **Number**| Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] 
 **precision** | **String**| Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] 
 **q** | **String**| Mot-clé à rechercher dans le contenu de la publication. | [optional] 
 **codeNaf** | **String**| Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] 
 **departement** | **String**| Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] 
 **region** | **String**| Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] 
 **codePostal** | **String**| Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] 
 **conventionCollective** | **String**| Convention collective de l&#39;entreprise. | [optional] 
 **categorieJuridique** | **String**| Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). | [optional] 
 **entrepriseCessee** | **Boolean**| Activité de l&#39;entreprise cessée ou non. | [optional] 
 **statutRcs** | **String**| Statut au RCS | [optional] 
 **objetSocial** | **String**| Objet social de l&#39;entreprise déclaré au RCS. | [optional] 
 **dateRadiationRcsMin** | **String**| Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateRadiationRcsMax** | **String**| Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **capitalMin** | **String**| Capital minimum de l&#39;entreprise. | [optional] 
 **capitalMax** | **String**| Capital maximum de l&#39;entreprise. | [optional] 
 **chiffreAffairesMin** | **String**| Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **chiffreAffairesMax** | **String**| Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMin** | **String**| Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **resultatMax** | **String**| Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] 
 **dateCreationMin** | **String**| Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateCreationMax** | **String**| Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **trancheEffectifMin** | **String**| Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **trancheEffectifMax** | **String**| Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] 
 **ageDirigeantMin** | **Number**| Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageDirigeantMax** | **Number**| Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceDirigeantMin** | **Date**| Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceDirigeantMax** | **Date**| Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **ageBeneficiaireMin** | **Number**| Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **ageBeneficiaireMax** | **Number**| Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] 
 **dateDeNaissanceBeneficiaireMin** | **Date**| Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] 
 **dateDeNaissanceBeneficiaireMax** | **Date**| Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMin** | **Date**| Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] 
 **dateDepotDocumentMax** | **Date**| Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] 
 **typePublication** | **String**| Type de publication | [optional] 
 **datePublicationMin** | **Date**| Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] 
 **datePublicationMax** | **Date**| Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

