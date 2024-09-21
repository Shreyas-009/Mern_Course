const services = [
  { name: "Dry Cleaning", icon: "👕", price: 200.0, status: false },
  { name: "Wash & Fold", icon: "🫧", price: 100.0, status: false },
  { name: "Ironing", icon: "🔥", price: 300.0, status: false },
  { name: "Stain Removal", icon: "🎗️", price: 500.0, status: false },
  { name: "Leather & Suede Cleaning", icon: "🧽", price: 999.0, status: false },
  { name: "Wedding Dress Cleaning", icon: "👗", price: 2800.0, status: false },
];

function renderServices() {
  const serviceList = document.getElementById("serviceList");
  serviceList.innerHTML = services
    .map(
      (service, index) => `
        <div class="flex justify-between w-full items-center">
            <div class="flex gap-3">
                <h1>
                    <i class="px-2">${service.icon}</i>
                    ${service.name}
                </h1>
                - <span class="text-blue-600">₹ ${service.price.toFixed(
                  2
                )}</span>
            </div>
            <div>
                <button onclick="toggleService(${index})" class="px-3 py-2 rounded-md ${
        service.status ? "text-red-600" : "text-zinc-900"
      } ${
        service.status
          ? "bg-red-200 hover:bg-red-300"
          : "bg-zinc-200 hover:bg-zinc-300"
      }">
                    ${service.status ? "Remove Item" : "Add Item"}
                    <i class="${
                      service.status
                        ? "ri-indeterminate-circle-line"
                        : "ri-add-circle-line"
                    } px-2"></i>
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

function toggleService(index) {
  services[index].status = !services[index].status;
  renderServices();
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const addedServices = services.filter((service) => service.status);

  if (addedServices.length > 0) {
    cartList.innerHTML = addedServices
      .map(
        (service, index) => `
        <tr>
            <td class="pl-4">${index + 1}</td>
            <td>${service.name}</td>
            <td>₹ ${service.price.toFixed(2)}</td>
        </tr>
    `
      )
      .join("");
  } else {
    cartList.innerHTML = `
      <tr>
        <td colspan="3">
          <div class="flex flex-col justify-center items-center py-7">
            <i class="ri-information-2-line text-5xl text-zinc-500"></i>
            <h1 class="font-bold text-zinc-500">No Item Added</h1>
            <p class="text-zinc-500 font-semibold text-sm">
              Add items to the cart from the services bar
            </p>
          </div>
        </td>
      </tr>
    `;
  }

  const totalAmount = addedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );
  document.getElementById("totalAmount").textContent = `₹ ${totalAmount.toFixed(
    2
  )}`;
}
function sendEmail(name, email, phone, selectedServices, totalAmount) {
  const servicesList = selectedServices
    .map((service) => `${service.name}: ₹${service.price.toFixed(2)}`)
    .join("\n");
 const servicesSection = document.getElementById("footer");
 if (servicesSection) {
   servicesSection.scrollIntoView({ behavior: "smooth" });
 }
  const templateParams = {
    to_name: name,
    to_email: email,
    phone: phone,
    services: servicesList,
    total_amount: totalAmount.toFixed(2),
  };

  emailjs.send("service_eggw3tb", "template_ylprpws", templateParams).then(
    function (response) {
      console.log("Email sent successfully:", response);
      document.getElementById("submitMessage").textContent =
        "Booking confirmed! An email has been sent with your order details.";
      document.getElementById("submitMessage").className =
        "text-green-500 font-semibold";
    },
    function (error) {
      console.log("Failed to send email:", error);
      document.getElementById("submitMessage").textContent =
        "There was an error sending your booking. Please try again.";
      document.getElementById("submitMessage").className =
        "text-red-500 font-semibold";
    }
  );
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.elements.name.value;
  const email = this.elements.email.value;
  const phone = this.elements.phone.value;

  const selectedServices = services.filter((service) => service.status);
  const totalAmount = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  if (selectedServices.length === 0) {
    document.getElementById("submitMessage").textContent =
      "Please select at least one service before booking.";
    document.getElementById("submitMessage").className =
      "text-red-500 font-semibold";
    return;
  }

  sendEmail(name, email, phone, selectedServices, totalAmount);

  this.reset();

  services.forEach((service) => (service.status = false));
  renderServices();
  renderCart();
});

renderServices();
renderCart();
