import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Global ignores
  {
    ignores: [
      'dist/**',
      'build/**', 
      'node_modules/**',
      'public/**',
      '*.min.js',
      '*.bundle.js',
      'assets/js/**',
      'assets/**/js/**',
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        performance: 'readonly',
        Image: 'readonly',
        HTMLElement: 'readonly',
        SVGElement: 'readonly',
        Element: 'readonly',
        URL: 'readonly',
        AbortController: 'readonly',
        MessageChannel: 'readonly',
        DOMException: 'readonly',
        queueMicrotask: 'readonly',
        getComputedStyle: 'readonly',
        IntersectionObserver: 'readonly',
        PointerEvent: 'readonly',
        reportError: 'readonly',
        setImmediate: 'readonly',
        MSApp: 'readonly',
        
        // React DevTools
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
        
        // Node.js globals
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      // Relax some rules for better development experience
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      globals: {
        // Node.js globals for config files
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        console: 'readonly',
      },
    },
  },
]; 