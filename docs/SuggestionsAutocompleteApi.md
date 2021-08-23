# PappersApi.SuggestionsAutocompleteApi

All URIs are relative to *https://api.pappers.fr/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suggestions**](SuggestionsAutocompleteApi.md#suggestions) | **GET** /suggestions | Recherche les entreprises qui correspondent à un début de recherche textuelle (type autocomplete).



## suggestions

> InlineResponse2005 suggestions(q, opts)

Recherche les entreprises qui correspondent à un début de recherche textuelle (type autocomplete).

Cette route nécessite généralement d&#39;avoir un temps de réponse très faible. Une URL avec un temps de réponse plus faible a été mise en place : &#x60;https://suggestions.pappers.fr/v2?q&#x3D;googl&#x60;. D&#39;autre part, afin de permettre une intégration en front-end la plus directe, cette route ne nécessite pas de token d&#39;authentification.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.SuggestionsAutocompleteApi();
let q = googl; // String | Début de recherche textuelle
let opts = {
  'longueur': 20, // Number | Nombre de résultats. Maximum 100. Valeur par défaut : `10`.
  'cibles': nom_entreprise,siren,siret // String | Cibles de la recherche, séparées par des virgules. Valeur par défaut : `\"nom_entreprise\"`.
};
apiInstance.suggestions(q, opts, (error, data, response) => {
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
 **q** | **String**| Début de recherche textuelle | 
 **longueur** | **Number**| Nombre de résultats. Maximum 100. Valeur par défaut : &#x60;10&#x60;. | [optional] 
 **cibles** | **String**| Cibles de la recherche, séparées par des virgules. Valeur par défaut : &#x60;\&quot;nom_entreprise\&quot;&#x60;. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

