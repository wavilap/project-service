import styled from 'styled-components'

export const FormWrap = styled.form`
  border: 1px solid #ccc;
  border-radius: .25rem;
  overflow: hidden;
`

export const FormFields = styled.div`
  padding: 1.25rem;

  h5 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: .5rem;
  }
`

export const Field = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: .35rem;
  }

  input,
  select {
    width: 100%;
    height: 36px;
    border: 1px solid #ccc;
    padding: .25rem .5rem;
    border-radius: .25rem;
  }
`

export const FormAction = styled.div`
  background-color: #efefef;
  padding: .75rem 1.25rem;

  button {
    font-size: 0.875rem;
    padding: .55rem .75rem;
    border: 1px solid #ccc;
    border-radius: .25rem;
    margin-right: .5rem;
  }
`