// src/domain/entities/Doctor.js

export default class Doctor {
  constructor(id, email, full_name, profile_image, rating) {
    this.id = id;
    this.email = email;
    this.full_name = full_name;
    this.profile_image = profile_image;
    this.rating = rating;
  }
}
