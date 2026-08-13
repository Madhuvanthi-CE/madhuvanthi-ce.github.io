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

    document.getElementById("resumeModal").style.display = "flex";
  }

  function closeResume() {
    document.getElementById("resumeModal").style.display = "none";
  }
</script>
