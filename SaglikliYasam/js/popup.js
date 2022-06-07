let diyetlerData;
let main_header=document.getElementById("main_header");
let header1=document.getElementById("header1");
let header2=document.getElementById("header2");
let header3=document.getElementById("header3"); 
let content1=document.getElementById("content1");
let content2=document.getElementById("content2");
let content3=document.getElementById("content3");


//Reading data 
 fetch("./diyetler.json")
.then(response => {
	
	return response.json();
})
.then(jsondata =>{console.log(jsondata); diyetlerData=jsondata});


function changeData(obj){
	main_header.innerHTML="";

	content1.innerHTML="";
	content2.innerHTML="";
	content3.innerHTML="";

	header1.innerHTML="";
	header2.innerHTML="";
	header3.innerHTML="";

//null kpntrolu yapılması gerek
	main_header.innerText=diyetlerData["diyetler"][obj.id][0]["main_header"];

	header1.innerText=diyetlerData["diyetler"][obj.id][1]["content_header"];
	content1.innerHTML=diyetlerData["diyetler"][obj.id][1]["content"];

	
	header2.innerText=diyetlerData["diyetler"][obj.id][2]["content_header"];
	var arr=diyetlerData["diyetler"][obj.id][2]["content"];

	for(var i = 0 ; i < arr.length;i++)
	{
		content2.innerHTML += "<i class='fa fa-check'></i>"+arr[i]+"<br>\n";
	}
	

	header3.innerText=diyetlerData["diyetler"][obj.id][3]["content_header"];
	content3.innerHTML=diyetlerData["diyetler"][obj.id][3]["content"];



	// if(diyetlerData["diyetler"][obj.id]==undefined){
	// 	content1.innerHTML="Default Content";
	// 	content2.innerHTML="Default Content";
	// 	content3.innerHTML="Default Content";

	// 	header1.innerHTML="Default Header";
	// 	header2.innerHTML="Default Header";
	// 	header3.innerHTML="Default Header";
	// }
}


$(document).ready(function () {
	$(document).on("click", function() {
		const isButton = event.target.nodeName === 'BUTTON';
		if (!isButton) {
			return;
		}
		switch(event.target.id){
			case "diyet1": 

			break;
		}
	});
   
});






//Roquentinn
   /*
        Helper
     */
    //Thanks for stackoverflow community https://stackoverflow.com/posts/494348/revisions
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes.
        return div.firstChild;
    }

	 //Videos images

	var videos = document.getElementById("diyet");
	videos.innerHTML = "";
        for(var i = 1; i<=12;i++)
        {
        videos.innerHTML += `
        <div class="video"> 
          <div class="info"> 
              <div class="img" style="background-image: url(img/diyet${i}.jpg); background-size: contain;"></div>
          </div> <div class="text detay"> <br>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" id="diyet${i}" onclick="changeData(this)"><i class="fa-brands fa-readme"></i> Detaylı Gör </button>
          </div>
        </div>`;

    }