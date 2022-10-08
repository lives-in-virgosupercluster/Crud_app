$("#add_user").submit(function(event){
alert("Data Inserted Successfully!");
});
$("#update_usr").submit(function(event){
    event.preventDefault();
    var data={};
    var unindexed_array=$(this).serializeArray();
    $.map(unindexed_array,function(n,i){
  data[n['name']]=n['value']
    
    })
    //console.log(unindexed_array);
    console.log(data);
    var request={
        "url":`http://localhost:3000/api/users/${data.id}`,
        'method':'PUT',
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully");
    })
});
if(window.location.pathname=='/'){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id");
        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            'method':'Delete',
            
        }
        if(confirm("Do You really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Updated Successfully");
                location.reload();
            })
        }
    })

}