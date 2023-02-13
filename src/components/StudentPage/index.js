import ResultItem from "../ResultItem"
import "./index.css"

const StudentPage =()=>{
    const allListItem=localStorage.getItem("allCalculationsLists")
    const parsedCalculations=JSON.parse(allListItem)
    console.log(parsedCalculations)

    return (
        <div className="results_list_container">
            <h1 className="main_heading">Check The Activity Here : </h1>
            <ul className="list_container">
            {parsedCalculations.map(eachItem => (
          <ResultItem key={eachItem.id} itemDetails={eachItem} />
        ))}
            </ul>
        </div>
    )
}

export default StudentPage