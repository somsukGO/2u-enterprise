const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersPermissionsUserSchema = Schema(
  {
    confirmed: {
      type: Boolean,
    },
    blocked: {
      type: Boolean,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    provider: {
      type: String,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'departments',
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employees',
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users-permissions_role',
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
  },
  { timestamps: true }
);

const UsersPermissionsUser = mongoose.model('users-permissions_user', usersPermissionsUserSchema);

module.exports = UsersPermissionsUser;
