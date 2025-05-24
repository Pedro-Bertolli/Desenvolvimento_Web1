$('#lampada').mouseover(function(){
    $('#lampada').attr('src', 'lampada-acesa.png');
    $('body').css('background-color', 'white');
    $('body').css('color', 'black');
    $('#legenda').html('Lâmpada acesa');
  });
  
  $('#lampada').mouseout(function(){
    $('#lampada').attr('src', 'lampada.png');
    $('body').css('background-color', 'black');
    $('body').css('color', 'white');
    $('#legenda').html('Lâmpada apagada');
  });