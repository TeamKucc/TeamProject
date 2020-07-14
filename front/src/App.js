import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <hr />
        <Footer />
      </Layout>
    );
  }
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

export default App;
