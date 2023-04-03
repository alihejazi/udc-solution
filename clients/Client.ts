import Device from "../models/Device";
import axios from "axios";

class Client {
    public static getDevices = async (): Promise<Device[]> => {
        const response = await axios.get(`${process.env.BASE_URI}/devices`);
        const devices: Device[] = [];
        // deserialise JSON into Device model
        response.data.forEach((deviceJson: JSON) => {
            devices.push(new Device(deviceJson))
        });
        return devices;
    }

    public static registerDevice = (deviceUuid: string, roomUuid: string) => {
        const payload = { uuid: deviceUuid };
        const config = {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            }
        }
        axios.post(
            `${process.env.BASE_URI}/rooms/${roomUuid}/devices`,
            payload,
            config
        )
            .then(() => {
                console.log('Device added!');
            })
            .catch(error => {
                console.log('ERROR:', error.response.data.error);
            });
    }
}

export default Client;