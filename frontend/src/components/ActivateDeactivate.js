```javascript
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ActivateDeactivate = ({ agent, onActivate, onDeactivate }) => {
  const [isActive, setIsActive] = useState(agent.isActive);

  const handleActivate = () => {
    onActivate(agent.id);
    setIsActive(true);
  };

  const handleDeactivate = () => {
    onDeactivate(agent.id);
    setIsActive(false);
  };

  return (
    <div id="activate-deactivate">
      <h3>{agent.name}</h3>
      <p>{isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={handleActivate} disabled={isActive}>
        Activate
      </button>
      <button onClick={handleDeactivate} disabled={!isActive}>
        Deactivate
      </button>
    </div>
  );
};

ActivateDeactivate.propTypes = {
  agent: PropTypes.object.isRequired,
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
};

export default ActivateDeactivate;
```