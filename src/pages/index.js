import { useState } from 'react';

import Layout from '../component/Layout/Layout';
import styles from '../styles/Home.module.css';
import SearchInput from '../component/SearchInput/SearchInput';
import CountriesTable from '../component/CountriesTable/CountriesTable';

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState('');
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const handleInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>
          found {filteredCountries.length} countries
        </div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by name, region or sub regions"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
