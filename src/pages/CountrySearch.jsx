import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = searchParams.get('region');
    if (!query) return;

    setIsLoading(true);

    fetchByRegion(query)
      .then(setCountries)
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);
  const handleSubmit = region => {
    setsearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm handleSubmit={handleSubmit} />
        <CountryList countries={countries} />
        {error && <Heading>{error}</Heading>}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
