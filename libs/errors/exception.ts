import { RpcException } from '@nestjs/microservices';

export class ConflictRpcException extends RpcException {
  constructor(message = 'Conflict occurred!') {
    super({
      statusCode: 409,
      message: message,
    });
  }
}

export class NotFoundRpcException extends RpcException {
  constructor(message = 'Resource not found!') {
    super({
      statusCode: 404,
      message: message,
    });
  }
}
