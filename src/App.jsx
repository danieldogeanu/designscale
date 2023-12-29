import { MantineProvider } from '@mantine/core';
import Header from './layout/Header';
import '@mantine/core/styles.css';
import './styles/global.scss';

export default function App() {
  return (
    <MantineProvider>
      <Header />
      <div>Mantine</div>
    </MantineProvider>
  );
}
