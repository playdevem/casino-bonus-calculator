// Bonus Calculator
if (document.getElementById('deposit') && 
    document.getElementById('bonus') && 
    document.getElementById('wager') && 
    document.getElementById('result')) {
    
    function calculateBonus() {
        // Get input values
        const deposit = parseFloat(document.getElementById('deposit').value);
        const bonusPercentage = parseFloat(document.getElementById('bonus').value);
        const wagerMultiplier = parseFloat(document.getElemenxtById('wager').value);

        // Validate inputs
        if (isNaN(deposit) || isNaN(bonusPercentage) || isNaN(wagerMultiplier)) {
            document.getElementById('result').innerHTML = 'Please fill in all fields with valid numbers.';
            return;
        }

        // Calculate bonus
        const bonusAmount = deposit * (bonusPercentage / 100);
        const totalAmount = deposit + bonusAmount;
        const wagerAmount = (deposit + bonusAmount) * wagerMultiplier;

        // Display results
        const resultHTML = `
            <h3>Calculation Results:</h3>
            <p>Deposit Amount: $${deposit.toFixed(2)}</p>
            <p>Bonus Amount: $${bonusAmount.toFixed(2)}</p>
            <p>Total Amount: $${totalAmount.toFixed(2)}</p>
            <p>Wagering Requirement: $${wagerAmount.toFixed(2)}</p>
            <p>You need to wager ${wagerMultiplier}x your deposit + bonus amount.</p>
        `;

        document.getElementById('result').innerHTML = resultHTML;
    }

    // Add event listeners to inputs
    document.getElementById('deposit').addEventListener('input', calculateBonus);
    document.getElementById('bonus').addEventListener('input', calculateBonus);
    document.getElementById('wager').addEventListener('input', calculateBonus);
}
