import React, {
  Component,
  Fragment,
  createContext,
} from 'react';

const AppStateContext = createContext({});

class AppStateProvider extends Component {
  state = {
    isLoading: false,
    characterData: null,
  };

  setLoading = (value) => {
    this.setState({ isLoading: value });
  };

  setCharacterData = (data) => {
    this.setState({ characterData: data });
  };

  getAppStateContext = () => {
    const {
      isLoading,
      characterData,
    } = this.state;

    return ({
      setLoading: this.setLoading,
      setCharacterData: this.setCharacterData,
      isLoading,
      characterData,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <AppStateContext.Provider value={this.getAppStateContext()}>
          {children}
        </AppStateContext.Provider>
      </Fragment>
    );
  }
}

const AppStateConsumer = AppStateContext.Consumer;

export const withAppStateProvider = (Child) => (props) => (
  <AppStateProvider>
    <Child {...props} />
  </AppStateProvider>
);

export const withAppStateConsumer = (Child) => (props) => (
  <AppStateConsumer>
    {(context) => (
      <Child {...props} appStateContext={context} />
    )}
  </AppStateConsumer>
);
