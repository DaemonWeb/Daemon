import { createResource, lazy, Component } from "solid-js";
import { OpenAPI, InventoryService, Item } from "../../../clover";
//import Inventory from "./Inventory";

//const Inventory = lazy(() => import("./Inventory"));


// this component lazy loads data and code in parallel
const Inventory: Component = () => { return (<h1>Inventory</h1>) }
  //   const [items] = createResource(async () => {
  //       // simulate data loading
  //       OpenAPI.BASE = import.meta.env.VITE_CLOVER_BASE_URL;
  //       OpenAPI.TOKEN = import.meta.env.VITE_CLOVER_API_KEY;
  //       return (await InventoryService.inventoryGetItems(
  //               import.meta.env.VITE_CLOVER_MERCHANT_ID
  //           ))
  //           .elements
  //           .filter((item: Item) => item.autoManage) as Item[];
  //   });
  // return <Inventory items={items()}/>;
export default Inventory;
