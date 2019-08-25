import React, { Component } from 'react'

import { FilterWrap, FilterItem } from './styles'
import db from '../../config';

export class Filter  extends Component {
  state = {
    categories: ['Todos']
  }

  componentDidMount() {
    const arr = ['Todos']
    
    db.collection('services').get().then(snapshot => {
      snapshot.docs.map(doc => {
        if (arr.indexOf(doc.data().category) < 0) {
          arr.push(doc.data().category)
        } 
      })

      this.setState({
        categories: arr
      })
    })
  }

  handleChange = (category) => {
    this.props.onChange(category)
  }

  render() {
    const { categories } = this.state
    const { activeCategory } = this.props

    return (
      <FilterWrap>
        {
          categories.map((category) => (
            <FilterItem
              key={category}
              state={ category === activeCategory ? 'active' : '' }
              onClick={() => this.handleChange(category)}
            >
              {category}
            </FilterItem>
          ))
        }
        
      </FilterWrap>
    )
  }
}