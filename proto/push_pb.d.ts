// package: protobuf
// file: proto/push.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class PushRequest extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): void;

    getEventtime(): number;
    setEventtime(value: number): void;

    getPayload(): string;
    setPayload(value: string): void;

    getPayloadkey(): string;
    setPayloadkey(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PushRequest): PushRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushRequest;
    static deserializeBinaryFromReader(message: PushRequest, reader: jspb.BinaryReader): PushRequest;
}

export namespace PushRequest {
    export type AsObject = {
        topic: string,
        eventtime: number,
        payload: string,
        payloadkey: string,
    }
}

export class Response extends jspb.Message { 
    getIssuccess(): boolean;
    setIssuccess(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        issuccess: boolean,
    }
}
