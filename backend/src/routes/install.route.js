// // Import express module
// import { Router } from "express";
// // Import the install controller
// import { installController } from "../controllers/install.controller.js";

// // Import the router module
// const router = Router();
// // Create a get request handler for the install route
// router.get("/install", installController);
// // Export the router
// export default router;



// install.route.js
import { Router } from "express";
import { installController } from "../controllers/install.controller.js";

const router = Router();
router.get("/install", installController);
export default router;