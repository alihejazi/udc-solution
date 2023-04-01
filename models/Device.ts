import Room from './Room';

class Device {
    private uuid: string;
    private status: "RUNNNING" | "STOPPED";
    private responseTime: number;
    private room : Room | null;
    private temperature: number;
    private humidity: number;

    constructor(deviceJson: any) {
        this.uuid = deviceJson.uuid;
        this.status = deviceJson.status;
        this.responseTime = deviceJson.responseTime;
        // some devices have room set to `null`, so check for this first
        this.room = deviceJson.room ? new Room(deviceJson.room) : null;
        this.temperature = deviceJson.temperature;
        this.humidity = deviceJson.humidity;
    }

    getUuid = () => this.uuid;
    getStatus = () => this.status;
    getResponseTime = () => this.responseTime;
    getRoom = () => this.room;
    getTemperature = () => this.temperature;
    getHumidity = () => this.humidity;
}

export default Device;