import React from 'react';
import { user } from '../tests/__mocks__/mockData';
import Avatar from '../components/Avatar';
import LoginCard from '../components/LoginCard';
import HeaderCard from '../components/HeaderCard';
import Button from '../components/Button';

const Home = () => (
  <div>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    <Avatar user={user} />
    <HeaderCard />
    <LoginCard />
    <Button text="Engage" />
  </div>
);

export default Home;
