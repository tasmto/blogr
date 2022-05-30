import bcrypt from 'bcryptjs';

const users = [
  {
    firstName: 'Super',
    lastName: 'Admin',
    email: 'super@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: 'superAdmin',
    avatar: '/uploads/profiles/avatar-02.svg',
    protected: true,
  },
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: 'admin',
    avatar: '/uploads/profiles/avatar-05.svg',
    protected: true,
  },
  {
    firstName: 'Clint',
    lastName: 'Eastwood',
    email: 'sherif@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: 'sherif',
    avatar: '/uploads/profiles/avatar-01.svg',
    protected: true,
  },
  {
    firstName: 'Deputy',
    lastName: 'McGee',
    email: 'deputy@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: 'deputy',
    avatar: '/uploads/profiles/avatar-07.svg',
    protected: true,
  },

  {
    firstName: 'Lance',
    lastName: 'viewer',
    email: 'viewer@example.com',
    password: bcrypt.hashSync('@#!_*&(pa55', 10),
    role: 'viewer',
    avatar: '/uploads/profiles/avatar-09.svg',
    protected: true,
  },
];

export default users;
