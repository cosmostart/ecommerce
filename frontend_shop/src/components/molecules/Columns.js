import NavLink from "../atoms/NavLink";

function Columns(props) {
    var lis = []
    for (let i = 1; i < props?.['columns']?.length; i++) {
        lis.push(
        <li className="nav-item mb-2">
            <NavLink navLink = {props?.['columns']?.[i]}/>
        </li>
        )
    }
    return (
        <div className="mb-3">
            {props?.['columns']?.[0] === "" &&
                <div style={{paddingTop: "26px"}}></div>
            }
            <h5 className="text-light">{props?.['columns']?.[0]}</h5>
            <ul className="nav flex-column">
                {lis}
            </ul>
        </div>
    )
}

export default Columns;
