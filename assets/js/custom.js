jQuery(document).ready(function () {
    jQuery('.dropdown .dropdown-menu').on({
        "click": function (e) {
            e.stopPropagation();
        }
    });
});

jQuery(document).ready(function () {
    jQuery('.data_table_').DataTable(
        { searching: false, info: false, bLengthChange: false, }
    );
});

jQuery('.filterselect').selectpicker();

var getSidebar = document.querySelector('nav');
var getToggle = document.getElementsByClassName('toggle');
for (var i = 0; i <= getToggle.length; i++) {
    getToggle[i].addEventListener('click', function () {
        getSidebar.classList.toggle('active');
    });
}

