"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EtablissementRecherche = _interopRequireDefault(require("./EtablissementRecherche"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseRechercheAllOf model module.
 * @module model/EntrepriseRechercheAllOf
 * @version 2.3.0
 */
var EntrepriseRechercheAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseRechercheAllOf</code>.
   * @alias module:model/EntrepriseRechercheAllOf
   */
  function EntrepriseRechercheAllOf() {
    _classCallCheck(this, EntrepriseRechercheAllOf);

    EntrepriseRechercheAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseRechercheAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseRechercheAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseRechercheAllOf} obj Optional instance to populate.
     * @return {module:model/EntrepriseRechercheAllOf} The populated <code>EntrepriseRechercheAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseRechercheAllOf();

        if (data.hasOwnProperty('siege')) {
          obj['siege'] = _EtablissementRecherche["default"].constructFromObject(data['siege']);
        }

        if (data.hasOwnProperty('villes')) {
          obj['villes'] = _ApiClient["default"].convertToType(data['villes'], ['String']);
        }

        if (data.hasOwnProperty('chiffre_affaires')) {
          obj['chiffre_affaires'] = _ApiClient["default"].convertToType(data['chiffre_affaires'], 'Number');
        }

        if (data.hasOwnProperty('resultat')) {
          obj['resultat'] = _ApiClient["default"].convertToType(data['resultat'], 'Number');
        }

        if (data.hasOwnProperty('effectifs_finances')) {
          obj['effectifs_finances'] = _ApiClient["default"].convertToType(data['effectifs_finances'], 'Number');
        }

        if (data.hasOwnProperty('annee_finances')) {
          obj['annee_finances'] = _ApiClient["default"].convertToType(data['annee_finances'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseRechercheAllOf;
}();
/**
 * @member {module:model/EtablissementRecherche} siege
 */


EntrepriseRechercheAllOf.prototype['siege'] = undefined;
/**
 * Liste des villes où l'entreprise a au moins un établissement.
 * @member {Array.<String>} villes
 */

EntrepriseRechercheAllOf.prototype['villes'] = undefined;
/**
 * Chiffre d'affaires de l'entreprise.
 * @member {Number} chiffre_affaires
 */

EntrepriseRechercheAllOf.prototype['chiffre_affaires'] = undefined;
/**
 * Résultat de l'entreprise.
 * @member {Number} resultat
 */

EntrepriseRechercheAllOf.prototype['resultat'] = undefined;
/**
 * Effectif de l'entreprise.
 * @member {Number} effectifs_finances
 */

EntrepriseRechercheAllOf.prototype['effectifs_finances'] = undefined;
/**
 * Année de correspondance des variables financières (chiffre_affaires, resultat, effectifs_finances).
 * @member {String} annee_finances
 */

EntrepriseRechercheAllOf.prototype['annee_finances'] = undefined;
var _default = EntrepriseRechercheAllOf;
exports["default"] = _default;