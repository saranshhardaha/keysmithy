# Contributing to KeySmithy

Thank you for your interest in contributing to KeySmithy! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details**:
  - Browser name and version
  - Operating system
  - Device type (desktop/mobile)

### 💡 Suggesting Features

Feature suggestions are welcome! Please:

- Check existing feature requests first
- Provide a clear description of the feature
- Explain the use case and benefits
- Include mockups or examples if helpful

### 🔧 Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with descriptive messages**
6. **Push and create a Pull Request**

## 📝 Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development
```bash
# Clone your fork
git clone https://github.com/saranshhardaha/keysmithy.git
cd keysmithy

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 🎨 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary

### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors

### File Organization
- Keep components in `src/components/`
- Put utilities in `src/utils/`
- Store types in `src/types.ts`
- Follow existing naming conventions

## 🧪 Testing

While we don't have automated tests yet, please:
- Test your changes manually
- Verify responsive design on different screen sizes
- Check browser compatibility
- Ensure accessibility standards

## 📚 Documentation

When contributing:
- Update README.md if needed
- Add JSDoc comments for complex functions
- Update type definitions
- Include examples for new features

## 🔒 Security Considerations

KeySmithy handles sensitive data (passwords), so:
- Never log passwords or sensitive data
- Ensure all crypto operations use Web Crypto API
- Don't introduce external dependencies for security features
- Follow secure coding practices

## 🚀 Pull Request Process

1. **Update documentation** if needed
2. **Ensure responsive design** works on all screen sizes
3. **Test browser compatibility**
4. **Write clear commit messages** using conventional commits:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `style:` for formatting changes
   - `refactor:` for code refactoring

5. **Create detailed PR description** including:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots for UI changes

## 🎯 Priority Areas

We especially welcome contributions in:
- **Accessibility improvements**
- **Performance optimizations**
- **Mobile experience enhancements**
- **Security audits and improvements**
- **Documentation and examples**
- **Internationalization (i18n)**

## ❓ Questions?

If you have questions about contributing:
- Check existing [GitHub Discussions](https://github.com/saranshhardaha/keysmithy/discussions)
- Create a new discussion
- Reach out via email: contribute@keysmithy.dev

## 🙏 Recognition

All contributors will be:
- Listed in the README
- Credited in release notes
- Given a shoutout on social media (if desired)

Thank you for helping make KeySmithy better for everyone! 🔐✨