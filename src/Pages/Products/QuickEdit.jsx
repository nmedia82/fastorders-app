import React, { useState, useEffect } from "react";
import {
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { Add, Cancel, Typography } from "../../Utils/Constants";
import { Btn, H6 } from "../../AbstractElements";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../ReduxToolkit/Reducers/ProductsReducer";
import { getVendorID } from "../../services/helper";
import { useNavigate } from "react-router-dom";
// import ToolbarBox from "../../AddProduct/ProductTabContents/Common/ToolbarBox";

export default function QuickEdit({ Product, setEdit, Edit }) {
  const [Loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    setProduct(Product);
  }, [Product]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSave = async () => {
    const vendor_id = await getVendorID();
    const randomID = Math.random().toString(36).substring(2, 10);
    const formatedCategories = product.categories.map((cat) => cat.id);
    // console.log(formatedCategories);
    setLoading(true);
    try {
      const productData = {
        ...product,
        categories: formatedCategories,
        sku: "",
      };
      // Dispatch the updateProduct action
      const resp = await dispatch(updateProduct(productData));
      if (resp.payload.success) {
        toast.success("Product Updated successfully");
        navigate(`${process.env.PUBLIC_URL}/products`);
      }
      setLoading(false);
    } catch (e) {
      toast.error(`Failed to save product: ${e.message}`);
      console.error(e);
    }
    setEdit(false);
  };
  return (
    <Col xs={12}>
      <Modal isOpen={Edit} toggle={setEdit} size="lg">
        <ModalHeader toggle={setEdit}>
          Edit Product ( {product.name} )
        </ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <Row>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>Sale Price</Label>
                  <Input
                    type="number"
                    name="sale_price"
                    value={product.sale_price}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>stock</Label>
                  <Input
                    disabled={!product?.manage_stock}
                    type="number"
                    name="stock_quantity"
                    value={product.stock_quantity}
                    onChange={(e) => handleChange(e)}
                  />
                  {!product?.manage_stock && (
                    <H6 className="txt-danger">
                      Please Enable Stock to Update this
                    </H6>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Btn
            color="light"
            onClick={() => {
              setEdit(false);
            }}
          >
            {Cancel}
          </Btn>
          <Btn color="primary" onClick={handleSave}>
            {Add}
          </Btn>
        </ModalFooter>
      </Modal>
    </Col>
  );
}
