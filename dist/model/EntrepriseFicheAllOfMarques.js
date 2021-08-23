"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseFicheAllOfClasses = _interopRequireDefault(require("./EntrepriseFicheAllOfClasses"));

var _EntrepriseFicheAllOfEvenements = _interopRequireDefault(require("./EntrepriseFicheAllOfEvenements"));

var _PersonneMarque = _interopRequireDefault(require("./PersonneMarque"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseFicheAllOfMarques model module.
 * @module model/EntrepriseFicheAllOfMarques
 * @version 2.3.0
 */
var EntrepriseFicheAllOfMarques = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfMarques</code>.
   * @alias module:model/EntrepriseFicheAllOfMarques
   */
  function EntrepriseFicheAllOfMarques() {
    _classCallCheck(this, EntrepriseFicheAllOfMarques);

    EntrepriseFicheAllOfMarques.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfMarques, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfMarques</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfMarques} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfMarques} The populated <code>EntrepriseFicheAllOfMarques</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfMarques();

        if (data.hasOwnProperty('numero')) {
          obj['numero'] = _ApiClient["default"].convertToType(data['numero'], 'String');
        }

        if (data.hasOwnProperty('date_enregistrement')) {
          obj['date_enregistrement'] = _ApiClient["default"].convertToType(data['date_enregistrement'], 'String');
        }

        if (data.hasOwnProperty('date_expiration')) {
          obj['date_expiration'] = _ApiClient["default"].convertToType(data['date_expiration'], 'String');
        }

        if (data.hasOwnProperty('lieu_enregistrement')) {
          obj['lieu_enregistrement'] = _ApiClient["default"].convertToType(data['lieu_enregistrement'], 'String');
        }

        if (data.hasOwnProperty('statut')) {
          obj['statut'] = _ApiClient["default"].convertToType(data['statut'], 'String');
        }

        if (data.hasOwnProperty('texte')) {
          obj['texte'] = _ApiClient["default"].convertToType(data['texte'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('lien_image')) {
          obj['lien_image'] = _ApiClient["default"].convertToType(data['lien_image'], 'String');
        }

        if (data.hasOwnProperty('descriptions')) {
          obj['descriptions'] = _ApiClient["default"].convertToType(data['descriptions'], ['String']);
        }

        if (data.hasOwnProperty('classes')) {
          obj['classes'] = _ApiClient["default"].convertToType(data['classes'], [_EntrepriseFicheAllOfClasses["default"]]);
        }

        if (data.hasOwnProperty('deposant')) {
          obj['deposant'] = _PersonneMarque["default"].constructFromObject(data['deposant']);
        }

        if (data.hasOwnProperty('mandataire')) {
          obj['mandataire'] = _PersonneMarque["default"].constructFromObject(data['mandataire']);
        }

        if (data.hasOwnProperty('evenements')) {
          obj['evenements'] = _ApiClient["default"].convertToType(data['evenements'], [_EntrepriseFicheAllOfEvenements["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfMarques;
}();
/**
 * Numéro de la marque.
 * @member {String} numero
 */


EntrepriseFicheAllOfMarques.prototype['numero'] = undefined;
/**
 * Date d'enregistrement de la marque, au format AAAA-MM-JJ.
 * @member {String} date_enregistrement
 */

EntrepriseFicheAllOfMarques.prototype['date_enregistrement'] = undefined;
/**
 * Date d'expiration de la marque au format AAAA-MM-JJ.
 * @member {String} date_expiration
 */

EntrepriseFicheAllOfMarques.prototype['date_expiration'] = undefined;
/**
 * Lieu d'enregistrement de la marque.
 * @member {String} lieu_enregistrement
 */

EntrepriseFicheAllOfMarques.prototype['lieu_enregistrement'] = undefined;
/**
 * Statut de la marque. La description des différents types est disponible en page 11 du document suivant : https://www.inpi.fr/sites/default/files/doctech_marques_v1_4.pdf.
 * @member {module:model/EntrepriseFicheAllOfMarques.StatutEnum} statut
 */

EntrepriseFicheAllOfMarques.prototype['statut'] = undefined;
/**
 * Texte de la marque.
 * @member {String} texte
 */

EntrepriseFicheAllOfMarques.prototype['texte'] = undefined;
/**
 * Type de la marque.
 * @member {module:model/EntrepriseFicheAllOfMarques.TypeEnum} type
 */

EntrepriseFicheAllOfMarques.prototype['type'] = undefined;
/**
 * Lien vers l'image déposée.
 * @member {String} lien_image
 */

EntrepriseFicheAllOfMarques.prototype['lien_image'] = undefined;
/**
 * Liste des descriptions de la marque.
 * @member {Array.<String>} descriptions
 */

EntrepriseFicheAllOfMarques.prototype['descriptions'] = undefined;
/**
 * Liste des classes (produits et services) de la marque. La liste des classes est disponible à l'adresse suivante : https://bases-marques.inpi.fr/Typo3_INPI_Marques/listeClasseNice.
 * @member {Array.<module:model/EntrepriseFicheAllOfClasses>} classes
 */

EntrepriseFicheAllOfMarques.prototype['classes'] = undefined;
/**
 * @member {module:model/PersonneMarque} deposant
 */

EntrepriseFicheAllOfMarques.prototype['deposant'] = undefined;
/**
 * @member {module:model/PersonneMarque} mandataire
 */

EntrepriseFicheAllOfMarques.prototype['mandataire'] = undefined;
/**
 * Liste des événements associés à la marque.
 * @member {Array.<module:model/EntrepriseFicheAllOfEvenements>} evenements
 */

EntrepriseFicheAllOfMarques.prototype['evenements'] = undefined;
/**
 * Allowed values for the <code>statut</code> property.
 * @enum {String}
 * @readonly
 */

EntrepriseFicheAllOfMarques['StatutEnum'] = {
  /**
   * value: "Demande déposée"
   * @const
   */
  "Demande déposée": "Demande déposée",

  /**
   * value: "Demande publiée"
   * @const
   */
  "Demande publiée": "Demande publiée",

  /**
   * value: "Demande non publiée"
   * @const
   */
  "Demande non publiée": "Demande non publiée",

  /**
   * value: "Demande irrecevable après publication"
   * @const
   */
  "Demande irrecevable après publication": "Demande irrecevable après publication",

  /**
   * value: "Marque enregistrée"
   * @const
   */
  "Marque enregistrée": "Marque enregistrée",

  /**
   * value: "Renouvellement demandé"
   * @const
   */
  "Renouvellement demandé": "Renouvellement demandé",

  /**
   * value: "Marque renouvelée"
   * @const
   */
  "Marque renouvelée": "Marque renouvelée",

  /**
   * value: "Demande totalement rejetée"
   * @const
   */
  "Demande totalement rejetée": "Demande totalement rejetée",

  /**
   * value: "Marque ayant fait l'objet d'une renonciation totale"
   * @const
   */
  "Marque ayant fait l&#39;objet d&#39;une renonciation totale": "Marque ayant fait l'objet d'une renonciation totale",

  /**
   * value: "Marque ayant fait l'objet d'un retrait total"
   * @const
   */
  "Marque ayant fait l&#39;objet d&#39;un retrait total": "Marque ayant fait l'objet d'un retrait total",

  /**
   * value: "Marque annulée"
   * @const
   */
  "Marque annulée": "Marque annulée",

  /**
   * value: "Marque expirée"
   * @const
   */
  "Marque expirée": "Marque expirée"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

EntrepriseFicheAllOfMarques['TypeEnum'] = {
  /**
   * value: "Mixte"
   * @const
   */
  "Mixte": "Mixte",

  /**
   * value: "Figuratif"
   * @const
   */
  "Figuratif": "Figuratif",

  /**
   * value: "Hologramme"
   * @const
   */
  "Hologramme": "Hologramme",

  /**
   * value: "Son"
   * @const
   */
  "Son": "Son",

  /**
   * value: "Texte"
   * @const
   */
  "Texte": "Texte",

  /**
   * value: "3D"
   * @const
   */
  "3D": "3D",

  /**
   * value: "Position"
   * @const
   */
  "Position": "Position",

  /**
   * value: "Mouvement"
   * @const
   */
  "Mouvement": "Mouvement",

  /**
   * value: "Multimedia"
   * @const
   */
  "Multimedia": "Multimedia",

  /**
   * value: "Motifs"
   * @const
   */
  "Motifs": "Motifs",

  /**
   * value: "Couleur"
   * @const
   */
  "Couleur": "Couleur",

  /**
   * value: "Forme"
   * @const
   */
  "Forme": "Forme",

  /**
   * value: "Autre"
   * @const
   */
  "Autre": "Autre"
};
var _default = EntrepriseFicheAllOfMarques;
exports["default"] = _default;