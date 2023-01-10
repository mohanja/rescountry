var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","ms-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));
async function restdata(){
  let res=await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  let res1= await res.json();
  console.log(res1);
  // console.log(res1[0].name);
  // console.log(res1[0].latlng);
  try {
      for(var i=0;i<res1.length;i++){
      var name=res1[i].name;
      var latlong=res1[i].latlng;
      if(latlong.length===undefined){
          throw new Error("invalid coordinates");
      }
      opendata(name,...latlong);
      }
  } catch (error) {
      console.log("invalid"+error.message);
  }
  }
  //lat:33
  //lon:65
  async function opendata(name,lat,lon){
  try {
  let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4548dc8621d1edd8d49826891643c810`);
  let res1= await res.json();
  console.log(` Temp:${res1.main.temp}`);
  } catch (error) {
      console.log(error.message);
  }
  }
  
  
  restdata();

 
function foo(data1,res1){
for(var i=0;i<data1.length;i++){
   row.innerHTML+=`<div class="col-md-4">
 <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
 <div class="text-center bg-dark"><b>${data1[i].name}<b/></div>
  <div class="card-body">
  <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <h5 class="text-center">Capital:${data1[i].capital}</h5>
  <h5 class="text-center">Region:${data1[i].region}</h5>
  <h5 class="text-center">Country Code:${data1[i].cioc}</h5>
  <div class="text-center">
  <button type ="button" onclik=${res1} triger="back">click for weather</button>
  </div>
  </div>
</div>
  </div>`;
document.body.append(container); 
}

}


