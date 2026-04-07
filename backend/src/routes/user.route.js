import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { acceptFriendRequest, getFirendRequests, getMyFirends, getOutGoingFriendReqs, getRecommanderUsers, sendFriendRequest } from '../controller/user.controller.js';

const router=express.Router();


router.use(protectRoute)
router.get("/",getRecommanderUsers);
router.get("/friends",getMyFirends)
router.post("/friend-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept",acceptFriendRequest)
router.get("/friend-requests",getFirendRequests)
router.get("/outgoing-friend-request",getOutGoingFriendReqs)



export default router;