import React from 'react'

import { Col, Container, Row } from 'react-bootstrap';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
 

  
  

const Home = () => {
   
  return (
    <Container>
    <Row>
    <Col>
    <BarChart/>
    </Col>
    <Col>
    <PieChart/>
    </Col>
    </Row>
    </Container>
  )
}

export default Home