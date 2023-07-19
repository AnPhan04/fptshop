import { useState, useEffect } from "react";
import "./ProductList.css";
import ProductSlider from "./ProductSlider";
import Breadcrumb from "./Breadcrumb";
import Header from "./Header";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checkedSupplier, setCheckedSupplier] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedPrice, setCheckedPrice] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getProductsList = async () => {
      const response = await fetch("http://localhost:9999/products");
      const jsonData = await response.json();
      setProducts(jsonData);
    };
    const getSuppliersList = async () => {
      const response = await fetch("http://localhost:9999/suppliers");
      const jsonData = await response.json();
      setSuppliers(jsonData);
      console.log(jsonData);
    };
    const getCategories = async () => {
      const response = await fetch("http://localhost:9999/categories");
      const jsonData = await response.json();
      setCategories(jsonData);
      console.log(jsonData);
    };

    getSuppliersList();
    getProductsList();
    getCategories();
  }, []);

  const filterSuppliers = (event, id) => {
    const isChecked = event.target.checked;

    if (id === "all") {
      setAllChecked(isChecked);
      setCheckedSupplier(
        isChecked ? suppliers.map((supplier) => supplier.id) : []
      );
    } else {
      if (isChecked) {
        setCheckedSupplier([...checkedSupplier, id]);
      } else {
        setCheckedSupplier(
          checkedSupplier.filter((supplierID) => supplierID !== id)
        );
        if (allChecked) {
          setAllChecked(false); // Uncheck the "All" checkbox
        }
      }
    }
  };

  const filterProductsBySuppliers = (products) => {
    if (checkedSupplier.length === 0 || allChecked) {
      return products;
    } else {
      return products.filter((p) => checkedSupplier.includes(p.supplierId));
    }
  };

  const filterPrices = (event, priceRange) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedPrice([...checkedPrice, priceRange]);
    } else {
      setCheckedPrice(checkedPrice.filter((price) => price !== priceRange));
    }
  };

  const filterProductsByPrice = (products) => {
    if (checkedPrice.length === 0 || checkedPrice.includes("Tất cả")) {
      return products;
    } else {
      // Use a switch statement to filter the products based on the selected price range
      switch (checkedPrice[0]) {
        case "Dưới 2 triệu":
          return products.filter((p) => p.price < 2000000);
        case "Từ 2 - 4 triệu":
          return products.filter(
            (p) => p.price >= 2000000 && p.price <= 4000000
          );
        case "Từ 4 - 7 triệu":
          return products.filter(
            (p) => p.price >= 4000000 && p.price <= 7000000
          );
        case "Từ 7 - 13 triệu":
          return products.filter(
            (p) => p.price >= 7000000 && p.price <= 13000000
          );
        case "Trên 13 triệu":
          return products.filter((p) => p.price > 13000000);
        default:
          return products;
      }
    }
  };

  const sortAscending = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortDescending = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const searchByName = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
  };

  /* const handleSearch = () => {
    if (searchValue === "") {
      setProducts(filteredProducts);
    } else {
      const searchedProducts = products.filter((p) =>
        p.name.toLowerCase().includes(searchValue)
      );
      setProducts(searchedProducts);
    }
  }; */
  const filteredProducts = filterProductsByPrice(
    filterProductsBySuppliers(products).filter((p) =>
      p.name.toLowerCase().includes(searchValue)
    )
  );

  /* const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    categoryId: "",
    memory: "",
    supplierId: "",
  });

  const createProduct = async () => {
    try {
      const response = await fetch("http://localhost:9999/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const createdProduct = await response.json();
      setProducts([...products, createdProduct]);
    } catch (error) {
      console.error(error);
    }
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setNewProduct({
      name: "",
      price: "",
      image: "",
      categoryId: "",
      memory: "",
      supplierId: "",
    }); // Reset the new product state
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    createProduct(); // Create the new product
    handleFormClose(); // Close the form after submission
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const updateProduct = async (productId, updatedProduct) => {
    try {
      const response = await fetch(
        `http://localhost:9999/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProductData = await response.json();
      const updatedProducts = products.map((product) =>
        product.id === productId ? updatedProductData : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:9999/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error(error);
    }
  }; */

  return (
    <div>
      <Header />
      <Breadcrumb/>
      <div className="product-slider home-body">
        <ProductSlider />
      </div>
      <div className="row home-body">
        <div className="col-lg-3">
          <div className="supplier" style={{ margin: "2em 0" }}>
            <span style={{ fontWeight: "bold" }}>Hãng sản xuất</span>
            <div className="form-check">
              {[{ id: "all", name: "All" }, ...suppliers].map((u) => (
                <div key={u.id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={u.name}
                    id={u.id}
                    onChange={(event) => {
                      filterSuppliers(event, u.id);
                    }}
                    checked={
                      u.id === "all"
                        ? allChecked
                        : checkedSupplier.includes(u.id)
                    }
                  />
                  <label className="form-check-label" htmlFor={u.id}>
                    {u.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="price">
            <span style={{ fontWeight: "bold" }}>Mức giá</span>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Dưới 2 triệu"
                id="under2M"
                onChange={(event) => filterPrices(event, "Dưới 2 triệu")}
                checked={checkedPrice.includes("Dưới 2 triệu")}
              />
              <label className="form-check-label" htmlFor="under2M">
                Dưới 2 triệu
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Từ 2 - 4 triệu"
                id="2Mto4M"
                onChange={(event) => filterPrices(event, "Từ 2 - 4 triệu")}
                checked={checkedPrice.includes("Từ 2 - 4 triệu")}
              />
              <label className="form-check-label" htmlFor="2Mto4M">
                Từ 2 - 4 triệu
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Từ 4 - 7 triệu"
                id="4Mto7M"
                onChange={(event) => filterPrices(event, "Từ 4 - 7 triệu")}
                checked={checkedPrice.includes("Từ 4 - 7 triệu")}
              />
              <label className="form-check-label" htmlFor="4Mto7M">
                Từ 4 - 7 triệu
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Từ 7 - 13 triệu"
                id="7Mto13M"
                onChange={(event) => filterPrices(event, "Từ 7 - 13 triệu")}
                checked={checkedPrice.includes("Từ 7 - 13 triệu")}
              />
              <label className="form-check-label" htmlFor="7Mto13M">
                Từ 7 - 13 triệu
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Trên 13 triệu"
                id="above13M"
                onChange={(event) => filterPrices(event, "Trên 13 triệu")}
                checked={checkedPrice.includes("Trên 13 triệu")}
              />
              <label className="form-check-label" htmlFor="above13M">
                Trên 13 triệu
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div
            style={{ background: "white", margin: "2em 0", padding: "1em" }}
          >
            <h2>Điện thoại ({filteredProducts.length} sản phẩm)</h2>
          </div>
          <div
            style={{ background: "white", margin: "2em 0", padding: "1em" }}
          >
            <div className="priority-filter">
              Ưu tiên xem:
              <button
                type="button"
                className="btn priority-filter-option"
                style={{
                  marginLeft: "10px",
                }}
                onClick={sortAscending}
              >
                Giá thấp
              </button>
              <button
                type="button"
                className="btn priority-filter-option"
                onClick={sortDescending}
              >
                Giá cao
              </button>
              <input
                className="btn"
                type="search"
                name="searchName"
                id=""
                value={searchValue}
                onChange={searchByName}
                placeholder="Search by name"
              />
            </div>

            <div className="container" style={{ margin: "2em 0" }}>
              <div className="row">
                {filteredProducts.map((p) => (
                  <div
                    className="col-sm-4 col-md-6 col-lg-4"
                    style={{ padding: 0 }}
                  >
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={p.image}
                        alt="phone-img"
                        style={{ height: "250px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.price}</p>
                        <a href="#" className="btn btn-primary">
                          MUA NGAY
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
