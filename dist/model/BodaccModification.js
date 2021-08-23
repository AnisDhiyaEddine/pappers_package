"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Bodacc = _interopRequireDefault(require("./Bodacc"));

var _BodaccModificationAllOf = _interopRequireDefault(require("./BodaccModificationAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BodaccModification model module.
 * @module model/BodaccModification
 * @version 2.3.0
 */
var BodaccModification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodaccModification</code>.
   * @alias module:model/BodaccModification
   * @extends module:model/Bodacc
   * @implements module:model/Bodacc
   * @implements module:model/BodaccModificationAllOf
   */
  function BodaccModification() {
    _classCallCheck(this, BodaccModification);

    _Bodacc["default"].initialize(this);

    _BodaccModificationAllOf["default"].initialize(this);

    BodaccModification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodaccModification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BodaccModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccModification} obj Optional instance to populate.
     * @return {module:model/BodaccModification} The populated <code>BodaccModification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodaccModification();

        _Bodacc["default"].constructFromObject(data, obj);

        _Bodacc["default"].constructFromObject(data, obj);

        _BodaccModificationAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BodaccModification;
}();
/**
 * Greffe de publication.
 * @member {String} rcs
 */


BodaccModification.prototype['rcs'] = undefined;
/**
 * Nom de l'entreprise concernée par la publication. Correspond à la dénomination en cas de personne morale et à nom + prenom en cas de personne physique.
 * @member {String} nom_entreprise
 */

BodaccModification.prototype['nom_entreprise'] = undefined;
/**
 * Vrai si l'entreprise concernée par la publication est une personne morale, faux si c'est une personne physique.
 * @member {Boolean} personne_morale
 */

BodaccModification.prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise concernée par la publication (uniquement en cas de personne morale).
 * @member {String} denomination
 */

BodaccModification.prototype['denomination'] = undefined;
/**
 * Nom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} nom
 */

BodaccModification.prototype['nom'] = undefined;
/**
 * Prénom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} prenom
 */

BodaccModification.prototype['prenom'] = undefined;
/**
 * Administration (dans le cas d'une personne morale).
 * @member {String} administration
 */

BodaccModification.prototype['administration'] = undefined;
/**
 * Adresse de l'entreprise concernée par la publication.
 * @member {String} adresse
 */

BodaccModification.prototype['adresse'] = undefined;
/**
 * Capital de l'entreprise concernée par la publication.
 * @member {Number} capital
 */

BodaccModification.prototype['capital'] = undefined;
/**
 * Activité de l'entreprise concernée par la publication.
 * @member {String} activite
 */

BodaccModification.prototype['activite'] = undefined;
/**
 * Description de la modification.
 * @member {String} description
 */

BodaccModification.prototype['description'] = undefined; // Implement Bodacc interface:

/**
 * Numéro de parution de la publication.
 * @member {String} numero_parution
 */

_Bodacc["default"].prototype['numero_parution'] = undefined;
/**
 * Date de la publication, au format AAAA-MM-JJ.
 * @member {String} date
 */

_Bodacc["default"].prototype['date'] = undefined;
/**
 * Numéro d'annonce de la publication.
 * @member {String} numero_annonce
 */

_Bodacc["default"].prototype['numero_annonce'] = undefined;
/**
 * Bodacc de la publication (A, B ou C).
 * @member {String} bodacc
 */

_Bodacc["default"].prototype['bodacc'] = undefined;
/**
 * Type de la publication parmi la liste suivante : Création, Immatriculation, Modification, Vente, Radiation, Procédure collective, Dépôt des comptes.
 * @member {String} type
 */

_Bodacc["default"].prototype['type'] = undefined; // Implement BodaccModificationAllOf interface:

/**
 * Greffe de publication.
 * @member {String} rcs
 */

_BodaccModificationAllOf["default"].prototype['rcs'] = undefined;
/**
 * Nom de l'entreprise concernée par la publication. Correspond à la dénomination en cas de personne morale et à nom + prenom en cas de personne physique.
 * @member {String} nom_entreprise
 */

_BodaccModificationAllOf["default"].prototype['nom_entreprise'] = undefined;
/**
 * Vrai si l'entreprise concernée par la publication est une personne morale, faux si c'est une personne physique.
 * @member {Boolean} personne_morale
 */

_BodaccModificationAllOf["default"].prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise concernée par la publication (uniquement en cas de personne morale).
 * @member {String} denomination
 */

_BodaccModificationAllOf["default"].prototype['denomination'] = undefined;
/**
 * Nom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} nom
 */

_BodaccModificationAllOf["default"].prototype['nom'] = undefined;
/**
 * Prénom de la personne physique concernée par la publication (uniquement en cas de personne physique).
 * @member {String} prenom
 */

_BodaccModificationAllOf["default"].prototype['prenom'] = undefined;
/**
 * Administration (dans le cas d'une personne morale).
 * @member {String} administration
 */

_BodaccModificationAllOf["default"].prototype['administration'] = undefined;
/**
 * Adresse de l'entreprise concernée par la publication.
 * @member {String} adresse
 */

_BodaccModificationAllOf["default"].prototype['adresse'] = undefined;
/**
 * Capital de l'entreprise concernée par la publication.
 * @member {Number} capital
 */

_BodaccModificationAllOf["default"].prototype['capital'] = undefined;
/**
 * Activité de l'entreprise concernée par la publication.
 * @member {String} activite
 */

_BodaccModificationAllOf["default"].prototype['activite'] = undefined;
/**
 * Description de la modification.
 * @member {String} description
 */

_BodaccModificationAllOf["default"].prototype['description'] = undefined;
var _default = BodaccModification;
exports["default"] = _default;