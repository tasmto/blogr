import bcrypt from 'bcryptjs';
import {
  ADMIN,
  APPRENTICE,
  GURU,
  NORMEE,
  SAGE,
} from '../constants/userRoleConstants';
const users = [
  {
    firstName: 'Vax',
    lastName: 'Admin',
    email: 'vax@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: ADMIN,
    avatar: '/uploads/profiles/avatar-02.svg',
    protected: true,
  },
  {
    firstName: 'Vex',
    lastName: 'de Rolo',
    email: 'vex@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: SAGE,
    avatar: '/uploads/profiles/avatar-05.svg',
    protected: true,
  },
  {
    firstName: 'Pike',
    lastName: 'Trickfoot',
    email: 'pike@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: GURU,
    avatar: '/uploads/profiles/avatar-01.svg',
    protected: true,
  },
  {
    firstName: 'Scanlan',
    lastName: 'Shorthall',
    email: 'scanlan@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: APPRENTICE,
    avatar: '/uploads/profiles/avatar-07.svg',
    protected: true,
  },

  {
    firstName: 'Grog',
    lastName: 'Strongjaw',
    email: 'grog@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: NORMEE,
    avatar: '/uploads/profiles/avatar-09.svg',
    protected: true,
  },
];

export default users;
