import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import the Fade animation

const Team = () => {
  // Data for team members
  const teamMembers = [
    {
      id: 1,
      image: '/img/CEO.jpg', // Update the path to your image
      name: 'HAFEEZ UL REHMAN',
      designation: 'CEO',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-whatsapp', url: '#' }, // Replaced Instagram with WhatsApp
      ],
    },
    {
      id: 2,
      image: '/img/director.jpg', // Update the path to your image
      name: 'ALI REHMAN',
      designation: 'Director',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61571577388983' },
        { icon: 'fab fa-whatsapp', url: 'https://wa.me/923455430275?text=Hey%2C%20Hafeez%20Solar%20Energy%20Here.%20What%20is%20your%20question%3F%20Feel%20free%20to%20ask.' }, // Replaced Instagram with WhatsApp
      ],
    },
  ];

  return (
    <div className="container-xxl py-3">
      <div className="container">
        {/* Section Heading */}
        <Fade direction="down" triggerOnce> {/* Add Fade animation to the heading */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary">Get To Know Us</h6>
            <h1 className="mb-4">Your Solar Energy Partners</h1>
          </div>
        </Fade>

        {/* Team Members */}
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6">
              <Fade direction="up" triggerOnce> {/* Add Fade animation to each team member */}
                <div className="team-item rounded overflow-hidden">
                  <div className="d-flex"> {/* Flex container for image and social icons */}
                    {/* Image (75% width) */}
                    <img className="img-fluid w-75" src={member.image} alt={member.name} />

                    {/* Social Icons (25% width, vertical alignment) */}
                    <div className="team-social w-25 d-flex flex-column align-items-center justify-content-center">
                      {member.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                          href={link.url}
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