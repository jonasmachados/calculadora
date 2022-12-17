
import Input from './components/Input';

import { Container, Content, Row } from './styles';

function App() {
  return (
    <Container>
      <Content>
        <Input/>
        <Row>
          <button>1</button>
          <br/>
          <button>2</button>
          <br/>
          <button>3</button>
        </Row>
    
      </Content>
    </Container>
  );
}

export default App;
