import Button from 'react-bootstrap/Button';
import './team.css';
import { MDBCardImage } from 'mdb-react-ui-kit';

function Team() {
  return (
    <>
    <div className='team'>
      <Button className="my-button" variant="light">
        <div className="image-container">
          <MDBCardImage
            style={{ width: '40px' }}
            className="img-fluid rounded-circle border border-dark border-3"
            src="./images/h1.jpg"
            alt="Generic placeholder image"
            fluid
          />
        </div>

        <div className="text-container">
          <p>Nadun Perera</p>
          <p1>Owner</p1>
          <span>nadunperera@gmail.com</span>
        </div>
      </Button>{' '}
      <Button className="my-button" variant="light">
        <div className="image-container">
          <MDBCardImage
            style={{ width: '40px' }}
            className="img-fluid rounded-circle border border-dark border-3"
            src="./images/h2.jpg"
            alt="Generic placeholder image"
            fluid
          />
        </div>

        <div className="text-container">
          <p>Amal Perera</p>
          <p1>Senior Software Engineer</p1>
          <span>amalperera@gmail.com</span>
        </div>
      </Button>{' '}
      <Button className="my-button" variant="light">
        <div className="image-container">
          <MDBCardImage
            style={{ width: '40px' }}
            className="img-fluid rounded-circle border border-dark border-3"
            src="./images/h3.png"
            alt="Generic placeholder image"
            fluid
          />
        </div>

        <div className="text-container">
          <p>Nimali Silva</p>
          <p1>Project Manager</p1>
          <span>nimalisilva@gmail.com</span>
        </div>
      </Button>{' '}
      <Button className="my-button" variant="light">
        <div className="image-container">
          <MDBCardImage
            style={{ width: '40px' }}
            className="img-fluid rounded-circle border border-dark border-3"
            src="./images/h4.jpg"
            alt="Generic placeholder image"
            fluid
          />
        </div>

        <div className="text-container">
          <p>Kasun Perera</p>
          <p1>Junior Developer</p1>
          <span>kasunperera@gmail.com</span>
        </div>
      </Button>{' '}

      </div>
    </>
  );
}

export default Team;
