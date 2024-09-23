import React from "react";
import "./TeamSection.css"; 
import team2 from '../../assets/images/teamMembers/supervisor.jpeg'
import team3 from '../../assets/images/teamMembers/sales-manager.jpeg'
import team4 from '../../assets/images/teamMembers/sales1-ex.jpeg'
import team5 from '../../assets/images/teamMembers/sales2-ex.jpeg'
import team6 from '../../assets/images/teamMembers/bussniess.jpeg'
import SectionTitle from "../Common/SectionTitle";
import AOS from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css';


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
  useEffect(() => {
    AOS.init({
        duration: 1000,        
        once: false,         
        easing: 'ease-in-out', 
        offset: 120,          
        anchorPlacement: 'top-bottom' 
    });
    AOS.refresh(); 
}, []);
  return (
    <div className="team-card" style={{marginTop: "20px"}} data-aos="fade-left">
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

    <div className="container" style={{width:'100%',marginTop:'5rem'}}>
      <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                    <SectionTitle
                            SubTitle="OUR TEAM MEMBER"
                            Title="Dedicated Team Members"
                        ></SectionTitle>
                    </div>
                </div>
            </div>
    
    <div className="team-section">
      {teamMembers.map((member, index) => (
        
          <TeamCard key={index} member={member} />
        
      ))}
    </div>
    </div>
  );
};

export default TeamSection;
