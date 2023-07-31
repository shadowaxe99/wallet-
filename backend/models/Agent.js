```javascript
const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  attributes: {
    type: Map,
    of: String
  },
  nftAddress: {
    type: String,
    required: true
  }
});

const Agent = mongoose.model('Agent', AgentSchema);

module.exports = Agent;
```