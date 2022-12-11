const AboutUs = {
  async render() {
    return `
          <div class="container">
            <div class="p-4">
              <h2 class="text-center">About Us<h2>
            </div>
            <div class="about-container">
            <div class="about-developers">
              <div class="card-dev">
                <div class="img-dev">
                  <img src="../images/person1.jpg" alt="" />
                </div>
                <a href="https://www.instagram.com/faisal.ah_/?hl=id" target="_blank"><i class="fab fa-instagram"></i> faisal.ah_</a>
                <a href="http://linkedin.com/in/faizaladhany" target="_blank"><i class="fab fa-linkedin"></i> youngniko</a>
                <a href="https://github.com/youngnikoo" target="_blank"><i class="fab fa-github"></i> youngniko</a>
              </div>
              <div class="card-dev">
                <div class="img-dev">
                  <img src="../images/person2.jpg" alt="" />
                </div>
                <a href="https://www.instagram.com/fazadinanm/?hl=id" target="_blank"><i class="fab fa-instagram"></i> fazadinanm</a>
                <a href="https://www.linkedin.com/in/fazadinanm/" target="_blank"><i class="fab fa-linkedin"></i> fazadinanm</a>
                <a href="https://github.com/fazadinanm" target="_blank"><i class="fab fa-github"></i> fazadinanm</a>
              </div>
              <div class="img-wrapper">
                <img src="../images/icon-tab.jpg" alt="" />
              </div>
              <div class="card-dev">
                <div class="img-dev">
                  <img src="../images/person3.jpg" alt="" />
                </div>
                <a href="https://www.instagram.com/desinofianti_/?hl=id" target="_blank"><i class="fab fa-instagram"></i> desinofianti_</a>
                <a href="https://www.linkedin.com/in/desi-suci-nofianthi-a2b3a4229/" target="_blank"><i class="fab fa-linkedin"></i> desi suci</a>
                <a href="https://github.com/Desisuci06" target="_blank"><i class="fab fa-github"></i> desisuci06</a>
              </div>
              <div class="card-dev">
                <div class="img-dev">
                  <img src="../images/person4.jpg" alt="" />
                </div>
                <a href="https://www.instagram.com/_aryapdf/?hl=id" target="_blank"><i class="fab fa-instagram"></i> _aryapdf</a>
                <a href="https://www.linkedin.com/in/arya-agni-pradana-firdaus-174a78243/" target="_blank"><i class="fab fa-linkedin"></i> arya pradana</a>
                <a href="https://github.com/aryapdf" target="_blank"><i class="fab fa-github"></i> aryapdf</a>
              </div>
            </div>
            <figure class="text-center mt-5">
              <blockquote class="blockquote" style="width: 600px;">
                <p>Semoga dengan adanya Resepku dapat, membantu kalian dalam memasak.Tidak hanya memasak makanan yang sekedar enak, tapi juga bergizi bagi keluarga.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Developers in <cite>Resepku</cite>
              </figcaption>
            </figure>
            </div>
          </div>
          `;
  },
};

export default AboutUs;
