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
 * The Ratios model module.
 * @module model/Ratios
 * @version 2.3.0
 */
var Ratios = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Ratios</code>.
   * @alias module:model/Ratios
   */
  function Ratios() {
    _classCallCheck(this, Ratios);

    Ratios.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ratios, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Ratios</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ratios} obj Optional instance to populate.
     * @return {module:model/Ratios} The populated <code>Ratios</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ratios();

        if (data.hasOwnProperty('chiffre_affaires')) {
          obj['chiffre_affaires'] = _ApiClient["default"].convertToType(data['chiffre_affaires'], 'Number');
        }

        if (data.hasOwnProperty('resultat')) {
          obj['resultat'] = _ApiClient["default"].convertToType(data['resultat'], 'Number');
        }

        if (data.hasOwnProperty('effectif')) {
          obj['effectif'] = _ApiClient["default"].convertToType(data['effectif'], 'Number');
        }

        if (data.hasOwnProperty('marge_brute')) {
          obj['marge_brute'] = _ApiClient["default"].convertToType(data['marge_brute'], 'Number');
        }

        if (data.hasOwnProperty('excedent_brut_exploitation')) {
          obj['excedent_brut_exploitation'] = _ApiClient["default"].convertToType(data['excedent_brut_exploitation'], 'Number');
        }

        if (data.hasOwnProperty('resultat_exploitation')) {
          obj['resultat_exploitation'] = _ApiClient["default"].convertToType(data['resultat_exploitation'], 'Number');
        }

        if (data.hasOwnProperty('taux_croissance_chiffre_affaires')) {
          obj['taux_croissance_chiffre_affaires'] = _ApiClient["default"].convertToType(data['taux_croissance_chiffre_affaires'], 'Number');
        }

        if (data.hasOwnProperty('taux_marge_brute')) {
          obj['taux_marge_brute'] = _ApiClient["default"].convertToType(data['taux_marge_brute'], 'Number');
        }

        if (data.hasOwnProperty('taux_marge_EBITDA')) {
          obj['taux_marge_EBITDA'] = _ApiClient["default"].convertToType(data['taux_marge_EBITDA'], 'Number');
        }

        if (data.hasOwnProperty('taux_marge_operationnelle')) {
          obj['taux_marge_operationnelle'] = _ApiClient["default"].convertToType(data['taux_marge_operationnelle'], 'Number');
        }

        if (data.hasOwnProperty('BFR')) {
          obj['BFR'] = _ApiClient["default"].convertToType(data['BFR'], 'Number');
        }

        if (data.hasOwnProperty('BFR_exploitation')) {
          obj['BFR_exploitation'] = _ApiClient["default"].convertToType(data['BFR_exploitation'], 'Number');
        }

        if (data.hasOwnProperty('BFR_hors_exploitation')) {
          obj['BFR_hors_exploitation'] = _ApiClient["default"].convertToType(data['BFR_hors_exploitation'], 'Number');
        }

        if (data.hasOwnProperty('BFR_jours_CA')) {
          obj['BFR_jours_CA'] = _ApiClient["default"].convertToType(data['BFR_jours_CA'], 'Number');
        }

        if (data.hasOwnProperty('BFR_exploitation_jours_CA')) {
          obj['BFR_exploitation_jours_CA'] = _ApiClient["default"].convertToType(data['BFR_exploitation_jours_CA'], 'Number');
        }

        if (data.hasOwnProperty('BFR_hors_exploitation_jours_CA')) {
          obj['BFR_hors_exploitation_jours_CA'] = _ApiClient["default"].convertToType(data['BFR_hors_exploitation_jours_CA'], 'Number');
        }

        if (data.hasOwnProperty('delai_paiement_clients_jours')) {
          obj['delai_paiement_clients_jours'] = _ApiClient["default"].convertToType(data['delai_paiement_clients_jours'], 'Number');
        }

        if (data.hasOwnProperty('delai_paiement_fournisseurs_jours')) {
          obj['delai_paiement_fournisseurs_jours'] = _ApiClient["default"].convertToType(data['delai_paiement_fournisseurs_jours'], 'Number');
        }

        if (data.hasOwnProperty('ratio_stock_CA_jours')) {
          obj['ratio_stock_CA_jours'] = _ApiClient["default"].convertToType(data['ratio_stock_CA_jours'], 'Number');
        }

        if (data.hasOwnProperty('capacite_autofinancement')) {
          obj['capacite_autofinancement'] = _ApiClient["default"].convertToType(data['capacite_autofinancement'], 'Number');
        }

        if (data.hasOwnProperty('capacite_autofinancement_CA')) {
          obj['capacite_autofinancement_CA'] = _ApiClient["default"].convertToType(data['capacite_autofinancement_CA'], 'Number');
        }

        if (data.hasOwnProperty('fonds_roulement_net_global')) {
          obj['fonds_roulement_net_global'] = _ApiClient["default"].convertToType(data['fonds_roulement_net_global'], 'Number');
        }

        if (data.hasOwnProperty('couverture_BFR')) {
          obj['couverture_BFR'] = _ApiClient["default"].convertToType(data['couverture_BFR'], 'Number');
        }

        if (data.hasOwnProperty('tresorerie')) {
          obj['tresorerie'] = _ApiClient["default"].convertToType(data['tresorerie'], 'Number');
        }

        if (data.hasOwnProperty('dettes_financieres')) {
          obj['dettes_financieres'] = _ApiClient["default"].convertToType(data['dettes_financieres'], 'Number');
        }

        if (data.hasOwnProperty('capacite_remboursement')) {
          obj['capacite_remboursement'] = _ApiClient["default"].convertToType(data['capacite_remboursement'], 'Number');
        }

        if (data.hasOwnProperty('ratio_endettement')) {
          obj['ratio_endettement'] = _ApiClient["default"].convertToType(data['ratio_endettement'], 'Number');
        }

        if (data.hasOwnProperty('autonomie_financiere')) {
          obj['autonomie_financiere'] = _ApiClient["default"].convertToType(data['autonomie_financiere'], 'Number');
        }

        if (data.hasOwnProperty('taux_levier')) {
          obj['taux_levier'] = _ApiClient["default"].convertToType(data['taux_levier'], 'Number');
        }

        if (data.hasOwnProperty('etat_dettes_1_an_au_plus')) {
          obj['etat_dettes_1_an_au_plus'] = _ApiClient["default"].convertToType(data['etat_dettes_1_an_au_plus'], 'Number');
        }

        if (data.hasOwnProperty('liquidite_generale')) {
          obj['liquidite_generale'] = _ApiClient["default"].convertToType(data['liquidite_generale'], 'Number');
        }

        if (data.hasOwnProperty('couverture_dettes')) {
          obj['couverture_dettes'] = _ApiClient["default"].convertToType(data['couverture_dettes'], 'Number');
        }

        if (data.hasOwnProperty('marge_nette')) {
          obj['marge_nette'] = _ApiClient["default"].convertToType(data['marge_nette'], 'Number');
        }

        if (data.hasOwnProperty('rentabilite_fonds_propres')) {
          obj['rentabilite_fonds_propres'] = _ApiClient["default"].convertToType(data['rentabilite_fonds_propres'], 'Number');
        }

        if (data.hasOwnProperty('rentabilite_economique')) {
          obj['rentabilite_economique'] = _ApiClient["default"].convertToType(data['rentabilite_economique'], 'Number');
        }

        if (data.hasOwnProperty('valeur_ajoutee')) {
          obj['valeur_ajoutee'] = _ApiClient["default"].convertToType(data['valeur_ajoutee'], 'Number');
        }

        if (data.hasOwnProperty('valeur_ajoutee_CA')) {
          obj['valeur_ajoutee_CA'] = _ApiClient["default"].convertToType(data['valeur_ajoutee_CA'], 'Number');
        }

        if (data.hasOwnProperty('salaires_charges_sociales')) {
          obj['salaires_charges_sociales'] = _ApiClient["default"].convertToType(data['salaires_charges_sociales'], 'Number');
        }

        if (data.hasOwnProperty('salaires_CA')) {
          obj['salaires_CA'] = _ApiClient["default"].convertToType(data['salaires_CA'], 'Number');
        }

        if (data.hasOwnProperty('impots_taxes')) {
          obj['impots_taxes'] = _ApiClient["default"].convertToType(data['impots_taxes'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Ratios;
}();
/**
 * Chiffre d'affaires de l'entreprise.
 * @member {Number} chiffre_affaires
 */


Ratios.prototype['chiffre_affaires'] = undefined;
/**
 * R??sultat de l'entreprise.
 * @member {Number} resultat
 */

Ratios.prototype['resultat'] = undefined;
/**
 * Effectif de l'entreprise.
 * @member {Number} effectif
 */

Ratios.prototype['effectif'] = undefined;
/**
 * Marge brute de l'entreprise.
 * @member {Number} marge_brute
 */

Ratios.prototype['marge_brute'] = undefined;
/**
 * Exc??dent brut d'exploitation (EBITDA) de l'entreprise.
 * @member {Number} excedent_brut_exploitation
 */

Ratios.prototype['excedent_brut_exploitation'] = undefined;
/**
 * R??sultat d'exploitation (EBIT) de l'entreprise.
 * @member {Number} resultat_exploitation
 */

Ratios.prototype['resultat_exploitation'] = undefined;
/**
 * Taux de croissance du chiffre d'affaires (en %) de l'entreprise.
 * @member {Number} taux_croissance_chiffre_affaires
 */

Ratios.prototype['taux_croissance_chiffre_affaires'] = undefined;
/**
 * Taux de marge brute (en %) de l'entreprise.
 * @member {Number} taux_marge_brute
 */

Ratios.prototype['taux_marge_brute'] = undefined;
/**
 * Taux de marge d'EBITDA (en %) de l'entreprise.
 * @member {Number} taux_marge_EBITDA
 */

Ratios.prototype['taux_marge_EBITDA'] = undefined;
/**
 * Taux de marge op??rationnelle (EBIT) (en %) de l'entreprise.
 * @member {Number} taux_marge_operationnelle
 */

Ratios.prototype['taux_marge_operationnelle'] = undefined;
/**
 * BFR (Besoin en fonds de roulement) de l'entreprise.
 * @member {Number} BFR
 */

Ratios.prototype['BFR'] = undefined;
/**
 * BFR exploitation de l'entreprise.
 * @member {Number} BFR_exploitation
 */

Ratios.prototype['BFR_exploitation'] = undefined;
/**
 * BFR hors exploitation de l'entreprise.
 * @member {Number} BFR_hors_exploitation
 */

Ratios.prototype['BFR_hors_exploitation'] = undefined;
/**
 * BFR (en jours de CA) de l'entreprise.
 * @member {Number} BFR_jours_CA
 */

Ratios.prototype['BFR_jours_CA'] = undefined;
/**
 * BFR exploitation (en jours de CA) de l'entreprise.
 * @member {Number} BFR_exploitation_jours_CA
 */

Ratios.prototype['BFR_exploitation_jours_CA'] = undefined;
/**
 * BFR hors exploitation (en jours de CA) de l'entreprise.
 * @member {Number} BFR_hors_exploitation_jours_CA
 */

Ratios.prototype['BFR_hors_exploitation_jours_CA'] = undefined;
/**
 * D??lai de paiement clients (en jours) de l'entreprise.
 * @member {Number} delai_paiement_clients_jours
 */

Ratios.prototype['delai_paiement_clients_jours'] = undefined;
/**
 * D??lai de paiement fournisseurs (en jours) de l'entreprise.
 * @member {Number} delai_paiement_fournisseurs_jours
 */

Ratios.prototype['delai_paiement_fournisseurs_jours'] = undefined;
/**
 * Ratio des stocks / CA (en jours) de l'entreprise.
 * @member {Number} ratio_stock_CA_jours
 */

Ratios.prototype['ratio_stock_CA_jours'] = undefined;
/**
 * Capacit?? d'autofinancement de l'entreprise.
 * @member {Number} capacite_autofinancement
 */

Ratios.prototype['capacite_autofinancement'] = undefined;
/**
 * Capacit?? d'autofinancement / CA (en %) de l'entreprise.
 * @member {Number} capacite_autofinancement_CA
 */

Ratios.prototype['capacite_autofinancement_CA'] = undefined;
/**
 * Fonds de roulement net global de l'entreprise.
 * @member {Number} fonds_roulement_net_global
 */

Ratios.prototype['fonds_roulement_net_global'] = undefined;
/**
 * Couverture du BFR de l'entreprise.
 * @member {Number} couverture_BFR
 */

Ratios.prototype['couverture_BFR'] = undefined;
/**
 * Tr??sorerie de l'entreprise.
 * @member {Number} tresorerie
 */

Ratios.prototype['tresorerie'] = undefined;
/**
 * Dettes financi??res de l'entreprise.
 * @member {Number} dettes_financieres
 */

Ratios.prototype['dettes_financieres'] = undefined;
/**
 * Capacit?? de remboursement de l'entreprise.
 * @member {Number} capacite_remboursement
 */

Ratios.prototype['capacite_remboursement'] = undefined;
/**
 * Ratio d'endettement (Gearing) de l'entreprise.
 * @member {Number} ratio_endettement
 */

Ratios.prototype['ratio_endettement'] = undefined;
/**
 * Autonomie financi??re (en %) de l'entreprise.
 * @member {Number} autonomie_financiere
 */

Ratios.prototype['autonomie_financiere'] = undefined;
/**
 * Taux de levier (DFN/EBITDA) de l'entreprise.
 * @member {Number} taux_levier
 */

Ratios.prototype['taux_levier'] = undefined;
/**
 * Etat des dettes ?? 1 an au plus de l'entreprise.
 * @member {Number} etat_dettes_1_an_au_plus
 */

Ratios.prototype['etat_dettes_1_an_au_plus'] = undefined;
/**
 * Liquidit?? g??n??rale de l'entreprise.
 * @member {Number} liquidite_generale
 */

Ratios.prototype['liquidite_generale'] = undefined;
/**
 * Couverture des dettes de l'entreprise.
 * @member {Number} couverture_dettes
 */

Ratios.prototype['couverture_dettes'] = undefined;
/**
 * Marge nette (en %) de l'entreprise.
 * @member {Number} marge_nette
 */

Ratios.prototype['marge_nette'] = undefined;
/**
 * Rentabilit?? sur fonds propres (en %) de l'entreprise.
 * @member {Number} rentabilite_fonds_propres
 */

Ratios.prototype['rentabilite_fonds_propres'] = undefined;
/**
 * Rentabilit?? ??conomique (en %) de l'entreprise.
 * @member {Number} rentabilite_economique
 */

Ratios.prototype['rentabilite_economique'] = undefined;
/**
 * Valeur ajout??e de l'entreprise.
 * @member {Number} valeur_ajoutee
 */

Ratios.prototype['valeur_ajoutee'] = undefined;
/**
 * Valeur ajout??e / CA (en %) de l'entreprise.
 * @member {Number} valeur_ajoutee_CA
 */

Ratios.prototype['valeur_ajoutee_CA'] = undefined;
/**
 * Salaires et charges sociales de l'entreprise.
 * @member {Number} salaires_charges_sociales
 */

Ratios.prototype['salaires_charges_sociales'] = undefined;
/**
 * Salaires / CA (en %) de l'entreprise.
 * @member {Number} salaires_CA
 */

Ratios.prototype['salaires_CA'] = undefined;
/**
 * Imp??ts et taxes de l'entreprise.
 * @member {Number} impots_taxes
 */

Ratios.prototype['impots_taxes'] = undefined;
var _default = Ratios;
exports["default"] = _default;