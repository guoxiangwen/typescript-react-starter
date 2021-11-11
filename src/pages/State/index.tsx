import { count } from "console";
import React from "react";
interface IindexProps {
  test?: string;
}
// const index: React.FC<IindexProps> = () => {
//   return <div>State</div>;
// };
// export default index;

interface IStateProps {}
interface IStateState {
  count?: number;
}
class State extends React.Component<IStateProps, IStateState> {
  public state: IStateState = {
    count: 0,
  };
  updateCount = () => {
    console.log("更新前：", this.state.count); // 0
    //
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log("更新后：", this.state.count); // 1
    });

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("更新后：", this.state.count);
    //   }
    // );
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p onClick={this.updateCount}>count:{count}</p>
      </div>
    );
  }
}
export default State;
