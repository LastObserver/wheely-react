import React from 'react';
import * as style from './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { RoutedContent } from './router';
import { Header } from './components/header';
import { Footer } from './components/footer';

export interface IAppProps {

}

export class App extends React.Component<IAppProps> {

  private store = store();

  public render() {
    return (
      <Provider store={this.store} >
        <div className={style.container}>
          <Header />
          <RoutedContent />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export class ClientApp extends React.Component<IAppProps> {
  public render() {
    return (
      <BrowserRouter>
        <App {...this.props} />
      </BrowserRouter>
    );
  }
}
