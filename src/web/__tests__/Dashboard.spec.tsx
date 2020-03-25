import * as React from 'react'
import sinon from 'sinon'

import { Dashboard } from '../dashboard/Dashboard'
import * as api from '../api'
import { expect } from 'chai'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {act} from 'react-dom/test-utils'
import { Button } from '@material-ui/core'
import {Post} from '../dashboard/types'
import { Posts } from '../dashboard/Posts'

Enzyme.configure({ adapter: new Adapter()})

describe('User Dashboard', () => {
  beforeEach(() => {
    const posts: Post[] = [
      {
        text: 'first post',
        userId: '1',
      },
      {
        text: 'second post',
        userId: '1'
      }
    ]
    sinon.stub(api, 'getUserPosts').resolves({
      json: () => Promise.resolve(posts)
    })

    sinon.stub(api, 'postUserPost').callsFake(async (post: Post) => {
      posts.push(post)
    })
  })

  afterEach(sinon.restore)

  it('should display the user\'s dashboards with their posts', async () => {
    expect(async () => {
        shallow(<Dashboard userId={'1'}/>)
    }).not.throw()
  })

  it('Should mount a child PostComposer', async () => {
    const callback = sinon.stub()
    sinon.stub(React, 'useState').callsFake((arg: any) => [arg, callback])
    const dashWrapper = mount(<Dashboard userId={'1'} />)
    await act(() => Promise.resolve(dashWrapper))
    const buttons = dashWrapper.find(Button)
    const button = buttons.first()
    await act(async () => button.simulate('click'))
    expect(dashWrapper.find(Posts).length).to.be.above(0)
    expect(dashWrapper.find('li').length).to.be.above(2)
  })
})
