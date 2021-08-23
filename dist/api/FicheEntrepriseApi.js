"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseFiche = _interopRequireDefault(require("../model/EntrepriseFiche"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* FicheEntreprise service.
* @module api/FicheEntrepriseApi
* @version 2.3.0
*/
var FicheEntrepriseApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FicheEntrepriseApi. 
  * @alias module:api/FicheEntrepriseApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FicheEntrepriseApi(apiClient) {
    _classCallCheck(this, FicheEntrepriseApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(FicheEntrepriseApi, [{
    key: "entreprise",
    value: function entreprise(apiToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling entreprise");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'siren': opts['siren'],
        'siret': opts['siret'],
        'format_publications_bodacc': opts['formatPublicationsBodacc'],
        'marques': opts['marques']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntrepriseFiche["default"];
      return this.apiClient.callApi('/entreprise', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FicheEntrepriseApi;
}();

exports["default"] = FicheEntrepriseApi;