import React, { useState, useEffect, Fragment } from 'react';
import ApiService from '../services/api-service';
import { Button } from 'reactstrap';

import styled from 'styled-components';

const GenButtonContainer = styled.div`
  margin-top: 1em;
`;

interface Props {}

const RandomNumber: React.FC<Props> = () => {
  const [data, setData] = useState(null);
  const [err, setError] = useState<String | null>(null);
  const getRandomNuber = async () => {
    try {
      const { data } = await ApiService.random();
      setData(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getRandomNuber();
  }, []);

  return (
    <Fragment>
      <h3>Get Random Number from Worker</h3>
      <strong>{data}</strong>
      <strong>{err}</strong>
      <GenButtonContainer>
        <Button color="primary" size="lg" onClick={getRandomNuber}>
          Generate
        </Button>
      </GenButtonContainer>
    </Fragment>
  );
};

export default RandomNumber;
