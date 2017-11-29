import React from 'react';
import './App.css';

const styles = {
  App: {
    textAlign: 'center'
  },
  AppHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  AppTitle: {
    fontSize: '1.5em',
    color: 'white'
  },
  AppIntro: {
    fontSize: 'large'
  }
};

export default class mpqPlot extends React.Component {
  constructor(props){
    super(props)	
  }
  
  render() {
    return (
      <div style={styles.App}>
        <header style={styles.AppHeader}>
          <h1 style={styles.AppTitle}>Welcome to Angular React Integration</h1>
        </header>
        <br />
        <div style={styles.AppIntro}>
          <div>Case Id: {this.props.plotdata.caseId}</div>
          <div>Go User Person Id: {this.props.plotdata.goUser.personId}</div>
          <div>GO User Name: {this.props.plotdata.goUser.name}</div>
          <div>Client : {this.props.plotdata.goUser.clientName} ({this.props.plotdata.goUser.clientId})</div>
        </div>
      </div>
    );
  }
}