import CategoryDetail from './CategoryDetail';

export async function generateStaticParams() {
  return [
    { category: 'technology' },
    { category: 'lifestyle' },
    { category: 'travel' },
    { category: 'business' },
    { category: 'health' },
    { category: 'food' },
  ];
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <CategoryDetail categoryName={params.category} />;
}