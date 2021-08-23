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
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 2.3.0
 */
var InlineResponse2005 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   */
  function InlineResponse2005() {
    _classCallCheck(this, InlineResponse2005);

    InlineResponse2005.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2005, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2005();

        if (data.hasOwnProperty('resultats_nom_entreprise')) {
          obj['resultats_nom_entreprise'] = _ApiClient["default"].convertToType(data['resultats_nom_entreprise'], [Object]);
        }

        if (data.hasOwnProperty('resultats_denomination')) {
          obj['resultats_denomination'] = _ApiClient["default"].convertToType(data['resultats_denomination'], [Object]);
        }

        if (data.hasOwnProperty('resultats_nom_complet')) {
          obj['resultats_nom_complet'] = _ApiClient["default"].convertToType(data['resultats_nom_complet'], [Object]);
        }

        if (data.hasOwnProperty('resultats_representant')) {
          obj['resultats_representant'] = _ApiClient["default"].convertToType(data['resultats_representant'], [Object]);
        }

        if (data.hasOwnProperty('resultats_siren')) {
          obj['resultats_siren'] = _ApiClient["default"].convertToType(data['resultats_siren'], [Object]);
        }

        if (data.hasOwnProperty('resultats_siret')) {
          obj['resultats_siret'] = _ApiClient["default"].convertToType(data['resultats_siret'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2005;
}();
/**
 * Liste des entreprises dont le nom (dénomination ou nom/prénom) peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `nom_entreprise`.
 * @member {Array.<Object>} resultats_nom_entreprise
 */


InlineResponse2005.prototype['resultats_nom_entreprise'] = undefined;
/**
 * Liste des entreprises dont la dénomination peut compléter la recherche textuelle (concerne les personnes morales seulement). Uniquement présent si le paramètre `cibles` contient `denomination`.
 * @member {Array.<Object>} resultats_denomination
 */

InlineResponse2005.prototype['resultats_denomination'] = undefined;
/**
 * Liste des entreprises dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle (concerne les personnes physiques seulement). Uniquement présent si le paramètre `cibles` contient `nom_complet`.
 * @member {Array.<Object>} resultats_nom_complet
 */

InlineResponse2005.prototype['resultats_nom_complet'] = undefined;
/**
 * Liste des représentants dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `representant`.
 * @member {Array.<Object>} resultats_representant
 */

InlineResponse2005.prototype['resultats_representant'] = undefined;
/**
 * Liste des entreprises dont le numéro SIREN peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `siren`.
 * @member {Array.<Object>} resultats_siren
 */

InlineResponse2005.prototype['resultats_siren'] = undefined;
/**
 * Liste des entreprises dont le numéro SIRET peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `siret`.
 * @member {Array.<Object>} resultats_siret
 */

InlineResponse2005.prototype['resultats_siret'] = undefined;
var _default = InlineResponse2005;
exports["default"] = _default;