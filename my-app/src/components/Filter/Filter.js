import PropTypes from 'prop-types';

const style = {
  display: 'block',
};

function Filter({ onChange }) {
  return (
    <label htmlFor="filterInput">
      Find contacts by name
      <input
        type="text"
        onChange={onChange}
        name="filter"
        style={style}
        id="filterInput"
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
