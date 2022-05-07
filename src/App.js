import { ThemeProvider } from 'styled-components';
import {Container} from './Components/Styles/Container.styled'
import Header from './Components/Header';
import { GlobalStyle } from './Components/Styles/Global.styled';
import Card from './Components/Card';
import Footer from './Components/Footer';


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: 'grey'
  },
  mobile:'768px'
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
    <Header />
    <Container>
      <Card />
    </Container>
    <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
