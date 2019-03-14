// package: protobuf
// file: proto/push.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_push_pb from "../proto/push_pb";

interface IPusherServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    pushMessage: IPusherServiceService_IPushMessage;
}

interface IPusherServiceService_IPushMessage extends grpc.MethodDefinition<proto_push_pb.PushRequest, proto_push_pb.Response> {
    path: string; // "/protobuf.PusherService/PushMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_push_pb.PushRequest>;
    requestDeserialize: grpc.deserialize<proto_push_pb.PushRequest>;
    responseSerialize: grpc.serialize<proto_push_pb.Response>;
    responseDeserialize: grpc.deserialize<proto_push_pb.Response>;
}

export const PusherServiceService: IPusherServiceService;

export interface IPusherServiceServer {
    pushMessage: grpc.handleUnaryCall<proto_push_pb.PushRequest, proto_push_pb.Response>;
}

export interface IPusherServiceClient {
    pushMessage(request: proto_push_pb.PushRequest, callback: (error: grpc.ServiceError | null, response: proto_push_pb.Response) => void): grpc.ClientUnaryCall;
    pushMessage(request: proto_push_pb.PushRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_push_pb.Response) => void): grpc.ClientUnaryCall;
    pushMessage(request: proto_push_pb.PushRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_push_pb.Response) => void): grpc.ClientUnaryCall;
}

export class PusherServiceClient extends grpc.Client implements IPusherServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public pushMessage(request: proto_push_pb.PushRequest, callback: (error: grpc.ServiceError | null, response: proto_push_pb.Response) => void): grpc.ClientUnaryCall;
    public pushMessage(request: proto_push_pb.PushRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_push_pb.Response) => void): grpc.ClientUnaryCall;
    public pushMessage(request: proto_push_pb.PushRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_push_pb.Response) => void): grpc.ClientUnaryCall;
}
