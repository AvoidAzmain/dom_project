const milestonesdata = JSON.parse(data).data;
console.log(milestonesdata);

//load course milestones data 
function loadmilestones(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML =  `${milestonesdata.map(function(milestone){

        return     `  <div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div onclick="openmilestone(this)">
           
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        
        <div class="hidden_panel">
         ${milestone.modules.map(function(module){
            return ` <div class="module border-b">
                <p>${module.name}</p>
                 </div>`;
         })
        .join("")}
        
         
        </div>
      </div>`
    })
    .join("")}`;
 
}

function openmilestone(milestoneelement){
    
}

loadmilestones();


