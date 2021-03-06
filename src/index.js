import noop from 'noop';

export default class {

  constructor(inQuill, inOptions) {
    this.quill = inQuill;
    this.options = inOptions || { onChange: noop };
    this.element = document.createElement('input');
    this.attachEvents();
  }

  insertToEditor(inData) {
    const { url } = inData;
    const range = this.quill.getSelection();
    this.quill.insertEmbed(range.index, 'image', url);
    this.element.value = null;
  }

  _onChange() {
    const element = this.element;
    const { onChange } = this.options;
    element.setAttribute('type', 'file');
    element.click();
    element.onchange = () => {
      const value = element.files[0];
      if (value){
        onChange({ target: { value } }).then(reponse => {
          this.insertToEditor(reponse);
        });
      }
    };
  }

  attachEvents() {
    this.quill.getModule('toolbar').addHandler('image', () => {
      this._onChange();
    });
  }

}
