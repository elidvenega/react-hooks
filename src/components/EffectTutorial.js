import React, {useState,useEffect} from 'react';
// useffect is a sid effect
function EffectTutorial() {
    const [resourceType, setResourceType] = useState('posts');
    
    useEffect(() => {
      console.log('render');
    },[])

  return (
  <>
   <div>
       <button onClick={() => setResourceType('posts')}>Posts</button>
       <button onClick={() => setResourceType('users')}>Users</button>
       <button onClick={() => setResourceType('comments')}>Comments</button>
   </div>
   <h1>{resourceType}</h1>
  </>
  )
}

export default EffectTutorial;



