import React from 'react';
import {mount} from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

beforeEach (() => {
  moxios.install ();
  moxios.stubRequest ('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}],
  });
});

afterEach (() => {
  moxios.uninstall ();
});

it ('can fetch a list of comment and display them', done => {
  //render the entire app
  const wrapped = mount (
    <Root>
      <App />
    </Root>
  );

  //find fetch button and click it
  wrapped.find ('.fetch-tweet').simulate ('click');

  //introduce a tiny little paus
  //expect to find a list of tweets

  moxios.wait (() => {
    wrapped.update ();
    expect (wrapped.find ('li').length).toEqual (2);
    done ();
    wrapped.unmount ();
  });
});
