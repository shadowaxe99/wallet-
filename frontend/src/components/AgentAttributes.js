```javascript
import React, { useState, useEffect } from 'react';

const AgentAttributes = ({ agent }) => {
    const [attributes, setAttributes] = useState(agent.attributes);

    const updateAttributes = (newAttributes) => {
        setAttributes(newAttributes);
    };

    useEffect(() => {
        setAttributes(agent.attributes);
    }, [agent]);

    return (
        <div id="agent-attributes">
            <h2>Agent Attributes</h2>
            {attributes.map((attribute, index) => (
                <div key={index}>
                    <p><strong>{attribute.name}:</strong> {attribute.value}</p>
                    <button onClick={() => updateAttributes(attribute)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default AgentAttributes;
```