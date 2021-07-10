import { Component, createRef } from "react";

class Child extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

export default class Sample02 extends Component {
  divRef = createRef<HTMLDivElement>();
  divElement: HTMLDivElement | null = null;
  childRef = createRef<Child>();

  render() {
    return (
      <>
        {/* Ref オブジェクトを使う場合 */}
        <div ref={this.divRef} />
        {/* Callback Ref を使う場合 */}
        <div
          ref={(element) => {
            this.divElement = element;
          }}
        />
        <Child ref={this.childRef} />
      </>
    );
  }
}
