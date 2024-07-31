import { Children } from "react";








const reactElement={
    type:'a',
    props:
    {
        href: 'https://google.com/',
        target:'_blank'
    },
    Children: "click me to visit "
}
const mainContainter=document.querySelector('#root')
Customrender(reactElement,mainContainter)