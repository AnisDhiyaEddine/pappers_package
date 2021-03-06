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

/**
 * The EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision model module.
 * @module model/EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision
 * @version 2.3.0
 */
class EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision {
    /**
     * Constructs a new <code>EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision</code>.
     * Détails des droits de vote détenus de façon indirecte par le biais d&#39;une indivision par le bénéficiaire effectif.
     * @alias module:model/EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision
     */
    constructor() { 
        
        EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision} The populated <code>EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision();

            if (data.hasOwnProperty('pourcentage_pleine_propriete')) {
                obj['pourcentage_pleine_propriete'] = ApiClient.convertToType(data['pourcentage_pleine_propriete'], 'Number');
            }
            if (data.hasOwnProperty('pourcentage_nue_propriete')) {
                obj['pourcentage_nue_propriete'] = ApiClient.convertToType(data['pourcentage_nue_propriete'], 'Number');
            }
            if (data.hasOwnProperty('pourcentage_usufruit')) {
                obj['pourcentage_usufruit'] = ApiClient.convertToType(data['pourcentage_usufruit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Droits de vote détenus de façon indirecte par le biais d'une indivision en pleine propriété par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_pleine_propriete
 */
EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision.prototype['pourcentage_pleine_propriete'] = undefined;

/**
 * Droits de vote détenus de façon indirecte par le biais d'une indivision en nue propriété par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_nue_propriete
 */
EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision.prototype['pourcentage_nue_propriete'] = undefined;

/**
 * Droits de vote détenus de façon indirecte par le biais d'une indivision en usufruit par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_usufruit
 */
EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision.prototype['pourcentage_usufruit'] = undefined;






export default EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision;

