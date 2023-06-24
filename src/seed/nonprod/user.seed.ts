export const userSeedData = [
  {
    id: '00000000-0000-4000-a000-000000000001',
    nickName: 'Joe Rogan',
    email: 'joe.rogan@gmail.com',
    password: '$2b$12$m7GWqn9WBI3AwDJNmlnqC.DoD1b4SC7z8Ev5E.cxhig8kEP5pW0O2',
    firstName: 'Joe',
    lastName: 'Rogan'
  },
  {
    id: '00000000-0000-4000-a000-000000000002',
    nickName: 'Mark Hunt and Deep Mind',
    email: 'mark.hunt@gmail.com',
    password: '$2b$12$m7GWqn9WBI3AwDJNmlnqC.DoD1b4SC7z8Ev5E.cxhig8kEP5pW0O2',
    firstName: 'Mark',
    lastName: 'Hunt',
   
  },
  {
    id: '00000000-0000-4000-a000-000000000003',
    nickName: 'Jenny',
    email: 'jenny23@gmail.com',
    password: '$2b$12$m7GWqn9WBI3AwDJNmlnqC.DoD1b4SC7z8Ev5E.cxhig8kEP5pW0O2',
    firstName: 'Janny',
    lastName: 'Janny'
  },
];

export type UserSeedData = (typeof userSeedData)[0];
