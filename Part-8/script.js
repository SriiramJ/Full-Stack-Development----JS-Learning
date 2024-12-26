//Example 1:Accessing DOM elements

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is now changed";
  });

// Example 2: Traversing the DOM

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// Example 3: Manipulating DOM Elements

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "red";
  coffeeType.style.padding = "5px";
});

// Example 4: Creating and Inserting Elements

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// Example 5: Removing DOM Elements

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// Example 6: Event Handling in the DOM

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Hello");
  });

// Example 7: Event Delegation

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

//Example 8: Form Handling

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent =
      `Feedback is:  ${feedback}`;
    feedbackDisplay.backgroundColor = "yellow";
    feedbackDisplay.style.fontWeight = "bolder";
  });

// Example 9: DOM Content Loaded

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// 10.Example 10: CSS Classes Manipulation

document.getElementById("toggleHighlight").addEventListener('click',
  function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight")
  }
)