/**
 * Pappers API
 * L'API de Pappers vous permet de récupérer des informations et documents sur les entreprises françaises à partir de leur numéro SIREN ou SIRET.  Vous devez indiquer votre clé d'API dans les requêtes, en utilisant le paramètre `api_token`.  L'URL d'accès à l'API est https://api.pappers.fr/v2/  Lien vers la documentation de la V1 : https://www.pappers.fr/api/documentation/v1  L'historique des modifications (changelog) est accessible à l'url suivante : https://www.pappers.fr/api/changelog 
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: support@pappers.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Documents service.
* @module api/DocumentsApi
* @version 2.3.0
*/
export default class DocumentsApi {

    /**
    * Constructs a new DocumentsApi. 
    * @alias module:api/DocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the documentTelechargement operation.
     * @callback module:api/DocumentsApi~documentTelechargementCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Télécharge un document PDF ou XLSX à partir de son token.
     * Vous devez fournir le token du document. Le document vous sera envoyé au format PDF ou XLSX.
     * @param {String} apiToken Clé d'utilisation de l'API
     * @param {String} token Token du document
     * @param {module:api/DocumentsApi~documentTelechargementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    documentTelechargement(apiToken, token, callback) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling documentTelechargement");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling documentTelechargement");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_token': apiToken,
        'token': token
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/pdf'];
      let returnType = File;
      return this.apiClient.callApi(
        '/document/telechargement', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}