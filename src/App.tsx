import React, { useState } from 'react';
import CategoryList from './CategoryList';
import SubcategoryList from './SubcategoryList';
import {categories} from './icategory.js';

interface Category {
  name: string;
  subcategories: string[];
}


const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      {selectedCategory === null ? (
        <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
      ) : (
        <SubcategoryList
          category={categories.find(cat => cat.name === selectedCategory)!}
          onBack={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}

export default App;