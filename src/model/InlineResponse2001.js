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
import RepresentantRecherche from './RepresentantRecherche';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 2.3.0
 */
class InlineResponse2001 {
    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     */
    constructor() { 
        
        InlineResponse2001.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('resultats')) {
                obj['resultats'] = ApiClient.convertToType(data['resultats'], [RepresentantRecherche]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Liste des dirigeants qui correspondent à la recherche.
 * @member {Array.<module:model/RepresentantRecherche>} resultats
 */
InlineResponse2001.prototype['resultats'] = undefined;

/**
 * Nombre de dirigeants qui correspondent à la recherche.
 * @member {Number} total
 */
InlineResponse2001.prototype['total'] = undefined;

/**
 * Page actuelle.
 * @member {Number} page
 */
InlineResponse2001.prototype['page'] = undefined;






export default InlineResponse2001;

