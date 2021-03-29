import React, {
  Component,
  Fragment,
  createContext,
} from 'react';

const AppStateContext = createContext({});

class AppStateProvider extends Component {
  state = {
    isLoading: false,
  };

  setLoading = (value) => {
    this.setState({ isLoading: value });
  };

  getAppStateContext = () => {
    const {
      isLoading,
    } = this.state;

    return ({
      setLoading: this.setLoading,
      isLoading,
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

export const withAppStateProvider = Child => (props) => (
  <AppStateProvider>
    <Child {...props} />
  </AppStateProvider>
);

export const withAppStateConsumer = Child => (props) => (
  <AppStateConsumer>
    {(context): ReactElement => (
      <Child {...props} appStateContext={context} />
    )}
  </AppStateConsumer>
);
