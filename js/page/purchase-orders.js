$('.datepicker').datepicker({});
$('#myDataTable_no_filter')
    .addClass('nowrap')
    .dataTable({
        responsive: true,
        searching: false,
        paging: false,
        ordering: false,
        info: false,
        columnDefs: [
            //{ targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
var data=[
{
"comp_code":"101019",
"order_id":2729,
"code":"101019",
"type":"101019",
"lined":"YES",
"qty":4,
"status":"Delivered",
"delivery_mode":"courier",
"delivery_address":"gununanak chowk",
"date":"02-02-1998",
"last_modified_on":"02-02-1998",
"last_modified_by":"Ashutosh",
"notes":"gooooooooood",
"title":"Curtainless Curtain",
"customer":"SACHIN Tendulkar",
"cutting_dt":"02-02-1998",
"prod_st_dt":"02-02-1998",
"eta":"02-02-1998",
"delivery_dt":"02-02-1998",
"courier_id":"1287362",
"jobs":['cutting','cutting2','cutting_again','cutting_return']
},
{
"comp_code":"101019",
"order_id":2729,
"code":"101019",
"type":"101019",
"lined":"YES",
"qty":1,
"status":"Delivered",
"delivery_mode":"courier",
"delivery_address":"gununanak chowk",
"date":"02-02-1998",
"last_modified_on":"02-02-1998",
"last_modified_by":"Ashutosh",
"notes":"gooooooooood",
"title":"Curtainless Curtain",
"customer":"SACHIN Tendulkar",
"cutting_dt":"02-02-1998",
"prod_st_dt":"02-02-1998",
"eta":"02-02-1998",
"delivery_dt":"02-02-1998",
"courier_id":"1287362",
"jobs":['cutting','cutting2','cutting_again','cutting_return']
},
{
"comp_code":"101019",
"order_id":2729,
"code":"101019",
"type":"101019",
"lined":"YES",
"qty":3,
"status":"Delivered",
"delivery_mode":"courier",
"delivery_address":"gununanak chowk",
"date":"02-02-1998",
"last_modified_on":"02-06-2000",
"last_modified_by":"Ashutosh",
"notes":"gooooooooood",
"title":"Curtainless Curtain",
"customer":"SACHIN Tendulkar",
"cutting_dt":"02-02-1998",
"prod_st_dt":"02-02-1998",
"eta":"02-02-1998",
"delivery_dt":"02-02-1998",
"courier_id":"1287362",
"jobs":['cutting','cutting2','cutting_again','cutting_return']
},
{
    "comp_code":"101019",
    "order_id":2729,
    "code":"101019",
    "type":"101019",
    "lined":"YES",
    "qty":3,
    "status":"Delivered",
    "delivery_mode":"courier",
    "delivery_address":"gununanak chowk",
    "date":"02-02-1998",
    "last_modified_on":"02-06-2000",
    "last_modified_by":"Ashutosh",
    "notes":"gooooooooood",
    "title":"Curtainless Curtain",
    "customer":"SACHIN Tendulkar",
    "cutting_dt":"02-02-1998",
    "prod_st_dt":"02-02-1998",
    "eta":"02-02-1998",
    "delivery_dt":"02-02-1998",
    "courier_id":"1287362",
    "jobs":['cutting','cutting2','cutting_again','cutting_return']
    },
    {
        "comp_code":"101019",
        "order_id":2729,
        "code":"101019",
        "type":"101019",
        "lined":"YES",
        "qty":3,
        "status":"Delivered",
        "delivery_mode":"courier",
        "delivery_address":"gununanak chowk",
        "date":"02-02-1998",
        "last_modified_on":"02-06-2000",
        "last_modified_by":"Ashutosh",
        "notes":"gooooooooood",
        "title":"Curtainless Curtain",
        "customer":"SACHIN Tendulkar",
        "cutting_dt":"02-02-1998",
        "prod_st_dt":"02-02-1998",
        "eta":"02-02-1998",
        "delivery_dt":"02-02-1998",
        "courier_id":"1287362",
        "jobs":['cutting','cutting2','cutting_again','cutting_return']
        }

];


var table_head="<tr><th>#</th><th>Date</th> <th>Order Id</th><th>Type</th><th>Quantity</th> <th>Status</th><th> See Details</th></tr></thead>";
var table="";

for(var i=0;i<5;i++)
{
table+='<tr>';
table+="<td>"+(i+1)+"</td>";
 table+="<td>"+data[i]["date"]+"</td>";  
table+="<td>"+data[i]["order_id"]+"</td>";  
table+="<td>"+data[i]["type"]+"</td>";  
table+="<td>"+data[i]["qty"]+"</td>";  
table+="<td>"+data[i]["status"]+"</td>"; 
table+="<td><button type='button' class='btn info' onclick='show_details("+i+")' data-toggle='modal' data-target='#exampleModalCenter'>See Details...</button></td>"; 
table+='</tr>';

}
// onclick={details_func("+i+")} 
$("h6").css({ 'color': 'rgb(42, 142, 181)'})
function show_details(i)
{
    
     $("#id_order_id").text(data[i]["order_id"]);
     $("#id_company_code").text(data[i]["comp_code"]);
     $("#id_code").text(data[i]["code"]);
     $("#id_type").text(data[i]["type"]);
     $("#id_lined").text(data[i]["lined"]);
     $("#id_qty").text(data[i]["qty"]);
     $("#id_status").text(data[i]["status"]);
     $("#id_dlvry_mode").text(data[i]["delivery_mode"]);
     $("#id_dlvry_adrs").text(data[i]["delivery_address"]);
    $('#myInput').trigger('focus');
}
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })
// function details_func(i){
    

// }



// $(".info").css("color", "dodgerblue");
$("#dyn-table").html('<table  id="myDataTable_no_filter" style="width: 100%;" class="table myDataTable align-middle table-striped mb-0">' + table_head + table+'</table>');
$(".info").css("color", "dodgerblue");
// $("#myDataTable_no_filter").prepend('<h1>asdf</h1>');
// '<thead>'+table_head+'</thead>'




// $("addPurchase").on("click")

