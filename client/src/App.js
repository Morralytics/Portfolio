import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";
import { Resume } from "./pages/Resume";

import Header from "./components/ui/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Work' element={<Work />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
