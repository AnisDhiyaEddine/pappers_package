# PappersApi.DocumentsApi

All URIs are relative to *https://api.pappers.fr/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentTelechargement**](DocumentsApi.md#documentTelechargement) | **GET** /document/telechargement | Télécharge un document PDF ou XLSX à partir de son token.



## documentTelechargement

> File documentTelechargement(apiToken, token)

Télécharge un document PDF ou XLSX à partir de son token.

Vous devez fournir le token du document. Le document vous sera envoyé au format PDF ou XLSX.

### Example

```javascript
import PappersApi from 'pappers_api';

let apiInstance = new PappersApi.DocumentsApi();
let apiToken = votre_clé_ici; // String | Clé d'utilisation de l'API
let token = QTQ0MzA2MTg0MTIwMjAwNDA3RMOpY2lzaW9uKHMpIGRlIGwnYXNzb2Npw6kgdW5pcXVl; // String | Token du document
apiInstance.documentTelechargement(apiToken, token, (error, data, response) => {
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
 **token** | **String**| Token du document | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf

