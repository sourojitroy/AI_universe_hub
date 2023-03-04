const loadCardData = () => {
    toggleSpinner(true)
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(res => res.json())
        .then(data =>{
            const cardSlice=data.data.tools.slice(0,6);
            showCardData(cardSlice)
        } )
}
const showAll = document.getElementById('show-all');
const showCardData = (tools) => {

    for (const tool of tools) {

         const cardList = document.getElementById('card-list');
        
        const cardDiv = document.createElement('div');

        cardDiv.classList.add('card', 'w-96', 'bg-base-100', 'shadow-xl')
        cardDiv.innerHTML = `
                    <figure><img src="${tool.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Features</h2>
                        
                        <ul>
                        <li>1.${tool.features[0]}<li/>
                        <li>2.${tool.features[1]}<li/>
                        <li>3.${tool.features[2]}<li/>
                        <ul/>
                    <div>
                    <hr> 
                  <div class= justify-end items-center >
                  <div> 
                  <div>
                      <div class="card-title">
                              ${(tool.name)}
                      </div>
                      <div>
                          <i class="fa-regular fa-calendar-days"></i>
                          ${tool.published_in}
                      </div>
                  </div>
              </div>
              <div class='flex justify-end'>
                  <div>
                  <label for="my-modal-5"><i class="fa-solid fa-arrow-right" onclick="loadModalData('${tool.id}')"></i></label>
                  </div>
              </div>
                  </div>
                    
                      
        `;
        cardList.appendChild(cardDiv)

    }
    toggleSpinner(false)
}

document.getElementById('btn-show-all').addEventListener('click',function(){
    toggleSpinner(true)
    const cardList=document.getElementById('card-list');
    cardList.innerHTML='';
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(res => res.json())
        .then(data =>showCardData(data.data.tools))
        showAll.classList.add('hidden')


})


const loadModalData=(id)=>{
    toggleSpinner(true)
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => showModalData(data.data))
}

// const showModalData=(dataAll)=>{
//     console.log(dataAll)
//     const modalCard=document.getElementById('modal-card');
//     modalCard.textContent='';
//     const modalDiv=document.createElement('div')
//     modalDiv.classList.add('md:flex','gap-10')
//     modalDiv.innerHTML=`
//     <div class="border-solid border-2 border-red-500 bg-red-50 p-10">
//         <h2 class="font-semibold">${dataAll.description}</h2>
//         <div class="grid grid-cols-3 gap-5 text-center">
//             <div class="bg-white">                               
//                 <h3 class="px-2 py-10 text-green-500 font-semibold"><span>${dataAll.pricing? dataAll.pricing[0].price : "Faul"}</span> <br> <span>${dataAll.pricing[0].plan}</span></h3>
//              </div>
//             <div class="bg-white">
//                 <h3 class="px-2 py-10 text-yellow-500 font-semibold"><span>${dataAll.pricing[1].price}</span> <br> <span>${dataAll.pricing[1].plan}</span></h3>
//             </div>
//             <div class="bg-white">
//                 <h3 class="px-2 py-10 text-red-500 font-semibold"><span>${dataAll.pricing[2].price}</span> <br> <span>${dataAll.pricing[2].plan}</span></h3>
//             </div>
//         </div>
//     <div class="flex gap-20">
//         <div>
//             <h3 class= "font-semibold text-2xl mb-4">Features</h3>
//             <ul>
//             <li>${dataAll.features[1].feature_name}</li>
//             <li>${dataAll.features[2].feature_name}</li>
//             <li>${dataAll.features[3].feature_name}</li>
//             </ul>
//         </div>
//         <div>
//          <h3 class= "font-semibold text-2xl mb-4">Integrations</h3>
//             <ol>
//                 <li>${dataAll.integrations[0]}</li>
//                 <li>${dataAll.integrations[1]}</li>
//                 <li>${dataAll.integrations[2]}</li>
//             </ol>
//         </div>
//     </div>
// </div>
// <div class="border-solid border-2 border-slate-100 p-10">
// <div >
// <img class="" src="${dataAll.image_link[0]}">
// <button class="btn btn-error text-white absolute top-8 right-20">${dataAll.accuracy.score*100} % accuracy</button>
// </div>  
//     <h3 class="font-semibold text-2xl text-center">${dataAll.input_output_examples[0].input}"</h3>
//     <p class="text-center">"${dataAll.input_output_examples[0].output}"</p>
// </div>
// <div class="modal-action">
//     <label for="my-modal-5" class="btn">X</label>
// </div>
//     `;
//     modalCard.appendChild(modalDiv)
//     toggleSpinner(false);
// }

// const toggleSpinner = isLoading => {
//     const loader = document.getElementById('spinner');
//     if (isLoading) {
//         loader.classList.remove('hidden');
//     }
//     else {
//         loader.classList.add('hidden')
//     }
// }
