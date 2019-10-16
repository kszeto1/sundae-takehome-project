import React from 'react';
import StepsNumber from './StepsNumber.jsx';
import TextItem from './TextItem.jsx';

const ListItem = (props) => {

  const textContentsObj = {
    1: ['FREE HOME ASSESSMENT', "Fill out the form below and we'll contac you within 24 hours to schedule your free, no obligation assessment."],
    2: ['GET A CASH OFFER', "Sundae provides the highest off-market price for your house as-is. We also offer a $10,000 cash advance if you need more immediate financial support prior to closing."],
    3: ['CLOSE AT YOUR PACE', "Close as quickly as 10 days. Or take your time and close up to 60 days after you accept your offer. It’s up to you. "],
  }
 return (
   <div className="list-item">
    <div>
      <StepsNumber number="1"/>
      <TextItem title={textContentsObj[1][0]} desc={textContentsObj[1][1]} />
    </div>
    <div>
      <StepsNumber number="2" />
      <TextItem title={textContentsObj[2][0]} desc={textContentsObj[2][1]} />
    </div>
    <div>
      <StepsNumber number="3"/>
      <TextItem title={textContentsObj[3][0]} desc={textContentsObj[3][1]} />
    </div>
   </div>
 )
}

export default ListItem;