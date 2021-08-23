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
import Bodacc from './Bodacc';

/**
 * The BodaccRadiation model module.
 * @module model/BodaccRadiation
 * @version 2.3.0
 */
class BodaccRadiation {
    /**
     * Constructs a new <code>BodaccRadiation</code>.
     * @alias module:model/BodaccRadiation
     * @extends module:model/Bodacc
     * @implements module:model/Bodacc
     */
    constructor() { 
        Bodacc.initialize(this);
        BodaccRadiation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BodaccRadiation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccRadiation} obj Optional instance to populate.
     * @return {module:model/BodaccRadiation} The populated <code>BodaccRadiation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BodaccRadiation();
            Bodacc.constructFromObject(data, obj);
            Bodacc.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement Bodacc interface:
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




export default BodaccRadiation;
