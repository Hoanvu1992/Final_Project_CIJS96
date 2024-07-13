import { useState } from "react";
import { AutoComplete, Input } from "antd";
const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Tìm thấy
              <a
                href="../../data/riceLists.js"
                target="_blank"
                rel="../../data/riceLists.js"
              >
                {" "}
                {category}
              </a>
            </span>
            <span>{getRandomInt(30, 5)} kết quả</span>
          </div>
        ),
      };
    });

const Search = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search size="large" placeholder="Nhập sản phẩm ...." enterButton />
    </AutoComplete>
  );
};
export default Search;
