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
     if(phones.length==0){
        const secondError =document.getElementById('second-error')
        console.log(secondError)
        secondError.style.display='block'
        
    }
 phones.forEach(phone => {
     //console.log(phone)
     //console.log(phone.slug)
    const div=document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`<div  class="card w-75" >
    <img  w-25 h-auto src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h4 class="card-title text-primary">${phone.brand}</h4>
    <h3 class="card-title text-success">${phone.phone_name}</h3>
    <button onclick="phoneDetails('${phone.slug}')" class="border-info rounded bg-primary  fw-bold text-white">phone-details</button>
    
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
    //console.log(details)
   const detailsSite =document.getElementById('details-site')
   detailsSite.textContent=''
   const div=document.createElement('div')
   div.classList.add('card')
   div.innerHTML=`<img class="w-25 text-center mx-auto" src="${details.image}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${details.mainFeatures.chipSet}</h5>
     <h6 class="card-text">${details.mainFeatures.memory}</h6>
     <h6 class="card-text">${details.mainFeatures.sensors.slice(0,5)}</h6>
     
     <p>${details.releaseDate?details.releaseDate:'no releasedate found'}</p>
     
   </div>
   `
   detailsSite.appendChild(div)
   

}

