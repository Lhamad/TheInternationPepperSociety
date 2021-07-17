

async function getstoredata(){
    const response = await fetch('orders1.csv');
    const data = await response.text();

    const rows = data.split('\r').slice(1);

    rows.forEach( elt => { 
        const row = elt.split(',');
        const peppertype=row[0];
        xlabels.push(peppertype);
        const orderqty=row[1];
        ypepperdata.push(orderqty)
        console.log(peppertype, orderqty)

    })
}
const xlabels=[];
const ypepperdata=[];

createchart();

async function createchart(){
    await getstoredata()
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Order Qty',
            data: ypepperdata,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scaleShowValues: true,
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }
});}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }