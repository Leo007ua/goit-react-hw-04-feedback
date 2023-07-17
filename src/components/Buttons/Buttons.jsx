import PropTypes from 'prop-types';
import { Section } from './ButtonsStyled';

function Buttons({ onBtnClick, btnKeys }) {
  return (
    <Section>
      <h2>Please leave feedback</h2>
      <div>
        {btnKeys.map(btnKey =>
          <button style={{ color: 'lightgreen' }} key={btnKey} name={btnKey} onClick={onBtnClick}>
            {btnKey}
          </button>
        )}
      </div>
      <h2>Statistics</h2>
    </Section>
  );
}

Buttons.propTypes = {
    onBtnClick: PropTypes.func.isRequired,
    btnKeys: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Buttons;