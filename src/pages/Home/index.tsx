import React from "react";
interface IindexProps {
  test?: string;
}
// const index: React.FC<IindexProps> = () => {
//   return <div>Home</div>;
// };
// export default index;

interface IHomeProps {}
interface IHomeState {
  userName?: string;
}
class Home extends React.Component<IHomeProps, IHomeState> {
  public state: IHomeState = {
    
  };
  constructor(props: IHomeProps) {
    super(props);
    console.log("constructor");
  }
  render() {
    console.log("render");
    return <div>Home</div>;
  }
  // static getDerivedStateFromProps(
  //   nextProps: IHomeProps,
  //   prevState: IHomeState
  // ) {
  //   return null;
  // }
  getSnapshotBeforeUpdate(prevProps: IHomeProps, prevState: IHomeState) {
    console.log("getSnapshotBeforeUpdate");
    // prevState.userName
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(
    nextProps: IHomeProps,
    nextState: IHomeState,
    nextContext: any
  ) {
    return true;
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
export default Home;
