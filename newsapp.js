<<<<<<< HEAD
const API_KEY= "358e4b45aecc5fb7a8b1c20d2773500f";
async function fetchfunction(){
    const API_KEY= "358e4b45aecc5fb7a8b1c20d2773500f";
    const category=document.getElementById("select").value;
    const response=await fetch(`https://gnews.io/api/v4/top-headlines?&lang=en&country=in&category=${category}&apikey=${API_KEY}`);
    const data=await response.json();
    console.log(data);
    data.articles.forEach(element => {

        newsvalue=document.getElementById("news"); 
        newsvalue.innerHTML +=
        `<p>${element.title}</p>`
        console.log(element.title);
    });
    
}

=======
const API_KEY= "358e4b45aecc5fb7a8b1c20d2773500f";
async function fetchfunction(){
    const API_KEY= "358e4b45aecc5fb7a8b1c20d2773500f";
    const category=document.getElementById("select").value;
    const response=await fetch(`https://gnews.io/api/v4/top-headlines?&lang=en&country=in&category=${category}&apikey=${API_KEY}`);
    const data=await response.json();
    console.log(data);
    data.articles.forEach(element => {

        newsvalue=document.getElementById("news"); 
        newsvalue.innerHTML +=
        `<div style="background-color: beige; margin:20px;">
        <p>${element.title}</p>
        <p>${element.description}</p>
        <img src=${element.image} height:"300" width="300">
        <a href=${element.url}>read more</a>
        </div>`
        console.log(element.title);
    });
    
}

>>>>>>> ea1a5ed (updated)
