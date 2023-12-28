import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export default function App() {
  return <MantineProvider>
    <div>Mantine</div>
  </MantineProvider>;
}
