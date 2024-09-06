import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Components/Applications/ECommerce/Common/FilterComponent";
import { useSelector } from "react-redux";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  deletePaymentType,
  fetchPaymentTypes,
} from "../../ReduxToolkit/Reducers/AppReducer";

export default function ListTable({ setPaymentType }) {
  const Columns = [
    {
      name: "Id ",
      selector: (row) => row?.id,
      sortable: true,
      cell: (row) => <p>{row?.id}</p>,
      width: "15%",
    },
    {
      name: "Title",
      selector: (row) => row?.title,
      sortable: true,
      cell: (row) => <p>{row?.title}</p>,
      width: "15%",
    },
    {
      name: "Description",
      selector: (row) => row?.description,
      sortable: true,
      cell: (row) => <p>{row?.description}</p>,
      width: "35%",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="product-action">
          <SvgIcon iconId="edit-content" onClick={() => setPaymentType(row)} />
          <SvgIcon iconId="trash1" onClick={() => handleDelete(row)} />
        </div>
      ),
      sortable: false,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPaymentTypes());
  }, []);

  const [filterText, setFilterText] = useState("");
  const { paymentTypes } = useSelector((state) => state.app);
  const filteredItems = paymentTypes.filter((item) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  const handleDelete = async (data) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--theme-red)",
      cancelButtonColor: "var(--theme-blue)",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        const resp = await dispatch(deletePaymentType(data.id));
        if (resp.payload.success) {
          toast.success("Payment Type Deleted");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error Deleting Payment Type");
      }
    }
  };
  return (
    <div className="list-product list-category">
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
      <DataTable
        className="custom-scrollbar"
        data={filteredItems}
        columns={Columns}
        pagination
      />
    </div>
  );
}
