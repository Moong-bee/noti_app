# Noti App

React와 TDD 방법론을 이용한 메모 사이트.

## 개발 일지

> 2021-07-24 create project

- Used CRA with Typescript
  ```bash
  //used yarn
  yarn create react-app [project_name] --template typescript
  ```
- Add Router, Style and Testing lib
  ```bash
  //used yarn
  yarn add react-router-dom styled-components
  yarn add -D @types/react-router-dom @types/styled-components jest-styled-components
  ```
- Execute ESLint and Prettyter on commit
  ```bash
  yarn add -D husky lint-staged prettier
  ```
- Change README.md
- Create .prettierrc.js