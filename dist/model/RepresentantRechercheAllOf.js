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
 * The RepresentantRechercheAllOf model module.
 * @module model/RepresentantRechercheAllOf
 * @version 2.3.0
 */
var RepresentantRechercheAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepresentantRechercheAllOf</code>.
   * @alias module:model/RepresentantRechercheAllOf
   */
  function RepresentantRechercheAllOf() {
    _classCallCheck(this, RepresentantRechercheAllOf);

    RepresentantRechercheAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepresentantRechercheAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepresentantRechercheAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepresentantRechercheAllOf} obj Optional instance to populate.
     * @return {module:model/RepresentantRechercheAllOf} The populated <code>RepresentantRechercheAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepresentantRechercheAllOf();

        if (data.hasOwnProperty('actuel')) {
          obj['actuel'] = _ApiClient["default"].convertToType(data['actuel'], 'Boolean');
        }

        if (data.hasOwnProperty('date_depart_de_poste')) {
          obj['date_depart_de_poste'] = _ApiClient["default"].convertToType(data['date_depart_de_poste'], 'String');
        }

        if (data.hasOwnProperty('forme_juridique')) {
          obj['forme_juridique'] = _ApiClient["default"].convertToType(data['forme_juridique'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepresentantRechercheAllOf;
}();
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
var _default = RepresentantRechercheAllOf;
exports["default"] = _default;