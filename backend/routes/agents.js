```javascript
const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

// Route to get all owned AI agents
router.get('/', agentController.getAgents);

// Route to update an AI agent's attributes
router.put('/:id', agentController.updateAgent);

// Route to activate an AI agent
router.put('/:id/activate', agentController.activateAgent);

// Route to deactivate an AI agent
router.put('/:id/deactivate', agentController.deactivateAgent);

module.exports = router;
```