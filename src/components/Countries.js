import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../queries';

const Countries = () => {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mt-5">
      <h2>Countries</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.continent.countries.map(country => (
            <tr key={country.code}>
              <td>{country.code}</td>
              <td>{country.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Countries;