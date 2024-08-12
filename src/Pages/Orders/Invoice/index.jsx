import React, { useEffect, useState } from "react";
import Invoice2Container from "../../../Components/Applications/ECommerce/Invoices/Invoice2";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../services/http";
import { getAPIURL } from "../../../services/helper";
import Loader from "../../../Layout/Loader";

const OrderInvoice = () => {
  const { order_id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // In case you need to navigate based on errors

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const api_url = getAPIURL();
        const { data: order } = await http.get(`${api_url}/order/${order_id}`);
        setOrder(order.data);
      } catch (error) {
        console.error("Error fetching order:", error);
        // Optionally navigate to an error page or display an error message
        // navigate("/error");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [order_id]);

  return (
    <div className="page-body">
      {loading && <Loader />}
      {order && <Invoice2Container order={order} />}
    </div>
  );
};

export default OrderInvoice;
