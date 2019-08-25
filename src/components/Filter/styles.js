import styled from 'styled-components'

export const FilterWrap = styled.div`
  background-color: #f4f4f4;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
`

export const FilterItem = styled.button`
  padding: .35rem .55rem;
  color: ${props => props.state === 'active' ? '#4c4c4c' : '#b2b2b2'}
`
