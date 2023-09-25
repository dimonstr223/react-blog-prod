import React, {Suspense, useContext, useState} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import classNames from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <AppRouter/>
    </div>
  )
}

export default App
