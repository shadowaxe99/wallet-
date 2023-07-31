```javascript
import React, { useState, useEffect } from 'react';
import AgentAttributes from './AgentAttributes';

const AgentManagement = ({ agent }) => {
    const [selectedAgent, setSelectedAgent] = useState(null);

    useEffect(() => {
        manageAgent(agent);
    }, [agent]);

    const manageAgent = (agent) => {
        setSelectedAgent(agent);
    };

    return (
        <div id="agent-management">
            {selectedAgent && (
                <div>
                    <h2>Manage Agent: {selectedAgent.name}</h2>
                    <AgentAttributes agent={selectedAgent} />
                </div>
            )}
        </div>
    );
};

export default AgentManagement;
```