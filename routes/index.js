import express from 'express';

import auth from './auth.route';
import admin from './admin.route';
import post from './post.route';

export default (app) => {
  app.use(express.json());

  app.use('/api/v1/auth', auth);
  app.use('/api/v1/admin', admin);
  app.use('/api/v1/posts', post);
};
