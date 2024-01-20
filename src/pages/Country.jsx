import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { countryId } = useParams();
  useEffect(() => {
    fetchCountry(countryId)
      .then(setCountryData)
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryId]);
  console.log(countryData);
  return (
    <Section>
      <Container>
        {countryData && <CountryInfo {...countryData} />}
        {error && <Heading>{error}</Heading>}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
