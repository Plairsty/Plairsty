// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import GlobalLayout from './layouts/GlobalLayout/GlobalLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={GlobalLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/signin" page={SigninPage} name="signin" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
