import '../App.css'
const authLayout = (props) =>{
    return (<>
    <main class="bg-stone-400 h-screen space-x-4 flex">
        {props.children}
    </main>
    </>)
}
export default authLayout