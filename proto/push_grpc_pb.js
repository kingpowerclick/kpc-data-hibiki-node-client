// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_push_pb = require('../proto/push_pb.js');

function serialize_protobuf_PushRequest(arg) {
  if (!(arg instanceof proto_push_pb.PushRequest)) {
    throw new Error('Expected argument of type protobuf.PushRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_PushRequest(buffer_arg) {
  return proto_push_pb.PushRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuf_Response(arg) {
  if (!(arg instanceof proto_push_pb.Response)) {
    throw new Error('Expected argument of type protobuf.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_Response(buffer_arg) {
  return proto_push_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var PusherServiceService = exports.PusherServiceService = {
  pushMessage: {
    path: '/protobuf.PusherService/PushMessage',
    requestStream: false,
    responseStream: false,
    requestType: proto_push_pb.PushRequest,
    responseType: proto_push_pb.Response,
    requestSerialize: serialize_protobuf_PushRequest,
    requestDeserialize: deserialize_protobuf_PushRequest,
    responseSerialize: serialize_protobuf_Response,
    responseDeserialize: deserialize_protobuf_Response,
  },
};

exports.PusherServiceClient = grpc.makeGenericClientConstructor(PusherServiceService);
