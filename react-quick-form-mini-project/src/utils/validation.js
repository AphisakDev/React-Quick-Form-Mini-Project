// Validation utility functions for the movie survey form

/**
 * Validates whether an email address is in the correct format.
 * @param {string} email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Validates the survey form data.
 * @param {object} formData
 * @returns {object} Object containing field names and error messages
 */
export function validateForm(formData) {
  const errors = {};

  // 1. Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }

  // 2. Email validation
  if (!formData.email || !formData.email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!validateEmail(formData.email.trim())) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }

  // 3. Movie selection validation
  if (!formData.movie) {
    errors.movie = "กรุณาเลือกหนังที่คุณชอบ";
  }

  return errors;
}
