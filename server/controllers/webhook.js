import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
    try {
        const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        const evt = wh.verify(req.body, {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        const { data, type } = evt;

        switch (type) {
            case "user.created": {
                const { id, email_addresses, first_name, last_name, image_url } = data;

                await User.create({
                    _id: id,
                    name: `${first_name} ${last_name}`,
                    email: email_addresses[0].email_address,
                    imageUrl: image_url,
                });
                break;
            }

            case "user.updated": {
                const { id, email_addresses, first_name, last_name, image_url } = data;

                await User.findByIdAndUpdate(id, {
                    name: `${first_name} ${last_name}`,
                    email: email_addresses[0].email_address,
                    imageUrl: image_url,
                });
                break;
            }
            case "user.deleted": {
                const { id } = data;
                await User.findByIdAndDelete(id);
                break;
            }
            default: {
                break;
            }
        }

        res.status(200).json({ success: true });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};