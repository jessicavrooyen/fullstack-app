// 🔮  Create an App component to render into client folder in root directory

// 💡 You will be working in UI directory for the most part

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo'; 
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from '../../ui/App';

// connect to apollo server using meteor's url
const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl('graphql')
});

// create cache
const cache = new InMemoryCache();

//create client
const client = new ApolloClient({
    link: httpLink,
    cache
});

//pass client into apollo provider component, wrapping around App component 
const ApolloApp = () => (
    <ApolloProvider client ={client}>
        <App />
    </ApolloProvider>
)

Meteor.startup(() => {
    render(<ApolloApp />, document.getElementById('app'))
});

