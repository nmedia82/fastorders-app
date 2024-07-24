import React from 'react'
import { Container } from 'reactstrap'
import { useSelector } from 'react-redux';
import ProductFeatures from './ProductFeatures'
import { RootState } from '../../../../ReduxToolkit/Store';
import ProductGrid from './ProductGrid';

export default function ProductContainer() {
    const { sidebarOpen } = useSelector((state: RootState) => state.filter);

    return (
        <Container className={`product-wrapper ${sidebarOpen ? "sidebaron" : ""}`} fluid>
            <div className="product-grid">
                <ProductFeatures />
                <ProductGrid/>
            </div>
        </Container>
    )
}
