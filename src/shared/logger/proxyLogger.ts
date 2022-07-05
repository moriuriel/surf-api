import { Logger } from '@nestjs/common';

export class ProxyLogger {
  public static createProxyLogger(service: string): Logger {
    return new Logger(service);
  }
}
