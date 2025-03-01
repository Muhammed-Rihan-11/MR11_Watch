document.addEventListener("DOMContentLoaded", function() {
  showModal("This is a webpage for Mr.11 watches", true);
  setTimeout(() => showModal("This is one of the best watches webpage in the world", true), 3000);

  const menuIcon = document.querySelector(".menu-icon");
  const navUl = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function() {
    navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
  });
});

function showModal(message, topRight = false) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <p>${message}</p>
    </div>
  `;
  if (topRight) {
    modal.style.position = "fixed";
    modal.style.top = "10px";
    modal.style.right = "10px";
  } else {
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
  }
  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    modal.remove();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  setTimeout(() => {
    modal.remove();
  }, 10000); // Automatically close after 10 seconds
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const form = event.target;
  if (form.checkValidity()) {
    showModal('Order Is Placed!', true);
  } else {
    alert('Please fill the form.');
  }
});