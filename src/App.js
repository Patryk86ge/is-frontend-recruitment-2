// @flow
import React from 'react';
import './App.css';
// eslint-disable-next-line import/extensions
import Convert from './components/Converter.js';


type AppPropsType = {||};


class App extends React.Component<AppPropsType> {
  // constructor(props: AppPropsType) {
  //   super(props);
  //   // this.logo = 'https://www.intersynergy.pl/app/uploads/2015/06/logo-is.png';
  // }

  logo: string;


  render(): React$Element<*> {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Become an{' '}<strong>InterSynergy</strong>{' '}member{' '}💪
            </h1>
          </header>
          <Convert />
        </div>
      </>
    );
  }
}

export default App;
