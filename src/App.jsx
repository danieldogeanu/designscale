import { MantineProvider } from '@mantine/core';
import Header from './layout/Header';
import '@mantine/core/styles.css';
import './styles/global.scss';

export default function App() {
  return (
    <MantineProvider defaultColorScheme='auto'>
      <Header />
      <div>Mantine</div>
    </MantineProvider>
  );
}
