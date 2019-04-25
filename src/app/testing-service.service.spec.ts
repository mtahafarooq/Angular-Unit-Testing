import { TestBed , inject} from '@angular/core/testing';

import { TestingServiceService } from './testing-service.service';

describe('TestingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestingServiceService = TestBed.get(TestingServiceService);
    expect(service).toBeTruthy(); // toBeTruthy() means is it there or not or is it null
  });

  it('should have add function',
  inject([TestingServiceService], (service: TestingServiceService) => {
    expect(service.add).toBeTruthy();
  }));

  it('should add correctly',
  inject([TestingServiceService], (service: TestingServiceService ) => {
    expect(service.add(1, 2)).toEqual(3);
  }));
});
