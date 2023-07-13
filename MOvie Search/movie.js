
async function fetchData(){
    const response=await fetch('https://www.omdbapi.com/?i=tt0816692&apikey=4a92b3dd');
    const datas=await response.json();
    console.log(datas)
    var image=document.getElementById('poster')
    image.src=datas.Poster;
    var title=document.getElementById('title')
    title.textContent=datas.Title;
    var rating=document.getElementById('rating')
    rating.textContent=datas.imdbRating;
    var plot=document.getElementById('plot')
    plot.textContent=datas.Plot;
    var genre=document.getElementById('genre')
    genre.textContent=datas.Genre;
    var actors=document.getElementById('actors')
    actors.textContent=datas.Actors;
    var time=document.getElementById('time')
    time.textContent=datas.Runtime;
    var country=document.getElementById('country')
    country.textContent=datas.Country;
    
}
fetchData();
var movieContainer=document.getElementById("container");
let myBtn=document.getElementById("myBtn");
const informationContainer = document.getElementsByClassName("information");
const posterContainer = document.getElementsByClassName("Poster")

async function moredata(){
    posterContainer[0].innerHTML=""
    informationContainer[0].innerHTML="";
    const search=document.getElementById("search").value;
    console.log(search);
    const response=await fetch(`https://www.omdbapi.com/?s=${search}&apikey=4a92b3dd`);
    const datas=await response.json();
    console.log(datas);
    // console.log(datas.Search.length);
    var movieContainer=document.getElementById("container");
    movieContainer.innerHTML="";
    if(datas.Response === 'False'){
        console.log("in error");
        //No movies found.
        document.getElementById("error-msg").textContent=`No movies found for this search ${search}.`;
    }else{
        //Display the search results
        for(let i=0;i<datas.Search.length;i++){
            const div=document.createElement("div");
            const obj=datas.Search[i];
            div.innerHTML=`
            <div class='search-item-thumbnail'>
                <img src="${obj.Poster}">
            </div>
            <div class='info'>
                <h2>${obj.Title}</h2>
            </div>
            `;
            document.getElementById("container").appendChild(div); 
        }
    }
}
myBtn.addEventListener("click",()=>{
    
    moredata();
});
// myBtn.addEventListener('click',replaceDivs);

// function replaceDivs(){
//     var defaultcont=document.getElementsByClassName('movies')
//     var newdiv=document.getElementById('container');

//     defaultcont.style.display='none';
//     newdiv.style.display='block';
// }

// function displaystatus(){
//     myBtn.removeEventListener("click",()=>{
//         moredata();
//     })

// }
// displaystatus();






// let vs var vs const
// function declaration vs function expression (hoisting)
// arrow function
// template literals