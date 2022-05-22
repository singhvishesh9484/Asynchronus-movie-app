
let img_div = document.getElementById("slideshow");
let i = 0;

let id;
function slideshow() {

  let img_arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfacTJDjPh7pdh9msoDzww2D7Z3ridyIFpw&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8ZQUpfwTJ-SIONnfE8WrQX8jbtYnaVwG5Q&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z_DT1o_KoMp8qtngteMZTK_t7MZSaPDbbg&usqp=CAU"]

  let img = document.createElement("img");

  setInterval(function () {
    if (i === img_arr.length) {
      i = 0;
    }
    img_div.innerHTML = null;
    img.src = img_arr[i];
    img_div.append(img);
    i++;
  }, 2000);

}
slideshow()

let arrData = [
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
    name: "TANHAJI",
    rdate: "2020",
    IMDb_rating: "8",
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7416/957416-v",
    name: "BABY",
    rdate: 2015,
    IMDb_rating: 8.2,
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4578/1000154578/1000154578-v",
    name: "PINK",
    rdate: 2016,
    IMDb_rating: 8,
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
    name: "MASAAN",
    rdate: 2015,
    IMDb_rating: 7.5,
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4920/1044920-v-1ac34349aead",
    name: "BHUJ ",
    rdate: 2021,
    IMDb_rating: 7,
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v ",
    name: " RAID",
    rdate: 2018,
    IMDb_rating: 7.2,
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/704/1000090704/1000090704-v",
    name: " NEERJA",
    rdate: 2016,
    IMDb_rating: 8.1,
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5958/1245958-v-755f43c703b2",
    name: "BISCUT ",
    rdate: 2022,
    IMDb_rating: 9,
  },
  {
    image_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5483/1770015483/1770015483-v",
    name: "KAABIL  ",
    rdate: 2017,
    IMDb_rating: 7,
  },


];
localStorage.setItem("movies", JSON.stringify(arrData))

let movieData = JSON.parse(localStorage.getItem("movies")) || [];
 console.log(movieData)

 document.getElementById("sort-lh").addEventListener("click", function () {
   sortarr1()

})
 function sortarr1() {

    let lth = document.querySelector("#sort-lh").id;
    console.log("hello")
    if(lth==="sort-lh"){
      movieData.sort(function(a,b){
        return (a.IMDb_rating - b.IMDb_rating)
      })
    }
    document.getElementById("movies").innerHTML=null
    display(movieData)
    
 }

 document.getElementById("sort-hl").addEventListener("click", function () {
  sortarr2()

})
function sortarr2() {

   let htl = document.querySelector("#sort-hl").id;
   console.log("Hello")
   if(htl==="sort-hl"){
     movieData.sort(function(a,b){
       return (b.IMDb_rating - a.IMDb_rating)
     })
   }
   document.getElementById("movies").innerHTML=null
   display(movieData)
   
}

 
function display(movieData){
  movieData.map(function (elem) {
    let box = document.createElement("div");

    let img = document.createElement("img")
    img.src = elem.image_url;
    let name = document.createElement("p")
    name.textContent = "Name : " + elem.name;
    let rdate = document.createElement("p")
    rdate.innerText = "Release Date : " + elem.rdate;
    let IMDb_rating = document.createElement("p")
    IMDb_rating.innerText = "Rating : " + elem.IMDb_rating;

    box.append(img, name, rdate, IMDb_rating);
    document.querySelector("#movies").append(box);

  });
}
display(movieData)

//console.log(arrData)




