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
import Document from './Document';
import DocumentActeAllOf from './DocumentActeAllOf';
import DocumentActeAllOfTitres from './DocumentActeAllOfTitres';

/**
 * The DocumentActe model module.
 * @module model/DocumentActe
 * @version 2.3.0
 */
class DocumentActe {
    /**
     * Constructs a new <code>DocumentActe</code>.
     * @alias module:model/DocumentActe
     * @extends module:model/Document
     * @implements module:model/Document
     * @implements module:model/DocumentActeAllOf
     */
    constructor() { 
        Document.initialize(this);DocumentActeAllOf.initialize(this);
        DocumentActe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentActe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentActe} obj Optional instance to populate.
     * @return {module:model/DocumentActe} The populated <code>DocumentActe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentActe();
            Document.constructFromObject(data, obj);
            Document.constructFromObject(data, obj);
            DocumentActeAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('titres')) {
                obj['titres'] = ApiClient.convertToType(data['titres'], [DocumentActeAllOfTitres]);
            }
        }
        return obj;
    }


}

/**
 * Titres des actes associés au document
 * @member {Array.<module:model/DocumentActeAllOfTitres>} titres
 */
DocumentActe.prototype['titres'] = undefined;


// Implement Document interface:
/**
 * Type de document
 * @member {module:model/Document.TypeEnum} type
 */
Document.prototype['type'] = undefined;
/**
 * Date de dépôt du document
 * @member {Date} date_depot
 */
Document.prototype['date_depot'] = undefined;
/**
 * Mentions de la recherche dans le document.
 * @member {Array.<String>} mentions
 */
Document.prototype['mentions'] = undefined;
// Implement DocumentActeAllOf interface:
/**
 * Titres des actes associés au document
 * @member {Array.<module:model/DocumentActeAllOfTitres>} titres
 */
DocumentActeAllOf.prototype['titres'] = undefined;




export default DocumentActe;
