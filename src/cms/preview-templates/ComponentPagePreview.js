import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const ComponentPagePreview = ({ entry, widgetFor }) => {

  useEffect(() => {
    console.log(entry, widgetFor)
    debugger;
    console.log(widgetFor('body'))
    console.log(entry.getIn(['data', 'title']))
  }, [entry, widgetFor])
  
  return <div></div>
}

ComponentPagePreview.propTypes = {
  entry: PropTypes.shape({
  }),
  widgetFor: PropTypes.func,
}

export default ComponentPagePreview
