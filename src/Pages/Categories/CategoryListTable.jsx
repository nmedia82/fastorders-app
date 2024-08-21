import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Components/Applications/ECommerce/Common/FilterComponent";
import { CategoryTableTypes } from "../../Types/ECommerce.type";
import { useSelector } from "react-redux";
import { FormGroup, Input } from "reactstrap";
import { Badges, Image, P } from "../../AbstractElements";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

export default function CategoryListTable() {
  const categoryColumns = [
    {
      name: "",
      cell: () => (
        <FormGroup check>
          <Input className="checkbox-primary" type="checkbox" />
        </FormGroup>
      ),
      sortable: false,
      width: "3%",
    },
    // {
    //   name: "Category",
    //   selector: (row) => row.categoryName,
    //   sortable: true,
    //   cell: (row) => (
    //     <div className="product-names">
    //       <div className="light-product-box">
    //         <Image className="img-fluid" src={row.image} alt="t-shirt" />
    //       </div>
    //       <P>{row.categoryName}</P>
    //     </div>
    //   ),
    //   width: "15%",
    // },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <p>{row.name}</p>,
      width: "35%",
    },
    {
      name: "Action",
      cell: () => (
        <div className="product-action">
          <SvgIcon iconId="edit-content" />
          <SvgIcon iconId="trash1" />
        </div>
      ),
      sortable: false,
    },
  ];

  const CustomType = ({ color, text }) => (
    <Badges color={`light-${color}`} className={`txt-${color}`}>
      {text}
    </Badges>
  );
  const [filterText, setFilterText] = useState("");
  const { categories } = useSelector((state) => state.products);
  const filteredItems = categories.filter((item) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div className="list-product list-category">
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
      <DataTable
        className="custom-scrollbar"
        data={filteredItems}
        columns={categoryColumns}
        pagination
      />
    </div>
  );
}
