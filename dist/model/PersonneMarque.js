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
 * The PersonneMarque model module.
 * @module model/PersonneMarque
 * @version 2.3.0
 */
var PersonneMarque = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PersonneMarque</code>.
   * @alias module:model/PersonneMarque
   */
  function PersonneMarque() {
    _classCallCheck(this, PersonneMarque);

    PersonneMarque.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PersonneMarque, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PersonneMarque</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonneMarque} obj Optional instance to populate.
     * @return {module:model/PersonneMarque} The populated <code>PersonneMarque</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PersonneMarque();

        if (data.hasOwnProperty('siren')) {
          obj['siren'] = _ApiClient["default"].convertToType(data['siren'], 'String');
        }

        if (data.hasOwnProperty('entite_legale')) {
          obj['entite_legale'] = _ApiClient["default"].convertToType(data['entite_legale'], 'String');
        }

        if (data.hasOwnProperty('nom')) {
          obj['nom'] = _ApiClient["default"].convertToType(data['nom'], 'String');
        }

        if (data.hasOwnProperty('batiment')) {
          obj['batiment'] = _ApiClient["default"].convertToType(data['batiment'], 'String');
        }

        if (data.hasOwnProperty('rue')) {
          obj['rue'] = _ApiClient["default"].convertToType(data['rue'], 'String');
        }

        if (data.hasOwnProperty('ville')) {
          obj['ville'] = _ApiClient["default"].convertToType(data['ville'], 'String');
        }

        if (data.hasOwnProperty('boite_postale')) {
          obj['boite_postale'] = _ApiClient["default"].convertToType(data['boite_postale'], 'String');
        }

        if (data.hasOwnProperty('code_postal')) {
          obj['code_postal'] = _ApiClient["default"].convertToType(data['code_postal'], 'String');
        }

        if (data.hasOwnProperty('code_pays')) {
          obj['code_pays'] = _ApiClient["default"].convertToType(data['code_pays'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PersonneMarque;
}();
/**
 * Siren de l'entité, dans le cas d'une personne morale.
 * @member {String} siren
 */


PersonneMarque.prototype['siren'] = undefined;
/**
 * Entité légale.
 * @member {String} entite_legale
 */

PersonneMarque.prototype['entite_legale'] = undefined;
/**
 * Nom de l'entité.
 * @member {String} nom
 */

PersonneMarque.prototype['nom'] = undefined;
/**
 * Bâtiment de l'entité.
 * @member {String} batiment
 */

PersonneMarque.prototype['batiment'] = undefined;
/**
 * Rue de l'entité.
 * @member {String} rue
 */

PersonneMarque.prototype['rue'] = undefined;
/**
 * Ville de l'entité.
 * @member {String} ville
 */

PersonneMarque.prototype['ville'] = undefined;
/**
 * Boîte postale de l'entité.
 * @member {String} boite_postale
 */

PersonneMarque.prototype['boite_postale'] = undefined;
/**
 * Code postal de l'entité.
 * @member {String} code_postal
 */

PersonneMarque.prototype['code_postal'] = undefined;
/**
 * Code pays de l'entité.
 * @member {String} code_pays
 */

PersonneMarque.prototype['code_pays'] = undefined;
var _default = PersonneMarque;
exports["default"] = _default;