async function loadData(){
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    let cards = data.data.tools

    displayData(cards)
}
loadData()

function displayData(cards){

    cards.forEach(card => {
        console.log(card)


        let aiCard = document.createElement("div")
        aiCard.innerHTML = `
        
        <div class="card bg-base-100 shadow-xs h-[500px] p-3">
        <figure class="mb-3 rounded-md border h-54"><img class="rounded-md" src="${card.image}" alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <ol id="ol" class="list-decimal text-sm px-5">
            <li>${card.features[0]}</li>
            <li>${card.features[1]}</li>
            <li>${card.features[3]}</li>
          </ol>
          <hr class="my-3">

          <div  class="flex justify-between">
                    <div>
                            <h2 class="font-semibold text-2xl">${card.name}</h2>
                            <p><i class="far fa-calendar"></i>
                            <span>${card.published_in}</span>
                            </p>
                    </div>

                    <div class="card-actions justify-end">
                            <button class="btn btn-md btn-link no-underline hover:no-underline focus:ring-0"><i class="fas fa-arrow-circle-right text-2xl"></i></button>
                    </div>
          </div>
        </div>
      </div>
        `

        document.getElementById("card-container").appendChild(aiCard)
    });
}