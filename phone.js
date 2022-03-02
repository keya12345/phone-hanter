//spinner:
const toggleSpinner=displayStyle=>{
    document.getElementById('spinner').style.display=displayStyle
}

//load phone:
const loadPhone=()=>{
    const searchBox = document.getElementById('search-box')
    //display spinner
    toggleSpinner('block')
    const searchText= searchBox.value
    searchBox.value= ''
    if(searchText.length===0){
        const firstError =document.getElementById('first-error')
        firstError.style.display='block'
        const secondError =document.getElementById('second-error')
        secondError=''
        secondError.style.display='none'
        
    } 
else{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText.toLowerCase()}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayLoad(data.data))
}

}


// display phone card
const displayLoad=(phones)=>{
    const main = document.getElementById('main')
    main.textContent=''
     if(phones.length==0){
        const secondError =document.getElementById('second-error')
        secondError.style.display='block'
        const firstError =document.getElementById('first-error')
        firstError.style.display='none'
        firstError=''
        
    }
   

    
//forEach use
 phones.slice(0,20).forEach(phone => {
     
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

//phone details id load
const phoneDetails=(id)=>{
    
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data))
}

//display details phone
const displayDetails=(details)=>{
    console.log(details)
   const detailsSite =document.getElementById('details-site')
   detailsSite.textContent=''
   const div=document.createElement('div')
   div.classList.add('card')
   div.innerHTML=`<img class="w-25 text-center mx-auto" src="${details.image}" class="card-img-top" alt="...">
   <div class="card-body">
   <h5>Name: ${details.name}</h5>
   <h5>Brand: ${details.brand}</h5>
   <h4 class="text-info fw-bold" >MainFeatures:</h4>
   <h6>Release Date: ${details.releaseDate?details.releaseDate:'no releasedate found'}</h6>
     <h6 class="card-title">Chipset: ${details.mainFeatures.chipSet}</h6>
     <h6 class="card-title">Displaysize: ${details.mainFeatures.displaySize}</h6>
     <h6 class="card-text">Memory: ${details.mainFeatures.memory}</h6>
     <h6 class="card-text">Sensors: ${details.mainFeatures.sensors.slice(0,5)}</h6>
     <h6>Slug: ${details.slug}</h6>
     
        
       
        <h4 class="text-info fw-bold">Others:</h4>
        <h5>Bluetooth: ${details.others.Bluetooth}</h5>
        <h5>GPS: ${details.others.GPS}</h5>
        <h5>NFC: ${details.others.NFC}</h5>
        <h5>Radio: ${details.others.Radio}</h5>
        <h5>USB: ${details.others.USB}</h5>
        <h5>WLAN: ${details.others.WLAN}</h5>
      
     
   </div>
   `
   detailsSite.appendChild(div)
   

}

