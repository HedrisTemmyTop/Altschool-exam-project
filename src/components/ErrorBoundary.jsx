import React from "react";
import Error from "./Error";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          onClick={() => {
            this.setState({ hasError: false });
          }}
          style={{
            position: "fixed",
            backgroundColor: "white",
            left: "50%",
            transform: " translateX(-50%)",

            bottom: "2rem",
            width: "25rem",
            height: "5rem",
            color: "black",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.state.error.message}
        </div>
      );
      //   return <Error show={true} error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
