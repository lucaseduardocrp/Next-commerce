import React from "react"
import { Col, Row } from "reactstrap"
import { ProductType } from "../services/products"
import ProductCard from "./ProductCard"

type ProductListProps = {
  products: ProductType[]
}

export default function ProductsList({ products }: ProductListProps) {
  
  return (
    <>
      <Row className="g-5">
        {products.map(product => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProductCard
              product={product}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}
