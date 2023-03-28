import Home from "./Pages/Home"
import ServicePage from "./Pages/ServicesPage"
import FAQPage from "./Pages/FAQPage"
import ArticlesPage from "./Pages/ArticlesPage"
import UserCommentsPage from "./Pages/UserCommentsPage"


const routs = [
    { path: '/', element: <Home/> },
    { path: '/services', element: <ServicePage/> },
    { path: '/questions', element: <FAQPage/> },
    { path: '/articles/:articleId', element: <ArticlesPage/> },
    { path: '/userComments', element: <UserCommentsPage/> },
   
]

export default routs