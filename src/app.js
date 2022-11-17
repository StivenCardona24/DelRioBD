import express from "express";
import morgan from "morgan";

//Routes

import fincaRoutes from "./routes/farm.route";
import ciudadRoutes from "./routes/city.route";
import estado_entregaRoutes from "./routes/delivery_status.route";
import departamentoRoutes from "./routes/department.route";
import dependenciaRoutes from "./routes/dependence.route";
import cargoRoutes from "./routes/position.route";
import detalle_productoRoutes from "./routes/product_detail.route";
import compra_productoRoutes from "./routes/product_shopping.route";
import productoRoutes from "./routes/product.route";
import proveedorRoutes from "./routes/provide.route";
import detalle_compraRoutes from "./routes/shopping_detail.route";
import tipo_entregaRoutes from "./routes/type_delivery.route";
import tipo_fincaRoutes from "./routes/type_farm.route";
import usuarioRoutes from "./routes/user.route";
import oficinaRoutes from "./routes/ofice.route";




import clienteRoutes from "./routes/client.route";
import empleadoRoutes from "./routes/employee.route";
import detalle_ventaRoutes from "./routes/sale_detail.route";

import ventaRoutes from "./routes/sale.route";


import compraRoutes from "./routes/shopping.route";






const app = express();

//settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes 
app.get("/", (req, res) => {
    res.send('<h1>Hola desde land page!</h1>');
});

app.use("/finca", fincaRoutes);
app.use("/ciudad", ciudadRoutes);
app.use("/estado_entrega", estado_entregaRoutes);
app.use("/departamento", departamentoRoutes);
app.use("/dependencia", dependenciaRoutes);
app.use("/cargo", cargoRoutes);
app.use("/detalle_producto", detalle_productoRoutes);
app.use("/compra_producto", compra_productoRoutes);
app.use("/producto", productoRoutes);
app.use("/proveedor", proveedorRoutes);
app.use("/detalle_compra", detalle_compraRoutes);
app.use("/tipo_entrega", tipo_entregaRoutes);
app.use("/tipo_finca", tipo_fincaRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/oficina", oficinaRoutes);




app.use("/detalle_venta", detalle_ventaRoutes);
// app.use("/cliente", clienteRoutes);
// app.use("/empleado", empleadoRoutes);

// app.use("/venta", ventaRoutes);
// app.use("/compra", compraRoutes);







export default app;