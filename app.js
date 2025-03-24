const button = document.getElementById("button");
const Company = document.getElementById("Company");
const Model = document.getElementById("Model");


let i = 1;


button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/cars')
        .then(function (response) {
            button.textContent = "NEXT!";
            Model.textContent = "";
            Company.textContent = "Car: "+response.data[i].make;
            Model.textContent = "Model: "+response.data[i].model;
            i++;

        })
        .catch(function (error) {
            console.log(error)
        });
}