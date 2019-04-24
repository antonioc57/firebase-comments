import React from 'react';
import Comment from './Comment';
import { render } from 'enzyme';

it('should render', () => {
  const c = {
    comment: 'test'
  };
  const wrapper = render(<Comment c={c} />);
  //console.log(wrapper.text());
  expect(wrapper.text()).toBe('Comentário: test');
});

it('should render empty', () => {
  const wrapper = render(<Comment />);
  //console.log(wrapper.text());
  expect(wrapper.text()).toBe('Comentário: vazio');
});
