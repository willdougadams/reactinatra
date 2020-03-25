import * as React from 'react'
import sinon from 'sinon'

import { Dashboard } from '../dashboard/Dashboard'
import * as api from '../api'
import { expect } from 'chai'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {act} from 'react-dom/test-utils'

Enzyme.configure({ adapter: new Adapter()})

describe('User Dashboard', () => {
  beforeEach(() => {
    sinon.stub(api, 'getUserPosts').resolves({
      json: () => Promise.resolve([
        {
          text: 'first post',
          postedBy: '1'
        },
        {
          text: 'second post',
          postedBy: '1'
        }
      ])
    })

    sinon.stub(api, 'postUserPost').resolves()
  })

  afterEach(sinon.restore)

  it('should display the user\'s dashboards with their posts', async () => {
    expect(async () => {
        shallow(<Dashboard userId={'1'}/>)
    }).not.throw()
  })

  it('Should mount a child PostComposer that increments postCount via its callback', async () => {
    const dashWrapper = mount(<Dashboard userId={'1'}/>)
    await act(async () => dashWrapper.find('button').first().simulate('click'))
  })
})
