import React from "react";

const Service = () => {
    return ( 


 {/* Services Section */}
 <Container className="services-section">
 <h2 className="text-center my-4">Our Services</h2>
 <Row>
   <Col md={3}>
     <Card className="service-card" onClick={() => window.location.href = '#/robotics-tournaments'}>
     <Card.Img variant="top" src={inspire} />
       <Card.Body>
         <Card.Title>Robotics Tournaments</Card.Title>
         <Card.Text>
         Since 2017, we have engaged schools in different robotics tournaments both regional and
international. These events bring together students and teachers in a shared learning experience
through robot design, robot game and project presentations.
         </Card.Text>
       </Card.Body>
     </Card>
   </Col>
   <Col md={3}>
     <Card className="service-card" onClick={() => window.location.href = '#/in-school-robotics'}>
       {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
       <Card.Img variant="top" src={ins} />
       <Card.Body>
         <Card.Title>In School Robotics</Card.Title>
         <Card.Text>
         In partnership with schools, we offer robotics training to students through interactive software with stories they can relate with,
pictures and videos that introduce them to the scientific challenge that needs solving to help them connect and understand our
world and environment better. We also engage students in project..
         </Card.Text>
       </Card.Body>
     </Card>
   </Col>
   <Col md={3}>
     <Card className="service-card" onClick={() => window.location.href = '#/mobile-robotics-labs'}>
       <Card.Img variant="top" src="https://via.placeholder.com/150" />
       <Card.Body>
         <Card.Title>Mobile Robotics Labs</Card.Title>
         <Card.Text>
         Our program brings robotics closer to you. In your community, home, the rural communities, school,
the marginalized and informal settlement.

Students gain hands-on robotics experience, share ideas and celebrate their work.
         </Card.Text>
       </Card.Body>
     </Card>
   </Col>
   <Col md={3}>
     <Card className="service-card" onClick={() => window.location.href = '#/innovation-center'}>
     <Card.Img variant="top" src={inov} />
       <Card.Body>
         <Card.Title>Innovation Center</Card.Title>
         <Card.Text>
         We have a central training center in Lavington where students design models and work on real life prototypes and tailored
robotics training and other computer based programs.
         </Card.Text>
       </Card.Body>
     </Card>
   </Col>
 </Row>
</Container>





     );
}
 
export default Service;