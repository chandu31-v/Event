
const firebaseConfig = {
    apiKey: String(process.env.API_KEY),
    authDomain: String(process.env.AUTH_DOMAIN),
    projectId: String(process.env.PROJECT_ID),
    storageBucket: String(process.env.STORAGE_BUCKET),
    messagingSenderId: String(process.env.MESSAGING_SENDER_ID),
    appId: String(process.env.APP_ID)
  };

export default firebaseConfig
