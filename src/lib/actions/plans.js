import { serverMutation } from "../core/server";

export const addSubscription = async (data) => {
    return serverMutation('/api/subscriptions', data);
}