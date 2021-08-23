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
 * The BodaccProcedureCollectiveAllOf model module.
 * @module model/BodaccProcedureCollectiveAllOf
 * @version 2.3.0
 */
class BodaccProcedureCollectiveAllOf {
    /**
     * Constructs a new <code>BodaccProcedureCollectiveAllOf</code>.
     * @alias module:model/BodaccProcedureCollectiveAllOf
     */
    constructor() { 
        
        BodaccProcedureCollectiveAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BodaccProcedureCollectiveAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccProcedureCollectiveAllOf} obj Optional instance to populate.
     * @return {module:model/BodaccProcedureCollectiveAllOf} The populated <code>BodaccProcedureCollectiveAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BodaccProcedureCollectiveAllOf();

            if (data.hasOwnProperty('famille')) {
                obj['famille'] = ApiClient.convertToType(data['famille'], 'String');
            }
            if (data.hasOwnProperty('nature')) {
                obj['nature'] = ApiClient.convertToType(data['nature'], 'String');
            }
            if (data.hasOwnProperty('complement_jugement')) {
                obj['complement_jugement'] = ApiClient.convertToType(data['complement_jugement'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Famille de la procédure collective
 * @member {String} famille
 */
BodaccProcedureCollectiveAllOf.prototype['famille'] = undefined;

/**
 * Nature de la procédure collective
 * @member {String} nature
 */
BodaccProcedureCollectiveAllOf.prototype['nature'] = undefined;

/**
 * Complément sur le jugement de procédure collective
 * @member {String} complement_jugement
 */
BodaccProcedureCollectiveAllOf.prototype['complement_jugement'] = undefined;






export default BodaccProcedureCollectiveAllOf;

