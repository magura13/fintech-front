document.addEventListener('DOMContentLoaded', function() {
    let totalBalance = 0;

    const updateBalance = () => {
        document.getElementById('totalBalance').textContent = `$${totalBalance.toFixed(2)}`;
    };

    const addIncomeForm = document.getElementById('addIncomeForm');
    if (addIncomeForm) {
        addIncomeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
            totalBalance += incomeAmount;
            updateBalance();
            addIncomeForm.reset();
        });
    }

    const addExpenseForm = document.getElementById('addExpenseForm');
    if (addExpenseForm) {
        addExpenseForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
            totalBalance -= expenseAmount;
            updateBalance();
            addExpenseForm.reset();
        });
    }

    updateBalance();
});
