import React from 'react';
import '../styles/TopicListItem.scss';


const TopicListItem = (props) => {
  const topic = props.topic;

  const newTopicHandler = () => {
    props.newTopic(topic);
  };

  return (
    <div className="topic-list__item" onClick={newTopicHandler}>
      <span>{topic.title}</span>
    </div>
  );
};

// TopicListItem.defaultProps =   {
//   "id": "1",
//   "slug": "topic-1",
//   "label": "Nature"
// };

export default TopicListItem;