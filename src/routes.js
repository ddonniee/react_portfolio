import React from "react";

// import componenets
const Main = React.lazy(() => import('./views/Home/Main'))
// Login
/**
 * 컴포넌트명 : routes.js
 * 컴포넌트기능 : 라우팅
 * 작성자 : 이은정
 * 작성일 : 2023.07.15
 */
const routes = [
    { path:'/', exact: true, name:'Main', element: Main}, 
]
export default routes
