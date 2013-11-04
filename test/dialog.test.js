suite('dialog', function() {
  var $body = $('body');

  setup(function(){
    $body.dialog({
      title : 'Do you want some coffee?',
      description : 'You should definitely try to get some good coffee',
      okButton : 'Yes',
      cancelButton : 'No'
    });
  });

  test('$().dialog exists',function(){
    assert.equal(typeof $('body').dialog, 'function');
  });

  test('dialog creates an overlay', function(){
    assert.equal($('.fidel-dialog').length,1);
  });

  test('dialog has a title with passed text', function(){
    assert.equal($('.fidel-dialog-title').text(),'Do you want some coffee?');
  });

  test('dialog has a body with passed text', function(){
    assert.equal($('.fidel-dialog-content').text(),'You should definitely try to get some good coffee');
  });

  test('dialog has an ok button with passed text', function(){
    assert.equal($('.fidel-dialog').find('button').first().text(),'Yes');
  });

  test('dialog has an cancel button with passed text', function(){
    assert.equal($('.fidel-dialog').find('button').last().text(),'No');
  });

  test('dialog should fire a function when OK is pressed', function(done){
    $body.dialog('_hide');
    $body.dialog({
      ok : function(){
        done();
      }
    });
    $('.fidel-dialog').find('button').first().click();
  });
  test('dialog should fire a function when Cancel is pressed', function(done){
    $body.dialog('_hide');
    $body.dialog({
      cancel : function(){
        done();
      }
    });
    $('.fidel-dialog').find('button').last().click();
  });
});
