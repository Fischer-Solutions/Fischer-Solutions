const menuButton = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector("#mobile-navigation");
const yearLabel = document.querySelector("#current-year");
const contactPlan = document.querySelector("#contact-plan");

yearLabel.textContent = new Date().getFullYear();

function closeMobileNavigation() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  mobileNavigation.hidden = true;
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu",
  );
  mobileNavigation.hidden = isExpanded;
});

mobileNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMobileNavigation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNavigation.hidden) {
    closeMobileNavigation();
    menuButton.focus();
  }
});

if (contactPlan) {
  document.querySelectorAll("a[data-plan]").forEach((link) => {
    link.addEventListener("click", () => {
      contactPlan.value = link.dataset.plan;
    });
  });
}
