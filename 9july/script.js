let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const balanceEl = document.getElementById('balanceAmount');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');
const form = document.getElementById('form');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const transactionList = document.getElementById('transactions');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const text = desc.value.trim();
  const amt = Number(amount.value.trim());

  if (text === '' || isNaN(amt)) {
    alert('Please fill both fields properly.');
    return;
  }

  const newTxn = {
    id: Date.now(),
    text: text,
    amount: amt
  };

  transactions.push(newTxn);
  updateLocalStorage();
  renderTransactions();
  form.reset();
});


function renderTransactions() {
  transactionList.innerHTML = '';

  transactions.forEach(txn => {
    const li = document.createElement('li');
    li.classList.add(txn.amount > 0 ? 'income' : 'expense');
    li.innerHTML = `
      ${txn.text} <span>₹${txn.amount}</span>
      <button class="delete-btn" onclick="deleteTransaction(${txn.id})">❌</button>
    `;
    transactionList.appendChild(li);
  });

  updateBalance();
}


function updateBalance() {
  const amounts = transactions.map(t => t.amount);

  const total = amounts.reduce((acc, val) => acc + val, 0);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0);
  const expense = amounts.filter(a => a < 0).reduce((a, b) => a + b, 0);

  balanceEl.innerText = total;
  incomeEl.innerText = income;
  expenseEl.innerText = Math.abs(expense);
}


function deleteTransaction(id) {
  transactions = transactions.filter(txn => txn.id !== id);
  updateLocalStorage();
  renderTransactions();
}


function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}


renderTransactions();
