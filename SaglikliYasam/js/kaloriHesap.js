
$('#calorie-calculator').submit(function(e){
    e.preventDefault();
    calcDailyCals();
  });
  
  $('#macro-calculator').submit(function(e){
    e.preventDefault();
    calcCalsFromMacros();
  });
  $('#body-mass-calculator').submit(function(e){
    e.preventDefault();
    calcBodyMass();
  });
  
  $('button[type="reset"]').click(function(){
    $('#results').fadeOut('fast',function(){
      $(this).html('');
    });
  });
  
  function calcCalsFromMacros(){
    let carbs = parseInt($('#carbs').val()) * 4;
    let protein = parseInt($('#protein').val()) * 4;
    let fat = parseInt($('#fat').val()) * 9;
  
    let result = carbs+protein+fat;
    
    $('#m-results').fadeOut('fast',function(){
      $(this).html('<h1>Tahmini Günlük Kalori: ' + result + '</h1>').fadeIn('fast');
    });
    
  }
  
  
  function calcDailyCals(){

    let age = parseInt($('#age').val());
    let sex = $('input[name="sex"]:checked').val();
    let weight = parseFloat($('#weight').val());
    let height = parseFloat($("#cm").val());
    let activity = parseFloat($('#activity_level').val());
    let goal = parseInt($('#gain_loss_amount').val());
    
    let result;
    
    if (sex === 'male') {
      result = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity;
    } else {
      result = ((10 * weight) + (6.25 * height) - (5 * age) -161) * activity;
    }
    
    result = Math.round(result + goal);
    
    calcDailyMacros(result);
    calcBodyMass2(weight, height);
    
    $('#results').fadeOut('fast',function(){
      $(this).html('<h1> Tahmini Günlük Kalori: ' + result + '</h1>').fadeIn('fast');
    });    
    
    function calcDailyMacros(result){
      let carbs = (result * .4) /4; 
      let protein = (result * .25) /4; 
      let fat = (result * .35) /9;
      
      $('#carbs').val(Math.round(carbs));
      $('#protein').val(Math.round(protein));
      $('#fat').val(Math.round(fat));
    }
  }


  function calcBodyMass(){
    

    let height = parseInt($('#m').val()) / 100;
    let weight = parseInt($('#kilo').val());

    let result = (weight / (height * height)).toFixed(2);
    console.log(height);
    console.log(weight);
    console.log(result);

    if(result <= 18)
    {
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result}, Zayıfsınız </h1>`).fadeIn('fast');
      });
    }
    else if (19 < result && result <= 25) 
    {
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result} , Kilonuz normal </h1>`).fadeIn('fast');
      });
    }
    else if (25 < result && result <= 30) 
    {
      
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result}, Fazla Kilolusunuz </h1>`).fadeIn('fast');
      });
    }
    else if (30 < result && result <= 40) 
    {
      
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result} , Obezsiniz </h1>`).fadeIn('fast');
      });
    }
    else if ( result > 40) 
    {
      
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result}, İleri Derecede Obezsiniz </h1>`).fadeIn('fast');
      });
    }    
  }

  function calcBodyMass2(weight, cm)
  {
    height = cm/100; 
    let result = (weight / (height * height )).toFixed(2);
    console.log(height);
    console.log(weight);
    console.log(result);

    $('#m').val(cm);
    $('#kilo').val(weight);

    if(result <= 18)
    {
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result}, Zayıfsınız </h1>`).fadeIn('fast');
      });
    }
    else if (19 < result && result <= 25) 
    {
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result} , Kilonuz normal </h1>`).fadeIn('fast');
      });
    }
    else if (25 < result && result <= 30) 
    {
      
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result}, Fazla Kilolusunuz </h1>`).fadeIn('fast');
      });
    }
    else if (30 < result && result <= 40) 
    {
      
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result} , Obezsiniz </h1>`).fadeIn('fast');
      });
    }
    else if ( result > 40) 
    {
      
      $('#b-results').fadeOut('fast',function(){
        $(this).html(`<h1>Vücut Kütle Endeksiniz: ${result}, İleri Derecede Obezsiniz </h1>`).fadeIn('fast');
      });
    }    
  }