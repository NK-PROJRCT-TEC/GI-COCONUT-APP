import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gicoconut.app',
  appName: 'GI-COCONUT',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
    cleartext: true,
    "allowNavigation": ["*"]
  }
};

export default config;
