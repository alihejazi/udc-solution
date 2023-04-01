import Device from "../models/Device";
import axios from "axios";

class Client {
    public static getDevices = async () : Promise<Device[]> => {
        const response = await axios.get(`${process.env.BASE_URI}/devices`);
        const devices: Device[] = [];
        // deserialise JSON into Device model
        response.data.forEach((deviceJson: JSON) => {
            devices.push(new Device(deviceJson))
        });
        return devices;
    }
}

export default Client;