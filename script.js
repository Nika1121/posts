const container = document.querySelector("#container");

function createPersons(data) {
    console.log(data);
    const { persons } = data;
    
    persons.map( function(person) {
        container.insertAdjacentHTML("afterbegin", `
        <div class="col">
            <div class="card">
                <div class="card-header">
                  ${person.name}
                </div>
                <div class="card-body">
                  <h5 class="card-title">${person.gender}</h5>
                  <p class="card-text">phone number:${person.phoneNumber[0].number}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              
        `)
    })
}

fetch("data.json")
    .then((response) => response.json())
    .then((json) => createPersons(json));