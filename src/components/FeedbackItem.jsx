import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import PropTypes from 'prop-types'

const FeedbackItem = ({ item }) => {
    const {rating, text} = item 
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
<div className='num-display'>{rating}</div>
<button  onClick={() =>deleteFeedback(item.id)} className='close'>
    <FaTimes color='Purple' />
</button>
<button onClick={() =>editFeedback(item)} className='edit'>
  <FaEdit color='purple' />
</button>
<div className='text-display'>{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem 