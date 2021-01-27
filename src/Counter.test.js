import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<Counter />);
    // console.log(component);
    // console.log('-----');
    // console.log(component.toJSON());
    // console.log(component.toTree());
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // increase 가 잘 되는지 확인
  it('increases correctly', () => {
    component.getInstance().onIncrease();
    expect(component.getInstance().state.value).toBe(2); // value 값이 2인지 확인
    const tree = component.toJSON(); // re-render
    expect(tree).toMatchSnapshot(); // 스냅샷 비교
  });

  it('decreases correctly', () => {
    component.getInstance().onDecrease();
    expect(component.getInstance().state.value).toBe(1);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // 이 전 스냅샷 비교
  });
});
