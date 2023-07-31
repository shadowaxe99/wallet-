```javascript
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const secretKey = process.env.SECRET_KEY || 'default_secret_key';

const encryptData = (text) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

const decryptData = (hash) => {
    let [iv, encrypted] = hash.split(':');
    iv = Buffer.from(iv, 'hex');
    encrypted = Buffer.from(encrypted, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted.toString();
};

module.exports = {
    encryptData,
    decryptData
};
```