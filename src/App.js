import './App.css';
import Counter from './Counter';
import React from 'react';
import NameForm from './NameForm';
import NameList from './NameList';
class App extends React.Component {
  state = {
    names: ['벨로퍼트', '김민준'],
  };

  onInsert = (name) => {
    this.setState(({ names }) => ({ names: names.concat(name) }));
  };
  render() {
    const { names } = this.state;
    const { onInsert } = this;

    return (
      <div>
        <Counter />
        <hr />
        <h1>이름 목록</h1>
        <NameForm onInsert={onInsert} />
        <NameList names={names} />
      </div>
    );
  }
}

export default App;
