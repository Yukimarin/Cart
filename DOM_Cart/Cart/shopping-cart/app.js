let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let body = document.querySelector(".body");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// Dữ liệu
let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "1.PNG",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "2.PNG",
    price: 120000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "3.PNG",
    price: 220000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "4.PNG",
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "5.PNG",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "6.PNG",
    price: 120000,
  },
];

let list = document.getElementById("list");

// Khởi tạo hàm render - hàm để in dữ liệu sản phẩm
function render() {
  // Bước 1: In dữ liệu ra màn hình
  // Để duyệt qua từng phần tử có thể sử dụng hàm map() hoặc forEach()
  products.forEach((element) => {
    // Tạo HTML element
    let newdiv = document.createElement("div");
    // Set thêm thuộc tính (attribute)
    newdiv.setAttribute("id", "item");
    // cách 1 thêm attribute class cho thể div mới tao
    // newdiv.setAttribute("class","item")
    // Cách 2: sử dụng classList.add("")
    newdiv.classList.add("item");
    // Thêm nội dung cho thẻ div vừa tạo thông qua innerHTML
    newdiv.innerHTML = `<img src="./image/${element.image}" />
    <div class="title">${element.name}</div>
    <div class="price">${element.price}</div>
    <button id="${element.id}" class="btn-add">Add To Card</button>`;
    // Thêm newdiv vào thẻ cha có id là list
    list.appendChild(newdiv);
  });
}

// Gọi hàm render để in dữ liệu sản phẩm
render();

// Xử lý cart
let cart = [];

// Ủy quyền sự kiện
list.onclick = function (e) {
  // console.log(e.target.classList.contains("btn-add"));=> true
  if (e.target.classList.contains("btn-add")) {
    // console.log(e.target.id);
    let id = Number(e.target.id);
    // console.log(id);
    // Khai báo biến buyItem, sử dụng hàm find với mảng products
    // sẻ trả về dữ liệu theo điều kiện e.id == id
    let buyItem = products.find((e) => e.id == id);
    console.log(buyItem);
    // Thêm thuộc tính amount cho đối tượng buyItem
    // Kiểm tra trong mảng cart nếu như sản phẩm mua chưa tồn tại trong cart
    // thì cho giá trị của amount là 1
    // Nếu đã tồn tại thì cộng amount thêm 1 đơn vị
  }
};

// Viết hàm render dữ liệu trong cart ra bên giỏ hàng
// Làm thêm các chức năng thêm sửa xóa trong giỏ hàng
