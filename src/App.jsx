import { Box, Container, MantineProvider } from '@mantine/core';
import FilterProvider from './providers/FilterProvider';
import Header from './layout/Header';
import NumbersBox from './components/NumbersBox';
import Footer from './layout/Foooter';
import ScrollTop from './components/ScrollTop';
import '@mantine/core/styles.css';
import './styles/global.scss';

export default function App() {
  return (
    <MantineProvider defaultColorScheme='light'>
      <FilterProvider>
        <Box className='appContainer'>
          <Header />
          <Container size={840} px={0}>
            <NumbersBox />
            <Footer />
          </Container>
          <ScrollTop />
        </Box>
      </FilterProvider>
    </MantineProvider>
  );
}
