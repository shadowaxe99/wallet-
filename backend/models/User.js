```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  activeAgents: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Agent',
    validate: [arrayLimit, '{PATH} exceeds the limit of 5']
  }
});

function arrayLimit(val) {
  return val.length <= 5;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
```