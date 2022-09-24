// create inward fabric js code
var fabricDetails = [
  {
    name: "JD Chatham Mist",
    category: "soft",
    available: 14,
    rack: 8,
    row: 5,
    column: 9,
  },
  {
    name: "Filigree Harris Delta",
    category: "Sheer",
    available: 16,
    rack: 7,
    row: 2,
    column: 1,
  },
  {
    name: "Piper Slate",
    category: "Pleated",
    available: 19,
    rack: 5,
    row: 2,
    column: 8,
  },
];
$(function () {
  var $select = $("#job-fabric");
  for (i = 0; i < fabricDetails.length; i++) {
    $select.append(
      $("<option></option>")
        .val(fabricDetails[i].name)
        .html(fabricDetails[i].name)
    );
  }
});

$(function () {
  var $select = $("#inward-fabric-name");
  for (i = 0; i < fabricDetails.length; i++) {
    $select.append(
      $("<option></option>")
        .val(fabricDetails[i].name)
        .html(fabricDetails[i].name)
    );
  }
});

function autofillInwardFabric(e) {
  for (var i = 0; i < fabricDetails.length; i++) {
    if (e.target.value == fabricDetails[i].name) {
      document.getElementById("inward-fabric-category").value =
        fabricDetails[i].category;
      document.getElementById("inward-fabric-available-quantity").value =
        fabricDetails[i].available;
      document.getElementById("inward-fabric-rack").value =
        fabricDetails[i].rack;
      document.getElementById("inward-fabric-row").value = fabricDetails[i].row;
      document.getElementById("inward-fabric-column").value =
        fabricDetails[i].column;
    }
  }
}
function autofillInwardFabricTable(e) {
  for (var i = 0; i < fabricDetails.length; i++) {
    if (e.target.value == fabricDetails[i].name) {
      document.getElementById("edit-inward-category").value =
        fabricDetails[i].category;
      document.getElementById("edit-inward-aquantity").value =
        fabricDetails[i].available;
      document.getElementById("edit-inward-fabric-rack").value =
        fabricDetails[i].rack;
      document.getElementById("edit-inward-fabric-row").value =
        fabricDetails[i].row;
      document.getElementById("edit-inward-fabric-column").value =
        fabricDetails[i].column;
    }
  }
}

$("#create-inward-fabric-form").submit(function (e) {
  e.preventDefault();

  var fabric = $("#inward-fabric-name").val();
  var category = $("#inward-fabric-category").val();
  var aquantity = $("#inward-fabric-available-quantity").val();
  var rquantity = $("#inward-fabric-reserved-quantity").val();
  var rack = $("#inward-fabric-rack").val();
  var row = $("#inward-fabric-row").val();
  var column = $("#inward-fabric-column").val();

  $("#create-inward-fabric-table tbody").append(
    "<tr fabric='" +
      fabric +
      "' category='" +
      category +
      "' rquantity='" +
      rquantity +
      "' aquantity='" +
      aquantity +
      "' rack='" +
      rack +
      "' row='" +
      row +
      "'column='" +
      column +
      "'><td>" +
      fabric +
      "</td><td>" +
      category +
      "</td><td>" +
      rquantity +
      "</td><td>" +
      aquantity +
      "</td><td>" +
      rack +
      "</td><td>" +
      row +
      "</td><td>" +
      column +
      "</td><td class='d-flex p-1'><button class='btn btn-edit-inward-fabric btn-primary my-1' type='button' title='Edit'><i class='fa fa-pencil fa-lg'></i></button><button class='btn btn-delete-inward-fabric mx-3 btn-primary my-1' type='button' title='Delete'><i class='fa fa-trash fa-lg'></i></button></td></tr>"
  );

  $("#inward-fabric-name").val("");
  $("#inward-fabric-reserved-quantity").val("");
});

$("body").on("click", ".btn-delete-inward-fabric", function () {
  $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit-inward-fabric", function () {
  var fabric = $(this).parents("tr").attr("fabric");
  var category = $(this).parents("tr").attr("category");
  var aquantity = $(this).parents("tr").attr("aquantity");
  var rquantity = $(this).parents("tr").attr("rquantity");
  var rack = $(this).parents("tr").attr("rack");
  var row = $(this).parents("tr").attr("row");
  var column = $(this).parents("tr").attr("column");

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .html(
      "<select class='form-select' id='edit-inward-fabric' onchange='autofillInwardFabricTable(event)' ><option value='JD Chatham Mist'>JD Chatham Mist</option><option value='Filigree Harris Delta'>Filigree Harris Delta</option> <option value='Piper Slate'>Piper Slate</option></select>"
    );
  $("#edit-inward-fabric").val(fabric);

  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html(
      "<input id='edit-inward-category' class='form-control' value='" +
        category +
        "' readonly>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(3)")
    .html(
      "<input id='edit-inward-aquantity' type='number'  class='form-control' value='" +
        aquantity +
        "'readonly>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(2)")
    .html(
      "<input id='edit-inward-rquantity' type='number'  class='form-control' value='" +
        rquantity +
        "'>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(4)")
    .html(
      "<input id='edit-inward-fabric-rack' type='number'  class='form-control' value='" +
        rack +
        "'readonly>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(5)")
    .html(
      "<input id='edit-inward-fabric-row' type='number'  class='form-control' value='" +
        row +
        "'readonly>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(6)")
    .html(
      "<input id='edit-inward-fabric-column' type='number'  class='form-control' value='" +
        column +
        "'readonly>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(7)")
    .prepend(
      "<button type='button' class='btn btn-update-inward-fabric btn-primary bg-success my-1'><i class='fa fa-check fa-lg'></i></button>"
    );
  $(this).hide();
});

$("body").on("click", ".btn-update-inward-fabric", function () {
  var fabric = $(this)
    .parents("tr")
    .find("select[id='edit-inward-fabric']")
    .val();
  var category = $(this)
    .parents("tr")
    .find("input[id='edit-inward-category']")
    .val();
  var aquantity = $(this)
    .parents("tr")
    .find("input[id='edit-inward-aquantity']")
    .val();
  var rquantity = $(this)
    .parents("tr")
    .find("input[id='edit-inward-rquantity']")
    .val();
  var rack = $(this)
    .parents("tr")
    .find("input[id='edit-inward-fabric-rack']")
    .val();
  var row = $(this)
    .parents("tr")
    .find("input[id='edit-inward-fabric-row']")
    .val();
  var column = $(this)
    .parents("tr")
    .find("input[id='edit-inward-fabric-column']")
    .val();

  $(this).parents("tr").find("td:eq(0)").text(fabric);
  $(this).parents("tr").find("td:eq(1)").text(category);
  $(this).parents("tr").find("td:eq(2)").text(rquantity);
  $(this).parents("tr").find("td:eq(3)").text(aquantity);
  $(this).parents("tr").find("td:eq(4)").text(rack);
  $(this).parents("tr").find("td:eq(5)").text(row);
  $(this).parents("tr").find("td:eq(6)").text(column);

  $(this).parents("tr").attr("fabric", fabric);
  $(this).parents("tr").attr("category", category);
  $(this).parents("tr").attr("aquantity", aquantity);
  $(this).parents("tr").attr("rquantity", rquantity);
  $(this).parents("tr").attr("rack", rack);
  $(this).parents("tr").attr("row", row);
  $(this).parents("tr").attr("column", column);

  $(this).parents("tr").find(".btn-edit-inward-fabric").show();
  $(this).parents("tr").find(".btn-update-inward-fabric").remove();
});
