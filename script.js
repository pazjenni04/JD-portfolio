// Create the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        const skills = entry.target.querySelector(".skill-percentage");
    })
    // We will fill in the callback later...

    if(entry.isIntersecting) {
        skills.target.classList.add("skill_1");
        return;
    }
        skills.target.classList.remove("skill_1");
  });
  

      
  