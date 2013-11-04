
/*!
 * dialog - Dialog box plugin
 * v0.1.0
 * https://github.com/firstandthird/dialog
 * copyright First + Third 2013
 * MIT License
*/
(function($){
	$.declare('dialog',{
		defaults : {
			title: '',
			description: '',
			okButton: 'OK',
			cancelButton: 'Cancel',
			okButtonClass: '',
			cancelButtonClass: '',
      dialogClass: 'fidel-dialog',
			ok: $.noop,
			cancel: $.noop
		},
    init : function(){
      var currentDialog = this.el.find('.' + this.dialogClass);
      if (currentDialog.length !== 0){
        this._hide();
      }

      this._createMarkup();
      this._bindEvents();
    },
    _createMarkup : function(){
      var markup = '<div class="'+ this.dialogClass +'">' +
                      '<div class="fidel-dialog-title">' + this.title + '</div>' +
                      '<div class="fidel-dialog-content">' + this.description + '</div>' +
                      '<div class="fidel-dialog-buttons">' +
                        '<button data-action="hide" data-button="ok" class="'+ this.okButtonClass +'">' + this.okButton + '</button>' +
                        '<button data-action="hide" data-button="cancel" class="'+ this.cancelButtonClass +'">' + this.cancelButton + '</button>' +
                      '</div>'+
                    '</div>';
      this.dialog = $(markup);
      this.overlay = this.dialog.overlay({ backdropClick: false });
      this.el.append(this.dialog);
    },
    _bindEvents : function(){
      this.dialog.find('button').on('click', this.proxy(this._onButtonClick));
    },
    _hide : function(){
      this.overlay.overlay('hide');
      this.el.removeData('dialog');
      this.dialog.remove();
    },
    _onButtonClick : function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      var element = $(e.currentTarget || e.toElement),
          button = element.data('button');

      this[button].call();
      this._hide();
    }

	});
})(jQuery);