currView = "SuperAdmin";
var orderDetails = [
  {
    order_id: 14,
    comp_code: "Chris",
    customer: "Krittika",
    cuttingStart: "22-01-2020",
    productionStart: "22-01-2020",
    etaDate: "22-12-2020",
    day: 1,
    month: "Feb",
    year: 2021,
    company: "Chris Fox",
    type: "sheer",
    lined: "lined",
    status: "new order",
    qty: 25,
    delivery_mode: "courier",
  },
  {
    day: 1,
    month: "Feb",
    year: 2021,
    company: "Chris Fox2",
    type: "blackout",
    lined: "lined",
    status: "completed",
    qty: 32,
    delivery_mode: "courier",
    order_id: 1234,
    comp_code: "Chris",
    customer: "Krittika",
    cuttingStart: "22-01-2020",
    productionStart: "22-01-2020",
    etaDate: "22-12-2020",
  },
  {
    day: 1,
    month: "Feb",
    year: 2021,
    company: "Chris Fox3",
    type: "sheer",
    lined: "unlined",
    status: "awaiting fabric",
    qty: 20,
    delivery_mode: "pickup",
    order_id: 123,
    comp_code: "Chris",
    customer: "Krittika",
    cuttingStart: "22-01-2020",
    productionStart: "22-01-2020",
    etaDate: "22-12-2020",
  },
  {
    day: 1,
    month: "Feb",
    year: 2021,
    company: "Chris Fox3",
    type: "pleated",
    lined: "lined",
    status: "cutting",
    qty: 12,
    delivery_mode: "courier",
    order_id: 134,
    comp_code: "Chris",
    customer: "Krittika",
    cuttingStart: "22-01-2020",
    productionStart: "22-01-2020",
    etaDate: "22-12-2020",
  },
];

var counter = 1;
var table = "<tbody>";
var tablehead =
  "<thead><tr><th>#</th><th>Date</th><th>Company</th><th>Curtain Type</th><th>Lining</th><th>Quantity</th><th>Status</th><th>Collection</th><th class='text-center'>Action</th></tr><thead>";
var rows = orderDetails.length;
var col = 8;
for (var i = 0; i < rows; i++) {
  table += "<tr>";
  table += "<td>" + counter++ + "</td>";
  table +=
    "<td>" +
    orderDetails[i].day +
    " " +
    orderDetails[i].month +
    " " +
    orderDetails[i].year +
    "</td>";
  table += '<td class="text-capitalize"> ' + orderDetails[i].company + "</td>";
  table += '<td class="text-capitalize">' + orderDetails[i].type + "</td>";
  table += '<td class="text-capitalize">' + orderDetails[i].lined + "</td>";
  table += '<td class="">' + orderDetails[i].qty + " sets" + "</td>";
  table += orderstatus(orderDetails[i].status);
  table +=
    '<td class="text-capitalize">' + orderDetails[i].delivery_mode + "</td>";
  table +=
    '<td class="text-center">' +
    '<button onclick="showDetail(' +
    orderDetails[i].order_id +
    ')" type="button" class="btn btn-link btn-sm" data-bs-toggle="modal" data-bs-target="#OrderDetails" type="button"data-bs-placement="top" title = "View Details" > <i class="fa fa-eye"></i></button ><button type="button" onclick="editOrder(' +
    orderDetails[i].order_id +
    ')" class="btn btn-link btn-sm text-primary operator_hide" data-bs-toggle="modal" data-bs-target="#editOrder" data-bs-placement="top" title="Edit"><i class="fa fa-gear"></i></button><button type = "button" class="btn btn-link btn-sm text-danger operator_hide" data-bs-toggle="modal" data-bs-target="#create-inward-fabric" data-bs-placement="top" title = "Add Inward Fabric" > <i class="fa fa-cut"></i></button ><button  type="button" class="btn btn-link btn-sm text-danger operator_hide" data-bs-toggle="modal" data-bs-target="#createjob"  data-bs-placement="top" title="Create Jobs"><i class="fa fa-tasks"></i></button><button  type="button" class=" btn btn-link btn-sm text-danger operator_hide" onclick="deleteOrder(' +
    orderDetails[i].order_id +
    ')"data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" ><i class="fa fa-trash"></i></button></td > ';
  table += "</tr>";
}
function showDetail(id) {
  console.log(id);
  $("#view-order-id").text(id);
  var order = {
    day: 1,
    month: "Feb",
    year: 2021,
    company: "Chris Fox3",
    type: "2",
    code: "2",
    lined: "unlined",
    status: "new order",
    qty: 12,
    delivery_mode: "pickup",
    comp_code: "2",
    customer: "Krittika",
  };
}

function orderstatus(status) {
  if (status == "completed")
    return (
      "<td>" +
      '<span class="badge text-capitalize p-2" style="background-color:var(--chart-color3)">' +
      orderDetails[i].status +
      "</span>" +
      "</td>"
    );
  if (status == "cutting")
    return (
      "<td>" +
      '<span class="badge text-capitalize p-2"  style="background-color:var(--chart-color2)">' +
      orderDetails[i].status +
      "</span>" +
      "</td>"
    );
  if (status == "awaiting fabric")
    return (
      "<td>" +
      '<span class="badge text-capitalize p-2"  style="background-color:var(--chart-color4)">' +
      orderDetails[i].status +
      "</span>" +
      "</td>"
    );
  if (status == "new order")
    return (
      "<td>" +
      '<span class="badge text-capitalize p-2"  style="background-color:var(--chart-color1)">' +
      orderDetails[i].status +
      "</span>" +
      "</td>"
    );
}

function calculationOrder() {
  var tracklength = document.getElementById("track-length").value;
  var fullness = document.getElementById("fullness").value;
  var drapes = document.getElementById("drape-count").value;
  var patternrepeat = document.getElementById("pattern-repeat").value;
  var numberOfCuts = ((tracklength * fullness) / 100 + drapes * 150) / 1000;
  var cutLength = patternrepeat * 14;
  var totalLength = numberOfCuts * cutLength;
  $("#calculation-results").html(
    "<h5>Calculation Details: </h5> <div class='mt-4 mb-3 mx-3'>Number of cuts: <strong>" +
      numberOfCuts +
      "</strong></div> <div class='my-3 mx-3'>Cut Length: <strong>" +
      cutLength +
      "</strong></div><div class='my-3 mx-3'>Total Meters: <strong>" +
      totalLength +
      "</strong></div>"
  );
  var resultdiv = document.getElementById("calculation-results");
  resultdiv.scrollIntoView();
}

$("#resetform").click(function () {
  $("#OrderCalculation").find(":input").val("");
});

$("#dyn-table-orders").html(
  '<table id="myDataTable_no_filter" style="width: 100%;" class="table myDataTable align-middle table-striped mb-0">' +
    tablehead +
    table +
    "</tbody></table>"
);
$('[data-quantity="plus"]').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr("data-field");
  var currentVal = parseInt($("input[name=" + fieldName + "]").val());
  if (!isNaN(currentVal)) {
    $("input[name=" + fieldName + "]").val(currentVal + 1);
  } else {
    $("input[name=" + fieldName + "]").val(0);
  }
});
$('[data-quantity="minus"]').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr("data-field");
  var currentVal = parseInt($("input[name=" + fieldName + "]").val());
  if (!isNaN(currentVal) && currentVal > 0) {
    $("input[name=" + fieldName + "]").val(currentVal - 1);
  } else {
    $("input[name=" + fieldName + "]").val(0);
  }
});

function changeFilter(filter_name) {
  $("#filter").text(filter_name);
}

//place order
var companydetails = [
  {
    name: "Drapes by Design",
    code: "DyD",
  },
  {
    name: "Colour Concepts",
    code: "CCR",
  },
  {
    name: "GB - Tauranga",
    code: "BOP - GBT",
  },
];
function autofillCompanyCode(e) {
  for (var i = 0; i < companydetails.length; i++) {
    if (e.target.value == companydetails[i].name) {
      document.getElementById("place_order_company_code").value =
        companydetails[i].code;
    }
  }
}
function autofillCompanyCodeEditOrder(e) {
  for (var i = 0; i < companydetails.length; i++) {
    if (e.target.value == companydetails[i].name) {
      document.getElementById("edit_order_company_code").value =
        companydetails[i].code;
    }
  }
}

$("body").on("click", "#operator-edit-prodstage", function () {
  var stage = $(this).parents("tr").find("td:eq(5)").find(".prod-stage").html();
  $(this)
    .parents("tr")
    .find("td:eq(5)")
    .html(
      '<select class="form-select" id="edit-prodstage"><option value="Table">Table</option><option value="Joining">Joining</option><option value="Machine">Machine</option><option value="Packing">Packing</option><option value="Done">Done</option></select>' +
        '<button type="button" class="btn operator-prodstage-update bg-transparent border-0"><i class="fa fa-check"></i></button>'
    );
  $("#edit-prodstage").val(stage);
});
$("body").on("click", ".operator-prodstage-update", function () {
  var stage = $(this).parents("tr").find('select[id="edit-prodstage"]').val();
  $(this)
    .parents("tr")
    .find("td:eq(5)")
    .html(
      '<div class="prod-stage">' +
        stage +
        '</div><button class="bg-transparent border-0 mx-2 pb-3" id="operator-edit-prodstage"><i class="fa fa-pencil" aria-hidden="true"></i></button> '
    );
});

function changeAdmin(owner) {
  $("#ownerView").text(owner);
  if (owner == "Operator") {
    currView = "Operator";
    $("#menu1").css("display", "none");
    $("#menu2").css("display", "none");
    $(".operator_hide").css("display", "none");
  } else {
    currView = "SuperAdmin";
    $("#menu1").css("display", "block");
    $("#menu2").css("display", "block");
    $(".operator_hide").css("display", "inline");
  }
}
