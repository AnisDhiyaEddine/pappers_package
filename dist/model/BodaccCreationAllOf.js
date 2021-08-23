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
 * The BodaccCreationAllOf model module.
 * @module model/BodaccCreationAllOf
 * @version 2.3.0
 */
var BodaccCreationAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodaccCreationAllOf</code>.
   * @alias module:model/BodaccCreationAllOf
   */
  function BodaccCreationAllOf() {
    _classCallCheck(this, BodaccCreationAllOf);

    BodaccCreationAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodaccCreationAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BodaccCreationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccCreationAllOf} obj Optional instance to populate.
     * @return {module:model/BodaccCreationAllOf} The populated <code>BodaccCreationAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodaccCreationAllOf();

        if (data.hasOwnProperty('rcs')) {
          obj['rcs'] = _ApiClient["default"].convertToType(data['rcs'], 'String');
        }

        if (data.hasOwnProperty('nom_entreprise')) {
          obj['nom_entreprise'] = _ApiClient["default"].convertToType(data['nom_entreprise'], 'String');
        }

        if (data.hasOwnProperty('personne_morale')) {
          obj['personne_morale'] = _ApiClient["default"].convertToType(data['personne_morale'], 'Boolean');
        }

        if (data.hasOwnProperty('denomination')) {
          obj['denomination'] = _ApiClient["default"].convertToType(data['denomination'], 'String');
        }

        if (data.hasOwnProperty('nom')) {
          obj['nom'] = _ApiClient["default"].convertToType(data['nom'], 'String');
        }

        if (data.hasOwnProperty('prenom')) {
          obj['prenom'] = _ApiClient["default"].convertToType(data['prenom'], 'String');
        }

        if (data.hasOwnProperty('administration')) {
          obj['administration'] = _ApiClient["default"].convertToType(data['administration'], 'String');
        }

        if (data.hasOwnProperty('adresse')) {
          obj['adresse'] = _ApiClient["default"].convertToType(data['adresse'], 'String');
        }

        if (data.hasOwnProperty('capital')) {
          obj['capital'] = _ApiClient["default"].convertToType(data['capital'], 'Number');
        }

        if (data.hasOwnProperty('activite')) {
          obj['activite'] = _ApiClient["default"].convertToType(data['activite'], 'String');
        }

        if (data.hasOwnProperty('date_debut_activite')) {
          obj['date_debut_activite'] = _ApiClient["default"].convertToType(data['date_debut_activite'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BodaccCreationAllOf;
}();
/**
 * Greffe de publication.
 * @member {String} rcs
 */


BodaccCreationAllOf.prototype['rcs'] = undefined;
/**
 * Nom de l'entreprise concernée par la publication. Correspond à la dénomination en cas de personne morale et à nom + prenom en cas de personne physique.
 * @member {String} nom_entreprise
 */

BodaccCreationAllOf.prototype['nom_entreprise'] = undefined;
/**
 * Vrai si l'entreprise concernée par la publication est une personne morale, faux si c'est une personne physique.
 * @member {Boolean} personne_morale
 */

BodaccCreationAllOf.prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise concernée par la publication (uniquement en cas de personne morale).
 * @member {String} denomination
 */

BodaccCreationAllOf.prototype['denomination'] = undefined;
/**
 * Nom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} nom
 */

BodaccCreationAllOf.prototype['nom'] = undefined;
/**
 * Prénom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} prenom
 */

BodaccCreationAllOf.prototype['prenom'] = undefined;
/**
 * Administration (dans le cas d'une personne morale).
 * @member {String} administration
 */

BodaccCreationAllOf.prototype['administration'] = undefined;
/**
 * Adresse de l'entreprise concernée par la publication.
 * @member {String} adresse
 */

BodaccCreationAllOf.prototype['adresse'] = undefined;
/**
 * Capital de l'entreprise concernée par la publication.
 * @member {Number} capital
 */

BodaccCreationAllOf.prototype['capital'] = undefined;
/**
 * Activité de l'entreprise concernée par la publication.
 * @member {String} activite
 */

BodaccCreationAllOf.prototype['activite'] = undefined;
/**
 * Date de début d'activité de l'entreprise concernée par la publication, au format AAAA-MM-JJ.
 * @member {String} date_debut_activite
 */

BodaccCreationAllOf.prototype['date_debut_activite'] = undefined;
var _default = BodaccCreationAllOf;
exports["default"] = _default;