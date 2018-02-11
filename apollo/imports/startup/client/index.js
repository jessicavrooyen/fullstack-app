// 🔮  Create an App component to render into client folder in root directory

// 💡 You will be working in UI directory for the most part

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../../ui/App';

Meteor.startup(() => {
    render(<App />, document.getElementById('app'))
});