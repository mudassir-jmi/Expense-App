// get the heading element
const heading = document.querySelector("#headingTotal")
// get input element
const inputElement = document.querySelector("#inputAmount");
// get the reference to desc element
const inputDesc = document.querySelector("#inputDesc")
// get the reference to table
const expenseTable = document.querySelector("#expenseTable")
// initialize value of expense at 0
let totalExpense = 0;
// set the heading element to totalExpense
heading.textContent = totalExpense;

// AllExpense at one place
const allExpenses = [];
//onButtonClick add inputAmount to totalExpense
function addExpense() {
    const expenseItem = {};
    // read value from inputAmount
    const textAmount = inputElement.value;
    // read the description from inputDesc
    const textDesc = inputDesc.value;
    console.log({textDesc, textAmount})
    // convert it to number
    const expense = parseInt(textAmount, 10);
    // put it in object
    expenseItem.desc = textDesc;
    expenseItem.amount = expense;
    expenseItem.moment = new Date();

    allExpenses.push(expenseItem);
    // add that value to totalExpense
    totalExpense = totalExpense + expense;
    // set the value to totalExpense
    heading.textContent = totalExpense;

    const allExpenseHTML = allExpenses.map(expense => {
        return `<li class="list-group-item d-flex justify-content-between">
                <div class="d-flex flex-column">
                   ${expense.desc}
                    <small class="text-muted">${expense.moment.toLocaleDateString('en-US',{
                        year:'numeric', 
                        month:'long', 
                        day:'numeric'})}
                    </small>
                </div>
                <div>
                    <span class="px-5">
                        ${expense.amount}
                    </span>
                    <button type="button" onclick="deleteItem(${expense.moment.valueOf()})"
                    class="btn btn-outline-danger btn-sm">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>`
        // createListItem(expense);
    });
    const joinedAllExpend = allExpenseHTML.join("");
    expenseTable.innerHTML = joinedAllExpend;
}
// Get the btn element
const element = document.querySelector("#addExpense");
// listen to click event
element.addEventListener('click',addExpense, false);
// Delete Item
function deleteItem(dateValue) {
const newArr = [];
   for(let i = 0; i < allExpenses.length; i++) {
    if(allExpenses[i].moment.valueOf() !== dateValue) {
        newArr.push(allExpenses[i]);
    }
   }
       const allExpenseHTML = newArr.map(expense => {
        return `<li class="list-group-item d-flex justify-content-between">
                <div class="d-flex flex-column">
                   ${expense.desc}
                    <small class="text-muted">${expense.moment.toLocaleDateString('en-US',{
                        year:'numeric', 
                        month:'long', 
                        day:'numeric'})}
                    </small>
                </div>
                <div>
                    <span class="px-5">
                        ${expense.amount}
                    </span>
                    <button type="button" onclick="deleteItem"
                    class="btn btn-outline-danger btn-sm">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>`
    });

const joinedAllExpend = allExpenseHTML.join("");
expenseTable.innerHTML = joinedAllExpend;
}
// create listItem 
// function createListItem(desc, amount, moment) {
//             return `<li class="list-group-item d-flex justify-content-between">
//                 <div class="d-flex flex-column">
//                    ${desc}
//                     <small class="text-muted">${getDateString(moment)}</small>
//                 </div>
//                 <div>
//                     <span class="px-5">
//                         ${amount}
//                     </span>
//                     <button type="button" class="btn btn-outline-danger btn-sm">
//                         <i class="fas fa-trash-alt"></i>
//                     </button>
//                 </div>
//             </li>`
// }
