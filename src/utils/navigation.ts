/**
 * Unified Smooth Scrolling & Route Navigation Utility
 * Smoothly scrolls to target section while updating browser URL route
 * and notifying Navbar to synchronize active indicator.
 */

export function navigateToSection(id: string, href: string) {
  if (typeof window === "undefined") return;

  // 1. Dispatch custom event so Navbar updates activeItem and locks programmatic scroll
  window.dispatchEvent(
    new CustomEvent("portfolio-navigate", {
      detail: { id, href },
    })
  );

  // 2. Update browser history URL route cleanly without reloading
  if (window.location.pathname !== href) {
    window.history.pushState(null, "", href);
  }

  // 3. Smoothly scroll to the target DOM element with fixed navbar clearance
  const element = document.getElementById(id);
  if (element) {
    const headerEl = document.querySelector("header");
    const navOffset = headerEl ? headerEl.getBoundingClientRect().height : 72;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: id === "home" ? 0 : Math.max(0, elementTop - navOffset),
      behavior: "smooth",
    });
  }
}
