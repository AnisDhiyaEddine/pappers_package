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
 * The EntrepriseFicheAllOfDetailsSocieteDeGestion model module.
 * @module model/EntrepriseFicheAllOfDetailsSocieteDeGestion
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDetailsSocieteDeGestion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDetailsSocieteDeGestion</code>.
   * Détails sur la société de gestion, le cas échéant.
   * @alias module:model/EntrepriseFicheAllOfDetailsSocieteDeGestion
   */
  function EntrepriseFicheAllOfDetailsSocieteDeGestion() {
    _classCallCheck(this, EntrepriseFicheAllOfDetailsSocieteDeGestion);

    EntrepriseFicheAllOfDetailsSocieteDeGestion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDetailsSocieteDeGestion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsSocieteDeGestion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsSocieteDeGestion} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsSocieteDeGestion} The populated <code>EntrepriseFicheAllOfDetailsSocieteDeGestion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDetailsSocieteDeGestion();

        if (data.hasOwnProperty('nom')) {
          obj['nom'] = _ApiClient["default"].convertToType(data['nom'], 'String');
        }

        if (data.hasOwnProperty('siren')) {
          obj['siren'] = _ApiClient["default"].convertToType(data['siren'], 'String');
        }

        if (data.hasOwnProperty('greffe')) {
          obj['greffe'] = _ApiClient["default"].convertToType(data['greffe'], 'String');
        }

        if (data.hasOwnProperty('adresse')) {
          obj['adresse'] = _ApiClient["default"].convertToType(data['adresse'], 'String');
        }

        if (data.hasOwnProperty('code_postal')) {
          obj['code_postal'] = _ApiClient["default"].convertToType(data['code_postal'], 'String');
        }

        if (data.hasOwnProperty('ville')) {
          obj['ville'] = _ApiClient["default"].convertToType(data['ville'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfDetailsSocieteDeGestion;
}();
/**
 * Nom de la société de gestion.
 * @member {String} nom
 */


EntrepriseFicheAllOfDetailsSocieteDeGestion.prototype['nom'] = undefined;
/**
 * SIREN de la société de gestion.
 * @member {String} siren
 */

EntrepriseFicheAllOfDetailsSocieteDeGestion.prototype['siren'] = undefined;
/**
 * Greffe de la société de gestion.
 * @member {String} greffe
 */

EntrepriseFicheAllOfDetailsSocieteDeGestion.prototype['greffe'] = undefined;
/**
 * Adresse de la société de gestion.
 * @member {String} adresse
 */

EntrepriseFicheAllOfDetailsSocieteDeGestion.prototype['adresse'] = undefined;
/**
 * Code postal de la société de gestion.
 * @member {String} code_postal
 */

EntrepriseFicheAllOfDetailsSocieteDeGestion.prototype['code_postal'] = undefined;
/**
 * Ville de la société de gestion.
 * @member {String} ville
 */

EntrepriseFicheAllOfDetailsSocieteDeGestion.prototype['ville'] = undefined;
var _default = EntrepriseFicheAllOfDetailsSocieteDeGestion;
exports["default"] = _default;