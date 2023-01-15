const recaudacion = document.querySelector(".recaudacion")
const ctx = document.getElementById('myChart');
document.querySelector(".addParam").addEventListener("click", addParam)
document.querySelector(".showResult").addEventListener("click", showResult)

let parametros =[];
let valores = [];

function addParam(event){
  event.preventDefault();
  let html = document.querySelector(".container__parametros").innerHTML;
  let newHtml = ` <div class="div__parametros"><input type="text" name="" id="" class="parametro" placeholder="Parametro"><input type="number" name="" id="" class="valor" placeholder="Valor"></div>`;
  document.querySelector(".container__parametros").innerHTML = html + newHtml; 

}



let datosMes = {
    label: "Ventas por mes",
    data: valores,
    borderWidth: 3,
    backgroundColor: ['rgb(255, 51, 0)'],
    borderColor: ['rgb(0, 0, 0)'],
};


function addTotal(total){
  let totalElement = document.createElement("span")
  totalElement.textContent=`Total: ${total}`
  recaudacion.appendChild(totalElement)
}

function showResult(){
  document.querySelectorAll(".parametro").forEach((parametro, i)=>{
    parametros.push(parametro.value)
    valores.push(Number(document.querySelectorAll(".valor")[i].value))
  })

  addTotal(total)

  const graph = new Chart(ctx, {
    type: 'line',
    data: {
      labels: parametros,
      datasets: [datosMes],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

let total=0;
for(let i=0; i<=datosMes.data; i++){
  total+=Number(datosMes.data[i]);
}




