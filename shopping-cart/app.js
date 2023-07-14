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

// Xử lý cart (giỏ hàng) - lấy dữ liệu từ trên localStorage
let cart = JSON.parse(localStorage.getItem("carts")) || [];

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
    // Kiểm tra trong mảng cart nếu như sản phẩm mua chưa tồn tại trong cart
    // Thêm thuộc tính (key) là count vào đối tượng buyItem để nếu tồn tại thì sẽ cộng thêm 1
    // Còn nếu chưa tồn tại thì sẽ gán value cho thuộc tính count = 1
    // Cách 1: Sử dụng kỹ thuật cắm cờ để kiểm tra tồn tại trong giỏ hàng
    // let checkCart = -1;
    // for (let i = 0; i < cart.length; i++) {
    //   if (buyItem.id == cart[i].id) {
    //     checkCart = i;
    //   }
    // }

    // // Ra ngoài vòng for kiểm tra điều kiện với biên checkCart
    // if (checkCart == -1) {
    //   // Thêm thuộc tính cho đối tượng (thêm key cho Object)
    //   buyItem.count = 1;
    //   cart.push(buyItem);
    // } else {
    //   cart[checkCart].count += 1;
    // }
    // console.log("Sau khi thêm sản phẩm", cart);

    // Cách 2: Sử dụng hàm findIndex,find để kiểm tra tồn tại trong giỏ hàng
    // Declaration Function => có thể thực trước và sau khi khởi tạo
    //  function name(params) {
    //  }

    // Expression Function => Chỉ có thể thực thi sau khi khởi tạo
    // const render = function (){
    // }

    // Arrow Function (ES6)
    // const render = ()=> {return }
    // const render = () => // trả về kết quả

    let findIndex = cart.findIndex((e) => buyItem.id == e.id);
    // Nếu không tìm thấy phần tử theo điều kiện trên thì findIndex trả về -1
    // Nếu tìm thấy phần tử theo điều kiện trên thì findIndex sẽ trả về vị trí index của phần tử đầu tiên thỏa mãn
    console.log(findIndex);
    if (findIndex == -1) {
      buyItem.count = 1;
      cart.push(buyItem);
    } else {
      cart[findIndex].count += 1;
    }
    console.log("Sau khi thêm sản phẩm", cart);
    // Thêm dữ liệu cart lên localStorage
    localStorage.setItem("carts", JSON.stringify(cart));
  }
};

console.log("Ngoài sự kiện", cart);
// Viết hàm render dữ liệu trong cart ra bên giỏ hàng

// Bước 1: In dữ liệu ra màn hình
// Để duyệt qua từng phần tử có thể sử dụng hàm map() hoặc forEach()

// Gọi hàm renderCart để in dữ liệu từ cart ra danh sách giỏ hàng

// Làm thêm các chức năng thêm sửa xóa trong giỏ hàng
