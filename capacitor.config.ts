import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gicoconut.app',
  appName: 'GI-COCONUT',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
