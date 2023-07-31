```javascript
import React from 'react';
import PropTypes from 'prop-types';

const AgentCard = ({ agent, onManageClick }) => {
  return (
    <div id="agent-card" className="card">
      <img src={agent.image} alt={agent.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{agent.name}</h5>
        <p className="card-text">Status: {agent.isActive ? 'Active' : 'Inactive'}</p>
        <button onClick={() => onManageClick(agent)} className="btn btn-primary">Manage</button>
      </div>
    </div>
  );
};

AgentCard.propTypes = {
  agent: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  onManageClick: PropTypes.func.isRequired,
};

export default AgentCard;
```