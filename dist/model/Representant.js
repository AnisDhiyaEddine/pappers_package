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
 * The Representant model module.
 * @module model/Representant
 * @version 2.3.0
 */
var Representant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Representant</code>.
   * @alias module:model/Representant
   */
  function Representant() {
    _classCallCheck(this, Representant);

    Representant.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Representant, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Representant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Representant} obj Optional instance to populate.
     * @return {module:model/Representant} The populated <code>Representant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Representant();

        if (data.hasOwnProperty('qualite')) {
          obj['qualite'] = _ApiClient["default"].convertToType(data['qualite'], 'String');
        }

        if (data.hasOwnProperty('personne_morale')) {
          obj['personne_morale'] = _ApiClient["default"].convertToType(data['personne_morale'], 'Boolean');
        }

        if (data.hasOwnProperty('date_prise_de_poste')) {
          obj['date_prise_de_poste'] = _ApiClient["default"].convertToType(data['date_prise_de_poste'], 'String');
        }

        if (data.hasOwnProperty('nom')) {
          obj['nom'] = _ApiClient["default"].convertToType(data['nom'], 'String');
        }

        if (data.hasOwnProperty('prenom')) {
          obj['prenom'] = _ApiClient["default"].convertToType(data['prenom'], 'String');
        }

        if (data.hasOwnProperty('nom_complet')) {
          obj['nom_complet'] = _ApiClient["default"].convertToType(data['nom_complet'], 'String');
        }

        if (data.hasOwnProperty('date_de_naissance')) {
          obj['date_de_naissance'] = _ApiClient["default"].convertToType(data['date_de_naissance'], 'String');
        }

        if (data.hasOwnProperty('date_de_naissance_formate')) {
          obj['date_de_naissance_formate'] = _ApiClient["default"].convertToType(data['date_de_naissance_formate'], 'String');
        }

        if (data.hasOwnProperty('age')) {
          obj['age'] = _ApiClient["default"].convertToType(data['age'], 'Number');
        }

        if (data.hasOwnProperty('nationalite')) {
          obj['nationalite'] = _ApiClient["default"].convertToType(data['nationalite'], 'String');
        }

        if (data.hasOwnProperty('code_nationalite')) {
          obj['code_nationalite'] = _ApiClient["default"].convertToType(data['code_nationalite'], 'String');
        }

        if (data.hasOwnProperty('ville_de_naissance')) {
          obj['ville_de_naissance'] = _ApiClient["default"].convertToType(data['ville_de_naissance'], 'String');
        }

        if (data.hasOwnProperty('pays_de_naissance')) {
          obj['pays_de_naissance'] = _ApiClient["default"].convertToType(data['pays_de_naissance'], 'String');
        }

        if (data.hasOwnProperty('code_pays_de_naissance')) {
          obj['code_pays_de_naissance'] = _ApiClient["default"].convertToType(data['code_pays_de_naissance'], 'String');
        }

        if (data.hasOwnProperty('adresse_ligne_1')) {
          obj['adresse_ligne_1'] = _ApiClient["default"].convertToType(data['adresse_ligne_1'], 'String');
        }

        if (data.hasOwnProperty('adresse_ligne_2')) {
          obj['adresse_ligne_2'] = _ApiClient["default"].convertToType(data['adresse_ligne_2'], 'String');
        }

        if (data.hasOwnProperty('adresse_ligne_3')) {
          obj['adresse_ligne_3'] = _ApiClient["default"].convertToType(data['adresse_ligne_3'], 'String');
        }

        if (data.hasOwnProperty('code_postal')) {
          obj['code_postal'] = _ApiClient["default"].convertToType(data['code_postal'], 'String');
        }

        if (data.hasOwnProperty('ville')) {
          obj['ville'] = _ApiClient["default"].convertToType(data['ville'], 'String');
        }

        if (data.hasOwnProperty('pays')) {
          obj['pays'] = _ApiClient["default"].convertToType(data['pays'], 'String');
        }

        if (data.hasOwnProperty('code_pays')) {
          obj['code_pays'] = _ApiClient["default"].convertToType(data['code_pays'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Representant;
}();
/**
 * Qualité du représentant.
 * @member {String} qualite
 */


Representant.prototype['qualite'] = undefined;
/**
 * Vrai si le représentant est une personne morale, faux si personne physique.
 * @member {Boolean} personne_morale
 */

Representant.prototype['personne_morale'] = undefined;
/**
 * Date de prise de poste du représentant.
 * @member {String} date_prise_de_poste
 */

Representant.prototype['date_prise_de_poste'] = undefined;
/**
 * Nom du représentant.
 * @member {String} nom
 */

Representant.prototype['nom'] = undefined;
/**
 * Prénom du représentant.
 * @member {String} prenom
 */

Representant.prototype['prenom'] = undefined;
/**
 * Nom complet du représentant.
 * @member {String} nom_complet
 */

Representant.prototype['nom_complet'] = undefined;
/**
 * Date de naissance du représentant.
 * @member {String} date_de_naissance
 */

Representant.prototype['date_de_naissance'] = undefined;
/**
 * Date de naissance formatée du représentant.
 * @member {String} date_de_naissance_formate
 */

Representant.prototype['date_de_naissance_formate'] = undefined;
/**
 * Age du représentant.
 * @member {Number} age
 */

Representant.prototype['age'] = undefined;
/**
 * Nationalité du représentant.
 * @member {String} nationalite
 */

Representant.prototype['nationalite'] = undefined;
/**
 * Code nationalité du représentant
 * @member {String} code_nationalite
 */

Representant.prototype['code_nationalite'] = undefined;
/**
 * Ville de naissance du représentant.
 * @member {String} ville_de_naissance
 */

Representant.prototype['ville_de_naissance'] = undefined;
/**
 * Pays de naissance du représentant.
 * @member {String} pays_de_naissance
 */

Representant.prototype['pays_de_naissance'] = undefined;
/**
 * Code du pays de naissance du représentant.
 * @member {String} code_pays_de_naissance
 */

Representant.prototype['code_pays_de_naissance'] = undefined;
/**
 * Première ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_1
 */

Representant.prototype['adresse_ligne_1'] = undefined;
/**
 * Deuxième ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_2
 */

Representant.prototype['adresse_ligne_2'] = undefined;
/**
 * Troisième ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_3
 */

Representant.prototype['adresse_ligne_3'] = undefined;
/**
 * Code postal du représentant.
 * @member {String} code_postal
 */

Representant.prototype['code_postal'] = undefined;
/**
 * Ville du représentant.
 * @member {String} ville
 */

Representant.prototype['ville'] = undefined;
/**
 * Pays du représentant.
 * @member {String} pays
 */

Representant.prototype['pays'] = undefined;
/**
 * Code du pays du représentant
 * @member {String} code_pays
 */

Representant.prototype['code_pays'] = undefined;
var _default = Representant;
exports["default"] = _default;