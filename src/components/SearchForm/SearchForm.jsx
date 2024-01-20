import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ handleSubmit }) => {
  const [region, setRegion] = useState('');
  const handleChange = evt => {
    setRegion(evt.target.value);
  };
  const submitSerchForm = evt => {
    evt.preventDefault();
    handleSubmit(region);
  };
  return (
    <SearchFormStyled onSubmit={submitSerchForm}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        defaultValue="default"
        name="region"
        required
        onChange={handleChange}
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
