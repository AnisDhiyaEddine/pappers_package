/**
 * Pappers API
 * L'API de Pappers vous permet de récupérer des informations et documents sur les entreprises françaises à partir de leur numéro SIREN ou SIRET.  Vous devez indiquer votre clé d'API dans les requêtes, en utilisant le paramètre `api_token`.  L'URL d'accès à l'API est https://api.pappers.fr/v2/  Lien vers la documentation de la V1 : https://www.pappers.fr/api/documentation/v1  L'historique des modifications (changelog) est accessible à l'url suivante : https://www.pappers.fr/api/changelog 
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: support@pappers.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Bodacc from './Bodacc';
import EntrepriseFicheAllOfBeneficiairesEffectifs from './EntrepriseFicheAllOfBeneficiairesEffectifs';
import EntrepriseFicheAllOfComptes from './EntrepriseFicheAllOfComptes';
import EntrepriseFicheAllOfDepotsActes from './EntrepriseFicheAllOfDepotsActes';
import EntrepriseFicheAllOfDerniersStatuts from './EntrepriseFicheAllOfDerniersStatuts';
import EntrepriseFicheAllOfExtraitImmatriculation from './EntrepriseFicheAllOfExtraitImmatriculation';
import EntrepriseFicheAllOfMarques from './EntrepriseFicheAllOfMarques';
import EntrepriseFicheAllOfProceduresCollectives from './EntrepriseFicheAllOfProceduresCollectives';
import EntrepriseFicheAllOfRnm from './EntrepriseFicheAllOfRnm';
import EtablissementFiche from './EtablissementFiche';
import Representant from './Representant';

/**
 * The EntrepriseFicheAllOf model module.
 * @module model/EntrepriseFicheAllOf
 * @version 2.3.0
 */
class EntrepriseFicheAllOf {
    /**
     * Constructs a new <code>EntrepriseFicheAllOf</code>.
     * @alias module:model/EntrepriseFicheAllOf
     */
    constructor() { 
        
        EntrepriseFicheAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntrepriseFicheAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOf} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOf} The populated <code>EntrepriseFicheAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrepriseFicheAllOf();

            if (data.hasOwnProperty('siege')) {
                obj['siege'] = EtablissementFiche.constructFromObject(data['siege']);
            }
            if (data.hasOwnProperty('diffusable')) {
                obj['diffusable'] = ApiClient.convertToType(data['diffusable'], 'Boolean');
            }
            if (data.hasOwnProperty('sigle')) {
                obj['sigle'] = ApiClient.convertToType(data['sigle'], 'String');
            }
            if (data.hasOwnProperty('objet_social')) {
                obj['objet_social'] = ApiClient.convertToType(data['objet_social'], 'String');
            }
            if (data.hasOwnProperty('capital_formate')) {
                obj['capital_formate'] = ApiClient.convertToType(data['capital_formate'], 'String');
            }
            if (data.hasOwnProperty('capital_actuel_si_variable')) {
                obj['capital_actuel_si_variable'] = ApiClient.convertToType(data['capital_actuel_si_variable'], 'String');
            }
            if (data.hasOwnProperty('devise_capital')) {
                obj['devise_capital'] = ApiClient.convertToType(data['devise_capital'], 'String');
            }
            if (data.hasOwnProperty('numero_rcs')) {
                obj['numero_rcs'] = ApiClient.convertToType(data['numero_rcs'], 'String');
            }
            if (data.hasOwnProperty('date_cloture_exercice')) {
                obj['date_cloture_exercice'] = ApiClient.convertToType(data['date_cloture_exercice'], 'String');
            }
            if (data.hasOwnProperty('date_cloture_exercice_exceptionnelle')) {
                obj['date_cloture_exercice_exceptionnelle'] = ApiClient.convertToType(data['date_cloture_exercice_exceptionnelle'], 'String');
            }
            if (data.hasOwnProperty('date_cloture_exercice_exceptionnelle_formate')) {
                obj['date_cloture_exercice_exceptionnelle_formate'] = ApiClient.convertToType(data['date_cloture_exercice_exceptionnelle_formate'], 'String');
            }
            if (data.hasOwnProperty('prochaine_date_cloture_exercice')) {
                obj['prochaine_date_cloture_exercice'] = ApiClient.convertToType(data['prochaine_date_cloture_exercice'], 'String');
            }
            if (data.hasOwnProperty('prochaine_date_cloture_exercice_formate')) {
                obj['prochaine_date_cloture_exercice_formate'] = ApiClient.convertToType(data['prochaine_date_cloture_exercice_formate'], 'String');
            }
            if (data.hasOwnProperty('economie_sociale_solidaire')) {
                obj['economie_sociale_solidaire'] = ApiClient.convertToType(data['economie_sociale_solidaire'], 'Boolean');
            }
            if (data.hasOwnProperty('duree_personne_morale')) {
                obj['duree_personne_morale'] = ApiClient.convertToType(data['duree_personne_morale'], 'String');
            }
            if (data.hasOwnProperty('dernier_traitement')) {
                obj['dernier_traitement'] = ApiClient.convertToType(data['dernier_traitement'], 'Date');
            }
            if (data.hasOwnProperty('derniere_mise_a_jour_sirene')) {
                obj['derniere_mise_a_jour_sirene'] = ApiClient.convertToType(data['derniere_mise_a_jour_sirene'], 'Date');
            }
            if (data.hasOwnProperty('derniere_mise_a_jour_rcs')) {
                obj['derniere_mise_a_jour_rcs'] = ApiClient.convertToType(data['derniere_mise_a_jour_rcs'], 'Date');
            }
            if (data.hasOwnProperty('statut_rcs')) {
                obj['statut_rcs'] = ApiClient.convertToType(data['statut_rcs'], 'String');
            }
            if (data.hasOwnProperty('greffe')) {
                obj['greffe'] = ApiClient.convertToType(data['greffe'], 'String');
            }
            if (data.hasOwnProperty('code_greffe')) {
                obj['code_greffe'] = ApiClient.convertToType(data['code_greffe'], 'String');
            }
            if (data.hasOwnProperty('date_immatriculation_rcs')) {
                obj['date_immatriculation_rcs'] = ApiClient.convertToType(data['date_immatriculation_rcs'], 'String');
            }
            if (data.hasOwnProperty('date_premiere_immatriculation_rcs')) {
                obj['date_premiere_immatriculation_rcs'] = ApiClient.convertToType(data['date_premiere_immatriculation_rcs'], 'String');
            }
            if (data.hasOwnProperty('date_radiation_rcs')) {
                obj['date_radiation_rcs'] = ApiClient.convertToType(data['date_radiation_rcs'], 'String');
            }
            if (data.hasOwnProperty('numero_tva_intracommunautaire')) {
                obj['numero_tva_intracommunautaire'] = ApiClient.convertToType(data['numero_tva_intracommunautaire'], 'String');
            }
            if (data.hasOwnProperty('associe_unique')) {
                obj['associe_unique'] = ApiClient.convertToType(data['associe_unique'], 'Boolean');
            }
            if (data.hasOwnProperty('etablissements')) {
                obj['etablissements'] = ApiClient.convertToType(data['etablissements'], [EtablissementFiche]);
            }
            if (data.hasOwnProperty('finances')) {
                obj['finances'] = ApiClient.convertToType(data['finances'], [Object]);
            }
            if (data.hasOwnProperty('representants')) {
                obj['representants'] = ApiClient.convertToType(data['representants'], [Representant]);
            }
            if (data.hasOwnProperty('beneficiaires_effectifs')) {
                obj['beneficiaires_effectifs'] = ApiClient.convertToType(data['beneficiaires_effectifs'], [EntrepriseFicheAllOfBeneficiairesEffectifs]);
            }
            if (data.hasOwnProperty('depots_actes')) {
                obj['depots_actes'] = ApiClient.convertToType(data['depots_actes'], [EntrepriseFicheAllOfDepotsActes]);
            }
            if (data.hasOwnProperty('comptes')) {
                obj['comptes'] = ApiClient.convertToType(data['comptes'], [EntrepriseFicheAllOfComptes]);
            }
            if (data.hasOwnProperty('publications_bodacc')) {
                obj['publications_bodacc'] = ApiClient.convertToType(data['publications_bodacc'], [Bodacc]);
            }
            if (data.hasOwnProperty('procedures_collectives')) {
                obj['procedures_collectives'] = ApiClient.convertToType(data['procedures_collectives'], [EntrepriseFicheAllOfProceduresCollectives]);
            }
            if (data.hasOwnProperty('procedure_collective_existe')) {
                obj['procedure_collective_existe'] = ApiClient.convertToType(data['procedure_collective_existe'], 'Boolean');
            }
            if (data.hasOwnProperty('procedure_collective_en_cours')) {
                obj['procedure_collective_en_cours'] = ApiClient.convertToType(data['procedure_collective_en_cours'], 'Boolean');
            }
            if (data.hasOwnProperty('derniers_statuts')) {
                obj['derniers_statuts'] = EntrepriseFicheAllOfDerniersStatuts.constructFromObject(data['derniers_statuts']);
            }
            if (data.hasOwnProperty('extrait_immatriculation')) {
                obj['extrait_immatriculation'] = EntrepriseFicheAllOfExtraitImmatriculation.constructFromObject(data['extrait_immatriculation']);
            }
            if (data.hasOwnProperty('rnm')) {
                obj['rnm'] = EntrepriseFicheAllOfRnm.constructFromObject(data['rnm']);
            }
            if (data.hasOwnProperty('marques')) {
                obj['marques'] = ApiClient.convertToType(data['marques'], [EntrepriseFicheAllOfMarques]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EtablissementFiche} siege
 */
EntrepriseFicheAllOf.prototype['siege'] = undefined;

/**
 * Le statut de diffusion de l'entreprise. Non diffusable correspond à une personne physique ayant demandé à être exclue de la diffusion. Aucune information n'est alors disponible. Cette modalité n'est visible que pour les organismes habilités au titre de l'article R. 123-224 ou les administrations.
 * @member {Boolean} diffusable
 */
EntrepriseFicheAllOf.prototype['diffusable'] = undefined;

/**
 * Sigle de l'entreprise si personne morale.
 * @member {String} sigle
 */
EntrepriseFicheAllOf.prototype['sigle'] = undefined;

/**
 * Objet social de l'entreprise.
 * @member {String} objet_social
 */
EntrepriseFicheAllOf.prototype['objet_social'] = undefined;

/**
 * Capital l'entreprise au format xx xxx €.
 * @member {String} capital_formate
 */
EntrepriseFicheAllOf.prototype['capital_formate'] = undefined;

/**
 * Capital actuel de l'entreprise si variable.
 * @member {String} capital_actuel_si_variable
 */
EntrepriseFicheAllOf.prototype['capital_actuel_si_variable'] = undefined;

/**
 * Devise de capital_formate et capital_actuel_si_variable.
 * @member {String} devise_capital
 */
EntrepriseFicheAllOf.prototype['devise_capital'] = undefined;

/**
 * Numéro RCS de l'entreprise.
 * @member {String} numero_rcs
 */
EntrepriseFicheAllOf.prototype['numero_rcs'] = undefined;

/**
 * Date de clôture d'exercice de l'entreprise.
 * @member {String} date_cloture_exercice
 */
EntrepriseFicheAllOf.prototype['date_cloture_exercice'] = undefined;

/**
 * Date de clôture d'exercice exceptionnel de l'entreprise.
 * @member {String} date_cloture_exercice_exceptionnelle
 */
EntrepriseFicheAllOf.prototype['date_cloture_exercice_exceptionnelle'] = undefined;

/**
 * Date de clôture d'exercice exceptionnel formatée de l'entreprise.
 * @member {String} date_cloture_exercice_exceptionnelle_formate
 */
EntrepriseFicheAllOf.prototype['date_cloture_exercice_exceptionnelle_formate'] = undefined;

/**
 * Prochaine date de clôture d'exercice de l'entreprise.
 * @member {String} prochaine_date_cloture_exercice
 */
EntrepriseFicheAllOf.prototype['prochaine_date_cloture_exercice'] = undefined;

/**
 * Prochaine date de clôture d'exercice formatée de l'entreprise.
 * @member {String} prochaine_date_cloture_exercice_formate
 */
EntrepriseFicheAllOf.prototype['prochaine_date_cloture_exercice_formate'] = undefined;

/**
 * Vrai si l'entreprise est une entreprise de l'économie sociale et solidaire.
 * @member {Boolean} economie_sociale_solidaire
 */
EntrepriseFicheAllOf.prototype['economie_sociale_solidaire'] = undefined;

/**
 * Durée de la personne morale.
 * @member {String} duree_personne_morale
 */
EntrepriseFicheAllOf.prototype['duree_personne_morale'] = undefined;

/**
 * Date de dernier traitement de l'entreprise.
 * @member {Date} dernier_traitement
 */
EntrepriseFicheAllOf.prototype['dernier_traitement'] = undefined;

/**
 * Dernière mise à jour de la base de donnée sirène au format AAAA-MM-JJ.
 * @member {Date} derniere_mise_a_jour_sirene
 */
EntrepriseFicheAllOf.prototype['derniere_mise_a_jour_sirene'] = undefined;

/**
 * Dernière mise à jour de la base de donnée RCS au format AAAA-MM-JJ.
 * @member {Date} derniere_mise_a_jour_rcs
 */
EntrepriseFicheAllOf.prototype['derniere_mise_a_jour_rcs'] = undefined;

/**
 * Statut de l'entreprise au RCS. Peut valoir \"Inscrit\", \"Non inscrit\" ou \"Radié\".
 * @member {String} statut_rcs
 */
EntrepriseFicheAllOf.prototype['statut_rcs'] = undefined;

/**
 * Greffe RCS de l'entreprise.
 * @member {String} greffe
 */
EntrepriseFicheAllOf.prototype['greffe'] = undefined;

/**
 * Code greffe RCS de l'entreprise.
 * @member {String} code_greffe
 */
EntrepriseFicheAllOf.prototype['code_greffe'] = undefined;

/**
 * Date d'immatriculation de l'entreprise au RCS.
 * @member {String} date_immatriculation_rcs
 */
EntrepriseFicheAllOf.prototype['date_immatriculation_rcs'] = undefined;

/**
 * Date de la première immatriculation de l'entreprise au RCS.
 * @member {String} date_premiere_immatriculation_rcs
 */
EntrepriseFicheAllOf.prototype['date_premiere_immatriculation_rcs'] = undefined;

/**
 * Date de radiation de l'entreprise au RCS.
 * @member {String} date_radiation_rcs
 */
EntrepriseFicheAllOf.prototype['date_radiation_rcs'] = undefined;

/**
 * Numéro de TVA intracommunautaire de l'entreprise.
 * @member {String} numero_tva_intracommunautaire
 */
EntrepriseFicheAllOf.prototype['numero_tva_intracommunautaire'] = undefined;

/**
 * Si vrai, l'entreprise est à associé unique (notamment pour les SASU et les EURL).
 * @member {Boolean} associe_unique
 */
EntrepriseFicheAllOf.prototype['associe_unique'] = undefined;

/**
 * Liste des établissements de l'entreprise.
 * @member {Array.<module:model/EtablissementFiche>} etablissements
 */
EntrepriseFicheAllOf.prototype['etablissements'] = undefined;

/**
 * Liste des finances de l'entreprise.
 * @member {Array.<Object>} finances
 */
EntrepriseFicheAllOf.prototype['finances'] = undefined;

/**
 * Liste des représentants de l'entreprise.
 * @member {Array.<module:model/Representant>} representants
 */
EntrepriseFicheAllOf.prototype['representants'] = undefined;

/**
 * Liste des bénéficiaires effectifs de l'entreprise (si disponibles).
 * @member {Array.<module:model/EntrepriseFicheAllOfBeneficiairesEffectifs>} beneficiaires_effectifs
 */
EntrepriseFicheAllOf.prototype['beneficiaires_effectifs'] = undefined;

/**
 * Liste des actes de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfDepotsActes>} depots_actes
 */
EntrepriseFicheAllOf.prototype['depots_actes'] = undefined;

/**
 * Liste des comptes de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfComptes>} comptes
 */
EntrepriseFicheAllOf.prototype['comptes'] = undefined;

/**
 * Liste des publications au Bodacc de l'entreprise.
 * @member {Array.<module:model/Bodacc>} publications_bodacc
 */
EntrepriseFicheAllOf.prototype['publications_bodacc'] = undefined;

/**
 * Liste des procédures collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseFicheAllOfProceduresCollectives>} procedures_collectives
 */
EntrepriseFicheAllOf.prototype['procedures_collectives'] = undefined;

/**
 * Vrai si l'entreprise a des procédures collectives (en cours ou terminées), faux sinon.
 * @member {Boolean} procedure_collective_existe
 */
EntrepriseFicheAllOf.prototype['procedure_collective_existe'] = undefined;

/**
 * Vrai si l'entreprise a des procédures collectives en cours, faux sinon.
 * @member {Boolean} procedure_collective_en_cours
 */
EntrepriseFicheAllOf.prototype['procedure_collective_en_cours'] = undefined;

/**
 * @member {module:model/EntrepriseFicheAllOfDerniersStatuts} derniers_statuts
 */
EntrepriseFicheAllOf.prototype['derniers_statuts'] = undefined;

/**
 * @member {module:model/EntrepriseFicheAllOfExtraitImmatriculation} extrait_immatriculation
 */
EntrepriseFicheAllOf.prototype['extrait_immatriculation'] = undefined;

/**
 * @member {module:model/EntrepriseFicheAllOfRnm} rnm
 */
EntrepriseFicheAllOf.prototype['rnm'] = undefined;

/**
 * Liste des marques françaises déposées par l'entreprise. Uniquement présent si le paramètre \"marques\" a été mis à vrai.
 * @member {Array.<module:model/EntrepriseFicheAllOfMarques>} marques
 */
EntrepriseFicheAllOf.prototype['marques'] = undefined;






export default EntrepriseFicheAllOf;

