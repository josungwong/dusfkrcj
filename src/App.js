import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import ContactForm from './compo/ContactForm';
import 'bootstrap/dist/css/bootstrap.css';
import ContactList from './compo/ContactList';



//1 왼쪽에는 연락처 등록 , 오른쪽에는 리스트와 서치창
//2 리스트에는 연락처 등록이 가능하다
//3 리스트에 아이탬 갯수
//4 서치에서 이름 검색이 가능하다
function App() {
  return (
    <div>
     <h1 className='main-title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col><ContactList/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
