import Home from './components/home/Home'
import First from './components/first/first'
import Second from './components/second/second'
import Third from './components/third/third'
import FirstChild1 from './components/firstchild1/firstchild1'
import FirstChild2 from './components/firstchild2/firstchild2'
import FirstChild3 from './components/firstchild3/firstchild3'

let routes = [
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/first",
                element: <First />,
                children: [
                    { path: "/first/firstchild1/:id", element: <FirstChild1 /> },
                    { path: "/first/firstchild2/:id", element: <FirstChild2 /> },
                    { path: "/first/firstchild3/:id", element: <FirstChild3 /> }
                ]
            },
            {
                path: "/second",
                element: <Second />
            },
            {
                path: "/third",
                element: <Third />
            }
        ]
    },
    { path: "*", element: <Home /> }
];

export default routes;