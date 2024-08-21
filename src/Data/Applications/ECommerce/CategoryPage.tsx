import { FormGroup, Input } from "reactstrap";
import { Badges, Image, P } from "../../../AbstractElements";
import {
  CategoryTableTypes,
  CustomCompoentType,
} from "../../../Types/ECommerce.type";
import { dynamicImage } from "../../../Utils";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { TableColumn } from "react-data-table-component";

export const productListBodyData = [
  {
    name: "Choose Product",
    options: [
      "Apple iphone 13 Pro",
      "Wood Chair",
      "M185 Compact Wireless Mouse",
    ],
  },
  {
    name: "Choose Category",
    options: ["Furniture", "Smart Gadgets", "Electrics"],
  },
  {
    name: "Choose Sub Category",
    options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
  },
  {
    name: "Status",
    options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
  },
  {
    name: "Price",
    options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
  },
];

const CustomImage = ({ src, name }: CustomCompoentType) => (
  <div className="product-names">
    <div className="light-product-box">
      <Image className="img-fluid" src={dynamicImage(src)} alt="t-shirt" />
    </div>
    <P>{name}</P>
  </div>
);

const CustomDescrioption = ({ text }: CustomCompoentType) => (
  <P className="f-light">{text}</P>
);

const CustomType = ({ color, text }: CustomCompoentType) => (
  <Badges color={`light-${color}`} className={`txt-${color}`}>
    {text}
  </Badges>
);

export const categoryTableData: CategoryTableTypes[] = [
  // {
  //   id: 1,
  //   image: "product/1.png",
  //   categoryName: "T-Shirts",
  //   description: "Special PriceGet at flat ₹229",
  //   categoryColor: "primary",
  //   categoryType: "Clothing",
  //   action: true,
  // },
];

export const categoryColumns: TableColumn<CategoryTableTypes>[] = [
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
  {
    name: "Category",
    selector: (row) => row.categoryName,
    sortable: true,
    cell: (row) => <CustomImage src={row.image} name={row.categoryName} />,
    width: "15%",
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
    cell: (row) => <CustomDescrioption text={row.description} />,
    width: "35%",
  },
  {
    name: "Category Type",
    selector: (row) => row.categoryType,
    sortable: true,
    cell: (row) => (
      <CustomType color={row.categoryColor} text={row.categoryType} />
    ),
  },
  {
    name: "Action",
    cell: () => (
      <div className="product-action">
        <SvgIcon iconId="edit-content" />
        <SvgIcon iconId="trash1" />
      </div>
    ),
    sortable: true,
  },
];
