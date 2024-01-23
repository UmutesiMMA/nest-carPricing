import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class SerializerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('Runnning before the handler is reached', context);
    return next.handle().pipe(
      map((data: any) => {
        console.log('running after the handler is executed', data);
      }),
    );
  }
}
