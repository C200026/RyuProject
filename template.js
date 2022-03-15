function header(){
  var header = ""
  document.write(header);
}

function footer(){
  var footer = '<div id="footer">Copyright (c) 2020 Ryu Suhara All rights reserved.</div>';
  document.write(footer);
}


function navbar(){
    var navbar = "";
    navbar = '<nav class="navbar navbar-expand-lg navbar-light d-flex">\
    <div class="container-fluid">\
      <a class="navbar-brand flex-fill">\
        <img src="img/logo02.png" alt="Gallery R" height="70">\
      </a>\
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
      </button>\
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">\
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">\
          <li class="nav-item p-2 flex-fill">\
            <a class="nav-link" href="index.html">Home</a>\
          </li>\
          <li class="nav-item p-2 flex-fill">\
            <a class="nav-link" href="profile.html">Profile</a>\
          </li>\
          <li class="nav-item p-2 flex-fill">\
            <a class="nav-link" href="picture.html">Picture</a>\
          </li>\
          <li class="nav-item p-2 flex-fill">\
            <a class="nav-link" href="illustration.html">Illustration</a>\
          </li>\
          <li class="nav-item p-2 flex-fill">\
            <a class="nav-link" href="award.html">Award-winning Work</a>\
          </li>\
        </ul>\
      </div>\
    </div>\
  </nav>';
  document.write(navbar);
}