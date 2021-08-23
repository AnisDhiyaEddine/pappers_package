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
 * The RepresentantRechercheAllOf model module.
 * @module model/RepresentantRechercheAllOf
 * @version 2.3.0
 */
class RepresentantRechercheAllOf {
    /**
     * Constructs a new <code>RepresentantRechercheAllOf</code>.
     * @alias module:model/RepresentantRechercheAllOf
     */
    constructor() { 
        
        RepresentantRechercheAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RepresentantRechercheAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepresentantRechercheAllOf} obj Optional instance to populate.
     * @return {module:model/RepresentantRechercheAllOf} The populated <code>RepresentantRechercheAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepresentantRechercheAllOf();

            if (data.hasOwnProperty('actuel')) {
                obj['actuel'] = ApiClient.convertToType(data['actuel'], 'Boolean');
            }
            if (data.hasOwnProperty('date_depart_de_poste')) {
                obj['date_depart_de_poste'] = ApiClient.convertToType(data['date_depart_de_poste'], 'String');
            }
            if (data.hasOwnProperty('forme_juridique')) {
                obj['forme_juridique'] = ApiClient.convertToType(data['forme_juridique'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Vaut vrai si le représentant est toujours à son poste.
 * @member {Boolean} actuel
 */
RepresentantRechercheAllOf.prototype['actuel'] = undefined;

/**
 * Date de départ de poste dans le cas où le représentant n'est plus un représentant actuel, au format AAAA-MM-JJ.
 * @member {String} date_depart_de_poste
 */
RepresentantRechercheAllOf.prototype['date_depart_de_poste'] = undefined;

/**
 * Forme juridique du représentant dans le cas d'une personne morale.
 * @member {String} forme_juridique
 */
RepresentantRechercheAllOf.prototype['forme_juridique'] = undefined;






export default RepresentantRechercheAllOf;

