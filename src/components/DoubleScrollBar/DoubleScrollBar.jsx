import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './DoubleScrollBar.css';

function DoubleScrollBar({
  min, max, step, forid, onChange
}) {
  const [inputFrom, setInputFrom] = useState(min);
  const [inputTo, setInputTo] = useState(max);

  useEffect(() => {
    const slider = document.getElementById(`slider-${forid}`);
    if (inputFrom > inputTo) {
      slider.style.right = `${100 - ((inputFrom - min) / (max - min)) * 100}%`;
      slider.style.left = `${((inputTo - min) / (max - min)) * 100}%`;
    } else {
      slider.style.right = `${100 - ((inputTo - min) / (max - min)) * 100}%`;
      slider.style.left = `${((inputFrom - min) / (max - min)) * 100}%`;
    }
    onChange(inputFrom, inputTo);
  }, [inputFrom, inputTo, min, max, forid, onChange]);

  return (
    <div className="SB-1">
      <div className="range-slider">
        <span className="range-selected" id={`slider-${forid}`} />
      </div>
      <div className="range-input">
        <input
          type="range"
          onChange={(e) => setInputFrom(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
          defaultValue={min}
        />
        <input
          type="range"
          onChange={(e) => setInputTo(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
          defaultValue={max}
        />
      </div>
    </div>
  );
}

DoubleScrollBar.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  forid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DoubleScrollBar;
