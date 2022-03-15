function header(){
  var header = '<div id = "header-title">Gallery R</div>';
  document.write(header);
}

function footer(){
  var footer = '<div id="footer">Copyright (c) 2020 Ryu Suhara All rights reserved.</div>';
  document.write(footer);
}


function navbar(){
    var navbar = "";
    navbar = '<nav class="navbar navbar-expand-lg navbar-light bg-light">\
    <div class="container-fluid">\
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
      </button>\
      <div class="collapse navbar-collapse" id="navbarNav">\
        <ul class="navbar-nav">\
          <li class="nav-item">\
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>\
          </li>\
          <li class="nav-item">\
            <a class="nav-link" href="profile.html">Profile/プロフィール</a>\
          </li>\
          <li class="nav-item">\
            <a class="nav-link" href="picture.html">Picture/絵画</a>\
          </li>\
          <li class="nav-item">\
            <a class="nav-link" href="illustration.html">Illustration/イラスト他</a>\
          </li>\
          <li class="nav-item">\
            <a class="nav-link" href="award.html">Award-winning/受賞作品</a>\
          </li>\
        </ul>\
      </div>\
    </div>\
  </nav>';
  document.write(navbar);
}