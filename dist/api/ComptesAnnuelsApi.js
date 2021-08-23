"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ComptesAnnuels service.
* @module api/ComptesAnnuelsApi
* @version 2.3.0
*/
var ComptesAnnuelsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ComptesAnnuelsApi. 
  * @alias module:api/ComptesAnnuelsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ComptesAnnuelsApi(apiClient) {
    _classCallCheck(this, ComptesAnnuelsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the comptesAnnuels operation.
   * @callback module:api/ComptesAnnuelsApi~comptesAnnuelsCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: [Object]}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Récupère les comptes annuels publiés d'une entreprise.
   * Vous devez fournir le SIREN de l'entreprise pour laquelle vous souhaitez obtenir les comptes annuels.
   * @param {String} apiToken Clé d'utilisation de l'API
   * @param {Object} opts Optional parameters
   * @param {String} opts.siren SIREN de l'entreprise
   * @param {String} opts.annee Année de cloture des comptes souhaités. Il est possible d'indiquer plusieurs années en les séparant par des virgules. Si le paramètre n'est pas fourni, toutes les années disponibles seront retournées.
   * @param {module:api/ComptesAnnuelsApi~comptesAnnuelsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: [Object]}>}
   */


  _createClass(ComptesAnnuelsApi, [{
    key: "comptesAnnuels",
    value: function comptesAnnuels(apiToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling comptesAnnuels");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'siren': opts['siren'],
        'annee': opts['annee']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': [Object]
      };
      return this.apiClient.callApi('/entreprise/comptes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ComptesAnnuelsApi;
}();

exports["default"] = ComptesAnnuelsApi;