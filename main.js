//https://dog.ceo/api/breeds/list/all/
async function getDogs() {
    const resp = await fetch('https://dog.ceo/api/breeds/list/all')
    const dogs = await resp.json()
    // console.log(dogs);
   const breeds = dogs.message
   dogList(breeds)
    }


    function dogList(dogs) {
        const container = document.getElementById('dogs-container')
        container.innerHTML=''
        for (const dog in dogs) {
            const nameContainer = document.createElement('li')
            const dogName = document.createTextNode(dog)
            nameContainer.appendChild(dogName)
            container.appendChild(nameContainer)
            
            }
    }