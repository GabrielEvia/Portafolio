document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "theme";
  const themeBtn = document.getElementById("themeToggleBtn");
  const themeIcon = themeBtn?.querySelector("i");
  const heroImg = document.getElementById("heroImg");
  const heroImg2 = document.getElementById("heroImg2");

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);

    if (themeIcon) {
      themeIcon.classList.remove("fa-sun", "fa-moon");
      themeIcon.classList.add(theme === "dark" ? "fa-sun" : "fa-moon");
    }

    if (heroImg) {
      heroImg.src =
        theme === "dark" ? "src/img/hero2.jpg" : "src/img/hero1.jpg";
    }
    if (heroImg2) {
      heroImg2.src =
        theme === "dark" ? "src/img/hero3D.jpg" : "src/img/hero3W.jpg";
    }
  }

  function getThemeFromURL() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const theme = urlParams.get("theme");
      if (theme === "dark" || theme === "light") return theme;
    } catch {
      // ignorar errores
    }
    return null;
  }
  function updateLinksWithTheme(theme) {
    document.querySelectorAll("a[href]").forEach((link) => {
      try {
        const href = link.getAttribute("href");
        if (!href) return;

        const baseUrl = window.location.href;
        const url = new URL(href, baseUrl);

        if (
          url.origin === window.location.origin ||
          window.location.protocol === "file:"
        ) {
          url.searchParams.set("theme", theme);

          let newHref;
          if (href.startsWith("http") || href.startsWith("file:")) {
            newHref = url.toString();
          } else {
            newHref = url.pathname + url.search + url.hash;
          }

          link.setAttribute("href", newHref);
        }
      } catch (e) {
        console.error("Error actualizando enlace:", e);
      }
    });
  }

  // Obtener tema guardado o preferencia sistema
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const defaultTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  // Intentar leer tema de URL
  let themeFromURL = getThemeFromURL();

  // Si no está el theme en URL, redirigir para forzar que esté en URL
  if (!themeFromURL) {
    const url = new URL(window.location.href);
    url.searchParams.set("theme", defaultTheme);
    localStorage.setItem(STORAGE_KEY, defaultTheme);
    window.location.replace(url.toString());
    return;
  }

  // Si está en URL, aplicar tema y sincronizar localStorage
  applyTheme(themeFromURL);
  localStorage.setItem(STORAGE_KEY, themeFromURL);
  updateLinksWithTheme(themeFromURL);

  // Botón toggle cambia tema y actualiza links
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem(STORAGE_KEY, newTheme);
      updateLinksWithTheme(newTheme);
    });
  }
});
