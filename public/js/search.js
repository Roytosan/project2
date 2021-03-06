$("#search-pet").on("click", function() {



  function whenTheUserSubmitsASearch() {

    var dataObj = {};

    var name = $("#search-pet-name").val().trim();
    var age = $("#register-age").val().trim();
    var status = $("#register-status").val().trim();
    var pet_type = $("#register-type").val().trim();
    var sex = $("#register-sex").val().trim();
    var chip = $("#register-chip").val().trim();
    var collartag = $("#register-collartag").val().trim();
    var size = $("#register-size").val().trim();
    var color = $("#register-color").val().trim();
    var hair = $("#register-hair").val().trim();
    var breed = $("#search-breed").val().trim();
    var missingDays = $("#time-range").val().trim();

    if (name !== "") {
      dataObj.name = name;
    }

    if (age !== "Age?") {
      dataObj.age = age;
    }

    if (status !== "Lost, found or on the loose?") {
      dataObj.status = status;
    }

    if (pet_type !== "Pet Type?") {
      dataObj.pet_type = pet_type;
    }

    if (sex !== "Sex?") {
      dataObj.sex = sex;
    }

    if (chip !== "Microchip?") {
      dataObj.chip = chip;
    }

    if (collartag !== "Collar and/or Tags?") {
      dataObj.collartag = collartag;
    }

    if (size !== "Size?") {
      dataObj.size = size;
    }

    if (color !== "Color?") {
      dataObj.color = color;
    }

    if (hair !== "Hair?") {
      dataObj.hair = hair;
    }

    if (breed !== "") {
      dataObj.breed = breed;
    }
    if (missingDays !== "Missing for:") {
      dataObj.missingDays = missingDays;
    }

    $.post("/api/search", dataObj, function(res){
      console.log("We did it");
    });
  }
  whenTheUserSubmitsASearch();
});
