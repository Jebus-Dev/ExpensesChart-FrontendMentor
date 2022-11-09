
export const res = await fetch('./data.json')
export const data = await res.json()

const divGraphs = document.querySelector('#graphBar');

// day of the week
const date = new Date;
const dayym = date.getDay();
const daysWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const expensesWeek = () => {
      let sum = 0;
      data.forEach(dt => {
            sum += dt.amount;
      })
      return sum;
}
const balance = () => {
      const blc = 1000;
      return blc-expensesWeek();
}
const currentDay = () => {
      for (let i = 0; i < daysWeek.length; i++) {
            if (i === dayym) {
                  return daysWeek[i];     
            }     
      }
}

data.forEach ( dy => {    
      const divBars = `<div class="bars" id="${dy.day}"><span class="hovAmount">$${dy.amount}</span></div>${dy.day}`
      const bars = document.createElement('div');
      bars.classList.add('divbar');
      
      divGraphs.append(bars);
      bars.innerHTML = divBars;
      
      const graphPrint = document.getElementById(`${dy.day}`);
      graphPrint.style.height = `${dy.amount*2}px`;
})

document.getElementById(currentDay()).classList.add('barCurrentDay');
document.querySelector("#totalBalance").innerHTML = balance()+'$';
document.querySelector("#totalThisMonth").innerHTML = expensesWeek()+'$'; 
