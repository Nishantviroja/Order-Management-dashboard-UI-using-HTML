var statusOrder = [
  "AWAITING FABRIC",
  "AWAITING WORKSHEET",
  "ON HOLD",
  "CUTTING",
  "IN-PROGRESS",
  "COMPLETED",
  "URGENT",
  "ALTERATION",
];
$(function () {
  var $select = $("#edit-order-status");
  for (i = 0; i < statusOrder.length; i++) {
    $select.append(
      $("<option></option>").val(statusOrder[i]).html(statusOrder[i])
    );
  }
});
function editOrder(id) {
  var order = {
    day: 1,
    month: "Feb",
    year: 2021,
    company: "Chris Fox3",
    type: "2",
    code: "2",
    lined: "unlined",
    status: "CUTTING",
    qty: 12,
    delivery_mode: "pickup",
    comp_code: "2",
    customer: "Krittika",
  };
  document.getElementById("edit-orderid").value = id;
  document.getElementById("edit-orderid").disabled = true;
  $("#edit-company-code").val(order.comp_code);
  $("#edit-customer-name").val(order.customer);
  $("#edit-curtain-code").val(order.code);
  $("#edit-curtain-type").val(order.type);
  $("#edit-lined").val(order.lined);
  $("#edit-quantity").val(order.qty);
  $("#edit-delivery").val(order.delivery_mode);
  $("#edit-order-status").val(order.status);
}
$("#edit-submit").click(function () {
  var neworder = {};
  neworder.comp_code = document.getElementById("edit-company-code").value;
  neworder.customer = document.getElementById("edit-customer-name").value;
  neworder.code = document.getElementById("edit-curtain-code").value;
  neworder.type = document.getElementById("edit-curtain-type").value;
  neworder.lined = document.getElementById("edit-lined").value;
  neworder.qty = document.getElementById("edit-quantity").value;
  neworder.delivery_mode = document.getElementById("edit-delivery").value;
  console.log(neworder);
});
function deleteOrder(id) {
  if (confirm("Are you sure you want to delete order " + id + "?")) {
    console.log(id);
  }
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
