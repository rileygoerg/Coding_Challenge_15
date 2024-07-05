import React from 'react';
import './App.css';

function App(){
  const codingSkills = [
    {name:"Javascript", proficiency:'5/10'},
    {name:"CSS", proficiency:"6/10"},
    {name:"React", proficiency:"2/10"},
  ];
  const experience = [
    {role: "Analyst Intern", company:"Grow Financial Credit Union", tenure:"June 2024 - Present"},
    {role: "Bartender", company:"The Melting Pot", tenure:"November 2021 - Present"},
    {role: "Medical Scribe/Assistant", company:"Sinus and Nasal Institute of Florida", tenure:"August 2021 - November 2021"}
  ];
  return (
  <div>
    <header>
    <h1>Riley Goerg</h1>
    <p>I'm a junior at USF majoring in Business Analytics and Information Systems.</p>
    <p>rgoerg@gmail.com</p>
    <p>linkedin.com/in/riley-goerg</p>
    </header>
    <section>
      <h3>Skills</h3>
      <ol>
        {codingSkills.map(skill =>(
          <li>{skill.name} - {skill.proficiency}</li>
        ))}
      </ol>
    </section>
    <section>
      <h3>Work Experience</h3>
      <ol>
        {experience.map(experience=>(
          <li>{experience.role} at {experience.company} | {experience.tenure}</li>
        ))}
      </ol>
    </section>
  </div>
  );
}
export default App;
