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
import EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision from './EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision';
import EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale from './EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale';

/**
 * The EntrepriseFicheAllOfDetailsPartsIndirectes model module.
 * @module model/EntrepriseFicheAllOfDetailsPartsIndirectes
 * @version 2.3.0
 */
class EntrepriseFicheAllOfDetailsPartsIndirectes {
    /**
     * Constructs a new <code>EntrepriseFicheAllOfDetailsPartsIndirectes</code>.
     * Détails des parts détenues de façon indirecte par le bénéficiaire effectif.
     * @alias module:model/EntrepriseFicheAllOfDetailsPartsIndirectes
     */
    constructor() { 
        
        EntrepriseFicheAllOfDetailsPartsIndirectes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsPartsIndirectes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsPartsIndirectes} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsPartsIndirectes} The populated <code>EntrepriseFicheAllOfDetailsPartsIndirectes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrepriseFicheAllOfDetailsPartsIndirectes();

            if (data.hasOwnProperty('pourcentage_en_indivision')) {
                obj['pourcentage_en_indivision'] = ApiClient.convertToType(data['pourcentage_en_indivision'], 'Number');
            }
            if (data.hasOwnProperty('pourcentage_en_personne_morale')) {
                obj['pourcentage_en_personne_morale'] = ApiClient.convertToType(data['pourcentage_en_personne_morale'], 'Number');
            }
            if (data.hasOwnProperty('details_en_indivision')) {
                obj['details_en_indivision'] = EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision.constructFromObject(data['details_en_indivision']);
            }
            if (data.hasOwnProperty('details_en_personne_morale')) {
                obj['details_en_personne_morale'] = EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale.constructFromObject(data['details_en_personne_morale']);
            }
        }
        return obj;
    }


}

/**
 * Parts détenues de façon indirecte par le biais d'une indivision par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_en_indivision
 */
EntrepriseFicheAllOfDetailsPartsIndirectes.prototype['pourcentage_en_indivision'] = undefined;

/**
 * Parts détenues de façon indirecte par le biais d'une personne morale par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_en_personne_morale
 */
EntrepriseFicheAllOfDetailsPartsIndirectes.prototype['pourcentage_en_personne_morale'] = undefined;

/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision} details_en_indivision
 */
EntrepriseFicheAllOfDetailsPartsIndirectes.prototype['details_en_indivision'] = undefined;

/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale} details_en_personne_morale
 */
EntrepriseFicheAllOfDetailsPartsIndirectes.prototype['details_en_personne_morale'] = undefined;






export default EntrepriseFicheAllOfDetailsPartsIndirectes;
