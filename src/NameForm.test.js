// import './setupTests';
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm Component', () => {
  let component = null;

  let changed = null;
  const onInsert = (name) => {
    changed = name;
  };

  it('renders correctly', () => {
    component = shallow(<NameForm onInsert={onInsert} />);
  });
  it('matchs snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('insert new text', () => {
    it('has a form', () => {
      expect(component.find('form').exists()).toBe(true);
    });
    it('has a input', () => {
      expect(component.find('input').exists()).toBe(true);
    });
    it('simulates input change', () => {
      const mockedEvent = {
        target: {
          value: 'hello',
        },
      };
      // 이벤트를 시뮬레이트 합니다. 두번째 파라미터는 이벤트 객체입니다.  e.target.value -> hello
      // onchange 실행됨
      component.find('input').simulate('change', mockedEvent);
      // this.setState()실행됨, 즉 name은 e.target.value가 되는것임
      expect(component.state().name).toBe('hello');
    });
    it('simulates form submit', () => {
      const mockedEvent = {
        preventDefault: () => null, // onSubmit 에서 preventDefault 를 호출하게 되므로, 가짜 함수 추가
      };
      // e.preventDetault 실행시 null 리턴하는 함수로 대체해버림
      // onsubmit 실행됨, 이벤트 객체는 mockedEvent임
      component.find('form').simulate('submit', mockedEvent);
      // NameForm의 onSubmit실행되면서 this.setState({name:''})실행됨. 즉, name은 ''이 됨.
      expect(component.state().name).toBe(''); // 등록 하면 값이 공백으로 변하며
      // onSubmit내부에서 this.setState({name:''})보다 먼저 onInsert가 실행됨
      // 즉, onInsert에 들어가는 값은 'hello'임
      expect(changed).toBe('hello');
    });
  });
});
