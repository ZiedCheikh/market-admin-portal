module.exports = {
  hooks: {
    'pre-commit': 'ng lint', // Run linting before commit
    'pre-push': 'ng test', // Run tests before pushing
  },
};
