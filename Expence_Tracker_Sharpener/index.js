document.getElementById('expForm').addEventListener('submit', addExpense);

const expenses = JSON.parse(localStorage.getItem('expenses'))||[];

function addExpense(e){
   e.preventDefault();

    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let amount = document.getElementById('amount').value;

    if(type==""||name==""||date==""||amount==""){
        alert("All field are compulsary");
    }

    if(type != 'chosseone'
    && name.length>0
    && date != 0
    && amount>0){
        
        const Expense = {
            type,
            name,
            date,
            amount,
            id: expenses.length>0 ? expenses[expenses.length-1].id + 1 : 1,
        }

        expenses.push(Expense);

        localStorage.setItem('expenses', JSON.stringify(expenses));

        showExpenses();

        
    }
    document.getElementById('expForm').reset();
    
}

const showExpenses = () =>{
    
     const expensetable = document.getElementById('expenseTable');

     expensetable.innerHTML='';

     for(let i=0;i<expenses.length;i++){
         expensetable.innerHTML += `  <tr>
         <td>${expenses[i].type}</td>
         <td>${expenses[i].name}</td>
         <td>${expenses[i].date}</td>
         <td>$${expenses[i].amount}</td>
         <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
             Delete</td>
     </tr>
 `;
     }


}

const deleteExpense=(id)=>{
    for(let i=0;i<expenses.length;i++){
          if(expenses[i].id==id){
            expenses.splice(i,1);
          }
    }
    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
}
showExpenses();