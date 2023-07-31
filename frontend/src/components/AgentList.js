```javascript
import React, { useEffect, useState } from 'react';
import AgentCard from './AgentCard';

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    const response = await fetch('/api/agents');
    const data = await response.json();
    setAgents(data);
  };

  return (
    <div id="agent-list">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
};

export default AgentList;
```