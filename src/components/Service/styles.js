import styled from 'styled-components'

export const Card = styled.article`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: .25rem;
  overflow: hidden;
`

export const CardHeader = styled.div`
  padding: 1.25rem 1.25rem;

  p {
    min-height: 42px;
  }
`

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`

export const CardFooter = styled.div`
  background-color: #efefef;
  padding: .75rem 1.25rem;
  border-top: 1px solid #ccc;

  button {
    font-size: 13px;
    font-weight: 600;
    color: #5b9ceb;
    padding: .5rem;
    transition: color 200ms ease;

    &:hover {
      color: #1b76e3;
    }
  }
`