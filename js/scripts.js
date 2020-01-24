$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var feelingInput= $("input#feeling").val();
    var activityInput = $("input#activity").val();
    var frequencyInput = $("input#frequency").val();
    var frequency2Input = $("input#frequency2").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".feeling").text(feelingInput);
    $(".activity").text(activityInput);
    $(".frequency").text(frequencyInput);
    $(".frequency2").text(frequency2Input);

    $("#letter").show();

    event.preventDefault();
  });
});
