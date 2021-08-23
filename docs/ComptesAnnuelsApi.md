# PappersApi.ComptesAnnuelsApi

All URIs are relative to *https://api.pappers.fr/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comptesAnnuels**](ComptesAnnuelsApi.md#comptesAnnuels) | **GET** /entreprise/comptes | Récupère les comptes annuels publiés d&#39;une entreprise.



## comptesAnnuels

> {String: [Object]} comptesAnnuels(apiToken, opts)

Récupère les comptes annuels publiés d&#39;une entreprise.

Vous devez fournir le SIREN de l&#39;entreprise pour laquelle vous souhaitez obtenir les comptes annuels.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.ComptesAnnuelsApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let opts = {
  'siren': 443061841, // String | SIREN de l'entreprise
  'annee': 2016,2017,2018 // String | Année de cloture des comptes souhaités. Il est possible d'indiquer plusieurs années en les séparant par des virgules. Si le paramètre n'est pas fourni, toutes les années disponibles seront retournées.
};
apiInstance.comptesAnnuels(apiToken, opts, (error, data, response) => {
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
 **annee** | **String**| Année de cloture des comptes souhaités. Il est possible d&#39;indiquer plusieurs années en les séparant par des virgules. Si le paramètre n&#39;est pas fourni, toutes les années disponibles seront retournées. | [optional] 

### Return type

**{String: [Object]}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

