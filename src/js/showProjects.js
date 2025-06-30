(function () {
  let currentSlide = 0;

  // Renderiza proyectos filtrados
  function renderFilteredProjects(projectList) {
    const container = document.querySelector(".projects .projectsRow2");
    container.innerHTML = "";

    projectList.forEach((project) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-4 mb-4";

      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = project.imageHero;
      img.alt = project.title;
      img.className = "card-img";

      const content = document.createElement("div");
      content.className = "card-content";

      const contentIcons = document.createElement("div");
      contentIcons.className = "card-content-icons";

      project.tecnologies.forEach((name) => {
        const tech = tecnologias.find((t) => t.name === name);
        if (tech) {
          const wrapper = document.createElement("span");
          wrapper.innerHTML = tech.icon;
          contentIcons.appendChild(wrapper.firstChild);
        }
      });

      const title = document.createElement("h3");
      title.textContent = project.title;

      const desc = document.createElement("p");
      desc.textContent = project.description;

      content.append(contentIcons, title, desc);
      card.append(img, content);
      card.addEventListener("click", () => openProjectModal(project.id));

      col.append(card);
      container.append(col);
    });
  }

  // Abrir modal de proyecto
  window.openProjectModal = function (projectId) {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById("projectModal");
    const carouselContainer = modal.querySelector(".carousel-container");
    const relatedContainer = modal.querySelector(".related-cards");
    const titleEl = modal.querySelector("#modalProjectTitle");
    const descEl = modal.querySelector("#modalProjectDesc");
    const platformsEl = modal.querySelector(".plattaforms-icons");
    const techEl = modal.querySelector(".project-icons:nth-of-type(2)");

    titleEl.textContent = project.title;
    descEl.innerHTML = project.descriptionDeep.replace(/\n/g, "<br>");

    // Carrusel
    carouselContainer.innerHTML = "";
    project.images.forEach((src, idx) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide" + (idx === 0 ? " active" : "");
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} - imagen ${idx + 1}`;
      slide.append(img);
      carouselContainer.append(slide);
    });

    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn prev";
    prevBtn.innerHTML = "&lsaquo;";
    prevBtn.addEventListener("click", () => moveSlide(-1));

    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn next";
    nextBtn.innerHTML = "&rsaquo;";
    nextBtn.addEventListener("click", () => moveSlide(1));

    carouselContainer.append(prevBtn, nextBtn);
    currentSlide = 0;

    // Plataformas
    platformsEl.innerHTML = "";
    project.plataforms.forEach((name) => {
      const plat = plataforms.find(
        (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      if (plat) {
        const img = document.createElement("img");
        img.src = `src/img/tecnologies/${plat.icon}.svg`;
        img.alt = plat.name;
        platformsEl.append(img);
      }
    });

    // Tecnologías
    techEl.innerHTML = "";
    project.tecnologies.forEach((name) => {
      const tech = tecnologias.find((t) => t.name === name);
      if (tech) {
        const wrapper = document.createElement("span");
        wrapper.innerHTML = tech.icon;
        techEl.appendChild(wrapper.firstChild);
      }
    });

    // Proyectos relacionados
    relatedContainer.innerHTML = "";
    projects
      .filter((p) => p.related === project.related && p.id !== project.id)
      .forEach((rel) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = rel.imageHero;
        img.alt = rel.title;
        img.className = "card-img";

        card.append(img);
        card.addEventListener("click", () => {
          window.location.href = `projects.html?id=${rel.id}`;
        });

        relatedContainer.append(card);
      });

    modal.style.display = "flex";
  };

  // Carrusel: mueve entre slides
  window.moveSlide = function (delta) {
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((s) => s.classList.remove("active"));
    currentSlide = (currentSlide + delta + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  };

  // Cierra el modal
  window.closeModal = function (event) {
    event.currentTarget.style.display = "none";
  };

  // Rellenar selects dinámicos
  function fillSelect(select, values, selectedValue) {
    select.innerHTML = '<option value="">Todos</option>';
    values.forEach((val) => {
      const option = document.createElement("option");
      option.value = val;
      option.textContent = val;
      if (val === selectedValue) option.selected = true;
      select.appendChild(option);
    });
  }

  // Al cargar el DOM
  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const related = params.get("related");
    const enterprise = params.get("enterprise");
    const platform = params.get("platform");
    const tech = params.get("tech");

    const selectRelated = document.getElementById("relatedFilter");
    const selectEnterprise = document.getElementById("enterpriseFilter");
    const selectPlatform = document.getElementById("platformFilter");
    const selectTech = document.getElementById("techFilter");

    // Valores únicos
    const allRelated = [...new Set(projects.map((p) => p.related))].filter(
      Boolean
    );
    const allEnterprises = [
      ...new Set(projects.map((p) => p.enterprise)),
    ].filter(Boolean);
    const allPlatforms = [
      ...new Set(projects.flatMap((p) => p.plataforms)),
    ].filter(Boolean);
    const allTechUsed = [
      ...new Set(projects.flatMap((p) => p.tecnologies)),
    ].filter(Boolean);

    fillSelect(selectRelated, allRelated, related);
    fillSelect(selectEnterprise, allEnterprises, enterprise);
    fillSelect(selectPlatform, allPlatforms, platform);
    fillSelect(selectTech, allTechUsed, tech);

    // Escuchar cambios en filtros
    function onFilterChange() {
      const newParams = new URLSearchParams();
      if (selectRelated.value) newParams.set("related", selectRelated.value);
      if (selectEnterprise.value)
        newParams.set("enterprise", selectEnterprise.value);
      if (selectPlatform.value) newParams.set("platform", selectPlatform.value);
      if (selectTech.value) newParams.set("tech", selectTech.value);

      // Actualizar la URL sin recargar
      window.history.replaceState(
        {},
        "",
        `${location.pathname}?${newParams.toString()}`
      );

      // Aplicar filtros dinámicamente
      applyFilters();
    }
    function applyFilters() {
      const related = selectRelated.value;
      const enterprise = selectEnterprise.value;
      const platform = selectPlatform.value;
      const tech = selectTech.value;

      let filteredProjects = projects;
      if (related)
        filteredProjects = filteredProjects.filter(
          (p) => p.related === related
        );
      if (enterprise)
        filteredProjects = filteredProjects.filter(
          (p) => p.enterprise === enterprise
        );
      if (platform)
        filteredProjects = filteredProjects.filter((p) =>
          p.plataforms.includes(platform)
        );
      if (tech)
        filteredProjects = filteredProjects.filter((p) =>
          p.tecnologies.includes(tech)
        );

      renderFilteredProjects(filteredProjects);
    }

    $("#relatedFilter").on("change", onFilterChange);
    $("#enterpriseFilter").on("change", onFilterChange);
    $("#platformFilter").on("change", onFilterChange);
    $("#techFilter").on("change", onFilterChange);

    // Aplicar filtros
    let filteredProjects = projects;
    if (related)
      filteredProjects = filteredProjects.filter((p) => p.related === related);
    if (enterprise)
      filteredProjects = filteredProjects.filter(
        (p) => p.enterprise === enterprise
      );
    if (platform)
      filteredProjects = filteredProjects.filter((p) =>
        p.plataforms.includes(platform)
      );
    if (tech)
      filteredProjects = filteredProjects.filter((p) =>
        p.tecnologies.includes(tech)
      );

    renderFilteredProjects(filteredProjects);

    // Si hay ID en URL, abrir modal
    if (id && !isNaN(parseInt(id))) {
      openProjectModal(parseInt(id));
    }
  });
})();
