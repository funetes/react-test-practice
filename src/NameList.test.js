import { render } from '@testing-library/react';
import React from 'react';
import randerer from 'react-test-renderer';
import NameList from './NameList';

describe('NameListComponet', () => {
  let component = null;
  it('renders correctly', () => {
    component = randerer.create(<NameList names={['벨로퍼트', '김민준']} />);
  });
  it('match sanpshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
