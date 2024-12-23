export class APIService {
  private _authToken: string = "";
  private _headers: Header = {
    Authorization: "",
    ContentType: ""
  };

  constructor(_authToken: string) {
    let base64 = require("base-64");
    this._authToken = base64.encode(_authToken);
  }

  get authToken(): string {
    return this._authToken;
  }

  set authToken(newAuthToken: string) {
    this._authToken = newAuthToken;
  }

  public setHeaders(headers: KeyValue<string, string>[]): APIService {
    for (const i in headers) {
      if (
        headers[i].hasOwnProperty("key") &&
        headers[i].hasOwnProperty("value")
      ) {
        //this._headers.push([headers[i].key, headers[i].value]);
        if(headers[i].key === "Authorization"){
          this._headers.Authorization =  headers[i].value;
        }

        if(headers[i].key === "Content-Type"){
          this._headers.ContentType =  headers[i].value;
        }
      }
    }
    return this;
  }

  get headers (): Header {
    return this._headers;
 }
}

export type KeyValue<T, U> = {
  key: T;
  value: U;
};


export type Header = {
  Authorization : string;
  ContentType: string;
};

