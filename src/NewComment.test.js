import React from 'react';
import { shallow } from 'enzyme';
import NewComment from './NewComment';

describe('<NewComment />', () => {
  it('should handle changes id textarea', () => {
    const wrapper = shallow(<NewComment />);
    const event = {
      target: { value: 'test' }
    };
    wrapper.find('textarea').simulate('change', event);
    //console.log(wrapper.state());
    expect(wrapper.state().newComment).toBe('test');
  });
  it('should call sendComment on button click', () => {
    const sendComment = jest.fn();
    const wrapper = shallow(<NewComment sendComment={sendComment} />);
    const event = {
      target: { value: 'test' }
    };
    wrapper.find('textarea').simulate('change', event);
    wrapper.find('button').simulate('click');
    expect(sendComment).toBeCalledWith('test');
    //console.log(sendComment.mock.calls);
    expect(sendComment.mock.calls[0][0]).toBe('test');
    expect(wrapper.state().newComment).toBe('');
  });
});
