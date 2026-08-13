<script>
  // Mobile Menu
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("open");
  });


  // Resume Popup
  function openResume(event) {
    event.preventDefault();

    const modal = document.getElementById("resumeModal");
    modal.style.display = "flex";
  }

  function closeResume() {
    const modal = document.getElementById("resumeModal");
    modal.style.display = "none";
  }
</script>
