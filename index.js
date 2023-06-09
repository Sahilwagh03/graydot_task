// Get the lists and boxes from the DOM
let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let resetBtn = document.getElementById('btn');

// Loop through each list element
for (let list of lists) {
    // Add event listener for dragstart event
    list.addEventListener('dragstart', (e) => {
        let selected = e.target; // Store the dragged element

        // Add event listener for dragover event on the right box
        rightBox.addEventListener('dragover', (e) => {
            e.preventDefault(); // Prevent default behavior
        });

        // Add event listener for drop event on the right box
        rightBox.addEventListener('drop', (e) => {
            rightBox.appendChild(selected); // Append the selected element to the right box
            selected = null; // Reset the selected element
        });

        // Add event listener for dragover event on the left box
        leftBox.addEventListener('dragover', (e) => {
            e.preventDefault(); // Prevent default behavior
        });

        // Add event listener for drop event on the left box
        leftBox.addEventListener('drop', (e) => {
            leftBox.appendChild(selected); // Append the selected element to the left box
            selected = null; // Reset the selected element
        });
    });
}

// Add event listener for click event on the reset button
resetBtn.addEventListener('click', () => {
    while (rightBox.firstChild) {
        leftBox.appendChild(rightBox.firstChild); // Move all elements from right box to left box
    }
});
