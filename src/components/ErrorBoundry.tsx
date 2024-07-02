import React, {PropsWithChildren} from 'react';

interface ErrorBoundryProps extends PropsWithChildren {}
interface ErrorBoundryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundryProps,
  ErrorBoundryState
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch() {
    // TODO: logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundary />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
