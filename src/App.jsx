import { MantineProvider } from '@mantine/core';
import FilterProvider from './providers/FilterProvider';
import Header from './layout/Header';
import NumbersBox from './components/NumbersBox';
import '@mantine/core/styles.css';
import './styles/global.scss';

export default function App() {
  return (
    <MantineProvider defaultColorScheme='auto'>
      <FilterProvider>
        <Header />
        <NumbersBox />
      </FilterProvider>
    </MantineProvider>
  );
}
