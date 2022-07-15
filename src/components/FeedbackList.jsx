import FeedbackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner"
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = () => {
const {feedback, isLoading} = useContext(FeedbackContext)

if(!isLoading && (!feedback || feedback.length===0)) {
    return <p>No Feedback Yet</p>
}

return(
 isLoading ? <Spinner>Loading...</Spinner> :
    <div className='feedback-list'>
  {feedback.map((item) => (
    <FeedbackItem key={item.id} item={item} />
  ))}
    </div>
  )


  //this animation is disobeying during the delete
  // return (
  //   <div className='feedback-list'>
  //   <AnimatePresence>
  //     {feedback.map((item) => (
  //       <motion.div
  //         key={item.id}
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         exit={{ opacity: 0 }}
  //         layout
  //       >
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //       </motion.div>
  //     ))}
  //   </AnimatePresence>
  // </div>
  // )
}

export default FeedbackList