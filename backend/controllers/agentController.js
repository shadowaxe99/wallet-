```javascript
const Agent = require('../models/Agent');
const User = require('../models/User');
const { encryptData, decryptData } = require('../utils/security');

exports.getAgents = async (req, res) => {
    try {
        const userId = decryptData(req.params.userId);
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const agents = await Agent.find({ owner: userId });
        return res.status(200).json({ agents: agents.map(agent => encryptData(agent)) });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.updateAgent = async (req, res) => {
    try {
        const agentId = decryptData(req.params.agentId);
        const agent = await Agent.findById(agentId);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        const updatedAgent = await Agent.findByIdAndUpdate(agentId, req.body, { new: true });
        return res.status(200).json({ agent: encryptData(updatedAgent) });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.activateAgent = async (req, res) => {
    try {
        const userId = decryptData(req.params.userId);
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const activeAgents = await Agent.countDocuments({ owner: userId, isActive: true });
        if (activeAgents >= 5) {
            return res.status(400).json({ message: 'You can only have 5 active agents at a time' });
        }
        const agentId = decryptData(req.body.agentId);
        const agent = await Agent.findById(agentId);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        agent.isActive = true;
        await agent.save();
        return res.status(200).json({ message: 'Agent activated successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deactivateAgent = async (req, res) => {
    try {
        const agentId = decryptData(req.params.agentId);
        const agent = await Agent.findById(agentId);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        agent.isActive = false;
        await agent.save();
        return res.status(200).json({ message: 'Agent deactivated successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
```