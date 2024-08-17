import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { productDisplay } from "./product-display";
import { productSearch } from "./onesearch-oc-seaapi";

const TaskText = styled.input`
  padding: 5px;
  margin-right: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;
// API WORK
// static products = {
//   productStock: marketableStock,
//   productDisplay: productDisplay,
//   productSearch: productSearch,
// };

// products = {
//   productStock: {
//     getProductSupply: async (
//       productSupplyOptions: IProductSupplyOptions,
//       token: string | undefined = this.leShopToken,
//     ): Promise<any> => {
//       if (!token) {
//         throw Error("LeShop Token is undefined");
//       }
//       return await marketableStock.getProductSupply(productSupplyOptions, {
//         leshopch: token,
//       });
//     },
//   },
//   productDisplay: {
//     getProductCards: async (
//       productCardOptions: IProductCardsOptions,
//       token: string | undefined = this.leShopToken,
//     ): Promise<any> => {
//       if (!token) {
//         throw Error("LeShop Token is undefined");
//       }
//       return await productDisplay.getProductCards(productCardOptions, {
//         leshopch: token,
//       });
//     },
//     getProductDetails: async (
//       productSupplyOptions: IProductSupplyOptions,
//       token: string | undefined = this.leShopToken,
//     ): Promise<any> => {
//       if (!token) {
//         throw Error("LeShop Token is undefined");
//       }
//       return await productDisplay.getProductDetails(productSupplyOptions, {
//         leshopch: token,
//       });
//     },
//   },
//   productSearch: {
//     searchProduct: async (
//       productSearchBody: IProductSearchBody,
//       productSearchOptions?: IProductSearchOptions,
//       token: string | undefined = this.leShopToken,
//     ): Promise<any> => {
//       if (!token) {
//         throw Error("LeShop Token is undefined");
//       }
//       return await productSearch.searchProduct(
//         productSearchBody,
//         {
//           leshopch: token,
//         },
//         productSearchOptions,
//       );
//     },
//   },
// };

function App() {
  const Shops = [
    { name: "Migros" },
    { name: "BİM" },
    { name: "Teknosa" },
    { name: "Koçtaş" },
  ];

  const Categories = [
    { name: "Süt Ürün Grubu" },
    { name: "Et Ürün Grubu" },
    { name: "Kozmetik" },
    { name: "Teknoloji" },
    { name: "Bahçe Ürünleri" },
  ];

  const [addProducts, setAddProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <div>
        <img src="img/alisveris.png" />
      </div>
      <div>
        <TaskText />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={product}
              label="Age"
              onChange={handleChange}
            >
              {Shops.map((item, index) => (
                <MenuItem key={index}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              onChange={handleChange}
            >
              {Categories.map((item, index) => (
                <MenuItem key={index}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleMarkComplete(todo.id)}>
          {todo.task}
        </div>
      ))}
    </div>
  );
}

export default App;
