import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { Handler, Context } from 'aws-lambda';


async function bootstrap() {
  console.log('boorarp')
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


export const handler: Handler = async (event: any, context: Context) => {

  return {
    test:"sdf"
  }
};