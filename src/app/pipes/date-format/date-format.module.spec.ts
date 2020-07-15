import { DateFormatModule } from './date-format.module';

describe('DateFormatModule', () => {
  let dateFormatModule: DateFormatModule;

  beforeEach(() => {
    dateFormatModule = new DateFormatModule();
  });

  it('should create an instance', () => {
    expect(dateFormatModule).toBeTruthy();
  });
});
