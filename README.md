# 🛠️ KeySmithy - Where strong passwords are forged.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

> KeySmithy forges strong, secure passwords with the craftsmanship of a blacksmith and the trust of a vault. Open source, privacy-first, and developer-friendly.

**🌐 [Live Demo](https://forgebyte.vercel.app)** | **📖 [Documentation](#documentation)** | **🐛 [Report Bug](https://github.com/saranshhardaha/forgebyte/issues)**

![KeySmithy logo](https://github.com/saranshhardaha/keysmithy/blob/master/public/keysmithy.webp?raw=true)

## ☕ Support the Creator

If KeySmithy has helped secure your digital life, consider supporting its development:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/saranshh)

Your support helps maintain and improve KeySmithy, keeping it free and open-source for everyone! 💙

---

## ✨ Features

### 🔒 **Security First**
- **Cryptographically Secure**: Uses Web Crypto API for true randomness
- **Client-Side Only**: No data ever leaves your browser
- **Industry Standards**: Follows NIST and security expert recommendations
- **Real-time Strength Analysis**: Entropy calculation and crack time estimation

### 🎯 **User Experience**
- **Instant Generation**: Press spacebar for quick password generation
- **Customizable Options**: Length, character types, and custom symbols
- **Quick Presets**: Basic, Strong, and Ultra Secure configurations
- **Password History**: Keep track of recently generated passwords
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 📚 **Educational**
- **Security Education**: Learn about password security and best practices
- **Common Mistakes**: Understand what to avoid when creating passwords
- **Guidelines**: Expert-recommended password creation guidelines
- **Visual Feedback**: Color-coded strength indicators and crack time estimates

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser with Web Crypto API support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saranshhardaha/forgebyte.git
   cd forgebyte
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

---

## 🛠️ How It Works

### Cryptographic Security

KeySmithy uses the **Web Crypto API** (`crypto.getRandomValues()`) to generate truly random passwords:

```typescript
// Simplified example of our secure generation
const generateSecurePassword = (options: PasswordOptions): string => {
  let charset = '';
  
  // Build character set based on options
  if (options.includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (options.includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.includeNumbers) charset += '0123456789';
  if (options.includeSpecialChars) charset += options.customSpecialChars;
  
  // Generate cryptographically secure random values
  const password = [];
  const values = new Uint32Array(options.length);
  crypto.getRandomValues(values); // 🔑 This is the key!
  
  for (let i = 0; i < options.length; i++) {
    const randomIndex = values[i] % charset.length;
    password.push(charset[randomIndex]);
  }
  
  return password.join('');
};
```

### Password Strength Calculation

We calculate password strength using **entropy** (randomness):

- **Entropy Formula**: `log₂(charset_size^password_length)`
- **Crack Time**: Based on entropy assuming 1 billion guesses/second
- **Visual Feedback**: 5-level strength indicator with color coding

### Privacy Protection

- ✅ **No Network Requests**: Everything runs in your browser
- ✅ **No Analytics**: We don't track your usage
- ✅ **No Storage**: Passwords aren't saved unless you choose to (locally only)
- ✅ **Open Source**: Fully auditable code

---

## 🎨 Technology Stack

| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **React 18** | UI Framework | Component-based architecture, excellent ecosystem |
| **TypeScript** | Type Safety | Prevents bugs, better developer experience |
| **Vite** | Build Tool | Fast development, optimized builds |
| **Tailwind CSS** | Styling | Utility-first, responsive design |
| **Radix UI** | Components | Accessible, unstyled components |
| **Lucide React** | Icons | Beautiful, consistent icon set |
| **Web Crypto API** | Security | Browser-native cryptographic functions |

---

## 📱 Browser Support

KeySmithy works on all modern browsers that support the Web Crypto API:

- ✅ Chrome 37+
- ✅ Firefox 34+
- ✅ Safari 7+
- ✅ Edge 12+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
Found a bug? [Open an issue](https://github.com/saranshhardaha/forgebyte/issues) with:
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable

### 💡 Feature Requests
Have an idea? [Create a feature request](https://github.com/saranshhardaha/forgebyte/issues) with:
- Clear description of the feature
- Use case and benefits
- Mockups or examples (if applicable)

### 🔧 Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push and create a Pull Request**

### 📝 Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Ensure responsive design
- Test on multiple browsers
- Update documentation as needed

---

## 🔧 Configuration

### Customization

You can customize KeySmithy by modifying:

- **Colors**: Edit `tailwind.config.js`
- **Default Settings**: Modify `src/App.tsx`
- **Character Sets**: Update `src/utils/passwordGenerator.ts`
- **Presets**: Edit `src/components/Presets.tsx`

---

## 📊 Performance

KeySmithy is optimized for performance:

- **Bundle Size**: < 200KB gzipped
- **First Paint**: < 1s on 3G
- **Lighthouse Score**: 95+ across all metrics
- **Zero Dependencies**: For crypto operations

---

## 🔒 Security Considerations

### What We Do
- ✅ Use cryptographically secure random number generation
- ✅ Never send data to external servers
- ✅ Implement proper entropy calculations
- ✅ Follow security best practices

### What You Should Do
- 🔐 Use a password manager to store generated passwords
- 🔄 Enable two-factor authentication where possible
- 📱 Keep your browser updated
- 🚫 Don't reuse passwords across sites

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 KeySmithy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **Web Crypto API** - For providing secure randomness
- **NIST Guidelines** - For password security standards
- **Open Source Community** - For the amazing tools and libraries
- **Security Researchers** - For continuous improvements in password security

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/saranshhardaha/forgebyte/issues)
- **Discussions**: [GitHub Discussions](https://github.com/saranshhardaha/forgebyte/discussions)
- **Email**: security@forgebyte.dev
- **Ko-fi**: [Support the Creator](https://ko-fi.com/saranshh)

---

## 🌟 Star History

If KeySmithy helped you, please consider giving it a star! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=saranshhardaha/forgebyte&type=Date)](https://star-history.com/#saranshhardaha/forgebyte&Date)

---

<div align="center">

**Made with ❤️ for security and privacy**

[🔐 Generate Secure Passwords](https://forgebyte.vercel.app) • [⭐ Star on GitHub](https://github.com/saranshhardaha/forgebyte) • [☕ Support Creator](https://ko-fi.com/saranshh)

</div>