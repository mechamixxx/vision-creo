import React, { useContext } from 'react';
import { List, Button, ConfigProvider, Space } from "antd";
import { AntDesignOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';

interface SubcategoryListProps {
    category: { name: string; subcategories: string[] };
    onBack: () => void;
}

const SubcategoryList: React.FC<SubcategoryListProps> = ({ category, onBack }) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

    const rootPrefixCls = getPrefixCls();
    const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253E1, #04BEFE);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100vh',
            padding: '20px'
        }}>
            <div style={{ width: '100%', maxWidth: '400px' }}>
                <h1 style={{ textAlign: 'center' }}>{category.name}</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={category.subcategories}
                    renderItem={(item) => (
                        <List.Item style={{ textAlign: 'center' }}>
                            {item}
                        </List.Item>
                    )}
                />
                <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                    <ConfigProvider
                        button={{
                            className: linearGradientButton,
                        }}
                    >
                        <Space>
                            <Button type="primary" onClick={onBack} size="large" icon={<AntDesignOutlined />}>
                                Назад
                            </Button>

                        </Space>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};

export default SubcategoryList;

