import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class SingleHubConnection {
  private static instance?: HubConnection;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  public static async initInstance(token?: string): Promise<HubConnection> {
    console.log("## initInstance", token);
    const url: string =
      process.env.REACT_APP_BASE_API === undefined
        ? ""
        : `${process.env.REACT_APP_BASE_API}/chatHub`;

    let hubInstance: HubConnection;
    
    if (token != null) {
      console.log("## token:", token);
      hubInstance = new HubConnectionBuilder()
        .withUrl(url, {
          accessTokenFactory: () => token,
          // skipNegotiation: true,
          // transport: HttpTransportType.WebSockets,
        })
        .build();
    } else {
      hubInstance = new HubConnectionBuilder().withUrl(url).build();
    }
    return await hubInstance;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static async getInstance(token?: string): Promise<HubConnection> {
    console.log("## getInstance");
    if (!SingleHubConnection.instance) {
      SingleHubConnection.instance = await SingleHubConnection.initInstance(
        token
      );
      SingleHubConnection.instance.start();
      console.log("## finish initInstance", SingleHubConnection.instance);
    } else if (SingleHubConnection.instance.state != HubConnectionState.Connected) {
      // todo: handle connection not connected
      SingleHubConnection.instance = await SingleHubConnection.initInstance(
        token
      );
      SingleHubConnection.instance.start();
    }

    console.log("## connection state:", SingleHubConnection.instance.state)


    return SingleHubConnection.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public static async sendMessage(
    senderid: number | undefined,
    senderName: string | undefined,
    chatType: string,
    targetId: number,
    message: string,
    token?: string
  ) {
    var instance = await SingleHubConnection.getInstance(token);
    console.log("XXXX", instance);
    console.log("### invoke", chatType, targetId, message);

    switch (chatType) {
      case "group":
        instance
          .invoke("SendGroupMessage", senderid, senderName, targetId, message)
          .catch((err) => {
            return console.log(err);
          });
        break;
      case "private":
        instance
          .invoke("SendPrivateMessage", senderid, senderName, targetId, message)
          .catch((err) => {
            return console.log(err);
          });
        break;
      case "broadcast":
        instance
          .invoke("BroadcastMessage", senderid, senderName, targetId, message)
          .catch((err) => {
            return console.log(err);
          });
        break;
      default:
        break;
    }
  }

  // disconnect connection
  public static async disconnect() {
    if (SingleHubConnection.instance) {
      SingleHubConnection.instance.stop();
      SingleHubConnection.instance = undefined;
    }
  }

}
