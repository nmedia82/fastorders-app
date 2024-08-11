import React, { useCallback, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ActiveCallbackProp } from "../../../Types/ECommerce.type";
import Inventory from "./Inventory";

export default function AdvanceSection({ activeCallBack }: ActiveCallbackProp) {
  const [borderTab, setBorderTab] = useState(1);
  const activeBorder = useCallback((val: number) => {
    setBorderTab(val);
  }, []);

  return (
    <div className="sidebar-body advance-options">
      <TabContent activeTab={borderTab}>
        <TabPane tabId={1}>
          <Inventory activeBorder={activeBorder} activeCallBack={activeCallBack} />
        </TabPane>
        <TabPane tabId={2}></TabPane>
        <TabPane tabId={3}>{/* <Shipping activeBorder={activeBorder} /> */}</TabPane>
      </TabContent>
    </div>
  );
}
