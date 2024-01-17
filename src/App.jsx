import { Box, Container, MantineProvider } from '@mantine/core';
import FilterProvider from './providers/FilterProvider';
import Header from './layout/Header';
import NumbersBox from './components/NumbersBox';
import Footer from './layout/Foooter';
import ScrollTop from './components/ScrollTop';
import useScript from './hooks/useScript';
import '@mantine/core/styles.css';
import './styles/global.scss';

export default function App() {
  // Load Umami Analytics
  const {VITE_UMAMI_URL, VITE_UMAMI_ID} = import.meta.env;
  useScript(VITE_UMAMI_URL, {async: true}, {'data-website-id': VITE_UMAMI_ID});

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
