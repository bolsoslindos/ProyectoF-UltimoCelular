const mongoose = require("mongoose");

//Intenbtamos conectarnos
// admin_tienda;
// TqiGBcLIQSaeABae
try {
  //se intenta establecer una conexion con los datos de conexion
  mongoose.connect(
    "mongodb+srv://tienda_admin:fjcfoPgUmVdkmIMh@cluster0.n2kvybm.mongodb.net/tienda?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  //en caso de esablecer la conexion, se muestra en consola este mensaje
  console.log("Connected databases.");
} catch (e) {
  //en caso de haber un error se muestra en consola el error
  console.error(e);
}
