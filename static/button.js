// Add an event listener to the button
document.getElementById('button').addEventListener('click', function() {
    // Toggle the display of the highest cost section
    const highestCostSection = document.getElementById('highestCostSection');
    highestCostSection.style.display = highestCostSection.style.display === 'none' ? 'block' : 'none';
});
