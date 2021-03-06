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
 * The Publication model module.
 * @module model/Publication
 * @version 2.3.0
 */
class Publication {
    /**
     * Constructs a new <code>Publication</code>.
     * @alias module:model/Publication
     */
    constructor() { 
        
        Publication.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Publication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Publication} obj Optional instance to populate.
     * @return {module:model/Publication} The populated <code>Publication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Publication();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('contenu')) {
                obj['contenu'] = ApiClient.convertToType(data['contenu'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Type de publication
 * @member {module:model/Publication.TypeEnum} type
 */
Publication.prototype['type'] = undefined;

/**
 * Date de publication, au format AAAA-MM-JJ.
 * @member {Date} date
 */
Publication.prototype['date'] = undefined;

/**
 * Contenu de la publication, avec les mentions correspondant à la recherche encerclée par une balise HTML <em>.
 * @member {String} contenu
 */
Publication.prototype['contenu'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Publication['TypeEnum'] = {

    /**
     * value: "Création"
     * @const
     */
    "Création": "Création",

    /**
     * value: "Immatriculation"
     * @const
     */
    "Immatriculation": "Immatriculation",

    /**
     * value: "Modification"
     * @const
     */
    "Modification": "Modification",

    /**
     * value: "Vente"
     * @const
     */
    "Vente": "Vente",

    /**
     * value: "Radiation"
     * @const
     */
    "Radiation": "Radiation",

    /**
     * value: "Procédure collective"
     * @const
     */
    "Procédure collective": "Procédure collective",

    /**
     * value: "Dépôt des comptes"
     * @const
     */
    "Dépôt des comptes": "Dépôt des comptes"
};



export default Publication;

