import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state= {
        memes: [],
      };
  }
  componentDidMount() {
   fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme?font=Impact&font_size=50&meme=Condescending-Wonka&top=Top%20text&bottom=Bottom%20text", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
          "x-rapidapi-key": "968da4de8emshb9e1c3c7ed0d63ap102a01jsn97f0dcc9733b"
          }
      })
      .then(response => {
          console.log(response);
          return response.body
      })
      .then(body => {
        const reader = body.getReader()
        return reader.read()
      })
      .then(stream => {
        console.log(stream)
      })
      .catch(err => {
          console.log(err);
      });
  }
  
  
  render() {
  return (
    <div className="App">
      <Jumbotron fluid>
        
          <h1>Meme Generator</h1>
          <p>Search for memes</p>
          <Form>
            <div className='form-inline'>
                <Form.Control placeholder="Search" />
                <Button>Search</Button>
            </div>
          </Form>
      </Jumbotron>
      <div>
      <h2>
      {this.state.memes}
      </h2>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      
    </div>
   );
  }
}


export default App;
