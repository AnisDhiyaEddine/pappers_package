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
 * The EntrepriseFicheAllOfRnm model module.
 * @module model/EntrepriseFicheAllOfRnm
 * @version 2.3.0
 */
var EntrepriseFicheAllOfRnm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfRnm</code>.
   * Informations sur l&#39;immatriculation de l&#39;entreprise au Répertoire des Métiers.
   * @alias module:model/EntrepriseFicheAllOfRnm
   */
  function EntrepriseFicheAllOfRnm() {
    _classCallCheck(this, EntrepriseFicheAllOfRnm);

    EntrepriseFicheAllOfRnm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfRnm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfRnm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfRnm} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfRnm} The populated <code>EntrepriseFicheAllOfRnm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfRnm();

        if (data.hasOwnProperty('date_immatriculation')) {
          obj['date_immatriculation'] = _ApiClient["default"].convertToType(data['date_immatriculation'], 'String');
        }

        if (data.hasOwnProperty('date_radiation')) {
          obj['date_radiation'] = _ApiClient["default"].convertToType(data['date_radiation'], 'String');
        }

        if (data.hasOwnProperty('date_debut_activite')) {
          obj['date_debut_activite'] = _ApiClient["default"].convertToType(data['date_debut_activite'], 'String');
        }

        if (data.hasOwnProperty('date_cessation_activite')) {
          obj['date_cessation_activite'] = _ApiClient["default"].convertToType(data['date_cessation_activite'], 'String');
        }

        if (data.hasOwnProperty('chambre_des_metiers')) {
          obj['chambre_des_metiers'] = _ApiClient["default"].convertToType(data['chambre_des_metiers'], 'String');
        }

        if (data.hasOwnProperty('qualification')) {
          obj['qualification'] = _ApiClient["default"].convertToType(data['qualification'], 'String');
        }

        if (data.hasOwnProperty('derniere_mise_a_jour')) {
          obj['derniere_mise_a_jour'] = _ApiClient["default"].convertToType(data['derniere_mise_a_jour'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfRnm;
}();
/**
 * Date d'immatriculation au Répertoire des Métiers, au format AAAA-MM-JJ.
 * @member {String} date_immatriculation
 */


EntrepriseFicheAllOfRnm.prototype['date_immatriculation'] = undefined;
/**
 * Date de radiation du Répertoire des Métiers, le cas échéant, au format AAAA-MM-JJ.
 * @member {String} date_radiation
 */

EntrepriseFicheAllOfRnm.prototype['date_radiation'] = undefined;
/**
 * Date de début d'activé déclarée au Répertoire des Métiers, au format AAAA-MM-JJ.
 * @member {String} date_debut_activite
 */

EntrepriseFicheAllOfRnm.prototype['date_debut_activite'] = undefined;
/**
 * Date de cessation d'activité déclarée au Répertoire des Métiers, le cas échéant, au format AAAA-MM-JJ.
 * @member {String} date_cessation_activite
 */

EntrepriseFicheAllOfRnm.prototype['date_cessation_activite'] = undefined;
/**
 * Chambre des métiers où l'entreprise est immatriculée.
 * @member {String} chambre_des_metiers
 */

EntrepriseFicheAllOfRnm.prototype['chambre_des_metiers'] = undefined;
/**
 * Qualification retenue par le Répertoire des Métiers.
 * @member {String} qualification
 */

EntrepriseFicheAllOfRnm.prototype['qualification'] = undefined;
/**
 * Date de dernière mise à jour de l'entreprise au Répertoire des Métiers, au format AAAA-MM-JJ.
 * @member {String} derniere_mise_a_jour
 */

EntrepriseFicheAllOfRnm.prototype['derniere_mise_a_jour'] = undefined;
var _default = EntrepriseFicheAllOfRnm;
exports["default"] = _default;