import CategoryGrid from '../organisms/CategoryGrid';
import ProductGrid from '../organisms/ProductGrid';

function HomeTemplate(props) {
    return (
        <main className="mt-4">
        <div className="container">
            <CategoryGrid categories={props?.['homeTemplate']?.[0]}/>
            <ProductGrid products={props?.['homeTemplate']?.[1]}/>
        </div>
    </main>
    )
}

export default HomeTemplate;