"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Representant = _interopRequireDefault(require("./Representant"));

var _RepresentantRechercheAllOf = _interopRequireDefault(require("./RepresentantRechercheAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepresentantRecherche model module.
 * @module model/RepresentantRecherche
 * @version 2.3.0
 */
var RepresentantRecherche = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepresentantRecherche</code>.
   * @alias module:model/RepresentantRecherche
   * @implements module:model/Representant
   * @implements module:model/RepresentantRechercheAllOf
   */
  function RepresentantRecherche() {
    _classCallCheck(this, RepresentantRecherche);

    _Representant["default"].initialize(this);

    _RepresentantRechercheAllOf["default"].initialize(this);

    RepresentantRecherche.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepresentantRecherche, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepresentantRecherche</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepresentantRecherche} obj Optional instance to populate.
     * @return {module:model/RepresentantRecherche} The populated <code>RepresentantRecherche</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepresentantRecherche();

        _Representant["default"].constructFromObject(data, obj);

        _RepresentantRechercheAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('actuel')) {
          obj['actuel'] = _ApiClient["default"].convertToType(data['actuel'], 'Boolean');
        }

        if (data.hasOwnProperty('date_depart_de_poste')) {
          obj['date_depart_de_poste'] = _ApiClient["default"].convertToType(data['date_depart_de_poste'], 'String');
        }

        if (data.hasOwnProperty('forme_juridique')) {
          obj['forme_juridique'] = _ApiClient["default"].convertToType(data['forme_juridique'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepresentantRecherche;
}();
/**
 * Qualité du représentant.
 * @member {String} qualite
 */


RepresentantRecherche.prototype['qualite'] = undefined;
/**
 * Vrai si le représentant est une personne morale, faux si personne physique.
 * @member {Boolean} personne_morale
 */

RepresentantRecherche.prototype['personne_morale'] = undefined;
/**
 * Date de prise de poste du représentant.
 * @member {String} date_prise_de_poste
 */

RepresentantRecherche.prototype['date_prise_de_poste'] = undefined;
/**
 * Nom du représentant.
 * @member {String} nom
 */

RepresentantRecherche.prototype['nom'] = undefined;
/**
 * Prénom du représentant.
 * @member {String} prenom
 */

RepresentantRecherche.prototype['prenom'] = undefined;
/**
 * Nom complet du représentant.
 * @member {String} nom_complet
 */

RepresentantRecherche.prototype['nom_complet'] = undefined;
/**
 * Date de naissance du représentant.
 * @member {String} date_de_naissance
 */

RepresentantRecherche.prototype['date_de_naissance'] = undefined;
/**
 * Date de naissance formatée du représentant.
 * @member {String} date_de_naissance_formate
 */

RepresentantRecherche.prototype['date_de_naissance_formate'] = undefined;
/**
 * Age du représentant.
 * @member {Number} age
 */

RepresentantRecherche.prototype['age'] = undefined;
/**
 * Nationalité du représentant.
 * @member {String} nationalite
 */

RepresentantRecherche.prototype['nationalite'] = undefined;
/**
 * Code nationalité du représentant
 * @member {String} code_nationalite
 */

RepresentantRecherche.prototype['code_nationalite'] = undefined;
/**
 * Ville de naissance du représentant.
 * @member {String} ville_de_naissance
 */

RepresentantRecherche.prototype['ville_de_naissance'] = undefined;
/**
 * Pays de naissance du représentant.
 * @member {String} pays_de_naissance
 */

RepresentantRecherche.prototype['pays_de_naissance'] = undefined;
/**
 * Code du pays de naissance du représentant.
 * @member {String} code_pays_de_naissance
 */

RepresentantRecherche.prototype['code_pays_de_naissance'] = undefined;
/**
 * Première ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_1
 */

RepresentantRecherche.prototype['adresse_ligne_1'] = undefined;
/**
 * Deuxième ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_2
 */

RepresentantRecherche.prototype['adresse_ligne_2'] = undefined;
/**
 * Troisième ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_3
 */

RepresentantRecherche.prototype['adresse_ligne_3'] = undefined;
/**
 * Code postal du représentant.
 * @member {String} code_postal
 */

RepresentantRecherche.prototype['code_postal'] = undefined;
/**
 * Ville du représentant.
 * @member {String} ville
 */

RepresentantRecherche.prototype['ville'] = undefined;
/**
 * Pays du représentant.
 * @member {String} pays
 */

RepresentantRecherche.prototype['pays'] = undefined;
/**
 * Code du pays du représentant
 * @member {String} code_pays
 */

RepresentantRecherche.prototype['code_pays'] = undefined;
/**
 * Vaut vrai si le représentant est toujours à son poste.
 * @member {Boolean} actuel
 */

RepresentantRecherche.prototype['actuel'] = undefined;
/**
 * Date de départ de poste dans le cas où le représentant n'est plus un représentant actuel, au format AAAA-MM-JJ.
 * @member {String} date_depart_de_poste
 */

RepresentantRecherche.prototype['date_depart_de_poste'] = undefined;
/**
 * Forme juridique du représentant dans le cas d'une personne morale.
 * @member {String} forme_juridique
 */

RepresentantRecherche.prototype['forme_juridique'] = undefined; // Implement Representant interface:

/**
 * Qualité du représentant.
 * @member {String} qualite
 */

_Representant["default"].prototype['qualite'] = undefined;
/**
 * Vrai si le représentant est une personne morale, faux si personne physique.
 * @member {Boolean} personne_morale
 */

_Representant["default"].prototype['personne_morale'] = undefined;
/**
 * Date de prise de poste du représentant.
 * @member {String} date_prise_de_poste
 */

_Representant["default"].prototype['date_prise_de_poste'] = undefined;
/**
 * Nom du représentant.
 * @member {String} nom
 */

_Representant["default"].prototype['nom'] = undefined;
/**
 * Prénom du représentant.
 * @member {String} prenom
 */

_Representant["default"].prototype['prenom'] = undefined;
/**
 * Nom complet du représentant.
 * @member {String} nom_complet
 */

_Representant["default"].prototype['nom_complet'] = undefined;
/**
 * Date de naissance du représentant.
 * @member {String} date_de_naissance
 */

_Representant["default"].prototype['date_de_naissance'] = undefined;
/**
 * Date de naissance formatée du représentant.
 * @member {String} date_de_naissance_formate
 */

_Representant["default"].prototype['date_de_naissance_formate'] = undefined;
/**
 * Age du représentant.
 * @member {Number} age
 */

_Representant["default"].prototype['age'] = undefined;
/**
 * Nationalité du représentant.
 * @member {String} nationalite
 */

_Representant["default"].prototype['nationalite'] = undefined;
/**
 * Code nationalité du représentant
 * @member {String} code_nationalite
 */

_Representant["default"].prototype['code_nationalite'] = undefined;
/**
 * Ville de naissance du représentant.
 * @member {String} ville_de_naissance
 */

_Representant["default"].prototype['ville_de_naissance'] = undefined;
/**
 * Pays de naissance du représentant.
 * @member {String} pays_de_naissance
 */

_Representant["default"].prototype['pays_de_naissance'] = undefined;
/**
 * Code du pays de naissance du représentant.
 * @member {String} code_pays_de_naissance
 */

_Representant["default"].prototype['code_pays_de_naissance'] = undefined;
/**
 * Première ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_1
 */

_Representant["default"].prototype['adresse_ligne_1'] = undefined;
/**
 * Deuxième ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_2
 */

_Representant["default"].prototype['adresse_ligne_2'] = undefined;
/**
 * Troisième ligne de l'adresse du représentant.
 * @member {String} adresse_ligne_3
 */

_Representant["default"].prototype['adresse_ligne_3'] = undefined;
/**
 * Code postal du représentant.
 * @member {String} code_postal
 */

_Representant["default"].prototype['code_postal'] = undefined;
/**
 * Ville du représentant.
 * @member {String} ville
 */

_Representant["default"].prototype['ville'] = undefined;
/**
 * Pays du représentant.
 * @member {String} pays
 */

_Representant["default"].prototype['pays'] = undefined;
/**
 * Code du pays du représentant
 * @member {String} code_pays
 */

_Representant["default"].prototype['code_pays'] = undefined; // Implement RepresentantRechercheAllOf interface:

/**
 * Vaut vrai si le représentant est toujours à son poste.
 * @member {Boolean} actuel
 */

_RepresentantRechercheAllOf["default"].prototype['actuel'] = undefined;
/**
 * Date de départ de poste dans le cas où le représentant n'est plus un représentant actuel, au format AAAA-MM-JJ.
 * @member {String} date_depart_de_poste
 */

_RepresentantRechercheAllOf["default"].prototype['date_depart_de_poste'] = undefined;
/**
 * Forme juridique du représentant dans le cas d'une personne morale.
 * @member {String} forme_juridique
 */

_RepresentantRechercheAllOf["default"].prototype['forme_juridique'] = undefined;
var _default = RepresentantRecherche;
exports["default"] = _default;