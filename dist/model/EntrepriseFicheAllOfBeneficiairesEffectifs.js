"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseFicheAllOfDetailsPartsDirectes = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsPartsDirectes"));

var _EntrepriseFicheAllOfDetailsPartsIndirectes = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsPartsIndirectes"));

var _EntrepriseFicheAllOfDetailsPartsVocationTitulaire = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsPartsVocationTitulaire"));

var _EntrepriseFicheAllOfDetailsSocieteDeGestion = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsSocieteDeGestion"));

var _EntrepriseFicheAllOfDetailsVotesDirects = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsVotesDirects"));

var _EntrepriseFicheAllOfDetailsVotesIndirects = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsVotesIndirects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseFicheAllOfBeneficiairesEffectifs model module.
 * @module model/EntrepriseFicheAllOfBeneficiairesEffectifs
 * @version 2.3.0
 */
var EntrepriseFicheAllOfBeneficiairesEffectifs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfBeneficiairesEffectifs</code>.
   * @alias module:model/EntrepriseFicheAllOfBeneficiairesEffectifs
   */
  function EntrepriseFicheAllOfBeneficiairesEffectifs() {
    _classCallCheck(this, EntrepriseFicheAllOfBeneficiairesEffectifs);

    EntrepriseFicheAllOfBeneficiairesEffectifs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfBeneficiairesEffectifs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfBeneficiairesEffectifs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfBeneficiairesEffectifs} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfBeneficiairesEffectifs} The populated <code>EntrepriseFicheAllOfBeneficiairesEffectifs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfBeneficiairesEffectifs();

        if (data.hasOwnProperty('date_greffe')) {
          obj['date_greffe'] = _ApiClient["default"].convertToType(data['date_greffe'], 'Date');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

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

        if (data.hasOwnProperty('date_de_naissance_formatee')) {
          obj['date_de_naissance_formatee'] = _ApiClient["default"].convertToType(data['date_de_naissance_formatee'], 'String');
        }

        if (data.hasOwnProperty('date_de_naissance_complete_formatee')) {
          obj['date_de_naissance_complete_formatee'] = _ApiClient["default"].convertToType(data['date_de_naissance_complete_formatee'], 'Date');
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

        if (data.hasOwnProperty('pourcentage_parts')) {
          obj['pourcentage_parts'] = _ApiClient["default"].convertToType(data['pourcentage_parts'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_parts_directes')) {
          obj['pourcentage_parts_directes'] = _ApiClient["default"].convertToType(data['pourcentage_parts_directes'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_parts_indirectes')) {
          obj['pourcentage_parts_indirectes'] = _ApiClient["default"].convertToType(data['pourcentage_parts_indirectes'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_parts_vocation_titulaire')) {
          obj['pourcentage_parts_vocation_titulaire'] = _ApiClient["default"].convertToType(data['pourcentage_parts_vocation_titulaire'], 'Number');
        }

        if (data.hasOwnProperty('details_parts_directes')) {
          obj['details_parts_directes'] = _EntrepriseFicheAllOfDetailsPartsDirectes["default"].constructFromObject(data['details_parts_directes']);
        }

        if (data.hasOwnProperty('details_parts_indirectes')) {
          obj['details_parts_indirectes'] = _EntrepriseFicheAllOfDetailsPartsIndirectes["default"].constructFromObject(data['details_parts_indirectes']);
        }

        if (data.hasOwnProperty('details_parts_vocation_titulaire')) {
          obj['details_parts_vocation_titulaire'] = _EntrepriseFicheAllOfDetailsPartsVocationTitulaire["default"].constructFromObject(data['details_parts_vocation_titulaire']);
        }

        if (data.hasOwnProperty('pourcentage_votes')) {
          obj['pourcentage_votes'] = _ApiClient["default"].convertToType(data['pourcentage_votes'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_votes_directs')) {
          obj['pourcentage_votes_directs'] = _ApiClient["default"].convertToType(data['pourcentage_votes_directs'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_votes_indirect')) {
          obj['pourcentage_votes_indirect'] = _ApiClient["default"].convertToType(data['pourcentage_votes_indirect'], 'Number');
        }

        if (data.hasOwnProperty('details_votes_directs')) {
          obj['details_votes_directs'] = _EntrepriseFicheAllOfDetailsVotesDirects["default"].constructFromObject(data['details_votes_directs']);
        }

        if (data.hasOwnProperty('details_votes_indirects')) {
          obj['details_votes_indirects'] = _EntrepriseFicheAllOfDetailsVotesIndirects["default"].constructFromObject(data['details_votes_indirects']);
        }

        if (data.hasOwnProperty('details_societe_de_gestion')) {
          obj['details_societe_de_gestion'] = _EntrepriseFicheAllOfDetailsSocieteDeGestion["default"].constructFromObject(data['details_societe_de_gestion']);
        }

        if (data.hasOwnProperty('detention_pouvoir_decision_ag')) {
          obj['detention_pouvoir_decision_ag'] = _ApiClient["default"].convertToType(data['detention_pouvoir_decision_ag'], 'Boolean');
        }

        if (data.hasOwnProperty('detention_pouvoir_nom_membre_conseil_administration')) {
          obj['detention_pouvoir_nom_membre_conseil_administration'] = _ApiClient["default"].convertToType(data['detention_pouvoir_nom_membre_conseil_administration'], 'Boolean');
        }

        if (data.hasOwnProperty('detention_autres_moyens_controle')) {
          obj['detention_autres_moyens_controle'] = _ApiClient["default"].convertToType(data['detention_autres_moyens_controle'], 'Boolean');
        }

        if (data.hasOwnProperty('beneficiaire_representant_legal')) {
          obj['beneficiaire_representant_legal'] = _ApiClient["default"].convertToType(data['beneficiaire_representant_legal'], 'Boolean');
        }

        if (data.hasOwnProperty('representant_legal_placement_sans_gestion_delegation')) {
          obj['representant_legal_placement_sans_gestion_delegation'] = _ApiClient["default"].convertToType(data['representant_legal_placement_sans_gestion_delegation'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfBeneficiairesEffectifs;
}();
/**
 * Date de génération des bénéficiaires effectifs, au format AAAA-MM-JJ.
 * @member {Date} date_greffe
 */


EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['date_greffe'] = undefined;
/**
 * Type du bénéficiaire effectif
 * @member {String} type
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['type'] = undefined;
/**
 * Nom du bénéficiaire effectif.
 * @member {String} nom
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['nom'] = undefined;
/**
 * Nom d'usage du bénéficiaire effectif.
 * @member {String} nom_usage
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['nom_usage'] = undefined;
/**
 * Prénom du bénéficiaire effectif.
 * @member {String} prenom
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['prenom'] = undefined;
/**
 * @member {String} pseudonyme
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pseudonyme'] = undefined;
/**
 * Mois et année de naissance du bénéficiaire effectif, au format MM/AAAA.
 * @member {String} date_de_naissance_formatee
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['date_de_naissance_formatee'] = undefined;
/**
 * Date de naissance complète du bénéficiaire effectif, au format JJ/MM/AAAA.
 * @member {Date} date_de_naissance_complete_formatee
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['date_de_naissance_complete_formatee'] = undefined;
/**
 * Nationalité du bénéficiaire effectif.
 * @member {String} nationalite
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['nationalite'] = undefined;
/**
 * Code de la nationalité du bénéficiaire effectif.
 * @member {String} code_nationalite
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['code_nationalite'] = undefined;
/**
 * Ville de naissance du bénéficiaire effectif.
 * @member {String} ville_de_naissance
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['ville_de_naissance'] = undefined;
/**
 * Pays de naissance du bénéficiaire effectif.
 * @member {String} pays_de_naissance
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pays_de_naissance'] = undefined;
/**
 * Code du pays de naissance du bénéficiaire effectif.
 * @member {String} code_pays_de_naissance
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['code_pays_de_naissance'] = undefined;
/**
 * Première ligne de l'adresse du bénéficiaire effectif.
 * @member {String} adresse_ligne_1
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['adresse_ligne_1'] = undefined;
/**
 * Deuxième ligne de l'adresse du bénéficiaire effectif.
 * @member {String} adresse_ligne_2
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['adresse_ligne_2'] = undefined;
/**
 * Troisième ligne de l'adresse du bénéficiaire effectif.
 * @member {String} adresse_ligne_3
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['adresse_ligne_3'] = undefined;
/**
 * Code postal du bénéficiaire effectif.
 * @member {String} code_postal
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['code_postal'] = undefined;
/**
 * Ville du bénéficiaire effectif.
 * @member {String} ville
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['ville'] = undefined;
/**
 * Pays du bénéficiaire effectif.
 * @member {String} pays
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pays'] = undefined;
/**
 * Code du pays du bénéficiaire effectif.
 * @member {String} code_pays
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['code_pays'] = undefined;
/**
 * Parts détenues par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pourcentage_parts'] = undefined;
/**
 * Parts détenues de façon directe par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts_directes
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pourcentage_parts_directes'] = undefined;
/**
 * Parts détenues de façon indirecte par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts_indirectes
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pourcentage_parts_indirectes'] = undefined;
/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire par l'effet d'un acte juridique, en pourcentage des parts totales.
 * @member {Number} pourcentage_parts_vocation_titulaire
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pourcentage_parts_vocation_titulaire'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsDirectes} details_parts_directes
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['details_parts_directes'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsIndirectes} details_parts_indirectes
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['details_parts_indirectes'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaire} details_parts_vocation_titulaire
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['details_parts_vocation_titulaire'] = undefined;
/**
 * Droits de vote détenus par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_votes
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pourcentage_votes'] = undefined;
/**
 * Droits de vote détenus de façon directe par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_votes_directs
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pourcentage_votes_directs'] = undefined;
/**
 * Droits de vote détenus de façon indirecte par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_votes_indirect
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['pourcentage_votes_indirect'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsVotesDirects} details_votes_directs
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['details_votes_directs'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsVotesIndirects} details_votes_indirects
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['details_votes_indirects'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsSocieteDeGestion} details_societe_de_gestion
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['details_societe_de_gestion'] = undefined;
/**
 * Vaut vrai pour les moyens de contrôle sur les organes d'administration, de gestion, de direction ou de surveillance de la personne morale autre que le pouvoir de nommer ou de révoquer la majorité des membres.
 * @member {Boolean} detention_pouvoir_decision_ag
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['detention_pouvoir_decision_ag'] = undefined;
/**
 * Vaut vrai si le moyen de contrôle est le pouvoir de nommer ou de révoquer la majorité des membres des organes d'administration, de gestion, de direction ou de surveillance de la personne morale.
 * @member {Boolean} detention_pouvoir_nom_membre_conseil_administration
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['detention_pouvoir_nom_membre_conseil_administration'] = undefined;
/**
 * Vaut vrai s'il existe d'autres moyens de contrôle.
 * @member {Boolean} detention_autres_moyens_controle
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['detention_autres_moyens_controle'] = undefined;
/**
 * Vaut vrai dans le cas où le bénéficiaire effectif a été défini comme le représentant légal par défaut.
 * @member {Boolean} beneficiaire_representant_legal
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['beneficiaire_representant_legal'] = undefined;
/**
 * Vaut vrai dans le cas où le bénéficiaire effectif est le représentant légal du placement collectif (cas où le placement collectif n'a pas délégué sa gestion à une société de gestion).
 * @member {Boolean} representant_legal_placement_sans_gestion_delegation
 */

EntrepriseFicheAllOfBeneficiairesEffectifs.prototype['representant_legal_placement_sans_gestion_delegation'] = undefined;
var _default = EntrepriseFicheAllOfBeneficiairesEffectifs;
exports["default"] = _default;