import React from 'react';
import Accounts from '../../components/Accounts/Accounts';
import Balance from '../../components/Balance/Balance';
import PageWrapper from '../../Wrappers/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <Accounts />
      <Balance />
    </PageWrapper>
  );
};

export default Home;
