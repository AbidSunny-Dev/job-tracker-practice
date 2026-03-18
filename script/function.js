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


// filtered-Section is here

const filteredSection = document.getElementById('filtered-section');


// -----

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



// filtered Section interaction


if(id=='all-filter-btn'){
  
  allCards.classList.remove('hidden');
  filteredSection.classList.add('hidden');
  
  
}else if(id =='interview-filter-btn'){
  
  
  filteredSection.classList.remove('hidden');
  allCards.classList.add('hidden');




}













}

// -----------------------


// main delegation starts here

allCards.addEventListener('click' , function(event){


  if(event.target.classList.contains('interview-btn')){



    
const parentCard = event.target.parentNode.parentNode ;


 const jobTitle = parentCard.querySelector('.card-title').innerText;
 const skillTitle = parentCard.querySelector('.skill-title').innerText;
 const salaryTitle = parentCard.querySelector('.salary-text').innerText;
 const jobInfo = parentCard.querySelector('.job-info').innerText;

 const jobStatusBadge = parentCard.querySelector('.job-status-badge');

//  status style

 jobStatusBadge.classList.remove("bg-[#EEF4FF]" , "text-[#64748B]") ;
 jobStatusBadge.classList.add("bg-[#10B981]" , "text-white") ;
 jobStatusBadge.innerText='Applied';
 
// ---
 
 const cardInfo={

  jobTitle ,

  skillTitle ,

  salaryTitle ,
 
  jobInfo ,

  jobStatus:'Applied',
  
 }

 const interViewExist = interviewList.find(item=> item.jobTitle == cardInfo.jobTitle) ;

  if(!interViewExist){

    interviewList.push(cardInfo) ;
  }

  calculateCount();

  renderInterview();




  }


})


function renderInterview(){

 filteredSection.innerHTML ='' ;


   for(let interview of interviewList){

  
 let div = document.createElement('div') ;

 div.className = 'card w-full bg-base-100 rounded-xl shadow p-6 mt-5' ;

 div.innerHTML =`
 
 <div class="flex justify-between">
              <!-- main-part-1 -->
              <div class="card-left space-y-5">
                <div>
                  <h2
                    class="text-[18px] font-semibold text-[#002C5C] card-title"
                  >
                    ${interview.jobTitle}
                  </h2>
                  <p class="text-[#64748B] skill-title">
                    ${interview.skillTitle}
                  </p>
                </div>
                <p class="text-[#64748B] salary-text">
                  ${interview.salaryTitle}
                </p>

                <button
                  class="job-status-badge btn bg-[#10B981] w-32 text-white"
                >
                  ${interview.jobStatus}
                </button>

                <p class="text-[#64748B] job-info">
                ${interview.jobInfo}
                </p>

                <div class="card-btn-group gap-3 flex">
                  <button
                    class="interview-btn btn btn-outline text-[#10B981] hover:bg-[#10B981] hover:text-white"
                  >
                    Interview
                  </button>
                  <button
                    class="rejected-btn btn btn-outline text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
                  >
                    Rejected
                  </button>
                </div>
              </div>

              <!-- main-part-2 -->
              <div class="card-right">
                <div
                  class="h-8 w-8 rounded-full bg-base-100 shadow flex items-center justify-center hover:bg-red-500 group"
                >
                  <button
                    class="text-[#64748B] cursor-pointer group-hover:text-white"
                  >
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
 
 
 
 `

 

    filteredSection.appendChild(div) ;

  

   } 



}