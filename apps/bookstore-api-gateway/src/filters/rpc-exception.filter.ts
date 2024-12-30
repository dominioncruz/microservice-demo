import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';

@Catch(RpcException)
export class CustomRpcExceptionFilter implements RpcExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    const errorDetails = exception.getError() as {
      statusCode: number;
      message: string;
    };

    const statusCode = errorDetails.statusCode || 500; // Default to 500 if undefined
    const message = errorDetails.message || 'Internal server error';

    // Return error details as observable
    return throwError(() => ({
      statusCode: statusCode,
      message: message,
    }));
  }
}
