import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskText = styled.input`
  padding: 2px 8px 2px 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 40%;
  height: 45px;
`;

const Buttons = styled.button`
  background-color: rgb(182, 136, 112) !important;
  border-radius: 3px;
  padding: 10px 10px;
  &:hover {
    background-color: #e07843 !important;
  }
`;

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

  const [addProducts, setAddProducts] = useState("");
  const [tasks, setTasks] = useState([]);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const addProduct = () => {
    if (addProducts.trim() === "") return;
    const newProduct = {
      text: addProducts,
      product: product,
      category: category,
      id: uuidv4(),
      isComplete: false,
    };
    setTasks([...tasks, newProduct]);
    setAddProducts("");
    setProduct("");
    setCategory("");
    setId("");
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCheckClick = () => {
    // "Satın Al" butonuna tıklandığında çalışacak işlem
    console.log("Ürün satın alındı!");
  };

  const handleMarkComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  const handleDeleteClick = (id) => {
    // "Sepetten Sil" butonuna tıklandığında çalışacak işlem
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <div>
        <img
          src="img/alisveris.png"
          style={{ width: "400px" }}
          alt="Alışveriş"
        />
      </div>
      <Container>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          <TaskText
            type="text"
            placeholder="Eklemek istediğiniz ürün.."
            value={addProducts}
            onChange={(e) => setAddProducts(e.target.value)}
          />
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mağaza</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={product}
                label="Mağaza"
                onChange={handleProductChange}
              >
                {Shops.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Kategori"
                onChange={handleCategoryChange}
              >
                {Categories.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Buttons onClick={addProduct}>Sepete Ekle</Buttons>
        </div>
        {tasks.length > 0 ? (
          <Table
            striped
            bordered
            hover
            style={{
              gap: "100px",
              textAlign: "center",
              verticalAlign: "middle",
              marginRight: "25px",
            }}
          >
            <thead>
              <tr
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <th>#</th>
                <th>Product</th>
                <th>Shop</th>
                <th>Category</th>
                <th>Satın Al</th>
                <th>Sepetten Sil</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td
                    style={{
                      textDecoration: task.isComplete ? "line-through" : "none",
                    }}
                  >
                    {task.id}
                  </td>
                  <td
                    style={{
                      textDecoration: task.isComplete ? "line-through" : "none",
                    }}
                  >
                    {task.text}
                  </td>
                  <td
                    style={{
                      textDecoration: task.isComplete ? "line-through" : "none",
                    }}
                  >
                    {task.product}
                  </td>
                  <td
                    style={{
                      textDecoration: task.isComplete ? "line-through" : "none",
                    }}
                  >
                    {task.category}
                  </td>
                  <td>
                    <button
                      onClick={() => handleMarkComplete(task.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteClick(task.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Henüz alışveriş yok..</p>
        )}
      </Container>
      {/* {tasks.map((task) => (
        <div key={task.id} onClick={() => handleMarkComplete(task.id)}>
          {task.task}
        </div>
      ))} */}
    </div>
  );
}

export default App;
