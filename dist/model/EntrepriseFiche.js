"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Bodacc = _interopRequireDefault(require("./Bodacc"));

var _EntrepriseBase = _interopRequireDefault(require("./EntrepriseBase"));

var _EntrepriseBaseConventionsCollectives = _interopRequireDefault(require("./EntrepriseBaseConventionsCollectives"));

var _EntrepriseFicheAllOf = _interopRequireDefault(require("./EntrepriseFicheAllOf"));

var _EntrepriseFicheAllOfBeneficiairesEffectifs = _interopRequireDefault(require("./EntrepriseFicheAllOfBeneficiairesEffectifs"));

var _EntrepriseFicheAllOfComptes = _interopRequireDefault(require("./EntrepriseFicheAllOfComptes"));

var _EntrepriseFicheAllOfDepotsActes = _interopRequireDefault(require("./EntrepriseFicheAllOfDepotsActes"));

var _EntrepriseFicheAllOfDerniersStatuts = _interopRequireDefault(require("./EntrepriseFicheAllOfDerniersStatuts"));

var _EntrepriseFicheAllOfExtraitImmatriculation = _interopRequireDefault(require("./EntrepriseFicheAllOfExtraitImmatriculation"));

var _EntrepriseFicheAllOfMarques = _interopRequireDefault(require("./EntrepriseFicheAllOfMarques"));

var _EntrepriseFicheAllOfProceduresCollectives = _interopRequireDefault(require("./EntrepriseFicheAllOfProceduresCollectives"));

var _EntrepriseFicheAllOfRnm = _interopRequireDefault(require("./EntrepriseFicheAllOfRnm"));

var _EtablissementFiche = _interopRequireDefault(require("./EtablissementFiche"));

var _Representant = _interopRequireDefault(require("./Representant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseFiche model module.
 * @module model/EntrepriseFiche
 * @version 2.3.0
 */
var EntrepriseFiche = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFiche</code>.
   * @alias module:model/EntrepriseFiche
   * @implements module:model/EntrepriseBase
   * @implements module:model/EntrepriseFicheAllOf
   */
  function EntrepriseFiche() {
    _classCallCheck(this, EntrepriseFiche);

    _EntrepriseBase["default"].initialize(this);

    _EntrepriseFicheAllOf["default"].initialize(this);

    EntrepriseFiche.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFiche, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFiche</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFiche} obj Optional instance to populate.
     * @return {module:model/EntrepriseFiche} The populated <code>EntrepriseFiche</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFiche();

        _EntrepriseBase["default"].constructFromObject(data, obj);

        _EntrepriseFicheAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('siren')) {
          obj['siren'] = _ApiClient["default"].convertToType(data['siren'], 'String');
        }

        if (data.hasOwnProperty('siren_formate')) {
          obj['siren_formate'] = _ApiClient["default"].convertToType(data['siren_formate'], 'String');
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

        if (data.hasOwnProperty('sexe')) {
          obj['sexe'] = _ApiClient["default"].convertToType(data['sexe'], 'String');
        }

        if (data.hasOwnProperty('code_naf')) {
          obj['code_naf'] = _ApiClient["default"].convertToType(data['code_naf'], 'String');
        }

        if (data.hasOwnProperty('libelle_code_naf')) {
          obj['libelle_code_naf'] = _ApiClient["default"].convertToType(data['libelle_code_naf'], 'String');
        }

        if (data.hasOwnProperty('domaine_activite')) {
          obj['domaine_activite'] = _ApiClient["default"].convertToType(data['domaine_activite'], 'String');
        }

        if (data.hasOwnProperty('conventions_collectives')) {
          obj['conventions_collectives'] = _ApiClient["default"].convertToType(data['conventions_collectives'], [_EntrepriseBaseConventionsCollectives["default"]]);
        }

        if (data.hasOwnProperty('date_creation')) {
          obj['date_creation'] = _ApiClient["default"].convertToType(data['date_creation'], 'Date');
        }

        if (data.hasOwnProperty('date_creation_formate')) {
          obj['date_creation_formate'] = _ApiClient["default"].convertToType(data['date_creation_formate'], 'String');
        }

        if (data.hasOwnProperty('entreprise_cessee')) {
          obj['entreprise_cessee'] = _ApiClient["default"].convertToType(data['entreprise_cessee'], 'Boolean');
        }

        if (data.hasOwnProperty('date_cessation')) {
          obj['date_cessation'] = _ApiClient["default"].convertToType(data['date_cessation'], 'String');
        }

        if (data.hasOwnProperty('entreprise_employeuse')) {
          obj['entreprise_employeuse'] = _ApiClient["default"].convertToType(data['entreprise_employeuse'], 'Boolean');
        }

        if (data.hasOwnProperty('categorie_juridique')) {
          obj['categorie_juridique'] = _ApiClient["default"].convertToType(data['categorie_juridique'], 'String');
        }

        if (data.hasOwnProperty('forme_juridique')) {
          obj['forme_juridique'] = _ApiClient["default"].convertToType(data['forme_juridique'], 'String');
        }

        if (data.hasOwnProperty('effectif')) {
          obj['effectif'] = _ApiClient["default"].convertToType(data['effectif'], 'String');
        }

        if (data.hasOwnProperty('effectif_min')) {
          obj['effectif_min'] = _ApiClient["default"].convertToType(data['effectif_min'], 'Number');
        }

        if (data.hasOwnProperty('effectif_max')) {
          obj['effectif_max'] = _ApiClient["default"].convertToType(data['effectif_max'], 'Number');
        }

        if (data.hasOwnProperty('tranche_effectif')) {
          obj['tranche_effectif'] = _ApiClient["default"].convertToType(data['tranche_effectif'], 'String');
        }

        if (data.hasOwnProperty('annee_effectif')) {
          obj['annee_effectif'] = _ApiClient["default"].convertToType(data['annee_effectif'], 'Number');
        }

        if (data.hasOwnProperty('capital')) {
          obj['capital'] = _ApiClient["default"].convertToType(data['capital'], 'Number');
        }

        if (data.hasOwnProperty('statut_rcs')) {
          obj['statut_rcs'] = _ApiClient["default"].convertToType(data['statut_rcs'], 'String');
        }

        if (data.hasOwnProperty('siege')) {
          obj['siege'] = _EtablissementFiche["default"].constructFromObject(data['siege']);
        }

        if (data.hasOwnProperty('diffusable')) {
          obj['diffusable'] = _ApiClient["default"].convertToType(data['diffusable'], 'Boolean');
        }

        if (data.hasOwnProperty('sigle')) {
          obj['sigle'] = _ApiClient["default"].convertToType(data['sigle'], 'String');
        }

        if (data.hasOwnProperty('objet_social')) {
          obj['objet_social'] = _ApiClient["default"].convertToType(data['objet_social'], 'String');
        }

        if (data.hasOwnProperty('capital_formate')) {
          obj['capital_formate'] = _ApiClient["default"].convertToType(data['capital_formate'], 'String');
        }

        if (data.hasOwnProperty('capital_actuel_si_variable')) {
          obj['capital_actuel_si_variable'] = _ApiClient["default"].convertToType(data['capital_actuel_si_variable'], 'String');
        }

        if (data.hasOwnProperty('devise_capital')) {
          obj['devise_capital'] = _ApiClient["default"].convertToType(data['devise_capital'], 'String');
        }

        if (data.hasOwnProperty('numero_rcs')) {
          obj['numero_rcs'] = _ApiClient["default"].convertToType(data['numero_rcs'], 'String');
        }

        if (data.hasOwnProperty('date_cloture_exercice')) {
          obj['date_cloture_exercice'] = _ApiClient["default"].convertToType(data['date_cloture_exercice'], 'String');
        }

        if (data.hasOwnProperty('date_cloture_exercice_exceptionnelle')) {
          obj['date_cloture_exercice_exceptionnelle'] = _ApiClient["default"].convertToType(data['date_cloture_exercice_exceptionnelle'], 'String');
        }

        if (data.hasOwnProperty('date_cloture_exercice_exceptionnelle_formate')) {
          obj['date_cloture_exercice_exceptionnelle_formate'] = _ApiClient["default"].convertToType(data['date_cloture_exercice_exceptionnelle_formate'], 'String');
        }

        if (data.hasOwnProperty('prochaine_date_cloture_exercice')) {
          obj['prochaine_date_cloture_exercice'] = _ApiClient["default"].convertToType(data['prochaine_date_cloture_exercice'], 'String');
        }

        if (data.hasOwnProperty('prochaine_date_cloture_exercice_formate')) {
          obj['prochaine_date_cloture_exercice_formate'] = _ApiClient["default"].convertToType(data['prochaine_date_cloture_exercice_formate'], 'String');
        }

        if (data.hasOwnProperty('economie_sociale_solidaire')) {
          obj['economie_sociale_solidaire'] = _ApiClient["default"].convertToType(data['economie_sociale_solidaire'], 'Boolean');
        }

        if (data.hasOwnProperty('duree_personne_morale')) {
          obj['duree_personne_morale'] = _ApiClient["default"].convertToType(data['duree_personne_morale'], 'String');
        }

        if (data.hasOwnProperty('dernier_traitement')) {
          obj['dernier_traitement'] = _ApiClient["default"].convertToType(data['dernier_traitement'], 'Date');
        }

        if (data.hasOwnProperty('derniere_mise_a_jour_sirene')) {
          obj['derniere_mise_a_jour_sirene'] = _ApiClient["default"].convertToType(data['derniere_mise_a_jour_sirene'], 'Date');
        }

        if (data.hasOwnProperty('derniere_mise_a_jour_rcs')) {
          obj['derniere_mise_a_jour_rcs'] = _ApiClient["default"].convertToType(data['derniere_mise_a_jour_rcs'], 'Date');
        }

        if (data.hasOwnProperty('greffe')) {
          obj['greffe'] = _ApiClient["default"].convertToType(data['greffe'], 'String');
        }

        if (data.hasOwnProperty('code_greffe')) {
          obj['code_greffe'] = _ApiClient["default"].convertToType(data['code_greffe'], 'String');
        }

        if (data.hasOwnProperty('date_immatriculation_rcs')) {
          obj['date_immatriculation_rcs'] = _ApiClient["default"].convertToType(data['date_immatriculation_rcs'], 'String');
        }

        if (data.hasOwnProperty('date_premiere_immatriculation_rcs')) {
          obj['date_premiere_immatriculation_rcs'] = _ApiClient["default"].convertToType(data['date_premiere_immatriculation_rcs'], 'String');
        }

        if (data.hasOwnProperty('date_radiation_rcs')) {
          obj['date_radiation_rcs'] = _ApiClient["default"].convertToType(data['date_radiation_rcs'], 'String');
        }

        if (data.hasOwnProperty('numero_tva_intracommunautaire')) {
          obj['numero_tva_intracommunautaire'] = _ApiClient["default"].convertToType(data['numero_tva_intracommunautaire'], 'String');
        }

        if (data.hasOwnProperty('associe_unique')) {
          obj['associe_unique'] = _ApiClient["default"].convertToType(data['associe_unique'], 'Boolean');
        }

        if (data.hasOwnProperty('etablissements')) {
          obj['etablissements'] = _ApiClient["default"].convertToType(data['etablissements'], [_EtablissementFiche["default"]]);
        }

        if (data.hasOwnProperty('finances')) {
          obj['finances'] = _ApiClient["default"].convertToType(data['finances'], [Object]);
        }

        if (data.hasOwnProperty('representants')) {
          obj['representants'] = _ApiClient["default"].convertToType(data['representants'], [_Representant["default"]]);
        }

        if (data.hasOwnProperty('beneficiaires_effectifs')) {
          obj['beneficiaires_effectifs'] = _ApiClient["default"].convertToType(data['beneficiaires_effectifs'], [_EntrepriseFicheAllOfBeneficiairesEffectifs["default"]]);
        }

        if (data.hasOwnProperty('depots_actes')) {
          obj['depots_actes'] = _ApiClient["default"].convertToType(data['depots_actes'], [_EntrepriseFicheAllOfDepotsActes["default"]]);
        }

        if (data.hasOwnProperty('comptes')) {
          obj['comptes'] = _ApiClient["default"].convertToType(data['comptes'], [_EntrepriseFicheAllOfComptes["default"]]);
        }

        if (data.hasOwnProperty('publications_bodacc')) {
          obj['publications_bodacc'] = _ApiClient["default"].convertToType(data['publications_bodacc'], [_Bodacc["default"]]);
        }

        if (data.hasOwnProperty('procedures_collectives')) {
          obj['procedures_collectives'] = _ApiClient["default"].convertToType(data['procedures_collectives'], [_EntrepriseFicheAllOfProceduresCollectives["default"]]);
        }

        if (data.hasOwnProperty('procedure_collective_existe')) {
          obj['procedure_collective_existe'] = _ApiClient["default"].convertToType(data['procedure_collective_existe'], 'Boolean');
        }

        if (data.hasOwnProperty('procedure_collective_en_cours')) {
          obj['procedure_collective_en_cours'] = _ApiClient["default"].convertToType(data['procedure_collective_en_cours'], 'Boolean');
        }

        if (data.hasOwnProperty('derniers_statuts')) {
          obj['derniers_statuts'] = _EntrepriseFicheAllOfDerniersStatuts["default"].constructFromObject(data['derniers_statuts']);
        }

        if (data.hasOwnProperty('extrait_immatriculation')) {
          obj['extrait_immatriculation'] = _EntrepriseFicheAllOfExtraitImmatriculation["default"].constructFromObject(data['extrait_immatriculation']);
        }

        if (data.hasOwnProperty('rnm')) {
          obj['rnm'] = _EntrepriseFicheAllOfRnm["default"].constructFromObject(data['rnm']);
        }

        if (data.hasOwnProperty('marques')) {
          obj['marques'] = _ApiClient["default"].convertToType(data['marques'], [_EntrepriseFicheAllOfMarques["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFiche;
}();
/**
 * Le numéro SIREN de l'entreprise au format xxxxxxxxx.
 * @member {String} siren
 */


EntrepriseFiche.prototype['siren'] = undefined;
/**
 * Le numéro SIREN de l'entreprise au format xxx xxx xxx.
 * @member {String} siren_formate
 */

EntrepriseFiche.prototype['siren_formate'] = undefined;
/**
 * Le nom de l'entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique.
 * @member {String} nom_entreprise
 */

EntrepriseFiche.prototype['nom_entreprise'] = undefined;
/**
 * Vrai en cas de personne morale, faux en cas de personne physique.
 * @member {Boolean} personne_morale
 */

EntrepriseFiche.prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise si personne morale.
 * @member {String} denomination
 */

EntrepriseFiche.prototype['denomination'] = undefined;
/**
 * Nom si personne physique.
 * @member {String} nom
 */

EntrepriseFiche.prototype['nom'] = undefined;
/**
 * Prénom si personne physique.
 * @member {String} prenom
 */

EntrepriseFiche.prototype['prenom'] = undefined;
/**
 * Sexe si personne physique. F pour féminin, M pour masculin.
 * @member {String} sexe
 */

EntrepriseFiche.prototype['sexe'] = undefined;
/**
 * Code NAF de l'entreprise.
 * @member {String} code_naf
 */

EntrepriseFiche.prototype['code_naf'] = undefined;
/**
 * Libellé du code NAF de l'entreprise.
 * @member {String} libelle_code_naf
 */

EntrepriseFiche.prototype['libelle_code_naf'] = undefined;
/**
 * Domaine d'activité de l'entreprise.
 * @member {String} domaine_activite
 */

EntrepriseFiche.prototype['domaine_activite'] = undefined;
/**
 * Liste des conventions collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseBaseConventionsCollectives>} conventions_collectives
 */

EntrepriseFiche.prototype['conventions_collectives'] = undefined;
/**
 * Date de création de l'entreprise au format AAAA-MM-JJ.
 * @member {Date} date_creation
 */

EntrepriseFiche.prototype['date_creation'] = undefined;
/**
 * Date de création de l'entreprise au format JJ/MM/AAAA.
 * @member {String} date_creation_formate
 */

EntrepriseFiche.prototype['date_creation_formate'] = undefined;
/**
 * Si vrai, l'entreprise n'est plus en activité. Sinon, elle est toujours en activité.
 * @member {Boolean} entreprise_cessee
 */

EntrepriseFiche.prototype['entreprise_cessee'] = undefined;
/**
 * Date de cessation de l'entreprise au format AAAA-MM-JJ.
 * @member {String} date_cessation
 */

EntrepriseFiche.prototype['date_cessation'] = undefined;
/**
 * Si vrai, l'entreprise a au moins un employé.
 * @member {Boolean} entreprise_employeuse
 */

EntrepriseFiche.prototype['entreprise_employeuse'] = undefined;
/**
 * Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
 * @member {String} categorie_juridique
 */

EntrepriseFiche.prototype['categorie_juridique'] = undefined;
/**
 * Forme juridique de l'entreprise.
 * @member {String} forme_juridique
 */

EntrepriseFiche.prototype['forme_juridique'] = undefined;
/**
 * Tranche d'effectif de l'entreprise.
 * @member {String} effectif
 */

EntrepriseFiche.prototype['effectif'] = undefined;
/**
 * Effectif minimal de l'entreprise.
 * @member {Number} effectif_min
 */

EntrepriseFiche.prototype['effectif_min'] = undefined;
/**
 * Effectif maximal de l'entreprise.
 * @member {Number} effectif_max
 */

EntrepriseFiche.prototype['effectif_max'] = undefined;
/**
 * Tranche d'effectif de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
 * @member {String} tranche_effectif
 */

EntrepriseFiche.prototype['tranche_effectif'] = undefined;
/**
 * Année de validité des variables effectif, effectif_min et effectif_max.
 * @member {Number} annee_effectif
 */

EntrepriseFiche.prototype['annee_effectif'] = undefined;
/**
 * Capital de l'entreprise.
 * @member {Number} capital
 */

EntrepriseFiche.prototype['capital'] = undefined;
/**
 * Statut de l'entreprise au RCS. Peut valoir \"Inscrit\", \"Non inscrit\" ou \"Radié\".
 * @member {String} statut_rcs
 */

EntrepriseFiche.prototype['statut_rcs'] = undefined;
/**
 * @member {module:model/EtablissementFiche} siege
 */

EntrepriseFiche.prototype['siege'] = undefined;
/**
 * Le statut de diffusion de l'entreprise. Non diffusable correspond à une personne physique ayant demandé à être exclue de la diffusion. Aucune information n'est alors disponible. Cette modalité n'est visible que pour les organismes habilités au titre de l'article R. 123-224 ou les administrations.
 * @member {Boolean} diffusable
 */

EntrepriseFiche.prototype['diffusable'] = undefined;
/**
 * Sigle de l'entreprise si personne morale.
 * @member {String} sigle
 */

EntrepriseFiche.prototype['sigle'] = undefined;
/**
 * Objet social de l'entreprise.
 * @member {String} objet_social
 */

EntrepriseFiche.prototype['objet_social'] = undefined;
/**
 * Capital l'entreprise au format xx xxx €.
 * @member {String} capital_formate
 */

EntrepriseFiche.prototype['capital_formate'] = undefined;
/**
 * Capital actuel de l'entreprise si variable.
 * @member {String} capital_actuel_si_variable
 */

EntrepriseFiche.prototype['capital_actuel_si_variable'] = undefined;
/**
 * Devise de capital_formate et capital_actuel_si_variable.
 * @member {String} devise_capital
 */

EntrepriseFiche.prototype['devise_capital'] = undefined;
/**
 * Numéro RCS de l'entreprise.
 * @member {String} numero_rcs
 */

EntrepriseFiche.prototype['numero_rcs'] = undefined;
/**
 * Date de clôture d'exercice de l'entreprise.
 * @member {String} date_cloture_exercice
 */

EntrepriseFiche.prototype['date_cloture_exercice'] = undefined;
/**
 * Date de clôture d'exercice exceptionnel de l'entreprise.
 * @member {String} date_cloture_exercice_exceptionnelle
 */

EntrepriseFiche.prototype['date_cloture_exercice_exceptionnelle'] = undefined;
/**
 * Date de clôture d'exercice exceptionnel formatée de l'entreprise.
 * @member {String} date_cloture_exercice_exceptionnelle_formate
 */

EntrepriseFiche.prototype['date_cloture_exercice_exceptionnelle_formate'] = undefined;
/**
 * Prochaine date de clôture d'exercice de l'entreprise.
 * @member {String} prochaine_date_cloture_exercice
 */

EntrepriseFiche.prototype['prochaine_date_cloture_exercice'] = undefined;
/**
 * Prochaine date de clôture d'exercice formatée de l'entreprise.
 * @member {String} prochaine_date_cloture_exercice_formate
 */

EntrepriseFiche.prototype['prochaine_date_cloture_exercice_formate'] = undefined;
/**
 * Vrai si l'entreprise est une entreprise de l'économie sociale et solidaire.
 * @member {Boolean} economie_sociale_solidaire
 */

EntrepriseFiche.prototype['economie_sociale_solidaire'] = undefined;
/**
 * Durée de la personne morale.
 * @member {String} duree_personne_morale
 */

EntrepriseFiche.prototype['duree_personne_morale'] = undefined;
/**
 * Date de dernier traitement de l'entreprise.
 * @member {Date} dernier_traitement
 */

EntrepriseFiche.prototype['dernier_traitement'] = undefined;
/**
 * Dernière mise à jour de la base de donnée sirène au format AAAA-MM-JJ.
 * @member {Date} derniere_mise_a_jour_sirene
 */

EntrepriseFiche.prototype['derniere_mise_a_jour_sirene'] = undefined;
/**
 * Dernière mise à jour de la base de donnée RCS au format AAAA-MM-JJ.
 * @member {Date} derniere_mise_a_jour_rcs
 */

EntrepriseFiche.prototype['derniere_mise_a_jour_rcs'] = undefined;
/**
 * Greffe RCS de l'entreprise.
 * @member {String} greffe
 */

EntrepriseFiche.prototype['greffe'] = undefined;
/**
 * Code greffe RCS de l'entreprise.
 * @member {String} code_greffe
 */

EntrepriseFiche.prototype['code_greffe'] = undefined;
/**
 * Date d'immatriculation de l'entreprise au RCS.
 * @member {String} date_immatriculation_rcs
 */

EntrepriseFiche.prototype['date_immatriculation_rcs'] = undefined;
/**
 * Date de la première immatriculation de l'entreprise au RCS.
 * @member {String} date_premiere_immatriculation_rcs
 */

EntrepriseFiche.prototype['date_premiere_immatriculation_rcs'] = undefined;
/**
 * Date de radiation de l'entreprise au RCS.
 * @member {String} date_radiation_rcs
 */

EntrepriseFiche.prototype['date_radiation_rcs'] = undefined;
/**
 * Numéro de TVA intracommunautaire de l'entreprise.
 * @member {String} numero_tva_intracommunautaire
 */

EntrepriseFiche.prototype['numero_tva_intracommunautaire'] = undefined;
/**
 * Si vrai, l'entreprise est à associé unique (notamment pour les SASU et les EURL).
 * @member {Boolean} associe_unique
 */

EntrepriseFiche.prototype['associe_unique'] = undefined;
/**
 * Liste des établissements de l'entreprise.
 * @member {Array.<module:model/EtablissementFiche>} etablissements
 */

EntrepriseFiche.prototype['etablissements'] = undefined;
/**
 * Liste des finances de l'entreprise.
 * @member {Array.<Object>} finances
 */

EntrepriseFiche.prototype['finances'] = undefined;
/**
 * Liste des représentants de l'entreprise.
 * @member {Array.<module:model/Representant>} representants
 */

EntrepriseFiche.prototype['representants'] = undefined;
/**
 * Liste des bénéficiaires effectifs de l'entreprise (si disponibles).
 * @member {Array.<module:model/EntrepriseFicheAllOfBeneficiairesEffectifs>} beneficiaires_effectifs
 */

EntrepriseFiche.prototype['beneficiaires_effectifs'] = undefined;
/**
 * Liste des actes de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfDepotsActes>} depots_actes
 */

EntrepriseFiche.prototype['depots_actes'] = undefined;
/**
 * Liste des comptes de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfComptes>} comptes
 */

EntrepriseFiche.prototype['comptes'] = undefined;
/**
 * Liste des publications au Bodacc de l'entreprise.
 * @member {Array.<module:model/Bodacc>} publications_bodacc
 */

EntrepriseFiche.prototype['publications_bodacc'] = undefined;
/**
 * Liste des procédures collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfProceduresCollectives>} procedures_collectives
 */

EntrepriseFiche.prototype['procedures_collectives'] = undefined;
/**
 * Vrai si l'entreprise a des procédures collectives (en cours ou terminées), faux sinon.
 * @member {Boolean} procedure_collective_existe
 */

EntrepriseFiche.prototype['procedure_collective_existe'] = undefined;
/**
 * Vrai si l'entreprise a des procédures collectives en cours, faux sinon.
 * @member {Boolean} procedure_collective_en_cours
 */

EntrepriseFiche.prototype['procedure_collective_en_cours'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDerniersStatuts} derniers_statuts
 */

EntrepriseFiche.prototype['derniers_statuts'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfExtraitImmatriculation} extrait_immatriculation
 */

EntrepriseFiche.prototype['extrait_immatriculation'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfRnm} rnm
 */

EntrepriseFiche.prototype['rnm'] = undefined;
/**
 * Liste des marques françaises déposées par l'entreprise. Uniquement présent si le paramètre \"marques\" a été mis à vrai.
 * @member {Array.<module:model/EntrepriseFicheAllOfMarques>} marques
 */

EntrepriseFiche.prototype['marques'] = undefined; // Implement EntrepriseBase interface:

/**
 * Le numéro SIREN de l'entreprise au format xxxxxxxxx.
 * @member {String} siren
 */

_EntrepriseBase["default"].prototype['siren'] = undefined;
/**
 * Le numéro SIREN de l'entreprise au format xxx xxx xxx.
 * @member {String} siren_formate
 */

_EntrepriseBase["default"].prototype['siren_formate'] = undefined;
/**
 * Le nom de l'entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique.
 * @member {String} nom_entreprise
 */

_EntrepriseBase["default"].prototype['nom_entreprise'] = undefined;
/**
 * Vrai en cas de personne morale, faux en cas de personne physique.
 * @member {Boolean} personne_morale
 */

_EntrepriseBase["default"].prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise si personne morale.
 * @member {String} denomination
 */

_EntrepriseBase["default"].prototype['denomination'] = undefined;
/**
 * Nom si personne physique.
 * @member {String} nom
 */

_EntrepriseBase["default"].prototype['nom'] = undefined;
/**
 * Prénom si personne physique.
 * @member {String} prenom
 */

_EntrepriseBase["default"].prototype['prenom'] = undefined;
/**
 * Sexe si personne physique. F pour féminin, M pour masculin.
 * @member {String} sexe
 */

_EntrepriseBase["default"].prototype['sexe'] = undefined;
/**
 * Code NAF de l'entreprise.
 * @member {String} code_naf
 */

_EntrepriseBase["default"].prototype['code_naf'] = undefined;
/**
 * Libellé du code NAF de l'entreprise.
 * @member {String} libelle_code_naf
 */

_EntrepriseBase["default"].prototype['libelle_code_naf'] = undefined;
/**
 * Domaine d'activité de l'entreprise.
 * @member {String} domaine_activite
 */

_EntrepriseBase["default"].prototype['domaine_activite'] = undefined;
/**
 * Liste des conventions collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseBaseConventionsCollectives>} conventions_collectives
 */

_EntrepriseBase["default"].prototype['conventions_collectives'] = undefined;
/**
 * Date de création de l'entreprise au format AAAA-MM-JJ.
 * @member {Date} date_creation
 */

_EntrepriseBase["default"].prototype['date_creation'] = undefined;
/**
 * Date de création de l'entreprise au format JJ/MM/AAAA.
 * @member {String} date_creation_formate
 */

_EntrepriseBase["default"].prototype['date_creation_formate'] = undefined;
/**
 * Si vrai, l'entreprise n'est plus en activité. Sinon, elle est toujours en activité.
 * @member {Boolean} entreprise_cessee
 */

_EntrepriseBase["default"].prototype['entreprise_cessee'] = undefined;
/**
 * Date de cessation de l'entreprise au format AAAA-MM-JJ.
 * @member {String} date_cessation
 */

_EntrepriseBase["default"].prototype['date_cessation'] = undefined;
/**
 * Si vrai, l'entreprise a au moins un employé.
 * @member {Boolean} entreprise_employeuse
 */

_EntrepriseBase["default"].prototype['entreprise_employeuse'] = undefined;
/**
 * Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
 * @member {String} categorie_juridique
 */

_EntrepriseBase["default"].prototype['categorie_juridique'] = undefined;
/**
 * Forme juridique de l'entreprise.
 * @member {String} forme_juridique
 */

_EntrepriseBase["default"].prototype['forme_juridique'] = undefined;
/**
 * Tranche d'effectif de l'entreprise.
 * @member {String} effectif
 */

_EntrepriseBase["default"].prototype['effectif'] = undefined;
/**
 * Effectif minimal de l'entreprise.
 * @member {Number} effectif_min
 */

_EntrepriseBase["default"].prototype['effectif_min'] = undefined;
/**
 * Effectif maximal de l'entreprise.
 * @member {Number} effectif_max
 */

_EntrepriseBase["default"].prototype['effectif_max'] = undefined;
/**
 * Tranche d'effectif de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
 * @member {String} tranche_effectif
 */

_EntrepriseBase["default"].prototype['tranche_effectif'] = undefined;
/**
 * Année de validité des variables effectif, effectif_min et effectif_max.
 * @member {Number} annee_effectif
 */

_EntrepriseBase["default"].prototype['annee_effectif'] = undefined;
/**
 * Capital de l'entreprise.
 * @member {Number} capital
 */

_EntrepriseBase["default"].prototype['capital'] = undefined;
/**
 * Statut de l'entreprise au RCS
 * @member {String} statut_rcs
 */

_EntrepriseBase["default"].prototype['statut_rcs'] = undefined; // Implement EntrepriseFicheAllOf interface:

/**
 * @member {module:model/EtablissementFiche} siege
 */

_EntrepriseFicheAllOf["default"].prototype['siege'] = undefined;
/**
 * Le statut de diffusion de l'entreprise. Non diffusable correspond à une personne physique ayant demandé à être exclue de la diffusion. Aucune information n'est alors disponible. Cette modalité n'est visible que pour les organismes habilités au titre de l'article R. 123-224 ou les administrations.
 * @member {Boolean} diffusable
 */

_EntrepriseFicheAllOf["default"].prototype['diffusable'] = undefined;
/**
 * Sigle de l'entreprise si personne morale.
 * @member {String} sigle
 */

_EntrepriseFicheAllOf["default"].prototype['sigle'] = undefined;
/**
 * Objet social de l'entreprise.
 * @member {String} objet_social
 */

_EntrepriseFicheAllOf["default"].prototype['objet_social'] = undefined;
/**
 * Capital l'entreprise au format xx xxx €.
 * @member {String} capital_formate
 */

_EntrepriseFicheAllOf["default"].prototype['capital_formate'] = undefined;
/**
 * Capital actuel de l'entreprise si variable.
 * @member {String} capital_actuel_si_variable
 */

_EntrepriseFicheAllOf["default"].prototype['capital_actuel_si_variable'] = undefined;
/**
 * Devise de capital_formate et capital_actuel_si_variable.
 * @member {String} devise_capital
 */

_EntrepriseFicheAllOf["default"].prototype['devise_capital'] = undefined;
/**
 * Numéro RCS de l'entreprise.
 * @member {String} numero_rcs
 */

_EntrepriseFicheAllOf["default"].prototype['numero_rcs'] = undefined;
/**
 * Date de clôture d'exercice de l'entreprise.
 * @member {String} date_cloture_exercice
 */

_EntrepriseFicheAllOf["default"].prototype['date_cloture_exercice'] = undefined;
/**
 * Date de clôture d'exercice exceptionnel de l'entreprise.
 * @member {String} date_cloture_exercice_exceptionnelle
 */

_EntrepriseFicheAllOf["default"].prototype['date_cloture_exercice_exceptionnelle'] = undefined;
/**
 * Date de clôture d'exercice exceptionnel formatée de l'entreprise.
 * @member {String} date_cloture_exercice_exceptionnelle_formate
 */

_EntrepriseFicheAllOf["default"].prototype['date_cloture_exercice_exceptionnelle_formate'] = undefined;
/**
 * Prochaine date de clôture d'exercice de l'entreprise.
 * @member {String} prochaine_date_cloture_exercice
 */

_EntrepriseFicheAllOf["default"].prototype['prochaine_date_cloture_exercice'] = undefined;
/**
 * Prochaine date de clôture d'exercice formatée de l'entreprise.
 * @member {String} prochaine_date_cloture_exercice_formate
 */

_EntrepriseFicheAllOf["default"].prototype['prochaine_date_cloture_exercice_formate'] = undefined;
/**
 * Vrai si l'entreprise est une entreprise de l'économie sociale et solidaire.
 * @member {Boolean} economie_sociale_solidaire
 */

_EntrepriseFicheAllOf["default"].prototype['economie_sociale_solidaire'] = undefined;
/**
 * Durée de la personne morale.
 * @member {String} duree_personne_morale
 */

_EntrepriseFicheAllOf["default"].prototype['duree_personne_morale'] = undefined;
/**
 * Date de dernier traitement de l'entreprise.
 * @member {Date} dernier_traitement
 */

_EntrepriseFicheAllOf["default"].prototype['dernier_traitement'] = undefined;
/**
 * Dernière mise à jour de la base de donnée sirène au format AAAA-MM-JJ.
 * @member {Date} derniere_mise_a_jour_sirene
 */

_EntrepriseFicheAllOf["default"].prototype['derniere_mise_a_jour_sirene'] = undefined;
/**
 * Dernière mise à jour de la base de donnée RCS au format AAAA-MM-JJ.
 * @member {Date} derniere_mise_a_jour_rcs
 */

_EntrepriseFicheAllOf["default"].prototype['derniere_mise_a_jour_rcs'] = undefined;
/**
 * Statut de l'entreprise au RCS. Peut valoir \"Inscrit\", \"Non inscrit\" ou \"Radié\".
 * @member {String} statut_rcs
 */

_EntrepriseFicheAllOf["default"].prototype['statut_rcs'] = undefined;
/**
 * Greffe RCS de l'entreprise.
 * @member {String} greffe
 */

_EntrepriseFicheAllOf["default"].prototype['greffe'] = undefined;
/**
 * Code greffe RCS de l'entreprise.
 * @member {String} code_greffe
 */

_EntrepriseFicheAllOf["default"].prototype['code_greffe'] = undefined;
/**
 * Date d'immatriculation de l'entreprise au RCS.
 * @member {String} date_immatriculation_rcs
 */

_EntrepriseFicheAllOf["default"].prototype['date_immatriculation_rcs'] = undefined;
/**
 * Date de la première immatriculation de l'entreprise au RCS.
 * @member {String} date_premiere_immatriculation_rcs
 */

_EntrepriseFicheAllOf["default"].prototype['date_premiere_immatriculation_rcs'] = undefined;
/**
 * Date de radiation de l'entreprise au RCS.
 * @member {String} date_radiation_rcs
 */

_EntrepriseFicheAllOf["default"].prototype['date_radiation_rcs'] = undefined;
/**
 * Numéro de TVA intracommunautaire de l'entreprise.
 * @member {String} numero_tva_intracommunautaire
 */

_EntrepriseFicheAllOf["default"].prototype['numero_tva_intracommunautaire'] = undefined;
/**
 * Si vrai, l'entreprise est à associé unique (notamment pour les SASU et les EURL).
 * @member {Boolean} associe_unique
 */

_EntrepriseFicheAllOf["default"].prototype['associe_unique'] = undefined;
/**
 * Liste des établissements de l'entreprise.
 * @member {Array.<module:model/EtablissementFiche>} etablissements
 */

_EntrepriseFicheAllOf["default"].prototype['etablissements'] = undefined;
/**
 * Liste des finances de l'entreprise.
 * @member {Array.<Object>} finances
 */

_EntrepriseFicheAllOf["default"].prototype['finances'] = undefined;
/**
 * Liste des représentants de l'entreprise.
 * @member {Array.<module:model/Representant>} representants
 */

_EntrepriseFicheAllOf["default"].prototype['representants'] = undefined;
/**
 * Liste des bénéficiaires effectifs de l'entreprise (si disponibles).
 * @member {Array.<module:model/EntrepriseFicheAllOfBeneficiairesEffectifs>} beneficiaires_effectifs
 */

_EntrepriseFicheAllOf["default"].prototype['beneficiaires_effectifs'] = undefined;
/**
 * Liste des actes de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfDepotsActes>} depots_actes
 */

_EntrepriseFicheAllOf["default"].prototype['depots_actes'] = undefined;
/**
 * Liste des comptes de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfComptes>} comptes
 */

_EntrepriseFicheAllOf["default"].prototype['comptes'] = undefined;
/**
 * Liste des publications au Bodacc de l'entreprise.
 * @member {Array.<module:model/Bodacc>} publications_bodacc
 */

_EntrepriseFicheAllOf["default"].prototype['publications_bodacc'] = undefined;
/**
 * Liste des procédures collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfProceduresCollectives>} procedures_collectives
 */

_EntrepriseFicheAllOf["default"].prototype['procedures_collectives'] = undefined;
/**
 * Vrai si l'entreprise a des procédures collectives (en cours ou terminées), faux sinon.
 * @member {Boolean} procedure_collective_existe
 */

_EntrepriseFicheAllOf["default"].prototype['procedure_collective_existe'] = undefined;
/**
 * Vrai si l'entreprise a des procédures collectives en cours, faux sinon.
 * @member {Boolean} procedure_collective_en_cours
 */

_EntrepriseFicheAllOf["default"].prototype['procedure_collective_en_cours'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDerniersStatuts} derniers_statuts
 */

_EntrepriseFicheAllOf["default"].prototype['derniers_statuts'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfExtraitImmatriculation} extrait_immatriculation
 */

_EntrepriseFicheAllOf["default"].prototype['extrait_immatriculation'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfRnm} rnm
 */

_EntrepriseFicheAllOf["default"].prototype['rnm'] = undefined;
/**
 * Liste des marques françaises déposées par l'entreprise. Uniquement présent si le paramètre \"marques\" a été mis à vrai.
 * @member {Array.<module:model/EntrepriseFicheAllOfMarques>} marques
 */

_EntrepriseFicheAllOf["default"].prototype['marques'] = undefined;
var _default = EntrepriseFiche;
exports["default"] = _default;