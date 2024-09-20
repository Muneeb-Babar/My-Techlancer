import React from "react";
import "./TeamSection.css"; 
import team2 from '../../assets/images/teamMembers/supervisor.jpeg'
import team3 from '../../assets/images/teamMembers/sales-manager.jpeg'
import team4 from '../../assets/images/teamMembers/sales1-ex.jpeg'
import team5 from '../../assets/images/teamMembers/sales2-ex.jpeg'
import team6 from '../../assets/images/teamMembers/bussniess.jpeg'


const teamMembers = [
    {
        image: team2,  
        name: "Eeshan Aslam",
        role: "Supervisor",
        description: "Oversees daily operations and ensures team productivity, focusing on meeting organizational goals."
      },
      {
        image: team3,  
        name: "Syed Mehboob",
        role: "Sales Manager",
        description: "Leads the sales team, develops strategies, and drives revenue growth for the company."
      },  
      {
        image: team4,  
        name: "Muhib Nadeem",
        role: "Sales Executive",
        description: "Engages with clients, identifies sales opportunities, and closes deals to meet targets."
      },
      {
        image: team5,  
        name: "Mubashir Ahmed",
        role: "Sales Executive",
        description: "Specializes in client outreach, generating leads, and securing sales for company growth."
      },
      {
        image: team6,  
        name: "Mansoor Jabbar",
        role: "Business Development Officer",
        description: "Focuses on identifying new business opportunities, partnerships, and market expansions."
      }
];

// TeamCard Component
const TeamCard = ({ member }) => {
  return (
    <div className="team-card" style={{marginTop: "20px"}}>
      <div className="team-card-image">
        <img src={member.image} alt={member.name} />
      </div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p>{member.description}</p>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="team-section">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  );
};

export default TeamSection;
