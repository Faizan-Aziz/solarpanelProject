import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Team = () => {
  // Team data with simplified WhatsApp messages
  const teamMembers = [
    {
      id: 1,
      image: '/img/CEO.jpg',
      name: 'HAFEEZ UL REHMAN',
      designation: 'CEO',
      socialLinks: [
        { 
          icon: 'fab fa-facebook-f', 
          url: 'https://www.facebook.com/share/1JDSsKArSE/?mibextid=qi2Omg' 
        },
        { 
          icon: 'fab fa-whatsapp', 
          url: 'https://wa.me/923455430275?text=Hello%20Hafeez,%20I%20would%20like%20to%20discuss%20your%20solar%20solutions.' 
        },
      ],
    },
    {
      id: 2,
      image: '/img/director.jpg',
      name: 'ALI REHMAN',
      designation: 'Director',
      socialLinks: [
        { 
          icon: 'fab fa-facebook-f', 
          url: 'https://www.facebook.com/share/16PE2V4ujR/?mibextid=qi2Omg' 
        },
        { 
          icon: 'fab fa-whatsapp', 
          url: 'https://wa.me/923335119857?text=Hello%20Ali,%20I%27m%20interested%20in%20your%20solar%20products.' 
        },
      ],
    },
    {
      id: 3,
      image: '/img/software_engineer.png', 
      name: 'Wasif Malik',
      designation: 'Software Engineer',
      socialLinks: [
        { 
          icon: 'fab fa-facebook-f', 
          url: 'https://www.facebook.com/share/16sU7DAHhN/' 
        },
        { 
          icon: 'fab fa-whatsapp', 
          url: 'https://wa.me/923495727003?text=Hello%20Wasif,%20I%20have%20a%20technical%20question%20about%20your%20solar%20systems.' 
        },
      ],
    },
  ];

  return (
    <div className="container-xxl py-3">
      <div className="container">
        <Fade direction="down" triggerOnce>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-primary">Get To Know Us</h2>
            <h3 className="mb-4">Your Solar Energy Partners</h3>
          </div>
        </Fade>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6">
              <Fade direction="up" triggerOnce delay={member.id * 100}>
                <div className="team-item rounded overflow-hidden">
                  <div className="d-flex">
                    <img className="img-fluid w-75" src={member.image} alt={member.name} />
                    <div className="team-social w-25 d-flex flex-column align-items-center justify-content-center">
                      {member.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <h5>{member.name}</h5>
                    <span>{member.designation}</span>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;