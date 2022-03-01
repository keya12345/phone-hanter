//load phone:
const loadPhone=()=>{
    const searchBox = document.getElementById('search-box')
    const searchText= searchBox.value
    searchBox.value= ''
    if(searchText.length===0){
        const firstError =document.getElementById('first-error')
        firstError.style.display='block'
    } 
else{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayLoad(data.data))
}

}

const displayLoad=(phones)=>{
    const main = document.getElementById('main')
    main.textContent=''
 phones.forEach(phone => {
     //console.log(phone)
     //console.log(phone.slug)
    const div=document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`<div onclick="phoneDetails('${phone.slug}')" class="card w-75" >
    <img  w-25 h-auto src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h4 class="card-title text-primary">${phone.brand}</h4>
    <h3 class="card-title text-success">${phone.phone_name}</h3>
    
    
     </div>
     </div>`
     main.appendChild(div)
    
              
});
}

const phoneDetails=(id)=>{
    
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data))
}

const displayDetails=(details)=>{
    console.log(details)
   const detailsSite =document.getElementById('details-site')
   detailsSite.textContent=''
   const div=document.createElement('div')
   div.classList.add('card')
   div.innerHTML=`<img class=" src="${details.image}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
   `
   detailsSite.appendChild(div)
   

}

