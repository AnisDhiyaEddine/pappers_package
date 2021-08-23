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
import EtablissementRecherche from './EtablissementRecherche';

/**
 * The EntrepriseRechercheAllOf model module.
 * @module model/EntrepriseRechercheAllOf
 * @version 2.3.0
 */
class EntrepriseRechercheAllOf {
    /**
     * Constructs a new <code>EntrepriseRechercheAllOf</code>.
     * @alias module:model/EntrepriseRechercheAllOf
     */
    constructor() { 
        
        EntrepriseRechercheAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntrepriseRechercheAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseRechercheAllOf} obj Optional instance to populate.
     * @return {module:model/EntrepriseRechercheAllOf} The populated <code>EntrepriseRechercheAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrepriseRechercheAllOf();

            if (data.hasOwnProperty('siege')) {
                obj['siege'] = EtablissementRecherche.constructFromObject(data['siege']);
            }
            if (data.hasOwnProperty('villes')) {
                obj['villes'] = ApiClient.convertToType(data['villes'], ['String']);
            }
            if (data.hasOwnProperty('chiffre_affaires')) {
                obj['chiffre_affaires'] = ApiClient.convertToType(data['chiffre_affaires'], 'Number');
            }
            if (data.hasOwnProperty('resultat')) {
                obj['resultat'] = ApiClient.convertToType(data['resultat'], 'Number');
            }
            if (data.hasOwnProperty('effectifs_finances')) {
                obj['effectifs_finances'] = ApiClient.convertToType(data['effectifs_finances'], 'Number');
            }
            if (data.hasOwnProperty('annee_finances')) {
                obj['annee_finances'] = ApiClient.convertToType(data['annee_finances'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EtablissementRecherche} siege
 */
EntrepriseRechercheAllOf.prototype['siege'] = undefined;

/**
 * Liste des villes où l'entreprise a au moins un établissement.
 * @member {Array.<String>} villes
 */
EntrepriseRechercheAllOf.prototype['villes'] = undefined;

/**
 * Chiffre d'affaires de l'entreprise.
 * @member {Number} chiffre_affaires
 */
EntrepriseRechercheAllOf.prototype['chiffre_affaires'] = undefined;

/**
 * Résultat de l'entreprise.
 * @member {Number} resultat
 */
EntrepriseRechercheAllOf.prototype['resultat'] = undefined;

/**
 * Effectif de l'entreprise.
 * @member {Number} effectifs_finances
 */
EntrepriseRechercheAllOf.prototype['effectifs_finances'] = undefined;

/**
 * Année de correspondance des variables financières (chiffre_affaires, resultat, effectifs_finances).
 * @member {String} annee_finances
 */
EntrepriseRechercheAllOf.prototype['annee_finances'] = undefined;






export default EntrepriseRechercheAllOf;

