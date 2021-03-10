import { render } from '@testing-library/react'
import { PeopleTable } from '../PeopleTable'
import mock from '../../../mocks/people.json';

describe('PeopleTable', () => {
  let container

  beforeEach(() => {
    ({ container } = render(<PeopleTable people={mock} />))
  })

  it('renders a table', () => {
    expect(container.querySelector('table')).not.toBeNull()
  })

  it('shows the exact number of children', () => {
    expect(container.querySelector('tbody').children).toHaveLength(mock.length)
  })

  it('displays the first name in the correct position', () => {
    expect(container.querySelector('tbody').children[0].firstChild.innerHTML).toEqual(mock[0].fname);
  })

})