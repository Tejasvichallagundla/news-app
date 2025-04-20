const API_KEY= "358e4b45aecc5fb7a8b1c20d2773500f";
async function fetchfunction(){
    const API_KEY= "358e4b45aecc5fb7a8b1c20d2773500f";
    const query=document.getElementById("q").value;
    const category=document.getElementById("select").value;
    const response=await fetch(`https://gnews.io/api/v4/top-headlines?q=${query}&lang=en&country=in&category=${category}&apikey=${API_KEY}`);
    const data=await response.json();
    console.log(data);
    data.articles.forEach(element => {
        
        newsvalue=document.getElementById("news"); 
        newsvalue.innerHTML +=
        `<div class="newscard">
        <div class="imagediv">
        <img src=${element.image} style="height:300px; width:auto;">
        </div>
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <button><a href=${element.url}>Read more</a></button>
        </div>`
        console.log(element.title);
    });
    
}

