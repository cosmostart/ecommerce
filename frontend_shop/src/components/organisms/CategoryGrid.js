import CategoryRow from '../molecules/CategoryRow';

function CategoryGrid(props) {
    return (
        <>
        <CategoryRow categoryRow = {[props?.['categories'].slice(0, 3), 2]}/>
        <CategoryRow categoryRow = {[props?.['categories'].slice(3, 5), 3]}/>
        <CategoryRow categoryRow = {[props?.['categories'].slice(5, 8), 2]}/>
        </>
    )
}

export default CategoryGrid;