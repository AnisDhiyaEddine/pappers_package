"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2005"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SuggestionsAutocomplete service.
* @module api/SuggestionsAutocompleteApi
* @version 2.3.0
*/
var SuggestionsAutocompleteApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SuggestionsAutocompleteApi. 
  * @alias module:api/SuggestionsAutocompleteApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SuggestionsAutocompleteApi(apiClient) {
    _classCallCheck(this, SuggestionsAutocompleteApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the suggestions operation.
   * @callback module:api/SuggestionsAutocompleteApi~suggestionsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2005} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Recherche les entreprises qui correspondent ?? un d??but de recherche textuelle (type autocomplete).
   * Cette route n??cessite g??n??ralement d'avoir un temps de r??ponse tr??s faible. Une URL avec un temps de r??ponse plus faible a ??t?? mise en place : `https://suggestions.pappers.fr/v2?q=googl`. D'autre part, afin de permettre une int??gration en front-end la plus directe, cette route ne n??cessite pas de token d'authentification.
   * @param {String} q D??but de recherche textuelle
   * @param {Object} opts Optional parameters
   * @param {Number} opts.longueur Nombre de r??sultats. Maximum 100. Valeur par d??faut : `10`.
   * @param {module:model/String} opts.cibles Cibles de la recherche, s??par??es par des virgules. Valeur par d??faut : `\"nom_entreprise\"`.
   * @param {module:api/SuggestionsAutocompleteApi~suggestionsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2005}
   */


  _createClass(SuggestionsAutocompleteApi, [{
    key: "suggestions",
    value: function suggestions(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling suggestions");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'longueur': opts['longueur'],
        'cibles': opts['cibles']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/suggestions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SuggestionsAutocompleteApi;
}();

exports["default"] = SuggestionsAutocompleteApi;