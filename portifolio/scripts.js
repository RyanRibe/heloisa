document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("#menu a")
  const content = document.getElementById("content")
  const sidebar = document.getElementById("sidebar")
  const swipeMessage = document.getElementById("swipe-message")

  const techniques = {
    technique1: {
      title: "Técnica 1",
      description: "Descrição detalhada da Técnica 1 de lash lifting.",
      video: "https://www.youtube.com/embed/example1",
    },
    technique2: {
      title: "Técnica 2",
      description: "Descrição detalhada da Técnica 2 de lash lifting.",
      video: "https://www.youtube.com/embed/example2",
    },
    technique3: {
      title: "Técnica 3",
      description: "Descrição detalhada da Técnica 3 de lash lifting.",
      video: "https://www.youtube.com/embed/example3",
    },
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault()
      const techniqueKey = this.dataset.technique
      const technique = techniques[techniqueKey]

      if (technique) {
        content.innerHTML = `
                    <h2>${technique.title}</h2>
                    <p>${technique.description}</p>
                    <iframe width="100%" height="315" src="${technique.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("show")
          swipeMessage.classList.add("show")
        }
      }
    })
  })

  let startX = 0
  let endX = 0

  document.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX
  })

  document.addEventListener("touchmove", function (e) {
    endX = e.touches[0].clientX
  })

  document.addEventListener("touchend", function () {
    if (startX < endX && endX - startX > 50) {
      sidebar.classList.add("show")
      swipeMessage.classList.remove("show")
    }
  })
})
