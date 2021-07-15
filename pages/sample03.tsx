import { Component, createRef } from "react";

class Child extends Component<{}, { count: number }> {
  state = { count: 1 };

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default class Sample03 extends Component {
  ref = createRef<Child>();

  render() {
    return (
      <>
        <Child ref={this.ref} />
        <button
          onClick={() => {
            this.ref.current?.increment();
          }}
        >
          increment
        </button>
      </>
    );
  }
}
