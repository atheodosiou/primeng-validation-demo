/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockServerService } from './mock-server.service';

describe('Service: MockServer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockServerService]
    });
  });

  it('should ...', inject([MockServerService], (service: MockServerService) => {
    expect(service).toBeTruthy();
  }));
});
