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
 * The Bodacc model module.
 * @module model/Bodacc
 * @version 2.3.0
 */
class Bodacc {
    /**
     * Constructs a new <code>Bodacc</code>.
     * @alias module:model/Bodacc
     */
    constructor() { 
        
        Bodacc.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Bodacc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Bodacc} obj Optional instance to populate.
     * @return {module:model/Bodacc} The populated <code>Bodacc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Bodacc();

            if (data.hasOwnProperty('numero_parution')) {
                obj['numero_parution'] = ApiClient.convertToType(data['numero_parution'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('numero_annonce')) {
                obj['numero_annonce'] = ApiClient.convertToType(data['numero_annonce'], 'String');
            }
            if (data.hasOwnProperty('bodacc')) {
                obj['bodacc'] = ApiClient.convertToType(data['bodacc'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Numéro de parution de la publication.
 * @member {String} numero_parution
 */
Bodacc.prototype['numero_parution'] = undefined;

/**
 * Date de la publication, au format AAAA-MM-JJ.
 * @member {String} date
 */
Bodacc.prototype['date'] = undefined;

/**
 * Numéro d'annonce de la publication.
 * @member {String} numero_annonce
 */
Bodacc.prototype['numero_annonce'] = undefined;

/**
 * Bodacc de la publication (A, B ou C).
 * @member {String} bodacc
 */
Bodacc.prototype['bodacc'] = undefined;

/**
 * Type de la publication parmi la liste suivante : Création, Immatriculation, Modification, Vente, Radiation, Procédure collective, Dépôt des comptes.
 * @member {String} type
 */
Bodacc.prototype['type'] = undefined;






export default Bodacc;

