import React from 'react';
import './ProtoLang.scss';

const ProtoLang = (props) => {
  return (
    <div className="ProtoLang" data-testid="ProtoLang">
      <h3>Proto Language Lexicon</h3>
      <br />
      <form data-testid="ProtoLang-Lexicon">
        <textarea
          name="lexicon" 
          value={props.lexicon ? props.lexicon.join("\n") : ''}
          onChange={e=>props.setLexicon(e.target.value.split(/\n/))}
          >
        </textarea>
      </form>
    </div>
  );
}

export default ProtoLang;