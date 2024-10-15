import { Button } from "./ui/button"
import '/src/App.css'
const blockPost = (props) => {
    return (<>
    <div class="grid grid-cols-2 border">
    <div>
    <h1  class="">{props.title}</h1>
    <div class="">
        {props.text}
    </div>
    </div>
    <a href={props.route}><Button class="mt-12 ">{">"}</Button></a>
    </div>
    </>)
}
export default blockPost