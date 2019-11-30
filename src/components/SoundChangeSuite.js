import React, { useState } from 'react';
import './SoundChangeSuite.scss';

const SoundChangeSuite = props => {
  const [ epoch, setEpoch ] = useState(props.epoch ? props.epoch : {name:'', changes:['']})
  return (
    <div className="SoundChangeSuite" data-testid={`${epoch.name}_SoundChangeSuite`}>
      <h4>{epoch.name}</h4>
      <form className="SoundChangeSuite__form" data-testid={`${epoch.name}_SoundChangeSuite_changes`}>
        <textarea name="epoch" id="" cols="30" rows="1" value={epoch.name} onChange={e=>setEpoch({...epoch, name:e.target.value})} ></textarea>
        <textarea name="changes" id="" cols="30" rows="10" 
          value={epoch.changes.join('\n')} 
          onChange={e=>setEpoch({...epoch, changes:e.target.value.split(/\n/)})}
        ></textarea>
      </form>
      <form onSubmit={e=>props.removeEpoch(e, epoch.name)}>
        <input type="submit" name="remove-epoch" value={`remove ${epoch.name}`}></input>
      </form>
    </div>
  );
}

export default SoundChangeSuite;