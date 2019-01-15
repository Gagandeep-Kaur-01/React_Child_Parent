import React from 'react';

const child = (props) => {
  return (
<div>

<button onClick={props.work}>{props.title}
</button>
</div>
)
}

export default child;
