import Device from "./Device";

class Room {
    private uuid: string;
    private label: string;
    private floor: number;
    private devices: Device[];

    constructor(uuid:string, label:string, floor:number, devices:Device[]) {
        this.uuid = uuid;
        this.label = label;
        this.floor = floor;
        this.devices = devices;
    }
}

export default Room;