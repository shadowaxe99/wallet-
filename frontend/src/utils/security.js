```javascript
import crypto from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

export const security = {
  encryptData: (data) => {
    try {
      const ciphertext = crypto.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
      return ciphertext;
    } catch (error) {
      console.error('Error during encryption:', error);
      return null;
    }
  },

  decryptData: (ciphertext) => {
    try {
      const bytes = crypto.AES.decrypt(ciphertext, SECRET_KEY);
      const decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
      return decryptedData;
    } catch (error) {
      console.error('Error during decryption:', error);
      return null;
    }
  },
};
```