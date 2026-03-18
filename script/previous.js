
let interviewContainer = [];
let rejectedContainer = [];


// got counting element
let total = getElement("total");
let interviewCount = getElement("interview-count");
let rejectedCount = getElement("rejected-count");


// got the toogle buttons

const allFilterBtn = getElement('all-filter-btn');
const interviewFilterBtn = getElement('interview-filter-btn');
const rejectedFilterBtn = getElement('rejected-filter-btn');

const filteredSection = getElement('filtered-section') ;

const filteredCardContainer = getElement('filtered-card-container') ;

const allCards = getElement('allCards');






// got the main container for event delegation
const mainContainer = document.querySelector('main');


// geting total count of jobs

const totalJobCount = getElement("card-container") ;

function calculateCount(){
    total.innerText = totalJobCount.children.length ;
    
    interviewCount.innerText = interviewContainer.length ;
    rejectedCount.innerText = rejectedContainer.length ;

}





function toggleStyle(id){

    // adding bg-base-100 to all
                        
                        allFilterBtn.classList.add('bg-base-100');
                        interviewFilterBtn.classList.add('bg-base-100');
                     rejectedFilterBtn.classList.add('bg-base-100');



    // removed the active bg
allFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
interviewFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
rejectedFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');



// adding style to selected

const selected = document.getElementById(id) ;

selected.classList.add('bg-[#3B82F6]' , 'text-white');

if(id =='interview-filter-btn'){

   allCards.classList.add('hidden') ;

   filteredSection.classList.remove('hidden');
    

}else if(id=='all-filter-btn'){

   allCards.classList.remove('hidden') ;
     
   filteredSection.classList.add('hidden');



}else if( id=='rejected-filter-btn'){
  
    allCards.classList.add('hidden') ;
     filteredSection.classList.remove('hidden');
    

   
}




}

mainContainer.addEventListener('click' , function(event){


   if(event.target.classList.contains('interview-btn')){
 
 const parenNode = event.target.parentNode.parentNode ;

 const jobTitle = parenNode.querySelector('.card-title').innerText;
 const skillTitle = parenNode.querySelector('.skill-title').innerText;
 const salaryTitle = parenNode.querySelector('.salary-text').innerText;
 const jobInfo = parenNode.querySelector('.job-info').innerText;

 const jobStatusBadge = parenNode.querySelector('.job-status-badge');
 
  jobStatusBadge.innerText = 'Applied';
 
  jobStatusBadge.classList.remove("bg-[#EEF4FF]" , "text-[#64748B]") ;
  jobStatusBadge.classList.add("bg-[#10B981]" , "text-white") ;




 const cardInfo = {
    jobTitle,

    skillTitle,

    salaryTitle,
    
    jobInfo,
    jobStatus :'Applied'
 }


 const interviewExist = interviewContainer.find(item=> item.jobTitle == cardInfo.jobTitle)

 if(!interviewExist){
    interviewContainer.push(cardInfo);
 }

  rejectedContainer = rejectedContainer.filter(
    item => item.jobTitle !== cardInfo.jobTitle
);  


 calculateCount();

 renderInterview() ;
          
   }else if(event.target.classList.contains('rejected-btn')){
 
 const parenNode = event.target.parentNode.parentNode ;

 const jobTitle = parenNode.querySelector('.card-title').innerText;
 const skillTitle = parenNode.querySelector('.skill-title').innerText;
 const salaryTitle = parenNode.querySelector('.salary-text').innerText;
 const jobInfo = parenNode.querySelector('.job-info').innerText;

 const jobStatusBadge = parenNode.querySelector('.job-status-badge');
 
  jobStatusBadge.innerText = 'Rejected';
 
  jobStatusBadge.classList.remove("bg-[#EEF4FF]" , "text-[#64748B]") ;
  jobStatusBadge.classList.add("bg-[#EF4444]" , "text-white") ;




 const cardInfo = {
    jobTitle,

    skillTitle,

    salaryTitle,
    
    jobInfo,
    jobStatus :'Rejected'
 }


 const rejectExist = rejectedContainer.find(item=> item.jobTitle == cardInfo.jobTitle)

 if(!rejectExist){
    rejectedContainer.push(cardInfo);
 }

interviewContainer = interviewContainer.filter(
    item => item.jobTitle !== cardInfo.jobTitle
);

 calculateCount();

 renderRejected() ;
          
   }






});


function renderInterview(){
   filteredCardContainer.innerHTML = '' ;

   for( let interview of interviewContainer){

      console.log(interview);
      
      let div = document.createElement('div') ;

    div.className = 'card w-full bg-base-100 rounded-xl shadow p-6';

      div.innerHTML =`

      
            <div class="flex justify-between">
              
              <!-- main-part-1 -->
              <div class="card-left space-y-5">
                <div>
                  <h2 class="text-[18px] font-semibold text-[#002C5C] card-title">
                    ${interview.jobTitle}
                  </h2>
                  <p class="text-[#64748B] skill-title">${interview.skillTitle}</p>
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
                  <button  class="interview-btn btn btn-outline text-[#10B981] hover:bg-[#10B981] hover:text-white">Interview</button>
                  <button  class="rejected-btn btn btn-outline text-[#EF4444] hover:bg-[#EF4444] hover:text-white">Rejected</button>
                </div>
              </div>

                    <!-- main-part-2 -->
              <div class="card-right">

                <div class="h-8 w-8 rounded-full bg-base-100 shadow flex items-center justify-center hover:bg-red-500 group">
                    <button class="text-[#64748B] cursor-pointer group-hover:text-white">
                      <i class="fa-regular fa-trash-can "></i>
                    </button>

                </div>
              </div>


            </div>
      
      
      
      
      `

      filteredCardContainer.appendChild(div);


   }
}
function renderRejected(){

   filteredCardContainer.innerHTML = '' ;

   for( let rejected of rejectedContainer){

      
      
      let div = document.createElement('div') ;

    div.className = 'card w-full bg-base-100 rounded-xl shadow p-6';

      div.innerHTML =`

      
            <div class="flex justify-between">
              
              <!-- main-part-1 -->
              <div class="card-left space-y-5">
                <div>
                  <h2 class="text-[18px] font-semibold text-[#002C5C] card-title">
                    ${rejected.jobTitle}
                  </h2>
                  <p class="text-[#64748B] skill-title">${rejected.skillTitle}</p>
                </div>
                <p class="text-[#64748B] salary-text">
                  ${rejected.salaryTitle}
                </p>

                <button
                  class="job-status-badge btn bg-[#EF4444] w-32 text-white"
                >
                  ${rejected.jobStatus}
                </button>

                <p class="text-[#64748B] job-info">
                ${rejected.jobInfo}
                </p>

                <div class="card-btn-group gap-3 flex">
                  <button  class="interview-btn btn btn-outline text-[#10B981] hover:bg-[#10B981] hover:text-white">Interview</button>
                  <button  class="rejected-btn btn btn-outline text-[#EF4444] hover:bg-[#EF4444] hover:text-white">Rejected</button>
                </div>
              </div>

                    <!-- main-part-2 -->
              <div class="card-right">

                <div class="h-8 w-8 rounded-full bg-base-100 shadow flex items-center justify-center hover:bg-red-500 group">
                    <button class="text-[#64748B] cursor-pointer group-hover:text-white">
                      <i class="fa-regular fa-trash-can "></i>
                    </button>

                </div>
              </div>


            </div>
      
      
      
      
      `

      filteredCardContainer.appendChild(div);


   }
}



