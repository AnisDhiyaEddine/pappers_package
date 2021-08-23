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
import EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision from './EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision';
import EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale from './EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale';

/**
 * The EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes model module.
 * @module model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes
 * @version 2.3.0
 */
class EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes {
    /**
     * Constructs a new <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes</code>.
     * Détails des parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte.
     * @alias module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes
     */
    constructor() { 
        
        EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes} The populated <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes();

            if (data.hasOwnProperty('pourcentage_en_indivision')) {
                obj['pourcentage_en_indivision'] = ApiClient.convertToType(data['pourcentage_en_indivision'], 'Number');
            }
            if (data.hasOwnProperty('pourcentage_en_personne_morale')) {
                obj['pourcentage_en_personne_morale'] = ApiClient.convertToType(data['pourcentage_en_personne_morale'], 'Number');
            }
            if (data.hasOwnProperty('details_en_indivision')) {
                obj['details_en_indivision'] = EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision.constructFromObject(data['details_en_indivision']);
            }
            if (data.hasOwnProperty('details_en_personne_morale')) {
                obj['details_en_personne_morale'] = EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale.constructFromObject(data['details_en_personne_morale']);
            }
        }
        return obj;
    }


}

/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte par le biais d'une indivision, en pourcentage des parts totales.
 * @member {Number} pourcentage_en_indivision
 */
EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['pourcentage_en_indivision'] = undefined;

/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte par le biais d'une personne morale, en pourcentage des parts totales.
 * @member {Number} pourcentage_en_personne_morale
 */
EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['pourcentage_en_personne_morale'] = undefined;

/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision} details_en_indivision
 */
EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['details_en_indivision'] = undefined;

/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale} details_en_personne_morale
 */
EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['details_en_personne_morale'] = undefined;






export default EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes;
