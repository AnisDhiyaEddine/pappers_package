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
 * The BodaccVenteAllOf model module.
 * @module model/BodaccVenteAllOf
 * @version 2.3.0
 */
var BodaccVenteAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodaccVenteAllOf</code>.
   * @alias module:model/BodaccVenteAllOf
   */
  function BodaccVenteAllOf() {
    _classCallCheck(this, BodaccVenteAllOf);

    BodaccVenteAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodaccVenteAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BodaccVenteAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccVenteAllOf} obj Optional instance to populate.
     * @return {module:model/BodaccVenteAllOf} The populated <code>BodaccVenteAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodaccVenteAllOf();

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

        if (data.hasOwnProperty('commentaires')) {
          obj['commentaires'] = _ApiClient["default"].convertToType(data['commentaires'], 'String');
        }

        if (data.hasOwnProperty('oppositions')) {
          obj['oppositions'] = _ApiClient["default"].convertToType(data['oppositions'], 'String');
        }

        if (data.hasOwnProperty('declaration_creance')) {
          obj['declaration_creance'] = _ApiClient["default"].convertToType(data['declaration_creance'], 'String');
        }

        if (data.hasOwnProperty('publication_legale')) {
          obj['publication_legale'] = _ApiClient["default"].convertToType(data['publication_legale'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BodaccVenteAllOf;
}();
/**
 * Greffe de publication.
 * @member {String} rcs
 */


BodaccVenteAllOf.prototype['rcs'] = undefined;
/**
 * Nom de l'entreprise concernée par la publication. Correspond à la dénomination en cas de personne morale et à nom + prenom en cas de personne physique.
 * @member {String} nom_entreprise
 */

BodaccVenteAllOf.prototype['nom_entreprise'] = undefined;
/**
 * Vrai si l'entreprise concernée par la publication est une personne morale, faux si c'est une personne physique.
 * @member {Boolean} personne_morale
 */

BodaccVenteAllOf.prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise concernée par la publication (uniquement en cas de personne morale).
 * @member {String} denomination
 */

BodaccVenteAllOf.prototype['denomination'] = undefined;
/**
 * Nom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} nom
 */

BodaccVenteAllOf.prototype['nom'] = undefined;
/**
 * Prénom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} prenom
 */

BodaccVenteAllOf.prototype['prenom'] = undefined;
/**
 * Administration (dans le cas d'une personne morale).
 * @member {String} administration
 */

BodaccVenteAllOf.prototype['administration'] = undefined;
/**
 * Adresse de l'entreprise concernée par la publication.
 * @member {String} adresse
 */

BodaccVenteAllOf.prototype['adresse'] = undefined;
/**
 * Commentaires sur la publication.
 * @member {String} commentaires
 */

BodaccVenteAllOf.prototype['commentaires'] = undefined;
/**
 * Détails sur les oppositions.
 * @member {String} oppositions
 */

BodaccVenteAllOf.prototype['oppositions'] = undefined;
/**
 * Détails sur la déclaration de créance.
 * @member {String} declaration_creance
 */

BodaccVenteAllOf.prototype['declaration_creance'] = undefined;
/**
 * Journal où a été publiée la publication légale.
 * @member {String} publication_legale
 */

BodaccVenteAllOf.prototype['publication_legale'] = undefined;
var _default = BodaccVenteAllOf;
exports["default"] = _default;