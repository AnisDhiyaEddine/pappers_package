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
 * The Beneficiaire model module.
 * @module model/Beneficiaire
 * @version 2.3.0
 */
var Beneficiaire = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Beneficiaire</code>.
   * @alias module:model/Beneficiaire
   */
  function Beneficiaire() {
    _classCallCheck(this, Beneficiaire);

    Beneficiaire.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Beneficiaire, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Beneficiaire</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Beneficiaire} obj Optional instance to populate.
     * @return {module:model/Beneficiaire} The populated <code>Beneficiaire</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Beneficiaire();

        if (data.hasOwnProperty('nom')) {
          obj['nom'] = _ApiClient["default"].convertToType(data['nom'], 'String');
        }

        if (data.hasOwnProperty('nom_usage')) {
          obj['nom_usage'] = _ApiClient["default"].convertToType(data['nom_usage'], 'String');
        }

        if (data.hasOwnProperty('prenom')) {
          obj['prenom'] = _ApiClient["default"].convertToType(data['prenom'], 'String');
        }

        if (data.hasOwnProperty('pseudonyme')) {
          obj['pseudonyme'] = _ApiClient["default"].convertToType(data['pseudonyme'], 'String');
        }

        if (data.hasOwnProperty('nom_complet')) {
          obj['nom_complet'] = _ApiClient["default"].convertToType(data['nom_complet'], 'String');
        }

        if (data.hasOwnProperty('date_de_naissance_formate')) {
          obj['date_de_naissance_formate'] = _ApiClient["default"].convertToType(data['date_de_naissance_formate'], 'String');
        }

        if (data.hasOwnProperty('nationalite')) {
          obj['nationalite'] = _ApiClient["default"].convertToType(data['nationalite'], 'String');
        }

        if (data.hasOwnProperty('pourcentage_parts')) {
          obj['pourcentage_parts'] = _ApiClient["default"].convertToType(data['pourcentage_parts'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_votes')) {
          obj['pourcentage_votes'] = _ApiClient["default"].convertToType(data['pourcentage_votes'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_votes_indirect')) {
          obj['pourcentage_votes_indirect'] = _ApiClient["default"].convertToType(data['pourcentage_votes_indirect'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_votes_directs')) {
          obj['pourcentage_votes_directs'] = _ApiClient["default"].convertToType(data['pourcentage_votes_directs'], 'Number');
        }

        if (data.hasOwnProperty('detention_autres_moyens_controle')) {
          obj['detention_autres_moyens_controle'] = _ApiClient["default"].convertToType(data['detention_autres_moyens_controle'], 'Boolean');
        }

        if (data.hasOwnProperty('beneficiaire_representant_legal')) {
          obj['beneficiaire_representant_legal'] = _ApiClient["default"].convertToType(data['beneficiaire_representant_legal'], 'Boolean');
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

        if (data.hasOwnProperty('pourcentage_parts_vocation_titulaire')) {
          obj['pourcentage_parts_vocation_titulaire'] = _ApiClient["default"].convertToType(data['pourcentage_parts_vocation_titulaire'], 'Number');
        }

        if (data.hasOwnProperty('representant_legal_placement_sans_gestion_delegation')) {
          obj['representant_legal_placement_sans_gestion_delegation'] = _ApiClient["default"].convertToType(data['representant_legal_placement_sans_gestion_delegation'], 'Boolean');
        }

        if (data.hasOwnProperty('code_postal')) {
          obj['code_postal'] = _ApiClient["default"].convertToType(data['code_postal'], 'String');
        }

        if (data.hasOwnProperty('detention_pouvoir_nom_membre_conseil_administration')) {
          obj['detention_pouvoir_nom_membre_conseil_administration'] = _ApiClient["default"].convertToType(data['detention_pouvoir_nom_membre_conseil_administration'], 'Boolean');
        }

        if (data.hasOwnProperty('ville')) {
          obj['ville'] = _ApiClient["default"].convertToType(data['ville'], 'String');
        }

        if (data.hasOwnProperty('date_de_naissance_complete_formatee')) {
          obj['date_de_naissance_complete_formatee'] = _ApiClient["default"].convertToType(data['date_de_naissance_complete_formatee'], 'Date');
        }

        if (data.hasOwnProperty('pourcentage_parts_directes')) {
          obj['pourcentage_parts_directes'] = _ApiClient["default"].convertToType(data['pourcentage_parts_directes'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_parts_indirectes')) {
          obj['pourcentage_parts_indirectes'] = _ApiClient["default"].convertToType(data['pourcentage_parts_indirectes'], 'Number');
        }

        if (data.hasOwnProperty('pays_de_naissance')) {
          obj['pays_de_naissance'] = _ApiClient["default"].convertToType(data['pays_de_naissance'], 'String');
        }

        if (data.hasOwnProperty('code_pays_de_naissance')) {
          obj['code_pays_de_naissance'] = _ApiClient["default"].convertToType(data['code_pays_de_naissance'], 'String');
        }

        if (data.hasOwnProperty('ville_de_naissance')) {
          obj['ville_de_naissance'] = _ApiClient["default"].convertToType(data['ville_de_naissance'], 'String');
        }

        if (data.hasOwnProperty('detention_pouvoir_decision_ag')) {
          obj['detention_pouvoir_decision_ag'] = _ApiClient["default"].convertToType(data['detention_pouvoir_decision_ag'], 'Boolean');
        }

        if (data.hasOwnProperty('pays')) {
          obj['pays'] = _ApiClient["default"].convertToType(data['pays'], 'String');
        }

        if (data.hasOwnProperty('date_de_naissance_formatee')) {
          obj['date_de_naissance_formatee'] = _ApiClient["default"].convertToType(data['date_de_naissance_formatee'], 'String');
        }

        if (data.hasOwnProperty('code_pays')) {
          obj['code_pays'] = _ApiClient["default"].convertToType(data['code_pays'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Beneficiaire;
}();
/**
 * Nom du b??n??ficiaire effectif.
 * @member {String} nom
 */


Beneficiaire.prototype['nom'] = undefined;
/**
 * Nom d'usage du b??n??ficiaire effectif.
 * @member {String} nom_usage
 */

Beneficiaire.prototype['nom_usage'] = undefined;
/**
 * Pr??nom du b??n??ficiaire effectif.
 * @member {String} prenom
 */

Beneficiaire.prototype['prenom'] = undefined;
/**
 * Pseudonyme du b??n??ficiaire effectif.
 * @member {String} pseudonyme
 */

Beneficiaire.prototype['pseudonyme'] = undefined;
/**
 * Nom complet du b??n??ficiaire effectif.
 * @member {String} nom_complet
 */

Beneficiaire.prototype['nom_complet'] = undefined;
/**
 * Mois et ann??e de naissance du b??n??ficiaire effectif, au format MM/AAAA.
 * @member {String} date_de_naissance_formate
 */

Beneficiaire.prototype['date_de_naissance_formate'] = undefined;
/**
 * Nationalit?? du b??n??ficiaire effectif.
 * @member {String} nationalite
 */

Beneficiaire.prototype['nationalite'] = undefined;
/**
 * Parts d??tenues par le b??n??ficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts
 */

Beneficiaire.prototype['pourcentage_parts'] = undefined;
/**
 * Droits de vote d??tenus par le b??n??ficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_votes
 */

Beneficiaire.prototype['pourcentage_votes'] = undefined;
/**
 * Droits de vote d??tenus de fa??on indirecte par le b??n??ficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_votes_indirect
 */

Beneficiaire.prototype['pourcentage_votes_indirect'] = undefined;
/**
 * Droits de vote d??tenus de fa??on directe par le b??n??ficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_votes_directs
 */

Beneficiaire.prototype['pourcentage_votes_directs'] = undefined;
/**
 * Vaut vrai s'il existe d'autres moyens de contr??le.
 * @member {Boolean} detention_autres_moyens_controle
 */

Beneficiaire.prototype['detention_autres_moyens_controle'] = undefined;
/**
 * Vaut vrai dans le cas o?? le b??n??ficiaire effectif a ??t?? d??fini comme le repr??sentant l??gal par d??faut.
 * @member {Boolean} beneficiaire_representant_legal
 */

Beneficiaire.prototype['beneficiaire_representant_legal'] = undefined;
/**
 * Premi??re ligne de l'adresse du b??n??ficiaire effectif.
 * @member {String} adresse_ligne_1
 */

Beneficiaire.prototype['adresse_ligne_1'] = undefined;
/**
 * Deuxi??me ligne de l'adresse du b??n??ficiaire effectif.
 * @member {String} adresse_ligne_2
 */

Beneficiaire.prototype['adresse_ligne_2'] = undefined;
/**
 * Troisi??me ligne de l'adresse du b??n??ficiaire effectif.
 * @member {String} adresse_ligne_3
 */

Beneficiaire.prototype['adresse_ligne_3'] = undefined;
/**
 * Parts dont le b??n??ficiaire effectif a vocation ?? devenir titulaire par l'effet d'un acte juridique, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts_vocation_titulaire
 */

Beneficiaire.prototype['pourcentage_parts_vocation_titulaire'] = undefined;
/**
 * Vaut vrai dans le cas o?? le b??n??ficiaire effectif est le repr??sentant l??gal du placement collectif (cas o?? le placement collectif n'a pas d??l??gu?? sa gestion ?? une soci??t?? de gestion).
 * @member {Boolean} representant_legal_placement_sans_gestion_delegation
 */

Beneficiaire.prototype['representant_legal_placement_sans_gestion_delegation'] = undefined;
/**
 * Code postal du b??n??ficiaire effectif.
 * @member {String} code_postal
 */

Beneficiaire.prototype['code_postal'] = undefined;
/**
 * Vaut vrai si le moyen de contr??le est le pouvoir de nommer ou de r??voquer la majorit?? des membres des organes d'administration, de gestion, de direction ou de surveillance de la personne morale.
 * @member {Boolean} detention_pouvoir_nom_membre_conseil_administration
 */

Beneficiaire.prototype['detention_pouvoir_nom_membre_conseil_administration'] = undefined;
/**
 * Ville du b??n??ficiaire effectif.
 * @member {String} ville
 */

Beneficiaire.prototype['ville'] = undefined;
/**
 * Date de naissance compl??te du b??n??ficiaire effectif, au format JJ/MM/AAAA.
 * @member {Date} date_de_naissance_complete_formatee
 */

Beneficiaire.prototype['date_de_naissance_complete_formatee'] = undefined;
/**
 * Parts d??tenues de fa??on directe par le b??n??ficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts_directes
 */

Beneficiaire.prototype['pourcentage_parts_directes'] = undefined;
/**
 * Parts d??tenues de fa??on indirecte par le b??n??ficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts_indirectes
 */

Beneficiaire.prototype['pourcentage_parts_indirectes'] = undefined;
/**
 * Pays de naissance du b??n??ficiaire effectif.
 * @member {String} pays_de_naissance
 */

Beneficiaire.prototype['pays_de_naissance'] = undefined;
/**
 * Code du pays de naissance du b??n??ficiaire effectif.
 * @member {String} code_pays_de_naissance
 */

Beneficiaire.prototype['code_pays_de_naissance'] = undefined;
/**
 * Ville de naissance du b??n??ficiaire effectif.
 * @member {String} ville_de_naissance
 */

Beneficiaire.prototype['ville_de_naissance'] = undefined;
/**
 * Vaut vrai pour les moyens de contr??le sur les organes d'administration, de gestion, de direction ou de surveillance de la personne morale autre que le pouvoir de nommer ou de r??voquer la majorit?? des membres.
 * @member {Boolean} detention_pouvoir_decision_ag
 */

Beneficiaire.prototype['detention_pouvoir_decision_ag'] = undefined;
/**
 * Pays du b??n??ficiaire effectif.
 * @member {String} pays
 */

Beneficiaire.prototype['pays'] = undefined;
/**
 * Mois et ann??e de naissance du b??n??ficiaire effectif, au format MM/AAAA.
 * @member {String} date_de_naissance_formatee
 */

Beneficiaire.prototype['date_de_naissance_formatee'] = undefined;
/**
 * Code pays du b??n??ficiaire effectif.
 * @member {String} code_pays
 */

Beneficiaire.prototype['code_pays'] = undefined;
var _default = Beneficiaire;
exports["default"] = _default;