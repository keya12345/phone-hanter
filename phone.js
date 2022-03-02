//spinner:
const toggleSpinner=displayStyle=>{
    document.getElementById('spinner').style.display=displayStyle
}
const firstError=displayStyle=>{
    document.getElementById('first-error').style.display=displayStyle
}
const secondError=displayStyle=>{
    document.getElementById('second-error').style.display=displayStyle
}
const detailsStyle=displayStyle=>{
    document.getElementById('details-site').style.display=displayStyle
}

//load phone:
const loadPhone=()=>{
    const searchBox = document.getElementById('search-box')
    //display spinner
    toggleSpinner('block')
    const searchText= searchBox.value
    searchBox.value= ''
    if(searchText.length===0){
        firstError('block')
        secondError('none')
        detailsStyle('none')
        
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
         secondError('block')
         firstError('none')
        detailsStyle('none')
        
        
    }
   

    
//forEach use
 phones.slice(0,20).forEach(phone => {
     firstError('none')
     secondError('none')
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
toggleSpinner('none')

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
        <h5>Bluetooth: ${details?.others?.Bluetooth? details?.others?.Bluetooth:"No found"}</h5>
        <h6>GPS: ${details?.others?.GPS? details?.others?.GPS:"no found"}</h6>
        
        <h6>USB: ${details?.others?.USB? details?.others?.USB:"no found"}</h6>
        <h6>WLAN: ${details?.others?.WLAN? details?.others?.WLAN:"no found"}</h6>
      
     
   </div>
   `
   detailsSite.appendChild(div)
   
    detailsStyle('block')
}

