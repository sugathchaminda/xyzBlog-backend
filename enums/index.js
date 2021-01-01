const ENVIRONMENTS = Object.freeze({
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
});

const USER_STATUSES = Object.freeze({
  ACTIVE: 'Active',
  BLOCKED: 'Blocked',
  CLOSED: 'Closed',
  PENDING: 'Pending',
});

const POST_STATUSES = Object.freeze({
  ACTIVE: 'Active',
  DELETED: 'Deleted',
  PENDING: 'Pending',
  REJECTED: 'Rejected',
});

const USER_ROLES = Object.freeze({
  ADMIN: 'Admin',
  USER: 'User',
});

export {
  ENVIRONMENTS,
  USER_STATUSES,
  USER_ROLES,
  POST_STATUSES,
};
