import { Global, Module } from '@nestjs/common';
import { CustomConfigService } from './config.service';

@Global()
@Module({
  providers: [CustomConfigService],
  exports: [CustomConfigService],
})
export default class CustomConfigModule {}
