import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import SideNav from './components/SideNav.tsx'
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient/apolloClient.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="flex">
          <SideNav />
          <App />
        </div>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
)
