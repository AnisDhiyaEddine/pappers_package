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
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 2.3.0
 */
class InlineResponse2005 {
    /**
     * Constructs a new <code>InlineResponse2005</code>.
     * @alias module:model/InlineResponse2005
     */
    constructor() { 
        
        InlineResponse2005.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005();

            if (data.hasOwnProperty('resultats_nom_entreprise')) {
                obj['resultats_nom_entreprise'] = ApiClient.convertToType(data['resultats_nom_entreprise'], [Object]);
            }
            if (data.hasOwnProperty('resultats_denomination')) {
                obj['resultats_denomination'] = ApiClient.convertToType(data['resultats_denomination'], [Object]);
            }
            if (data.hasOwnProperty('resultats_nom_complet')) {
                obj['resultats_nom_complet'] = ApiClient.convertToType(data['resultats_nom_complet'], [Object]);
            }
            if (data.hasOwnProperty('resultats_representant')) {
                obj['resultats_representant'] = ApiClient.convertToType(data['resultats_representant'], [Object]);
            }
            if (data.hasOwnProperty('resultats_siren')) {
                obj['resultats_siren'] = ApiClient.convertToType(data['resultats_siren'], [Object]);
            }
            if (data.hasOwnProperty('resultats_siret')) {
                obj['resultats_siret'] = ApiClient.convertToType(data['resultats_siret'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Liste des entreprises dont le nom (dénomination ou nom/prénom) peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `nom_entreprise`.
 * @member {Array.<Object>} resultats_nom_entreprise
 */
InlineResponse2005.prototype['resultats_nom_entreprise'] = undefined;

/**
 * Liste des entreprises dont la dénomination peut compléter la recherche textuelle (concerne les personnes morales seulement). Uniquement présent si le paramètre `cibles` contient `denomination`.
 * @member {Array.<Object>} resultats_denomination
 */
InlineResponse2005.prototype['resultats_denomination'] = undefined;

/**
 * Liste des entreprises dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle (concerne les personnes physiques seulement). Uniquement présent si le paramètre `cibles` contient `nom_complet`.
 * @member {Array.<Object>} resultats_nom_complet
 */
InlineResponse2005.prototype['resultats_nom_complet'] = undefined;

/**
 * Liste des représentants dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `representant`.
 * @member {Array.<Object>} resultats_representant
 */
InlineResponse2005.prototype['resultats_representant'] = undefined;

/**
 * Liste des entreprises dont le numéro SIREN peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `siren`.
 * @member {Array.<Object>} resultats_siren
 */
InlineResponse2005.prototype['resultats_siren'] = undefined;

/**
 * Liste des entreprises dont le numéro SIRET peut compléter la recherche textuelle. Uniquement présent si le paramètre `cibles` contient `siret`.
 * @member {Array.<Object>} resultats_siret
 */
InlineResponse2005.prototype['resultats_siret'] = undefined;






export default InlineResponse2005;

