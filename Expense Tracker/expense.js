let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
    const title = document.getElementById("title").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    //validation
    if (!title || isNaN(amount) || amount <= 0) {
        alert("Enter valid data");
        return;
    }

    const expense = {
        id: Date.now(),
        title,
        amount,
        category
    };

    expenses.push(expense);
    saveExpenses();
    renderExpenses();
    clearForm();
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    saveExpenses();
    renderExpenses();
}

function renderExpenses() {
    const list = document.getElementById("expense-list");
    const totalEl = document.getElementById("total");

    list.innerHTML = "";
    let total = 0;

    expenses.forEach(exp => {
        total += exp.amount;

    const li = document.createElement("li");
    
    li.innerHTML = `
    ${exp.title} (${exp.category})
    <span>₹${exp.amount}</span>
    <button onclick="deleteExpense(${exp.id})">Delete</button>
    ` ;
    list.appendChild(li);
});
    totalEl.textContent = total.toFixed(2);
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}

renderExpenses();




