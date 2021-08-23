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
 * The EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision model module.
 * @module model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision
 * @version 2.3.0
 */
class EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision {
    /**
     * Constructs a new <code>EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision</code>.
     * Détails des parts détenues de façon indirecte par le biais d&#39;une indivision par le bénéficiaire effectif.
     * @alias module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision
     */
    constructor() { 
        
        EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision} The populated <code>EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision();

            if (data.hasOwnProperty('pourcentage_pleine_propriete')) {
                obj['pourcentage_pleine_propriete'] = ApiClient.convertToType(data['pourcentage_pleine_propriete'], 'Number');
            }
            if (data.hasOwnProperty('pourcentage_nue_propriete')) {
                obj['pourcentage_nue_propriete'] = ApiClient.convertToType(data['pourcentage_nue_propriete'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Parts détenues de façon indirecte par le biais d'une indivision en pleine propriété par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_pleine_propriete
 */
EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision.prototype['pourcentage_pleine_propriete'] = undefined;

/**
 * Parts détenues de façon indirecte par le biais d'une indivision en nue propriété par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_nue_propriete
 */
EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision.prototype['pourcentage_nue_propriete'] = undefined;






export default EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision;

