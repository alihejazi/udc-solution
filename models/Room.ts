import Device from "./Device";

class Room {
    private uuid: string;
    private label: string;
    private floor: number;
    private devices: Device[];

    constructor(roomJson: any) {
        this.uuid = roomJson.uuid;
        this.label = roomJson.label;
        this.floor = roomJson.floor;
        this.devices = roomJson.devices || [];
    }
}

export default Room;