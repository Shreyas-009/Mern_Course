const list = [
  {
    no: 1,
    name: "Dry Cleaning",
    price: 340.0,
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    no: 2,
    name: "Stain Removal",
    price: 250.0,
    image:
      "https://plus.unsplash.com/premium_photo-1678304223645-e79b0c863867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    no: 3,
    name: "Ironing",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let showList = [];

let cluster = "";
let cluster2 = "";
const item1 = document.getElementById("list1");
const item2 = document.getElementById("list2");
const item3 = document.querySelector(".item");
const Amount = document.querySelector("#amount");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const btn = document.getElementById("submit");
const Message = document.getElementById("submitMessage");
let name = document.getElementsByName("name");
let email = document.getElementsByName("email");
let phone = document.getElementsByName("phone");
let currentItem = 1;

const showItems = () => {
  cluster = "";

  if (showList.length > 0) {
    item2.innerHTML = null;

    showList.forEach((val, index) => {
      cluster += `
            <tr class="text-zinc-500 border-b border-zinc-200 py-1">
                <td class="text-start pl-4">${index + 1}</td>
                <td class="text-start">${val.name}</td>
                <td class="text-start">₹ ${val.price}</td>
                <td class="text-start"><i onclick="handelDelete(${
                  val.no
                })" class="ri-delete-bin-5-fill text-red-500"></i></td>
            </tr>
        `;
    });
    item1.innerHTML = cluster;
  } else {
    cluster = `
          <div class="flex flex-col justify-center items-center py-7">
        <i class="ri-information-2-line text-5xl text-zinc-500"></i>
        <h1 class="font-bold text-zinc-500">No Item Added</h1>
        <p class="text-zinc-500 font-semibold text-sm">Add items to the cart from the
            services bar</p>
    </div>
        `;
    item2.innerHTML = cluster;
    item1.innerHTML = "";
  }
};
showItems();

const showServices = () => {
  list.map((val) => {
    val.no == currentItem
      ? (cluster2 = `
    <div class="img w-3/5">
        <!-- <img src="https://via.placeholder.com/150" alt="Stain Removal" -->
        <img src="${val.image}" alt="Stain Removal"
            class=" w-full object-cover rounded">
        </div>
    <div class="flex gap-2 w-full justify-between p-1">
        <h1 class="font-bold text-2xl text-zinc-500">${val.name}</h1>
        <h1 class="font-bold text-2xl text-blue-500">₹ ${val.price}</h1>
    </div>
    <div class="flex w-full gap-2">
        <button class="bg-red-50 text-red-500 rounded-xl py-3 px-6 font-semibold" type="submit" onclick="handelSkip()">Skip Item <i
                class="ri-indeterminate-circle-line"></i>
        </button>
        <button class="flex-1 bg-green-50 text-green-500 rounded-xl py-3 font-semibold" type="submit" onclick="handelBook()">Book
            Now <i class="ri-add-circle-line"></i></button>
    </div>`)
      : "";
    item3.innerHTML = cluster2;
  });
};
showServices();

const handelDelete = (e) => {
  let newList = showList.filter((item) => item.no !== e);
  showList = newList;
  handelAmount();
  showItems();
};

const handelSkip = () => {
  if (currentItem == list.length) {
    currentItem = 1;
  } else {
    currentItem++;
  }
  showServices();
};

let totalamount = 0.0;
const calculateTotalAmount = () => {
  let totalAmount = 0;
  showList.forEach((service) => {
    totalAmount += service.price;
  });
  return totalAmount;
};

const handelAmount = () => {
  const totalAmount = calculateTotalAmount();
  Amount.innerHTML = `₹ ${totalAmount}`;
};
handelAmount();

const handelBook = () => {
  if (currentItem == list.length) {
    let service = list[currentItem - 1];
    let find = showList.some((item) => item.no == service.no);
    find ? "" : showList.push(service);
    currentItem = 1;
  } else {
    let service = list[currentItem - 1];
    let find = showList.some((item) => item.no == service.no);
    find ? "" : showList.push(service);
    currentItem++;
  }
  btn.disabled = false;
  btn.classList.remove("opacity-50");
  Message.innerHTML = "";
  showItems();
  showServices();
  handelAmount();
};

name = "";
email = "";
phone = "";

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const name1 = e.target.name;
    const value1 = e.target.value;

    if (name1 === "name") {
      name = value1;
    }

    if (name1 === "email") {
      email = value1;
    }

    if (name1 === "phone") {
      phone = value1;
    }
    btn.disabled = false;
    btn.classList.remove("opacity-50");
    Message.innerHTML = "";
  });
});

form.addEventListener("submit", (event) => {

  if (name === "" || email === "" || phone === "" || showList.length === 0) {
    btn.disabled = true;
    btn.classList.add("opacity-50");
    Message.innerHTML =
      '<i class="ri-information-2-line"></i> Add the items to the cart to book';
    Message.classList.remove("text-green-500");
    Message.classList.add("text-red-500");
    event.preventDefault();
  } else {
    Message.innerHTML =
      '<i class="ri-information-2-line"></i> Thank you for contacting, we will get back to you soon';
    Message.classList.remove("text-red-500");
    Message.classList.add("text-green-500");
    event.preventDefault();
    const serviceDetails = showList
      .map((val, index) => `${index + 1}  ${val.name}  ₹ ${val.price}`)
      .join("\n");

    console.log(
      "name : " +
        name +
        "\nemail : " +
        email +
        "\nphone : " +
        phone +
        "\n\nServices List : \n" +
        serviceDetails
    );
    showList = [];
    inputs.forEach((input) => (input.value = ""));
    showItems();
    showServices();
    handelAmount();

    alert("See your details on console")
  }
});
