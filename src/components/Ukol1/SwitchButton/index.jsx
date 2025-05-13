import './style.css';

export const SwitchButton = ({ onSwitch, on }) => {
  return (
    <>
      <button
        className="switch-button switch-button--on"
        onClick={() => onSwitch()}
      >
        <i className="switch-icon" />
        <div className="button-label">{on ? 'Vypnout' : 'Zapnout'}</div>
      </button>
    </>
  );
};
