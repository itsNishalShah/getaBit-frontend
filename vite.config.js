import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Find your computer's local IP address and replace 'your_local_ip' below
const localIpAddress = '192.168.0.102';

export default defineConfig({
  plugins: [react()],
  server: {
    host: localIpAddress,
  },
});
