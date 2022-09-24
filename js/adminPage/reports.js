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
    status: "awaiting fabric",
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
    status: "new order",
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
var report_tablehead =
  "<thead><tr><th>#</th><th>Date</th><th>Company </th><th>Curtain Type</th><th>Lining</th><th>Quantity</th> <th>Status</th><th>Collection</th></tr></thead>";
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
  table +=
    '<td class="text-center text-capitalize">' + orderDetails[i].type + "</td>";

  table +=
    '<td class="text-center text-capitalize">' +
    orderDetails[i].lined +
    "</td>";
  table += "<td>" + orderDetails[i].qty + " sets" + "</td>";
  table += orderstatus(orderDetails[i].status);
  table +=
    '<td class="text-center text-capitalize">' +
    orderDetails[i].delivery_mode +
    "</td>";
  table += "</tr>";
}

function orderstatus(status) {
  if (status == "completed")
    return (
      "<td>" +
      '<span class="badge text-capitalize p-2 " style="background-color:var(--chart-color3)">' +
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

$("#orders_table").html(
  '<table id="myDataTable_orders_no_filter" style="width: 100%;" class="table myDataTable table-striped align-middle mb-0">' +
    report_tablehead +
    table +
    "</tbody></table>"
);
$("#myDataTable_orders_no_filter").addClass("nowrap").dataTable({
  responsive: true,
  searching: false,
  paging: false,
  ordering: false,
  info: false,
  columnDefs: [
    // { targets: [-1, -3], className: 'dt-body-right' }
  ],
});
