$(':button').on('click', function() {
    var task = $(':text').val();
    
    if (!task.trim()) return;
    if ($('li:contains("'+task+'")').length) 
        return alert('That task is already in the list!');

    addTask(task);
    $(':text').val('');
});

function addTask(task) {
    $('#tasklist').prepend('<li>'+task+'</li>');
    $('li:first-child').on('click', function() {$(this).remove();});
}

/////////////////////// testing ////////////////////////

addTask("first item");
addTask("second item");