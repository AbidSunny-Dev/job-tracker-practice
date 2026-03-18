// container are here

let interviewList = [];

let rejectedList = [];

// -----------------

// all elemnts are here

let total = document.getElementById("total");

let interviewCount = document.getElementById("interview-count");

let rejectedCount = document.getElementById("rejected-count");

const allCards = document.getElementById("allCards");

// filtered button are here

const allFilterBtn = document.getElementById("all-filter-btn");

const interviewFilterBtn = document.getElementById("interview-filter-btn");

const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// ---------------------

// all Universal Function are here

function calculateCount() {
  total.innerText = allCards.children.length;

  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
  // added base color initally

  allFilterBtn.classList.add("bg-base-100");
  interviewFilterBtn.classList.add("bg-base-100");
  rejectedFilterBtn.classList.add("bg-base-100");

  // removed selected color

  allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");

  // adding color to selected id

  const selected = document.getElementById(id);

  selected.classList.add("bg-[#3B82F6]", "text-white");
}

// -----------------------
