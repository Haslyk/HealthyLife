let tariflerData = 0 ;
let materials = document.getElementById("materials");
let recipe = document.getElementById("recipe");

fetch("./saglikliTarifler.json")
.then(response => {
	
	return response.json();
})
.then(jsondata =>{console.log(jsondata); tariflerData=jsondata, getRecipe(jsondata)});



function getRecipe(tariflerData)
{
  console.log(tariflerData);
  var recipes = document.getElementById("tarif");
	recipes.innerHTML = " ";
  for(var i = 1; i<=6;i++)
  {
    var materials = '';
    for ( var $x = 0; $x < tariflerData['tarifler']['tarif' + i][0]['materials'].length; $x++) {
        materials+='<li>' + tariflerData['tarifler']['tarif' + i][0]['materials'][$x] + '</li>';
;    } 
    recipes.innerHTML += `
      <div class="container">
        <img src="../SaglikliYasam/img/tarif${i}.jpg" alt="Avatar" class="image">
        <div class="overlay">
          <div class="text">
              <div class="malzemeler">
                <h4>Malzemeler</h4>
                <ul id="materials">
                   ${materials}
                </ul>
              </div>
              <div class="yapilis">
                <h4>Tarif</h4>
                <span id="recipe"> ${tariflerData['tarifler']['tarif' + i][1]['recipe']} </span>
              </div> 
          </div>
        </div>
        <div class="yapilis-video">
           <a href="${tariflerData['tarifler']['tarif' + i][2]['link']}" target="_blank" class="link">Videodan Öğren</a>
        </div>
      </div>`;
    }
}








