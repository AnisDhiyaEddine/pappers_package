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
import EtablissementFicheDomiciliation from './EtablissementFicheDomiciliation';

/**
 * The EtablissementFiche model module.
 * @module model/EtablissementFiche
 * @version 2.3.0
 */
class EtablissementFiche {
    /**
     * Constructs a new <code>EtablissementFiche</code>.
     * @alias module:model/EtablissementFiche
     */
    constructor() { 
        
        EtablissementFiche.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EtablissementFiche</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EtablissementFiche} obj Optional instance to populate.
     * @return {module:model/EtablissementFiche} The populated <code>EtablissementFiche</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EtablissementFiche();

            if (data.hasOwnProperty('siret')) {
                obj['siret'] = ApiClient.convertToType(data['siret'], 'String');
            }
            if (data.hasOwnProperty('siret_formate')) {
                obj['siret_formate'] = ApiClient.convertToType(data['siret_formate'], 'String');
            }
            if (data.hasOwnProperty('nic')) {
                obj['nic'] = ApiClient.convertToType(data['nic'], 'String');
            }
            if (data.hasOwnProperty('code_postal')) {
                obj['code_postal'] = ApiClient.convertToType(data['code_postal'], 'String');
            }
            if (data.hasOwnProperty('ville')) {
                obj['ville'] = ApiClient.convertToType(data['ville'], 'String');
            }
            if (data.hasOwnProperty('pays')) {
                obj['pays'] = ApiClient.convertToType(data['pays'], 'String');
            }
            if (data.hasOwnProperty('code_pays')) {
                obj['code_pays'] = ApiClient.convertToType(data['code_pays'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('etablissement_cesse')) {
                obj['etablissement_cesse'] = ApiClient.convertToType(data['etablissement_cesse'], 'Boolean');
            }
            if (data.hasOwnProperty('siege')) {
                obj['siege'] = ApiClient.convertToType(data['siege'], 'Boolean');
            }
            if (data.hasOwnProperty('etablissement_employeur')) {
                obj['etablissement_employeur'] = ApiClient.convertToType(data['etablissement_employeur'], 'Boolean');
            }
            if (data.hasOwnProperty('effectif')) {
                obj['effectif'] = ApiClient.convertToType(data['effectif'], 'String');
            }
            if (data.hasOwnProperty('effectif_min')) {
                obj['effectif_min'] = ApiClient.convertToType(data['effectif_min'], 'Number');
            }
            if (data.hasOwnProperty('effectif_max')) {
                obj['effectif_max'] = ApiClient.convertToType(data['effectif_max'], 'Number');
            }
            if (data.hasOwnProperty('tranche_effectif')) {
                obj['tranche_effectif'] = ApiClient.convertToType(data['tranche_effectif'], 'String');
            }
            if (data.hasOwnProperty('annee_effectif')) {
                obj['annee_effectif'] = ApiClient.convertToType(data['annee_effectif'], 'Number');
            }
            if (data.hasOwnProperty('code_naf')) {
                obj['code_naf'] = ApiClient.convertToType(data['code_naf'], 'String');
            }
            if (data.hasOwnProperty('libelle_code_naf')) {
                obj['libelle_code_naf'] = ApiClient.convertToType(data['libelle_code_naf'], 'String');
            }
            if (data.hasOwnProperty('date_de_creation')) {
                obj['date_de_creation'] = ApiClient.convertToType(data['date_de_creation'], 'String');
            }
            if (data.hasOwnProperty('numero_voie')) {
                obj['numero_voie'] = ApiClient.convertToType(data['numero_voie'], 'Number');
            }
            if (data.hasOwnProperty('indice_repetition')) {
                obj['indice_repetition'] = ApiClient.convertToType(data['indice_repetition'], 'String');
            }
            if (data.hasOwnProperty('type_voie')) {
                obj['type_voie'] = ApiClient.convertToType(data['type_voie'], 'String');
            }
            if (data.hasOwnProperty('libelle_voie')) {
                obj['libelle_voie'] = ApiClient.convertToType(data['libelle_voie'], 'String');
            }
            if (data.hasOwnProperty('complement_adresse')) {
                obj['complement_adresse'] = ApiClient.convertToType(data['complement_adresse'], 'String');
            }
            if (data.hasOwnProperty('adresse_ligne_1')) {
                obj['adresse_ligne_1'] = ApiClient.convertToType(data['adresse_ligne_1'], 'String');
            }
            if (data.hasOwnProperty('adresse_ligne_2')) {
                obj['adresse_ligne_2'] = ApiClient.convertToType(data['adresse_ligne_2'], 'String');
            }
            if (data.hasOwnProperty('date_cessation')) {
                obj['date_cessation'] = ApiClient.convertToType(data['date_cessation'], 'String');
            }
            if (data.hasOwnProperty('domiciliation')) {
                obj['domiciliation'] = EtablissementFicheDomiciliation.constructFromObject(data['domiciliation']);
            }
        }
        return obj;
    }


}

/**
 * Numéro siret de l'établissement au format xxxxxxxxxxxxxx.
 * @member {String} siret
 */
EtablissementFiche.prototype['siret'] = undefined;

/**
 * Numéro siret de l'établissement au format xxx xxx xxx xxxxx.
 * @member {String} siret_formate
 */
EtablissementFiche.prototype['siret_formate'] = undefined;

/**
 * Numéro NIC de l'établissement.
 * @member {String} nic
 */
EtablissementFiche.prototype['nic'] = undefined;

/**
 * Code postal de l'établissement.
 * @member {String} code_postal
 */
EtablissementFiche.prototype['code_postal'] = undefined;

/**
 * Ville de l'établissement.
 * @member {String} ville
 */
EtablissementFiche.prototype['ville'] = undefined;

/**
 * Pays de l'établissement
 * @member {String} pays
 */
EtablissementFiche.prototype['pays'] = undefined;

/**
 * Code du pays de l'établissement
 * @member {String} code_pays
 */
EtablissementFiche.prototype['code_pays'] = undefined;

/**
 * Latitude de l'établissement.
 * @member {Number} latitude
 */
EtablissementFiche.prototype['latitude'] = undefined;

/**
 * Longitude de l'établissement.
 * @member {Number} longitude
 */
EtablissementFiche.prototype['longitude'] = undefined;

/**
 * Vrai si l'établissement est cessé, faux si il est en activité.
 * @member {Boolean} etablissement_cesse
 */
EtablissementFiche.prototype['etablissement_cesse'] = undefined;

/**
 * Vrai si l'établissement est siège, faux s'il ne l'est pas.
 * @member {Boolean} siege
 */
EtablissementFiche.prototype['siege'] = undefined;

/**
 * Si vrai, l'établissement a au moins un employé.
 * @member {Boolean} etablissement_employeur
 */
EtablissementFiche.prototype['etablissement_employeur'] = undefined;

/**
 * Tranche d'effectif de l'établissement.
 * @member {String} effectif
 */
EtablissementFiche.prototype['effectif'] = undefined;

/**
 * Effectif minimal de l'établissement.
 * @member {Number} effectif_min
 */
EtablissementFiche.prototype['effectif_min'] = undefined;

/**
 * Effectif maximal de l'établissement.
 * @member {Number} effectif_max
 */
EtablissementFiche.prototype['effectif_max'] = undefined;

/**
 * Tranche d'effectif de l'établissement, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
 * @member {String} tranche_effectif
 */
EtablissementFiche.prototype['tranche_effectif'] = undefined;

/**
 * Année correspondante à la tranche d'effectif de l'établissement.
 * @member {Number} annee_effectif
 */
EtablissementFiche.prototype['annee_effectif'] = undefined;

/**
 * Code NAF de l'établissement.
 * @member {String} code_naf
 */
EtablissementFiche.prototype['code_naf'] = undefined;

/**
 * Libellé du code NAF de l'établissement.
 * @member {String} libelle_code_naf
 */
EtablissementFiche.prototype['libelle_code_naf'] = undefined;

/**
 * @member {String} date_de_creation
 */
EtablissementFiche.prototype['date_de_creation'] = undefined;

/**
 * Numéro de voie de l'établissement.
 * @member {Number} numero_voie
 */
EtablissementFiche.prototype['numero_voie'] = undefined;

/**
 * Indice de répétition de l'établissement.
 * @member {String} indice_repetition
 */
EtablissementFiche.prototype['indice_repetition'] = undefined;

/**
 * Type de voie de l'établissement.
 * @member {String} type_voie
 */
EtablissementFiche.prototype['type_voie'] = undefined;

/**
 * Libellé de la voie de l'établissement.
 * @member {String} libelle_voie
 */
EtablissementFiche.prototype['libelle_voie'] = undefined;

/**
 * Complément d'adresse de l'établissement.
 * @member {String} complement_adresse
 */
EtablissementFiche.prototype['complement_adresse'] = undefined;

/**
 * Première ligne de l'adresse de l'établissement. Correspond à l'ensemble des données numero_voie, indice_repetition, type_voie et libelle_voie.
 * @member {String} adresse_ligne_1
 */
EtablissementFiche.prototype['adresse_ligne_1'] = undefined;

/**
 * Seconde ligne de l'adresse de l'établissement. Est égal à complement_adresse
 * @member {String} adresse_ligne_2
 */
EtablissementFiche.prototype['adresse_ligne_2'] = undefined;

/**
 * Date de fermeture de l'établissement
 * @member {String} date_cessation
 */
EtablissementFiche.prototype['date_cessation'] = undefined;

/**
 * @member {module:model/EtablissementFicheDomiciliation} domiciliation
 */
EtablissementFiche.prototype['domiciliation'] = undefined;






export default EtablissementFiche;

