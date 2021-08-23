"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseRecherche = _interopRequireDefault(require("./EntrepriseRecherche"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 2.3.0
 */
var InlineResponse200 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   */
  function InlineResponse200() {
    _classCallCheck(this, InlineResponse200);

    InlineResponse200.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200} obj Optional instance to populate.
     * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200();

        if (data.hasOwnProperty('resultats')) {
          obj['resultats'] = _ApiClient["default"].convertToType(data['resultats'], [_EntrepriseRecherche["default"]]);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('curseurSuivant')) {
          obj['curseurSuivant'] = _ApiClient["default"].convertToType(data['curseurSuivant'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200;
}();
/**
 * Liste des entreprises qui correspondent à la recherche.
 * @member {Array.<module:model/EntrepriseRecherche>} resultats
 */


InlineResponse200.prototype['resultats'] = undefined;
/**
 * Nombre d'entreprises qui correspondent à la recherche.
 * @member {Number} total
 */

InlineResponse200.prototype['total'] = undefined;
/**
 * Page actuelle.
 * @member {Number} page
 */

InlineResponse200.prototype['page'] = undefined;
/**
 * Présent uniquement en cas d'utilisation du paramètre `curseur`. Contient le curseur courant à envoyer en paramètre `curseur` de la requête suivantes.
 * @member {String} curseurSuivant
 */

InlineResponse200.prototype['curseurSuivant'] = undefined;
var _default = InlineResponse200;
exports["default"] = _default;