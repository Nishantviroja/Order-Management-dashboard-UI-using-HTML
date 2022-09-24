var darpeName = [
  "Roman",
  "Single / New York Pleat",
  "Double / Dutch Pleat",
  "Triple / French Pleat",
  "Inverted / Box Pleat",
  "Pencil Pleat (75mm) - 3 Pockets",
  "Eyelet",
  "Wave Pleat",
  "Tab Top",
  "Net Tape (for Voile)",
  "Wire Pocket",
  "Lining Tape",
  "Tailored Wave",
  "Double Pleat  (Pinch Top)",
  "Pencil Pleat (25mm)",
  "Pencil Pleat (45mm) - 1 Pocket",
  "Pencil Pleat (55mm) - 2 Pockets",
];
$(function () {
  var $select = $("#job-drape");
  for (i = 0; i < darpeName.length; i++) {
    $select.append($("<option></option>").val(darpeName[i]).html(darpeName[i]));
  }
});

$("#create-job-form").submit(function (e) {
  e.preventDefault();

  var drape = $("#job-drape").val();
  var fabric = $("#job-fabric").val();
  var lining = $("#job-lining").val();
  var quantity = $("#job-quantity").val();
  var fabarrdate = $("#job-fabric-arrival").val();
  var liningarrived = $(
    'input[type="radio"][name="job-lining-arrived-radio"]:checked'
  ).val();
  var productionStage = $("#job-production-stage").val();
  var operator = $("#job-operator").val();

  $("#create-jobs-table tbody").append(
    "<tr data-drape='" +
      drape +
      "' data-fabric='" +
      fabric +
      "' data-lining='" +
      lining +
      "' data-fabarrdate='" +
      fabarrdate +
      "' data-quantity='" +
      quantity +
      "' data-liningarrived='" +
      liningarrived +
      "'data-productionStage='" +
      productionStage +
      "'data-operator='" +
      operator +
      "'><td>" +
      drape +
      "</td><td>" +
      fabric +
      "</td><td>" +
      lining +
      "</td><td>" +
      fabarrdate +
      "</td><td>" +
      quantity +
      "</td><td>" +
      liningarrived +
      "</td>" +
      prodStage(productionStage) +
      "<td>" +
      operator +
      "</td><td class='d-flex p-1'><button class='btn btn-edit btn-primary' type='button' title='Edit'><i class='fa fa-pencil fa-lg'></i></button><button class='btn btn-delete mx-3 btn-primary ' type='button' title='Delete'><i class='fa fa-trash fa-lg'></i></button></td></tr>"
  );
  function prodStage(productionStage) {
    if (productionStage == "Table") {
      return (
        '<td class="badge text-capitalize p-2 my-0 mx-3"  style="background-color:var(--chart-color1); font-size:0.9em">' +
        productionStage +
        "</td>"
      );
    }
    if (productionStage == "Joining") {
      return (
        '<td class="badge text-capitalize p-2 my-0 mx-3"  style="background-color:var(--chart-color2); font-size:0.9em">' +
        productionStage +
        "</td>"
      );
    }
    if (productionStage == "Machine") {
      return (
        '<td class="badge text-capitalize p-2 my-0 mx-3"  style="background-color:var(--chart-color4); font-size:0.9em">' +
        productionStage +
        "</td>"
      );
    }
    if (productionStage == "Packing") {
      return (
        '<td class="badge text-capitalize p-2 my-0 mx-3"  style="background-color:var(--chart-color5); font-size:0.9em">' +
        productionStage +
        "</td>"
      );
    }
    if (productionStage == "Done") {
      return (
        '<td class="badge text-capitalize p-2 my-0 mx-3"  style="background-color:var(--chart-color3); font-size:0.9em">' +
        productionStage +
        "</td>"
      );
    }
  }
  $("#job-drape").val("Roman");
  $("#job-fabric").val("");
  $("#job-lining").val("Lined");
  $("#job-quantity").val("");
  $("#job-fabric-arrival").val("");
  $('input[type="radio"][name="job-lining-arrived-radio"]:checked').val("");
  $("#job-production-stage").val("Table");
  $("#job-operator").val("");
});

$("body").on("click", ".btn-delete", function () {
  $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
  var drape = $(this).parents("tr").attr("data-drape");
  var fabric = $(this).parents("tr").attr("data-fabric");
  var lining = $(this).parents("tr").attr("data-lining");
  var fabarr = $(this).parents("tr").attr("data-fabarrdate");
  var quantity = $(this).parents("tr").attr("data-quantity");
  var linarr = $(this).parents("tr").attr("data-liningarrived");
  var productionStage = $(this).parents("tr").attr("data-productionStage");
  var operator = $(this).parents("tr").attr("data-operator");

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .html(
      '<select class="form-select" id="edit_drape" value="' +
        drape +
        '"><option value="Roman">Roman</option><option value="Single / New York Pleat">Single / New York Pleat</option><option value="Double / Dutch Pleat">Double / Dutch Pleat</option><option value="Triple / French Pleat">Triple / French Pleat</option><option value="Inverted / Box Pleat">Inverted / Box Pleat</option><option value="Pencil Pleat (25mm)">Pencil Pleat (25mm)</option><option value="Pencil Pleat (45mm) - 1 Pocket">Pencil Pleat (45mm) - 1 Pocket</option><option value="Pencil Pleat (55mm) - 2 Pockets">Pencil Pleat (55mm) - 2 Pockets</option><option value="Pencil Pleat (75mm) - 3 Pockets">Pencil Pleat (75mm) - 3 Pockets</option><option value="Eyelet">Eyelet</option><option value="Wave Pleat">Wave Pleat</option><option value="Tab Top">Tab Top</option><option value="Net Tape (for Voile)">Net Tape (for Voile)</option><option value="Wire Pocket">Wire Pocket</option><option value="Lining Tape">Lining Tape</option><option value="Tailored Wave">Tailored Wave</option><option value="Double Pleat(Pinch Top)">Double Pleat(Pinch Top)</option></select>'
    );
  $("#edit_drape").val(drape);
  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html(
      "<input name='edit_fabric' class='form-control' value='" + fabric + "'>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(2)")
    .html(
      '<select class="form-select" id="edit_lining"><option value="Lined">Lined</option><option value="Un-Lined">Un-Lined</option></select>'
    );
  $("#edit_lining").val(lining);
  $(this)
    .parents("tr")
    .find("td:eq(3)")
    .html(
      "<input type='text' id='edit_fabric' class='form-control datepicker' data-date-format='dd/mm/yyyy' placeholder='Date' value='" +
        fabarr +
        "'>"
    );

  $(this)
    .parents("tr")
    .find("td:eq(4)")
    .html(
      "<input name='edit_quantity' type='number'  class='form-control' value='" +
        quantity +
        "'>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(5)")
    .html(
      '<select class="form-select" id="edit_liningarrived"><option value="Yes">Yes</option><option value="No">No</option><option value="N/A">N/A</option></select>'
    );
  $("#edit_liningarrived").val(linarr);
  $(this)
    .parents("tr")
    .find("td:eq(6)")
    .html(
      '<select class="form-select text-black p-2" id="edit_productionStage"><option value="Table">Table</option><option value="Joining">Joining</option><option value="Machine">Machine</option><option value="Packing">Packing</option><option value="Done">Done</option></select>'
    );
  $("#edit_productionStage").val(productionStage);
  $(this)
    .parents("tr")
    .find("td:eq(7)")
    .html(
      "<input name='edit_operator' class='form-control' value='" +
        operator +
        "'>"
    );
  $(this)
    .parents("tr")
    .find("td:eq(8)")
    .prepend(
      "<button type='button' class='btn btn-update btn-primary bg-success'><i class='fa fa-check fa-lg'></i></button>"
    );
  $(this).hide();
});

$("body").on("click", ".btn-update", function () {
  var drape = $(this).parents("tr").find('select[id="edit_drape"]').val();
  var productionStage = $(this)
    .parents("tr")
    .find("select[id='edit_productionStage']")
    .val();
  var fabric = $(this).parents("tr").find("input[name='edit_fabric']").val();
  var operator = $(this)
    .parents("tr")
    .find("input[name='edit_operator']")
    .val();
  var lining = $(this).parents("tr").find("select[id='edit_lining']").val();
  var fabarrivaldate = $(this)
    .parents("tr")
    .find("input[id='edit_fabarr'")
    .val();
  var liningarrived = $(this)
    .parents("tr")
    .find("select[id='edit_liningarrived']")
    .val();
  var quantity = $(this)
    .parents("tr")
    .find("input[name='edit_quantity']")
    .val();

  $(this).parents("tr").find("td:eq(0)").text(drape);
  $(this).parents("tr").find("td:eq(1)").text(fabric);
  $(this).parents("tr").find("td:eq(2)").text(lining);
  $(this).parents("tr").find("td:eq(3)").text(fabarrivaldate);
  $(this).parents("tr").find("td:eq(4)").text(quantity);
  $(this).parents("tr").find("td:eq(5)").text(liningarrived);
  $(this).parents("tr").find("td:eq(6)").text(productionStage);
  $(this).parents("tr").find("td:eq(7)").text(operator);

  $(this).parents("tr").attr("data-drape", drape);
  $(this).parents("tr").attr("data-fabric", fabric);
  $(this).parents("tr").attr("data-lining", lining);
  $(this).parents("tr").attr("data-fabarrdate", fabarrivaldate);
  $(this).parents("tr").attr("data-quantity", quantity);
  $(this).parents("tr").attr("data-liningarrived", liningarrived);
  $(this).parents("tr").attr("data-productionStage", productionStage);
  $(this).parents("tr").attr("data-operator", operator);

  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-update").remove();
});
