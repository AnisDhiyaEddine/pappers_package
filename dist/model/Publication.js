"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Publication model module.
 * @module model/Publication
 * @version 2.3.0
 */
var Publication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Publication</code>.
   * @alias module:model/Publication
   */
  function Publication() {
    _classCallCheck(this, Publication);

    Publication.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Publication, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Publication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Publication} obj Optional instance to populate.
     * @return {module:model/Publication} The populated <code>Publication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Publication();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('contenu')) {
          obj['contenu'] = _ApiClient["default"].convertToType(data['contenu'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Publication;
}();
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
var _default = Publication;
exports["default"] = _default;