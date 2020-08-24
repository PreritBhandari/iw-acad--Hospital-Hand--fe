// import NewStudentModal from "./NewStudentModal";
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Header
} from 'semantic-ui-react'
import Modal from 'react-awesome-modal';
import React from 'react'
import axios from "axios";

import { API_URL2 } from "../constants";

class Home extends React.Component {
  state = {
    notices: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URL2).then(res => this.setState({ notices: res.data }));
  };

  resetState = () => {
    this.getStudents();
  };

 
  constructor(props){  
    super(props);  
    this.state = { visible:true };  
  };   
  closeModal(){
  this.setState({
      visible : false
  });
  }

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
  })}
render() {
  return (
  <div> 
      
    <section>
      <h1>Hospital Notice</h1>
                <Modal visible={this.state.visible} style ={{paddingLeft: '50em'}} effect="fadeInUp"  onClickAway={() => this.closeModal()} >
                    <div>
                        <h1>Health is Wealth</h1>
                        <p>some tips to avoid this pandaemic</p>
                        <Container text style={{ marginTop: '7em' }}>
                          <Header as='h1'>Semantic UI React Fixed Template</Header>
                          <p>This is a basic fixed menu template using fixed size containers.</p>
                          <p>
                            A text container is used for the main container, which is useful for single column layouts.
                          </p>
                          
                        </Container>
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
    </section>
  </div>  

  );}}


export default Home;  