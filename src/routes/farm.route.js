import { request, response, Router } from "express";
import { methods as farmController } from "../controllers/farm.controller";

const router = Router();

router.get("/", farmController.getFarm);

router.get("/:id", farmController.getOneFarm);

router.post("/", farmController.addFarm);

router.put("/:id", farmController.updateFarm);

router.delete("/:id", farmController.deleteFarm);


export default router;