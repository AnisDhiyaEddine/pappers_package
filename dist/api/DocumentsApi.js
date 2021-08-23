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
* Documents service.
* @module api/DocumentsApi
* @version 2.3.0
*/
var DocumentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DocumentsApi. 
  * @alias module:api/DocumentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DocumentsApi(apiClient) {
    _classCallCheck(this, DocumentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(DocumentsApi, [{
    key: "documentTelechargement",
    value: function documentTelechargement(apiToken, token, callback) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling documentTelechargement");
      } // verify the required parameter 'token' is set


      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling documentTelechargement");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'token': token
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/pdf'];
      var returnType = File;
      return this.apiClient.callApi('/document/telechargement', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DocumentsApi;
}();

exports["default"] = DocumentsApi;