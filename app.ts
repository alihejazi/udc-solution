import dotenv from 'dotenv';
import Device from "./models/Device";
import Client from "./clients/Client";
dotenv.config();
// remove first two CLI args because they'll be 'ts-node' and 'app.ts' filepaths
const commandLineArgs: string[] = process.argv.slice(2);

const getDeviceCount = async () => {
    const devices: Device[] = await Client.getDevices();
    console.log(devices.length);
}

const getTimeoutDevices = async () => {
    const threshold: number = parseInt(commandLineArgs[1]);

    if (Number.isNaN(threshold)) {
        console.log('You must pass a threshold!');
        return;
    }

    const devices: Device[] = (await Client.getDevices())
        .filter((device: Device) => device.getResponseTime() > threshold);

    const uuids: string[] = [];
    devices.forEach((device: Device) => uuids.push(device.getUuid()));
    console.log(uuids);
}

const registerDevice = async () => {
    const deviceUuid: string = commandLineArgs[1];
    const roomUuid: string = commandLineArgs[2];

    if (!deviceUuid || !roomUuid) {
        console.log('You must pass a device uuid and then a room uuid!');
        return;
    }

    Client.registerDevice(deviceUuid, roomUuid);
}

const main = () => {
    if (!commandLineArgs.length) {
        console.log('Please pass a command to do some fun stuff!');
        return;
    }

    switch (commandLineArgs[0]) {
        case 'version':
            console.log(process.env.VERSION);
            break;

        case 'device-count':
            getDeviceCount();
            break;

        case 'timeout-devices':
            getTimeoutDevices();
            break;

        case 'register-device':
            registerDevice();
            break;

        default:
            console.log(`Please enter a valid command:
             - version
             - device-count
             - timeout-devices <threshold>
             - register-device <device-uuid> <room-uuid>`)
            break;
    }

}

main();