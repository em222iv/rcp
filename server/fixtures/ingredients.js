//// ***************************************************************
//// FIXTURES (generate data for the Documents collection)
//// ***************************************************************
//
if (Ingredients.find().count() === 0) {

  Ingredients.insert({
        name: "Mjöl",
        measurement: "KG"
  });

  Ingredients.insert({listIds: [{id: "DpfaL9gjdqtWfamJ2"}]});


}
