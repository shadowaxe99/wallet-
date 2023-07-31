```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav id="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/agents">My AI Agents</Link></li>
                <li><Link to="/activate">Activate Agent</Link></li>
                <li><Link to="/deactivate">Deactivate Agent</Link></li>
                <li><Link to="/manage">Manage Agent</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
```