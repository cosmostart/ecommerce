import SingleCategory from '../atoms/SingleCategory';

function CategoryRow(props) {
    return(
        <div className="row mt-3">
        {
            props?.['categoryRow']?.[0].map((category)=><SingleCategory category={[category, props?.['categoryRow']?.[1]]}/>)
        }
        </div>
    )
}

export default CategoryRow;
