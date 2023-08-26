import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <label className={css.filterLabel}>
      <h2 className={css.filterHeader}>Find contacts by name</h2>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
}

export default Filter;
