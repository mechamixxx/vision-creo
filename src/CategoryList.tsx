import React from 'react';
import { List } from "antd";

interface CategoryListProps {
    categories: { name: string; subcategories: string[] }[];
    onCategoryClick: (categoryName: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategoryClick }) => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
      }}>
        <div style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Категории</h1>
          <List
            itemLayout="horizontal"
            dataSource={categories}
            renderItem={(item) => (
              <List.Item onClick={() => onCategoryClick(item.name)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                {item.name}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
  
  export default CategoryList;