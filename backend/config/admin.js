module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93f86ee6221ebdbb03f47172ac0133af'),
  },
});
