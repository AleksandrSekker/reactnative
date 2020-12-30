import React, {useState} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  Form,
  Textarea,
  Item,
  Label,
  Input,
  Grid,
  Col,
} from 'native-base';

import {} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [text, settext] = useState([]);
  const [symbols, setsymbols] = useState(Number);
  const [sms, setsms] = useState(0);

  onSubmitHandler = () => {
    word = text.split(' ');
    // let result = text.length / symbols;
    let result = word.length / symbols;
    setsms(Math.ceil(result));
    // setsms(result);
  };
  return (
    <Container>
      <Header>
        <Body>
          <Title>Header</Title>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Textarea"
            value={text}
            onChangeText={(e) => settext(e)}
          />
          <Item>
            <Input value={symbols} onChangeText={(e) => setsymbols(e)} />
            <Label>символів</Label>
          </Item>
        </Form>
        <Button
          block
          success
          rounded
          style={{marginTop: 20, marginBottom: 20}}
          onPress={onSubmitHandler}>
          <Text>Порахувати кількість SMS</Text>
        </Button>
        <Grid>
          <Col>
            <Text style={{fontSize: 20}}>Потрібно SMS: </Text>
          </Col>
          <Col>
            <Text style={{fontSize: 20}}>{sms}</Text>
          </Col>
        </Grid>
      </Content>

      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default App;
