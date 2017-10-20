import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import 'tachyons'
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { requireAuth } from './utils/AuthService';
import App from './components/App'


const networkInterface = createNetworkInterface({
  uri: '__YOUR_SIMPLE_API_ENDPOINT__'
})

// For Authentication
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    // get the authentication token from local storage if it exists
    if (localStorage.getItem('id_token')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('id_token')}`
    }
    next()
  },
}])

const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root')
)
registerServiceWorker()