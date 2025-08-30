import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import solid from 'eslint-plugin-solid';
import prettier from 'eslint-config-prettier';

export default [
  // Base JavaScript configuration
  js.configs.recommended,
  
  // Prettier configuration to disable conflicting rules
  prettier,
  
  // Global ignores
  {
    ignores: ['**/*.md', 'dist/**', 'node_modules/**', '*.config.js', '*.config.cjs', 'server.js']
  },
  
  // TypeScript and Solid configuration
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        // Browser globals
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        alert: 'readonly',
        FormData: 'readonly',
        RequestInit: 'readonly',
        HTMLElement: 'readonly',
        HTMLPreElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLAudioElement: 'readonly',
        HTMLDetailsElement: 'readonly',
        HTMLSpanElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        SVGSVGElement: 'readonly',
        Element: 'readonly',
        EventTarget: 'readonly',
        MutationRecord: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        Event: 'readonly',
        CustomEvent: 'readonly',
        DragEvent: 'readonly',
        InputEvent: 'readonly',
        PointerEvent: 'readonly',
        File: 'readonly',
        FileReader: 'readonly',
        Blob: 'readonly',
        Audio: 'readonly',
        MediaRecorder: 'readonly',
        MediaStream: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        MutationObserver: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        AbortController: 'readonly',
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'solid': solid
    },
    rules: {
      // TypeScript rules
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true
      }],
      
      // Solid rules
      'solid/no-innerhtml': 'off',
      
      // Disable console warnings for this project
      'no-console': 'off',
      
      // Disable Next.js specific rules (not needed for this project)
      '@next/next/no-img-element': 'off',
      '@next/next/no-html-link-for-pages': 'off'
    }
  }
];
