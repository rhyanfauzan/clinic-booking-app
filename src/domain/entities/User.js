// src/domain/entities/User.js

export default class User {
  constructor(id, email, firstName, lastName, avatar) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  }
}

export class RegisterUser {
  constructor(username, email, password, fullName, contact, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.contact = contact;
    this.role = role;
  }
}

export class LoginUser {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}