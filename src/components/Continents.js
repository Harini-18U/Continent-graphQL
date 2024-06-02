import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_CONTINENTS } from '../queries';

const Continents = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mt-5">
      <h2>Continents</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.continents.map(continent => (
            <tr key={continent.code}>
              <td>{continent.code}</td>
              <td>
                <Link to={`/continent/${continent.code}`}>{continent.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Continents;