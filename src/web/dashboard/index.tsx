import * as React from 'react'
import { render } from 'react-dom'
import { Dashboard, DashboardProps } from './dashboard'

const dataElement = document.getElementById('data')
const data: DashboardProps = { userId: '-1' }
if (dataElement && dataElement.dataset && dataElement.dataset.userid) {
  data.userId = dataElement.dataset.userid
}

render(<Dashboard userId={data.userId}/>, document.getElementById('root'))
