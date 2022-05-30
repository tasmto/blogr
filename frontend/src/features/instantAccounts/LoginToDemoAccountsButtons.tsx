import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  FiKey,
  FiLayers,
  FiCheckCircle,
  FiCheck,
  FiUser,
} from 'react-icons/fi';
import { login } from '../../redux/actions/userActions';
import accounts from '../fastLogin/LoginDemoAccounts';
import { useNavigate } from 'react-router-dom';
const LoginToDemoAccountsButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAccountSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(login(`${[e.target.id]}@example.com`, '@#!_*&(pa55'));
  };

  return (
    <div>
      <Button
        id='super'
        onClick={handleAccountSelect}
        variant='outline-primary'
        className='w-100 py-3 mb-2 rounded-4 '
        type='button'
      >
        <FiKey style={{ width: '20px', height: '20px' }} className='me-2' />
        <span>Super Admin</span>
      </Button>
      <Button
        id='admin'
        onClick={handleAccountSelect}
        variant='outline-dark'
        className='w-100 py-3 mb-2 rounded-4 '
        type='button'
      >
        <FiLayers style={{ width: '20px', height: '20px' }} className='me-2' />
        <span>Admin</span>
      </Button>
      <Button
        id='sherif'
        onClick={handleAccountSelect}
        variant='outline-info'
        className='w-100 py-3 mb-2 rounded-4 '
        type='button'
      >
        <FiCheckCircle
          style={{ width: '20px', height: '20px' }}
          className='me-2'
        />
        <span>Sherif</span>
      </Button>
      <Button
        id='deputy'
        onClick={handleAccountSelect}
        variant='outline-warning'
        className='w-100 py-3 mb-2 rounded-4 '
        type='button'
      >
        <FiCheck style={{ width: '20px', height: '20px' }} className='me-2' />
        <span>Deputy</span>
      </Button>
      <Button
        id='viewer'
        onClick={handleAccountSelect}
        variant='outline-success'
        className='w-100 py-3 mb-2 rounded-4 '
        type='button'
      >
        <FiUser style={{ width: '20px', height: '20px' }} className='me-2' />
        <span>Regular User</span>
      </Button>
    </div>
  );
};

export default LoginToDemoAccountsButtons;
