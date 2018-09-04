'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noop = require('noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function () {
  function _default(inQuill, inOptions) {
    _classCallCheck(this, _default);

    this.quill = inQuill;
    this.options = inOptions || { onChange: _noop2.default };
    this.element = document.createElement('input');
    this.attachEvents();
  }

  _createClass(_default, [{
    key: 'insertToEditor',
    value: function insertToEditor(inData) {
      var url = inData.url;

      var range = this.quill.getSelection();
      this.quill.insertEmbed(range.index, 'image', url);
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      var _this = this;

      var element = this.element;
      var onChange = this.options.onChange;

      element.setAttribute('type', 'file');
      element.click();
      element.onchange = function () {
        onChange({ target: { value: element.files[0] } }).then(function (reponse) {
          _this.insertToEditor(reponse);
        });
      };
    }
  }, {
    key: 'attachEvents',
    value: function attachEvents() {
      var _this2 = this;

      this.quill.getModule('toolbar').addHandler('image', function () {
        _this2._onChange();
      });
    }
  }]);

  return _default;
}();

exports.default = _default;