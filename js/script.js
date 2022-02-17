function myIncomeInput(){
    let incomeInput = document.getElementById('income-input').value;
    let incomeValue = parseFloat(incomeInput);

    if(incomeValue <= 0 || isNaN(incomeInput)){
        alert('put a valid number please');
    }
    else{
        return incomeValue;
    };
}
// expenses input
document.getElementById('calculate-btn').addEventListener('click',function(){
    // income input
    let myIncome = myIncomeInput();

    // food cost calc 
    const foodCost = document.getElementById('food-cost').value;
    const foodCostValue = parseFloat(foodCost);
    // Rent cost calc 
    const rentCost = document.getElementById('rent-cost').value;
    const rentCostValue = parseFloat(rentCost);
    // clothe cost calc 
    const clotheCost = document.getElementById('clothe-cost').value;
    const clotheCostValue = parseFloat(clotheCost);

    const ExpenseTotal = foodCostValue + rentCostValue + clotheCostValue;
    
    // update expenses
    const expenses = document.getElementById('expenses');
    const expensesText = expenses.innerText;
    const expensesValue = parseFloat(expensesText);
    const expensesTotal = expensesValue + ExpenseTotal;

    expenses.innerText = expensesTotal;

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceValue = parseFloat(balanceText);
    const balanceCalculation = myIncome - expensesTotal;
    const balanceOutput = balanceCalculation + balanceValue;
    
    balance.innerText = balanceOutput;

    if (myIncome < expensesTotal) {
        alert("please valid input required");
      }

    // error handling
    if(foodCost,rentCost,clotheCost <= 0 || isNaN(foodCost,rentCost,clotheCost)){
        alert('Number input is required');
    };
});

// save btn works

document.getElementById('save-btn').addEventListener('click',function(){
    // income function call 
    let myIncome = myIncomeInput();
    // percentage calculation 
    const saveInput = document.getElementById('save-input').value;
    const saveValue = parseFloat(saveInput);
    const percentageCalc = (saveValue * myIncome) / 100;
    
    // saving amount show
    const SaveAmount = document.getElementById('save-amount');
    const SaveAmountText = SaveAmount.innerText;
    const SaveAmountValue = parseFloat(SaveAmountText);
    const SaveAmountTotal = SaveAmountValue + percentageCalc;
    
    SaveAmount.innerText = SaveAmountTotal;

    // Remaining balance
    
    const remainingAmount = document.getElementById("remains-balance");
    const balanceOutput = document.getElementById("balance").innerText;
    const totalRemaining = balanceOutput - SaveAmountTotal;
    remainingAmount.innerText = totalRemaining;

    if (balanceOutput < SaveAmountTotal) {
        alert("input valid number!!");
        remainingAmount.innerText = 0;
      }
    
});