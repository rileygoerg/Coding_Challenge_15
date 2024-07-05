// U14123683
import React from 'react';
import './App.css';

function App(){
  const codingSkills = [
    {name:"Javascript", proficiency:'5/10'},
    {name:"CSS", proficiency:"6/10"},
    {name:"React", proficiency:"3/10"},
  ];
  const experience = [
    {role: "Analyst Intern", company:"Grow Financial Credit Union", tenure:"June 2024 - Present"},
    {role: "Bartender", company:"The Melting Pot", tenure:"November 2021 - Present"},
    {role: "Medical Scribe/Assistant", company:"Sinus and Nasal Institute of Florida", tenure:"August 2021 - November 2021"}
  ];
  const education = [
    {institution:"University of South Florida", degree:"B.S. Business Analytics and Information Systems", tenure:"January 2024 - December 2025"},
    {institution:"State College of Florida", degree:"A.A. Arts", tenure:"August 2016 - May 2018"},
    {institution:"State College of Florida Collegiate School", degree:"High School Diploma", tenure:"August 2014 - May 2018"}
  ];
  return (
  <div>
    <header>
    <h1>Riley Goerg - U14123683</h1>
    <p>I'm a junior at USF majoring in Business Analytics and Information Systems. This is my "About Me" website.</p>
    <p>Email: rgoerg@gmail.com</p>
    <p>LinkedIn: linkedin.com/in/riley-goerg</p>
    </header>
    <hr></hr>
    <section>
      <h3>Skills</h3>
      <ol>
        {codingSkills.map(skill =>(
          <li>{skill.name}: {skill.proficiency}</li>
        ))}
      </ol>
    </section>
        <hr></hr>
    <section>
      <h3>Work Experience</h3>
      <ol>
        {experience.map(experience=>(
          <li>{experience.role} at {experience.company} | {experience.tenure}</li>
        ))}
      </ol>
    </section>
    <hr></hr>
    <section>
      <h3>Education</h3>
      <ol>
        {education.map(education =>(
          <li>{education.institution} | {education.degree} | {education.tenure}</li>
        ))}
      </ol>
    </section>
  </div>
  );
}
export default App;
