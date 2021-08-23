# PappersApi.FicheEntrepriseApi

All URIs are relative to *https://api.pappers.fr/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entreprise**](FicheEntrepriseApi.md#entreprise) | **GET** /entreprise | Récupère l&#39;ensemble des informations disponibles sur une entreprise.



## entreprise

> EntrepriseFiche entreprise(apiToken, opts)

Récupère l&#39;ensemble des informations disponibles sur une entreprise.

Vous devez fournir soit le SIREN, soit le SIRET. Si vous indiquez le SIREN, tous les établissements associés à ce SIREN seront renvoyés dans la clé &#x60;etablissements&#x60;. Si vous indiquez le SIRET, seul l&#39;établissement associé sera renvoyé dans la clé &#x60;etablissement&#x60;.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.FicheEntrepriseApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let opts = {
  'siren': 443061841, // String | SIREN de l'entreprise
  'siret': 44306184100047, // String | SIRET de l'entreprise
  'formatPublicationsBodacc': objet, // String | Format attendu pour les publications BODACC. Valeur par défaut : `\"objet\"`.
  'marques': true // Boolean | Si vrai, le retour inclura les marques éventuelles de l'entreprise. Valeur par défaut : `false`.
};
apiInstance.entreprise(apiToken, opts, (error, data, response) => {
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
 **siren** | **String**| SIREN de l&#39;entreprise | [optional] 
 **siret** | **String**| SIRET de l&#39;entreprise | [optional] 
 **formatPublicationsBodacc** | **String**| Format attendu pour les publications BODACC. Valeur par défaut : &#x60;\&quot;objet\&quot;&#x60;. | [optional] 
 **marques** | **Boolean**| Si vrai, le retour inclura les marques éventuelles de l&#39;entreprise. Valeur par défaut : &#x60;false&#x60;. | [optional] 

### Return type

[**EntrepriseFiche**](EntrepriseFiche.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

