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
import EntrepriseFiche from '../model/EntrepriseFiche';

/**
* FicheEntreprise service.
* @module api/FicheEntrepriseApi
* @version 2.3.0
*/
export default class FicheEntrepriseApi {

    /**
    * Constructs a new FicheEntrepriseApi. 
    * @alias module:api/FicheEntrepriseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the entreprise operation.
     * @callback module:api/FicheEntrepriseApi~entrepriseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntrepriseFiche} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Récupère l'ensemble des informations disponibles sur une entreprise.
     * Vous devez fournir soit le SIREN, soit le SIRET. Si vous indiquez le SIREN, tous les établissements associés à ce SIREN seront renvoyés dans la clé `etablissements`. Si vous indiquez le SIRET, seul l'établissement associé sera renvoyé dans la clé `etablissement`.
     * @param {String} apiToken Clé d'utilisation de l'API
     * @param {Object} opts Optional parameters
     * @param {String} opts.siren SIREN de l'entreprise
     * @param {String} opts.siret SIRET de l'entreprise
     * @param {module:model/String} opts.formatPublicationsBodacc Format attendu pour les publications BODACC. Valeur par défaut : `\"objet\"`.
     * @param {Boolean} opts.marques Si vrai, le retour inclura les marques éventuelles de l'entreprise. Valeur par défaut : `false`.
     * @param {module:api/FicheEntrepriseApi~entrepriseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntrepriseFiche}
     */
    entreprise(apiToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling entreprise");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_token': apiToken,
        'siren': opts['siren'],
        'siret': opts['siret'],
        'format_publications_bodacc': opts['formatPublicationsBodacc'],
        'marques': opts['marques']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntrepriseFiche;
      return this.apiClient.callApi(
        '/entreprise', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
