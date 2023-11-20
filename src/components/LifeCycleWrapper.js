import LifeCycleExample from "./LifeCycleExample"


const LifeCycleWrapper = () => {
    const [isLifeCycleVisible, setLifeCycleVisibility] = useState(true);
    return (
        <div>
            { isLifeCycleVisible ? <LifeCycleExample /> : null }
             <input type='checkbox' checked={isLifeCycleVisible} onChange={() => setLifeCycleVisibility(!isLifeCycleVisible)}/> Set Visibility
        </div>
    )
}

export default LifeCycleWrapper;