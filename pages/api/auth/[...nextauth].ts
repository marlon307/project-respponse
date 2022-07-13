import NextAuth from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { api2 } from '../../../service/api';

const options: any = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const { data } = await api2.post('/login_user', {
          email: credentials?.email,
          password: credentials?.password,
        });
        if (data.token && data.user) {
          return data;
        }
        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    jwt({ token, user }: any) {
      return {
        token,
        user,
      };
    },
    session({ token: { token } }: any) {
      return { data: token.user };
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
