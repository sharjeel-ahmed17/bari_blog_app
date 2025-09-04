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

// ✅ Define props manually
type CategoryPageProps = {
  params: { category: string };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryDetail categoryName={params.category} />;
}
