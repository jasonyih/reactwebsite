function openResumeOverlay() {
    document.getElementById("resumeOverlay").style.display = "block";
}

// Function to close the resume modal
function closeResumeOverlay() {
    document.getElementById("resumeOverlay").style.display = "none";
}

// Event listener for opening the modal when the link is clicked
document.getElementById("openResumeLink").addEventListener("click", function(event) {
    event.preventDefault();
    openResumeOverlay();
});

// Event listener for closing the modal when the close button is clicked
document.getElementById("closeResumeButton").addEventListener("click", function() {
    closeResumeOverlay();
});

const navElement1 = document.querySelector('.li1'); // select the nav element
const listItem1 = document.querySelector('.nav1');

navElement1.addEventListener('mouseover', () => { // add event listener for when the mouse is over the nav element
    listItem1.style.color = 'white'; // change the text color of the list item to red
  });
  
navElement1.addEventListener('mouseout', () => { // add event listener for when the mouse is not over the nav element
    listItem1.style.color = '#777'; // change the text color of the list item back to black
    });

const navElement2 = document.querySelector('.li2'); // select the nav element
const listItem2 = document.querySelector('.nav2');

navElement2.addEventListener('mouseover', () => { // add event listener for when the mouse is over the nav element
    listItem2.style.color = 'white'; // change the text color of the list item to red
    });
    
navElement2.addEventListener('mouseout', () => { // add event listener for when the mouse is not over the nav element
    listItem2.style.color = '#777'; // change the text color of the list item back to black
    });

const navElement3 = document.querySelector('.li3'); // select the nav element
const listItem3 = document.querySelector('.nav3');

navElement3.addEventListener('mouseover', () => { // add event listener for when the mouse is over the nav element
    listItem3.style.color = 'white'; // change the text color of the list item to red
    });
    
navElement3.addEventListener('mouseout', () => { // add event listener for when the mouse is not over the nav element
    listItem3.style.color = '#777'; // change the text color of the list item back to black
    });

const navElement4 = document.querySelector('.li4'); // select the nav element
const listItem4 = document.querySelector('.nav4');

navElement4.addEventListener('mouseover', () => { // add event listener for when the mouse is over the nav element
    listItem4.style.color = 'white'; // change the text color of the list item to red
    });
    
navElement4.addEventListener('mouseout', () => { // add event listener for when the mouse is not over the nav element
    listItem4.style.color = '#777'; // change the text color of the list item back to black
    });